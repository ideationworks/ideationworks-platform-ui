FROM node:alpine AS builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

#
# nginx container
#
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html

COPY --from=builder /app/dist/ideation-platform-app /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf
