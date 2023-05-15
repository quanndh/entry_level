export enum StatusEnum {
  OFFERING = "OFFERING",
  RUNNING = "RUNNING",
  OFFBOARDING = "OFFBOARDING",
}

export enum ShortTitleEnum {
  vc = "vc",
  product = "product",
  data = "data",
  data2 = "data2",
  data3 = "data3",
  scrum = "scrum",
  product2 = "product2",
  growth = "growth",
}

export interface IProgram {
  id: string;
  display_title: string;
  thumbnail_img_url: string;
  short_title: ShortTitleEnum;
}

export interface ISession {
  id: string;
  name: string;
  status: StatusEnum;
  start_date: string;
  end_date: string;
  created_at: string;
  program: IProgram[];
}
