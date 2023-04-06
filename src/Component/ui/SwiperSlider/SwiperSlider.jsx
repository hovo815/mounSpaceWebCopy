import React from 'react';
import Card from "../Card/Card";
import Flex from "../Flex/Flex";
import Image from "../Image/Image";
import Text from "../Text/Text";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Title from "../Title/Title";
import CustomHref from "../CustomHref/CustomHref";
import {data} from "../../../Data/Data";

const SwiperSlider = props => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
            320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
            480: {
            slidesPerView: 2,
            spaceBetween: 20
        },
            991: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1130: {
            slidesPerView: 4,
            spaceBetween: 30
        }
            }}
        >
            {data.map(item => (
                <SwiperSlide key={item.id}>
                    <Card minHeight="360px" backgroundProp="white" borderRadius="16px">
                        <CustomHref direction="column" href="/">
                            <Flex height="100%" width="100%">
                                <Image borderRadius width="100%" src={item.image} alt="action card logo"/>
                            </Flex>
                            <Flex width="100%" direction="column" padding="20px">
                                <Title
                                    height="44px"
                                    margin="0 0 10px 0"
                                    size="18px"
                                    textAlign="left"
                                >
                                    {item.title}
                                </Title>
                                <Text   height="110px" textAlign="start" size="16px">
                                    {item.text}
                                </Text>
                            </Flex>
                        </CustomHref>
                    </Card>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};


export default SwiperSlider;