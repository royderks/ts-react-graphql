# ts-react-grapqhl

This demo shows how to consume data from a GraphQL Server with React and TypeScript, types are generated automatically from the GraphQL server usin [graphql-codegen](https://graphql-code-generator.com/) 🚀.

## Getting Started

Open [this](https://codesandbox.io/s/50m91p16rp) CodeSandbox containing the GraphQL server and wait untill it's initialised (or use this url). **This server needs to run in order for the demo to work!**.

Clone this repository and from the root directory run the command:

```sh
yarn
```

This will install the dependencies needed to run this project. After the installation is complete you need to run the following command that creates the types from the schema on the GraphQL server, to make sure your TypeScript types match the schema:

```sh
yarn generate
```

### Run Project

```sh
yarn
yarn start
```

View in the browser at http://localhost:3000. Running in this environment provides hot reloading; just edit and save the file and the browser will automatically refresh.

## Use Your Own GraphQL Server
In order to use your own GraphQL server for this demo, you'd need to change the definition of the GraphQL server in `codegen.yml` to:

```
overwrite: true
schema: "[YOUR_GRAPHQL_SERVER]"
documents: "src/**/*.graphql"
generates:
  src/generated/graphql.tsx:
    plugins:
      - "typescript"
      - "typescript-operations"
      - "typescript-react-apollo"
  ./graphql.schema.json:
    plugins:
      - "introspection"

```

*If your GraphQL server will have a different schema than the example server, everything (in the UI) will break! But you should be getting pointers from TypeScript in the terminal to help you fix any compile errors.*
