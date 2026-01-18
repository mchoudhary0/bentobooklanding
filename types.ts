
export interface Review {
  rating: number;
  text: string;
  author: string;
}

export interface BookFeature {
  title: string;
  description: string;
}

export enum Section {
  HERO = 'hero',
  WISDOM = 'wisdom',
  ABOUT = 'about',
  CONTACT = 'contact'
}
