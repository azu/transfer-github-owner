// LICENSE : MIT
"use strict";
const fs = require("fs");
const args = require("args");
import {findPkg, transformPkg} from "./package/package";
import {findREADME, transformREADME} from "./readme/readme";

/**
 * @param {string} baseDir
 * @param {Object} argv
 */
module.exports = function (baseDir, argv) {
    const from = argv.from;
    const to = argv.to;
    if (!from || !to) {
        return args.showHelp();
    }
    // package.json
    const pkgPath = findPkg(baseDir);
    const pkgContent = require(pkgPath);
    const replacedPkg = transformPkg(pkgContent, from, to);
    fs.writeFileSync(pkgPath, JSON.stringify(replacedPkg, null, 2));
    // README
    const readmePath = findREADME(baseDir);
    const readmeContent = fs.readFileSync(readmePath, "utf-8");
    const replacedContent = transformREADME(readmeContent, from, to);
    fs.writeFileSync(pkgPath, replacedContent);
};