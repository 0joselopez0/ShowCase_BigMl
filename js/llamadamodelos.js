function actualizarvalor() {

    var data = { m: $('#m').val(), sem: $('#semana').val(), h: $('#hora').val(), intervaloTiempo: $('#intervalot').val(), velMaxMS: $('#velmax').val(), velMinMS: $('#velmin').val(), intervaloVel: $('#intervalovel').val(), velmedMS: $('#velmed').val(), carburanteL: $('#carburante').val(), presinNeumticosPa: $('#presionneu').val(), psoKg: $('#peso').val(), retrasoDeArranqueS: $('#retrasoarranque').val(), tempSueloC: $('#temperaturasuelo').val(), tsDayOfMonth: $('#diadelmes').val(), fechaYear: $('#ano').val(), fechaMonth: $('#mes').val(), fechaDawOfWeek: $('#diadelasemana').val() };
    $('#predicho').html(predictTiempoMaxS(data));

}

function actualizarvalor2() {
    
    console.log($('#datepickerboro').val())
    console.log($('#timepickerboro').val())
    var fullhora= $('#timepickerboro').val()
    var splithora= fullhora.split(":")
    console.log(splithora[0])
    var fulldate= $('#datepickerboro').val()
    var d = new Date(fulldate);
    var n = d.getDay();

    var spliteado= fulldate.split("-");
    console.log($('#slider5').slider("option", "value"))
   
    var data2 = { 
    ph: $('#slider').slider("option", "value"), 
    conductividad: $('#slider5').slider("option", "value"), 
    temperatura: $('#slider3').slider("option", "value"), 
    turbidez:  $('#slider2').slider("option", "value"), 
    cloruros: $('#slider6').slider("option", "value"), 
    aluminio: $('#slider7').slider("option", "value"), 
    field3Month: spliteado[1], 
    field3DayOfMonth: spliteado[2], 
    field3DayOfWeek: n,
    horaMuestraHour: splithora[0],
    durezaTotal: $('#slider4').slider("option", "value"),
    horaMuestraMinute: splithora[1],
    alcalinidad: 0,
    fosfato: 0.1,
    rsi: 4.68,
    calcioCa2: 0,
    std: 0,
    lsi: 0
   






}

    console.log(data2.ph);
    console.log(predictBoro(data2));
    $('#predicho2').html(predictBoro(data2));
}

    