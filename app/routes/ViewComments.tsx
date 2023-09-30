/* eslint-disable @typescript-eslint/consistent-type-imports */
import { LoaderFunctionArgs } from '@remix-run/node';
import { requireUserSession } from '~/utils/session';

export async function loader({ request }: LoaderFunctionArgs) {
  return await requireUserSession(request);
}

function ViewComments() {
  return (
    <div>
      {/* View Comments Content */}
      <h1>View Comments</h1>
      {/* Add your content here */}
    </div>
  );
}

export default ViewComments;
