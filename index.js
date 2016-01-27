#!/usr/bin/env node

var commander = require("commander"),
    process = require("process"),
    os = require("os");

var getMachineName = function(){
    console.log("Host name ",os.hostname());
    return os.hostname();
};

var getPlatformType = function(){
    console.log("Platform type ",os.platform());
    return os.platform();
};

commander.command('all')
    .description('returns the details of the host machine.')
    .option("-machineName", getMachineName())
    .option("-platformType", getPlatformType())
    .action(function(){
        console.log("Host name ",os.hostname());
        console.log("Platform type ",os.platform());
        return {
            hostName:getMachineName(),
            platformType:getPlatformType()
        }
    });

commander.parse(process.argv);
