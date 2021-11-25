import { useEffect, useState } from "react";
import { AttendanceAndLeavingBtton } from "./components/Atoms/Button/AttendanceAndLeavingBtton"

function App() {
  const [workingFlg, setWorkingFlg] = useState(false)

const ChangeWorkingFlag = () => {
  setWorkingFlg(!workingFlg);
}

return (
  <div className="App">
    <AttendanceAndLeavingBtton ChangeWorkingFlag={ChangeWorkingFlag} workingFlg={workingFlg} />
  </div>
);
}

export default App;
