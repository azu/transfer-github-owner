// LICENSE : MIT
"use strict";
const assert = require("power-assert");
import {transformPkg} from "../src/package/package";
describe("package", function () {
    it("transform from -> to", function () {
        const actual = require("./fixtures/actual.json");
        const expected = require("./fixtures/expected.json");
        const result = transformPkg(actual, "azu", "textlint-ja");
        assert.deepEqual(result, expected);
    });
});