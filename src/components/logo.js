"use client";

import Image from "next/image";

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo.png"
        className="h-10 w-auto lg:h-12 transition-transform duration-200 group-hover:scale-105"
        width={100}
        height={100}
        priority
        alt="ECODrIx Logo"
      />
    </div>
  );
};

export default Logo;
