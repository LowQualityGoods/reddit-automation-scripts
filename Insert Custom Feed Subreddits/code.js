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
