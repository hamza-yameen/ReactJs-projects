import React from 'react'

const Form = ({ searchQuery, setSearchQuery, onFormSubmitHandler }) => {
  return (
    <div className="m-auto w-11/12 py-20 lg:w-1/2">
      <form className="relative w-full" onSubmit={onFormSubmitHandler}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="absolute inset-y-0 right-0 flex items-center px-2"
          type="submit"
        >
          <svg
            className="size-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0 1 14 0z"
            ></path>
          </svg>
        </button>
      </form>
    </div>
  )
}

export default Form
