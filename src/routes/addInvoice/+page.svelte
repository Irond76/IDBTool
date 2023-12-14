<script>
    export let data;
    let selectedNumberOfContractors = 1;
    

</script>

<div class="welcome-container">
    <h1 class="welcome">IDBTool - Invoice Data</h1>
    <hr>
</div >
<!-- method="post" -->
<div class="form-container"> 
    <div class="form">
        <form action="/addInvoice" >
            <label for="invoiceNumber">Invoice Number: </label>
            <input type="text" name="invoiceNumber" id="invoiceNumber" placeholder="000">
            <label for="date" >Date: </label>
            <input type="date" name="date" id="date" >
            <label for="dentMoney" >Dent Money: </label>
            <input type="number" id="dentMoney" name="dentMoney" step="0.01" min="0" placeholder="$0.00" >
            <label for="numberOfContractors" >Number Of Contractors: </label>
            <input type="number" id="numberOfContractors" name="numberOfContractors" max="20" placeholder="0" bind:value={selectedNumberOfContractors}>
            <label for="contractors">Choose Contractor:</label> 
            {#each {length:selectedNumberOfContractors} as contractors }
            <select name="contractors" id="contractors"> 
                {#each data.data as contractor}
                    <option value={contractor.Name}>{contractor.Name}</option>
                {/each} 
            </select>
            {/each}
        
            <button type="submit" on:submit|preventDefault>Submit</button>
        </form>

    </div>
</div>
<!-- <div class="contractor-list">
    {#each data.data as contractor } 
    <div class="contractor-single">
            <ul>
                <li>Contractor: {contractor.Name} </li>
                <li>Contractor Phone: {contractor.Phone} </li>
                <li>Contractor Percentage: {contractor.ContractorPercentage}%</li>
            </ul>
            
        </div>
        {/each}

</div> -->

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






