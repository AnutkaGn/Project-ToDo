FROM node:latest

RUN mkdir -p /aws/src
RUN mkdir -p /aws/public
WORKDIR /aws

COPY package.json /aws
COPY public /aws/public
COPY src /aws/src

RUN npm install --omit=dev --force

EXPOSE 3000/tcp

CMD ["npm", "run", "start"]