export interface JourneyStep {
  id: string;
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
  order: number;
}
