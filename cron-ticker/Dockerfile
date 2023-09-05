# FROM --platform=$BUILDPLATFORM node:19.2-alpine3.16
FROM node:19.2-alpine3.16 as deps
WORKDIR /app
COPY package.json .
RUN npm install


FROM node:19.2-alpine3.16 as tests
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules/
COPY . .
RUN npm run test


FROM node:19.2-alpine3.16 as prod-deps
WORKDIR /app
COPY --from=tests /app/package.json .
RUN npm install --prod 


FROM node:19.2-alpine3.16 as runner
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules/
COPY app.js ./
COPY tasks/ ./tasks
CMD [ "npm", "start" ]
