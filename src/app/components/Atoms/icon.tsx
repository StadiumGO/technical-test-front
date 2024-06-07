import Image from "next/image";
import React from "react";

import Logo from '../../Icon.svg'

export const Icon = () => {
  return (
    <Image
      src={Logo}
      alt="icon-logo"
      width={50}
      height={50}
      className="lg:w-72 lg:h-24 lg:mb-4"
    />
  );
};
