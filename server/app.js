
const express = require('express');
const app = express();
const port = process.env.port || 3001;
const bodyP = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dpg1919:Claptoncocaine13@cluster0.8wsvv.mongodb.net/Templates?retryWrites=true&w=majority')
.then(() => {
    console.log('Mongoose is synced up!');
})
.catch(ex => consxe.log('MONGOOSE ERROR CONNECTING', ex));


const schema = new mongoose.Schema({
    id: Number,
    name: String,
    styles: {
        background: String,
        height: String,
        width: String
    },
    skeleton: String
});

const Template = mongoose.model('Template', schema);


app.listen(port, () => {
    console.log(`App is live on server ${port}!`);
});