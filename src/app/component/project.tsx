import Link from "next/link"
import React from "react"
import Image from "next/image";


const Project = () => {
    return (
        <div id="Project">
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>
     </div>
    <div className="flex flex-wrap -m-8">
        {/* Project */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
        <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/assests/project/resume.png"
            width={500} // Width required by Next.js Image
            height={500} // Height required by Next.js Image
/>

          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Resume Builder Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Build your resume
            </h1>
            <p className="leading-relaxed">
                Empowering you to build professional resume
                effortlessly with a sleek, user...
            </p>
            <Link href={"https://editable-resume-builder-muhammd-rahat.vercel.app/"}>
            <p className="leading-relaxed  text-blue-500 hover: underline">View Project..  </p>
            </Link>
          </div>
        </div>
     </div>
     {/* Project */}
     <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
        <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/assests/project/Number Gussing.webp"
            width={500} // Width required by Next.js Image
            height={500} // Height required by Next.js Image
/>

          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              CLI Based Number Guessing Game
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Guess The Number
            </h1>
            <p className="leading-relaxed">
                Challenge yourself with this CLI-Based
                Number Guessing Game! Test your intuition...
            </p>
            <Link href={"https://github.com/rahatkhan90/cli-number-guessing"}>
            <p className="leading-relaxed  text-blue-500 hover: underline">View Project..  </p>
            </Link>
          </div>
        </div>
     </div>
     <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
        <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/assests/project/calculator.jpg"
            width={500} // Width required by Next.js Image
            height={500} // Height required by Next.js Image
/>

          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              CLI Based Simple Calculator
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Calculator
            </h1>
            <p className="leading-relaxed">
                A Powerful CLI-Based Calculator built for
                precision and speed, designed to handle...

            </p>
            <Link href={"https://github.com/rahatkhan90/simple-calculator"}>
            <p className="leading-relaxed  text-blue-500 hover: underline">View Project..  </p>
            </Link>
          </div>
        </div>
     </div>
     </div>
     </div>
</section>

</div>
    
)

}

export default Project