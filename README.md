# Front end technical test

You have **2 hours** to complete the challenge. If you run out of time before you complete the task to your own satisfaction, just *stay calm and push your code*. We are mostly interested in how you approach the problem and what your priorities are during the time.

## Instructions

### The project

Here is an endpoint that returns a list of beers: https://api.punkapi.com/v2/beers.

We want you to fetch data asynchronously from that API and display it as per the designs in the [designs directory](designs) using [React](https://reactjs.org/docs/getting-started.html) and [Next.js](https://nextjs.org/).

Note that the designs are for two separate pages: a beer listing page and a page for a specific beer.

### What are we looking for?
- Good React knowledge
- CSS Competency
- Fetching and Handling Data Asynchronously

### More specifics
- fork this repo, it has some boilerplate to help you get started
- you may use any 3rd-party libraries you wish but you must write at least some custom styles to demonstrate your knowledge of CSS
- don't worry about supporting IE11
- you don't have to deploy your result but can if you wish. Either way we'll pull down the code and run it locally.
- we'll take a look at your work on a variety of screen sizes

### Want more of a challenge or to go the extra mile?
Want to show off more front-of-the-front-end magic? Feel free to go beyond the design! ✨

You'd rather show off more back-of-the-front-end skills?
Here's [the full documentation](https://punkapi.com/documentation/v2) for the punkapi. Go nuts 🥜.

Some ideas for things you could add include: 
- filtering by brewed_before and/or brewed_after dates
- filtering by ABV (alcohol by volume)
- searching by beer_name
- adding a button to search for a random beer

## Okay I did it. What now?
Send us the link to your repo. We'll take a look at it, and if we like what we see we'll invite you to discuss it during a technical interview.


# REPORT ON WHAT WAS DONE

## Files added

### index.js
I converted this file so that it would act as a central hub that would manage and store all the data on the web page.
Fetches data from the api very time the page is loaded.

### api_caller.js
Stores the method that calls the api and filters out information that is not used 

### BeerCell.js
Takes a single beer and produces the grid cell that appears on the main page

### BeerDetails.js
Takes a beer and displays all the info about it on a full screen scale

### BeerTable.js
Takes in a array of beers and displays them in a grid format made of BeerCell component's.

### styles.module.css
Contains all the styles used on the pages 

## Next Steps and Queries
I also have a could of queries about the designs given. Firstly their is no way to go back to the main page after you click on a beer so a user would get stuck on the details page. Secondary I feel the details page would be better if it appeared as a model appearing off the main page when you click on a beer.

Next steps would be

- add jest unit tests
- add routes so each beer detail page has its own link
- add better responsiveness. (mainly on the details page)
- break down the style sheet in to small segments for each component.
- minor adjustments to all components style. (use different font , more definition on titles)
- way to to filter beers we are fetching (search bar, drop down filter for attributes)
- may be find way to use other data from the api. (Not sure what do with it though)

## Other comments
My favorite bit of data from the api was defiantly the picture of 'The End Of History' beer
