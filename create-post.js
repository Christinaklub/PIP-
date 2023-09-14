export function createPost(x){
    
        // Hiver fatt i skabelonen fra HTML template
        const template = document.getElementById("posts");

        // Cloner template
        const clone = document.importNode(template.content, true);

    
        //cloner nye elementer i template
        const postImg = clone.getElementById("post-pic");
        postImg.id = "post-pic" + x.id; 
    
        const postText = clone.getElementById("post-text-template");
        postText.id = "post-text" + x.id; 


    // Sætter den udfyldte kopi ind på hjemmesiden
    document.getElementById("pip-container").appendChild(clone);
}