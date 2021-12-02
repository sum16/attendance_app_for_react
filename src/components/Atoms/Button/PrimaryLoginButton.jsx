import { Button } from "@chakra-ui/button";

export const PrimaryLoginButton = (props) => {
  const { children } = props;
  return (
    <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>
      {children}
    </Button>
  );
};
