# PUNK API PROJECT

## Instructions

### The project

Here is an endpoint that returns a list of beers: https://api.punkapi.com/v2/beers.

We want you to fetch data asynchronously from that API and display it as per the designs in the [designs directory](designs) using [React](https://reactjs.org/docs/getting-started.html) and [Next.js](https://nextjs.org/).

Note that the designs are for two separate pages: a beer listing page and a page for a specific beer.

### Aim of the project is to show
- Good React knowledge
- CSS Competency
- Fetching and Handling Data Asynchronously
- A responsive design

# REPORT ON WHAT WAS DONE

Displays beers from the api using the design. When a beer is clicked on it displays a modal with the details about that beer. 

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

### Modal.js
To show display its children in modal 

### styles.module.css
Contains all the styles used on the pages 

## Tests
Added to this project is a number of jest tests that test that data being passed in to the components is being displayed correctly. In future actions this project does will need to be tested.

## Other comments
My favorite bit of data from the api was defiantly the picture of 'The End Of History' beer
