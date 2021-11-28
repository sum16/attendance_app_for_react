import { useState } from "react";
import { AttendanceAndLeavingBtton } from "./components/Atoms/Button/AttendanceAndLeavingBtton"
import { AttendanceForgotPushOfButton } from "./components/Atoms/Button/AttendanceForgotPushOfButton";
import { WatchIcon } from "./components/Atoms/Icons/WatchIcon";
import { HeaderLink } from "./components/Atoms/Link/HeaderLink";
import { CorporateLogo } from "./components/Atoms/Logo/CorporateLogo";
import { TimesOfDay } from "./components/Atoms/TimesOfDay/TimesOfDay";
import { StampingHistory } from "./components/Organisms/StampingHistory";

function App() {
  const [workingFlg, setWorkingFlg] = useState(false)
  const [stampingHistories, SetstampingHistories] = useState(['火曜日', '金曜日'])

  const ChangeWorkingFlag = () => {
    setWorkingFlg(!workingFlg);
  }

  const onClickAdd = () => {
    // const date = new Date();
    // const dayOfweek = date.getDay()
    // const dayOfWeekStr = [ "日", "月", "火", "水", "木", "金", "土" ][dayOfweek]
    // const currentDay = date.getFullYear() + "年" + date.getMonth() + "月" +  date.getDate() + "日"  + `${dayOfWeekStr}曜日`;
    // const currentTime = date.getHours() + "：" + date.getMinutes() + "分";
    alert('hoge');
  };

  return (
    <div className="App">
      <AttendanceAndLeavingBtton ChangeWorkingFlag={ChangeWorkingFlag} workingFlg={workingFlg} onClickAdd={onClickAdd} />
      <TimesOfDay />
      <WatchIcon />
      <CorporateLogo />
      <HeaderLink />
      <AttendanceForgotPushOfButton />
      <StampingHistory stampingHistories={stampingHistories}/>
    </div>
  );
}

export default App;
