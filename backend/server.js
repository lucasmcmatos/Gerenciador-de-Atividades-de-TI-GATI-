const express = require('express');
const app = express();
const port = 3000;
const {Pool} = require('pg');
const dbConfig = require('./dbConfig');

// Configuracoes de banco de dados

const pool = new Pool(dbConfig);

pool.connect().then(()=>{
    console.log('Conexão com o banco de dados foi BEM sucedida.')
}).catch(err => {
    console.log('Houve um erro na conexão com banco de dados:', err)
})

// Configuracoes de servidor

app.get('/' , (req,res)=>{
    res.send('Gerenciador de Atividades de TI')
})

app.listen(port , ()=>{
    console.log('Servidor rodando ...')
})