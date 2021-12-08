import { useDisclosure } from "@chakra-ui/hooks";
import { Wrap, WrapItem } from "@chakra-ui/layout";

import { Spinner } from "@chakra-ui/spinner";
import { useCallback, useEffect } from "react";
import { useFetchUseAllUsers } from "../../hooks/useFetchUseAllUsers";
import { UserCard } from "../Organisms/UserCard";
import { UserDetailModal } from "../Organisms/UserDetailModal";

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
      {/* ユーザー詳細のモーダルコンポーネント */}
      <UserDetailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
