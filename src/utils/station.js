export default function station (stationEN, line) {
    const index = line.EN.indexOf(stationEN);
    return {
        num: index+1, // + line.indexIncrementer (should give a number to offset line differences for lines that don't start at 1)
        EN: stationEN,
        JP: line.JP[index],
        HR: line.HR[index],
        // CN: line.CN[index],
        // KR: line.KR[index],
    }
}