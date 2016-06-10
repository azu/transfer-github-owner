// LICENSE : MIT
"use strict";
const assert = require("power-assert");
import {transformREADME} from "../src/readme/readme";
const fs = require("fs");
describe("readme", function () {
    it("transform from -> to", function () {
        const actual = fs.readFileSync(__dirname + "/fixtures/actual.md", "utf-8");
        const expected = fs.readFileSync(__dirname + "/fixtures/expected.md", "utf-8");
        const result = transformREADME(actual, "azu", "textlint-ja");
        assert.deepEqual(result, expected);
    });
});