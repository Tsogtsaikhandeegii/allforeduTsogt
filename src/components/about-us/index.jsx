import {
  ButtonGroup,
  Button,
  Text,
  Image,
  Box,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Banner from "../banner";
import Structure from "./structure";
import Rules from "./rules";

export default function () {
  return (
    <>
      <Stack w="100%" p="0 15rem">
        <PageHeader />
      </Stack>
      <Image src="/images/Home1.png" />
      <Box h="5rem"></Box>
      <Stack spacing="5rem" p="0 15rem">
        <Structure />
        <Rules />
      </Stack>
    </>
  );
}

function PageHeader({ data }) {
  return (
    <Flex w="100%">
      <Stack pr="5rem" spacing={8} w="70%" pt="40px">
        <Text fontSize="2xl" fontWeight="bold">
          Иргэний нийгмийн үндэсний эвслийн тунхаг{" "}
        </Text>
        <Text opacity="0.6">
          Боловсрол нь хүн бүрийн өдөр тутмын амьдралд, насан турш нөлөөлөх
          үндсэн эрх, хүний хөгжлийн түлхүүр бөгөөд иргэн бүрт чанартай
          боловсрол олгох нь төрийн хүлээх гол үүрэг хариуцлага гэдэгт итгэн;
          Өнөөгийн тогтолцоонд боловсролыг явцуу тодорхойлдог, хүн бүрийн
          ялгаатай байдлыг харгалздаггүй, ялгаварлан гадуурхдаг, хангалттай
          санхүүжилт олгодоггүй зэргээс шалтгаалан бодлого төлөвлөх, хэрэгжүүлэх
          үйл явцад цогц хандлага дутагдаж; боловсролын тогтолцооны үр өгөөж нь
          хувь хүний хүсэл тэмүүлэл, нийгмийн эрэлт хэрэгцээнээс асар зөрүүтэй
          байсаар ирсний улмаас үнэ цэнэтэй амьдарч, амьдралын чанараа
          дээшлүүлэх боломж олгохгүй байгаад сэтгэл
          зовнин...........................
        </Text>
        <ButtonGroup
          spacing={4}
          borderRadius="16px 16px 0 16px"
          colorScheme="brand"
        >
          <Button
            rightIcon={<ArrowForwardIcon />}
            borderRadius="16px 16px 0 16px"
          >
            Тунхаг унших
          </Button>
          <Button
            variant="outline"
            rightIcon={<ArrowForwardIcon />}
            borderRadius="16px 16px 0 16px"
          >
            Эвслийн танилцуулга
          </Button>
        </ButtonGroup>
      </Stack>
      <Box w="30%" p="2rem 0 2rem 2rem">
        <Image
          borderRadius="16px 16px 0px 16px"
          w="352px"
          h="430px"
          src="/images/Rectangle81.png"
        />
      </Box>
    </Flex>
  );
}
