var url = "http://pre.solucionesaiapps.com/web/api/cars/";
var urlImage = "http://pre.solucionesaiapps.com/web/";

var apikey;
var email_webmaster;

var seleccion = {
    marca: {},
    modelo: {},
    mes: {},
    anyo: {},
    motor: {},
    potencia: {},
    km: 0,
    version: {},
    email: '',
    telefono: ''
};

var mesSeleccionado = false;
var anyoSeleccionado = false;


function scrollToAnchor(aid){
    jQuery(function($){
        var aTag = $("#"+aid);
        $('html,body').animate({scrollTop: (aTag.offset().top - 20)},'slow');
    });
}

function showModalInfo(titulo, texto) {
    jQuery(function($) {
        $('#tituloInfoModal').html(titulo);
        $('#textoInfoModal').html(texto);

        $('#infoModal').modal('show');
    });
}

function ocultarTodo() {
    jQuery(function($){
        //oculto antes de cargar
        $("#modelAnchor").addClass('opacityContent');
        $(".btnModel").attr("disabled", true);

        //Oculto los meses
        $("#monthAnchor").addClass('opacityContent');
        $(".btnMes").attr("disabled", true);

        //Oculto lo años
        $("#yearAnchor").addClass('opacityContent');
        $(".btnYear").attr("disabled", true);

        //Oculo los motores
        $("#engineAnchor").addClass('opacityContent');
        $(".btnEngine").attr("disabled", true);

        //Oculo las potencias
        $("#powerAnchor").addClass('opacityContent');
        $(".btnPower").attr("disabled", true);

        //Oculto los KM
        $("#kmAnchor").addClass('opacityContent');
        $(".btnKM").attr("disabled", true);
        $('#inputKM').val('');

        //Oculo las versiones
        $("#versionAnchor").addClass('opacityContent');
        $(".btnVersion").attr("disabled", true);

        //Ocultar comprobar resultado
        $("#resultAnchor").addClass('opacityContent');
        $(".btnResult").attr("disabled", true);
        $('#inputEmail').val('');
        $('#inputTelefono').val('');
        $('#checkTerminos')[0].checked = false;
    });
}


function newValuation() {
    jQuery(function($){

        ocultarTodo();

        $('.btnBrand').removeClass('btnActivo');
        $('.btnModel').removeClass('btnActivo');
        $('.btnMes').removeClass('btnActivo');
        $('.btnYear').removeClass('btnActivo');
        $('.btnEngine').removeClass('btnActivo');
        $('.btnPower').removeClass('btnActivo');
        $('.btnVersion').removeClass('btnActivo');

        $('#inputKM').val('');
        $('#inputEmail').val('');
        $('#inputTelefono').val('');
        $('#checkTerminos')[0].checked = false;

        scrollToAnchor('brandAnchor');
    });
}

function showResult() {
    jQuery(function($) {
        //Elimino por si se ha entrado anteriormente
        $('.rowResult').remove();

        $('#resultContainer').append([
            '<div class="row rowResult">'+
            '<div class="col-xs-12 col-sm-6 col-md-4 marginFinalResult">'+
            '<div alt="" class="imgBrand" style="background-image: url('+urlImage+seleccion.marca.icon_url+')"></div>'+
            '</div>'+
            '<div class="col-xs-12 col-sm-6 col-md-8 marginFinalResult centerText">'+
            '<p class="textValue">'+seleccion.version.value+'</p>'+
            '</div>'+
            '</div>',
            '<ul class="list-group rowResult" id="resultGroupContainer"></ul>'
        ]);

        $('#resultGroupContainer').append(
            [
                '<li id="backgroundListDetail" class="list-group-item"><strong>Información detallada:</strong></li>',
                '<li class="list-group-item"><strong>Marca: </strong> '+seleccion.marca.name+'</li>',
                '<li class="list-group-item"><strong>Modelo: </strong> '+seleccion.modelo.name+'</li>',
                '<li class="list-group-item"><strong>Antigüedad: </strong> '+seleccion.mes.mes +' '+seleccion.anyo.anyo+'</li>',
                '<li class="list-group-item"><strong>Tipo motor: </strong> '+seleccion.motor.description+'</li>',
                '<li class="list-group-item"><strong>Potencia: </strong> '+seleccion.potencia+'</li>',
                '<li class="list-group-item"><strong>Kilómetros: </strong> '+seleccion.km+'</li>',
                '<li class="list-group-item"><strong>Versión: </strong> '+seleccion.version.name+'</li>'
            ]
        );
    });
}

