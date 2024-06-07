import Image from "next/image";

import eyeIcon from "../../eyeIcon.svg";

const Button = () => {
  return (
    <div className="flex flex-col ml-[15em] relative top-10 left-6">
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
