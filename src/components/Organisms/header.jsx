import { Box, Flex, Heading, Link } from "@chakra-ui/layout";
import { useFeachUserName } from "../../hooks/useFeachUserName";

export const Header = () => {
  const { feachUserName, userName } = useFeachUserName();
  // 名前を取得
  feachUserName();
  return (
    <>
      <Flex
        as="nav"
        bg="purple.900"
        color="gray.50"
        padding={{ base: 3, md: 5 }}
        align="center"
      >
        <Flex align="center" as="a" _hover={{ cursor: "pointer" }}>
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            勤怠管理アプリ
          </Heading>
        </Flex>
        <Flex align="center" fontSize="sm">
          <Box ml={10}>
            <Link color="white">{userName}</Link>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
