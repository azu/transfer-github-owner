// LICENSE : MIT
"use strict";
const readPkg = require("read-pkg");
const traverse = require("traverse");
const path = require("path");
const pathExists = require('path-exists');
/**
 * find package.json and return Object.
 * @param {string} baseDir
 * @returns {Object}
 */
export function findPkg(baseDir) {
    const pkgPath = path.join(baseDir, "package.json");
    if (pathExists(pkgPath)) {
        return pkgPath;
    }
    return;
}
/**
 * transform `from` to `to`
 * @param {Object} pkg
 * @param {string} from
 * @param {string} to
 * @returns {Object}
 */
export function transformPkg(pkg, from, to) {
    // repository
    // homepage
    // bugs.url
    const fromValue = `${from}/`;
    const toValue = `${to}/`;
    traverse(pkg).forEach(function (x) {
        if (this.isLeaf && typeof x === "string") {
            if (x.indexOf(fromValue) === -1) {
                return;
            }
            this.update(x.replace(fromValue, toValue));
        }
    });
    return pkg;
}
