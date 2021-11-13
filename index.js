const express = require('express');

const app = express();

app.set('port', 3000);

app.get('/', (req,res) =>{

    res.send('Bienvenidos')
});



app.listen(app.get('port'), () => {
    console.log(`Bienvenido a mi aplicación de node puerto ${app.get('port')}`)
});

