'use client'
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { useState } from "react"


export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
      };
    return (

       
    <nav className="w-full relative flex items-center justify-between max-w-6xl mx-auto px-4 py-5">
        <Link href="/" className="font-bold text-3xl">
            LuisJohn<span className="text-primary">.Pro</span>
        </Link>

        {/* <ul className="flex gap-6">
            <li><Link href="/" className="font-bold text-sm">Projects</Link></li>
            <li><Link href="/" className="font-bold text-sm">Projects</Link></li>
            <li><Link href="/" className="font-bold text-sm">Projects</Link></li>
            <li><Link href="/" className="font-bold text-sm">Projects</Link></li>
        </ul> */}
        <ModeToggle/>
    </nav>

    // <nav className="bg-gray-800 shadow-lg w-full justify-between mx-auto px-4 py-5">
    //   <div className="container mx-auto px-4">
    //     <div className="flex justify-between items-center py-4">
    //     <Link href="/" className="font-bold text-3xl">
    //         LuisJohn<span className="text-primary">.Pro</span>
    //     </Link>

    //       <div className="lg:hidden">
    //         <button onClick={toggleNavbar} className="text-white focus:outline-none focus:text-white">
    //           <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
    //             {isOpen ? (
    //               <path
    //                 fillRule="evenodd"
    //                 clipRule="evenodd"
    //                 d="M4 6h16v2H4V6zm16 5H4v-2h16v2zm0 5H4v-2h16v2z"
    //               />
    //             ) : (
    //               <path
    //                 fillRule="evenodd"
    //                 clipRule="evenodd"
    //                 d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
    //               />
    //             )}
    //           </svg>
    //         </button>
    //       </div>
    //       <div className="hidden lg:flex lg:items-center lg:w-auto">
    //         <div className="text-sm">
    //           <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-10">
    //             Home
    //           </a>
    //           <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-10">
    //             About
    //           </a>
    //           <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300">
    //             Contact
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {isOpen && (
    //     <div className="lg:hidden">
    //       <div className="px-2 pt-2 pb-3">
    //         <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
    //           Home
    //         </a>
    //         <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
    //           About
    //         </a>
    //         <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300">
    //           Contact
    //         </a>
    //         <ModeToggle/>
    //       </div>
    //     </div>
    //   )}
    // </nav>
    );
}