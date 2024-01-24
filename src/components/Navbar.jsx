import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {

    const [icon, setIcon] = useState("menu-outline");
    const handleMenu = () => {
        let list = document.querySelector('ul');
        icon === 'menu-outline' ? (setIcon("close-outline"), list.classList.add("top-[80px]"), list.classList.add('opacity-100')) : (setIcon("menu-outline"), list.classList.remove("top-[80px]"), list.classList.remove('opacity-100'))
    }
    return (
        <>
            <div className="bg-red-100">
                <nav className='bg-red-100 p-5 shadow font-bold md:flex md:items-center md:justify-between'>
                    <div className="flex justify-between items-center">

                        <span className="flex items-center justify-center h-16 cursor-pointer">
                            <Link className='mx-4 text-2xl' to="/">OneFootball</Link>

                        </span>
                        <span className="text-3xl mx-2 cursor-pointer md:hidden ">
                            <ion-icon name={icon} onClick={handleMenu}></ion-icon>
                        </span>

                    </div>
                    <div>
                        <ul className='md:flex md:items-center  md:z-auto md:static absolute bg-red-100 w-full left-0  md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-9 top-[-400px] transition-all ease-in duration-500 '>

                            <li className="mx-4 my-6 md:my-0">
                                <Link to="/home" className="group text-black-600 transition duration-300">
                                    Home
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-slate-950"></span>
                                </Link>
                            </li>
                            <li className="mx-4 my-6 md:my-0">

                                <Link to="/about" className="group d q text-dark-600 transition duration-300">
                                    About
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-slate-950"></span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>

                        <button className="bg-red-400 px-6 py-2 mx-4 hover:bg-red-500 rounded-2xl hidden md:block" type="button"><i className="fa-solid fa-circle-half-stroke "></i></button>
                    </div>





                </nav>
            </div>
        </>
    )
}

export default Navbar
