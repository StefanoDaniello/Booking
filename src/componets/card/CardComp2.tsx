import { Box, Image, Text } from "@chakra-ui/react";

interface CardCompProps {
  img: string;
  text: string;
  smalltext: string;
}

function CardComp({ img, text, smalltext }: CardCompProps) {
  return (
    <Box
      width="250px"
      height="200px"
      backgroundColor="white"
      borderRadius="20px"
      overflow="hidden"
    >
      <Image
        src={img}
        alt="Image description"
        width="full"
        height="140px"
        objectFit="cover"
      />
      <Box ml={5} mt={2}>
        <Text fontWeight="bold">{text}</Text>
        <Text>{smalltext}</Text>
      </Box>
    </Box>
  );
}

export default CardComp;
