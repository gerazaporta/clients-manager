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
    getClients(): Promise<any> {
        return this.storage.get("_CLIENTS_");
    }

    /**
     * Store clients collection
     * @param clients 
     */
    putClients(clients: Client[]): Promise<any> {
        return this.storage.set("_CLIENTS_", clients);
    }

    /**
     * Add client to collection stored
     * @param client Client that will be added
     */
    addClient(client: Client): Promise<any> {
        let result = new Promise<Client>((resolve, reject) => {
            try {
                this.getClients().then(data => {
                    let clients: Client[] = data? data: [];
                    clients.push(client);
                    this.putClients(clients).then(() => {
                        resolve(client);
                    });
                });
                
            } catch (error) {
                console.error(error);
                reject();                
            }
            
        });
        return result;
    }

    /**
     * Remove specific client from collection.
     * Create new one from existing collection filtering by id
     * @param client Client that will be removed
     * 
     * @return Promise that resolve after 
     */
    removeClient(client: Client): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.getClients().then(data => {
                let clients: Client[] = data;
                this.putClients(clients.filter((item) => item.id !== client.id)).then(() => {
                    resolve();
                }).catch(() => {
                    reject();
                });
            });
        })
    }

    

}