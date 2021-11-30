import styled from "styled-components"

export const AttendanceAndLeavingBtton = (props) => {
  const {workingFlg, ChangeWorkingFlag, onClickAddDate} = props;

  return(
    <>
    {/* trueであれば退勤、falseであれば出勤に切り変える */}
    <div>
        {workingFlg ? (
          <SButton onClick={ChangeWorkingFlag}>退勤</SButton>
        ) : (
          <SButton onClick={() => {ChangeWorkingFlag(); onClickAddDate();}}>出勤</SButton>
        )}
    </div>
    </>
  )
}

const SButton = styled.button`
  position: absolute;
  width: 186px;
  height: 72px;
  left: 91px;
  top: 247px;
  background: #BCFFDB;
  border-radius: 22px;
  font-weight: bold;
  font-size: 20px;
`
