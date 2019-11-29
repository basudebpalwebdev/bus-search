import { Component, OnInit } from '@angular/core';
import { BusTimeTable } from 'src/app/datatypes/BusTimeTable';
import { FormattedBusTimeTable } from 'src/app/datatypes/FormattedBusTimeTable';
import { BusSelectionService } from 'src/app/services/BusSelectionService';
import formatListDateTime from './../../helpers/FormatDateTime';

@Component({
    selector: 'app-recommendation',
    templateUrl: './recommendation.component.html',
    styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {

    recommendedBusOption: FormattedBusTimeTable = new FormattedBusTimeTable();

    constructor(private busSelectionService: BusSelectionService) { }

    ngOnInit() {
        const bestOption: BusTimeTable = this.busSelectionService.getBestTravelOption();
        this.recommendedBusOption = formatListDateTime([bestOption])[0];
    }

}
