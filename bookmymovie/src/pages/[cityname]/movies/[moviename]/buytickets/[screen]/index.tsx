"use client"
import React from 'react'
import Link from 'next/link';
import { useParams, usePathname, useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';
import styles from './selectseat.module.css'
const SelectSeatPage = () => {
    const pathname = usePathname();
    const params = useParams();
    const searchParams = useSearchParams();
    const movie = {
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
    const screen = {
        name: 'screen 1',
        location: 'PVR Cinemas, Forum Mall, Koramangala',
        timeslots: [
            {
                time: '10:00 AM',
                seats: [
                    {
                        type: 'platinum',
                        rows: [
                            {
                                rowname: 'H',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                id: 1,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 2,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 3,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 4,
                                                status: 'available',
                                            }
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                id: 5,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 6,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 7,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 8,
                                                status: 'available',
                                            }
                                        ]
                                    }

                                ]
                            },
                            {
                                rowname: 'I',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                id: 9,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 10,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 11,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 12,
                                                status: 'available',
                                            }
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                id: 13,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 14,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 15,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 16,
                                                status: 'available',
                                            }
                                        ]
                                    }

                                ]
                            }
                        ]
                    }
                ]
            },
            {
                time: '1:00 PM',
                seats: [
                    {
                        type: 'platinum',
                        rows: [
                            {
                                rowname: 'H',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                id: 1,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 2,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 3,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 4,
                                                status: 'available',
                                            }
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                id: 5,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 6,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 7,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 8,
                                                status: 'available',
                                            }
                                        ]
                                    }

                                ]
                            },
                            {
                                rowname: 'I',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                id: 9,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 10,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 11,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 12,
                                                status: 'available',
                                            }
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                id: 13,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 14,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 15,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 16,
                                                status: 'available',
                                            }
                                        ]
                                    }

                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
    const generateSeatlayout = () => {
        return (
            <>

            </>
        )
    }
    const [selectedSeats, setSelectedSeats] = React.useState<any[]>([]);
    const [selectedTime, setSelectedTime] = React.useState<any>(null)
    return (
        <div className={styles.selectseatpage}>
            <div className={styles.s1}>
                <div className={styles.head}>
                    <h1>{movie.moviename} - {movie.language}</h1>
                    <h3>{movie.type}</h3>
                </div>
            </div>
            <div className={styles.selectseat}>
                <div className={styles.timecont}>
                    {screen.timeslots.map((time: any, index: number) => (
                        <h3 className={selectedTime?._id === time._id ? 'time selected' : 'time'}
                            onClick={() => {
                                setSelectedTime(time)
                                setSelectedSeats([])
                            }} key={index}>
                            {time.time}
                        </h3>
                    ))}
                </div>
                <div className={styles.indicators}>
                    <div>
                        <span className={styles.seat_unavailable}></span>
                        <p>Not available</p>
                    </div>
                    <div>
                        <span className={styles.seat_available}></span>
                        <p>Available</p>
                    </div>
                    <div>
                        <span className={styles.seat_selected}></span>
                        <p>Selected</p>
                    </div>
                </div>
                {generateSeatlayout()}
                <div className={styles.totalcont}>

                </div>
            </div>
        </div>
    )

}
export default SelectSeatPage;