<script>
    import io from "socket.io-client"
    import { colorsList } from "../../stores/colorsStore.js";
    import ColorsList from "../../components/ColorsList/ColorsList.svelte";
    const socket = io("localhost:8080")
    let color;

    function chooseColor() {
        socket.emit("client-choose-a-color", { data: color })
    }

    socket.on("server-sent-a-color", (data) => {
        // don't do this; do it the Svelte way without DOM manipulation
        document.body.style.backgroundColor = data.data
        colorsList.update(colors => {
            colors.push({ color: data.data, name: data.name })
            return colors
        })
    })
</script>

<input type="color" bind:value={color}>
<button on:click={chooseColor}>Choose color</button>

<ColorsList/>