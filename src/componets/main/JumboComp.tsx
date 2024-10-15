import { Box, Container, Image, Text, Button } from "@chakra-ui/react";

function JumboComp() {
  return (
    <Container maxW="1200px" p={4} display="flex" justifyContent="center">
      <Box width="full" height="600px" position="relative">
        <Image
          src="https://img.freepik.com/foto-gratuito/deliziosa-pasta-sul-piatto_23-2150690587.jpg?uid=R168498621&ga=GA1.1.1895884132.1728984975&semt=ais_hybrid-rr-similar"
          alt="Dan Abramov"
          borderRadius="20px"
          width="full"
          height="100%"
          objectFit="cover"
        />
        <Box position="absolute" bottom={5} left={5}>
          <Text fontSize="5xl" color="white" className="titolo">
            I Migliori Ristoranti 2024
          </Text>
          <Text color="white">
            Pianifica un viaggio nei locali vincitori dei premi Best Food
          </Text>
          <Button borderRadius="30px" backgroundColor="white" mt={4}>
            Vedi elenco
          </Button>
        </Box>
        <Box position="absolute" top={5} right={5}>
          <Image
            src="https://www.th-resorts.com/wp-content/uploads/Anteprima-articolo-travelers-choice-24.png"
            alt="Premio 2024"
            borderRadius="20px"
            width="100px"
            height="100px"
          />
        </Box>
      </Box>
    </Container>
  );
}

export default JumboComp;
