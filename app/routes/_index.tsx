import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to comment app</h1>
      <Link to="/addcomments" className="text-blue-500 hover:underline">
        Add Comments
      </Link>
      <Link to="/viewcomments" className="text-blue-500 hover:underline">
        View Comments
      </Link>
    </div>
  );
}
