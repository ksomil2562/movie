import React from 'react'
import Navbar from '@/components/navbar/navbar';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import CelebCard from '@/components/celebCard/celebCard';
import { usePathname, useParams } from 'next/navigation'
import Link from 'next/link';
import styles from "./moviePage.module.css";
import { BsFillStarFill, BsShare } from 'react-icons/bs';
import MovieCarousel from '@/components/movieCarousel/movieCarousel';
const moviePage = () => {
    const movie = {
        "_id": "65101a2acc5b257e6f2816a5",
        "title": "Venom:Last Dance",
        "description": "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie`s last dance.",
        "portraitImgUrl": "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICAxOS4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00383474-rdwhyyeehq-portrait.jpg",
        "landscapeImgUrl": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/venom-the-last-dance-et00383474-1729596212.jpg",
        "rating": 8.4,
        "genre": "Action",
        "duration": "1hr 30min",
        "cast": [
            {
                _id: "1",
                name: "Tom Hardy",
                role: "Eddie Brock",
                imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tom-hardy-8994-24-03-2017-12-37-04.jpg"
            },
            {
                _id: "2",
                name: "Juno Temple",
                role: "Dr Teddy",
                imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/juno-temple-15557-24-03-2017-15-54-53.jpg"
            },
            {
                _id: "3",
                name: "Rhys Ifans",
                role: "Martin Moon",
                imageUrl: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/rhys-ifans-24003-24-03-2017-14-00-02.jpg"
            },
            {
                _id: "4",
                name: "Peggy Lu",
                role: "Mrs Chen",
                imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/peggy-lu-2037675-1717458960.jpg"
            }

        ],
        "halls": ["2D", "3D"],
        "languages": ["Hindi", "English"],
        "crew": [
            {
                _id: "1",
                name: "Kelly Marcel",
                role: "Director",
                imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kelly-marcel-38915-1705034709.jpg"
            },
            {
                _id: "2",
                name: "Tom Hardy",
                role: "Writer",
                imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tom-hardy-8994-24-03-2017-12-37-04.jpg"
            },
            {
                _id: "3",
                name: "Hutch Parker",
                role: "Producer",
                imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/hutch-parker-iein076007-04-06-2019-16-07-22.jpg"
            }
        ],
        "__v": 0
    }
    return (
        <>
            <Navbar />
            <div className={styles.moviepage}>
                <div className={styles.c1} style={{ backgroundImage: `url(${movie.landscapeImgUrl})` }}>
                    <div className={styles.c11}>
                        <div className={styles.left}>
                            <div className={styles.movie_poster}
                                style={{
                                    backgroundImage: `url(${movie.portraitImgUrl})`
                                }}
                            >
                                <p>In cinemas</p>
                            </div>
                            <div className={styles.movie_details}>
                                <p className={styles.title}>
                                    {movie.title}
                                </p>
                                <p className={styles.rating}>
                                    <BsFillStarFill className={styles.star} />&nbsp;&nbsp;
                                    {movie.rating}/10
                                </p>
                                <p className={styles.duration_type_releasedat}>
                                    <span className={styles.duration}>
                                        {movie.duration}
                                    </span>
                                    <span>•</span>
                                    <span className={styles.type}>
                                        {movie.genre}
                                    </span>
                                </p>
                                <Link
                                    href="#"
                                    className='linkstylenone'
                                >
                                    <button className={styles.bookbtn}>Book Tickets</button>
                                </Link>

                            </div>
                        </div>
                        <div className={styles.right}>

                            <button className={styles.sharebtn}><BsShare className={styles.shareicon} />Share</button>
                        </div>
                    </div>
                </div>
                <div className={styles.c2}>
                    <h1>About the Movie</h1>
                    <p>{movie.description}</p>
                    {
                        movie.cast.length > 0 &&
                        <div className={styles.circlecardslider}>
                            <div className={styles.line}></div>

                            <h1>Cast</h1>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={1}
                                pagination={{
                                    clickable: true,
                                }}
                                breakpoints={{
                                    '@0.00': {
                                        slidesPerView: 1,
                                        spaceBetween: 2,
                                    },
                                    '@0.75': {
                                        slidesPerView: 2,
                                        spaceBetween: 2,
                                    },
                                    '@1.00': {
                                        slidesPerView: 3,
                                        spaceBetween: 2,
                                    },
                                    '@1.50': {
                                        slidesPerView: 6,
                                        spaceBetween: 2,
                                    },
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                {
                                    movie.cast.map((cast, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <CelebCard {...cast} />
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </div>
                    }
                    {
                        movie.crew.length > 0 &&
                        <div className={styles.circlecardslider}>
                            <div className={styles.line}></div>

                            <h1>Crew</h1>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={1}
                                pagination={{
                                    clickable: true,
                                }}
                                breakpoints={{
                                    '@0.00': {
                                        slidesPerView: 1,
                                        spaceBetween: 2,
                                    },
                                    '@0.75': {
                                        slidesPerView: 2,
                                        spaceBetween: 2,
                                    },
                                    '@1.00': {
                                        slidesPerView: 3,
                                        spaceBetween: 2,
                                    },
                                    '@1.50': {
                                        slidesPerView: 6,
                                        spaceBetween: 2,
                                    },
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                {
                                    movie.crew.map((cast, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <CelebCard {...cast} />
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </div>
                    }
                    <div className={styles.line}></div>
                    <h1>Your might also like</h1>
                    <MovieCarousel />
            </div>
        </div >
        </>
    )
}

export default moviePage