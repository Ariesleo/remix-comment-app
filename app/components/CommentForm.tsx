import { Form } from '@remix-run/react';
import { Button } from './atoms/Button';
import Input from './atoms/Input';
import Textarea from './atoms/Textarea';

const CommentForm = () => {
  return (
    <>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-4xl font-extrabold dark:text-white">
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
            <Button type="submit" label="submit" />
          </Form>
        </div>
      </div>
    </>
  );
};

export default CommentForm;
