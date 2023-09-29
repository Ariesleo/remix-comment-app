import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";




export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to comment app</h1>
      <Link to="/comments">Comments</Link>
    </div>
  );
}
