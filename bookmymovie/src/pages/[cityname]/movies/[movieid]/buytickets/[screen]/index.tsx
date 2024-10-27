"use client"
import React, { useEffect } from 'react'
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
                        price: 500,
                        rows: [
                            {
                                rowname: 'H',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                id: 1,
                                                status: 'unavailable',
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
                                                status: 'unavailable',
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
                                                status: 'unavailable',
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
                                    },


                                ]
                            },
                            {
                                rowname: 'G',
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
                                                status: 'unavailable',
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
                                                status: 'unavailable',
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
                    },
                    {
                        type: 'Gold',
                        price: 400,
                        rows: [
                            {
                                rowname: 'F',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                id: 17,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 18,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 19,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 20,
                                                status: 'available',
                                            }
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                id: 21,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 22,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 23,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 24,
                                                status: 'available',
                                            }
                                        ]
                                    },


                                ]
                            },
                            {
                                rowname: 'E',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                id: 25,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 26,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 27,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 28,
                                                status: 'available',
                                            }
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                id: 29,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 30,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 31,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 32,
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
                        price: 500,
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
                                rowname: 'G',
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
                    },
                    {
                        type: 'Gold',
                        price: 400,
                        rows: [
                            {
                                rowname: 'F',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                id: 17,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 18,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 19,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 20,
                                                status: 'available',
                                            }
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                id: 21,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 22,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 23,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 24,
                                                status: 'available',
                                            }
                                        ]
                                    }

                                ]
                            },
                            {
                                rowname: 'E',
                                cols: [
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                id: 25,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 26,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 27,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 28,
                                                status: 'available',
                                            }
                                        ]
                                    },
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                id: 29,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 30,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 31,
                                                status: 'available',
                                            },
                                            {
                                                type: 'seat',
                                                id: 32,
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
    const [selectedSeats, setSelectedSeats] = React.useState<any[]>([]);
    const selectdeselectseat = (seat: any) => {
        console.log(seat)
        // {
        //     "row": "F",
        //     "col": 1,
        //     "seat_id": "6",
        //     "price": 500
        // }
        const isselected = selectedSeats.find((s: any) => (
            s.row === seat.row &&
            s.col === seat.col &&
            s.seat_id === seat.seat_id
        ))

        if (isselected) {
            setSelectedSeats(selectedSeats.filter((s: any) => (
                s.row !== seat.row ||
                s.col !== seat.col ||
                s.seat_id !== seat.seat_id
            )))
        }

        else {
            setSelectedSeats([...selectedSeats, seat])
        }
    }
    const [selectedTime, setSelectedTime] = React.useState<any>(null);
    useEffect(() => {
        if (!selectedTime && screen.timeslots.length > 0) {
            setSelectedTime(screen.timeslots[0]);
        }
    }, [selectedTime, screen.timeslots]);
    const generateSeatlayout = () => {
        if (!selectedTime) {
            return <div>Please select a time slot to view available seats.</div>;
        }

        const timeSlotIndex = screen.timeslots.findIndex(
            (t: any) => t.time === selectedTime.time
        );
        if (timeSlotIndex === -1) {
            return <div>No seats available for the selected time slot.</div>;
        }
        return screen.timeslots[timeSlotIndex].seats.map((seatType, index) => (
            <div className={styles.seat_type} key={index}>
                <h2>
                    {seatType.type} - Rs {seatType.price}
                </h2>
                <div className={styles.seat_rows}>
                    {
                        seatType.rows.map((row, rowIndex) => (
                            <div className={styles.seat_row} key={rowIndex}>
                                <p className={styles.rowname}>{row.rowname}</p>
                                <div className={styles.seat_cols}>
                                    {
                                        row.cols.map((col, colIndex) => (
                                            <div className={styles.seat_col} key={colIndex}>
                                                {col.seats.map((seat, seatIndex) => (
                                                    <div key={seatIndex}>
                                                        {seat.status === 'available' &&
                                                            <span className={
                                                                selectedSeats.find((s: any) => (
                                                                    s.row === row.rowname &&
                                                                    s.seat_id === seat.id &&
                                                                    s.col === colIndex
                                                                )) ? styles.seat_selected : styles.seat_available
                                                            }
                                                            onClick={() => selectdeselectseat({
                                                                row: row.rowname,
                                                                col: colIndex,
                                                                seat_id: seat.id,
                                                                price: seatType.price
                                                            })}
                                                        >
                                                            {seatIndex+1}
                                                        </span>
                                                        }
                                                        {seat.status === 'unavailable' &&
                                                            <span className={styles.seat_unavailable}>
                                                                {seatIndex+1}
                                                            </span>
                                                        }
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                </div>
                                <br /> <br /> <br />
                            </div>
                        ))
                    }
                </div>
            </div>
        ));
    };
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