import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault(); 

    }

  return (
    <div className="max-w-screen-sm mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white shadow-lg rounded-lg">
      <p className="text-3xl font-semibold text-gray-900 leading-tight">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-500 mt-2 text-sm sm:text-base">
        Stay Ahead in Style – Subscribe & Enjoy 20% Off!
      </p>
      <form className="mt-8 sm:flex sm:max-w-md mx-auto" onSubmit={onSubmitHandler}>
        <div className="w-full sm:w-auto sm:flex-1">
          <input
            type="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition ease-in-out duration-200"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-black text-white text-xs uppercase font-semibold rounded-lg shadow hover:bg-gray-800 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 ease-in-out"
          >
            Subscribe
          </button>
        </div>
      </form>
      <p className="text-xs text-gray-400 mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  )
}

export default NewsletterBox;
