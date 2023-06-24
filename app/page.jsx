import Image from 'next/image';

const getGameData = async () => {
  const response = await fetch(
    'https://api.rawg.io/api/games?key=caf34253bdda4c7bad1268b82184f745'
  );
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  const data = await response.json();
  return data?.results;
};

export default async function Home() {
  const games = await getGameData();
  return (
    <>
      <h1 className="flex justify-center w-3/4 md:w-2/3 lg:w-3/4 xl:w-3/4  font-bold md:text-2xl lg:text-3xl xl:text-4xl text-xl text-center text-white py-6 border border-slate-600 rounded-md mt-6  mx-auto ">
        Propular Games Right Now
      </h1>
      <main className=" min-h-screen m-10 rounded-md grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {games?.map((game) => {
          return (
            <div
              className="border border-slate-600 rounded-md p-2 hover:bg-slate-800 overflow-hidden hover:scale-105 transition-all duration-200 ease-in "
              key={game?.id}
            >
              <h1 className="text-white pb-3 ps-2">{game?.name}</h1>
              <div className="aspect-video relative">
                <Image
                  className="object-cover rounded-md hover:scale-105 transition-all duration-50"
                  src={game?.background_image}
                  fill
                  alt={game?.name}
                />
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}
