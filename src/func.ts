// isiimportuojam people ir interface
import { people, UserInfs } from './data/persons.js';

// 1. parasyti Fn kuri atspausdina visus vyrus

// 1.1 parasyti Fn kuri  atspausdina moteris

// 2. parasyti Fn kuri grazina masyve moteris jaunesnies nei 35 metai
function youngLadies(arr: UserInfs[]): UserInfs[] {
  return arr.filter((uObj: UserInfs): boolean => uObj.sex === 'female' && uObj.age < 35);
}
// youngLadies([1, 3]);
console.log(youngLadies(people));
// 2.1 parasyti Fn kuri grazina masyve varda ir pavarde jaunesnies nei 35 metai

// 3. parasyti interface funkcijai ir Fn kuri grazina masyve visus žmones kurie turi mašinas

// 4. parasyti fn atspausdinti visų vairuojančių žmonių lytis
// 4.1 parasyti fn grazinti objektu masyva kuriame yra vardas ir lytis visų vairuojančių žmonių

// 5. parasyti fn kuri suskaiciuoja ir grazina kiek yra vairuojanciu vyru ir moteru
// pvz {man: 4, woman: 5}
