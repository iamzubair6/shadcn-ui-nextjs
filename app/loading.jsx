import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <>
      <Skeleton className="bg-gray-200 opacity-5 h-20 w-1/2 flex  justify-center md:w-2/3 lg:w-3/4 xl:w-2/5 mt-6  mx-auto "></Skeleton>
      <main className=" min-h-screen m-10 rounded-md grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
        {Array?.from({ length: 20 }, (_, index) => index + 1)?.map((id) => {
          return (
            <div
              className="border border-slate-600 rounded-md p-2 hover:bg-slate-800 overflow-hidden hover:scale-105 transition-all duration-200 ease-in "
              key={id}
            >
              <Skeleton className="h-6 w-2/3 opacity-5 bg-gray-200"></Skeleton>
              <Skeleton className="h-48 w-full opacity-5 rounded-md bg-gray-400 mt-4"></Skeleton>
            </div>
          );
        })}
      </main>
    </>
  );
}
