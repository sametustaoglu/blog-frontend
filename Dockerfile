# pull official base image
FROM node:14.18.1-alpine3.14 as build
# set working directory
WORKDIR /app
LABEL tier="frontend"
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json /app/package.json
#COPY package-lock.json /app/package-lock.json
RUN npm install

# add app
COPY . .

# start app
RUN npm run build

# production environment
FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html/
COPY docker_resources/etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]