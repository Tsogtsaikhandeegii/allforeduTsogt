import { Stack, Box } from "@chakra-ui/layout";
import { Image, Text, Button } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { __ } from "../../utils";



export default function () {
  return (
      
    <Stack
      p={4}
      spacing={2}
      borderRadius="16px"
      border="1px solid rgba(0,0,0,0.2)"
    >
        
      <Image
        mb={2}
        src="/images/flower.jpg"
        w="71px"
        height="73px"
        objectFit="cover"
      />
      <Text fontWeight="bold">Title</Text>
      <Text opacity="0.7">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it...{" "}
      </Text>
      <Box>
        <Button
          variant="outline"
          borderRadius="32px 32px 0 32px"
          colorScheme="brand"
          rightIcon={<ChevronRightIcon />}
        >
          {__("Visit web")}
        </Button>
      </Box>
    </Stack>
  );
}
