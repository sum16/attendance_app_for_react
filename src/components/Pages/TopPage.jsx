import { AttendanceAndLeavingBtton } from "../Atoms/Button/AttendanceAndLeavingBtton";
import { TimesOfDay } from "../Atoms/TimesOfDay/TimesOfDay";
import { Header } from "../Organisms/header";
import { StampingHistory } from "../Organisms/StampingHistory";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../theme/theme";
import { useState } from "react";

export const TopPage = () => {
  // ボタンを切り替えるフラグ
  const [workingFlg, setWorkingFlg] = useState(false);
  // 1回の出勤履歴を保持するステート
  const [stampingHistories, SetstampingHistories] = useState([]);
  // 1回の退勤履歴を保持するステート
  const [leavingHistories, setLeavingHistories] = useState([]);
  // 出勤履歴のグループを保持するステート
  const [stampingHistoriesGroup, setStampingHistoriesGroup] = useState([]);
  // 退勤履歴のグループを保持するステート
  const [leavingHistoriesGroup, setLeavingHistoriesGroup] = useState([]);

  const ChangeWorkingFlag = () => {
    setWorkingFlg(!workingFlg);
  };

  const onClickAddAttendanceDate = () => {
    const date = new Date();
    const dayOfweek = date.getDay();
    const dayOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"][dayOfweek];
    const currentDay =
      date.getFullYear() +
      "年" +
      date.getMonth() +
      "月" +
      date.getDate() +
      "日" +
      `${dayOfWeekStr}曜日`;
    const currentTime = date.getHours() + "：" + date.getMinutes() + "分";
    const newDate = [currentDay, currentTime];
    SetstampingHistories(newDate);
    const attendanceGroup = [...stampingHistoriesGroup, stampingHistories];
    setStampingHistoriesGroup(attendanceGroup);
  };

  const onClickAddLeavingDate = () => {
    const date = new Date();
    const dayOfweek = date.getDay();
    const dayOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"][dayOfweek];
    const currentDay =
      date.getFullYear() +
      "年" +
      date.getMonth() +
      "月" +
      date.getDate() +
      "日" +
      `${dayOfWeekStr}曜日`;
    const currentTime = date.getHours() + "：" + date.getMinutes() + "分";
    const newDate = [currentDay, currentTime];
    setLeavingHistories(newDate);
    const leavingGroup = [...leavingHistoriesGroup, leavingHistories];
    setLeavingHistoriesGroup(leavingGroup);
  };

  return (
    <>
      <ChakraProvider theme={theme}>
        <Header />
        <TimesOfDay />
        <AttendanceAndLeavingBtton
          workingFlg={workingFlg}
          ChangeWorkingFlag={ChangeWorkingFlag}
          onClickAddAttendanceDate={onClickAddAttendanceDate}
          onClickAddLeavingDate={onClickAddLeavingDate}
        />
        <StampingHistory
          stampingHistoriesGroup={stampingHistoriesGroup}
          leavingHistoriesGroup={leavingHistoriesGroup}
        />
      </ChakraProvider>
    </>
  );
};
