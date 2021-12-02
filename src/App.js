import { useState } from "react";
import { Login } from "./components/Pages/Login";
import { TopPage } from "./components/Pages/TopPage";
import "./index.css";

function App() {
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
    <div className="App">
      {/* <TopPage
        stampingHistories={stampingHistories}
        leavingHistories={leavingHistories}
        onClickAddAttendanceDate={onClickAddAttendanceDate}
        onClickAddLeavingDate={onClickAddLeavingDate}
        workingFlg={workingFlg}
        ChangeWorkingFlag={ChangeWorkingFlag}
      /> */}
      <Login />
    </div>
  );
}

export default App;
