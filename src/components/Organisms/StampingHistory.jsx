// import styled from "styled-components"

export const StampingHistory = (props) => {
  const {stampingHistories, leavingHistories} = props;

  return(
    <>
    <div>
    <h2>打刻履歴</h2>
      <div className="stampingHistory-area">
        <p>出勤履歴</p>
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
      <div className="stampingHistory-leaving-area">
        <p>退勤履歴</p>
        <ul>
          {leavingHistories.map((history) => {
            return(
              <div key={history} className="list-row">
                <li>{history}</li>
              </div>
            )
          })}
        </ul>
      </div>
    </div>
    </>
  )
}

// const Scontainer = styled.div`
// width: 360px;
// height: 314px;
// left: 7px;
// top: 353px;
// background: #F0F8EA;
// margin-top: 300px;
// `

// const Sunderline = styled.div`
// width: 360px;
// border-bottom: 3px solid #C4C4C4;
// `
