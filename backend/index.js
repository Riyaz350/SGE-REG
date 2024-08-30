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


const registrations = client.db("SGE_REG").collection("registrations");

const dbConnect = async () => {
    try {
        await client.connect();

        app.get('/', async (req, res) => {
            res.send('Server is running')
        })

        app.get('/registrations', async (req, res) => {
            const result = await registrations.find().toArray()
            res.send(result)
        })

        app.post(`/registrations`, async (req, res) => {
            const registration = req.body
            const result = await registrations.insertOne(registration)
            res.send(result)
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



