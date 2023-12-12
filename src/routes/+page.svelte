<script>
    import {onMount} from 'svelte';
    let dataIn = '';
    const get = async () => {
        const res = await fetch('http://localhost:3000/')
        const data = await res.json(res)
        dataIn = data.msg;
        console.log(dataIn)

    }

    onMount(async () => {
        get();
    })
</script>

<h1>{dataIn}</h1>




