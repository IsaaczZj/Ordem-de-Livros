<script lang="ts">
  import { marked } from "marked";

  export let autor: any = null;
</script>

{#if autor}
  <div class="flex flex-col gap-5 ">
    <img class="h-96 object-cover rounded-md" src={autor.imagem} alt="Foto do autor" />
    <article class="prose lg:prose-xl prose-invert">
        {@html marked.parse(autor.biografia)}
    </article>
  </div>
{/if}
