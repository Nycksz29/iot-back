const Temperatura = require("..models/Temperatura")

const receberTemperatura = (req,res) => {

    const {temperatura} = req.body
    

    const sensor = new Temperatura(temperatura)

    res.json(resultado)
}

const listarTemperatura = async (req, res) =>{
    const dados await Temperatura.listar()
    res.json(dados)
}

module.exports = {
    receberTemperatura,
    listarTemperatura
}