import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="fixed z-20 bg-primary flex justify-center items-center md:flex-col gap-8 text-center h-28 md:h-screen md:p-10 w-full md:w-1/4 md:min-w-[300px]">
        <div className="w-12 md:w-[25%] md:max-w-[70px]">
            <Image src="/video-logo.svg" alt="video-logo" width="200" height="200" />
        </div>
        <h1 className="font-space-grotesk font-bold text-5xl 2xl:text-5xl text-secondary">MOVIE NIGHT</h1>
    </header>
  );
}

export default Header;