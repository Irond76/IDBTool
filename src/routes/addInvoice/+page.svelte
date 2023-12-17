
<script>
    export let data;
    let selectedNumberOfContractors = 1;
    let contractorPercent = data.data.map((item) => item.ContractorPercentage);

    let selectedContractorPercent = [];

    function updateSelectedContractorPercent(index, value) {
        selectedContractorPercent[index] = value;
    }
</script>

<div class="welcome-container">
    <h1 class="welcome">IDBTool - Invoice Data</h1>
    <hr>
</div >

<div class="form-container"> 
    <div class="form">
        <form action="/addInvoice" method="post">
            <label for="invoiceNumber">Invoice Number: </label>
            <input type="text" name="invoiceNumber" id="invoiceNumber" placeholder="000">
            <label for="date" >Date: </label>
            <input type="date" name="date" id="date" >
            <label for="dentMoney" >Dent Money: </label>
            <input type="number" id="dentMoney" name="dentMoney" step="0.01" min="0" placeholder="$0.00" >
            <label for="numberOfContractors">Number Of Contractors: </label>
            <input type="number" id="numberOfContractors" name="numberOfContractors" max="20" placeholder="0" bind:value={selectedNumberOfContractors}>

            <label for="contractors">Choose Contractors:</label>
            {#each Array.from({ length: selectedNumberOfContractors }) as _, index}
                <div class="contractor-group">   
                    <select name={`contractor-${index}`} id={`contractor-${index}`}>
                        {#each data.data as contractor }
                            <option value={contractor.Name}>{contractor.Name}</option>
                        {/each}
                    </select>
                    {#if contractorPercent.length > 0}
                        <label for={`contractorPercent-${index}`}>Percent:</label>
                        <select bind:value={selectedContractorPercent[index]} name={`contractorPercent-${index}`} id={`contractorPercent-${index}`}>
                            {#each contractorPercent as percent }
                                <option value={percent}>{percent}</option>
                            {/each}
                        </select>
                    {/if}
                </div>
            {/each}



            <button type="submit" on:submit|preventDefault>Submit</button>
        </form>
    </div>
</div>


<style>
    select {
        margin-bottom: .8em;
    }
    .form-container {
        background-color: rgb(70, 70, 70);
        border-radius: 1em;
        width: 30%;
        display: grid;
        grid-template-columns: 1fr;
        margin: 0 auto;
        justify-items: center;
        padding: .5em;
    }
    hr {
        width: 30%;
    }
    form {
        width: fit-content;
        display: grid;
        grid-template-columns:  1;
    }
    li {
        list-style: none;
    }
    button {
        width: 50%;
        border: none;
    }
    label {
        margin-bottom: .2em;
    }
    input {
        margin-bottom: .8em;
    }

    .contractor-list {
        margin-top: 2em;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr ;
        row-gap: 1em
    }
    .contractor-single {
        background-color: rgb(70, 70, 70);
        border-radius: .2em;
        width: 20dvw;

    }
    .welcome-container {
        width: 80dvw;
        margin: 0 auto;
        text-align: center;
        color: #fff;
    }
</style>






