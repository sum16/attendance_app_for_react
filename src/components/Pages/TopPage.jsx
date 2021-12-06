import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { format } from "date-fns";
import ja from "date-fns/locale/ja";

import { AttendanceAndLeavingBtton } from "../Atoms/Button/AttendanceAndLeavingBtton";
import { TimesOfDay } from "../Atoms/TimesOfDay/TimesOfDay";
import { Header } from "../Organisms/header";
import { StampingHistory } from "../Organisms/StampingHistory";
import theme from "../../theme/theme";

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

  const FeachTime = () => {
    const date = new Date();
    const formated_date = format(date, "yyyy年MM月dd日(EEEE)", {
      locale: ja,
    });
    const formated_time = format(date, "p");

    return { formated_date, formated_time };
  };

  const ChangeWorkingFlag = () => {
    setWorkingFlg(!workingFlg);
  };

  const onClickAddAttendanceDate = () => {
    const time = FeachTime();
    const newDate = [time.formated_date, time.formated_time];

    SetstampingHistories(newDate);
    const attendanceGroup = [...stampingHistoriesGroup, stampingHistories];
    setStampingHistoriesGroup(attendanceGroup);
  };

  const onClickAddLeavingDate = () => {
    const time = FeachTime();
    const newDate = [time.formated_date, time.formated_time];

    setLeavingHistories(newDate);
    const leavingGroup = [...leavingHistoriesGroup, leavingHistories];
    setLeavingHistoriesGroup(leavingGroup);
  };

  return (
    <>
      <ChakraProvider theme={theme}>
        <Header />
        <TimesOfDay FeachTime={FeachTime} />
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
