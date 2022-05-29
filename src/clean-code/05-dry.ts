type Size = "" | "CH" | "M" | "L";

class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  isProductReady(): boolean {
    // Sin DRY
    // if (this.name.length <= 0) throw Error("name is empty");
    // if (this.price <= 0) throw Error("price is zero");
    // if (this.size.length <= 0) throw Error("size is empty");

    // Con DRY
    //! this hace referencia a la instancia de la clase (las propiedades: name, price, size)
    for (const key in this) {
      //! this[key]: Toma una propiedad computada, sería similar a escribir: this.name, this.price, this.size
      //! Imrpime el tipo de dato de cada propiedad
      // console.log(typeof this[key]);
      switch (typeof this[key]) {
        case "string":
          // .legth marcará un error porque typescript no está seguro que sea un string
          // hay que castear
          if ((<string>(<unknown>this[key])).length <= 0)
            throw Error(`${key} is empty`);
          break;
        case "number":
          if (<number>(<unknown>this[key]) <= 0) throw Error(`${key} is zero`);
          break;
        default:
          throw Error(`${typeof this[key]} is not valid`);
      }
    }

    return true;
  }

  toString() {
    if (!this.isProductReady()) return;

    return `${this.name}: $${this.price}, (${this.size})`;
  }
}

(() => {
  const bluePants = new Product("Blue Large Pants", 150, "M");
  console.log(bluePants.toString());
})();
