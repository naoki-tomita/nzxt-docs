FROM node:20.0-bullseye-slim
WORKDIR /app
COPY ./app .
RUN yarn --production
RUN yarn build

CMD ["yarn", "serve"]
