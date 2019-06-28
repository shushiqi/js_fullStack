### 模块
- env2  环境变量装载器
    加载.env文件，将其中的数据加载在process.env上
    env2 允许你在 env.json 或者 .env 文件中存储你的环境变量，该文件在你的应用程序启动时加载。
    简单来说，env2支持将敏感内容存放在一个有特殊后缀的文件内进行存储（注意配置gitignore），使用时通过require('env2')(path)的方式进行导入，通过process.env的方式引用