# Description
This snippit generates a list of subreddits from a custom feed.

I creted this script to help migrate me account to a new one.

Using the generated list I used another script "Insert Custom Feed subreddits" to populate a custom feed

# How to use


## My Method using chrome
This is possible, but I don't have time to write out instructions. Use google (sorry)

## Using only console

1. Navigate to [old.reddit.com](old.reddit.com)
2. expand the left panel to reveal your custom feeds (under the heading multireddits)
3. click on the custom feed you want to create a list for
4. right click on the page and click inspect, this should open chrome dev tools
5. open the console and paste the following lines of code and press enter

```
list = document.querySelectorAll(".subreddits li a"); st = []; list.forEach((x,i) => st.push(x.innerHTML)); st
```

6. right click on the next line and click Copy Object and paste it into a text document
 it should start with "Array"



