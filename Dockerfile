FROM node

MAINTAINER Zhanhao Wong

ENV VERSION_ARCH 0.16_linux-64bit
ENV VERSION 0.16
ENV GIT_BLOG_RESP https://github.com/shihuihzh/the_blog.git

RUN apt-get update && apt-get install -y git --no-install-recommends \
    && rm -r /var/lib/apt/lists/* \
    && mkdir /blog \
    && git clone "$GIT_BLOG_RESP" /blog \
    && mkdir /temp \
    && cd /temp \
    && curl -SLO "https://github.com/spf13/hugo/releases/download/v$VERSION/hugo_$VERSION_ARCH.tgz" \
    && tar -zxvf "hugo_$VERSION_ARCH.tgz" \
    && mv hugo /blog/blog \
    && chmod 777 /blog/blog/hugo \
    && chmod 777 /blog/blog/start.sh \
    && cd / \
    && rm -rf /temp \
    && npm install --save fontmin \
    && npm install --save upyun


WORKDIR /blog/blog
VOLUME /blog/blog/public

CMD ["./start.sh"]

EXPOSE 8080
EXPOSE 8888
