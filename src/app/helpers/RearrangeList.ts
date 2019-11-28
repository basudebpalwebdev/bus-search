import { BusTimeTable } from '../datatypes/BusTimeTable';

export default async function rearrangeListWithCurrentTime(sortedList: BusTimeTable[], currentDate: Date) {
    const beforeCurrentTimeList: BusTimeTable[] = new Array<BusTimeTable>();
    const afterCurrentTimeList: BusTimeTable[] = new Array<BusTimeTable>();
    sortedList.map((item) => {
        if (item.departureFromC <= currentDate) {
            beforeCurrentTimeList.push(item);
        } else {
            afterCurrentTimeList.push(item);
        }
    });
    return afterCurrentTimeList.concat(beforeCurrentTimeList);
}
