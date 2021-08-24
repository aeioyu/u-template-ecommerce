import React from 'react';

import Text from './Text';

const SubHeader = () => {
  return (
    <div className="flex flex-col">
      <Text as="h2" variant="text-heading-2" className="pb-2" bold>
        Table List
      </Text>
      <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
        <h3 className="text-lg font-medium leading-6 text-gray-900">120 items</h3>
        <div className="mt-3 sm:mt-0 sm:ml-4">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create new job
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
