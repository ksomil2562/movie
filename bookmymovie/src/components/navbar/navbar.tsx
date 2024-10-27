"use client"
import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.css';
import { BiUserCircle, BiSearch } from 'react-icons/bi';
import { RiArrowDropDownFill } from 'react-icons/ri';
import Image from 'next/image';
import LocationPopup from '../../popups/location/locationPopup'
function Navbar() {
  const [showLocationPopup, setShowLocationPopup] = React.useState<boolean>(false)
  const [user, setUser] = React.useState<any>(null)
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false)
  const getuser = async () => {

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/getuser`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include'
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        console.log(response)
        setUser(response.data)
      })
      .catch((error) => {
        console.log(error)
      })

  }

  const handleLogout = async () => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/logout`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include'
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        console.log(response)
        if (response.ok) {
          window.location.href = "/auth/signin"
        }

      })
      .catch((error) => {
        console.log(error)
        window.location.href = "/auth/signin"

      })
  }
  const checkLogin = async () => {
    // let authToken = await getCookie('authToken')
    // let refreshToken = await getCookie('refreshToken')

    // console.log(authToken, refreshToken)
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/checklogin`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include'
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        console.log(response)
        if (response.ok) {
          setLoggedIn(true)
        }
        else {
          setLoggedIn(false)
        }
      })
      .catch((error) => {
        console.log(error)
        setLoggedIn(false)
      })
  }
  React.useEffect(() => {
    checkLogin()
    getuser()
  }, [])
  return (
    <div className={styles.nav}>
      <div className={styles.left}>
        <Link href='/'>
          <Image src="/logo-bg.png" alt="logo" width={140} height={100} className={styles.nav_img} />
        </Link>
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
        <p className={styles.dropdown} onClick={() => setShowLocationPopup(true)}>
          {user ? user.city : "Select City"}
          <RiArrowDropDownFill className={styles.dropicon} />
        </p>
        <Link href="/profile" className={styles.linkstylenone}>
          <span className={styles.theme_icon1}>
            <BiUserCircle />
          </span>
        </Link>
        {
          loggedIn ?
            <Link href="/" className={`${styles.theme_btn1}`} onClick={handleLogout}>Logout</Link>
            :
            <Link href="/auth/signin" className={`${styles.theme_btn1} ${styles.linkstylenone}`}>
              Login
            </Link>
        }
      </div>
      {
        showLocationPopup &&
        <LocationPopup
          setShowLocationPopup={setShowLocationPopup}
        />
      }
    </div>
  );
}

export default Navbar;
