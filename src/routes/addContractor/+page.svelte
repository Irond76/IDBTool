<script>
    export let data;
    </script>
<div>
    <h1>Add Contractor :</h1>
</div>
    <div class="form-container"> 
        <div class="form">
            <form action="/addContractor" method="post">
                <label for="name">Contractor Name:</label>
                <input type="text" name="name" id="name" placeholder="John Doe">
                <label for="phone" >Phone Number:</label>
                <input type="tel" name="phone" id="phone" placeholder="(555) 555-5555">
                <label for="percentage" >Contractor Percentage: %</label>
                <input type="number" name="percentage" id="percentage" max="100">
                <button type="submit" on:submit|preventDefault>Submit</button>
            </form>

        </div>
    </div>
    <div class="contractor-list">
        {#each data.data as contractor } 
        <div class="contractor-single">
                <ul>
                    <li>Contractor: {contractor.Name} </li>
                    <li>Contractor Phone: {contractor.Phone} </li>
                    <li>Contractor Percentage: {contractor.ContractorPercentage}%</li>
                </ul>
                
            </div>
            {/each}

    </div>

    <style>
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
    </style>