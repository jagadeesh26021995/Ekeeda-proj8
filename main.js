async function url()
{
    
    const url= document.getElementById("short").value;
    const response= await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    if(response.ok){
    const data =await response.json();
    console.log(data);
    let newurl=document.createElement("li");
    newurl.className="output"
    newurl.innerHTML=`<a href="${data.result.full_short_link}" target="_blank">${data.result.full_short_link} </a>`;
    short1.prepend(newurl);
//  let shortened=data.result.full_short_link;



}}
