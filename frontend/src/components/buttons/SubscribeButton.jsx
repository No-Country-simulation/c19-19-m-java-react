"use client";
import React from "react";
import { useRouter } from "next/navigation";
import subscribe from "../../Image/subscribe.webp";
import Image from "next/image";

const SubscribeButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/register?subscription=true");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-32 right-8 w-36 h-36 border-solid border-y-2 border-yellow-500 text-white rounded-full flex items-center justify-center shadow-lg  hover:border-green-600 hover:bg-[rgba(25,225,25,0.25)] transition-transform transform hover:rotate-12 ease-in-out duration-300"
      aria-label="Suscríbete"
    >
      <Image className="drop-shadow-lg size-11/12" src={subscribe} loading="lazy" />
    </button>
  );
};

export default SubscribeButton;
