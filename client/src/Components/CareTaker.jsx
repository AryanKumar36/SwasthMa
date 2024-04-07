import React from 'react';
import { Link } from 'react-router-dom';

export const CareTaker = ({name,age,location,charges,status,id,rating}) => {

  return (
    <section className="container mx-auto p-10 md:p-20 antialiased">
      <article className="flex flex-wrap shadow-lg mx-auto max-w-3xl group cursor-pointer transform duration-500 hover:-translate-y-1">
        <img className="w-full max-h-[400px] object-cover md:w-52" src="data:image/jpeg;base64,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" alt="" />
        <div className='min-w-full'>
          <div className="p-5 pb-10 min-w-full">
            <h1 className="text-2xl font-semibold text-gray-800 mt-4">
              Daimaa Savitri
            </h1>
            <p className="text-xl text-gray-400 mt-2 leading-relaxed">
              New Delhi, Laxmi Nagar
            </p>
          </div>
          <div className="bg-blue-50 p-5">
            <div className="sm:flex flex-row sm:justify-between">
              <div>
                <div className="text-lg text-gray-700">
                  <span className="text-gray-900 font-bold">7km</span> from your location
                </div>
                <div className="flex items-center min-w-full">
                  <div className="flex">
                    <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                      <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
                    </svg>
                    <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                      <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
                    </svg>
                    <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                      <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
                    </svg>
                    <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                      <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
                    </svg>
                  </div>
                  <div className="text-gray-600 ml-2 text-sm md:text-base mt-1">
                    6 reviews
                  </div>
                </div>
              </div>
              <div className="font-bold text-lg text-green-600 mt-2">
                Mothly charges: ₹1000
              </div>
              <Link to='/care-taker/username'>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">
                Open to Hire
              </button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}