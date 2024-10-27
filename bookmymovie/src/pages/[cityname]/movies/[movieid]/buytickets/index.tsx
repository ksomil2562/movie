"use client";

import React, { useState } from 'react';
import styles from './buytickets.module.css';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import {Screen} from '@/types/movieTypes'
// Import the DatePicker dynamically for client-side rendering
const DatePicker = dynamic(() => import('react-horizontal-datepicker'), { ssr: false });


const BuyTicketsPage  = () => {
    const pathname = usePathname()
    const params = useParams()
    const [selectedDate, setSelectedDate] = React.useState<any>(new Date())
    const { movieid, cityname } = params || {};
    const [movie, setMovie] = React.useState<any>(null)
    const [theatres, setTheatres] = React.useState<any>(null)

    const getMovie = async () => {
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/movie/movies/${movieid}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.ok) {
                    console.log(data)
                    setMovie(data.data)
                }
            })
            .catch((err) => {
                console.log(err)
            })

        const getTheatres = async (date: string) => {
            let movieId = movieid
            let city = cityname

            fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/movie/screensbymovieschedule/${city}/${date}/${movieId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include'
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.ok) {
                        console.log(data)
                        setTheatres(data.data)
                    }
                    else {
                        console.log(data)
                    }
                })
            //     .catch((err) => {
            //         console.log(err)
            //     })
        }

        React.useEffect(() => {
            getMovie()
        }, [])

        React.useEffect(() => {
            getTheatres(selectedDate)
        }, [selectedDate])

        // Date picker callback function
        const selectedDay = (val: Date) => {
            console.log("Selected Date:", val);
        };

        return (
            <div className={styles.s1}>
                <div className={styles.head} style={{ margin: '10px 0px 10px 5px' }}>
                    <h1>{movie.moviename} - {movie.language}</h1>
                    <h3>{movie.genre.join(",")}</h3>
                </div>
                {/* Date Picker Component */}
                <DatePicker getSelectedDay={
                            (date: any) => {
                                console.log(date)
                                setSelectedDate(date)
                            }
                        }
                            endDate={100}
                            selectDate={
                                selectedDate
                            }
                            labelFormat={"MMMM"}
                            color={"rgb(248, 68, 100)"}
                        />
                <div className={styles.screens}>
                {
                                theatres.map((screen:Screen, index :number) => {
                                    let screenid = screen._id
                                    return (
                                        <div className={styles.screen} key={index}>
                                            <div>
                                                <h2>{screen.name}</h2>
                                                <h3>{screen.location}</h3>
                                            </div>

                                            <Link href={`${pathname}/${screenid}?date=${selectedDate}`} className={`${styles.theme_btn1} ${styles.linkstylenone}`}>Select</Link>

                                        </div>
                                    )
                                })
                    }
                </div>
            </div>
        );
    };
}
    export default BuyTicketsPage;
