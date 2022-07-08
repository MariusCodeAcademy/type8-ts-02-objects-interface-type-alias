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

interface RatingItemInteface {
  rate: number;
  count: number;
}

interface FakeStoreItemInteface {
  id: number;
  qty: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingItemInteface;
}

const fsItm1: FakeStoreItemInteface = {
  id: 1,
  qty: 15,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: {
    rate: 3.9,
    count: 120,
  },
};
