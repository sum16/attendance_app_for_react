import styled from "styled-components"

export const AttendanceForgotPushOfButton = () => {
  return (
    <>
    <div>
      <SForgotPushOfButton>出勤ボタンの押し忘れ</SForgotPushOfButton>
    </div>
    </>
  )
}

const SForgotPushOfButton = styled.button`
  position: absolute;
  height: 55px;
  left: 235px;
  top: 384px;
  background: #FF9505;
  border-radius: 22px;
  font-weight: bold;
`
