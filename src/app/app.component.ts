import { Component, OnInit } from '@angular/core';
import { BusSelectionService } from './services/BusSelectionService';
import { BusTimeTable } from './datatypes/BusTimeTable';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'bus-search';

    constructor(private busSelectionService: BusSelectionService) {

    }

    async ngOnInit() {
        this.busSelectionService.printBusTimeTable();
        const rearrangedDisplayList: BusTimeTable[] = await this.busSelectionService.startListAfterCurrentTime();
        console.log(rearrangedDisplayList);
    }
}
