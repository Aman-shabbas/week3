// const { MongoClient } = require('mongodb')
const MongoClient = require('mongodb').MongoClient;

let dbConnection
let collection
const uri = 'mongodb+srv://amanshabbas:UYM5su1Ncm7ZJEjj@cluster0.jtkhubk.mongodb.net/?retryWrites=true&w=majority';


module.exports = {
    connectToDb: (cb) => {
        return MongoClient.connect(uri)
            .then((client) => {
                // Get the database instance
                dbConnection = client.db('week3test');
                collection = dbConnection.collection('users')
                return cb();
            })
            .catch((error) => {
                console.error('Error connecting to MongoDB:', error);
            });
    },

    getDb: () => { return dbConnection },
    
}