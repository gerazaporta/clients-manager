import { Component } from "@angular/core";
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { HealthInsurance } from "../../models/health-insurance";
import { HealthInsurances } from "../../mocks/providers/health-insurances";

@IonicPage()
@Component({
  selector: 'page-health-insurances-list',
  templateUrl: 'health-insurances-list.html',
})
export class HealthInsurancesListPage {
    healthInsurances: HealthInsurance[];

    /**
     * HealthInsurancesListPage ionic page   
     * @param navCtrl 
     * @param healthInsurancesProvider 
     * @param modalCtrl 
     */
    constructor(public navCtrl: NavController, public healthInsurancessProvider: HealthInsurances, public modalCtrl: ModalController) {
    }
    
    /**
     * On view loaded the health insurances list should be updated
     */
    ionViewDidLoad() {
      this.updateHealthInsurances();
    }

    /**
     * Prompt the user to add a new item. This shows our ItemCreatePage in a
     * modal and then adds the new item to our data source if the user created one.
     */
    addHealthInsurance() {
      let addModal = this.modalCtrl.create('HealthInsuranceCreatePage');
      addModal.onDidDismiss(item => {
        if (item) {
          this.healthInsurancessProvider.addHealthInsurance(item).then(healthInsurance => {
            this.updateHealthInsurances();
          });
        }
      })
     addModal.present();
   }

  /**
   * Delete an item from the list of items.
   */
  deleteHealthInsurance(healthInsurance) {
    this.healthInsurancessProvider.removeHealthInsurance(healthInsurance).then(() => {
      this.updateHealthInsurances();
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openHealthInsurance(healthInsurance: HealthInsurance) {
  }

  /**
   * Update health insurances list
   */
  private updateHealthInsurances() {
    this.healthInsurancessProvider.getHealthInsurances().then(data => {
      this.healthInsurances = data;
    });
  }
}