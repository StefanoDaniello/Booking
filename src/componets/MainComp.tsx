import { Container, Box } from "@chakra-ui/react";
import JumboComp from "./JumboComp";
import Carusel1 from "./Carusel1";
import Carusel2 from "./Carusel2";
import TableTravel from "./TableTravel";
import CodeApp from "./CodeApp";
function MainComp() {
  return (
    <>
      <Container maxW="1400px" p={4}>
        <JumboComp />
        <Box my={10}>
          <Carusel1 />
          <Carusel2 />
        </Box>
        <TableTravel />
        <Box my={10}>
          <Carusel1 />
          <Carusel2 />
        </Box>
        <CodeApp></CodeApp>
      </Container>
    </>
  );
}

export default MainComp;
