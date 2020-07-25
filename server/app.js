
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
    skeleton_string: String,
    skeleton: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    }
});

const Template = mongoose.model('Template', schema);

const instance_creator = async () => {
    const navbar = new Template({
        id: 0,
        name: 'Navbar',
        styles: {
            background: 'blue',
            height: '100px',
            width: '100%'
        },
        skeleton_string: "<div style={this.styles}> <h1>{this.name}</h1><p>{this.background}</p></div>",
        skeleton: function() {
            return 'hello there';
        }
    });

    const save = await navbar.save();
    return save;
}


app.post('/api/create_component', async (req, res) => {
    try {
        let data = instance_creator();
        res.send(data);
    }
    catch (ex) {
        res.send(ex);
    }
});

app.get('/api/get_component', async (req, res) => {
    try {
        const component = await Template
        .findOne({
            id: 0
        })
        .catch(ex => console.log('UNABLE TO FIND COMPONENT', ex));
        console.log(component);
        res.send(component);
    }

    catch (ex) {
        console.log('Unable to retrieve component!', ex);
    }
});

app.listen(port, () => {
    console.log(`App is live on server ${port}!`);
});