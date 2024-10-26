"use client";

import React, { useState } from 'react';
import styles from './buytickets.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

// Import the DatePicker dynamically for client-side rendering
const DatePicker = dynamic(() => import('react-horizontal-datepicker'), { ssr: false });

// Define interfaces for types
interface Screen {
    _id: string;
    name: string;
    location: string;
}

interface Movie {
    moviename: string;
    screen: string;
    date: Date;
    language: string;
    type: string;
    screens: Screen[];
}

// Component definition
const Index: React.FC = () => {
    const pathname = usePathname();

    // Define the movie object with type
    const movie: Movie = {
        moviename: 'Venom: Last Dance',
        screen: '4Dx',
        date: new Date(),
        language: 'English',
        type: 'Action',
        screens: [
            {
                _id: "1",
                name: 'Screen 1',
                location: 'PVR Cinemas, Forum Mall, Koramangala'
            },
            {
                _id: "2",
                name: 'Screen 2',
                location: 'PVR Cinemas, Forum Mall, Koramangala'
            },
            {
                _id: "3",
                name: 'Screen 3',
                location: 'PVR Cinemas, Forum Mall, Koramangala'
            }
        ]
    };

    // Date picker callback function
    const selectedDay = (val: Date) => {
        console.log("Selected Date:", val);
    };

    return (
        <div className={styles.s1}>
            <div className={styles.head} style={{margin : '10px 0px 10px 5px'}}>
                <h1>{movie.moviename} - {movie.language}</h1>
                <h3>{movie.type}</h3>
            </div>
            {/* Date Picker Component */}
            <DatePicker
                getSelectedDay={selectedDay}
                endDate={100}
                selectDate={new Date("2020-04-30")}
                labelFormat="MMMM"
                color="rgb(248, 68, 100)"
            />
            <div className={styles.screens}>
                {movie.screens.map((screen) => (
                    <div className={styles.screen} style={{display : 'flex',margin : '20px 50px 20px'}} key={screen._id}>
                        <div>
                            <h2>{screen.name}</h2>
                            <h3>{screen.location}</h3>
                        </div>
                        <div className={styles.select_button}>
                            <Link href={`${pathname}/${screen._id}`} className={styles.linkstylenone}>Select</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Index;
