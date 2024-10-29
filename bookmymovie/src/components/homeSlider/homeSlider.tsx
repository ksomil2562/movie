import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';

const HomeSlider = () => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({ width: window.innerWidth, height: window.innerHeight / 2 });
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const banners = [
        {
            imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1693561351496_motogpsepdesktop.jpg'
        },
        {
            imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg'
        }
    ];

    return (
        <Swiper
            cssMode={true}
            navigation={true}
            pagination={{ clickable: true }}
            mousewheel={true}
            keyboard={true}
            loop={false} // Explicitly set loop to false to avoid infinite swiping behavior
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
            style={{ width: '100%', height: dimensions.height }}
        >
            {banners.map((banner, index) => (
                <SwiperSlide key={index}>
                    <Image
                        src={banner.imgUrl}
                        alt={`Slide ${index + 1}`}
                        width={dimensions.width}
                        height={dimensions.height}
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        priority={true}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default HomeSlider;
