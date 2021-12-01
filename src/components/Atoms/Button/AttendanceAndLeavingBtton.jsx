import { Button } from "@chakra-ui/button";
import { Box, Flex } from "@chakra-ui/layout";

export const AttendanceAndLeavingBtton = (props) => {
  const {workingFlg, ChangeWorkingFlag, onClickAddDate, onClickAddLeavingDate} = props;

  return(
    <>
    {/* trueであれば退勤、falseであれば出勤に切り変える */}
    <Flex justify="center">
      <Box mt={150}>
          {workingFlg ? (
            <Button colorScheme='teal' size="lg" height='72px' width="186px" variant='solid' onClick={() => {ChangeWorkingFlag(); onClickAddLeavingDate();}}>退勤</Button>
          ) : (
            <Button colorScheme='teal' size="lg" height='72px' width="186px" variant='solid' onClick={() => {ChangeWorkingFlag(); onClickAddDate();}}>出勤</Button>
          )}
      </Box>
    </Flex>
    </>
  )
}
