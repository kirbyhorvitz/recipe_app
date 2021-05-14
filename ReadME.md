# Hoya Recipe 2021 App



## Prerequisites

  + Node.js, and NPM
  + Git

## Installation

Fork [this repository](https://github.com/kirbyhorvitz/recipe_app) on GitHub, then from your forked repo's homepage, click the green button to reveal its SSH address (e.g. `git@github.com:YOUR_USERNAME/my-first-node-app.git`). Use the SSH address to clone, or download, your forked repo onto your local machine, perhaps onto the Desktop:

```sh
cd ~/Desktop
git clone git@github.com:YOUR_USERNAME/my-first-nodejs-app.git
```

Before running any of the commands below, navigate into this directory from the command-line:

```sh
cd recipe_app
```

Install package dependencies:

```sh
npm install
```

> NOTE: this looks at the package dependencies defined in the "package.json" file and installs them locally into the "node_modules" directory.

## Setup

Obtain an [Spoonacular](https://spoonacular.com/food-api) (i.e. `RECIPE_API_KEY`).

Please note that with a free account you have a limit of 150 daily quota points, so don't use the search bar too frivolously when testing out the functionality. If you expect the site to be searched more than 150 times a day, consider upgrading your API package or consider using a free API instead.

Create a new file called ".env" in the root directory of your local repo, and place inside the following contents, specifying your own values as applicable:

```sh
# this is the ".env" file...

RECIPE_API_KEY="______"
```

## Usage

Examine the contents of each of the scripts below as you run them in order.

### Basic Scripts

The "index" script shows we can run some basic JavaScript:

```sh
node index.js
```

The "calculate" script demonstrates how to import and use installed third-party packages (like `d3`):

```sh
node app/calculate.js
```

The "my script" file demonstrates how to import and use functionality from another local JavaScript file (in this case, the "my-mod.js" file in the "utils" directory):

```sh
node app/my-script.js
```

The "message" script demonstrates how to use the `dotenv` package to read environment variables from the ".env" file:

```sh
node app/message.js
```

### Recipe Search

These scripts demonstrate asynchronous requests using the `node-fetch` package.

Use the search bar to run the script to fetch recipes form the API. 

### Our Original Recipes "ourRecipes.JSON"

If you would like to manually add new recipes, update the ourRecipes.JSON under the data folder. Copy the structure, update the ID, and update all the fields. The script will automatically create a card and new webpage for your newly added recipe!

Camden Gilliam, a developer at 40AU in Nashville, TN helped create this data structure as it helps with scaling hundreds of recipes if needed without having to hard code the data.
