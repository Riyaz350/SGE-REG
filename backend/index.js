const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
require('dotenv').config()

//middleware
app.use(cors())
app.use(express.json())

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gx7mkcg.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


const coffeeCollection = client.db("coffeeDB").collection("coffee");
const userCollection = client.db("coffeeDB").collection("user");

const dbConnect = async () => {
    try {
        await client.connect();

        app.get('/', async (req, res) => {
            res.send('Server is running')
        })

    } catch (error) {
        console.log(error.name, error.message);
    } finally {
        console.log("Database Connected successfully ✅");

        app.listen(port, () => {
            console.log(`Your port is ${port}`)
        })
    }
}
dbConnect();



