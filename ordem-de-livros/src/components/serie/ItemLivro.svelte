<script lang="ts">
  import { IconBrandAmazon } from "@tabler/icons-svelte";
  export let livro: any = null;
</script>

{#if livro}
  <a
    href={livro.link}
    class="flex flex-col rounded-md overflow-hidden bg-zinc-800"
    target="_blank"
  >
    <img class="h-96" src={livro.imagem} alt="" />
    <div class="flex flex-1 flex-col p-5 gap-2">
      <span class="flex-1 font-bold text-center">{livro.titulo}</span>
      <button class="botao azul">
        <IconBrandAmazon size={25} />
        Link do livro
      </button>
    </div>
  </a>
{/if}
