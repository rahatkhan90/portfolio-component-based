'use client'
import Image from 'next/image';
import dynamic from 'next/dynamic';
import picture from '../../../public/assests/picture.jpg'

const Typewriter = dynamic(() => import('typewriter-effect'), { ssr: false });

export default function About() {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image 
          src={picture}
          alt="Description"
  width={500}
  height={300}
/>

          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <div className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              <h1>About me</h1>
              <br />
              <Typewriter
                options={{
                  strings: [
                    "Muhammad Rahat Web Developer",
                    "UI/UX Designer"
                  ],
                  autoStart: true,
                  loop: true
                }}
              />
            </div>
            <p className="mb-8 leading-relaxed">
            {`A passionate and detail-oriented UI/UX Designer with [1] years of experience in creating intuitive and engaging digital experiences. I specialize in designing user-friendly interfaces and seamless user journeys that not only look good but also function flawlessly. My focus is on understanding user needs and translating them into elegant designs that solve real-world problems..`}
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                {`Contact`}
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                {`Follow`}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
