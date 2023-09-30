import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from '@remix-run/react';

import styles from '~/styles/app.css';
import { Button } from './components/atoms/Button';
import TopNav from './components/TopNav';

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  { rel: 'stylesheet', href: styles },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <TopNav />
        </header>
        <main className="center-content">
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

// handling the error boundry
export function ErrorBoundary() {
  const navigate = useNavigate();

  const error: any = useRouteError();
  const message = error?.data.message;

  if (isRouteErrorResponse(error)) {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          <main>
            <div className="w-full max-w-m p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
              <h1 className="text-2xl  font-extrabold dark:text-white">
                {error.statusText}
              </h1>
              <p className="my-4">{message}</p>
              <Button
                label="Return"
                onClick={() => {
                  navigate(-1);
                }}
              >
                Return
              </Button>
            </div>
          </main>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
