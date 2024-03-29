# build environment
FROM node:12.2.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN apk add git
RUN npm install --loglevel=error
#RUN npm install @vue/cli@3.7.0 -g
COPY . /app
RUN npm run build


# étape de production
FROM nginx:stable-alpine as production-stage
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# docker run -p 8080:80 --name tenancia_frontend --restart=unless-stopped -tid  tenancia_frontend
