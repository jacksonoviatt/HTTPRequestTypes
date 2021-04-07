

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





function patchFunction(e) {
    // console.log(e);
    let ajaxPatch = new XMLHttpRequest();
    ajaxPatch.onreadystatechange = function() {
        if (this.readyState === 4) {
            console.log(this.status);
            let patchResponse = this.response;
            console.log(patchResponse);
            // document.getElementById('patchBox').innerHTML += `<p>${patchResponse}</p>`;
           
        }
    }
    ajaxPatch.open ("PATCH", "https://jsonplaceholder.typicode.com/posts/1", true);
    ajaxPatch.setRequestHeader("Content-Type", "application/json");
   
    let patchObject = {
        userId: 1
    }
    let patchJSON = JSON.stringify(patchObject);
    ajaxPatch.send(patchJSON);
}

let patchButton = document.getElementById('patchButton');
patchButton.addEventListener("click", patchFunction);






function deleteFunction(e) {
    // document.body.style.color = "red";
    console.log(e);
    let ajaxDelete = new XMLHttpRequest();


    
    ajaxDelete.onreadystatechange = function() {
        
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.status);
            let noMorePosts = JSON.parse(this.response); 
            console.log(noMorePosts);
        }
    }
    ajaxDelete.open ("DELETE", "https://jsonplaceholder.typicode.com/posts/1", true);
   
    ajaxDelete.send(null);

}

let deleteButton = document.getElementById('deleteButton');
deleteButton.addEventListener("click", deleteFunction);


function getAllPosts() {
    document.body.ge
    let ajaxGet = new XMLHttpRequest();
    
    ajaxGet.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let postArray =  JSON.parse(this.response);;
            // console.log(postArray);
            for(i = 0; i < postArray.length; i++){
                console.log(postArray[i]);
                let postTitle = postArray[i].title;
                let postBody = postArray[i].body;
                let container = document.getElementById('feedContainer');
                container.innerHTML += `<br><h2>${postTitle}</h2><p>${postBody}</p>`

            }
        }
    }
    ajaxGet.open ("GET", "https://jsonplaceholder.typicode.com/posts", true)
    ajaxGet.send()
}
getAllPosts();