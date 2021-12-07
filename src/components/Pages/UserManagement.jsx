import { Wrap, WrapItem } from "@chakra-ui/layout";
import { UserCard } from "../Organisms/UserCard";

export const UserManagement = () => {
  return (
    <>
      <Wrap P={{ base: 4, md: 10 }}>
        <WrapItem>
          <UserCard
            imageUrl="https://source.unsplash.com/random"
            userName="ニックネーム"
            fullName="名前"
          />
        </WrapItem>
      </Wrap>
    </>
  );
};
