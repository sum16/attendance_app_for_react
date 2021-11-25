import classes from "../../../css/button.module.scss";

export const AttendanceAndLeavingBtton = (props) => {

  const {workingFlg, ChangeWorkingFlag} = props;
  return(
    <>
    {/* trueであれば退勤、falseであれば出勤に切り変える */}
    <div>
        {workingFlg ? (
          <button onClick={ChangeWorkingFlag} className={classes.button }>退勤</button>
        ) : (
          <button onClick={ChangeWorkingFlag} className={classes.button }>出勤</button>
        )}
    </div>
    </>
  )
}
