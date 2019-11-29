import { BusTimeTable } from '../datatypes/BusTimeTable';
import dataSource from './../../db/datasource.json';
import { timeSeperator } from '../helpers/TimeSeperator';
import rearrangeListWithCurrentTime from '../helpers/RearrangeList';
import bestTravelOptionFinder from '../helpers/BestTravelOptionFinder';

export class BusSelectionService {
    private busTimeTableList: BusTimeTable[] = new Array<BusTimeTable>();

    constructor() {
        let currentTime = new Date();
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

    private sortBusTimeTableByDepartureTimeDesc(busTimeTableList: BusTimeTable[]) {
        return busTimeTableList.sort((a: BusTimeTable, b: BusTimeTable) => {
            return a.departureFromC <= b.departureFromC ? -1 : 1;
        });
    }

    startListAfterCurrentTime() {
        const sortedList: BusTimeTable[] = this.sortBusTimeTableByDepartureTimeDesc(this.busTimeTableList);
        return rearrangeListWithCurrentTime(sortedList);
    }

    getBestTravelOption() {
        const rearrangedTimeTable: BusTimeTable[] = this.startListAfterCurrentTime();
        return bestTravelOptionFinder(rearrangedTimeTable);
    }

}
