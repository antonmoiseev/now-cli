/* eslint-disable import/no-unresolved */

// Native
const path = require('path');

// Utilities
const pkg = require('../../package.json');

try {
  const distDir = path.dirname(process.execPath);
  pkg._npmPkg = require(`${path.join(distDir, '../../package.json')}`);
} catch (err) {
  pkg._npmPkg = null;
}

module.exports = pkg;
