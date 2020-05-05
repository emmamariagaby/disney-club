const mongodb = require('mongodb')


async function connect() {
    const client = mongodb.MongoClient
    const url = "mongodb://localhost:27017/disney"
    const options = { useUnifiedTopology: true }
    const connection = await client.connect(url, options)
    console.log('Connection to database has been established')
    const db = connection.db('disney')
    console.log('Database has been created')
    return db
}

/**
 * 
 * @param {mongodb.Db} db 
 */
async function createCollections(db) {
    const usersCollection = await db.createCollection('users')
    console.log('Collections has been created')
    // create all needed collections
    return [usersCollection]
}

/**
 * 
 * @param {mongodb.Collection} collection 
 */
async function insertUser(collection) {
    const res = await collection.insertOne({
        name: 'Ellen',
        age: 7,
        password: 's3cr3t'
    })
    console.log('A user was created')
} 

/**
 * 
 * @param {mongodb.Collection} collection 
 */
async function updateUser(collection) {
    const res = await collection.updateOne({ name: 'Ellen' }, { $set: { "age" : 8 } })
    console.log('A user was updated')
}

/**
 * 
 * @param {mongodb.Collection} collection 
 */
async function deleteUsers(collection) {
    const res = await collection.deleteMany({ name: 'Elias' })
    console.log('A user was maybe deleted, count: ', res.deletedCount)
}

/**
 * 
 * @param {mongodb.Collection} collection 
 */
async function findUsers(collection) {
    const users = await collection.find({ name: 'Malvina' }).toArray()
    console.log(users)
    return users;
}

async function run() {
    try {
        const db = await connect()
        const collections = await createCollections(db)
        insertUser(collections[0])
        updateUser(collections[0])
        deleteUsers(collections[0])
        const users = findUsers(collections[0])

    } catch (err) {
        console.error(err)
    }
}

run()