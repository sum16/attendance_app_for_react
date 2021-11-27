export const AttendanceAndLeavingBtton = (props) => {

  const {workingFlg, ChangeWorkingFlag} = props;
  return(
    <>
    {/* trueであれば退勤、falseであれば出勤に切り変える */}
    <div>
        {workingFlg ? (
          <button onClick={ChangeWorkingFlag}>退勤</button>
        ) : (
          <button onClick={ChangeWorkingFlag}>出勤</button>
        )}
    </div>
    </>
  )
}
