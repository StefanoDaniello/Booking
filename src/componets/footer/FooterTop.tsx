import {
  ListItem,
  UnorderedList,
  Flex,
  Box,
  Heading,
  Link,
} from "@chakra-ui/react";

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
              <ListItem>
                <Link href="#">Chi Siamo</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Blog</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Destinazioni</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Viaggi di Lavoro</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Vacanze Familiari</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Avventure</Link>
              </ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <Heading fontSize="xl" mb={4}>
              Collabora con noi
            </Heading>
            <UnorderedList styleType="none" spacing={2}>
              <ListItem>
                <Link href="#">Lavora con noi</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Affiliazioni</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Partnership</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Pubblicità</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Scrivici</Link>
              </ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <Heading fontSize="xl" mb={4}>
              Esplora
            </Heading>
            <UnorderedList styleType="none" spacing={2}>
              <ListItem>
                <Link href="#">Top Destinations</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Guide di Viaggio</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Recensioni</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Foto</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Video</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Community</Link>
              </ListItem>
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
          <ListItem>
            <Link href="#">Email: info@travel.com</Link>
          </ListItem>
          <ListItem>
            <Link href="#">Telefono: +39 123 456 789</Link>
          </ListItem>
          <ListItem>
            <Link href="#">Supporto: help@travel.com</Link>
          </ListItem>
        </UnorderedList>
      </Box>
    </Flex>
  );
}

export default FooterTop;
