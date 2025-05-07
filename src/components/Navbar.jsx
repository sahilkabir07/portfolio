import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import LOGO from "../assets/name.jpg"
const Navbar = () => {
    return (
        <nav className='flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <a href="/" aria-label='Home'>
                    <img src={LOGO} className='mx-2 ' width={70} height={32} alt="logo" />
                </a>
            </div>
            <div className='m-8 flex items-center
             justify-center gap-4 text-2xl'>
                <a href="www.linkedin.com/in/sahil-akhtar-8a99482bb" target='_blank' rel='noopener noreferrer' aria-label='Linkedin'>
                    <FaLinkedin />
                </a>
                <a href="https://github.com/sahilkabir07" target='_blank' rel='noopener noreferrer' aria-label='Github'>
                    <FaGithub />
                </a>

            </div>
        </nav>
    )
}

export default Navbar