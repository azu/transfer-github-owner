#!/usr/bin/env node
var rewrite = require('../');
var args = require("args");
args.option('from', "from owner name")
    .option('to', "to owner name");
var argv = args.parse(process.argv);
var result = rewrite(process.cwd(), argv);
result && console.log(result);