import { Input } from "@chakra-ui/input";
import { Box, Divider, Flex, Heading, Stack } from "@chakra-ui/layout";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../theme/theme";
import { PrimaryLoginButton } from "../Atoms/Button/PrimaryLoginButton";

export const Login = () => {
  return (
    <ChakraProvider theme={theme}>
      <Flex align="center" justify="center" height="100vh">
        <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
          <Heading as="h1" size="lg" textAlign="center">
            勤怠管理アプリ
          </Heading>
          <Divider my={4} />
          <Stack spacing={8} py={4} px={10}>
            <Input placeholder="ユーザーID" />
            <PrimaryLoginButton>ログイン</PrimaryLoginButton>
          </Stack>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};
