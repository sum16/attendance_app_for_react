import { Wrap, WrapItem } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { useEffect } from "react";
import { useFetchUseAllUsers } from "../../hooks/useFetchUseAllUsers";
import { UserCard } from "../Organisms/UserCard";

export const UserManagement = () => {
  const { getAllUsers, loading, users } = useFetchUseAllUsers();

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
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
};
