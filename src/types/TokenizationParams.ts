import type { PaymentMethodTypesEnum, GooglePaymentMethodTypesEnum } from '.';
import type {SavePaymentMethodEnum} from "./SavePaymentMethodEnum";

export interface TokenizationParams {
  clientApplicationKey: string;
  shopId: string;
  title: string;
  subtitle: string;
  // TODO: currency
  price: number;
  savePaymentMethod?: SavePaymentMethodEnum
  paymentMethodTypes?: PaymentMethodTypesEnum[];
  authCenterClientId?: string; // ! If YooMoney method selected
  userPhoneNumber?: string;
  gatewayId?: string;
  returnUrl?: string;
  googlePaymentMethodTypes?: GooglePaymentMethodTypesEnum[];
  applePayMerchantId?: string;
  isDebug?: boolean;
}
