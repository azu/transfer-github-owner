// LICENSE : MIT
"use strict";
const readmeFilenames = require("readme-filenames");
const path = require("path");
const escapeStringRegexp = require('escape-string-regexp');
const pathExists = require('path-exists');
export function findREADME(baseDir) {
    for (let i = 0; i < readmeFilenames.length; i++) {
        const readmeName = readmeFilenames[i];
        const readmePath = path.join(baseDir, readmeName);
        if (pathExists.sync(readmePath)) {
            return readmePath;
        }
    }
    return;
}


/**
 * transform `from` to `to`
 * @param {string} content
 * @param {string} from
 * @param {string} to
 * @returns {string}
 */
export function transformREADME(content, from, to) {
    const fromValue = escapeStringRegexp(`${from}/`);
    const toValue = `${to}/`;

    const fromRegExp = new RegExp(fromValue, "g");
    const toRegExp = new RegExp(toValue, "g");
    return content.replace(fromRegExp, toValue);
}