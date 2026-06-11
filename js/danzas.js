// 1. Capturamos los elementos del DOM (Se mantiene igual)
var boton = document.getElementById("botonAceptar");
var selector = document.getElementById("selectorDanza");
var contenedor = document.getElementById("visorContenido");
var imagen = document.getElementById("imagenDanza");
var texto = document.getElementById("textoDanza");
var entradaNombre = document.getElementById("nombreUsuario");

// LÓGICA DEL INPUT: Detectar Enter, validar y transferir el foco
entradaNombre.addEventListener("keydown", function(evento) {
    if (evento.key === "Enter") {
        evento.preventDefault(); 
        if (entradaNombre.value === "") {
            alert("Debe llenar este campo para continuar.");
        } else {
            selector.focus();
        }
    }
});

// LÓGICA DEL BOTÓN ACEPTAR
boton.addEventListener("click", function() {
    
    var nombre = entradaNombre.value;
    var danzaSeleccionada = selector.value;

    if (nombre === "") {
        alert("Debe llenar este campo para continuar.");
        return; 
    }

    // =================================================================
    // ACTUALIZACIÓN: Concatenación con etiquetas HTML para el color
    // =================================================================
    if (danzaSeleccionada === "morenada") {
        contenedor.className = "visor-visible";
        imagen.src = "../img/morenada.jpg"; 
        texto.innerHTML = "¡Qué buena elección, <span class='nombre-resaltado'>" + nombre + "</span>! La Morenada es la danza mayor de La Paz, caracterizada por el ritmo lento de las matracas y los pesados trajes barrocos.<br> Es la danza ícono de La Paz por excelencia y la que mueve mayor cantidad de devotos. Su origen se remonta a la época colonial y representa, de manera estilizada, el sufrimiento de los esclavos africanos traídos a trabajar en las minas y viñedos. Destaca por el paso pesado y rítmico de los morenos, quienes llevan trajes profusamente bordados que pueden pesar hasta 20 kilos, acompañados por el inconfundible sonido de las matracas y la elegancia de las cholas paceñas.";
        
    } else if (danzaSeleccionada === "caporales") {
        contenedor.className = "visor-visible";
        imagen.src = "../img/caporal.jpg";
        texto.innerHTML = "¡Qué buena elección, <span class='nombre-resaltado'>" + nombre + "</span>! Los Caporales es una danza urbana llena de energía, saltos acrobáticos y ágiles movimientos.<br> Una danza vibrante, juvenil y llena de energía. Nació en la ciudad de La Paz en la década de 1970, inspirada en el capataz (caporal) de los esclavos negros de Los Yungas. Los bailarines varones realizan acrobacias, saltos ágiles y fuertes pisadas que hacen sonar los cascabeles de sus botas, mientras que las mujeres (machaquenas) deslumbran con su gracia, coreografías sincronizadas y coloridos trajes cortos.";
        
    } else if (danzaSeleccionada === "diablada") {
        contenedor.className = "visor-visible";
        imagen.src = "../img/diablada.jpg";
        texto.innerHTML = "¡Qué buena elección, <span class='nombre-resaltado'>" + nombre + "</span>! La Diablada representa la lucha ancestral entre el bien y el mal con imponentes máscaras.<br>Es una de las danzas más espectaculares y representativas de los Andes, que escenifica la eterna lucha teológica entre el bien y el mal. La coreografía está liderada por el Arcángel San Miguel, quien, con su paso marcial y espada en mano, domina y dirige a las rebeldes legiones del infierno, encabezadas por Lucifer y la tentadora China Supay (Diablesa).<br>Sus ágiles saltos cruzados y la energía desbordante de la tropa hacen de esta danza una verdadera obra de arte en movimiento.";
        
    } else if (danzaSeleccionada === "cueca") {
        contenedor.className = "visor-visible";
        imagen.src = "../img/cueca.jpg";
        texto.innerHTML = "¡Qué buena elección, <span class='nombre-resaltado'>" + nombre + "</span>! La Cueca Paceña es una danza elegante y romántica de cortejo, donde el pañuelo y el zapateo final reflejan la identidad paceña.<br>A diferencia de las danzas de entrada folclórica, la cueca es una danza tradicional de salón y de cortejo. La versión paceña se caracteriza por ser elegante, solemne y pausada en su primera parte, para luego terminar en un zapateo alegre (el quimba). El uso del pañuelo blanco en la mano derecha es fundamental, ya que simboliza el lenguaje del coqueteo entre la pareja.";
        
    } else if (danzaSeleccionada === "cullaguada") {
        contenedor.className = "visor-visible";
        imagen.src = "../img/cullaguada.jpg";
        texto.innerHTML = "¡Qué buena elección, <span class='nombre-resaltado'>" + nombre + "</span>! La Cullaguada es la danza de los antiguos hilanderos aymaras. Destaca por sus trajes y la rueca de hilar.<br>Esta danza de origen precolombino rinde homenaje a los antiguos hilanderos y tejedores de la región andina (los  Kullawas). Es una danza muy alegre y de paso ligero. Su elemento más distintivo es la rueca de madera o rueca de hilar que los bailarines, tanto hombres como mujeres, llevan en la mano y hacen girar al ritmo de la música, luciendo trajes adornados con monedas, perlas y bordados brillantes.";
        
    } else {
        contenedor.className = "visor-oculto";
        imagen.src = "";
        texto.innerHTML = "";
    }
});