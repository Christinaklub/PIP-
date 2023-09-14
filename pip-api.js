const URL = "http://127.0.0.1:8000"

// get request
export async function fetchPips() {
    // hver gang man skal hente noget eksternt skal man skrive dette
   const response = await fetch(URL, {
   
   });
   console.log(response)
   const body = await response.json();
   console.log(body);

   return body; 
}

// Post request

export async function postPips(data) {
    const response = await fetch(URL, {
        method: "POST", 
        body: JSON.stringify(data)
    })
    console.log(response)
    const body = await response.json();
    console.log(body)

    return body; 
}