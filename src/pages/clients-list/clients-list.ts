import { Component } from "@angular/core";
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Client } from "../../models/client";
import { Clients } from "../../mocks/providers/clients";

@IonicPage()
@Component({
    selector: 'page-clients-list',
    templateUrl: 'clients-list.html'
})
export class ClientsListPage {
    clients: Client[];

    /**
     * ClientsListPage ionic page   
     * @param navCtrl 
     * @param clientsProvider 
     * @param modalCtrl 
     */
    constructor(public navCtrl: NavController, public clientsProvider: Clients, public modalCtrl: ModalController) {
    }
    
    /**
     * On view loaded the clients list should be updated
     */
    ionViewDidLoad() {
      this.updateClientList();
    }

    /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
   addClient() {
    let addModal = this.modalCtrl.create('ClientCreatePage');
    addModal.onDidDismiss(item => {
        console.log(item, this.clients);
        if (item) {
        this.clientsProvider.addClient(item).then(client => {
          this.updateClientList();
          console.log(this.clients);
        });

      }
    })
    addModal.present();
   }

  /**
   * Delete an item from the list of items.
   */
  deleteClient(client) {
    this.clientsProvider.removeClient(client).then(() => {
      this.updateClientList();
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openClient(client: Client) {
  }

  /**
   * Update clients list
   */
  private updateClientList() {
    this.clientsProvider.getClients().then(data => {
      this.clients = data;
    });
  }
}