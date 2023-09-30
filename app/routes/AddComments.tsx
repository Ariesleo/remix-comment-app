/* eslint-disable @typescript-eslint/consistent-type-imports */
import CommentForm from '~/components/CommentForm';
import { LoaderFunction } from '@remix-run/node';

export let action: LoaderFunction = async ({ request }) => {
  const formData = await request.formData();
  const commentData = Object.fromEntries(formData);

  const data = {
    content: commentData.comment,
    userId: '2cccc02b-604d-4b67-8921-f671d8edb354',
    commenterName: commentData.name,
  };

  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJ0ZXN0NEBnbWFpbC5jb20iLCJpYXQiOjE2OTU5OTA3MTMsImV4cCI6MTY5NjA3NzExM30.FGjA9gUxKvzcNSHCS-idSprWT6jjniFuUJ9AyS_Qeh8`;
  // Handle posting comment to the backend
  const response = await fetch('http://localhost:8080/api/v1/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    // For JSON data:
    const responseData = await response.json();
    console.log(responseData); // This will contain the parsed JSON data.
  } else {
    // Handle the case where the request was not successful (HTTP error).
    console.error('Request failed with status:', response.status);
  }

  return commentData;
};

const AddComments = () => {
  return (
    <>
      <CommentForm />
    </>
  );
};

export default AddComments;