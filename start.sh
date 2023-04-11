#!/bin/bash

#################################################################
# Script de automação de projeto
# Requisitos: docker, docker-compose
#
# Descrição: Script de inicialização de projeto docker
#
# uso: bash start.sh   ou sh start.sh
#
#################################################################


echo '_______  _______  ________
|  ____| |  ____| | _____|
| |__    | |__    | |
|  __|   |  __|   | |
| |____  | |      | |____ 
|______| |_|      |______|'
echo ''
echo ''

echo '  -- generate relay queries  -- \n'
yarn relay
echo '  -- build  -- \n'
yarn build
echo '  -- start  -- \n'
yarn dev


