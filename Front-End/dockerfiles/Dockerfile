FROM nginx:1.14-alpine

RUN apk update && \
    apk fix && \
    apk add nodejs && \
    apk add nodejs-npm

# ENV NG_CLI_ANALYTICS=ci
WORKDIR /usr/src/app/

RUN npm install -f @angular/cli

# Leverage caching mechanism for npm modules
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install
# Fix problem with path for ng
RUN npm link @angular/cli

COPY . .

RUN ng build --prod

RUN cp -rf ./dist/* /usr/share/nginx/html/

# FROM nginx:alpine
# COPY --from=build /usr/src/app/dist /usr/share/nginx/html
