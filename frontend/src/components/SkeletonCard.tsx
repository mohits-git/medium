export default function SkeletonCard() {
  return (
    <div className="animate-pulse flex flex-col justify-center space-y-2 py-12 border-b border-b-slate-200">

      <div className="flex items-center space-x-1">
        {/* AVATAR */}
        <div className="flex items-center mt-4">
          <svg className="w-10 h-10 me-3 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          <div>
            <div className="h-2.5 bg-gray-200 rounded-full w-32 mb-2"></div>
            <div className="w-48 h-2 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        {/* author and published date */}
        <div className="h-2.5 bg-gray-200 rounded-full w-32"></div>
        <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-24"></div>
      </div>

      <div className="pt-2">
        <div className="h-5 bg-gray-200 rounded-full w-full mb-4"></div>
      </div>

      <div>
        <div className="h-2 bg-gray-200 rounded-full w-[360px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full w-[330px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full w-[300px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full w-[360px]"></div>
      </div>

      <div className="flex items-center pt-8 space-x-2">
        <div className="flex items-center w-full">
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-full"></div>
          <div className="h-2.5 ms-2 bg-gray-200 rounded-full w-80"></div>
          <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-full"></div>
        </div>
      </div>

    </div>
  );
}
