/* 
World Bank API
Created by Engagement Lab, 2015
==============
 mongo.js
 MongodDB/Mongoose AH initializer.

 Created by Johnny Richardson on 5/18/15.
==============
*/
"use strict";

var fs = require('fs');
var yaml = require('yamljs');

// Global config options
var _configOptions = {
    content_root: "../content",
    filter: "yml",
    encoding: "utf8",
    settings: "config.yml"
};

module.exports = {
  loadPriority:  1000,
  startPriority: 1000,
  stopPriority:  1000,
  initialize: function(api, next){
    
    // Parse YAML syntax given a file path, and throw exception on error
    api.readYaml = function loadYML(filePath) {

        var pathToYml = _configOptions.content_root + "/" + filePath;

        try {
            var data = undefined;

            // Read file synchronously
            var fileContent = fs.readFileSync(pathToYml, _configOptions.encoding);
            data = yaml.parse(fileContent);

            return data;

        } catch (err) {

            // Error, throw
            throw err;
            return false;

        }

    }

    api.gameConfig = {

      // Load global content config
      content: api.readYaml(_configOptions.content_root + "/" + _configOptions.settings),
      options: _configOptions
      
    };

    next();

  },
  start: function(api, next) {


      next();

  },
  stop: function(api, next){
    next();
  }
};