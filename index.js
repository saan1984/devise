#!/usr/bin/env node
var commander = require("commander"),
    os = require("os");

var getMachineName = function(){
    console.log("Host name ",os.hostname());
    return os.hostname();
};

var getPlatformType = function(){
    console.log("Platform type ",os.platform());
    return os.platform();
};

commander.command('devise')
    .description('returns the details of the host machine.')
    .option("machineName", getMachineName)
    .option("platformType", getPlatformType)
    .action(function(){
        return {
            hostName:getMachineName(),
            platformType:getPlatformType()
        }
    });