jQuery(function($) {
    $("#formResult").submit(function(e) {
        seleccion.email = $('#inputEmail').val();
        seleccion.telefono = $('#inputTelefono').val();

        if(seleccion.email=='') {
            showModalInfo("Error del formulario", "Debes introducir un email para continuar");
        }
        else if(seleccion.telefono.length!=9) {
            showModalInfo("Error del formulario", "Debes introducir un teléfono válido para continuar");
        } else if(!$("#checkTerminos").is(':checked')) {
            showModalInfo("Error del formulario", "Debes aceptar las condiciones para continuar");
        } else {

            var botonComprobar = $('#botonComprobar');

            //ENVIAR EMAIL
            $.ajax({
                url: url + "requestValuation/?apikey=" + apikey,
                type: "POST",
                data: {
                    id_coche: seleccion.version.id,
                    email_usr: seleccion.email,
                    email_webmaster: email_webmaster,
                    km: seleccion.km,
                    mes: seleccion.mes,
                    anyo: seleccion.anyo.anyo,
                    value: seleccion.version.value,
                    telefono: seleccion.telefono,
                    realValue: seleccion.version.realValue
                },
                beforeSend: function() {
                    botonComprobar.button('loading');
                },
                complete: function(){
                    botonComprobar.button('reset');
                },
                success: function() {
                    showResult();
                    $('#finalResultModal').modal('show')
                },
                error: function(XMLHttpRequest, textStatus, errorThrown){
                    $('#errorModal').modal('show');
                    botonComprobar.button('reset');
                }
            });
            //-----------
        }

        e.preventDefault();
    });
});


function selectVersion(element, id, name, start_year, end_year, engine, cylinders, p_kw, cvf, co2, cv, value){

    jQuery(function($) {
        //Si no ha sido seleccionado
        if (!$('#' + element.id).hasClass('btnActivo')) {

            //Quito la clase a todos
            $('.btnVersion').removeClass('btnActivo');
            $('#' + element.id).addClass('btnActivo');

            //Almaceno el modelo seleccionado
            seleccion.version = {
                id: id,
                name: name,
                start_year: start_year,
                end_year: end_year,
                engine: engine,
                cylinders: cylinders,
                p_kw: p_kw,
                cvf: cvf,
                co2: co2,
                cv: cv,
                value: numeral(parseFloat(value)).format('0,0.00 $'),
                realValue : value
            };

            scrollToAnchor("resultAnchor");

            //Mostrar comprobar resultado
            $("#resultAnchor").removeClass('opacityContent');
            $(".btnResult").attr("disabled", false);
        }
    });
}

function getVersions() {

    jQuery(function($) {
        //Oculo las versiones
        $("#versionAnchor").addClass('opacityContent');
        $(".btnVersion").attr("disabled", true);

        //Ocultar comprobar resultado
        $("#resultAnchor").addClass('opacityContent');
        $(".btnResult").attr("disabled", true);
        $('#inputEmail').val('');
        $('#inputTelefono').val('');
        $('#checkTerminos')[0].checked = false;

        $.ajax({
            url: url + "car/?model_id="+seleccion.modelo.id+"&year="+seleccion.anyo.anyo+"&month="+seleccion.mes.id+"&enginetype="+seleccion.motor.id+"&cv_id="+seleccion.potencia+"&km="+seleccion.km+"&apikey=" + apikey,
            type: "GET",
            beforeSend: function() {
                $("#versionLoader").fadeIn("slow");
            },
            complete: function(){
                $("#versionLoader").hide();
            },
            success: function(data) {

                if(data.length>0) {
                    //Elimino las potencias que puedan haberse añadido y quito la opacidad
                    $(".divVersion").remove();
                    $("#versionAnchor").removeClass('opacityContent');

                    $.each(data, function (index) {
                        $('#versionContainter').append(
                            '<div class="col-xs-6 col-sm-6 col-md-6 rowElements divVersion">' +
                            '<button id="power' + data[index].id + '" class="btn btn-default btnNormal btnVersion" onclick="selectVersion(this,\'' + data[index].id + '\',\'' + data[index].name + '\',\'' + data[index].start_year + '\',\'' + data[index].end_year + '\',\'' + data[index].engine + '\',\'' + data[index].cylinders + '\',\'' + data[index].p_kw + '\',\'' + data[index].cvf + '\',\'' + data[index].co2 + '\',\'' + data[index].cv + '\',\'' + data[index].value + '\');">' +
                            '<span>' + data[index].name + '</span>' +
                            '</button>' +
                            '</div>'
                        )
                    });
                }
                else
                    showModalInfo("Tasación incorrecta","No se ha podido tasar su vehículo con los parámetros introducidos");
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){
                $('#errorModal').modal('show');
                $("#versionLoader").hide();
            }
        });
    });
}

