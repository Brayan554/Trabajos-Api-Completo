
const url = 'https://rickandmortyapi.com/api/character/';


const getData = (api)=>{
    
    return fetch(api)
    .then((response) => response.json())
    .then((json) =>{
        imprimirDatos(json)
    })
    .catch((error) =>{
        console.log("no Cargo api ",error);
    })

};

const imprimirDatos = (data) =>{

     todamiData =data;
    ValidarPaginacion(data);
    let = html ="";
    data.results.forEach(matachito => {
        
        // console.log("nombre ["+matachito.name +"] especies ["+matachito.species +"] imagen ["+matachito.image +"]");
        
        html += `<div class="cards">`;
        html += `<div>`;
        html += `<img class="formatoPic" src="${matachito.image}">`;
        html += `</div>`;
        html += `<div class="contenedorTextos">`;
        html += `<small class="txtLabel"> Nombre </Small>`;
        html += `<p class="txtTexto">${matachito.name}</p>`;
        html += `<small class="txtLabel"> Especie </Small>`;
        html += `<p class="txtTexto">${matachito.species}</p>`;
        html += `</div>`;
        html += `</div>`; 
    
    });
    document.getElementById("contenedorTodo").innerHTML =html;

}

const btnPrevio = document.getElementById('btnPrevio');
const btnNext = document.getElementById('btnNext');


btnPrevio.addEventListener('click', () =>{
    getData(todamiData.info.prev)
})
btnNext.addEventListener('click', () =>{
    getData(todamiData.info.next)
})


const ValidarPaginacion = (data) =>{


    if(data.info.prev == null ){
        btnPrevio.style.display="none"
    }else{
        btnPrevio.style.display="block"
    }

    if(data.info.next == null){
     
    btnNext.style.display="none"
    }else{ 
     btnNext.style.display="block"   
    }
    
    

}











getData(url);

// let = html ="";
// for (let i = 1; i <= 10;  i++) {
//     html += `<div class="cards">`;
//     html += `<div>`;
//     html += `<img class="formatoPic" src="OIP.JPG">`;
//     html += `</div>`;
//     html += `<div class="contenedorTextos">`;
//     html += `<small class="txtLabel">Nombre</small>`;
//     html += `<p class="txtTexto">Naruto</p>`;
//     html += `<small class="txtLabel">Naruto</small>`;
//     html += `<p class="txtTexto">Personaje</p>`;
//     html += `<small class="txtLabel"></small>`;
//     html += `<p class="txtTexto">IronMan</p>`;
//     html += `</div>`;
//     html += `</div>`;
    
// }
// document.getElementById("contenedorTodo").innerHTML =html;
