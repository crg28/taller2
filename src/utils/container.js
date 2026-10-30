const os = require('os');

// Inside Docker, the hostname defaults to the (short) container id.
const getContainerId = () => os.hostname();

module.exports = { getContainerId };
