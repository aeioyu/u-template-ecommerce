import Layout from '@/components/layouts/Layout';
import Text from '@/components/ui/Text';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import { NextPage } from 'next';
import React from 'react';

const people = [
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
];

const ListingTable: NextPage = () => {
  return (
    <Layout>
      <section>
        <Text as="h2" variant="text-heading-2" className="pb-2" bold>
          Grid List
        </Text>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {people.map((person) => (
            <li
              key={person.email}
              className="flex flex-col col-span-1 text-center bg-white divide-y divide-gray-200 rounded-lg shadow"
            >
              <div className="flex flex-col flex-1 p-8">
                <img
                  className="flex-shrink-0 w-32 h-32 mx-auto rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
                <dl className="flex flex-col justify-between flex-grow mt-1">
                  <dt className="sr-only">Title</dt>
                  <dd className="text-sm text-gray-500">{person.title}</dd>
                  <dt className="sr-only">Role</dt>
                  <dd className="mt-3">
                    <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                      {person.role}
                    </span>
                  </dd>
                </dl>
              </div>
              <div>
                <div className="flex -mt-px divide-x divide-gray-200">
                  <div className="flex flex-1 w-0">
                    <a
                      href={`mailto:${person.email}`}
                      className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border border-transparent rounded-bl-lg hover:text-gray-500"
                    >
                      <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                      <span className="ml-3">Email</span>
                    </a>
                  </div>
                  <div className="flex flex-1 w-0 -ml-px">
                    <a
                      href={`tel:${person.telephone}`}
                      className="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 border border-transparent rounded-br-lg hover:text-gray-500"
                    >
                      <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                      <span className="ml-3">Call</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default ListingTable;
