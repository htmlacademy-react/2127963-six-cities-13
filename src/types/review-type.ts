type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type ReviewData = {
  comment: string;
  rating: number;
}

export type Review = ReviewData & {
  id: string;
  date: string;
  user: User;
  /*comment: string;
  rating: number;*/
}
