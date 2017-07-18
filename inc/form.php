<?php
/**
 * Created by PhpStorm.
 * User: juancarlosrico
 * Date: 15/09/2016
 * Time: 15:23
 */

function getTasadorForm($apikey, $email, $terminos)
{
    ?>

    <div id="contenedor" class="mainContainer">

        <input id="hiddenApikey" type="hidden" name="apikey" value="<?php echo $apikey; ?>">
        <input id="hiddenEmail" type="hidden" name="email" value="<?php echo $email; ?>">
        <input id="hiddenTerminos" type="hidden" name="terminos" value="<?php echo $terminos; ?>">

        <!-- SELECCION MARCA  -->
        <div class="row" id="brandAnchor">
            <div class="col-xs-12" id="brandRow">
                <h3>
                    <i class="glyphicon glyphicon-menu-right iconArrow"></i>
                    Seleccione la marca de su coche:
                </h3>
                <div id="brandContainer" class="row">
                    <div id="brandLoader" class="se-pre-con"></div>
                    <button type="submit" id="buttonRetry" class="btn buttonRetry botonKM">Reintentar</button>
                </div>
                <div id="hiddenBrands" style="display: none" class="row">
                </div>
            </div>
        </div>

        <!-- SELECCION MODELO  -->
        <div class="row opacityContent" id="modelAnchor">
            <div class="col-xs-12 rowMargin">
                <h3>
                    <i class="glyphicon glyphicon-menu-right iconArrow"></i>
                    Seleccione el modelo de su coche:
                </h3>
                <div id="modelContainer" class="row" >
                    <div id="modelLoader" class="se-pre-con"></div>
                    <div class="col-xs-6 col-sm-4 col-md-4 rowElements divModel">
                        <button id="model544" class="btn btn-default btnNormal btnModel" onclick="selectModel(this,'544', 'Cygnet');" disabled>
                            Cygnet
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-4 rowElements divModel">
                        <button id="model545" class="btn btn-default btnNormal btnModel" onclick="selectModel(this,'545', 'DB7');" disabled>
                            DB7
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-4 rowElements divModel">
                        <button id="model546" class="btn btn-default btnNormal btnModel" onclick="selectModel(this,'546', 'DB9');" disabled>
                            DB9
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-4 rowElements divModel">
                        <button id="model547" class="btn btn-default btnNormal btnModel" onclick="selectModel(this,'547', 'DBS');" disabled>
                            DBS
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-4 rowElements divModel">
                        <button id="model548" class="btn btn-default btnNormal btnModel" onclick="selectModel(this,'548', 'Rapide');" disabled>
                            Rapide
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-4 rowElements divModel">
                        <button id="model549" class="btn btn-default btnNormal btnModel" onclick="selectModel(this,'549', 'Vanquish');" disabled>
                            Vanquish
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-4 rowElements divModel">
                        <button id="model550" class="btn btn-default btnNormal btnModel" onclick="selectModel(this,'550', 'Vantage');" disabled>
                            Vantage
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-4 rowElements divModel">
                        <button id="model551" class="btn btn-default btnNormal btnModel" onclick="selectModel(this,'551', 'VIRAGE');" disabled>
                            VIRAGE
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-4 rowElements divModel">
                        <button id="model552" class="btn btn-default btnNormal btnModel" onclick="selectModel(this,'552', 'VOLANTE');" disabled>
                            VOLANTE
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- SELECCION ANTIGUEDAD  -->
        <div class="row">
            <!-- SELECCION DE MES -->
            <div class="col-sm-6 rowMargin opacityContent" id="monthAnchor">
                <h3>
                    <i class="glyphicon glyphicon-menu-right iconArrow"></i>
                    Mes de matriculación:
                </h3>
                <div class="row">
                    <div class="col-xs-6 col-sm-4 col-md-4 rowElements">
                        <button id="mes1" class="btn btn-default btnNormal btnMes" onclick="selectMonth(this, 'Enero');" disabled>
                            <span>Enero</span>
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-4 rowElements">
                        <button id="mes2" class="btn btn-default btnNormal btnMes" onclick="selectMonth(this,'Febrero');" disabled>
                            <span>Febrero</span>
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-4 rowElements">
                        <button id="mes3" class="btn btn-default btnNormal btnMes" onclick="selectMonth(this,'Marzo');" disabled>
                            <span>Marzo</span>
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-4 rowElements">
                        <button id="mes4" class="btn btn-default btnNormal btnMes" onclick="selectMonth(this,'Abril');" disabled>
                            <span>Abril</span>
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-4 rowElements">
                        <button id="mes5" class="btn btn-default btnNormal btnMes" onclick="selectMonth(this,'Mayo');" disabled>
                            <span>Mayo</span>
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-4 rowElements">
                        <button id="mes6" class="btn btn-default btnNormal btnMes" onclick="selectMonth(this,'Junio');" disabled>
                            <span>Junio</span>
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-4 rowElements">
                        <button id="mes7" class="btn btn-default btnNormal btnMes" onclick="selectMonth(this,'Julio');" disabled>
                            <span>Julio</span>
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-4 rowElements">
                        <button id="mes8" class="btn btn-default btnNormal btnMes" onclick="selectMonth(this,'Agosto');" disabled>
                            <span>Agosto</span>
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-4 rowElements">
                        <button id="mes9" class="btn btn-default btnNormal btnMes" onclick="selectMonth(this,'Septiembre');" disabled>
                            <span>Septiembre</span>
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-4 rowElements">
                        <button id="mes10" class="btn btn-default btnNormal btnMes" onclick="selectMonth(this,'Octubre');" disabled>
                            <span>Octubre</span>
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-4 rowElements">
                        <button id="mes11" class="btn btn-default btnNormal btnMes" onclick="selectMonth(this,'Noviembre');" disabled>
                            <span>Noviembre</span>
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-4 rowElements">
                        <button id="mes12" class="btn btn-default btnNormal btnMes" onclick="selectMonth(this,'Diciembre');" disabled>
                            <span>Diciembre</span>
                        </button>
                    </div>
                </div>
            </div>


            <!-- SELECCION DE AÑO -->
            <div class="col-sm-6 rowMargin opacityContent" id="yearAnchor">
                <h3>
                    <i class="glyphicon glyphicon-menu-right iconArrow"></i>
                    Año de matriculación:
                </h3>
                <div class="row" id="yearContainer">
                    <div id="yearLoader" class="se-pre-con"></div>
                    <div class="col-xs-6 col-sm-4 col-md-4 rowElements divYear">
                        <button id="year0" class="btn btn-default btnNormal btnYear" onclick="selectYear(this,'0','2013 <',true);" disabled>
                            <span>2010</span>
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-4 rowElements divYear">
                        <button id="year1" class="btn btn-default btnNormal btnYear" onclick="selectYear(this,'0','2013 <',true);" disabled>
                            <span>2011</span>
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-4 rowElements divYear">
                        <button id="year2" class="btn btn-default btnNormal btnYear" onclick="selectYear(this,'0','2013 <',true);" disabled>
                            <span>2012</span>
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-4 rowElements divYear">
                        <button id="year3" class="btn btn-default btnNormal btnYear" onclick="selectYear(this,'0','2013 <',true);" disabled>
                            <span>2013</span>
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-4 rowElements divYear">
                        <button id="year4" class="btn btn-default btnNormal btnYear" onclick="selectYear(this,'1','2014',true);" disabled>
                            <span>2014</span>
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-4 rowElements divYear">
                        <button id="year5" class="btn btn-default btnNormal btnYear" onclick="selectYear(this,'2','2015',true);" disabled>
                            <span>2015</span>
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-4 rowElements divYear">
                        <button id="year6" class="btn btn-default btnNormal btnYear" onclick="selectYear(this,'3','2016',true);" disabled>
                            <span>2016</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- SELECCION MOTOR Y POTENCIA  -->
        <div class="row">
            <!-- SELECCION DE MOTOR -->
            <div class="col-sm-6 rowMargin opacityContent" id="engineAnchor">
                <h3>
                    <i class="glyphicon glyphicon-menu-right iconArrow"></i>
                    Seleccione el tipo de motor:
                </h3>
                <div class="row" id="engineContainer">
                    <div id="engineLoader" class="se-pre-con"></div>
                    <div class="col-xs-6 col-sm-4 col-md-4 rowElements divEngine">
                        <button id="tm1" class="btn btn-default btnNormal btnEngine" disabled>
                            <span>Diésel</span>
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-4 rowElements divEngine">
                        <button id="tm2" class="btn btn-default btnNormal btnEngine" disabled>
                            <span>Gasolina</span>
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-4 rowElements divEngine">
                        <button id="tm3" class="btn btn-default btnNormal btnEngine" disabled>
                            <span>Híbrido</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- SELECCION DE POTENCIA -->
            <div class="col-sm-6 rowMargin opacityContent" id="powerAnchor">
                <h3>
                    <i class="glyphicon glyphicon-menu-right iconArrow"></i>
                    Seleccione la potencia del motor:
                </h3>
                <div class="row" id="powerContainer">
                    <div id="powerLoader" class="se-pre-con"></div>
                    <div class="col-xs-6 col-sm-4 col-md-3 rowElements divPower">
                        <button id="p1" class="btn btn-default btnNormal btnPower" disabled>
                            90
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-3 rowElements divPower">
                        <button id="p2" class="btn btn-default btnNormal btnPower" disabled>
                            110
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-3 rowElements divPower">
                        <button id="p3" class="btn btn-default btnNormal btnPower" disabled>
                            120
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-4 col-md-3 rowElements divPower">
                        <button id="p4" class="btn btn-default btnNormal btnPower" disabled>
                            222
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- SELECCION KM  -->
        <div class="row rowMargin opacityContent" id="kmAnchor">
            <form id="formKM">
                <div class="col-sm-6">
                    <h3>
                        <i class="glyphicon glyphicon-menu-right iconArrow"></i>
                        Indique el kilometraje de su coche:
                    </h3>
                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-md-8 rowElements">
                            <input id="inputKM" type="number" class="form-control btnKM inputs" placeholder="Kilómetros" disabled>
                        </div>
                        <div class="col-xs-12 col-sm-4 col-md-4 rowElements">
                            <button type="submit" class="btn btnKM btnNormal botonKM" disabled>Continuar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

        <!-- SELECCION VERSIÓN  -->
        <div class="row rowMargin opacityContent" id="versionAnchor">
            <div class="col-sm-12">
                <h3>
                    <i class="glyphicon glyphicon-menu-right iconArrow"></i>
                    Indique la versión de su coche:
                </h3>
                <div class="row" id="versionContainter">
                    <div id="versionLoader" class="se-pre-con"></div>
                    <div class="col-xs-6 col-sm-6 col-md-6 rowElements divVersion">
                        <button id="v1" class="btn btn-default btnNormal btnVersion" disabled>
                            A3 2.0 TDI  Ambiente / Ambition / Attraction Quattro-DSG
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6 rowElements divVersion">
                        <button id="v2" class="btn btn-default btnNormal btnVersion" disabled>
                            A3 Sportback 2.0 TDI Attraction S-T
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6 rowElements divVersion">
                        <button id="v3" class="btn btn-default btnNormal btnVersion" disabled>
                            A4Allroad 2.0 TDI S-T 177
                        </button>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6 rowElements divVersion">
                        <button id="v4" class="btn btn-default btnNormal btnVersion" disabled>
                            A4Allroad 2.0 TDI S-T 177
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- COMPROBAR RESULTADO  -->
        <div class="row rowMargin opacityContent" id="resultAnchor">
            <form id="formResult">
                <div class="col-sm-12">
                    <h3>
                        <i class="glyphicon glyphicon-menu-right iconArrow"></i>
                        Comprobar resultado:
                    </h3>
                    <div class="row rowElements">
                        <div class="col-xs-12 col-sm-6 col-md-6 rowElements">
                            <label for="inputEmail">Indique su email</label>
                            <input id="inputEmail" type="email" class="form-control btnResult inputs" placeholder="Email" disabled>
                        </div>
                    </div>
                    <div class="row rowElements">
                        <div class="col-xs-12 col-sm-6 col-md-6 rowElements">
                            <label for="inputTelefono">Indique su teléfono</label>
                            <input id="inputTelefono" type="number" class="form-control btnResult inputs" placeholder="Teléfono" disabled>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-6">
                            <div class="checkbox">
                                <label>
                                    <input id="checkTerminos" class="btnResult" type="checkbox" disabled> Aceptar <a target="_blank" href="<?php echo $terminos; ?>">términos y condiciones</a>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-6">
                            <button id="botonComprobar" type="submit" class="btn btn-default btnResult" data-loading-text="<div class='se-pre-result'></div> Comprobando" disabled>Comprobar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>


        <!-- RESULTADO FINAL MODAL -->
        <div id="finalResultModal" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="backgroundHeader modal-header">
                        <button type="button" class="close btnSize" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Resultado de la tasación</h4>
                    </div>
                    <div class="modal-body" id="resultContainer">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default btnSize" data-dismiss="modal">Volver</button>
                        <button id="btnNew" type="button" class="btn btn-default" data-dismiss="modal" onclick="newValuation()">Nueva tasación</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- MODAL DE ERROR -->
        <div id="errorModal" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
            <div class="modal-dialog modal-sm" role="document">
                <div id="backgroundBodyError" class="modal-content centerTextModal">
                    <div class="modal-body">
                        <p class="textHeaderError">
                            <span class="glyphicon glyphicon-warning-sign" aria-hidden="true"></span>
                            Error!
                        </p>
                        <p class="textError">Se ha producido un error, inténtelo más tarde o póngase en contacto con el administrador</p>
                        <button type="button" class="btn btn-danger btnSize" data-dismiss="modal">Aceptar</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- MODAL DE INFO -->
        <div id="infoModal" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
            <div class="modal-dialog modal-sm" role="document">
                <div id="backgroundBodyInfo" class="modal-content centerTextModal">
                    <div class="modal-body">
                        <p class="textHeaderInfo">
                            <span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
                            <span id="tituloInfoModal">Tasación incorrecta</span>
                        </p>
                        <p id="textoInfoModal" class="textError">No se ha podido tasar su vehículo con los parámetros introducidos</p>
                        <button id="botonInfo" type="button" class="btn btn-default btnSize" data-dismiss="modal">Aceptar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php
}