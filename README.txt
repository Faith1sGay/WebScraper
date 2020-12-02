This is my shitty attempt at making a web scraper in nodejs that uses mongodb to save the results that were scraped.
It is still a huge WIP, as for some reason it won't either
A) scrape
or
B) save the results in mongo.
I will try to solve this but I don't know what the issue is. 

If you would like to use this, even though it's in a huge WIP stage and doesn't *technically* work, here are the steps.

1. MongoDB
( https://www.mongodb.com/ )

2. nodejs
( https://nodejs.org/en/ ) 
Download the latest version (at the time of writing it is 15.3.0)

3. Once nodejs and MongoDB are installed, run
npm i -g yarn
in command prompt

5. Once node and yarn are installed, type
yarn set version berry

6. Go to the folder where the web scraper is, whether you git cloned it or downloaded it as a zip, and run
yarn install

7. Once that is all done, type npm start and you should see the basic outlay of how the program works (even though it doesn't right now)

8. Happy Scraping! (just be careful you don't get ipbanned, as most websites do not enjoy you scraping without permission.