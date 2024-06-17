FROM nginx:alpine 
RUN apk update && apk upgrade
RUN apk add --update nodejs npm
RUN apk add --update npm
RUN mkdir -p /tmp/site
COPY . /tmp/site
WORKDIR /tmp/site
RUN mkdir -p /tmp/site/_site
RUN npm install && npm run build && mv /tmp/site/_site/* /usr/share/nginx/html

# FROM nginx:alpine 
# COPY ./_site /usr/share/nginx/html


# FROM node:lts-alpine
# RUN apk update && apk upgrade && \
#     apk add --no-cache git \
#     make \
#     g++ \
#     sudo \
#     curl \
#     udev \
#     ttf-freefont \
#     build-base \
#     libpng \
#     libpng-dev \
#     libtool \
#     jpeg-dev \
#     pango-dev \
#     cairo-dev \
#     giflib-dev \
#     py3-pip \
#     autoconf \
#     automake \
#     ffmpeg
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app
# COPY ./package.json /usr/src/app/
# ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD="false"
# RUN npm install --production && npm cache clean --f


