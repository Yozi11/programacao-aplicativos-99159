const express = require("express");
const cors = require('cors');
const { Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('api','root','',{
    host: 'localhost',
    dialect:'mysql'

});

// 2. definindo o modelo de dados
const Cliente = sequelize.define('Cliente', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


//3. configuraçao do servidor
const app = express();
app.use(cors());
app.use(express.json());

const port = 3001;

//4. rotas da API

// Rota para criar um novo cliente
app.get('/clientes', async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (error) {
        console.error('Erro ao buscar clientes:', error);
        res.status(500).json({ error: 'Erro ao buscar clientes' });
    }
});

app.post('/clientes', async (req, res) => {
    try {
        const { nome, email, telefone } = req.body;
        const novoCliente = await Cliente.create({ nome, email, telefone });
        res.status(201).json(novoCliente);
    }   catch (error) {
        res.status(500).json({ error: 'Erro ao criar cliente' });
        
    }
});

// Sincronizar o modelo com o banco de dados e iniciar o servidor
sequelize.sync().then(() => {
    console.log('Banco de dados sincronizado');
    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
}).catch((error) => {
    console.error('Erro ao sincronizar o banco de dados:', error);
});

