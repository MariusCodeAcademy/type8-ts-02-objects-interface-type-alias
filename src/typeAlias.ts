console.log('Type alias');
// tipo alias tipo pavadinimas
type strNumBool = string | number | boolean;

type companyUser = {
  name: string;
  email: string;
};

function printUser(ur: companyUser, id: strNumBool): void {
  console.log(`${ur.name}, ${id}, ${ur.email}`);
}

printUser({ name: 'John', email: 'John@example.com' }, false);
