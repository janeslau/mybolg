# 项目规范

## 命名规范

> 规范说明:
>
> kebab-case: 小写字母，用短横线(-)分割命名。
>
> camelCase: 驼峰式命名。
>
> PascalCase: 首字母大写的驼峰式命名。

### 文件&文件夹命名

#### Vue 组件命名: PascalCase

- 文件: `[模块名称][功能名称].vue`，如: `CameraInfo.vue`
- 文件夹: `[模块名称][功能名称]`，如: `CameraInfo`
- 引用: `import CameraInfo from './CameraInfo.vue'`
- 使用: `<CameraInfo />`

常用 Vue 组件命名方式：

- 表单: `[模块名]Upsert.vue` ，如: `CameraUpsert.vue` ("新建"、"编辑"使用相同组件)
- 列表: `[模块名]List.vue`，如: `CameraList.vue`
- 弹窗: `Dialog[模块名]`，`visible`属性`dialog[模块名]Visible`，如: `DialogCategory.vue` `visible:dialogCategoryVisible`

#### 其他文件/文件夹命名方式: kebab-case

> 除 ( `README.md`, `LICENSE`, `CHANGELOG.md`) 等自动生成的文件除外

例如:

👍 正确：

```bash
some-module/
some-module.js
theme-dark.css
```

👎 错误：

```bash
somemodule/
someModule/
Somemodule/
SomeModule/ # vue组件除外

somemodule.js
someModule.js
SomeModule.js
Somemodule.js

themedark.css
themeDark.css
ThemeDark.css
Themedark.css
```

### 变量命名

#### JavaScript

- 变量命名方式: camelCase, 如: `const timeDim = ''`
- 函数命名方式: camelCase, 如: `function getData() {}`
- 常量命名方式: 全大写，用下划线(\_)分割, 如: `GLOBAL_CONFIG = ''`

#### CSS

- class 命名方式: kebab-case
- id 命名方式: kebab-case

#### HTML

- 标签命名方式: 全小写（**vue 组件除外**）
- class 命名方式: kebab-case

## 编辑器配置

- 编辑器: VSCode
- 所需插件:

  ```bash
  vetur
  prettier
  prettier-standard
  standardjs
  JS "Standard" Linter
  ```

  > 项目中已包含编辑器配置文件，位于: .vscode/settings.json

## Vue 组件开发

1. `views`目录内只存放页面级别组件，其他组件均放置`components`内对应目录下
1. 基础组件放至 `src/components/basic/`，业务组件放至 `src/components/[?类别]/`
1. 只有公用数据才存在`store`内，其他数据都存放在组件内
1. 组件属性排序: `name`(必需), `components`, `data`, `computed`, `mounted/created`, `methods`，如：

   ```bash
   export default {
      name: "...",

      components: {
         ...
      },

      data: () => {},

      computed: {},

      mounted: {},

      created: {},

      methods: {},

   }
   ```

## 样式

- 组件内仅能使用局部作用域样式: `<style scoped>`

## 其他

- 工具类位于 `src/utils`, 尽可能使用工具类
- 后期可能修改的配置可在 `src/configs.js`新增配置项
- 尽可能使用**箭头函数**，避免无聊的`this`传递

## 附录

- `javascript`编码标准(业界通用): [https://standardjs.com/rules-zhcn.html](https://standardjs.com/rules-zhcn.html)
- `css`( `Sass`) : [https://sass-lang.com/documentation](https://sass-lang.com/documentation)
