import { Button } from "@chakra-ui/button";

export const PrimaryLoginButton = ({ onClickLogin, children }) => {
  return (
    <Button
      onClick={onClickLogin}
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
    >
      {children}
    </Button>
  );
};
