/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
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
