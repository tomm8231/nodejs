<script>
    export let child
    export let onShowLove
    export let onEatCookie

    import { fridgeMessages } from "../../store/fridgeMessages";

    let customFridgeMessage = ""

    function submitFridgeMessage() {
        //Two ways of doing this:
        //fridgeMessages.set([...$fridgeMessages, customFridgeMessage])
        fridgeMessages.update((storeValue) => {
            storeValue.push(customFridgeMessage)
            return storeValue
            // eller return [...$fridgeMessages, customFridgeMessage] i stedet for storeValue.push().... return storeValue
        })
        customFridgeMessage = ""
    }

</script>

<button on:click={() => onShowLove(child.name)}>HJERTE</button>
<button on:click={() => onEatCookie(child.name)}>Eat cookie</button>
<input placeholder="Skriv besked" bind:value={customFridgeMessage}>
<button on:click={submitFridgeMessage}>Submit fridge message</button>

<div 
    class:is-girl={child.isGirl}
    class:is-boy={!child.isGirl}
    class={child.blackSheep || "not-a-black-sheep"}
>
    <h3>{child.name}</h3>
</div>


<style>
    .is-boy {
        border: 1px solid pink;
    }

    .is-girl {
        border: 1px solid blue;
    }

    .not-a-black-sheep {
        background-color: aquamarine;
    }

    .medium-black-sheep {
        background-color: bisque;
    }

    .ultra-black-sheep {
        background-color: red;
    }
</style>
