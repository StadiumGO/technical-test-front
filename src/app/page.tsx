"use client"
import Header from "./components/Header";
import Movies from "./movies/page";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex max-md:flex-col md:flex-wrap items-center max-xl:justify-center xl:justify-end gap-10 md:gap-8 p-8 max-md:mt-20 md:ml-[25%]">
        <div className="main-bg max-h-screen"></div>
        <Movies />
      </main>
    </>
  );
}

export default Home;