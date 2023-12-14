<section>
    <div class="welcome-container">
        <h1 class="welcome">Welcome To IDBTool</h1>
        <hr>
        <h2>What would you like to do today?</h2>
    </div >
    <div class="action-container">
        <div class="action-buttons">
            <div class="add-contractor-btn">
                <a href="/addContractor">Add Contractor</a>
            </div>
        </div>
        <div class="action-buttons">
            <div class="add-contractor-btn">
                <a href="/addInvoice">Add Invoice Data</a>
            </div>
        </div>
        
    </div>
</section>

<style>
    .welcome-container {
        width: 80dvw;
        margin: 0 auto;
        text-align: center;
        color: #fff;
    }

    .action-buttons {
        width: 25%;
        margin: 0 auto;
    }
    .add-contractor-btn {
        border: 1px solid #fff;
        border-radius: 1em;
        display: grid;
        width: 10dvw;
        height: 20dvh;
        text-align: center;
    }
   .add-contractor-btn a {
        width: 10dvw;
        display: flex; 
        height: 20dvh;
        border-radius: 1em;
        text-decoration: none;
        color: #fff;
        align-items: center; 
        justify-content: center; 

    }
   .add-contractor-btn a:hover {
        align-self: center;
        box-shadow: -3px -3px 15px #646464;
        text-decoration: none;
        background-color: #fff;
        color: black;
    }
    
   .action-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 1em;
    margin-top: 5em;

   }

</style>