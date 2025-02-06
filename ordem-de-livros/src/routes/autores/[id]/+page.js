import { error } from '@sveltejs/kit';
import autores from '../../../constants/autores.js';

export function load(dados){
    const autorId = dados.params.id
    for(const autor of autores){
        if(autor.id === autorId){
            return {autor}
        }
    
    }
    console.log(autorId);
    
    error(404, "Autor nao encontrado")
}