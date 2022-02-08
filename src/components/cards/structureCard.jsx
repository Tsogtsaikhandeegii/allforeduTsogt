import { Box, Stack, HStack } from "@chakra-ui/layout";
import { Image, Text, Button } from "@chakra-ui/react";
import { __ } from "../../utils";

export default function (props) {
  const memebers = [
    { title: "CEO", name: "Arlene McCoy", img: "/images/joe.png" },
    { title: "CEO", name: "Annette Black", img: "/images/joe1.png" },
    { title: "CEO", name: "Leslie Alexander", img: "/images/joe2.png" },
    { title: "CEO", name: "Jane Cooper", img: "/images/joe3.png" },
    { title: "CEO", name: "Jane Cooper", img: "/images/joe3.png" },
    { title: "CEO", name: "Leslie Alexander", img: "/images/joe2.png" },
    { title: "CEO", name: "Leslie Alexander", img: "/images/joe2.png" },
    { title: "CEO", name: "Leslie Alexander", img: "/images/joe2.png" },
    { title: "CEO", name: "Leslie Alexander", img: "/images/joe2.png" },
    { title: "CEO", name: "Leslie Alexander", img: "/images/joe2.png" },
  ];

  return (
    <Stack
      flexWrap="wrap"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
    >
      {memebers.map((employ) => (
        <Stack
          p={3}
          border="1px solid black"
          borderRadius="16px"
          h="262px"
          w="200px"
        >
          <Box>
            <Text fontSize="12px" fontWeight="600">
              {employ.title}
            </Text>
            <Text fontWeight="bold">{employ.name}</Text>
            <Image
              borderRadius="0 0 0 0"
              w="200px"
              height="170px"
              src={employ.img}
            />
            <Button fontSize="1xl" variant="link" colorScheme="brand">
              {__("Read more")}
            </Button>
          </Box>
        </Stack>
      ))}
    </Stack>
  );
}
