import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="place-content-center">
                <nav className='bg-red-100 h-20 flex place-content-between '>
                    <div className="flex items-center justify-center h-16">
                        <Link className='mx-2 mt-3 text-2xl' to="/">OneFootball</Link>

                    </div>
                    <div className="flex items-center justify-center h-16">
                        <ul className='flex place-content-center text-2xl'>
                            <Link to="/home" className="group mx-2 mt-3 text-black-600 transition duration-300">
                                Home
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-slate-950"></span>
                            </Link>
                            <Link to="/about" className="group mx-2 mt-3 text-dark-600 transition duration-300">
                                About
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-slate-950"></span>
                            </Link>

                        </ul>
                    </div>
                    <div className="flex items-center justify-center h-16">
                        <button className="hover:bg-white-700 rounded-full place-content-center mx-8 mt-3 h-12 px-6  text-xl" type="button"><i className="fa-solid fa-circle-half-stroke"></i></button>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
