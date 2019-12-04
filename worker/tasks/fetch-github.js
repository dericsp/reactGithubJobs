var fetch = require('node-fetch');
var redis = require("redis");
client = redis.createClient();

const {promisify} = require('util');
const setAsync = promisify(client.set).bind(client);

const baseURL = 'https://jobs.github.com/positions.json'

async function fetchGithub() {
    console.log('fetching github');

    let resultCount = 1, onpage = 0;
    const allJobs = [];
// fetch all pages
    while(resultCount > 0) {
        const res= await fetch(`${baseURL}?page=${onpage}`);
        const jobs = await res.json();
        allJobs.push(...jobs);
        resultCount = jobs.length;
        console.log('got', resultCount, 'jobs');
        onpage++;
    }

    console.log('got', allJobs.length, 'jobs total');

    // filter algo
    const jrJobs = allJobs.filter(job=> {
        const jobTitle = job.title.toLowerCase();
        let isJunior = true;

        // algo logic
        if(
            jobTitle.includes('senior') || 
            jobTitle.includes('senior') || 
            jobTitle.includes('sr.') ||
            jobTitle.includes('architect')
            ) {
                return false;
            }


        return true;

    })

    console.log('filtered down to', jrJobs.length);

    // set in redis
    const sucess = await setAsync('github', JSON.stringify(jrJobs));

    console.log({sucess})
}
fetchGithub();

module.exports = fetchGithub;
