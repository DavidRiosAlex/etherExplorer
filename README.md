Crearse una cuenta en https://etherscan.io/
Validar la cuenta
Ir a Mi Perfil > Api keys > agregar > elige un nombre para la api key y creala, copia el api key token.

crea un archivo .env en el proyecto y agrega lo siguiente: 

```

REACT_APP_ETHERSCAN_KEY=${apikey}
REACT_APP_ETHERSCAN_URL=https://api.etherscan.io

```

reemplaza ${apikey} por tu api key.

ve a la terminal, haz ``` npm install --legacy-peer-deps para instalar ``` las dependencias y luego npm start.
