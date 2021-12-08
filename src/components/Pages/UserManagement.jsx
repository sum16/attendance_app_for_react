import { useDisclosure } from "@chakra-ui/hooks";
import { Wrap, WrapItem } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";

import { useCallback, useEffect } from "react";
import { useFetchUseAllUsers } from "../../hooks/useFetchUseAllUsers";
import { useSelectUser } from "../../hooks/useSelectUser";
import { UserCard } from "../Organisms/UserCard";
import { UserDetailModal } from "../Organisms/UserDetailModal";

export const UserManagement = () => {
  const { getAllUsers, loading, users } = useFetchUseAllUsers();
  // chakra uiで用意されている関数
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onSelectUser, selectedUser } = useSelectUser();

  // propsで渡す関数は毎回レンダリングしたくないためuseCallBackで囲う
  // 初回レンダリングで取得したusesのまま情報が更新されないため、usersを監視対象にいれる →　変更があったときに再レンダリングされる
  const onClickUser = useCallback(
    (id) => {
      onSelectUser({ id, users, onOpen });
    },
    [users]
  );

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
                id={user.id}
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
      <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
    </>
  );
};
