// read the readme

// get the list of links
list = document.querySelectorAll(".subreddits li a");

// create an array to store the list of subreddits
st = [];

// keep only the text of the subreddits not the html objects
list.forEach((x,i) => st.push(x.innerHTML));

// print the list
st;

