#!/usr/bin/env node
//Node.js Command development using Commander.js
var commander = require("commander"),
    process = require("process"),
    os = require("os");

//Returns name of the host machine
var getMachineName = function(){
    return os.hostname();
};

//Returns type of OS
var getMachineType = function(){
    return os.platform();
};

//Defining command devise info --machineName --machineType
commander.command("info")
    .description('returns the details of the host machine.')
    .option("--machineName", "return machine name")
    .option("--machineType","return machine type")
    .action(function(cmd){
        var resultObject = {};
        var options = commander.args;
        if(cmd.machineName){
            resultObject.machineName = getMachineName();
        }
        if(cmd.machineType){
            resultObject.machineType = getMachineType();
        }
        console.log("resultObject ",resultObject);
        return resultObject;
    });

commander.parse(process.argv);
