/**
 * Conversion de unidades
 * @method cambiarunidades
 * @param {string} id - El id de los inputs
 * @param {number} valor - el valor de los inputs
 * @return
 */
function cambiarunidades(id, valor) {
    var metro, pulgada, pie, yarda;
    if (valor.includes(",")) {
        valor = valor.replace(",", ".");
    }
    if (isNaN(valor)) {
        alert('se ingreso un valor invalido');
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";
    } else if (id === "metro") {
        metro = valor;
        pulgada = 39.37 * valor;
        pie = 3.28 * valor;
        yarda = 1.09 * valor;
    } else if (id === "pulgada") {
        pulgada = valor;
        metro = 0.0254 * valor;
        pie = 0.083 * valor;
        yarda = 0.0277 * valor;
    } else if (id === "pie") {
        pie = valor;
        pulgada = 12 * valor;
        metro = 0.30 * valor;
        yarda = 0.33 * valor;
    } else if (id === "yarda") {
        yarda = valor;
        pulgada = 36 * valor;
        pie = 3 * valor;
        metro = 0.914 * valor;
    }
    document.lasunidades.unid_metro.value = Math.round(metro * 100) / 100;
    document.lasunidades.unid_pie.value = Math.round(pie * 100) / 100;
    document.lasunidades.unid_pulgada.value = Math.round(pulgada * 100) / 100;
    document.lasunidades.unid_yarda.value = Math.round(yarda * 100) / 100;
}

/**
 * Conversion de grados y radianes
 * @method convertirGR
 * @param {string} id - El id de los inputs
 * @return
 */
function convertirGR(id) {
    var grad, rad;
    if (id === "grados") {
        grad = document.getElementById("grados").value;
        rad = (grad * Math.PI) / 180;
    } else if (id === "radianes") {
        rad = document.getElementById("radianes").value;
        grad = (rad * 180) / Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

/**
 * Muestra y oculta el div
 * @method mostrar_ocultar
 * @param {string} valormo - El valor de los inputs
 * @return
 */

function mostrar_ocultar(valormo) {
    if (valormo === "val_mostrar") {
        document.getElementById("divmo").style.display = 'block';
    } else if (valormo === "val_ocultar") {
        document.getElementById("divmo").style.display = 'none';
    }
}


function calcularsuma() {
    var num1, num2;

    num1 = Number(document.getElementsByName("sum_num1")[0].value);
    num2 = document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].innerHTML = num1 + Number(num2);
}

function calcularresta() {
    var num1, num2;

    num1 = Number(document.getElementsByName("res_num1")[0].value);
    num2 = document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].innerHTML = num1 - Number(num2);
}

function calcularmultiplicacion() {
    var num1, num2;

    num1 = Number(document.getElementsByName("mul_num1")[0].value);
    num2 = document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].innerHTML = num1 * Number(num2);
}

function calculardivision() {
    var num1, num2;

    num1 = Number(document.getElementsByName("div_num1")[0].value);
    num2 = document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].innerHTML = num1 / Number(num2);
}

function cargarweb() {
    var can, unidad, urlcomp;
    can = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;
    urlcomp = "segundaWeb.html#" + can + "#" + unidad;
    window.open(urlcomp);
}

function cargarresultado() {
    var urlcomp, can, un;
    urlcomp = window.location.href.split("/")[5];
    can = urlcomp.split("#")[1];
    un = urlcomp.split("#")[2];
    document.getElementById("dist").value = can + " " + un;
}

function guardarlocalstorage() {
    var distancia, unidad;
    distancia = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;
    localStorage.setItem("distanciaLS", distancia);
    localStorage.setItem("unidadesLS", unidad);
    window.open("2_web.html");
}

function cargarlocalstorage() {
    var cantidad, unidad;
    cantidad = localStorage.getItem("distanciaLS");
    unidad = localStorage.getItem("unidadesLS");
    document.getElementById("dist").value = cantidad + " " + unidad;
}

function dibujarcircuad() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var ymax = canvas.height;
    var margen = 5;
    var xmax = canvas.width;
    ctx.fillStyle = "#333899";
    ctx.fillRect(0 + margen, ymax - 40 - margen, 40, 40);
    ctx.arc(xmax / 2, ymax / 2, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "#11b55d";
    ctx.stroke();
    ctx.fill();
}

var bandera;

function dibujar(event) {
    var canvas = document.getElementById("canvasdibujar");
    var ctx = canvas.getContext("2d");
    var posx = event.clientX;
    var posy = event.clientY;
    console.log(posx, posy);
    canvas.onmousedown = function () {
        bandera = true;
    }
    canvas.onmouseup = function () {
        bandera = false;
    }
    if (bandera === true) {
        ctx.fillRect(posx, posy, 5, 5);
        ctx.fill;

    }

}

function limpiar() {
    var canvas = document.getElementById("canvasdibujar");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;
}
