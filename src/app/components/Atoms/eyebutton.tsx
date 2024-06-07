import Image from "next/image";

import eyeIcon from "../../eyeIcon.svg";

const Button = () => {
  return (
<<<<<<< HEAD
    <div className="flex flex-col ml-[18em] fixed">
=======
    <div className="flex flex-col ml-[15em] relative top-10 left-6 lg:items-center lg:justify-center lg:w-10 lg:h-10 ">
>>>>>>> 9130e4f (first try of the desktop display)
      <button
        onClick=""
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold p-1 border-2 border-black rounded-3xl "
      >
        <Image src={eyeIcon} />
      </button>
    </div>
  );
};

export default Button;
