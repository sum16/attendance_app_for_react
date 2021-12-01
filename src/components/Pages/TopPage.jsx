import { AttendanceAndLeavingBtton } from "../Atoms/Button/AttendanceAndLeavingBtton"
import { TimesOfDay } from "../Atoms/TimesOfDay/TimesOfDay"
import { Header } from "../Organisms/header"
import { StampingHistory } from "../Organisms/StampingHistory"
import { ChakraProvider } from '@chakra-ui/react'
import theme from "../../theme/theme"

export const TopPage = (props) => {
  const {stampingHistories, leavingHistories} = props;

  return(
    <>
    <ChakraProvider theme={theme}>
      <Header />
        <TimesOfDay />
        <AttendanceAndLeavingBtton />
        <StampingHistory stampingHistories={stampingHistories} leavingHistories={leavingHistories}/>
    </ChakraProvider>
    </>
  )
}
