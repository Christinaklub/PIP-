export function createPost(x){
    const template = document.getElementById("posts");

    const clone = document.importNode(template.content, true);

    template.appendChild(clone);
    
}