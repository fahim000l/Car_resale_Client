const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const app = express();


const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from resale.com server');
});


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.tzinyke.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {

    const categoriesCollection = client.db('carResale').collection('categories');
    const productsCollection = client.db('carResale').collection('products');

    try {
        app.get('/categories', async (req, res) => {
            const query = {};
            const collections = await categoriesCollection.find(query).toArray();
            res.send(collections);
        });
    }
    finally {

    }
}


run().catch(err => console.error(err));


app.listen(port, () => {
    console.log('resale.com is running on port :', port);
});