import { FC } from "react";

export const SearchBar: FC = () =>
{
  return (
    <div className="relative m-4">
      <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input
        type="search"
        id="default-search"
        className="block p-3 pl-5 w-full text-sm text-gray-900 rounded-full
        focus:outline-none focus:ring focus:ring-gray-300 overflow-hidden"
        placeholder="Search..."
        required
      />
    </div>
  )
}
