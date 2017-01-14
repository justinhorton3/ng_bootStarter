export interface Shipment {
  shipid: string;
  origin: string;
  destination: string;
  status: string;
  driver: {
    name: string;
    phoneNumber: string;
  }
}
