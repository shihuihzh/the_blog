+++
date = "2016-01-17T21:52:08+08:00"
draft = false
title = "Git 学习笔记"

+++

### 创建版本库

- 初始化一个 Git 仓库，使用 `git init` 命令

- 添加文件到 Git 仓库，分两步
    - 第一步，使用命令 `git add`，注意，可反复多次使用，添加多个文件
    
    - 第二步，使用命令 `git commit`，完成

### 版本管理

#### 版本回退
- 要随时掌握工作区的状态，使用 `git status` 命令

- 如果 `git status` 告诉你有文件被修改过，用git diff可以查看修改内容

- HEAD指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令 `git reset --hard commit_id` 

- 用 `git log` 可以查看提交历史，以便确定要回退到哪个版本

- 用 `git reflog` 查看命令历史，以便确定要回到未来的哪个版本


#### 撤销修改
- 场景1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令 `git checkout -- file`

- 场景2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令 `git reset HEAD file` ，就回到了场景1，第二步按场景1操作。

- 场景3：已经提交了不合适的修改到版本库时，想要撤销本次提交，参考版本回退，不过前提是没有推送到远程库。

#### 删除文件
- 命令 `git rm` 用于删除一个文件。如果一个文件已经被提交到版本库，那么你永远不用担心误删，但是要小心，你只能恢复文件到最新版本，你会丢失最近一次提交后你修改的内容。

### 远程仓库

#### 添加远程仓库
- 要关联一个远程库，使用命令 `git remote add origin git@server-name:path/repo-name.git` 
关联后，使用命令 `git push -u origin master` 第一次推送master分支的所有内容

- 此后，每次本地提交后，只要有必要，就可以使用命令 `git push origin master` 推送最新修改；

- 分布式版本系统的最大好处之一是在本地工作完全不需要考虑远程库的存在，也就是有没有联网都可以正常工作，而 `SVN` 在没有联网的时候是拒绝干活的！当有网络的时候，再把本地提交推送一下就完成了同步，真是太方便了！

#### 远程仓库克隆
- 要克隆一个仓库，首先必须知道仓库的地址，然后使用 `git clone` 命令克隆。

- Git支持多种协议，包括 `https` ，但通过 `ssh` 支持的原生 `git` 协议速度最快。

### 分支管理

#### 创建与合并分支
- 查看分支：`git branch`

- 创建分支：`git branch name`

- 切换分支：`git checkout name`

- 创建+切换分支：`git checkout -b name`

- 合并某分支到当前分支：`git merge name`

- 删除分支：`git branch -d name`

#### 解决冲突
- 当 `Git`无法自动合并分支时，就必须首先解决冲突。解决冲突后，再提交，合并完成。

- 用 `git log --graph` 命令可以看到分支合并图。

#### 分支策略
> 在实际开发中，我们应该按照几个基本原则进行分支管理：
首先，`master` 分支应该是非常稳定的，也就是仅用来发布新版本，平时不能在上面干活；

> 那在哪干活呢？干活都在 `dev` 分支上，也就是说，`dev` 分支是不稳定的，到某个时候，比如 `1.0` 版本发布时，再把 `dev` 分支合并到 `master` 上，在 `master` 分支发布 `1.0` 版本；

> 你和你的小伙伴们每个人都在 `dev` 分支上干活，每个人都有自己的分支，时不时地往 `dev` 分支上合并就可以了。

- `Git`分支十分强大，在团队开发中应该充分应用。

- 合并分支时，加上 `--no-ff` 参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并，而 `fast forward` 合并就看不出来曾经做过合并。

#### BUG 分支
- 修复 `bug` 时，我们会通过创建新的 `bug` 分支进行修复，然后合并，最后删除；

- 当手头工作没有完成时，先把工作现场 `git stash` 一下，然后去修复 `bug` ，修复后，再 `git stash pop` ，回到工作现场。

#### Feature 分支
- 开发一个新 `feature`，最好新建一个分支；

- 如果要丢弃一个没有被合并过的分支，可以通过 `git branch -D name` 强行删除。

#### 多人协作
- 查看远程库信息，使用 `git remote -v`

- 本地新建的分支如果不推送到远程，对其他人就是不可见的；

- 从本地推送分支，使用 `git push origin branch-name` ，如果推送失败，先用git pull抓取远程的新
- 提交

- 在本地创建和远程分支对应的分支，使用 `git checkout -b branch-name origin/branch-name` ，本地和远程分支的名称最好一致

- 建立本地分支和远程分支的关联，使用 `git branch --set-upstream branch-name origin/branch-name`

- 从远程抓取分支，使用git pull，如果有冲突，要先处理冲突

### 标签管理

#### 添加标签
- 命令 `git tag name` 用于新建一个标签，默认为HEAD，也可以指定一个commit id

- `-a tagname -m "blablabla..."`可以指定标签信息

- `-s tagname -m "blablabla..."` 可以用PGP签名标签

- 命令 `git tag` 可以查看所有标签

#### 编辑标签
- 命令 `git push origin tagname` 可以推送一个本地标签；

- 命令 `git push origin --tags` 可以推送全部未推送过的本地标签；

- 命令 `git tag -d tagname` 可以删除一个本地标签；

- 命令 `git push origin :refs/tags/tagname` 可以删除一个远程标签。

#### 忽略特殊文件
> 不需要从头写.gitignore文件，GitHub已经为我们准备了各种配置文件，只需要组合一下就可以使用了。所有配置文件可以直接在线浏览：https://github.com/github/gitignore
 1. 忽略操作系统自动生成的文件，比如缩略图等；
 2. 忽略编译生成的中间文件、可执行文件等，也就是如果一个文件是通过另一个文件自动生成的，那自动生成的文件就没必要放进版本库，比如Java编译产生的.class文件；
 4. 忽略你自己的带有敏感信息的配置文件，比如存放口令的配置文件。
 
#### 配置别名

    # 状态
    $ git config --global alias.st status
    
    # 当然还有别的命令可以简写，很多人都用co表示checkout，ci表示commit，br表示branch：
    # --global 参数是全局参数，也就是这些命令在这台电脑的所有Git仓库下都有用。
    $ git config --global alias.co checkout
    $ git config --global alias.ci commit
    $ git config --global alias.br branch
    
    # 命令git reset HEAD file可以把暂存区的修改撤销掉（unstage），重新放回工作区。既然是一个unstage操作，就可以配置一个unstage别名：
    $ git config --global alias.unstage 'reset HEAD'

    # 配置一个git last，让其显示最后一次提交信息：
    $ git config --global alias.last 'log -1'
    
    # 丧心病狂的 lg
    git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
    
    

