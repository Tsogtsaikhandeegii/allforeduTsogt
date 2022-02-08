import { Box } from "@chakra-ui/layout";
import MyTabpanel from "../MyTabPanel";
export default function () {
  const cats = [
    "Гишүүн байгууллага",
    "Дэмжигч гишүүн",
    "Салбар зөвлөл ",
    "Гишүүнээр элсэх",
  ];
  let posts = new Array(25).fill(0);
  return (
    <Box p="3rem 15rem" className="memberback">
      <MyTabpanel
        categories={cats}
        posts={posts}
        colNums={3}
        rowNums={2}
        structure={false}
      />
    </Box>
  );
}
