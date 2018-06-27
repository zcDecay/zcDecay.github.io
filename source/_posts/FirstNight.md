---
title: first blog
description: 我的第一篇测试博客
date: 
categories: blog
tags:
- blog
---
Welcome to [Hexo](https://hexo.io/)! This is your very first post. Check [documentation](https://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [troubleshooting](https://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).

## Quick Start

### Create a new post

``` bash
$ hexo new "My New Post"
```

More info: [Writing](https://hexo.io/docs/writing.html)

### Run server

``` bash
$ hexo server
```

More info: [Server](https://hexo.io/docs/server.html)

### Generate static files

``` bash
$ hexo generate
```

More info: [Generating](https://hexo.io/docs/generating.html)

### Deploy to remote sites

``` bash
$ hexo deploy
```

More info: [Deployment](https://hexo.io/docs/deployment.html)


    字数统计 : 
    <span class="post-count"><%= wordcount(post.content) %></span>
    阅读时长预计 :
    <span class="post-count"><%= min2read(post.content) %>分</span>
    总字数统计 :
    <span class="post-count"><%= totalcount(site) %></span>