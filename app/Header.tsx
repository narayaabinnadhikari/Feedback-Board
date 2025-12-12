import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <header className="bg-amber-200 p-4 text-black font-bold justify-evenly  items-center flex">
      <Image
        src="/logo.png"
        alt="Feedback Borad Logo"
        width={200}
        height={40}
        priority
        className="center mr-auto"
      />
      <h1 className="text-4xl self-auto mr-auto">Header Here.</h1>
    </header>
  );
}

export default Header