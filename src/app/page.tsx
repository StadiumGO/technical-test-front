import Image from "next/image";
import { Navbar } from "./components/Molecules/navbar";

import background from "./theatre-background.png";
import MovieGrid from "./components/Organisms/moviegrid";


export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen text-white font-bold text-center">  
        <Navbar />
      <div className="flex flex-col content-center items-center min-h-screen bg-fill bg-no-repeat ">
      <Image
          src={background}
          alt="theatre-background"
          placeholder="blur"
          fill
          style={{
            zIndex: -1,
          }}
          className=""
        />
      
<<<<<<< HEAD
      <div className="w-[80%] flex flex-col justify-center content-center items-center">
=======
      <div className="w-2/4 flex flex-col overflow-hidden no-scrollbar overflow-y-auto lg:w-full lg:ml-64 lg:flex-grow-1">
>>>>>>> 9130e4f (first try of the desktop display)
        <MovieGrid />
      </div>
      
      </div>
    </div>
  );
}
