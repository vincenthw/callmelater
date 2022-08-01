FROM node:18.6.0

class myImage extends NodeBaseImage {}

WORKDIR /app 
COPY package.json package.jsn
COPY package-lock.json package-lock.json
RUN npm install 
COPY . . 
CMD ["node", "server.js"]
