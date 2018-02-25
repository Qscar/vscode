/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

import processes = require('vs/base/node/processes');

const sender = processes.createQueuedSender(<any>process);

process.on('message', msg => {
	sender.send(msg);
	sender.send(msg);
	sender.send(msg);
	sender.send('done');
});

sender.send('ready');