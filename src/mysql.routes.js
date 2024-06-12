const { Router } = require("express")

const { obtenerUsuarios } = require("./mysql.controllers")

const router = Router()


// API - REST

router.get("/us", obtenerUsuarios)



module.exports = router;