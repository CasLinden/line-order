export default function stationIndex (stationEN, line) {
    const index = line.EN.indexOf(stationEN);
    return index+1
}