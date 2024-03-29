import React from "react";
import Image from "next/image";

export const UserList = ({ users }) => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
        User Profiles
        </h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">Top Contributors</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user: any) => (
          <div
            key={user.id}
            className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700"
          >
            <div className="flex items-center gap-x-4">
              <Image
                width={800}
                height={500}
                className="rounded-full size-20"
                src={user.avatar_url}
                alt="Image Description"
              />
              <div className="grow">
                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                  {user.login}
                </h3>
                <p className="text-xs uppercase text-gray-500">Founder / CEO</p>
              </div>
            </div>

            <p className="mt-3 text-gray-500">
              I am an ambitious workaholic, but apart from that, pretty simple
              person.
            </p>

            <div className="mt-3 space-x-1">{/* Social links */}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
