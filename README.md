# reactGithubJobs

Freecodecamp tutorial for React to request Github jobs

Video description 

"Plan, Code, and Deploy a Startup in 2 Hours [Full Stack JavaScript Tutorial]"


🎥 Tutorial created by Code Drip. Check out their YouTube channel: https://www.youtube.com/channel/UCRLEADhMcb8WUdnQ5_Alk7g


Deployed and constantly updated at https://entrylevelsoftwarejobs.com


I'm never maked nothing like this, I setup Virtual machine with dns resolve and my hostname to Virtual machine. My first ssh connection, i haved some troubles to connect, at end worked fine.

Deployed and constantly updated at https://neotrix.dev at Google cloud and with google domain by Eric Garcia

Tree files have commented lines. If you wanna test in production you have to change the lines.  The files are api/index.js, package.json and app.js.

If i can help in any way just comment. 

Thanks. 

My deployed and constantly updated at https://neotrix.dev at Google cloud and with google domain.

Links used to help me

Install redis
https://medium.com/@petehouston/install-and-config-redis-on-mac-os-x-via-homebrew-eb8df9a4f298

How to install node on ubuntu 18.04
https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04

Install nginx on ubuntu 18.04
https://certbot.eff.org/lets-encrypt/ubuntubionic-nginx

Edit nginx with location https://hackernoon.com/start-to-finish-deploying-a-react-app-on-digitalocean-bcfae9e6d01b
at part of server and location

Configure google domain on google cloud at VM (Virtual machine)
https://www.cloudbooklet.com/setting-up-google-cloud-dns-for-your-domain/

Needs to include at package.json inside the client folder if send to production on ubuntu 18.03
"proxy": {
    "/api": {
        "target": "http://localhost:3001"
        }
        }, 

To test in localserver just download files and make this steps bellow:

1 - Inside de client folder type redis-server. You will start redis for save request results to database.

2 - Inside the react folder type node worker/index.js. After the request and you will see sucess: ok message.

3 - Inside the react folder type node api/index.js, after the start you will see a message: Example app listening on port 3001!

4 - Inside the client folder type yarn start a new tab will be open in your default brownser and lauch the localhost:3000