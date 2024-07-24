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
