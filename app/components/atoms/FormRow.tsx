import React from 'react';

interface FormRowProps {
  type: string;
  label: string;
  isTextarea?: boolean;
  rows?: any;
}

const FormRow: React.FC<FormRowProps> = ({ type, label, isTextarea, rows }) => {
  return (
    <div className="relative z-0 w-full mb-6 group">
      <label
        htmlFor={`floating_${type}`}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      {isTextarea ? (
        <textarea
          id="message"
          rows={rows ? rows : '4'}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
      ) : (
        <input
          type={type}
          name={`floating_${type}`}
          id={`floating_${type}`}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=" "
          required
        />
      )}
    </div>
  );
};

export default FormRow;
