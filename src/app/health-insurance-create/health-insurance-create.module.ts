import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { HealthInsuranceCreatePage } from './health-insurance-create';

@NgModule({
  declarations: [
    HealthInsuranceCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(HealthInsuranceCreatePage)
  ],
  exports: [
    HealthInsuranceCreatePage
  ]
})
export class HealthInsuranceCreatePageModule { }
