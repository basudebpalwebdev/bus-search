import { BusTimeTable } from '../datatypes/BusTimeTable';

export default function rearrangeListWithCurrentTime(sortedList: BusTimeTable[]) {
    const beforeCurrentTimeList: BusTimeTable[] = new Array<BusTimeTable>();
    const afterCurrentTimeList: BusTimeTable[] = new Array<BusTimeTable>();
    const currentDate: Date = new Date();
    sortedList.map((item) => {
        if (item.departureFromC <= currentDate) {
            item.departureFromC.setTime(item.departureFromC.getTime() + 86400000);
            item.arrivalAtD.setTime(item.arrivalAtD.getTime() + 86400000);
            beforeCurrentTimeList.push(item);
        } else {
            afterCurrentTimeList.push(item);
        }
    });
    return afterCurrentTimeList.concat(beforeCurrentTimeList);
}
