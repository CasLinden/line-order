export default function station(stationEN, line) {
  const index = line.EN.indexOf(stationEN);
  const num = index + 1;

  const stationObj = {
    num,
    EN: stationEN,
  };
  
  if (line.JP) {
    stationObj.JP = line.JP[index];
  }

  if (line.HR) {
    stationObj.HR = line.HR[index];
  }

  return stationObj;
}
