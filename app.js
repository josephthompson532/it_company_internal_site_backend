const express = require('express')
const { DynamoDBClient, PutItemCommand, GetItemCommand } = require('@aws-sdk/client-dynamodb')

const app = express()

const tableName = 'lillium_industries_internal_database'
const client = new DynamoDBClient({ region: 'us-east-1' })

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(80, () => {
    console.log("Listening on port 3000...")
});