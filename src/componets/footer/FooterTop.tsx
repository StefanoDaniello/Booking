import { ListItem, UnorderedList, Flex, Box, Heading } from "@chakra-ui/react";

function FooterTop() {
  return (
    <Flex justify="space-between">
      {/* Primo box con 3 liste */}
      <Box>
        <Flex justify="space-between" width="500px">
          <Box>
            <Heading fontSize="xl" mb={4}>
              Travel
            </Heading>
            <UnorderedList styleType="none" spacing={2}>
              <ListItem>Chi Siamo</ListItem>
              <ListItem>Blog</ListItem>
              <ListItem>Destinazioni</ListItem>
              <ListItem>Viaggi di Lavoro</ListItem>
              <ListItem>Vacanze Familiari</ListItem>
              <ListItem>Avventure</ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <Heading fontSize="xl" mb={4}>
              Collabora con noi
            </Heading>
            <UnorderedList styleType="none" spacing={2}>
              <ListItem>Lavora con noi</ListItem>
              <ListItem>Affiliazioni</ListItem>
              <ListItem>Partnership</ListItem>
              <ListItem>Pubblicità</ListItem>
              <ListItem>Scrivici</ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <Heading fontSize="xl" mb={4}>
              Esplora
            </Heading>
            <UnorderedList styleType="none" spacing={2}>
              <ListItem>Top Destinations</ListItem>
              <ListItem>Guide di Viaggio</ListItem>
              <ListItem>Recensioni</ListItem>
              <ListItem>Foto</ListItem>
              <ListItem>Video</ListItem>
              <ListItem>Community</ListItem>
            </UnorderedList>
          </Box>
        </Flex>
      </Box>

      {/* Secondo box con 1 lista */}
      <Box>
        <Heading fontSize="xl" mb={4}>
          Contatti
        </Heading>
        <UnorderedList styleType="none" spacing={2}>
          <ListItem>Email: info@travel.com</ListItem>
          <ListItem>Telefono: +39 123 456 789</ListItem>
          <ListItem>Supporto: help@travel.com</ListItem>
          <ListItem>Social: Facebook, Instagram, Twitter</ListItem>
        </UnorderedList>
      </Box>
    </Flex>
  );
}

export default FooterTop;
