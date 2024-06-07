import Image from "next/image";
import { Navbar } from "./components/Molecules/navbar";

import background from "./theatre-background.png";
import MovieGrid from "./components/Organisms/moviegrid";


export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen text-white font-bold text-center">  
        <Navbar />
      <div className="flex flex-col items-center min-h-screen bg-fill bg-no-repeat ">
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
      
      <div className="w-3/4 flex flex-col overflow-hidden no-scrollbar overflow-y-auto">
        <MovieGrid />
      </div>
      
      </div>
    </div>
  );
}
