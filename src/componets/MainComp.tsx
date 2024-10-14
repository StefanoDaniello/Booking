import { Container } from "@chakra-ui/react";
import JumboComp from "./JumboComp";
import Carusel1 from "./Carusel1";
import Carusel2 from "./Carusel2";
function MainComp() {
  return (
    <>
      <Container maxW="1400px" p={4}>
        <JumboComp />
        <Carusel1 />
        <Carusel2 />
      </Container>
    </>
  );
}

export default MainComp;
