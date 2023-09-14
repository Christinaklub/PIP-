const URL = "http://127.0.0.1:8000/pips"

export async function fetchPips (){
    const response = await fetch(URL,{
    });
    const body = await response.json();
    console.log(body);
 
    return body;
 }
 
  export async function postPips(data) {
 const response = await fetch(URL,{
   method: "POST",
   body: JSON.stringify(data),
 });
 console.log (response);
 const body = await response.json();
 console.log (body)
 
 return body;
 
 }