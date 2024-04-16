import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import Sidebar from './SideBar';

export const CareTaker = ({careTaker}) => {

    return (
        <div className='flex flex-row justify-start w-full'>
    <Sidebar />
    <div className='flex flex-row justify-end w-full'>
        <section className="container mx-auto p-10 md:p-20 antialiased">
            <article className="flex flex-wrap shadow-lg mx-auto max-w-3xl group cursor-pointer transform duration-500 hover:-translate-y-1">
                <img className="w-full max-h-[400px] object-cover md:w-52" src={careTaker.imageUrl} alt="" />
                <div className='min-w-full'>
                    <div className="p-5 pb-10 min-w-full">
                        <h1 className="text-2xl font-semibold text-gray-800 mt-4">
                            {careTaker.name}
                        </h1>
                        <p className="text-xl text-gray-400 mt-2 leading-relaxed">
                            {careTaker.location}
                        </p>
                    </div>
                    <div className="bg-blue-50 p-5">
                        <div className="sm:flex flex-row sm:justify-between">
                            <div>
                                <div className="text-lg text-gray-700">
                                    <span className="text-gray-900 font-bold">{careTaker.distance}km</span> from your location
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
                                Mothly charges: ₹{careTaker.fees}
                            </div>
                            <Link to='/care-taker/username'>
                                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-50 flex items-center justify-center gap-2">
                                    <FaWhatsapp />
                                    Contact
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </section>
        </div>
        </div>
    )
}