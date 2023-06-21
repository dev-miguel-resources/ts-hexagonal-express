# Carpeta Deployment, node-api image, red: node-app-net
FROM node:alpine3.16 AS DEPLOYMENT

# Esto es para instalar un bash para luego instalar desde un proceso remoto un optimizador de dependencias
RUN apk add curl bash --no-cache

# Vamos a descargar un proceso de descarga binario desde esta imagen mediante un curl
# El parámetro -b es una opción para especificar un directorio de destino para el binario descargado. En este caso, el binario se instala en el directorio /usr/local/bin.
# El parámetro -f se usa para forzar a curl a seguir adelante
# El parámetro -s es un indicador de silencio y se usa para evitar que curl muestre los mensajes de progreso mientras descarga el binario.
RUN curl -sf https://gobinaries.com/tj/node-prune | sh -s -- -b /usr/local/bin

# Directorio para almacenar archivos de la imagen
WORKDIR /build

# Copiar el package.json
COPY package.json .

# Instalamos los paquetes de node
RUN yarn install

# Copiamos el resto de archivos al workdir
COPY . .

# Ejecutar el build
RUN yarn run build

# Especificar el flag --production
RUN yarn install --production

# Interceptar el proceso previo a prod. mediante el ejecutable que ya tenems a mano el node-prune para verificar que solo vengan las dependencias de prod. y optimizar su código
RUN /usr/local/bin/node-prune

# Carpeta Production: Esta imagen ya no va a tener recursos que no necesita
FROM node:alpine3.16

# Directorio final donde cae el código optimizado y desde donde levanto mi app
WORKDIR /app

# Crear una carpeta dentro del workdir llamada node_modules que reciba lo del node_modules del DEPLOYMENT
COPY --from=DEPLOYMENT /build/node_modules ./node_modules

# Copiar el package.json a esta imagen desde la imagen anterior
COPY --from=DEPLOYMENT /build/package.json ./package.json

# Copiar el código generado para js a partir de la imagen anterior
COPY --from=DEPLOYMENT /build/dist ./dist

# Levantar la app desde la imagen
CMD ["yarn", "run", "prod"]




