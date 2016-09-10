FROM node

MAINTAINER Zhanhao Wong

ENV ARCH linux-64bit
ENV HUGO_VERSION 0.16

ADD ./blog /blog

RUN mkdir /temp \
    && cd /temp \
    && curl -SLO https://github.com/spf13/hugo/releases/download/v$HUGO_VERSION/hugo_$HUGO_VERSION_$ARCH.tgz \
    && tar -zxvf hugo_$HUGO_VERSION_$ARCH.tgz \
    && mv hugo /blog \
    && chmod 777 /blog/hugo \
    && cd / \
    && rm -rf /temp \
    && npm install --save fontmin \
    && apt-get update && apt-get install -y git --no-install-recommends \
    && rm -r /var/lib/apt/lists/*


WORKDIR /blog

EXPOSE 8080
EXPOSE 8888

