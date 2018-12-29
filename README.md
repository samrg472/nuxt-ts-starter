# nuxt-typescript-starter

Starter template for Nuxt.js + Koa + Typescript + Vuetify starter. Any project
can be Typescript ready following the guide below.

This template is intended for full Typescript use.

## Configuration

`ts-node` is used for the server side, see the package.json for the start
scripts. A `typescript` module is utilized for the client side. Add an entry
tothe modules array with `~/modules/typescript`.

Dependencies required:

- ts-node
- ts-loader
- typescript
- nuxt-property-decorator

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
