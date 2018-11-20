/**
 * Payment History model.
 * The payment history belong to only and only one client
 */
export class PaymentHistory {
    annualPayments = {
        january: 0.0, febrary: 0.0, march: 0.0, april: 0.0, may: 0.0, june: 0.0,
        july: 0.0, august: 0.0, september: 0.0, october: 0.0, november: 0.0, december: 0.0 
    };
    /**
     * 
     * @param clientId (string) Client Id that own the payment history
     * @param insurancePrice (number) Amount to pay for the insurance
     * @param healthInsuranceId (string) Health Insurance ID selected
     * @param year (Date) Year of the current payment
     */
    constructor(public clientId: string, public insurancePrice: number, public healthInsuranceId: string, public year: Date) {
    }
}