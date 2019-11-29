import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatTableModule,
        MatPaginatorModule,
        MatCardModule,
        MatGridListModule,
        MatToolbarModule
    ],
    exports: [
        MatTableModule,
        MatPaginatorModule,
        MatCardModule,
        MatGridListModule,
        MatToolbarModule
    ]
})
export class MaterialModule { }
