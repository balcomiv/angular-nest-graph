# Tutorials used

## https://dev.to/beeman/add-graphql-to-a-nestjs-api-in-a-nx-workspace-2p8n

- You'll need apollo driver now too https://docs.nestjs.com/graphql/migration-guide

- npx --yes create-nx-workspace@latest angular-nest-graph --appName example --prefix example --preset angular --strict --routing --style scss --nx-cloud false
- npm i @nestjs/graphql @nestjs/apollo graphql-tools graphql apollo-server-express
- nx generate @nrwl/nest:app api
- nx generate @nrwl/nest:lib core
- npm i @nestjs/config joi

- npm i graphql-subscriptions (for pubsub stuff) https://docs.nestjs.com/graphql/subscriptions

## https://github.com/nrwl/nx-apollo-example

- npm install --save-dev @nrwl/nest
- nx generate @nrwl/nest:application api
- npm install @nestjs/graphql apollo-server-express graphql-tools graphql
