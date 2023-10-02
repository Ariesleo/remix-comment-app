/* eslint-disable @typescript-eslint/consistent-type-imports */
import Comment from '~/components/Comment';
import { fetchComments } from '~/services/comment';
import { LoaderFunctionArgs, json } from '@remix-run/node';
import { getUserFromSession, requireUserSession } from '~/utils/session';
import { useLoaderData, useNavigate } from '@remix-run/react';
import { Button } from '~/components/atoms/Button';

export async function loader({ request }: LoaderFunctionArgs) {
  await requireUserSession(request);

  // access the session data
  const session = await getUserFromSession(request);
  const token = session.token;

  try {
    const responseData = await fetchComments(token);

    return responseData.data.data;
  } catch (err: any) {
    const errorMessage = err.response?.data?.message || 'An error occurred';

    throw json(
      { message: errorMessage },
      { statusText: err.response?.data?.code || 'Internal Server Error' }
    );
  }
}

const ViewComments = () => {
  const data = useLoaderData<typeof loader>() as any;
  const totalComments = data.length;
  const isEmpty = data.length <= 0;

  const navigate = useNavigate();

  return (
    <>
      {isEmpty ? (
        <div>
          <h2>Oh! snap. No data available</h2>
          <Button
            label="add comment"
            onClick={() => {
              navigate('/addcomments');
            }}
          />
        </div>
      ) : (
        <div
          style={{ height: '90vh', overflowY: 'auto' }}
          className="scrollbar"
        >
          <section className=" dark:bg-gray-900 py-8 lg:py-16 antialiased">
            <div className="max-w-2xl mx-auto px-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                  Discussion ({totalComments})
                </h2>
              </div>
              {data.map((element: any) => {
                return (
                  <Comment
                    key={element.id}
                    name={element.commenterName}
                    content={element.content}
                    date={element.createdAt}
                  />
                );
              })}
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default ViewComments;
