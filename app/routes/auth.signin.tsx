/* eslint-disable @typescript-eslint/consistent-type-imports */
import { loginUser } from '~/services/auth';
import Input from '~/components/atoms/Input';
import { Link, Form } from '@remix-run/react';
import { Button } from '~/components/atoms/Button';
import { createUserSession } from '~/utils/session';
import { ActionFunctionArgs } from '@remix-run/node';

export let action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const registerData: any = Object.fromEntries(formData);

  try {
    const response = await loginUser(registerData);
    const { user, token } = response.data.data;

    return createUserSession({ user, token }, '/');
  } catch (err: any) {
    const errorMessage = err.response.data.message;
    console.log(errorMessage);
  }
};

const SingIn = () => {
  return (
    <>
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center">
          Sign In
        </h3>
        <Form className="space-y-6" method="post">
          <div>
            <Input
              name="email"
              label="Email"
              type="text"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <Input
              name="password"
              label="Password"
              type="password"
              placeholder="Your password..."
              required
              minLength={8}
            />
          </div>
          <div className="flex flex-col">
            <Button label="Login to your account" type="submit" />
            <div className="text-sm pt-5 font-medium text-gray-500 dark:text-gray-300 flex justify-center">
              Not registered?
              <Link
                to="/auth/signup"
                className="text-blue-700 hover:underline dark:text-blue-500 pl-2"
              >
                Create account
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default SingIn;
