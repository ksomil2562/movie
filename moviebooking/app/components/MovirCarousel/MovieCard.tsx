import React from 'react';
import { MovieCardType } from '@/app/types/types';
import { useRouter } from 'next/navigation';
import { BsFillStarFill } from 'react-icons/bs';

const MovieCard = (data: MovieCardType) => {
    const router = useRouter();
    const city = "mumbai"
    const { title, portraitImgUrl, _id, rating, type } = data;

    return (
        <div
            className='moviecard'
            onClick={() => {
                router.push(`/${city}/movies/${_id}`)
            }}
        >
            <div
                className='movieimg'
                style={{
                    backgroundImage: `url(${portraitImgUrl})`,
                }}
            >
                <p className='rating'>
                    <span className='star'>
                        <BsFillStarFill />&nbsp;&nbsp;{rating}
                    </span>
                </p>
            </div>
            <div className='details'>
                <p className='title'>{title}</p>
                <p className='type'>{type}</p>
            </div>
        </div>
    );
};

export default MovieCard;