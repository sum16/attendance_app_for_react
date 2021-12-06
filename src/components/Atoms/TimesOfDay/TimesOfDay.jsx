import { Box, Flex, Heading } from "@chakra-ui/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export const TimesOfDay = (props) => {
  const { FeachTime } = props;
  const time = FeachTime();

  return (
    <>
      <Flex justify="center">
        <Box mt={10}>
          <Heading as="h2" size="2xl">
            {time.formated_date}
          </Heading>
          <Flex justify="center" mt={8}>
            <Box>
              {/* 時計アイコン */}
              <FontAwesomeIcon icon={faClock} size="4x" />
            </Box>
            <Box ml={3}>
              <Heading mt={3}>{time.formated_time}</Heading>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};
