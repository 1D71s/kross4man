import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.scss";
import { Keyboard, Pagination, Navigation } from "swiper";
import { useSelector } from "react-redux";
import images from "../images";



const Slider = () => {
    const pr = useSelector(state => state.shop.renderItem.imgs)
    
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{
                enabled: true,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
                className="mySwiper"
            >
                {Array.isArray(pr) && pr.map(i => (
                    <SwiperSlide key={i}>
                        <img src={images[i]} alt="" />
                    </SwiperSlide>
                ))}
    
            </Swiper>
        </>
    );
}

export default Slider