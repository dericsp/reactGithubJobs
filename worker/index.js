var CronJob = require('cron').CronJob;

const fetchGithub = require('./tasks/fetch-github.js');

new CronJob('40 * * * *', fetchGithub, null, true, 'America/Los_Angeles');