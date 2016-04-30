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
		this.io = this._socketIo(server, options || this._socketIoOptions);
		this.io.on('connection', function(socket){
			this._logger.info('Client with ID ' + socket.client.id + ' connected over websocket.');
		}.bind(this));
	}

}

module.exports = SocketIoProvider;
