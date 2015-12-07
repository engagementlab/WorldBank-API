/* 
World Bank API
Created by Engagement Lab, 2015
==============
 redis.js
 Redis config file.

 Created by Johnny Richardson on 4/18/15.
==============
*/
"use strict";

/**
 *
 * Defines Redis config. It is NOT recommended to modify this configuration.
 * @namespace api.config
 * @class redis
 * @constructor
 * @static
 **/

// You can use many types redis connection packages, including:
// node redis | https://github.com/mranney/node_redis
// fake redis | https://github.com/hdachev/fakeredis
// sentinel redis | https://github.com/ortoo/node-redis-sentinel
exports.default = { 
  redis: function(api){
    var redisDetails = {
      // Which channel to use on redis pub/sub for RPC communication
      channel: 'actionhero',
      // How long to wait for an RPC call before considering it a failure 
      rpcTimeout: 5000, 
      // which redis package should you ise?
      package: 'fakeredis'
    }

    if( process.env.FAKEREDIS === 'false' || process.env.REDIS_HOST !== undefined ){
      // You can opt to use a real redis DB
      // This is required for multi-server deployments

      redisDetails.package  = 'redis';
      redisDetails.host     = process.env.REDIS_HOST || '127.0.0.1';
      redisDetails.port     = process.env.REDIS_PORT || 6379;
      redisDetails.password = process.env.REDIS_PASS || null;
      redisDetails.database = process.env.REDIS_DB   || 0;
      redisDetails.options  = null;

      // redisDetails.package  = 'redis-sentinel-client';
      // redisDetails.port     =  26379;
      // redisDetails.host     = '127.0.0.1';
      // redisDetails.database = 0;
      // redisDetails.options  = {
      //   master_auth_pass: null,
      //   masterName: 'BUS',
      // };
    }

    return redisDetails;
  }
}

exports.production = {
  redis: function(api){
    var redisDetails = {
      // Which channel to use on redis pub/sub for RPC communication
      channel: 'actionhero',
      // How long to wait for an RPC call before considering it a failure 
      rpcTimeout: 5000, 
      // which redis package should you ise?
      package: 'redis'
    }

    redisDetails.package  = 'redis';
    redisDetails.host     = process.env.REDIS_HOST || '127.0.0.1';
    redisDetails.port     = process.env.REDIS_PORT || 6379;
    redisDetails.password = process.env.REDIS_PASS || null;
    redisDetails.database = process.env.REDIS_DB   || 0;
    redisDetails.options  = null;

    return redisDetails;
  }
}