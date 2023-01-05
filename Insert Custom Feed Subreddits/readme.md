# Description
This snippit inserts a list of subreddits into a custom feed from the old.reddit.com interface.

I creted this script to help migrate me account to a new one.

# How to use
I used chrome as it provides a way to save and load snippits of code


## My Method using chrome
This method uses chrome, as of Firefox 108.0.1 running scripts like snippits is not supported

1. Navigate to [old.reddit.com](old.reddit.com)
2. expand the left panel to reveal your custom feeds (under the heading multireddits)
3. click on the custom feed you want to add a list to
4. right click on the page and click inspect, this should open chrome dev tools
5. Click Sources along the top
6. on the left side you should see "Page" click the expand arrows to the right of that and open "Snippet"
7. Create a new snippet and paste the code from code.sj
7. Replace list with your own. It should look like this

```
// The list of subreddits to join, follow this pattern from the "Get Custom Feed subreddits" function
list = [
  "/r/cool",
  "/r/linuxmint",
]

// A small function to add delay if its needed
const delay = ms => new Promise(res => setTimeout(res, ms));

// function can be run asynchronously for the delay
Func = async () => {
    for(i=0; i<list.length; i++) {
        console.log(list[i]);
        document.querySelector(".add-sr input").value = list[i];
        document.querySelector(".add-sr .add").click();
        delay(5000);
        console.log("next line");
    }
}

// run the function
Func()
```

8. Right click the new snippet and run it.

Warning, I don't think the async part works, but the it still does the job. 

## Using only console

I havt tested this method but here is a rough guide to help you get started

1. Navigate to [old.reddit.com](old.reddit.com)
2. expand the left panel to reveal your custom feeds (under the heading multireddits)
3. click on the custom feed you want to add a list to
4. right click on the page and click inspect, this should open chrome dev tools
5. open the console and paste the following lines of code and press enter

your list should be defined like below. comma separated strings, just paste and hit enter
```
list = [
  "/r/cool",
  "/r/linuxmint",
]
```

The paste each block of code form the code.js file

6. right click on the next line and click Copy Object and paste it into a text document
 it should start with "Array"



