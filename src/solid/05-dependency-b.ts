import {PostProvider} from "./05-dependency-c";

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export class PostService {
  private posts: Post[] = [];

  // Gracias a la INYECCIÓN DE DEPENDENCIAS. Ahora es posible cambiar
  // fácilmente entre JsonDataBaseService y LocalDataBaseService
  // pero existe el problema de modificar el método a llamar de getPosts() a getFakePosts().
  // Para solucionarlo se utiliza la INVERSIÓN DE DEPENDENCIAS
  constructor(private postProvider: PostProvider) {}

  async getPosts() {
    // Código que se ahorra gracias a la INYECCIÓN DE DEPENDENCIAS
    // const jsonDB = new LocalDataBaseService();
    // const jsonDB = new JsonDataBaseService();
    // this.posts = await jsonDB.getPosts();
    this.posts = await this.postProvider.getPosts();

    return this.posts;
  }
}
