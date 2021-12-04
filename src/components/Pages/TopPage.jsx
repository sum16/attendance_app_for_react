import { AttendanceAndLeavingBtton } from "../Atoms/Button/AttendanceAndLeavingBtton";
import { TimesOfDay } from "../Atoms/TimesOfDay/TimesOfDay";
import { Header } from "../Organisms/header";
import { StampingHistory } from "../Organisms/StampingHistory";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../theme/theme";
import { useState } from "react";

export const TopPage = () => {
  const [workingFlg, setWorkingFlg] = useState(false);
  const [stampingHistories, SetstampingHistories] = useState([]);
  const [leavingHistories, setLeavingHistories] = useState([]);

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
          stampingHistories={stampingHistories}
          leavingHistories={leavingHistories}
        />
      </ChakraProvider>
    </>
  );
};
