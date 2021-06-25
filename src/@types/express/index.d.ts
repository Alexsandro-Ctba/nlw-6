/* criando user_id dentro do request
*/
declare namespace Express{
    export interface Request{
        user_id:string;
    }
}