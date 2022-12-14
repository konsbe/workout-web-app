export const INITIAL_TRAINER_DATA = {
  user: {
    email: "",
    username: "",
    password: "",
    bank_account: "1",
  },
  // image: "",
  name: "",
  surname: "",
  sex: "",
  age: 0,
  country: "",
  area: "",
  phone_number: "",
  trainer_type: [],
  description: "",
  weight: 1,
  height: 1,
  image:""
};

export interface ITrainerData {
  user: {
    email: string;
    username: string;
    password: string;
    bank_account: string;
  };
  // image: string
  name: string;
  surname: string;
  sex: string;
  age: number;
  country: string;
  area: string;
  phone_number: string;
  trainer_type: any;
  description: string;
  weight: number;
  height: number;
  image:any
}
export type TypeErrorItem = {
  loc: [];
  msg: string;
  type: string;
};
