

// lets create a function that will be an event, so we add e as the argument
function postIt(e) {
    // set variable ajax as the request
let ajax = new XMLHttpRequest();

// This function runs when the state changes, when submit is clicked
// it has a conditoinal block that states if the ready State and the status are 
// error free, we can check our post via console logs and a success message shows
ajax.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 201) {
        // console.log(this.status);
        console.log(this.response);
        document.getElementById('postContainer').innerHTML += `<p>Your post has been posted!</p>`
    }
}
// open our request and specify that we would like to POST
 ajax.open ("POST", "https://jsonplaceholder.typicode.com/posts", true);
 ajax.setRequestHeader("Content-Type", "application/json");
 let postTitle = document.getElementById('postTitle').value;
 let postBody = document.getElementById('postBody').value;
 let postObject = {
     title: postTitle,
     body: postBody,
     userId: 1
 };
 let postJSON = JSON.stringify(postObject);
 ajax.send(postJSON);
}

let postButton = document.getElementById('postButton');
postButton.addEventListener("click", postIt)