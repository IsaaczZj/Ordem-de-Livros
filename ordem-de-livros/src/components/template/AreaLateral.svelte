<script>
  import {
    IconBooks,
    IconBrandInstagram,
    IconBrandYoutube,
    IconFriends,
    IconHome,
    IconRss,
    IconUser,
    IconUsers,
  } from "@tabler/icons-svelte";
  import autores from "../../constants/autores";
  import Menu from "./Menu.svelte";
  import MenuItem from "./MenuItem.svelte";
</script>

<aside
  class="w-72 flex flex-col gap-10 self-start border border-zinc-800 p-5 rounded-md"
>
  <Menu titulo="Navegacao">
    <MenuItem link="/" texto="Inicio">
      <IconHome size={20} />
    </MenuItem>
    <MenuItem link="" texto="Personagens">
      <IconFriends size={20} />
    </MenuItem>
    <MenuItem link="/autores" texto="Autores">
      <IconUsers />
    </MenuItem>
    <MenuItem link="" texto="Séries">
      <IconBooks size={25} />
    </MenuItem>
  </Menu>
  <Menu titulo="Principais Autores">
    {#each autores as autor}
      <MenuItem link="/autores/{autor.id}" texto={autor.nome}>
        <IconUser size={25} />
      </MenuItem>
    {/each}
  </Menu>
  <Menu titulo="Outras categorias">
    <MenuItem link="/" texto="Últimas Notícias">
      <IconRss size={25} />
    </MenuItem>
    <MenuItem link="/" texto="Séries Populares">
      <IconBooks size={25} />
    </MenuItem>
    <MenuItem link="/" texto="Instagram">
      <IconBrandInstagram size={25} />
    </MenuItem>
    <MenuItem link="/" texto="Youtube">
      <IconBrandYoutube size={25} />
    </MenuItem>
  </Menu>
</aside>
