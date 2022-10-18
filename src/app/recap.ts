const username: string | number = 'ajcruz';
const sum = (a: number, b: number) => {
  return a + b;
};
sum(1, 2);

class Person {
  /*age: number;
  lastName: string;
  constructor(age: number, lastName: string) {
    this.age = age;
    this.lastName = lastName;
  }*/
  constructor(public age: number, public lastName: string) {}
}

const nico = new Person(15, 'Cruz');
nico.age;
