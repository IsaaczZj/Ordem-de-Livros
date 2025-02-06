<script lang="ts">
  import ItemLivro from "./ItemLivro.svelte";

  export let serie: any = null;
</script>

{#if serie}
  <div class="flex flex-col gap-5">
    <h1 class="text-3xl font-black">{serie.titulo}</h1>
    <a class="text-sm text-zinc-400 -mt-4" href="/autores/{serie.autor.id}"
      >{serie.autor.nome}</a
    >
    <img class="h-96 object-cover" src={serie.imagem} alt="Imagem da serie" />
    <p class="text-lg text-zinc-400 text-justify">{serie.descricao}</p>
    <h2>Lista de Livros</h2>
    <div class="grid grid-cols-3 gap-5">
      {#each serie.livros as livro}
        <ItemLivro {livro} />
      {/each}
    </div>
  </div>
{/if}
