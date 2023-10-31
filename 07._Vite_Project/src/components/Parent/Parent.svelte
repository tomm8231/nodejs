<script>
    import Child from "../Child/Child.svelte"
    import { fridgeMessages } from "../../store/fridgeMessages";
    export let name;
    export let myChildren;

    let cookieJar = ["🍪", "🍪", "🍪", "🍪"]


    function handleShowLove(childName) {
        console.log(`My name is ${name}, and ${childName} loves me`);
    }

    function handleEatCookie(childName) {
        cookieJar.pop()
        cookieJar = cookieJar

        console.log(`${childName} eats a cookie and there are ${cookieJar.length} left`);

        if (cookieJar.length === 0) {
            refillCookieJar()
        }

    }

    function refillCookieJar() {
        cookieJar = ["🍪", "🍪", "🍪", "🍪"]
        console.log(`${name} refills their cookie jar, and there are now ${cookieJar.length} cookies in the jar`);
    }

  function deleteFridgeMessages() {
    fridgeMessages.set(["Fridge Messages Below"])
  }


</script>


<h1>{name}</h1>

<p>{cookieJar}</p>
<button on:click={deleteFridgeMessages}>Slet beskeder på køleskab</button>

{#each myChildren as child}
    <Child child={child} onShowLove={handleShowLove} onEatCookie={handleEatCookie}/>
{/each}