<script>
    export let data;
    </script>
<div>
    <h1>Add Contractor</h1>
</div>
    
    <form action="/addContractor" method="post">
        <label for="name">Employee Name</label>
        <input type="text" name="name" id="name">
        <label for="job">Job</label>
        <input type="text" name="job" id="job">
        <button type="submit" on:submit|preventDefault>Submit</button>
    </form>
    
    {#each data.data as per }
        <ul>
            <li>Employee: {per.name} || Job: {per.job}</li>
        </ul>
        
    {/each}

    <style>
        
    </style>