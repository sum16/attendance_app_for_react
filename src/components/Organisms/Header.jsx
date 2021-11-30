import styled from "styled-components"

export const Header = () => {
  return(
    <>
    <Sheader>
      <nav>
        <Sh1>
          <Sa href="/">企業ロゴ</Sa>
        </Sh1>
        <Su>
          <Sli>名前</Sli>
        </Su>
      </nav>
    </Sheader>
    </>
  )
}

const Sheader = styled.header`
  position: fixed;
  width: 100%;
  padding: 30px 4% 10px;
  top: 0;
  background: #fff;
  // background: #4C4B63;
  display: flex;
  align-items: center;
  `

const Sa = styled.a`
  text-decoration: none;
  color: #4b4b4b;
`

const Su = styled.ul`
 list-style: none;
 margin: 0;
 display: flex;
`

const Sli = styled.li`
  margin: 0 0 0 15px;
  font-size: 14px;
`

const Sh1 = styled.h1`
  margin: 0; padding: 0;
  font-size: 20px;
`

