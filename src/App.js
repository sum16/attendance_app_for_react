import { useState } from "react";
// import { AttendanceAndLeavingBtton } from "./components/Atoms/Button/AttendanceAndLeavingBtton"
// import { AttendanceForgotPushOfButton } from "./components/Atoms/Button/AttendanceForgotPushOfButton";
// import { WatchIcon } from "./components/Atoms/Icons/WatchIcon";
// import { HeaderLink } from "./components/Atoms/Link/HeaderLink";
// import { CorporateLogo } from "./components/Atoms/Logo/CorporateLogo";
// import { TimesOfDay } from "./components/Atoms/TimesOfDay/TimesOfDay";
// import { Header } from "./components/Organisms/header";
// import { StampingHistory } from "./components/Organisms/StampingHistory";
import { TopPage } from "./components/Pages/TopPage";
import "./index.css"

function App() {
  const [workingFlg, setWorkingFlg] = useState(false)
  const [stampingHistories, SetstampingHistories] = useState([])
  const [leavingHistories, setLeavingHistories] = useState([])

  const ChangeWorkingFlag = () => {
    setWorkingFlg(!workingFlg);
  }

  const onClickAddDate = () => {
    const date = new Date();
    const dayOfweek = date.getDay()
    const dayOfWeekStr = [ "日", "月", "火", "水", "木", "金", "土" ][dayOfweek]
    const currentDay = date.getFullYear() + "年" + date.getMonth() + "月" +  date.getDate() + "日"  + `${dayOfWeekStr}曜日`;
    const currentTime = date.getHours() + "：" + date.getMinutes() + "分";
    const newDate = [currentDay, currentTime];
    SetstampingHistories(newDate);
  };

  const onClickAddLeavingDate = () => {
    const date = new Date();
    const dayOfweek = date.getDay()
    const dayOfWeekStr = [ "日", "月", "火", "水", "木", "金", "土" ][dayOfweek]
    const currentDay = date.getFullYear() + "年" + date.getMonth() + "月" +  date.getDate() + "日"  + `${dayOfWeekStr}曜日`;
    const currentTime = date.getHours() + "：" + date.getMinutes() + "分";
    const newDate = [currentDay, currentTime];
    setLeavingHistories(newDate)
  }

  return (
    <div className="App">
      < TopPage />
      {/* <Header />
      <AttendanceAndLeavingBtton ChangeWorkingFlag={ChangeWorkingFlag} workingFlg={workingFlg} onClickAddDate={onClickAddDate} onClickAddLeavingDate={onClickAddLeavingDate}/>
      <TimesOfDay />
      <WatchIcon />
      <CorporateLogo />
      <HeaderLink />
      <AttendanceForgotPushOfButton />
      <StampingHistory stampingHistories={stampingHistories} leavingHistories={leavingHistories}/> */}
    </div>
  );
}

export default App;
