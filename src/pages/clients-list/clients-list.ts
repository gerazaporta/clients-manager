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

    constructor(public navCtrl: NavController, public clientsProvider: Clients, public modalCtrl: ModalController) {
        this.clients = clientsProvider.getClients();
    }
    
    /**
     * The view loaded, let's query our items for the list
     */
    ionViewDidLoad() {
    }

    /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addClient() {
  }

  /**
   * Delete an item from the list of items.
   */
  deleteClient(client) {
    this.clientsProvider.removeClient(client);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openClient(client: Client) {
  }
}