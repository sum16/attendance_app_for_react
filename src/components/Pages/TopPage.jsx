import styled from "styled-components"
import { AttendanceAndLeavingBtton } from "../Atoms/Button/AttendanceAndLeavingBtton"
import { TimesOfDay } from "../Atoms/TimesOfDay/TimesOfDay"
import { Header } from "../Organisms/header"
import { StampingHistory } from "../Organisms/StampingHistory"
import { ChakraProvider } from '@chakra-ui/react'
import theme from "../../theme/theme"

export const TopPage = () => {
  return(
    <>
    <ChakraProvider theme={theme}>
      <Header />
      <div>
        <TimesOfDay />
        <AttendanceAndLeavingBtton />
      </div>
    </ChakraProvider>
    </>
  )
}
