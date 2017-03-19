'use strict';

class SocketIoProvider {

	constructor(locator) {
		const config = locator.resolve('config') || {};

		this._logger = locator.resolve('logger');

		/**
		 * Current Socket.io factory.
		 * @type {Io}
		 * @private
		 */
		this._socketIo = locator.resolve('socket.io');

		/**
		 * Config for Socket.io
		 *
		 * @private
		 */
		this._socketIoOptions = config.socketIoOptions || {};
	}

	registerServer(server, options) {
		options = options || this._socketIoOptions || {};
		if (options.serveClient === undefined) {
			options.serveClient = false;
		}
		this.io = this._socketIo(server, options);
		this.io.on('connection', socket =>
			this._logger.info(`Client with ID ${socket.client.id} connected over websocket.`)
		);
	}

}

module.exports = SocketIoProvider;
