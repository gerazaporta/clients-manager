import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { IonicPage, NavController, ViewController, ModalController } from 'ionic-angular';
import { HealthInsurance } from '../../models/health-insurance';
import { HealthInsurances } from '../../mocks/providers/health-insurances';

@IonicPage()
@Component({
  selector: 'page-client-create',
  templateUrl: 'client-create.html'
})
export class ClientCreatePage {
  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  item: any;

  form: FormGroup;

  paymentsHistory: FormArray;

  insurances: HealthInsurance[];

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, private formBuilder: FormBuilder,
    private healthInsurances: HealthInsurances, private modalCtrl: ModalController) {


      this.paymentsHistory = this.formBuilder.array([]);

      this.form = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        birthday: [new Date(), Validators.required],
        paymentsHistory: this.paymentsHistory
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
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addPayment() {
    let addModal = this.modalCtrl.create('PaymentHistoryForm');
    addModal.onDidDismiss(item => {
      console.log(item);
      if (item) {
        this.paymentsHistory.push(item);
      }
    })
    addModal.present();
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
