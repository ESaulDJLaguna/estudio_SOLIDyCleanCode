(() => {
  // Forma larga de crear clases en typeScript
  type Gender = "M" | "F";
  // class Person {
  //   public name: string;
  //   public gender: string;
  //   public birthdate: Date;

  //   constructor(name: string, gender: Gender, birthdate: Date) {
  //     this.name = name;
  //     this.gender = gender;
  //     this.birthdate = birthdate;
  //   }
  // }

  // Forma corta de crear clases en typeScript
  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  const newPerson = new Person("Fernando", "M", new Date("1995-10-21"));
  // Imprime el nombre de la variable, el tipo de dato y la información: {new Person: Person} > info
  console.log({newPerson});
  // Imprime el tipo de dato y la información de la clase: Person: {name: "Fernando",...}
  console.log(newPerson);
})();
