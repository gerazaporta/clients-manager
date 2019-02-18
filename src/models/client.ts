import { PaymentHistory } from "./payment-history";

/**
 *  Client Model
 */
export class Client {
    constructor(public id: string, public firtsName: string, public lastName: string,
      public birthday: Date, public paymentsHistory: PaymentHistory[]) {
    }
}
