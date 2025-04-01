const inquirer = require('inquirer')
const chalk = require
 
const fs = require('fs')
const { type } = require ('os')
   operation()
 inquirer.prompt([
    {
        type: 'list',
        name: 'action',
        messagem: 'escolha duas opcoes no menu ',
        choices: [
            'criar conta',
            'consultar saldo',
            'depositar',
            'sacar',
            'sair',
        ],
    }
 ]). then ((answer) => (
    const action = answer['action']
    if(action === 'Criar conta'){
    console. log ( 'Criando a conta...')
    Jelse if(action === 'Consultar saldo'){felse if(action === 'Consultar saldo'){
        console. log( 'Consultando saldo...
        Jelse if(action === 'Depositar'){
        console. log ('Deposintado... ')
        Jelse if(action === 'Sacar'){
        console. log ('Retirndo saque...')
        Jelse if(action === 'Sair'){
        console. log ('Saindo do sistema..')
        Jelse{
        console. log ('Opicao Invalida!')