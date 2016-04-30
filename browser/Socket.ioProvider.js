'use strict';
class SocketIoProvider {

	/**
	 * Creates new instance of Jade template provider.
	 * @param {Locator} locator The service locator for resolving dependencies.
	 * @constructor
	 */
	constructor(locator) {
		const window = locator.resolve('window');
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

	connectToServer(url, options) {
		this.socket = this._socketIo(url, options || this._socketIoOptions);
		this.socket.on('connect', function(){
			this._logger.info('Connected to websocket server.')
		}.bind(this));
	}
}

module.exports = SocketIoProvider;