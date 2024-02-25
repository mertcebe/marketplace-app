"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

// cn(
//     'invisible h-full w-full cursor-pointer group/main',
//     {
//         'visible animate-in fade-in-5': isVisible,
//     }
// )
// href={`/product/${product.id}`}
const ProductListing = ({ product, index }) => {
    let [navControl, setNavControl] = useState(false);
    return (
        <Link
            className={'h-full w-full cursor-pointer rounded-sm'}
            href={`/product/${product.id}`}
        >
            <div className='flex flex-col w-full'>
                <Swiper
                    pagination={{
                        type: 'bullets',
                    }}
                    onMouseEnter={() => setNavControl(true)}
                    onMouseLeave={() => setNavControl(false)}
                    navigation={navControl}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><Image src={'/hippo-empty-cart.png'} width={140} height={140} alt='swiper_image' /></SwiperSlide>
                    <SwiperSlide><Image src={'/hippo-empty-cart.png'} width={140} height={140} alt='swiper_image' /></SwiperSlide>
                </Swiper>

                <h3 className='mt-4 font-medium text-sm text-gray-700'>
                    {product.name}
                </h3>
                <p className='mt-1 text-sm text-gray-500'>
                    {product.category}
                </p>
                <p className='mt-1 font-medium text-sm text-gray-900'>
                    {product.price}$
                </p>
            </div>
        </Link>
    )
}

export default ProductListing