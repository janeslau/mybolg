# 工程协作

## 拉取代码

```bash
  $ git clone https://git.code.tencent.com/culture-tourism/pubop-fe-admin.git

  ## 新建个人开发分支, 开发工作仅在个人开发分支进行
  $ git checkout -b [英文用户名]

  ## 推送到远程分支
  $ git push -u origin [英文用户名]
```

## 代码提交

**注意: 请勿直接 push 到 master 分支**

###  1. 本地个人分支提交

```bash
$ git commit
## 选择要提交的文件、合适的提交类型、简短的提交信息即可
```

###  2. 合并远程 master 分支最新代码到个人分支

```bash
## 确保在个人分支执行
$ git pull origin master --rebase

## （这一步可能会产生冲突，本地解决并commit个人分支即可）
```

###  3. 本地验证

合并代码后，启动开发服务器，验证各项功能正常后再进行下一步

###  4.  推送个人分支到远端

```bash
## 在个人开发分支上操作
$ git push
```

###  5.  合入 master 分支

⚠️ 注意: master 的代码为稳定版本，可随时部署，请勿合入有问题的分支。

在 web 界面发起 Merge Request 到 master:

[https://git.code.tencent.com/culture-tourism/pubop-fe-admin/merge_requests/new](https://git.code.tencent.com/culture-tourism/pubop-fe-admin/merge_requests/new)
