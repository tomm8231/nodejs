<script>
  import Colors from "./pages/Colors/Colors.svelte";
  import Register from "./pages/Register/Register.svelte";
  import { currentUser } from "./stores/usersStore.js";
  import { BASE_URL } from "./stores/globalStore";
  import { onMount } from "svelte";
	import { Jumper } from 'svelte-loading-spinners';

  // onMount(async () => {
  //   const currentUserLocalStorage = localStorage.getItem("currentUser")
  //   if (currentUserLocalStorage) {
  //     currentUser.set(currentUserLocalStorage)
  //   } else {
  //     const response = await fetch($BASE_URL + "/api/users", {
  //       credentials: "include"
  //     })
  //     const result = await response.json()
  //     localStorage.setItem("currentUser", result.data)
  //     currentUser.set(result.data)
  //   }
  // })

</script>

<Jumper/>

{#if !$currentUser}
<Register/>
{:else}
<Colors/>
{/if}