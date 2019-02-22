import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";

import { HealthInsurancesListPage } from "./health-insurances-list";

@NgModule({
    declarations: [
        HealthInsurancesListPage
    ],
    imports: [
        IonicPageModule.forChild(HealthInsurancesListPage)
    ],
    exports:[
        HealthInsurancesListPage
    ]
})
export class HealthInsurancesListModule { } 
