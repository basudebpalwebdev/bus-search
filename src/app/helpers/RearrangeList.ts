import { BusTimeTable } from '../datatypes/BusTimeTable';

export default async function rearrangeListWithCurrentTime(sortedList: BusTimeTable[], currentDate: Date) {
    const beforeCurrentTimeList: BusTimeTable[] = new Array<BusTimeTable>();
    const afterCurrentTimeList: BusTimeTable[] = new Array<BusTimeTable>();
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
