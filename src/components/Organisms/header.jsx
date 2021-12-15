import { Box, Flex, Heading, Link } from "@chakra-ui/layout";
import axios from "axios";
import { useState } from "react";

export const Header = () => {
  const [userName, setUserName] = useState("");
  const feachUserName = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/1`)
      .then((res) => {
        if (res.data) {
          setUserName(res.data.name);
        } else {
          return "見つかりません";
        }
      })
      .catch(() => {
        alert("名前が見つかりません");
      });
  };

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
