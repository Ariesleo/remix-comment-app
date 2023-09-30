/* eslint-disable @typescript-eslint/consistent-type-imports */
import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  json,
  redirect,
} from '@remix-run/node';
import { addComment } from '~/services/comment';
import CommentForm from '~/components/CommentForm';
import { getUserFromSession, requireUserSession } from '~/utils/session';

export let action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const commentData = Object.fromEntries(formData);

  const session = await getUserFromSession(request);

  const commentPayload = {
    content: commentData.comment,
    userId: session.user.id,
    commenterName: commentData.name,
  };
  const token = session.token;

  try {
    await addComment(commentPayload, token);
    return redirect('/');
  } catch (err: any) {
    const errorMessage = err.response.data.message;
    throw json(
      { message: errorMessage },
      { statusText: err.response.data.code }
    );
  }
};

export async function loader({ request }: LoaderFunctionArgs) {
  return await requireUserSession(request);
}

const AddComments = () => {
  return (
    <>
      <CommentForm />
    </>
  );
};

export default AddComments;
