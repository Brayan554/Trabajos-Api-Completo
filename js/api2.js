
const url = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=10';


const getData = (api , opc)=>{
    
    return fetch(api)
    .then((response) => response.json())
    .then((json) =>{
        if(opc == 0)
        obtenerUrl(json);
        else
        imprimirDatos(json);
    })
    .catch((error) =>{
        console.log("no Cargo api ",error);
    })

};

let todamiData;
let html;

const obtenerUrl = (data) =>{
    todamiData = data;
    ValidarPaginacion(todamiData);


   
    data.results.forEach(pokemon => {   
        html = "";
        getData( pokemon.url, 1);      
    });



};

const imprimirDatos = (data) =>{


   
        
        html += `<div class="cards">`;
        html += `<div>`;
        html += `<img class="formatoImg" src="${data.sprites.other.dream_world.front_default}">`;
        html += `</div>`;
        html += `<div class="contenedorTextos">`;
        html += `<small class="txtLabel"> Nombre </Small>`;
        html += `<p class="txtTexto">${data.name}</p>`;
        html += `<small class="txtLabel">Habilidades</Small>`;

        data.abilities.forEach( Habilidad=> {
            html += `<p class="txtTexto">${Habilidad.ability.name}</p>`;    
        });


        html += `</div>`;
        html += `</div>`; 
    
    
    document.getElementById("contenedorTodo").innerHTML =html;

}

const btnPrevio = document.getElementById('btnPrevio');
const btnNext = document.getElementById('btnNext');


btnPrevio.addEventListener('click', () =>{
    getData(todamiData.previous,0)
})
btnNext.addEventListener('click', () =>{
    getData(todamiData.next,0)
})


const ValidarPaginacion = (data) =>{

    
    if(data.previous == null ){
        btnPrevio.style.display="none"
    }else{
        btnPrevio.style.display="block"
    }

    if(data.next == null){
     
    btnNext.style.display="none"
    }else{ 
     btnNext.style.display="block"   
    }
    
}
 
getData(url,0);

