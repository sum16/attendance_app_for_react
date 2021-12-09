//　選択したユーザーを特定し、モーダルを表示するカスタムフック
import { useCallback, useState } from "react";

export const useSelectUser = () => {
  // 選択されたユーザーの情報を保持するステート
  const [selectedUser, setSelectedUser] = useState([]);

  // ユーザーがクリックされたときにユーザーを返す関数
  const onSelectUser = useCallback((props) => {
    const { users, id, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);
    setSelectedUser(targetUser);
    onOpen();
  }, []);
  return { onSelectUser, selectedUser };
};
