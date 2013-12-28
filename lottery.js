#!/usr/bin/env node

/**
 *  _        _   _                
 * | |   ___| |_| |_ ___ _ _ _  _ 
 * | |__/ _ \  _|  _/ -_) '_| || |
 * |____\___/\__|\__\___|_|  \_, |
 *                          |__/                                 
 *
 * @license: GPL 3
 * @author: Lucas Pereira Brígida
 * @contact: https://github.com/lucasbrigida
 *
 */

/**
 *	Module dependencies
 */

var cm = require("commander");


/**
 *	Lottery
 */
var LY = new function(){
	"use strict"

	var self = this;

	function header(){
	  	return("\
  _        _   _\n\
 | |   ___| |_| |_ ___ _ _ _  _\n\
 | |__/ _ \\  _|  _/ -_) '_| || |\n\
 |____\\___/\\__|\\__\\___|_|  \\_, |\n\
                           |__/\n\n\
  List all options, use --help");
  	}


	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1) + min);
	}

	function raffleList(list){
		var r = list.split(",")
		 ,	numbers = []
		 ,	num
		 ,	result = [];

		while(numbers.length < r.length){
			num = getRandomInt(0, r.length-1);
			if(numbers.indexOf(num) === -1) numbers.push(num);
		}

		for(var i in numbers) result.push(r[numbers[i]]);
		console.log("Numbers are: " + result.toString());
	}

	function raffleRange(range){
		var r = range.split("..")
		 ,	max = parseInt(r[1])
		 ,	min = parseInt(r[0])
		 ,	num
		 ,	numbers = [];

		for(var i=min; i <= max; i++){
	 		num = getRandomInt(min, max);
			if(numbers.indexOf(num) === -1) numbers.push(num);
		}
	
		console.log("Numbers are: " + numbers.toString());
	}

	this.load = function(){
		console.info(header());

		cm.version("  Version: 0.0.1")
  		  .option('-l, --list <list>', "Random numbers from a list", raffleList)
  		  .option('-r, --range <min>..<max>', "Random numbers in a range", raffleRange)
  		  .parse(process.argv);
	}
};

LY.load();