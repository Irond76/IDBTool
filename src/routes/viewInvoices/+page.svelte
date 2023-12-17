<h1>View Invoices </h1>
<script>
    export let data;
    console.log(data);
    </script>

    <div class="form-container">
        <h1>Invoices</h1> 
    </div>
    <div class="contractor-list">
        {#each data.data as invoice } 
        <div class="contractor-single">
                <ul>
                    <li>Invoice Number: {invoice.InvoiceNumber} </li>
                    <li>DentMoney: $ {invoice.DentMoney} </li>
                    <li>NumberOfContractors: {invoice.NumberOfContractors}</li>
                    <li>ContractorNames: {invoice.ContractorNames}</li>
                    <li>ContractorPercent: {invoice.ContractorPercent}</li>
                    <li>Paid To Contractor: $ {invoice.ContractorTotalAmounts}</li>
                    <li>Shop Money: $ {invoice.ShopMoney}</li>
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
    
        li {
            list-style: none;
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