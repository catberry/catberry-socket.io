'use strict';

const SocketIo = require('./lib/socket.io.js');
const SocketIoProvider = require('./lib/Socket.ioProvider');

module.exports = {
	register(locator) {
		locator.registerInstance('socket.io', SocketIo);
		locator.register('socket.ioProvider', SocketIoProvider, true);
	},
	SocketIo,
	SocketIoProvider
};
