import { Image } from "@chakra-ui/image";
import { Box, Stack, Text } from "@chakra-ui/layout";

export const UserCard = (props) => {
  const { id, imageUrl, userName, fullName, onClick } = props;
  return (
    <Box
      w="260px"
      h="260px"
      bg="gray"
      shadow="md"
      borderRadius="10px"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={() => onClick(id)}
    >
      <Stack textAlign="center">
        <Image
          borderRadius="full"
          boxSize="160px"
          src={imageUrl}
          alt={fullName}
          m="auto"
        />
      </Stack>
      <Text fontSize="lg" fontWeight="bold">
        {userName}
      </Text>
      <Text fontSize="sm" color="white">
        {fullName}
      </Text>
    </Box>
  );
};
