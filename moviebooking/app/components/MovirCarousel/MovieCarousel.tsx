import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// import MovieCard from './MovieCard';


import { MovieCardType } from '@/app/types/types';
import MovieCard from './MovieCard';


    const MovieCarousel = () => {
        const Movies:MovieCardType[] = [
            {
                title:"Stree 2",
                portraitImgUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/stree-2-et00364249-1721725490.jpg",
                _id: "1",
                rating: 8.5,
                type: "Horror/Comedy"
     
            },
            {
                title:"Stree 2",
                portraitImgUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/stree-2-et00364249-1721725490.jpg",
                _id: "1",
                rating: 8.5,
                type: "Horror/Comedy"
     
            },
            {
                title:"Stree 2",
                portraitImgUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/stree-2-et00364249-1721725490.jpg",
                _id: "1",
                rating: 8.5,
                type: "Horror/Comedy"
     
            },
            {
                title:"Stree 2",
                portraitImgUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/stree-2-et00364249-1721725490.jpg",
                _id: "1",
                rating: 8.5,
                type: "Horror/Comedy"
     
            },
            {
                title:"Stree 2",
                portraitImgUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/stree-2-et00364249-1721725490.jpg",
                _id: "1",
                rating: 8.5,
                type: "Horror/Comedy"
     
            },
            {
                title:"Stree 2",
                portraitImgUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/stree-2-et00364249-1721725490.jpg",
                _id: "1",
                rating: 8.5,
                type: "Horror/Comedy"
     
            },
            {
                title:"Stree 2",
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
                                <MovieCard {...Movie}/>
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