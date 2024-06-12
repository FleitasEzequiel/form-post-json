
const express = require("express")
const app = express();
const bodyParser = require('body-parser')
const { createDB } = require("./db");


app.use(express.json());

app.post("/", async (req, res) => {
    const connection = await createDB()
    const { nickname, nombre, email } = req.body
    connection.query('INSERT INTO usuarios(nickname,nombre,email) VALUES(?,?,?)', [nickname, nombre, email])
    res.send("jJohnson")
})
app.get("/usuario/:id", async (request, response) => {
    const connection = await createDB()

    const id = request.params.id
    const result = await connection.query("SELECT * FROM USUARIOS WHERE id_Usuario = ?", id)

    response.json(result)
});
app.delete("/:id", async (request, response) => {
    const connection = await createDB();
    const id = request.params.id
    const result = await connection.query("DELETE FROM USUARIOS WHERE id_Usuario = ?", id)
    response.send("Se eliminó el usuario")
});
app.patch("/:id", async (req, res) => {
    const connection = await createDB()
    const id = req.params.id
    const { nickname, nombre, email } = req.body
    connection.query('UPDATE usuarios SET nickname = ?, nombre = ?, email = ? WHERE id_Usuario = ? ', [nickname, nombre, email, id])
})

//Servidor Web
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: './' });
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', async (req, res) => {
    const fname = req.body.fname.toString()
    const lname = req.body.lname.toString()
    const email = req.body.email.toString()
    const connection = await createDB()
    connection.query('INSERT INTO usuarios(nickname,nombre,email) VALUES(?,?,?)', [fname, lname, email])
    res.send("Usuario nuevo")
    });
    
    app.listen(3000, () => {
        console.log('Servidor Web abierto ejecutando en el puerto 3000');
    });
