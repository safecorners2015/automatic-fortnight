'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const AWS = require('aws-sdk');
const redis = require('redis');
const Sequelize = require('sequelize');
const moment = require('moment');
const http = require('http');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const dynamoDb = new AWS.DynamoDB({region: 'ap-northeast-2' });

const gameName = process.env.gameName || 'fortnight';

const redisEndpoint = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT || 6379
};
const rdsDBNAME = process.env.RDS_DB_NAME || gameName;
const rdsAccount = process.env.RDS_DB_ACCOUNT || 'admin';
const rdsPassword = process.end.RDS_DB_PASS || 'adminpassword'
const rdsEndpoint = {
  host: process.env.RDS_HOST,
  port: process.env.RDS_PORT || 3306
};

const dynameDbTable = `${gameName}Log`;

const redisClient = redis.create(redisEndPoint.port, redisEndpoint.host);

// MySQL DB NAME, ACCOUNT, PASSWORD
const sequelize = new Sequelize(gameName, 

