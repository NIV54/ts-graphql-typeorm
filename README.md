# TS-GRAPHQL-TYPEORM

This repo is from a live coding session.
A link to the session will be added later.

## Running the code

Before running the code you need to change to configuration to match your db.<br>
You can find the configuration under [config/development.json](config/development.json).<br>

Keep in mind that not all your configuration should be in this file.
For further read see [config](https://www.npmjs.com/package/config) and [cross-env](https://www.npmjs.com/package/cross-env).

There is a production db up and running. Contact me for it's password.

### Development

- npm i
- npm run dev

Open your browser under [localhost:3001](http://localhost:3001/) and start hacking!

### Production

- npm i --only=prod
- npm run build
- npm run prod

[localhost:8080](http://localhost:8080/)
