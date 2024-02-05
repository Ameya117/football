import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {

    const [icon, setIcon] = useState("menu-outline");
    const handleMenu = () => {
        let list = document.querySelector('ul');
        icon === 'menu-outline' ? (setIcon("close-outline"), list.classList.add("top-[80px]"), list.classList.add('opacity-100'),list.classList.add('bg-blue-950'),list.classList.add("h-full"),list.classList.add('z-10')) : (setIcon("menu-outline"), list.classList.remove("top-[80px]"), list.classList.remove('opacity-100'),list.classList.remove('bg-blue-950'),list.classList.remove("h-full"),list.classList.remove('z-10'),list.classList.remove('fixed'))
    }
    return (
        <>

            <nav className='text-white p-5 shadow font-bold md:flex md:items-center md:justify-between border-b-4 border-indigo-500'>
                <div className="flex justify-between items-center bg-b">

                    <span className="flex items-center justify-center h-16 cursor-pointer">
                        <Link className='mx-4 text-3xl' to="/">FTBL</Link>
                    </span>
                    <span className="text-3xl mx-2 cursor-pointer md:hidden ">
                        <ion-icon name={icon} onClick={handleMenu}></ion-icon>
                    </span>

                </div>
                <div>
                    <ul className='md:flex md:items-center  md:z-auto md:static absolute w-full left-0  md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-9 top-[-400px] transition-all ease-in duration-500 '>
                        <li className="mx-4 my-6 md:my-0">
                            <Link to="/home" className="group text-lg text-black-600 transition duration-300 md:text-lg lg:text-2xl">
                                Home
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-slate-950"></span>
                            </Link>
                        </li>
                        <li className="mx-4 my-6 md:my-0">

                            <Link to="/about" className="group text-lg d q text-dark-600 transition duration-300 md:text-lg lg:text-2xl">
                                About
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-slate-950"></span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className="px-6 py-2 mx-4 rounded-2xl hidden md:block hover:bg-indigo-900" type="button"><i className="fa-solid fa-circle-half-stroke "></i></button>
                </div>
            </nav>

        </>
    )
}

export default Navbar
