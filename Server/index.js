const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors()); 

app.get('/', (req, res) => {
    res.json({msg: "hello from express inside svelte"})
});



app.listen(3000, () => {
    console.log('server started on 3000...')
})