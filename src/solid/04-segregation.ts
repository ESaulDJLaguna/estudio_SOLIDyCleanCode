interface Bird {
  eat(): void;
}

/*
Si ahora hacemos un cambio en las aves voladoras si en vez
de retornar 'void' regresa un number, ya no tendremos que
hacer las modificacones en todas las clases que implenentan
esta interfaz de forma innecesaria sino que solo en las que
realmente lo ocupan
*/
interface FlyingBird {
  // fly(): void;
  fly(): number;
}

interface RunningBird {
  run(): void;
}

interface SwimmerBird {
  swim(): void;
}

class Tucan implements Bird, FlyingBird {
  fly(): number {
    return 100;
  }

  eat() {}
}

class Humminbird implements Bird, FlyingBird {
  fly() {
    return 200;
  }
  eat() {}
}

class Ostrich implements Bird, RunningBird {
  eat() {}
  run() {}
}

class Penguin implements Bird, SwimmerBird {
  swim() {}
  eat() {}
}
