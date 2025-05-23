<script lang="ts">
  import { Button, Input } from "@inkrypt/ui";
  import { invoke } from "@tauri-apps/api/core";

  let name = $state("");
  let greetMsg = $state("");

  async function greet(event: Event) {
    event.preventDefault();
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    greetMsg = await invoke("greet", { name });
  }
</script>

<main class="container mx-auto flex min-h-full">
  <div
    class="flex gap-4 flex-col mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl p-10"
  >
    <h1 class="underline">Welcome to Inkrypt!</h1>

    <form class="row" onsubmit={greet}>
      <Input id="greet-input" placeholder="Enter a name..." bind:value={name} />
      <Button class="mt-4" type="submit">Greet</Button>
    </form>
    <p>{greetMsg}</p>
  </div>
</main>
