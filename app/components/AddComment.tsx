import { Form } from '@remix-run/react';
import FormRow from './atoms/FormRow';
import { Button } from './atoms/Button';

const AddComment = () => {
  return (
    <>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-4xl font-extrabold dark:text-white">
          Add Comments
        </h2>
        <div>
          <Form action="/comments" method="post">
            <FormRow type="text" label="Enter your name" />
            <FormRow type="text" label="Enter your comment" isTextarea={true} />
            <Button type="submit" label="submit" />
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddComment;
