FROM node:14-alpine

#WORKDIR /usr/src/app
COPY package.json yarn.lock ./

COPY . .
RUN yarn install


USER node
EXPOSE 5000
CMD ["yarn", "start"]