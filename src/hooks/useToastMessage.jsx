import { useToast } from "@chakra-ui/react";

export const useToastMessage = () => {
  const toast = useToast();

  // 引数をとるために関数を定義
  const showMessage = (props) => {
    const { title, description, status } = props;
    toast({
      title,
      description,
      status,
      position: "top",
      duration: 9000,
      isClosable: true,
    });
  };
  return { showMessage };
};
