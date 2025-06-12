import { JsonPostRepository } from "@/repositories/post/json-mock/JsonPostRepository";
import { drizzleDb } from ".";
import { postsTable } from "./schema";


(async () => {
    const jsonPostRespository = new JsonPostRepository();
    const posts = await jsonPostRespository.findAll();

    try {
        //Limpa a base de dados
        await drizzleDb.delete(postsTable);

        await drizzleDb.insert(postsTable).values(posts);
    } catch (e) {
        console.log('Ocorreu um erro: ', e);
    }

}) ();