jQuery(function($){
    $("#formKM").submit(function(e) {

        var km = $('#inputKM').val();

        if(km=='') {
            showModalInfo("Error del formulario","Debes indicar los kilómetros para continuar");
        } else if(km<=0) {
            showModalInfo("Error del formulario","Los kilómetros introducidos son incorrectos");
        }
        else {
            seleccion.km = parseInt(km);

            scrollToAnchor("versionAnchor");
            getVersions();
        }
        e.preventDefault();
    });
});

function selectPower(element, power){

    jQuery(function($) {
        //Si no ha sido seleccionado
        if (!$('#' + element.id).hasClass('btnActivo')) {

            //Quito la clase a todos
            $('.btnPower').removeClass('btnActivo');
            $('#' + element.id).addClass('btnActivo');

            //Almaceno el modelo seleccionado
            seleccion.potencia = parseInt(power);

            //Muestro los KM
            $("#kmAnchor").removeClass('opacityContent');
            $(".btnKM").attr("disabled", false);

            scrollToAnchor("kmAnchor");

            //Oculo las versiones
            $("#versionAnchor").addClass('opacityContent');
            $(".btnVersion").attr("disabled", true);

            //Ocultar comprobar resultado
            $("#resultAnchor").addClass('opacityContent');
            $(".btnResult").attr("disabled", true);
            $('#inputEmail').val('');
            $('#inputTelefono').val('');
            $('#checkTerminos')[0].checked = false;
        }
    });
}

function getPowers() {

    jQuery(function($) {
        //Oculo las potencias
        $("#powerAnchor").addClass('opacityContent');
        $(".btnPower").attr("disabled", true);

        //Oculto los KM
        $("#kmAnchor").addClass('opacityContent');
        $(".btnKM").attr("disabled", true);
        $('#inputKM').val('');

        //Oculo las versiones
        $("#versionAnchor").addClass('opacityContent');
        $(".btnVersion").attr("disabled", true);

        //Ocultar comprobar resultado
        $("#resultAnchor").addClass('opacityContent');
        $(".btnResult").attr("disabled", true);
        $('#inputEmail').val('');
        $('#inputTelefono').val('');
        $('#checkTerminos')[0].checked = false;

        $.ajax({
            url: url + "cv/?model_id="+seleccion.modelo.id+"&year="+seleccion.anyo.anyo+"&enginetype="+seleccion.motor.id+"&apikey=" + apikey,
            type: "GET",
            beforeSend: function() {
                $("#powerLoader").fadeIn("slow");
            },
            complete: function(){
                $("#powerLoader").hide();
            },
            success: function(data) {

                if(data.length>0) {
                    //Elimino las potencias que puedan haberse añadido y quito la opacidad
                    $(".divPower").remove();
                    $("#powerAnchor").removeClass('opacityContent');

                    $.each(data, function (index) {
                        $('#powerContainer').append(
                            '<div class="col-xs-6 col-sm-4 col-md-3 rowElements divPower">' +
                            '<button id="power' + data[index] + '" class="btn btn-default btnNormal btnPower" onclick="selectPower(this,\'' + data[index] + '\');">' +
                            '<span>' + data[index] + '</span>' +
                            '</button>' +
                            '</div>'
                        )
                    });
                }
                else
                    showModalInfo("Tasación incorrecta","No se ha podido tasar su vehículo con los parámetros introducidos");

            },
            error: function(XMLHttpRequest, textStatus, errorThrown){
                $('#errorModal').modal('show');
                $("#powerLoader").hide();
            }
        });
    });
}

