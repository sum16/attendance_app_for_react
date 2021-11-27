import { useState } from "react";
import { AttendanceAndLeavingBtton } from "./components/Atoms/Button/AttendanceAndLeavingBtton"
import { AttendanceForgotPushOfButton } from "./components/Atoms/Button/AttendanceForgotPushOfButton";
import { WatchIcon } from "./components/Atoms/Icons/WatchIcon";
import { HeaderLink } from "./components/Atoms/Link/HeaderLink";
import { CorporateLogo } from "./components/Atoms/Logo/CorporateLogo";
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
    <CorporateLogo />
    <HeaderLink />
    <AttendanceForgotPushOfButton />
  </div>
);
}

export default App;
