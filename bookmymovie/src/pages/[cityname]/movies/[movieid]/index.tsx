import React from 'react'
import Navbar from '@/components/navbar/navbar';
import 'swiper/css';
import { useRouter } from 'next/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import CelebCard from '@/components/celebCard/celebCard';
import { usePathname, useParams } from 'next/navigation'
import Link from 'next/link';
import styles from "./moviePage.module.css";
import { BsFillStarFill, BsShare } from 'react-icons/bs';
import MovieCarousel from '@/components/movieCarousel/movieCarousel';
import { Movie, Person } from '@/types/movieTypes';
const moviePage = () => {
    const router = useRouter();
    const pathname = usePathname()
    const { movieid } = useParams() || {};
    const [movie, setMovie] = React.useState<any>(null)

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
    }


    React.useEffect(() => {
        getMovie()
    }, [])
    return (
        <>
            {
                movie &&
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
                                            {movie.genre.join(', ')}
                                        </span>
                                    </p>
                                    <Link
                                        href={`${pathname}/buytickets`}
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
                                        movie.cast.map((cast: Person, index: number) => {
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
                                        movie.crew.map((cast: Person, index: number) => {
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
            }
        </>
    )
}

export default moviePage