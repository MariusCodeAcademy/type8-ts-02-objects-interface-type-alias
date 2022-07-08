interface TownUserInteface {
  name: string;
  surname: string;
  sex: 'male' | 'female';
  age: number;
  income: number;
  married: boolean;
  hasCar: boolean;
}

const tu1: TownUserInteface = {
  name: 'Jonas',
  surname: 'Jonaitis',
  sex: 'male',
  age: 26,
  income: 1200,
  married: false,
  hasCar: false,
};
