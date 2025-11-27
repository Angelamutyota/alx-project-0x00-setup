export interface Property {
  id: string;
  title: string;
  location: string;
  pricePerNight: number;
  rating: number; // 0 - 5
  reviewsCount?: number;
  imageSrc: string; // relative path in /public or remote URL
}
