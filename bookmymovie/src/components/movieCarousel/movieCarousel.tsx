import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// import MovieCard from './MovieCard';


import { MovieCardType } from '@/types/types';
import MovieCard from './movieCard';


const MovieCarousel = () => {
    const Movies: MovieCardType[] = [
        {
            title: "Venom:Last Dance",
            portraitImgUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICAxOS4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00383474-rdwhyyeehq-portrait.jpg",
            _id: "1",
            rating: 8.5,
            type: "Action"

        },
        {
            title: "Stree 2",
            portraitImgUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/stree-2-et00364249-1721725490.jpg",
            _id: "1",
            rating: 8.5,
            type: "Horror/Comedy"

        },
        {
            title: "Stree 2",
            portraitImgUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/stree-2-et00364249-1721725490.jpg",
            _id: "1",
            rating: 8.5,
            type: "Horror/Comedy"

        },
        {
            title: "Stree 2",
            portraitImgUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/stree-2-et00364249-1721725490.jpg",
            _id: "1",
            rating: 8.5,
            type: "Horror/Comedy"

        },
        {
            title: "Stree 2",
            portraitImgUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/stree-2-et00364249-1721725490.jpg",
            _id: "1",
            rating: 8.5,
            type: "Horror/Comedy"

        },
        {
            title: "Stree 2",
            portraitImgUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/stree-2-et00364249-1721725490.jpg",
            _id: "1",
            rating: 8.5,
            type: "Horror/Comedy"

        },
        {
            title: "Stree 2",
            portraitImgUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/stree-2-et00364249-1721725490.jpg",
            _id: "1",
            rating: 8.5,
            type: "Horror/Comedy"

        }

    ];

    return (
        <div className='sliderout'>
            {

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
                        Movies.map((Movie) => {
                            return (
                                <SwiperSlide>
                                    <MovieCard {...Movie} />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            }
        </div>
    )
}

export default MovieCarousel