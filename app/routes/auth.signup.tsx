/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Link } from '@remix-run/react';
import Input from '~/components/atoms/Input';
import { registerUser } from '~/services/auth';
import { Button } from '~/components/atoms/Button';
import { createUserSession } from '~/utils/session';
import { ActionFunctionArgs } from '@remix-run/node';

export let action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const registerData: any = Object.fromEntries(formData);

  try {
    const response = await registerUser(registerData);
    const { user, token } = response.data.data;

    return createUserSession({ user, token }, '/');
  } catch (err: any) {
    const errorMessage = err.response.data.message;
    console.log(errorMessage);
  }
};

export default function SignupPage() {
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center">
        Sign Up
      </h3>
      <form method="post">
        <Input
          type="text"
          name="name"
          label="Name"
          placeholder="Jhon Doe"
          required
          minLength={2}
          maxLength={50}
        />
        <Input
          type="email"
          name="email"
          label="Email"
          placeholder="name@company.com"
          required
        />
        <Input
          name="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          required
          minLength={8}
        />
        <div className="flex flex-col">
          <Button label="Register new account" type="submit" />
          <div className="text-sm pt-5 font-medium text-gray-500 dark:text-gray-300 flex justify-center">
            Already have an account?
            <Link
              to="/auth/signin"
              className="text-blue-700 hover:underline dark:text-blue-500 pl-2"
            >
              Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
