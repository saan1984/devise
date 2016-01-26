#!/usr/bin/env node
var commander = require("commander"),
    os = require("os");
commander.command('machineName')
    .description('returns the name of the host machine.')
    .action(function(env, options){
        console.log("os.hostName() ",os.hostname());
        return os.hostname();
    });
