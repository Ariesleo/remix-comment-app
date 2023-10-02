const Comment = ({
  name,
  content,
  date,
}: {
  name: string;
  content: string;
  date: string;
}) => {
  const nameParts = name.split(' ');

  let abbreviation = '';

  for (const part of nameParts) {
    abbreviation += part.charAt(0).toUpperCase();
  }

  const originalDate = new Date(date);
  const options: any = { year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = originalDate.toLocaleDateString('en-US', options);

  return (
    <article className="p-6 text-base border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
            <div className="mr-3  inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-600">
              <span className="font-medium text-xs text-gray-600 dark:text-gray-300">
                {abbreviation}
              </span>
            </div>
            {name}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <time dateTime="2022-06-23" title={formattedDate}>
              {formattedDate}
            </time>
          </p>
        </div>
      </footer>
      <p className="text-gray-500 dark:text-gray-400">{content}</p>
    </article>
  );
};

export default Comment;
