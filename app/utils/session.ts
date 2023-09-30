import { createCookieSessionStorage, redirect } from '@remix-run/node';

const SESSION_SECRET = process.env.SESSION_SECRET || '';

const sessionStorage = createCookieSessionStorage({
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    secrets: [SESSION_SECRET],
    sameSite: 'lax',
    maxAge: 30 * 24 * 60 * 60,
    httpOnly: true,
  },
});

const createUserSession = async (
  { user, token }: any,
  redirectPath: string
) => {
  const session = await sessionStorage.getSession();
  session.set('userwithtoken', { user, token });
  return redirect(redirectPath, {
    headers: {
      'Set-Cookie': await sessionStorage.commitSession(session),
    },
  });
};

const getUserFromSession = async (request: any) => {
  const session = await sessionStorage.getSession(
    request.headers.get('Cookie')
  );
  const data = session.get('userwithtoken');

  if (!data) {
    return null;
  }

  return data;
};

const requireUserSession = async (request: any) => {
  const data = await getUserFromSession(request);
  if (!data) {
    throw redirect('/auth/signup');
  }
  return data;
};

export { createUserSession, getUserFromSession, requireUserSession };
