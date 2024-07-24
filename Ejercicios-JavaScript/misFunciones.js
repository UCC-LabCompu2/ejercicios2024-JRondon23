/**
 * Conversion de unidades
 * @method cambiarunidades
 * @param {string} id - El id de los inputs
 * @param {number} valor - el valor de los inputs
 * @return
 */
function cambiarunidades(id, valor) {
    if (isNaN(valor)) {
        alert('se ingreso un valor invalido');
        document.lasunidades.unid_metro.value = "";
        document.lasunidades.unid_pie.value = "";
        document.lasunidades.unid_pulgada.value = "";
        document.lasunidades.unid_yarda.value = "";
    } else if (id === "metro") {
        document.lasunidades.unid_pulgada.value = 39.37 * valor;
        document.lasunidades.unid_pie.value = 3.28 * valor;
        document.lasunidades.unid_yarda.value = 1.09 * valor;
    } else if (id === "pulgada") {
        document.lasunidades.unid_metro.value = 0.0254 * valor;
        document.lasunidades.unid_pie.value = 0.083 * valor;
        document.lasunidades.unid_yarda.value = 0.0277 * valor;
    } else if (id === "pie") {
        document.lasunidades.unid_pulgada.value = 12 * valor;
        document.lasunidades.unid_metro.value = 0.30 * valor;
        document.lasunidades.unid_yarda.value = 0.33 * valor;
    } else if (id === "yarda") {
        document.lasunidades.unid_pulgada.value = 36 * valor;
        document.lasunidades.unid_pie.value = 3 * valor;
        document.lasunidades.unid_metro.value = 0.914 * valor;
    }
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
