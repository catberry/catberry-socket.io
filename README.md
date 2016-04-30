# Catberry Socket.io Adapter

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/catberry/main?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge)

It is an adapter for [Socket.io](http://socket.io/) engine
that makes possible to use it from [Catberry](https://github.com/catberry/catberry) application.

## Installation

```bash
npm install catberry-socket.io --save
```

## Usage
You can use the adapter in ./server.js as following:

```javascript
const cat = catberry.create(config);
const server = http.createServer(app);

const socketIo = require('catberry-socket.io');
socketIo.register(cat.locator);
cat.locator.resolve('socket.ioProvider').registerServer(server);

server.listen(config.server.port);
```

In ./browser.js as following:

```javascript
const cat = catberry.create(config);

const socketIo = require('catberry-socket.io');
socketIo.register(cat.locator);
cat.locator.resolve('socket.ioProvider').connectToServer();
```

In ./build.js as following:

```javascript
const cat = catberry.create(config);

const socketIo = require('catberry-socket.io');
socketIo.register(cat.locator);
```

In fact, [Catberry CLI](https://github.com/catberry/catberry-cli) does it for you.

## Contributing

There are a lot of ways to contribute:

* Give it a star
* Join the [Gitter](https://gitter.im/catberry/main) room and leave a feedback or help with answering users' questions
* [Submit a bug or a feature request](https://github.com/catberry/catberry-socket.io/issues)
* [Submit a PR](https://github.com/catberry/catberry-socket.io/blob/develop/CONTRIBUTING.md)

Miha Vizovišek <miha.vizovisek@gmail.com>

Denis Rechkunov <denis.rechkunov@gmail.com>
