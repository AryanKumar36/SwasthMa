import Sidebar from "./SideBar";

export const Chemist = () => {
  return (
    <div className='flex flex-row justify-start w-full'>
    <Sidebar />
    <div className='flex flex-row justify-center w-full mt-10 '>
    <div style={{paddingLeft:200,paddingtop:50}}>
    <div class="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
  <div
    class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
    <img
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
      alt="card-image" class="object-cover w-full h-full" />
  </div>
  <div class="p-6">
    <h6
      class="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
      Rohini, New Delhi
    </h6>
    <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Guru Kripa Chemist and Druggist
    </h4>
    <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      Timing: 10:00 AM- 10:00 PM
      <br />
      Address : B-67, Sector-1, Rohini, New Delhi-110078
    </p>
    <a href="#" class="inline-block"><button
        class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 bg-blue-300 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
        type="button">
        8700925205<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
        </svg></button></a>
  </div>
</div>  
</div>
      </div>
      
      </div>
  );
};

   