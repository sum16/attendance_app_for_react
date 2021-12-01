import { Box, Flex, Heading, Link } from "@chakra-ui/layout"

export const Header = () => {
  return(
    <>
    <Flex as="nav" bg="purple.900" color="gray.50" padding={{ base: 3, md: 5}} align="center">
      <Flex align="center" as="a" _hover={{ cursor: "pointer" }}>
        <Heading as="h1" fontSize={{ base: "md", md: "lg"}}>勤怠管理アプリ</Heading>
      </Flex>
      <Flex align="center" fontSize="sm">
        <Box ml={10}>
          <Link color="white">名前</Link>
        </Box>
      </Flex>
    </Flex>
    </>
  )
}
