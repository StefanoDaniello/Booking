import { Text, Grid, GridItem, Image } from "@chakra-ui/react";

function TableTravel() {
  return (
    <>
      <Text fontSize="3xl" fontWeight="bold" mb={4}>
        Alloggi per le vacanze per ogni tipo di viaggio
      </Text>
      <Grid
        h="400px"
        templateRows="repeat(4, 1fr)" // Definiamo 4 righe
        templateColumns="repeat(6, 1fr)" // Simuliamo frazioni con 6 colonne
        gap={4} // Spaziatura tra gli elementi
      >
        {/* Primo container: 1 sopra e 2 sotto */}
        <GridItem
          colSpan={2}
          rowSpan={2}
          bg="green"
          borderRadius="10px"
          overflow="hidden"
          position="relative"
          display="flex"
          justifyContent="center"
          _hover={{
            transform: "scale(1.1)",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
            transition: "all 0.5s ease",
            cursor: "pointer",
          }}
        >
          <Image
            src="https://www.piscinecastiglione.it/wp-content/uploads/2023/08/piscina-cascata-casa-design-400x400.jpg?theia_smart_thumbnails_file_version=2"
            width="full"
            height="full"
            objectFit="cover"
          />
          <Text
            position="absolute"
            fontSize="4xl"
            fontWeight="bold"
            bottom={5}
            color="white"
            zIndex="10"
          >
            Bungalow
          </Text>
        </GridItem>
        {/* Secondo container: 1 container unico */}
        <GridItem
          colSpan={2}
          rowSpan={4}
          bg="red"
          borderRadius="10px"
          overflow="hidden"
          _hover={{
            transform: "scale(1.1)",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
            transition: "all 0.5s ease",
            cursor: "pointer",
          }}
        >
          <Image
            src="img/Ville.png"
            width="full"
            height="full"
            objectFit="cover"
          />
        </GridItem>
        {/* Terzo container: 2 sopra e uno sotto */}
        <GridItem
          colSpan={2}
          rowSpan={2}
          bg="yellow"
          borderRadius="10px"
          overflow="hidden"
          _hover={{
            transform: "scale(1.1)",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
            transition: "all 0.5s ease",
            cursor: "pointer",
          }}
        >
          <Image
            src="img/Campeggi.png"
            width="full"
            height="full"
            objectFit="cover"
          />
        </GridItem>

        {/* Sotto 1 e Sotto 2 occupano metà della larghezza */}
        <GridItem
          colSpan={1}
          rowSpan={2}
          bg="blue"
          borderRadius="10px"
          overflow="hidden"
          _hover={{
            transform: "scale(1.1)",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
            transition: "all 0.5s ease",
            cursor: "pointer",
          }}
        >
          <Image
            src="img/Appartamenti.png"
            width="full"
            height="full"
            objectFit="cover"
          />
        </GridItem>
        <GridItem
          colSpan={1}
          rowSpan={2}
          bg="blue"
          borderRadius="10px"
          overflow="hidden"
          _hover={{
            transform: "scale(1.1)",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
            transition: "all 0.5s ease",
            cursor: "pointer",
          }}
        >
          <Image
            src="img/Chalet.png"
            width="full"
            height="full"
            objectFit="cover"
          />
        </GridItem>
        <GridItem
          colSpan={2}
          rowSpan={2}
          bg="orange"
          borderRadius="10px"
          overflow="hidden"
          _hover={{
            transform: "scale(1.1)",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
            transition: "all 0.5s ease",
            cursor: "pointer",
          }}
        >
          <Image
            src="img/Case.png"
            width="full"
            height="full"
            objectFit="cover"
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default TableTravel;
