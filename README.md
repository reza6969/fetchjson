# fetchjson

# typescript-the-complete-developers-guide

# Typescript compiler: npm install -g typescript ts-node

# tsc --help

# npm init -y

# npm install axios

# tsc index.ts

# node index.js

# ts-node index.ts

is also encountering the same issue with the 'console' object not being recognized.
To fix this issue while using 'ts-node', you can pass the compiler option '--project' followed by the path to your tsconfig.json file which includes the 'dom' library. Here's an example command you can use:

# ts-node --project tsconfig.json index.ts

# node 14.17.5 on my pc

# ts-node --project tsconfig.json ./feature/classes.ts
