// import styled from "styled-components"
import { Box, Flex, Heading, ListItem, UnorderedList } from "@chakra-ui/layout";

export const StampingHistory = (props) => {
  const { stampingHistories, leavingHistories } = props;

  return (
    <>
      <Flex justify="center">
        <Box bg="red.300" w="800px" height="500px" pt={8} pb={8} mt={9}>
          <Flex justify="center">
            <Box borderWidth="4px" borderRadius="lg" p={3}>
              <Heading as="h2">打刻履歴</Heading>
            </Box>
          </Flex>
          <Box>
            <Box
              className="stampingHistory-area"
              mt={10}
              borderBottom="2px"
              borderColor="gray.600"
            >
              <Flex justify="center">
                <Box height="150px">
                  <Heading as="h3" size="lg">
                    出勤履歴
                  </Heading>
                </Box>
              </Flex>
              <UnorderedList>
                {stampingHistories.map((history) => {
                  return (
                    <Box key={history} className="list-row">
                      <ListItem>{history}</ListItem>
                    </Box>
                  );
                })}
              </UnorderedList>
            </Box>
            <Box
              className="stampingHistory-leaving-area"
              mt={10}
              borderBottom="2px"
              borderColor="gray.600"
            >
              <Flex justify="center">
                <Box height="150px">
                  <Heading as="h3" size="lg">
                    退勤履歴
                  </Heading>
                </Box>
              </Flex>
              <UnorderedList>
                {leavingHistories.map((history) => {
                  return (
                    <Box key={history} className="list-row">
                      <ListItem>{history}</ListItem>
                    </Box>
                  );
                })}
              </UnorderedList>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
};
