import {
  Card,
  CardBody,
  Stack,
  Heading,
  CardFooter,
  Image,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";

function CodeApp() {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      borderRadius="20px"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "400px" }}
        height="300px"
        src="img/Palme.png"
        alt="Caffe Latte"
      />

      <CardBody display="flex">
        <Box>
          <Heading size="md" fontSize="4xl">
            Prenota con l'app Traveling conviene
          </Heading>

          <Text py="2">
            Caffè latte is a coffee beverage of Italian origin made with
            espresso and steamed milk. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Quis, molestias? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Autem, exercitationem. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Cumque, reiciendis!
          </Text>

          {/* Button sotto il testo */}
          <Text mt={7} variant="solid" colorScheme="blue" fontWeight="bold">
            Scansiona il codice QR Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Cupiditate nulla sunt deleniti quisquam est ipsa
            officia nesciunt quos eaque iusto!
          </Text>
        </Box>

        <Image src="img/QRCode.png" width="300px" height="150px" />
      </CardBody>
    </Card>
  );
}

export default CodeApp;
