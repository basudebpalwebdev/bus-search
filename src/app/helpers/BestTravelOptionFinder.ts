import { BusTimeTable } from '../datatypes/BusTimeTable';

export default async function bestTravelOptionFinder(rearrangedTimeTable: BusTimeTable[]): Promise<BusTimeTable> {
    let bestTravelOption: BusTimeTable = new BusTimeTable();
    const travelTimeLimit = 5400000;
    const filteredTimeTable: BusTimeTable[] = rearrangedTimeTable
        .filter(
            (item: BusTimeTable) => {
                return item.departureFromC.getTime() - item.arrivalAtD.getTime() <= travelTimeLimit;
            }
        )
        .filter((item: BusTimeTable, index: number, itemList: BusTimeTable[]) => {
            return item.departureFromC.getTime() - itemList[0].departureFromC.getTime() <= 1200000;
        });
    console.log(filteredTimeTable);
    bestTravelOption = filteredTimeTable[0];
    filteredTimeTable.map((item: BusTimeTable) => {
        if (bestTravelOption.arrivalAtD.getTime() - bestTravelOption.departureFromC.getTime() >
            item.arrivalAtD.getTime() - item.departureFromC.getTime()) {
            bestTravelOption = item;
        }
    });
    filteredTimeTable.map((item: BusTimeTable) => {
        if (item.departureFromC.getTime() === bestTravelOption.departureFromC.getTime()) {
            if (item.companyName === 'B' && bestTravelOption.companyName === 'A') {
                bestTravelOption = item;
            }
        }
    });
    console.log(bestTravelOption);
    return bestTravelOption;
}
