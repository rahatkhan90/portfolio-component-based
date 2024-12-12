import Image from "next/image";
import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";
import { RiArrowLeftCircleLine, RiFacebookFill } from "react-icons/ri";

export default function Footer(){
    return(
        <footer className="text-gray-100 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col bg-white">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" >
      
    <Image src="/assests/picture/logo.png" alt="Rahat Khan" width={100} height={100} className="w-{60px} rounded-full" />

      <span className="ml-3 text-xl">{`MuhammadRahat.Portfolio`}</span>
    </a>
    <p className="tex-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      {`© 2024 MuhammadRahat.portfolio`}
     
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    
       <Link
        target="_blank" 
        href={"https://github.com/rahatkhan90"} 
        className="ml-3 text-gray-500">
        <RiFacebookFill className="text-2xl hover:text-[#ff0002]" />

        </Link>
       <Link
        target="_blank" 
        href={"https://github.com/rahatkhan90"} 
        className="ml-3 text-gray-500">
        <RiArrowLeftCircleLine className="text-2xl hover:text-[#ff0002]" />

        </Link>
       <Link
        target="_blank" 
        href={"https://github.com/rahatkhan90"} 
        className="ml-3 text-gray-500">
        <AiOutlineGithub className="text-2xl hover:text-[#ff0002]" />

        </Link>
        </span>
    </div>
</footer>

    )

}