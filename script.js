const container = document.createElement("div");
container.classList.add("container");
document.body.append(container);
const row = document.createElement("div");
row.classList.add("row");
container.append(row);

fetch("https://restcountries.com/v3.1/all")
  .then((data) => data.json())
  .then((ele) => {
    for (let i = 0; i < ele.length; i++) {
      let col = document.createElement("div");
      col.classList.add("col-lg-4", "col-sm-12","col-md-6");
      row.append(col);
      const cardDiv = document.createElement("div");
      cardDiv.innerHTML = `
        <div class="card">
           <h1 id="title" class="text-center card-header">${ele[i].name.common}</h1>
            <img src="${ele[i].flags.png}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text"><b>Capital: ${ele[i].capital}</b></p>
            <p class="card-text"><b>Region: ${ele[i].region}</b></p>
            <p class="card-text"><b>Country Code: ${ele[i].latlng}</b></p>
            <p class="card-text"><b>Country Code: ${ele[i].cca2}</b></p>
          <button class="btn btn-primary" i>Click Here for weather</button> </div>    
        </div>
    </div>`;
    const wBtn=document.getElementsByClassName(".btn");
    wBtn.addEventListener("click",(location)=>{
      return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid={2e058a5c986acfe99cac939f7633466c
    }`)
    }) 
      col.append(cardDiv);
    }
  });
  //2e058a5c986acfe99cac939f7633466c API key 











