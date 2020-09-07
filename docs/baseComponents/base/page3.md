# 本地开发

## 环境配置

- [nodejs](https://nodejs.org/) v10+
- 包管理工具: `yarn`(推荐)，或 `npm`

  yarn 安装方法:

  - [windows](https://classic.yarnpkg.com/en/docs/install#windows-stable)
  - [macos](https://classic.yarnpkg.com/en/docs/install#mac-stable)

- 构建工具: [vue-cli](https://cli.vuejs.org/)@4.2.3
  安装方法:

  ```bash
  yarn global add @vue/cli@4.2.3
  # 或
  npm install -g @vue/cli@4.2.3
  ```

## 安装项目依赖

```bash
yarn
# 或
npm install
```

## 启动服务

```bash
yarn dev
# 或
npm run dev
```

浏览器访问 [http://localhost:8000](http://localhost:8000)

## 项目结构说明

```bash
- src
  - components/ # 组件目录
    - basic/ # 基础组件
    - application/ # 业务组件
  - graphql/ # graphql文件
  - router/ # 路由
  - store/ # vuex
  - stories/ # storybook示例
  - views/ # vue页面组件
  - utils/ # 工具类
- assets/ # 静态资源
- public/ # 公共静态文件
- docs/ # 项目文档
- .storybook/ # 组件共享展示
- .vscode/ # 编辑器配置
- apollo.config.js # vue-apollo(graphql client)配置
- babel.config.js # babel配置
- vue.config.js # vue-cli配置
```
