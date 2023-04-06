import React from 'react';
import SwiperSlider from "../../ui/SwiperSlider/SwiperSlider";
import 'swiper/css';
import Flex from "../../ui/Flex/Flex";

const HomeUpdatesSliderBlogs = props => {
    return (
        <Flex width="100%" minHeight="430px">
            <SwiperSlider/>
        </Flex>
    );
};


export default HomeUpdatesSliderBlogs;