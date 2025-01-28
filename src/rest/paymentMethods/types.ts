import { PaymentMethod } from '../../model/PaymentMethod';

export type GetPaymentMethodRequest = {
  paymentMethodId: string;
};

export type GetPaymentMethodResponse = PaymentMethod;

export type ListPaymentMethodsRequest = {};

export type ListPaymentMethodsResponse = {
  paymentMethods: PaymentMethod[];
};
