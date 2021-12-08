import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import { Stack, Wrap, WrapItem } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Spinner } from "@chakra-ui/spinner";
import { useCallback, useEffect } from "react";
import { useFetchUseAllUsers } from "../../hooks/useFetchUseAllUsers";
import { UserCard } from "../Organisms/UserCard";

export const UserManagement = () => {
  const { getAllUsers, loading, users } = useFetchUseAllUsers();
  // chakra uiで用意されている関数
  const { isOpen, onOpen, onClose } = useDisclosure();

  // propsで渡す関数は毎回レンダリングしたくないためuseCallBackで囲う
  const onClickUser = useCallback(() => onOpen(), []);

  // 全ユーザー取得の関数を実行
  // 初回時のみレンダリングされるようにuseEffectを使用
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Wrap P={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id}>
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
        <ModalOverlay />
        <ModalContent pb={6}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input value="佐藤" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>メールアドレス</FormLabel>
                <Input value="mail" isReadOnly />
              </FormControl>
            </Stack>
          </ModalBody>
          <p>テスト</p>
        </ModalContent>
      </Modal>
    </>
  );
};
