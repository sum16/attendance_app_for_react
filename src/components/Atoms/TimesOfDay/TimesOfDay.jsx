import { Box, Flex, Heading } from "@chakra-ui/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from '@fortawesome/free-solid-svg-icons';

export const TimesOfDay = () => {
  const date = new Date();
  const dayOfweek = date.getDay()
  const dayOfWeekStr = [ "日", "月", "火", "水", "木", "金", "土" ][dayOfweek]
  const currentDay = date.getFullYear() + "年" + (date.getMonth() +1) + "月" +  date.getDate() + "日"  + `（${dayOfWeekStr}曜日）`;
  const currentTime = date.getHours() + "：" + date.getMinutes() + "：" + date.getSeconds();
  return (
    <>
    <Flex justify="center">
      <Box mt={10}>
        <Heading as='h2' size="2xl">{currentDay}</Heading>
        <Flex justify="center" mt={8}>
          <Box>
            {/* 時計アイコン */}
            <FontAwesomeIcon icon={faClock} size="4x" />
          </Box>
          <Box ml={3}>
            <Heading mt={3}>{currentTime}</Heading>
          </Box>
        </Flex>
      </Box>
    </Flex>
    </>
  )
}
