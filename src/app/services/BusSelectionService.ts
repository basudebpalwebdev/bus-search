import { BusTimeTable } from '../datatypes/BusTimeTable';
import dataSource from './../../db/datasource.json';
import { timeSeperator } from '../helpers/TimeSeperator';

export class BusSelectionService {
    private busTimeTableList: BusTimeTable[] = new Array<BusTimeTable>();
    private currentTime: Date = new Date();

    constructor() {
        dataSource.timeTable.map((data) => {
            const busTimeTable: BusTimeTable = new BusTimeTable();
            busTimeTable.companyName = data.companyName;
            const departureFromC = timeSeperator(data.departureFromC);
            busTimeTable.departureFromC = new Date(
                this.currentTime.setHours(departureFromC.hour, departureFromC.minute)
            );
            const arrivalAtD = timeSeperator(data.arrivalAtD);
            busTimeTable.arrivalAtD = new Date(
                this.currentTime.setHours(arrivalAtD.hour, arrivalAtD.minute)
            );
            this.busTimeTableList.push(busTimeTable);
        });
    }

    printBusTimeTable() {
        console.log(this.busTimeTableList);
    }
}
