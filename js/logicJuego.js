console.log ("*** AdivinaQuinSoy ***");

let personajes = [
    
{
    name:'Kong',
    foto:'Kong.jpg',
    preguntas:['Es fuerte?','Vive en la selva?','Es un animal?','Destruye cosas?','Es pequeño?'],
    respuetas:['si','si','si','si','no'],
},
{
    name:'mario bross',
    foto:'mario.png',
    preguntas:['Es animal?','Es de nintendo','Tiene bigote ?','Usa Armas?','Es Viejo?'],
    respuetas:['no','si','si','no','si'],
},
{
    name:'Pacman',
    foto:'PacMan.png',
    preguntas:['Es un animal?','Es un ser fantastico ?','Come fantasmas?','Hay una pelicula de él?','Es Rojo?'],
    respuetas:['no','si','si','si','no'],
},
{
    name:'Crash',
    foto:'Crash.png',
    preguntas:['Vuela?','Es veloz?','Tiene poderes ?','Es un animal?','Es naranja?'],
    respuetas:['no','si','no','si','si'],
},
{
    name:'Goku',
    foto:'goku.png',
    preguntas:['Vuela?','Usa armadura ?','Tiene poderes ?','Usa Armas?','Es ser humano?'],
    respuetas:['si','no','si','no','no'],
},
{
    name:'Sonic',
    foto:'Sonic.png',
    preguntas:['es rapido?','Usa armadura ?','Se puede convertir en bola?','es un tigre?','Es ser humano?'],
    respuetas:['si','no','si','no','no'],
}
];

let puntaje=0;
let puntajene=0;
const btnJugar = document.getElementById("btnJugar");
const imgPersonaje = document.getElementById("imgPersonaje");
let indice = 0;
let opacidad = 20;

btnJugar.addEventListener('click', () =>{

    const pregunta0 = document.getElementById("pregunta0");
    const pregunta1 = document.getElementById("pregunta1");
    const pregunta2 = document.getElementById("pregunta2");
    const pregunta3 = document.getElementById("pregunta3");
    const pregunta4 = document.getElementById("pregunta4");



    /* pregunta1 a la pregunta4 */

    imgPersonaje.src = "./pic/" + personajes[indice].foto;
    imgPersonaje.style.filter = "blur(20px)";

    pregunta0.value = personajes[indice].preguntas[0];
    pregunta1.value = personajes[indice].preguntas[1];
    pregunta2.value = personajes[indice].preguntas[2];
    pregunta3.value = personajes[indice].preguntas[3];
    pregunta4.value = personajes[indice].preguntas[4];
     /* cargar el resto de pregutas */ 


})


// progar las respuestas recividas en el select

const rta0 = document.getElementById("rta0");

rta0.addEventListener('change',()=> {

        if(rta0.value == personajes[indice].respuetas[0]) {
            opacidad = opacidad - 4;
            imgPersonaje.style.filter = "blur(" + opacidad +  "px)";
            document.getElementById("icoRta0").src = "./pic/si.png";

        } else {
            document.getElementById("icoRta0").src = "./pic/no.png";
        }

        rta0.disabled = true;
})

const rta1 = document.getElementById("rta1");

rta1.addEventListener('change',()=> {

        if(rta1.value == personajes[indice].respuetas[1]) {
            opacidad = opacidad - 4;
            imgPersonaje.style.filter = "blur(" + opacidad +  "px)";
            document.getElementById("icoRta1").src = "./pic/si.png";

        } else {
            document.getElementById("icoRta1").src = "./pic/no.png";
        }

        rta1.disabled = true;
})


const rta2 = document.getElementById("rta2");

rta2.addEventListener('change',()=> {

        if(rta2.value == personajes[indice].respuetas[2]) {
            opacidad = opacidad - 4;
            imgPersonaje.style.filter = "blur(" + opacidad +  "px)";
            document.getElementById("icoRta2").src = "./pic/si.png";

        } else {
            document.getElementById("icoRta2").src = "./pic/no.png";
        }

        rta2.disabled = true;
})

const rta3 = document.getElementById("rta3");

rta3.addEventListener('change',()=> {

        if(rta3.value == personajes[indice].respuetas[3]) {
            opacidad = opacidad - 4;
            imgPersonaje.style.filter = "blur(" + opacidad +  "px)";
            document.getElementById("icoRta3").src = "./pic/si.png";

        } else {
            document.getElementById("icoRta3").src = "./pic/no.png";
        }

        rta3.disabled = true;
})

