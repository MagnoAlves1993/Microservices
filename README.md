# Microservices
Repositório para teste com api gateway em node para microserviços

# Motivos
O maior motivo de realizar esse projeto é para estudar como microserviços funcionam com api-gateway e como ẽ possĩvel utilizar duas linguagens diferentes no backend.

Basicamente foi seguido o tutorial desse artigo https://medium.com/caquicoders/criando-um-simples-api-gateway-com-nodejs-e-express-2ec5369e975d, porém com algumas modificações, como por exemplo, utilizar uma segunda linguagem de programação em um dos microserviços

# Requisitos
Javascript: Node, Express, express-http-proxy, nodemon
Python 3, Flask, virtualenv

# Instalação e Inicialização
Acesse as pastas productsApi e usersApi, instale de acordo com a linguagem do projeto e inicie cada uma delas.
productsApi está em `python` e usersApi está em `javascript`

Após iniciar, products Api estará na porta 3002 enquanto a usersApi estará na porta 3001.

Acesse a pasta Api Gateway e inicie com `npm install` e depois `npm start` e agora a api-gateway fará a chamada dos dois microserviços na rota 3000.
