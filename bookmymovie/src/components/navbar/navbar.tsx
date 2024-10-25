"use client"
import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.css';
import { BiUserCircle, BiSearch } from 'react-icons/bi';
import { RiArrowDropDownFill } from 'react-icons/ri';
import Image from 'next/image';

function Navbar() {
  return (
    <div className={styles.nav}>
      <div className={styles.left}>
        <Image src="/logo-bg.png" alt="logo" width={140} height={100} className={styles.nav_img} />
        <div className={styles.searchboxcontainer}>
          <BiSearch className={styles.searchbtn} />
          <input
            className={styles.searchbox}
            type="text"
            placeholder="Search For a Movies, Events, Plays, Sports & Activities"
          />
        </div>
      </div>
      <div className={styles.right}>
        <p className={styles.dropdown}>
          Mumbai
          <RiArrowDropDownFill className={styles.dropicon} />
        </p>
        <Link href="/" className={styles.linkstylenone}>
          <span className={styles.theme_icon1}>
            <BiUserCircle />
          </span>
        </Link>
        <Link href="/" className={`${styles.theme_btn1}`}>Logout</Link>
      </div>
    </div>
  );
}

export default Navbar;
