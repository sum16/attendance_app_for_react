import styled from "styled-components"

export const StampingHistory = (props) => {
  const {stampingHistories} = props;

  return(
    <>
    <Scontainer>
      <div className="stampingHistory-area">
        <p>打刻履歴</p>
        <ul>
          {stampingHistories.map((history) => {
            return(
              <div key={history} className="list-row">
                <li>{history}</li>
              </div>
            )
          })}
        </ul>
      </div>
      <Sunderline />
      {/* <table>
      <tbody>
          <tr>
            <td>出勤</td><td>火曜日</td>
          </tr>
          <tr>
          <td>退勤</td><td>水曜日</td>
          </tr>
          <tr>
          <td>出勤</td><td>木曜日</td>
          曜日に打刻した日付をpost
          </tr>
        </tbody>
      </table> */}
    </Scontainer>
    </>
  )
}

const Scontainer = styled.div`
width: 360px;
height: 314px;
left: 7px;
top: 353px;
background: #F0F8EA;
margin-top: 300px;
`

const Sunderline = styled.div`
width: 360px;
border-bottom: 3px solid #C4C4C4;

`
