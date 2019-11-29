import { BusTimeTable } from '../datatypes/BusTimeTable';

export default function bestTravelOptionFinder(rearrangedTimeTable: BusTimeTable[]) {
    let bestTravelOption: BusTimeTable = new BusTimeTable();
    const travelTimeLimit = 5400000; // 90 minutes
    const filteredTimeTable: BusTimeTable[] = rearrangedTimeTable
        .filter(
            (item: BusTimeTable) => {
                return item.departureFromC.getTime() - item.arrivalAtD.getTime() <= travelTimeLimit; // Reject if travel time is more than 90 minutes
            }
        )
        .filter((item: BusTimeTable, index: number, itemList: BusTimeTable[]) => {
            return item.departureFromC.getTime() - itemList[0].departureFromC.getTime() <= 1200000; // Pick out the buses which are within 20 minutes of the departure time of the next bus
        });

    bestTravelOption = filteredTimeTable[0];
    filteredTimeTable.map((item: BusTimeTable) => {
        if (bestTravelOption.arrivalAtD.getTime() - bestTravelOption.departureFromC.getTime() > // Best travel option according to travel time only
            item.arrivalAtD.getTime() - item.departureFromC.getTime()) {
            bestTravelOption = item;
        }
    });
    filteredTimeTable.map((item: BusTimeTable) => {
        if (item.departureFromC.getTime() === bestTravelOption.departureFromC.getTime()) { // Select "B" over "A" in case departure time is same for both
            if (item.companyName === 'B' && bestTravelOption.companyName === 'A') {
                bestTravelOption = item;
            }
        }
    });

    return bestTravelOption;
}
