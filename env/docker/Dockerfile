FROM node:14-stretch-slim
WORKDIR /app
COPY ./app .
COPY ./HerokuWake.js .
RUN yarn --production
RUN yarn build
CMD ["yarn", "start"]
