export interface Branch {
  id: string;
  name: string;
  address: string;
  area: string;
  phone?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  image?: {
    src: string;
    alt: string;
  };
  order: number;
}
