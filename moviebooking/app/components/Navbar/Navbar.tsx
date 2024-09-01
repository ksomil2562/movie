import React from 'react';
import Link from 'next/link';
import './Navbar.css';
import { RiArrowDropDownFill } from "react-icons/ri";
import { BiUser, BiUserCircle } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { IconBaseProps } from "react-icons/lib";

function Navbar() {
    return (
        <nav>
            <div className='left'>
                <img src="assets\logo-removebg-preview.png" alt="logo" width={140} height={100} />
                <div className='searchbox'>
                    <span className="searchbtn">
                        <BiSearch />
                    </span>
                    <input type="text" placeholder='Search For a Movies,Events,Plays,Sports & Activities' />
                </div>
            </div>
            <div className='right'>
                <p className='dropdown'>Mumbai<RiArrowDropDownFill /></p>
                <Link href="/" className='theme_btn1 linkstylenone'>Logout</Link>

                <Link href="/" className='linkstylenone'>
                <span className='theme_icon1'>
                    <BiUserCircle />
                </span>
                </Link>

            </div>
        </nav>
    );
}

export default Navbar;