function selectEngine(element, id, code, description){

    jQuery(function($) {
        //Si no ha sido seleccionado
        if (!$('#' + element.id).hasClass('btnActivo')) {

            //Quito la clase a todos
            $('.btnEngine').removeClass('btnActivo');
            $('#' + element.id).addClass('btnActivo');

            //Almaceno el modelo seleccionado
            seleccion.motor = {
                id: id,
                code: code,
                description: description
            };

            scrollToAnchor("powerAnchor");
            getPowers();
        }
    });
}

function hideElementIncorrectYear() {
    jQuery(function($) {
        //Oculo los motores
        $("#engineAnchor").addClass('opacityContent');
        $(".btnEngine").attr("disabled", true);

        //Oculo las potencias
        $("#powerAnchor").addClass('opacityContent');
        $(".btnPower").attr("disabled", true);

        //Oculto los KM
        $("#kmAnchor").addClass('opacityContent');
        $(".btnKM").attr("disabled", true);
        $('#inputKM').val('');

        //Oculo las versiones
        $("#versionAnchor").addClass('opacityContent');
        $(".btnVersion").attr("disabled", true);

        //Ocultar comprobar resultado
        $("#resultAnchor").addClass('opacityContent');
        $(".btnResult").attr("disabled", true);
        $('#inputEmail').val('');
        $('#inputTelefono').val('');
        $('#checkTerminos')[0].checked = false;
    });
}

function getEngines() {

    jQuery(function($) {
        hideElementIncorrectYear();

        $.ajax({
            url: url + "enginetypes/?model_id="+seleccion.modelo.id+"&year="+seleccion.anyo.anyo+"&apikey=" + apikey,
            type: "GET",
            beforeSend: function() {
                $("#engineLoader").fadeIn("slow");
            },
            complete: function(){
                $("#engineLoader").hide();
            },
            success: function(data) {

                if(data.length>0) {
                    //Elimino los años que puedan haberse añadido y quito la opacidad
                    $(".divEngine").remove();
                    $("#engineAnchor").removeClass('opacityContent');

                    $.each(data, function (index) {
                        $('#engineContainer').append(
                            '<div class="col-xs-6 col-sm-4 col-md-4 rowElements divEngine">' +
                            '<button id="engine' + data[index].id + '" class="btn btn-default btnNormal btnEngine" onclick="selectEngine(this,\'' + data[index].id + '\',\'' + data[index].code + '\',\'' + data[index].description + '\');">' +
                            '<span>' + data[index].description + '</span>' +
                            '</button>' +
                            '</div>'
                        )
                    });
                }
                else
                    showModalInfo("Tasación incorrecta","No se ha podido tasar su vehículo con los parámetros introducidos");
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){
                $('#errorModal').modal('show');
                $("#engineLoader").hide();
            }
        });
    });
}

//Compruebo que no deje tasar vehículos en meses que todavía no han pasado
function isFutureDate($) {
    var isFuture = false;

    if (anyoSeleccionado && mesSeleccionado) {
        var year = seleccion.anyo.anyo;
        var month = seleccion.mes.id;

        var currentYear = (new Date()).getFullYear();
        var currentMonth = (new Date()).getMonth();

        if (year == currentYear) {
            if (month >= (currentMonth+1)) {
                //----- Deselecciono los dos botones ya que la fecha seleccionada es incorrecta---
                anyoSeleccionado = false;
                mesSeleccionado = false;

                $('.btnYear').removeClass('btnActivo');
                $('.btnMes').removeClass('btnActivo');
                hideElementIncorrectYear();

                isFuture = true;
            }
        }
    }

    return isFuture
}

