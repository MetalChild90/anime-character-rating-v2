export interface ImageObjectInterface {
  file: string | ArrayBuffer | null;
  name: string;
}

export interface RatingInterface {
  id?: string;
  name: string;
  anime: string;
  review: string;
  score?: number;
  image: ImageObjectInterface | null;
}
