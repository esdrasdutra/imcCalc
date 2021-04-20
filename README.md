# imcCalc
## Projeto desenvolvido como Teste Técnico para o LabLift

O índice de massa corporal (IMC) é uma medida padronizada internacionalmente que classifica a situação nutricional de adultos de maneira simples. Portanto, médicos frequentemente necessitam calcular o IMC de seus pacientes. Neste case foi criada uma aplicação simples para calcular o IMC!.

## Parte 1 - Back-End 
Foi criada uma API utilizando Python / Django Rest Framework.

Em sua rota, a API recebe dois parâmetros (peso e altura) e retorna o cálculo do IMC para os parâmetros fornecidos, caso os parâmetros iniciais sejam validados como valores positivos.

## Parte 2 - Front-End
Foi criada uma Single Page Application utilizando React.

Ela possuí um formulário com os campos peso e altura, que são preenchidos pelo usuário com validação para aceitar apenas valores positivos.
Ao submeter o formulário, a requisição é enviada para a API criada na parte 1 e o resultado do IMC é então exibido na mesma página.

## COMO USAR
Para execução do projeto é necessário ter instalado em sua máquina:

[Python 3](https://www.python.org/downloads/)

[Node.js](https://nodejs.org/en/download/)

Se tudo estiver ok, caminhe até o diretório onde o projeto se encontra e crie uma venv, afim de ter um ambiente de desenvolvimento que não afete as configurações de outros projetos existentes. 

No meu caso, instalei a seguinte:

`pip install python3-venv`

Ative o ambiente virtual com:

`source venv/bin/activate`

E em seguida, caminhe para a pasta do backend:

`cd /backend` 

Prossiga então com a instalação dos requerimentos:

`python3 pip intall requirements.txt`

Se tudo ocorrer bem, a proxima ação será a migração do Model da api:

`python3 manage.py migrate`

Ao final, será possível iniciar o serviço:

`python3 manage.py runserver`

Para o frontend navegue até a pasta correspondente:

`cd /imcCalc/frontend`

E prossiga com a instalação dos requerimentos:

`npm install`

Se der tudo certo, você poderá iniciar o serviço:

`npm start`




