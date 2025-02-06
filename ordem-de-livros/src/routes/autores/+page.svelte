<script>
  import ItemAutor from "../../components/autor/ItemAutor.svelte";
  import Titulo from "../../components/shared/Titulo.svelte";
  import autores from "../../constants/autores";
</script>

<div class="flex flex-col gap-5">
  <Titulo
    principal="Autores"
    secundario="Conheca os autores que escrevem as historias que voce ama"
  />
  <div class="grid grid-cols-2 gap-5">
    {#each autores as autor}
      <ItemAutor {autor} />
    {/each}
  </div>
</div>
