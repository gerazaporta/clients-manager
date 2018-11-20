import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

import { Client } from '../../models/client';

@Injectable()
export class Clients {
    /**
     *
     */
    constructor(private storage: Storage) {
        
    }

    /**
     * Get Clients stored and return [] if no data is founded
     * 
     * @returns Client[]
     */
    getClients(): Client[] {
        let clients = [];
        this.storage.get("_CLIENTS_").then(data => {
            clients = data;
        });
        return clients;
    }

    /**
     * Store clients collection
     * @param clients 
     */
    putClients(clients: Client[]) {
        this.storage.set("_CLIENTS_", clients);
    }

    /**
     * Add client to collection stored
     * @param client Client that will be added
     */
    addClient(client: Client) {
        let clients: Client[] = this.getClients();
        clients.push(client);
        this.putClients(clients);
    }


}