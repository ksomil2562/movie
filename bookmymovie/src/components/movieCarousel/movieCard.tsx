import React from 'react';
import { MovieCardType } from '@/types/types';
import { useRouter } from 'next/navigation';
import { BsFillStarFill } from 'react-icons/bs';
import styles from "./movieCard.module.css";
const MovieCard = (data: any) => {
    const router = useRouter();
    const { _id, title, genre, rating, portraitImgUrl } = data.Movie;
    const city = data.user?.city;

    return (
        <div
            className={styles.moviecard} onClick={() => {router.push(`/${city}/movies/${_id}`)}}
        >
            <div
                className={styles.movieimg} style={{
                    backgroundImage: `url(${portraitImgUrl})`,
                }}
            >
                <p className={styles.rating}>
                    <span className={styles.star}>
                        <BsFillStarFill />&nbsp;&nbsp;{rating}
                    </span>
                </p>
            </div>
            <div className={styles.details}>
                <p className={styles.title}>{title}</p>
                <p className={styles.type}>{genre.join(", ")}</p>
            </div>
        </div>
    );
};

export default MovieCard;