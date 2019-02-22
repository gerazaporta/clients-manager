import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

import { HealthInsurance } from '../../models/health-insurance';

@Injectable()
export class HealthInsurances {
  /**
   *
   */
  constructor(private storage: Storage) {
  }

  /**
   * Get health insurance stored and return [] if no data is founded
   * 
   * @returns healthInsurance[]
   */
  getHealthInsurances(): Promise<any> {
      return this.storage.get("_INSURANCES_");
  }

  /**
   * Store healthInsurances collection
   * @param healthInsurances
   */
  putHealthInsurances(healthInsurances: HealthInsurance[]): Promise<any> {
      return this.storage.set("_INSURANCES_", healthInsurances);
  }

  /**
   * Add health insurance to collection stored
   * @param healthInsurance HealthInsurance that will be added
   */
  addHealthInsurance(healthInsurance: HealthInsurance): Promise<any> {
    let result = new Promise<HealthInsurance>((resolve, reject) => {
      try {
          this.getHealthInsurances().then(data => {
              let healthInsurances: HealthInsurance[] = data ? data : [];
              let random = Math.floor(Math.random() * (1000000 - 1)) + 1;
              healthInsurance.id = healthInsurance.id ? healthInsurance.id : random.toString();
              
              healthInsurances.push(healthInsurance);
              this.putHealthInsurances(healthInsurances).then(() => {
                  resolve(healthInsurance);
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
   * Remove specific health insurance from collection.
   * Create new one from existing collection filtering by id
   * @param healthInsurance HealthInsurance that will be removed
   * 
   * @return Promise that resolve after 
   */
  removeHealthInsurance(healthInsurance: HealthInsurance): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.getHealthInsurances().then(data => {
        let clients: HealthInsurance[] = data;
        this.putHealthInsurances(clients.filter((item) => item.id !== healthInsurance.id)).then(() => 
        {
          resolve();
        }).catch(() => {
          reject();
        });
      });
    })
  }
}