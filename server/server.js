import  express from 'express'
import { join, dirname } from 'path';
import { Low, JSONFile } from 'lowdb';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

import cors from 'cors';
const app = express();
app.use(cors())

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3200, function () {
    console.log('listen 3200')
})

const __dirname = dirname(fileURLToPath(import.meta.url));

const file = join(__dirname, 'db.json');
const adapter = new JSONFile(file);
let db = new Low(adapter);

// TO GET BOOKLIST API
app.get("/getBookList", async (req,res) => {
    await db.read()
    const {books} = db.data;
    
    res.send({status:200, data:books, message:"successfully get books list" });
})

// TO CREATE BOOK API
app.post("/createBook", async (req,res) => {
    await db.read()
    const {books} = db.data;
    books.push(req.body);
    await db.write();
    
    res.send({status:200, message:"successfully added book" });
})

// TO DELETE BOOK API
app.post("/deleteBook", async (req,res) => {
    let { indexJson } = req.body
    await db.read()
    const {books} = db.data;
    books.splice( indexJson, 1 );
    await db.write();
    
    res.send({status:200, data:books, message:"successfully deleted book" });
})

export default  app;