export const TimesOfDay = () => {
  const date = new Date();
  const dayOfweek = date.getDay()
  const dayOfWeekStr = [ "日", "月", "火", "水", "木", "金", "土" ][dayOfweek]
  const currentDay = date.getFullYear() + "年" + date.getMonth() + "月" +  date.getDate() + "日"  + `${dayOfWeekStr}曜日`;
  const currentTime = date.getHours() + "：" + date.getMinutes() + "分";
  return (
    <>
    <div>
      <h2>{currentDay}</h2>
      <h2>{currentTime}</h2>
    </div>
    </>
  )
}
