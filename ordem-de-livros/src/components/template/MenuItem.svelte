<script>
  export let texto = "";
  export let link = "";
</script>

<li>
  <a
    class="flex gap-2 items-center cursor-pointer px-4 py-2 text-zinc-300 hover:underline hover:text-white hover:bg-white/10"
    href={link}
  >
    <slot></slot>
    <span>{texto}</span>
  </a>
</li>
