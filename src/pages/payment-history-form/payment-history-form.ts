import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { HealthInsurance } from '../../models/health-insurance';
import { HealthInsurances } from '../../mocks/providers/health-insurances';

@IonicPage()
@Component({
  selector: 'payment-history-form',
  templateUrl: 'payment-history-form.html'
})
export class PaymentHistoryForm {
  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  item: any;

  form: FormGroup;

  public paymentsHistory: FormArray;

  insurances: HealthInsurance[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, private formBuilder: FormBuilder,
    private healthInsurances: HealthInsurances) {
      this.form = this.formBuilder.group({
        annualPayments: this.formBuilder.group({
          january: [false],
          febrary: [false],
          march: [false],
          april: [false],
          may: [false],
          june: [false],
          july: [false],
          august: [false],
          september: [false],
          october: [false],
          november: [false],
          december: [false]
        }),
        payment: ['', Validators.required],
        insurancePrice: ['', Validators.required],
        clientId: ['', Validators.required],
        year: [new Date(), Validators.required]
      });

      // Watch the form for changes, and
      this.form.valueChanges.subscribe((v) => {
        this.isReadyToSave = this.form.valid;
      });

      this.healthInsurances.getHealthInsurances().then(insurances => {
        this.insurances;
      });
  }

  ionViewDidLoad() {}

  getProfileImageStyle() {
    return 'url(' + this.form.controls['profilePic'].value + ')'
  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
  }
}
