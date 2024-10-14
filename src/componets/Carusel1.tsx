import { Box, Text, Container } from "@chakra-ui/react";
import { useContextApp } from "../store/context";
import CardComp from "./CardComp";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Carusel1() {
  const { cardList } = useContextApp();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2,
    },
  };

  const CustomLeftArrow = ({ onClick }) => (
    <button className="custom-arrow left" onClick={onClick}>
      &lt;
    </button>
  );

  const CustomRightArrow = ({ onClick }) => (
    <button className="custom-arrow right" onClick={onClick}>
      &gt;
    </button>
  );
  return (
    <>
      <Box>
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          Trova la tua sistemazione ideale
        </Text>
      </Box>
      <Box position="relative">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {cardList.map((item) => (
            <Box
              key={item.id}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <CardComp img={item.img} text={item.text} />
            </Box>
          ))}
        </Carousel>
      </Box>
    </>
  );
}

export default Carusel1;
