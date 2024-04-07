import React from 'react';
export const Adress = ({ onFormDataChange, formData, onNext, onBack }) => {
return(
<>
<section className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-2">
    <main
      className="flex  justify-center px-8 py-2 sm:px-12 lg:col-span-7 lg:px-16 lg:py-2 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
      <div className='mt-20'>
  <h2 className="sr-only">Steps</h2>

  <div
    className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100"
  >
    <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
      <li className="flex items-center gap-2 bg-white p-2">
        <span
          className="size-6 rounded-full bg-blue-600 text-center text-[10px]/6 font-bold text-white"
        >
          1
        </span>

        <span className="hidden sm:block"> Address </span>
      </li>

      <li className="flex items-center gap-2 bg-white p-2">
        <span className="size-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold"> 2 </span>

        <span className="hidden sm:block"> Role-Specific Details </span>
      </li>
      <li className="flex items-center gap-2 bg-white p-2">
        <span className="size-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold"> 3 </span>

        <span className="hidden sm:block"> Verification </span>
      </li>
    </ol>
  </div>
</div>
        <form action="#" className="mt-20 grid grid-cols-6 gap-6">
          <div className="col-span-6">
            <label htmlFor="Adress" className="block text-sm font-medium text-gray-700"> Address </label>

            <input
              type="text"
              id="Adress"
              name="adress"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              value={formData.adress} onChange={onFormDataChange}
            />
          </div>
          <div className="col-span-6 ">
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Country" className="block text-sm font-medium text-gray-700">
              Country
            </label>

            <input
              type="text"
              id="Country"
              name="country"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            value={formData.country} onChange={onFormDataChange}
            />
          </div>
          </div>

          <div className="col-span-6 sm:col-span-2">
            <label htmlFor="City" className="block text-sm font-medium text-gray-700"> City </label>

            <input
              type="text"
              id="City"
              name="city"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              value={formData.city} onChange={onFormDataChange}
            />
          </div>

          <div className="col-span-6 sm:col-span-2">
            <label htmlFor="Street" className="block text-sm font-medium text-gray-700">
              Street
            </label>

            <input
              type="text"
              id="Street"
              name="street"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              value={formData.Street} onChange={onFormDataChange}
            />
          </div>
          <div className="col-span-6 sm:col-span-2">
            <label htmlFor="ZIP" className="block text-sm font-medium text-gray-700">
              ZIP/Postal Code
            </label>

            <input
              type="text"
              id="ZIP"
              name="zip"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              value={formData.ZIP} onChange={onFormDataChange}
            />
          </div>
          
          <button
             type="submit" onClick={onBack}
             className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600  py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
             >Back
            </button>
              <button
             type="submit" onClick={onNext}
             className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600  py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
             >Next
            </button>
        </form>
      </div>
    </main>
  </div>
</section>
</>
)
};

