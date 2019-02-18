import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { PaymentHistoryForm } from './payment-history-form';

@NgModule({
  declarations: [
    PaymentHistoryForm,
  ],
  imports: [
    IonicPageModule.forChild(PaymentHistoryForm)
  ],
  exports: [
    PaymentHistoryForm
  ]
})
export class PaymentHistoryFormModule { }
