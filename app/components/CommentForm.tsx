import { Form } from '@remix-run/react';
import { Button } from './atoms/Button';
import Input from './atoms/Input';
import Textarea from './atoms/Textarea';

const CommentForm = () => {
  return (
    <>
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-xl my-4 font-bold text-gray-900 dark:text-white text-center">
          Add Comments
        </h2>
        <div>
          <Form action="/addcomments" method="post">
            <Input
              label="Name"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <Textarea
              label="Comment"
              name="comment"
              placeholder="Enter your comment"
              rows={4}
            />
            <div className="flex flex-col">
              <Button type="submit" label="Post comment" />
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CommentForm;
