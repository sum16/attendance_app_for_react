import { Input } from "@chakra-ui/input";
import { Box, Divider, Flex, Heading, Stack } from "@chakra-ui/layout";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../theme/theme";
import { PrimaryLoginButton } from "../Atoms/Button/PrimaryLoginButton";
import { useState } from "react";

export const Login = () => {
  const [userId, setUserId] = useState("");

  const onChengeUserId = (event) => {
    setUserId(event.target.value);
  };

  return (
    <ChakraProvider theme={theme}>
      {/* 後ほどレスポンシブ */}
      <Flex align="center" justify="center" height="100vh" width="1200px">
        <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
          <Heading as="h1" size="lg" textAlign="center">
            勤怠管理アプリ
          </Heading>
          <Divider my={4} />
          <Stack spacing={8} py={4} px={10}>
            <Input
              placeholder="ユーザーID"
              value={userId}
              onChange={onChengeUserId}
            />
            <PrimaryLoginButton>ログイン</PrimaryLoginButton>
          </Stack>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};
