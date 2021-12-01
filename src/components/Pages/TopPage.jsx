import styled from "styled-components"
import { AttendanceAndLeavingBtton } from "../Atoms/Button/AttendanceAndLeavingBtton"
import { TimesOfDay } from "../Atoms/TimesOfDay/TimesOfDay"
import { Header } from "../Organisms/header"
import { StampingHistory } from "../Organisms/StampingHistory"
import { ChakraProvider } from '@chakra-ui/react'

export const TopPage = () => {
  return(
    <>
    <ChakraProvider>
      <Header />
      <Smain>
        <TimesOfDay />
        <AttendanceAndLeavingBtton />
      </Smain>
    </ChakraProvider>
    </>
  )
}

const Smain = styled.div`
  // padding-bottom:150px;
  margin: 0 auto;

`
