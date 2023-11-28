const container = document.createElement("div")
container.classList.add("container");
document.body.append(container)
const row=document.createElement("div");
row.classList.add("row");
container.append(row);
let col=document.createElement("div");
col.classList.add("col-lg-4","col-sm-12");
row.append(col)

fetch("https://restcountries.com/v3.1/all").then((data)=>data.json()).then((ele)=>{
    for(let i=0; i<ele.length; i++){
        const cardDiv=document.createElement("div");
        cardDiv.innerHTML=`
        <div class="card">
           <h5 class="card-header">${ele[i].name.common}</h5>
            <img src="${ele[i].flags.png}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text"><b>Capital: ${ele[i].capital}</b></p>
            <p class="card-text"><b>Region: ${ele[i].region}</b></p>
            <p class="card-text"><b>Country Code: ${ele[i].latlng}<b></p>
          <button class="btn btn-primary">Click Here for weather</button> </div>    
        </div>
    </div>`
    col.append(cardDiv);
        
    }
})
