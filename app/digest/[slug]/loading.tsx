export default function LoadingPage() {
  return (
    <div className="max-w-[900px] mx-auto px-4 sm:px-6 py-16 md:py-24 animate-pulse">
      <div className="h-4 bg-gray-200 w-32 mb-8"></div>
      <div className="h-12 md:h-16 bg-gray-200 w-full mb-4"></div>
      <div className="h-12 md:h-16 bg-gray-200 w-3/4 mb-12"></div>
      <div className="h-[400px] bg-gray-100 w-full mb-12"></div>
      <div className="space-y-6">
        <div className="h-4 bg-gray-200 w-full"></div>
        <div className="h-4 bg-gray-200 w-full"></div>
        <div className="h-4 bg-gray-200 w-5/6"></div>
      </div>
    </div>
  );
}
