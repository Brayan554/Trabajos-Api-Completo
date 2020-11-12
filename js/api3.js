


const url = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=1';


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


const obtenerUrl = (data) =>{
    todamiData = data;
    ValidarPaginacion(todamiData);


   
    data.results.forEach(pokemon => {   
      
        getData( pokemon.url, 1);      
    });



};

const imprimirDatos = (data) =>{


   
        html = "";
        html += `<h1 class="ha">Tu Pokemon Es: <em class="color">${data.name}</em></h1>`;
        html += `<div class="cards">`;
        html += `<div>`;
        html += `<img class="formatoImg" src="${data.sprites.other.dream_world.front_default}">`;
        html += `</div>`;
        html += `</div>`;
        html += `<h1 class="ha">Su Habilidades Son</h1>`;
        html += `<div class="contenedorTextos">`;
        data.abilities.forEach( Habilidad=> {
            html += `<p class="txtTexto">${Habilidad.ability.name}</p>`;    
        });

        html += `</div>`; 
    
    
    document.getElementById("contenido").innerHTML =html;

}

const btnPrevio = document.getElementById('btnPrevio');
const btnNext   = document.getElementById('btnNext');
const uno       = document.getElementById('uno');
const dos       = document.getElementById('dos');
const tres      = document.getElementById('tres');
const cuatro    = document.getElementById('cuatro');
const cinco     = document.getElementById('cinco');
const seis      = document.getElementById('seis');
const siete     = document.getElementById('siete');
const ocho      = document.getElementById('ocho');
const nueve     = document.getElementById('nueve');



btnPrevio.addEventListener('click', () =>{
    getData(todamiData.previous,0)
})
btnNext.addEventListener('click', () =>{
    getData(todamiData.next,0)
})
uno.addEventListener('click', () =>{
    getData(todamiData.next,0)
})
dos.addEventListener('click', () =>{
    getData(todamiData.next,0)
})
tres.addEventListener('click', () =>{
    getData(todamiData.next,0)
})
cuatro.addEventListener('click', () =>{
    getData(todamiData.next,0)
})
cinco.addEventListener('click', () =>{
    getData(todamiData.next,0)
})
seis.addEventListener('click', () =>{
    getData(todamiData.next,0)
})
siete.addEventListener('click', () =>{
    getData(todamiData.next,0)
})
ocho.addEventListener('click', () =>{
    getData(todamiData.next,0)
})
nueve.addEventListener('click', () =>{
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