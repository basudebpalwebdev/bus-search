import { BusTimeTable } from '../datatypes/BusTimeTable';
import dataSource from './../../db/datasource.json';
import { timeSeperator } from '../helpers/TimeSeperator';
import rearrangeListWithCurrentTime from '../helpers/RearrangeList';
import bestTravelOptionFinder from '../helpers/BestTravelOptionFinder';

export class BusSelectionService {
    private busTimeTableList: BusTimeTable[] = new Array<BusTimeTable>();

    constructor() {
        const currentTime: Date = new Date();
        dataSource.timeTable.map((data) => {
            const busTimeTable: BusTimeTable = new BusTimeTable();
            busTimeTable.companyName = data.companyName;
            const departureFromC = timeSeperator(data.departureFromC);
            busTimeTable.departureFromC = new Date(
                currentTime.setHours(departureFromC.hour, departureFromC.minute)
            );
            const arrivalAtD = timeSeperator(data.arrivalAtD);
            busTimeTable.arrivalAtD = new Date(
                currentTime.setHours(arrivalAtD.hour, arrivalAtD.minute)
            );
            this.busTimeTableList.push(busTimeTable);
        });
    }

    private async sortBusTimeTableByDepartureTimeDesc(): Promise<BusTimeTable[]> {
        return this.busTimeTableList.sort((a: BusTimeTable, b: BusTimeTable) => {
            return a.departureFromC <= b.departureFromC ? -1 : 1;
        });
    }

    async startListAfterCurrentTime(): Promise<BusTimeTable[]> {
        const currentTime: Date = new Date();
        const sortedList: BusTimeTable[] = await this.sortBusTimeTableByDepartureTimeDesc();
        return await rearrangeListWithCurrentTime(sortedList, currentTime);
    }

    async getBestTravelOption(): Promise<BusTimeTable> {
        const rearrangedTimeTable: BusTimeTable[] = await this.startListAfterCurrentTime();
        return await bestTravelOptionFinder(rearrangedTimeTable);
    }

    printBusTimeTable() {
        console.log(this.busTimeTableList);
    }
}
