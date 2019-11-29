import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BusTimeTable } from './../../datatypes/BusTimeTable';
import { FormattedBusTimeTable } from './../../datatypes/FormattedBusTimeTable';
import { BusSelectionService } from './../../services/BusSelectionService';
import { MatPaginator } from '@angular/material/paginator';
import formatListDateTime from './../../helpers/FormatDateTime';

@Component({
    selector: 'app-time-table',
    templateUrl: './time-table.component.html',
    styleUrls: ['./time-table.component.scss']
})
export class TimeTableComponent implements OnInit {
    displayedColumns: string[] = ['companyName', 'departureFromC', 'arrivalAtD'];
    private busTimeTableList: BusTimeTable[];
    busTimeTableListFormatted: FormattedBusTimeTable[];
    matTableDataSource = new MatTableDataSource<FormattedBusTimeTable>();
    pageSizeOptions: number[] = [5, 10];
    pageSize = 5;
    length = 0;
    @ViewChild(MatPaginator, { static: true })
    paginator: MatPaginator;

    constructor(private busSelectionService: BusSelectionService) {

    }

    async ngOnInit() {
        this.busTimeTableList = await this.busSelectionService.startListAfterCurrentTime();
        this.busTimeTableListFormatted = formatListDateTime(this.busTimeTableList);
        this.matTableDataSource = new MatTableDataSource<FormattedBusTimeTable>(this.busTimeTableListFormatted);
        this.length = this.busTimeTableList.length;
        this.matTableDataSource.paginator = this.paginator;
    }

}
