# OBJ

1. aprasyti interface tokiam objektui

```
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
  }

```

2. aprasyti interface fakestore objektui

```
  {
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
  }
```

3. aprasyti tipa sitam

```
const users = [
  {
    username: 'Serbentautas',
    password: '123456',
    id: 'u_123',
  },
  {
    username: 'Gaublys',
    password: 'asdddsss',
    id: 'u_456',
  },
  {
    username: 'Morkunas',
    password: 'grauzikas',
    id: 'u_752',
  },
];
```

4. naujame kintamajame usersWithStatus issaugoti 3 uzduoties masyva, kurio objektai praturtinami isOnline statusu kuri sudedamas random true arba false

```
  {
    username: 'Morkunas',
    password: 'grauzikas',
    id: 'u_752',
    isOnline: true
  },
```

## function uzduotys

isiimportuojam people ir interface

1.  parasyti Fn kuri atspausdina visus vyrus

    1.1 parasyti Fn kuri atspausdina moteris

2.  parasyti Fn kuri grazina masyve moteris jaunesnies nei 35 metai

3.  parasyti interface funkcijai ir Fn kuri grazina masyve visus žmones kurie turi mašinas

4.  parasyti fn atspausdinti visų vairuojančių žmonių lytis

    4.1 parasyti fn grazinti objektu masyva kuriame yra vardas ir lytis visų vairuojančių žmonių

5.  parasyti fn kuri suskaiciuoja ir grazina kiek yra vairuojanciu vyru ir moteru
    pvz {man: 4, woman: 5}

6.  parasyti fn kuri grazina objektu masyva kuriame yra vardas, pavarde, ir lytis lietuviskai.

```
{
  vardas: "Jonas"
  pavarde: "Jonauskas",
  lytis: 'vyras'
}
```
