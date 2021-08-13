FROM node:14-stretch-slim
WORKDIR /app
COPY . .
RUN yarn --production
RUN yarn build
CMD ["yarn", "start"]