const rta4 = document.getElementById("rta4");

rta4.addEventListener('change',()=> {

        if(rta4.value == personajes[indice].respuetas[4]) {
            opacidad = opacidad - 4;
            imgPersonaje.style.filter = "blur(" + opacidad +  "px)";
            document.getElementById("icoRta4").src = "./pic/si.png";

        } else {
            document.getElementById("icoRta4").src = "./pic/no.png";
        }

        rta4.disabled = true;
})

function vaciarinput(){
    vaciar=document.getElementById("RespuestaGeneral");
    vaciar.value='';
    
}
function vaciarpreguntas(){
    rta0.value="";
    rta0.disabled = false;
    document.getElementById("icoRta0").src = "";
    rta1.value="";
    rta1.disabled = false;
    document.getElementById("icoRta1").src = "";
    rta2.value="";
    rta2.disabled = false;
    document.getElementById("icoRta2").src = "";
    rta3.value="";
    rta3.disabled = false;
    document.getElementById("icoRta3").src = "";
    rta4.value="";
    rta4.disabled = false;
    document.getElementById("icoRta4").src = "";
}

const btnRespuesta = document.getElementById("btnRespuesta");

btnRespuesta.addEventListener('click' , () => {
    var longitud=personajes.length;
    aleatorio=Math.floor(Math.random()*(longitud))
    let random=[]
    random.push(aleatorio);
    
    console.log(random);
    
    opacidad=20;
    const RespuestaGeneral = document.getElementById("RespuestaGeneral").value;
    //let posicion = cadena.toLowerCase().indexOf(termino.toLowerCase());
    console.log ("Respuesta General " + RespuestaGeneral)
    var pru=indice;
    personaje=personajes[pru].name;
    let similar=(personaje.toLowerCase()).includes(RespuestaGeneral.toLowerCase()); 
    console.log(similar);
    
    if(pru<longitud){
        if (RespuestaGeneral == personajes[pru].name || similar==true) {
        console.log (" GANASTE ");
        console.log(pru);
       vaciarinput();
       vaciarpreguntas();
       Swal.fire('Muy bien el personaje era:',personajes[pru].name,'success');
        pru=++indice;
        if(pru<longitud){
            imgPersonaje.src = "./pic/" + personajes[pru].foto;
            imgPersonaje.style.filter = "blur(20px)";
            pregunta0.value = personajes[pru].preguntas[0];
            pregunta1.value = personajes[pru].preguntas[1];
            pregunta2.value = personajes[pru].preguntas[2];
            pregunta3.value = personajes[pru].preguntas[3];
            pregunta4.value = personajes[pru].preguntas[4];
            puntaje=puntaje+10;
            console.log(puntaje)
        }else{
            puntaje=puntaje+10;
    
            if(puntajene>puntaje){
                Swal.fire(
                    '¡Casi le atinas!',
                    'Tu puntaje es:'+puntaje,
                    'error'
                  )
            }else{
                Swal.fire(
                    '¡Excelente!',
                    'Tu puntaje es:'+puntaje,
                    'success'
                  )
            }
        }
        
        } else {
            Swal.fire('Estas equivocado el personaje era:',personajes[pru].name,'error');
            pru=++indice;
            vaciarinput();
            puntajene=puntajene+10;
            if(pru<longitud){
                imgPersonaje.src = "./pic/" + personajes[pru].foto;
                imgPersonaje.style.filter = "blur(20px)";
                pregunta0.value = personajes[pru].preguntas[0];
                pregunta1.value = personajes[pru].preguntas[1];
                pregunta2.value = personajes[pru].preguntas[2];
                pregunta3.value = personajes[pru].preguntas[3];
                pregunta4.value = personajes[pru].preguntas[4];
            }else{
                if(puntajene>puntaje){
                    Swal.fire(
                        '¡Casi le atinas!',
                        'Tu puntaje es:'+puntaje,
                        'error'
                      )
                }else{
                    Swal.fire(
                        '¡Excelente!',
                        'Tu puntaje es:'+puntaje,
                        'success'
                      )
                }
            }

        }
    }else{
        console.log("Creo que coronamos")
    }
    console.log(puntajene
        )
})