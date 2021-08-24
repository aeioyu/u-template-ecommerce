import React from 'react';

const InputWithLabel = () => {
  return (
    <div>
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        type="text"
        name="email"
        id="email"
        className="block w-full bg-gray-100 border-gray-100 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm hover:bg-gray-200"
        placeholder="you@example.com"
      />
    </div>
  );
};

export default InputWithLabel;
