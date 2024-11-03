import styled from "styled-components";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const Container = styled.section`
  width: 100%;
  height: 80vh;
  font-size: 100px;
  background-color: red;

  .swiper {
    width: 100%;
    height: 100%;
    background-color: aliceblue;
  }
`;

export const Home = () => {
  return (
    <Container>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 2000, disableOnInteraction: true }}
        loop={true}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>공연이긔</SwiperSlide>
        <SwiperSlide>공연이긔2</SwiperSlide>
        <SwiperSlide>공연이긔3</SwiperSlide>
        <SwiperSlide>공연이긔4</SwiperSlide>
      </Swiper>
    </Container>
  );
};
