import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/atoms/Button";



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
      {/* <FormRow type="email" label="Email adress" /> */}
      <Button label="Button" />
    </div>
  );
}
