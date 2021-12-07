import { Button } from "@chakra-ui/button";

export const PrimaryLoginButton = ({
  onClickLogin,
  children,
  // propsが渡されない場合は常にfalse
  loading = false,
  disabled = false,
}) => {
  return (
    <Button
      onClick={onClickLogin}
      bg="teal.400"
      color="white"
      disabled={disabled}
      isLoading={loading}
      _hover={{ opacity: 0.8 }}
    >
      {children}
    </Button>
  );
};
