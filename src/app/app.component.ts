import { Component, OnInit } from '@angular/core';
import { BusSelectionService } from './services/BusSelectionService';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'bus-search';

    constructor(private busSelectionService: BusSelectionService) {

    }

    ngOnInit() {
        this.busSelectionService.printBusTimeTable();
    }
}
