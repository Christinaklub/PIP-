export function createPost(x){
    // Hiver fatt i skabelonen fra HTML template
    const template = document.getElementById("posts");

    // Cloner template
    const clone = document.importNode(template.content, true);


    // fyll ind template - alle elementer som ligger i template?  


    // Sætter den udfyldte kopi ind på hjemmesiden
    template.appendChild(clone);
}