import { Box, Flex, HStack, VStack } from "@chakra-ui/layout";
import { Text, Image, Button, Divider, IconButton } from "@chakra-ui/react";
import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import { __ } from "../../utils";
// import Moment from "react-moment"
export default function ({ data, backColor }) {
  return (
    <VStack
      _hover={{ border: "2px solid #0398FC", backgroundColor: "white" }}
      alignItems="self-start"
      spacing="12px"
      w="100%"
      borderRadius="16px"
      p="15px"
      bgColor={backColor}
      boxShadow="1px 2px 6px 2px rgba(0, 0, 0, 0.06)"
    >
      <Image
        w="100%"
        height="150px"
        objectFit="cover"
        borderRadius="16px"
        src="/images/image21.png"
      />
      <Text fontWeight="bold" color="black">
        "Сонсголгүй хүүхдүүдэд гурав хүртэлх насанд нь дохионы хэлээр боловсрол
        олгох асуудлыг эхлүүлэх ёстой"
      </Text>
      <Text opacity="0.6" color="black">
        “ОЛОН УЛСЫН ДОХИОНЫ ХЭЛНИЙ ӨДӨР” өнөөдөр тохиож буй. Түүнчлэн жил бүрийн
        есдүгээр сарын сүүлийн долоо хоногийг Сонсголгүй Иргэдийн Олон Улсын
        өдрүүд болгон тэмдэглэдэг.{" "}
      </Text>
      <Divider opacity="0.4" />
      <Flex w="100%" justifyContent="space-between">
        <Button variant="link" colorScheme="brand">
          {__("Read more")}
        </Button>

        <Box color="black">
          <Image src="/images/Vector.png" />
          <Moment format="MMM D YYYY" withTitle>
            {data.date}
          </Moment>
        </Box>
      </Flex>
    </VStack>
  );
}
