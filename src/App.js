import { useState } from "react";
import { AttendanceAndLeavingBtton } from "./components/Atoms/Button/AttendanceAndLeavingBtton"
import { WatchIcon } from "./components/Atoms/Icons/WatchIcon";
import { TimesOfDay } from "./components/Atoms/TimesOfDay/TimesOfDay";

function App() {
  const [workingFlg, setWorkingFlg] = useState(false)

const ChangeWorkingFlag = () => {
  setWorkingFlg(!workingFlg);
}

return (
  <div className="App">
    <AttendanceAndLeavingBtton ChangeWorkingFlag={ChangeWorkingFlag} workingFlg={workingFlg} />
    <TimesOfDay />
    <WatchIcon />
  </div>
);
}

export default App;
