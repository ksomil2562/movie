import React from 'react';
import { MovieCardType } from '@/types/types';
import { useRouter } from 'next/navigation';
import { BsFillStarFill } from 'react-icons/bs';
import styles from "./movieCard.module.css";
const MovieCard = (data: MovieCardType) => {
    const router = useRouter();
    const city = "mumbai"
    const { title, portraitImgUrl, _id, rating, type } = data;

    return (
        <div
            className={styles.moviecard} onClick={() => {router.push(`/${city}/movies/${title}`)}}
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
                <p className={styles.type}>{type}</p>
            </div>
        </div>
    );
};

export default MovieCard;