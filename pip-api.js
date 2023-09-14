export async function form (){
    const response = await fetch(URL,{
     headers: {
         apikey: apikey,
     },
    });
    const body = await response.json();
    console.log(body);
 
    return body;
 }
 
  export async function postBtn(data) {
 const response = await fetch(URL,{
   method: "POST",
   headers: {
     apikey: apikey,
     "Content-Type": "application/json", 
   },
   body: JSON.stringify(data),
 });
 console.log (response);
 const body = await response.json();
 console.log (body)
 
 return body;
 
 }