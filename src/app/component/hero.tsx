"use client"
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import picture from '../../../public/assests/picture.jpg'

export default function Hero(){
    return(
       
        <section className='text-gray-600 body-font bg-fixed bg-cover bg-center bg-custom bg-opacity-30'>
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <Image
      className="object-cover object-center rounded mx-auto w-[24rem]"
      alt="hero"
      width={600}
      height={500}
      src={picture}
    />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
       {`Hello I'am`}
       
       
       <Typewriter
       options={{
       strings: [
        "Muhammad Rahat Web Developer",
        "UI/UX Designer"],
       autoStart: true,
        loop: true,
        
       }}
       />
       </h1>
       <div className='w-[170px] h-[2px] bg-blue-700'></div>
      <p className="mb-8 leading-relaxed text-white">
       {`I’m a passionate web developer with expertise in HTML, CSS, JavaScript, TypeScript,
       and Next.js. I focus on creating responsive, high-performance applications 
       that offer smooth and engaging user experiences. With clean, maintainable code
       and a keen eye for design, I turn ideas into scalable solutions. 
       Let’s bring your vision to life with precision and creativity.`}
      </p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact
        </button>
        <button className="ml-4 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
          Follow
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>

    )
}