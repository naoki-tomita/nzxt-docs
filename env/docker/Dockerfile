FROM node:14-stretch-slim
WORKDIR /app
COPY ./app .
RUN yarn --production
RUN yarn build

CMD ["yarn", "serve"]
