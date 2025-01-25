const person = {
  firstName: 'Joel',
  lastName: 'Fernandes',
  age: 16,
  hobbies: 'Chess',
  hiPerson() {
    console.log('Hi, I am ' + this.firstName);
  },
};
person.hiPerson()

delete person.lastName;
console.log(person);

person.middleName = 'Pedro'
console.log(person);
