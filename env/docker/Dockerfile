FROM node:24-bookworm-slim
WORKDIR /app
COPY ./app .
RUN yarn --production
RUN yarn build

CMD ["yarn", "serve"]