function selectYear(element, id, anyo, anyoActual){

    jQuery(function($) {
        //Si no ha sido seleccionado
        if (!$('#' + element.id).hasClass('btnActivo')) {

            //Quito la clase a todos
            $('.btnYear').removeClass('btnActivo');
            $('#' + element.id).addClass('btnActivo');

            var buttons = $('.btnYear');

            if(buttons[0].id == element.id) {
                $('.btnYear').removeClass('btnActivo');
                anyoSeleccionado = false;
                showModalInfo("Tasación incorrecta","No se ha podido tasar su vehículo con los parámetros introducidos");
                hideElementIncorrectYear();
            } else if((buttons[buttons.length-1].id == element.id) && !anyoActual) {
                $('.btnYear').removeClass('btnActivo');
                anyoSeleccionado = false;
                showModalInfo("Tasación incorrecta","No se ha podido tasar su vehículo con los parámetros introducidos");
                hideElementIncorrectYear();
            } else {
                //Almaceno el anyo seleccionado
                seleccion.anyo = {
                    id: id,
                    anyo: parseInt(anyo)
                };

                anyoSeleccionado = true;

                if(isFutureDate($))
                    showModalInfo("Tasación incorrecta","No se ha podido tasar su vehículo con los parámetros introducidos");

                if(mesSeleccionado) {
                    scrollToAnchor("engineAnchor");
                    getEngines();
                } else {
                    scrollToAnchor("monthAnchor");
                }
            }
        }
    });
}

function selectMonth(element, mes){
    jQuery(function($) {
        //Si no ha sido seleccionado
        if (!$('#' + element.id).hasClass('btnActivo')) {

            //Quito la clase a todos
            $('.btnMes').removeClass('btnActivo');
            $('#' + element.id).addClass('btnActivo');

            //Almaceno el mes seleccionado
            seleccion.mes = {
                id: parseInt((element.id).substr(3)),
                mes: mes
            };

            mesSeleccionado = true;

            if(isFutureDate($))
                showModalInfo("Tasación incorrecta","No se ha podido tasar su vehículo con los parámetros introducidos");

            if(anyoSeleccionado) {
                scrollToAnchor("engineAnchor");
                getEngines();
            } else {
                scrollToAnchor("yearAnchor");
            }
        }
    });
}

