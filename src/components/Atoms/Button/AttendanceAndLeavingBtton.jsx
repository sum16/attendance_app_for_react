import { useState } from "react";
import classes from "../../../css/button.module.scss";

export const AttendanceAndLeavingBtton = () => {
const [textChange, setTextChange] = useState(false)

const onClickChangeWorkingFlag = () => {
  setTextChange(!textChange);
}
  return(
    <>
    {/* trueであれば退勤、falseであれば出勤に切り変える */}
    <div>
        {textChange ? (
          <button onClick={onClickChangeWorkingFlag} className={classes.button }>退勤</button>
        ) : (
          <button onClick={onClickChangeWorkingFlag} className={classes.button }>出勤</button>
        )}
    </div>
    </>
  )
}
