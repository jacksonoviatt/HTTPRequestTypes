

// lets create a function that will be an event, so we add e as the argument
function postIt(e) {
    // set variable ajax as the request
    let ajax = new XMLHttpRequest();

    // This function runs when the state changes, when submit is clicked
    // it has a conditoinal block that states if the ready State and the status are 
    // error free, we can check our post via console logs and a success message shows
    ajax.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 201) {
            // console.log(this.status);
            console.log(this.response);
            document.getElementById('postContainer').innerHTML += `<p>Your post has been posted!</p>`
        }
    }
    // open our request and specify that we would like to POST, set the request Header
    ajax.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    ajax.setRequestHeader("Content-Type", "application/json");


    //  set the values inputed to us by the user to variables, and then 
    //  use those variables in  the post object, userId is required by the API
    let postTitle = document.getElementById('postTitle').value;
    let postBody = document.getElementById('postBody').value;
    let postObject = {
        title: postTitle,
        body: postBody,
        userId: 1
    };

    //  convert our post object into a JSON string and (pretend to) add the post to the API
    let postJSON = JSON.stringify(postObject);
    ajax.send(postJSON);
}

// use add event listener to make the post function happen on click
let postButton = document.getElementById('postButton');
postButton.addEventListener("click", postIt);




// lets create the patch function that will be a click event, so we add e as the argument
function patchFunction(e) {
    
        // set variable ajaxPatch as the request
    let ajaxPatch = new XMLHttpRequest();
     // This function runs when the state changes, when the update button is clicked
    // it has a conditoinal block that states if the ready State and the status are 
    // error free, our post will update and console log the successful response
    ajaxPatch.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            // console.log(this.status);
            let patchResponse = this.response;
            console.log(patchResponse);
            // document.getElementById('patchBox').innerHTML += `<p>${patchResponse}</p>`;

        }
    }
    // open our patch request and set the request header
    ajaxPatch.open("PATCH", "https://jsonplaceholder.typicode.com/posts/1", true);
    ajaxPatch.setRequestHeader("Content-Type", "application/json");

    // Specify the user Id in our object
    let patchObject = {
        userId: 1
    }

    // use stringify function to make th eabove object into a JSON string
    let patchJSON = JSON.stringify(patchObject);

    // send this JSON string to the API
    ajaxPatch.send(patchJSON);
}

// add a click event for the patch function
let patchButton = document.getElementById('patchButton');
patchButton.addEventListener("click", patchFunction);






// lets create a function that will delete a post on click
function deleteFunction(e) {

    console.log(e);
    // set variable ajaxDelete as the request
    let ajaxDelete = new XMLHttpRequest();


    // This function runs when the state changes, when the delete button is clicked
    // it has a conditional block that states if the ready State and the status are 
    // error free, the post will delete and console log the response
    ajaxDelete.onreadystatechange = function () {

        if (this.readyState === 4 && this.status === 200) {
            console.log(this.response);
     
        }
    }

    // open the DELETE request and send nothing up
    ajaxDelete.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1", true);

    ajaxDelete.send(null);

}

// add an event that runs the deleteFunction on click
let deleteButton = document.getElementById('deleteButton');
deleteButton.addEventListener("click", deleteFunction);


function getAllPosts() {
    // set variable ajaxGet as the request
    let ajaxGet = new XMLHttpRequest();


        // This function runs when the state changes, 
    // it has a conditional block that states if the ready State and the status are 
    // error free the code will run
    ajaxGet.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {

            // convert the JSOn string into an array
            let postArray = JSON.parse(this.response);   
            
            //  this loop iterates through the post array and picks out the specified elements, 
            // I then used inner HTML to inject this code onto the page
            for (i = 0; i < postArray.length; i++) { 
                let postTitle = postArray[i].title;
                let postBody = postArray[i].body;
                let container = document.getElementById('feedContainer');
                container.innerHTML += `<br><h2>${postTitle}</h2><p>${postBody}</p><div class="comments" id="commentBox${[i]}"><div>`


                // I feel like I got close to the bonus here but it never completely worked

                // let ajaxComments = new XMLHttpRequest();
                // ajaxComments.onreadystatechange = function () {
                //     if (this.readyState === 4 && this.status === 200) {
                //         let userComments = JSON.parse(this.response);

                //         for (m = 0; m < userComments.length; m++) {
                //             console.log(postArray[i]);
                //             let commentBox = document.getElementById(`commentBox${[i]}`);
                //         if (userComments[m].postId === [i]) {
                //             let commentEmail = userComments[m].email;
                //             let commentBody = userComments[m].body;
                //             // let commentBox = document.getElementById(`commentBox${[i]}`);
                //             commentBox.innerHTML += `<h4>${commentEmail}</h4><p>${commentBody}</p>`;
                //         }
                //     }
                // }
                    

                // }
                // ajaxComments.open("GET", `https://jsonplaceholder.typicode.com/posts/${[i]}/comments`, true)
                // ajaxComments.send()


            }

        }
    }


    // open our GET request and send the request 
    ajaxGet.open("GET", "https://jsonplaceholder.typicode.com/posts", true)
    ajaxGet.send()
}

// function will run on page load
getAllPosts();