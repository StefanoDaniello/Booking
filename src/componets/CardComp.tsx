import { Box, Image, Text } from "@chakra-ui/react";

interface CardCompProps {
  img: string;
  text: string;
}

function CardComp({ img, text }: CardCompProps) {
  return (
    <Box width="180px" height="300px" position="relative">
      <Image
        src={img}
        alt="Image description"
        borderRadius="20px"
        width="full"
        height="100%"
        objectFit="cover"
      />
      <Box position="absolute" bottom={5} left={5}>
        <Text color="white" fontWeight="bold">
          {text}
        </Text>
      </Box>
    </Box>
  );
}

export default CardComp;
