const express = require('express'); 
const bodyParser = require('body-parser'); 
const controller = require('./controller'); 
const massive = require('massive');
require('dotenv').config(); 

const app = express(); 
app.use(bodyParser.json()); 

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance); 
}).catch(error => console.log('error connecting', error)); 

app.post('/api/houses', controller.create);
app.get('/api/houses', controller.getAll);
app.get('/api/houses/:id', controller.getOne);
app.put('/api/houses/:id', controller.update);
app.delete('/api/houses/:id', controller.delete);

const port = process.env.PORT || 4000; 
app.listen(port, () => {
    console.log(`Hey I'm listening on ${port} 🐙`); 
}); 