function getYears() {
    jQuery(function($) {
        //Oculo los años
        $("#yearAnchor").addClass('opacityContent');
        $(".btnYear").attr("disabled", true);

        //Oculto los meses
        $("#monthAnchor").addClass('opacityContent');
        $(".btnMes").attr("disabled", true);

        //Oculo los motores
        $("#engineAnchor").addClass('opacityContent');
        $(".btnEngine").attr("disabled", true);

        //Oculo las potencias
        $("#powerAnchor").addClass('opacityContent');
        $(".btnPower").attr("disabled", true);

        //Oculto los KM
        $("#kmAnchor").addClass('opacityContent');
        $(".btnKM").attr("disabled", true);
        $('#inputKM').val('');

        //Oculo las versiones
        $("#versionAnchor").addClass('opacityContent');
        $(".btnVersion").attr("disabled", true);

        //Ocultar comprobar resultado
        $("#resultAnchor").addClass('opacityContent');
        $(".btnResult").attr("disabled", true);
        $('#inputEmail').val('');
        $('#inputTelefono').val('');
        $('#checkTerminos')[0].checked = false;

        $.ajax({
            url: url + "years/?model_id="+seleccion.modelo.id+"&apikey=" + apikey,
            type: "GET",
            beforeSend: function() {
                $("#yearLoader").fadeIn("slow");
            },
            complete: function(){
                $("#yearLoader").hide();
            },
            success: function(anyo) {

                if(anyo.start_year<=anyo.end_year) {
                    //Elimino los años que puedan haberse añadido y quito la opacidad
                    $(".divYear").remove();
                    $("#yearAnchor").removeClass('opacityContent');

                    //Elimino los años que puedan haberse añadido y quito la opacidad
                    $("#monthAnchor").removeClass('opacityContent');
                    $(".btnMes").attr("disabled", false);

                    var anyoActual;

                    //Obtengo el anyo acutal
                    var currentYear = (new Date()).getFullYear();

                    //Obtengo el listado de todos los años
                    var anyos = [];

                    var indice = -1;
                    for (i = anyo.start_year - 1; i <= anyo.end_year; i++) {
                        indice++;
                        anyos.push({id: indice, anyo: i.toString()})
                    }

                    //ajusto los limites de año
                    anyoActual = true;
                    anyos[0].anyo += " <";
                    if (anyo.end_year < currentYear) {
                        anyoActual = false;
                        anyos.push({id: anyos.length + 1, anyo: "> " + (anyo.end_year + 1)})
                    }


                    $.each(anyos, function (index) {
                        $('#yearContainer').append(
                            '<div class="col-xs-6 col-sm-4 col-md-4 rowElements divYear">' +
                            '<button id="year' + anyos[index].id + '" class="btn btn-default btnNormal btnYear" onclick="selectYear(this,\'' + anyos[index].id + '\',\'' + anyos[index].anyo + '\',' + anyoActual + ');">' +
                            '<span>' + anyos[index].anyo + '</span>' +
                            '</button>' +
                            '</div>'
                        )
                    });
                } else {
                    $('#errorModal').modal('show')
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){
                $('#errorModal').modal('show');
                $("#yearLoader").hide();
            }
        });
    });
}

function selectModel(element, id, name) {
    jQuery(function($) {
        //Si no ha sido seleccionado
        if (!$('#' + element.id).hasClass('btnActivo')) {

            //Quito la clase a todos
            $('.btnModel').removeClass('btnActivo');
            $('#' + element.id).addClass('btnActivo');

            //Almaceno el modelo seleccionado
            seleccion.modelo = {
                id: id,
                name: name
            };

            scrollToAnchor('monthAnchor');

            //Oculto lo años
            $("#yearAnchor").addClass('opacityContent');
            $(".btnYear").attr("disabled", true);

            //Oculto los meses
            $("#monthAnchor").addClass('opacityContent');
            $(".btnMes").attr("disabled", true);

            //Oculo los motores
            $("#engineAnchor").addClass('opacityContent');
            $(".btnEngine").attr("disabled", true);

            //Oculo las potencias
            $("#powerAnchor").addClass('opacityContent');
            $(".btnPower").attr("disabled", true);

            //Oculto los KM
            $("#kmAnchor").addClass('opacityContent');
            $(".btnKM").attr("disabled", true);
            $('#inputKM').val('');

            //Oculo las versiones
            $("#versionAnchor").addClass('opacityContent');
            $(".btnVersion").attr("disabled", true);

            //Ocultar comprobar resultado
            $("#resultAnchor").addClass('opacityContent');
            $(".btnResult").attr("disabled", true);
            $('#inputEmail').val('');
            $('#inputTelefono').val('');
            $('#checkTerminos')[0].checked = false;


            //Cargo las fechas y los meses
            mesSeleccionado = false;
            anyoSeleccionado = false;
            $('.btnMes').removeClass('btnActivo');
            getYears();
            scrollToAnchor("monthAnchor");
        }
    });
}

function getModels() {
    jQuery(function($) {

        //Ocultar todos los elementos
        ocultarTodo();

        $.ajax({
            url: url + "models/?brand_id="+seleccion.marca.id+"&apikey=" + apikey,
            type: "GET",
            beforeSend: function() {
                $("#modelLoader").fadeIn("slow");
            },
            complete: function(){
                $("#modelLoader").hide();
            },
            success: function(data) {
                if(data.length>0) {
                    //Elimino los modelos que puedan haberse añadido y quito la opacidad
                    $(".divModel").remove();
                    $("#modelAnchor").removeClass('opacityContent');

                    $.each(data, function (index) {
                        $('#modelContainer').append(
                            '<div class="col-xs-6 col-sm-4 col-md-4 rowElements divModel">' +
                            '<button id="model' + data[index].id + '" class="btn btn-default btnNormal btnModel" onclick="selectModel(this,\'' + data[index].id + '\', \'' + data[index].name + '\');">' +
                            '<span>' + data[index].name + '</span>' +
                            '</button>' +
                            '</div>'
                        )
                    });
                } else {
                    showModalInfo("Tasación incorrecta","No se ha podido tasar su vehículo con los parámetros introducidos");
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){
                $('#errorModal').modal('show');
                $("#modelLoader").hide();
            }
        });
    });
}

function selectBrand(element, id, name, icon_url){
    jQuery(function($) {
        //Si no ha sido seleccionado
        if (!$('#' + element.id).hasClass('btnActivo')) {

            //Quito la clase a todos
            $('.btnBrand').removeClass('btnActivo');
            $('#' + element.id).addClass('btnActivo');

            //Almaceno la marca seleccionada
            seleccion.marca = {
                id: id,
                name: name,
                icon_url: icon_url
            };

            scrollToAnchor('modelAnchor');

            getModels();
        }
    });
}

function hideShowBrands() {
    jQuery(function($) {
        if($('#hiddenBrands').is(':visible')) {
            $("#hiddenBrands").slideUp();
        } else {
            $("#hiddenBrands").slideDown();
        }
    });
}

function getBrands() {

    jQuery(function($){

        //obtener APIKEY y el EMAIL
        apikey = $('#hiddenApikey').val();
        email_webmaster = $('#hiddenEmail').val();

        $.ajax({
            url: url + "brands/?version=0.0.3&apikey=" + apikey,
            type: "GET",
            beforeSend: function() {
                $("#brandLoader").fadeIn("slow");
            },
            complete: function(){
                $("#brandLoader").hide();
            },
            success: function(data) {

                var tamanoMostrar = 11;

                //si hay menos marcas a mostrar
                if(data.length<=11) {
                    $.each(data, function(index){
                        $('#brandContainer').append(
                            '<div class="col-xs-6 col-sm-2 col-md-2 rowElements">'+
                            '<button id="brand'+data[index].id+'" title="'+data[index].name+'" class="btn btn-default btnBrand" onclick="selectBrand(this,\''+data[index].id+'\', \''+data[index].name+'\', \''+data[index].icon_url+'\');">'+
                            '<div alt="" class="imgBrand" style="background-image: url('+urlImage+data[index].icon_url+')"></div>'+
                            '</button>'+
                            '</div>'
                        )
                    });
                } else {
                    for(var i = 0;i<tamanoMostrar;i++) {
                        $('#brandContainer').append(
                            '<div class="col-xs-6 col-sm-2 col-md-2 rowElements">'+
                            '<button id="brand'+data[i].id+'" title="'+data[i].name+'" class="btn btn-default btnBrand" onclick="selectBrand(this,\''+data[i].id+'\', \''+data[i].name+'\', \''+data[i].icon_url+'\');">'+
                            '<div alt="" class="imgBrand" style="background-image: url('+urlImage+data[i].icon_url+')"></div>'+
                            '</button>'+
                            '</div>'
                        )
                    }

                    $('#brandContainer').append(
                        '<div class="col-xs-6 col-sm-2 col-md-2 rowElements">'+
                        '<button id="buttonMore" type="button" class="btn btnBrand btnMore" onclick="hideShowBrands()">'+
                        '<div>'+
                        '<i class="glyphicon glyphicon-plus"></i>'+
                        '<p>Otras marcas</p>'+
                        '</div>'+
                        '</button>'+
                        '</div>'
                    );

                    for(var j = tamanoMostrar; j<data.length; j++) {
                        $('#hiddenBrands').append(
                            '<div class="col-xs-6 col-sm-2 col-md-2 rowElements">'+
                            '<button id="brand'+data[j].id+'" title="'+data[j].name+'" class="btn btn-default btnBrand" onclick="selectBrand(this,\''+data[j].id+'\', \''+data[j].name+'\', \''+data[j].icon_url+'\');">'+
                            '<div alt="" class="imgBrand" style="background-image: url('+urlImage+data[j].icon_url+')"></div>'+
                            '</button>'+
                            '</div>'
                        )
                    }
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){
                $('#errorModal').modal('show');
                $("#brandLoader").hide();
                $("#buttonRetry").show();
            }
        });
    });
}

jQuery(function($){
    $("#buttonRetry").click(function() {
        $("#buttonRetry").hide();
        getBrands();
    });
});

jQuery(document).ready(function() {
    // load a language
    numeral.language('es', {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        currency: {
            symbol: '€'
        }
    });

    //switch between languages
    numeral.language('es');

    getBrands();
});