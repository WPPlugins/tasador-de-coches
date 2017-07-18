=== tasador-de-coches ===
Contributors: staiapps
Donate link: http://staiapps.com/es/
Tags: tasador de coches, tasador de vehículos, tasar coches
Requires at least: 4.0
Tested up to: 4.7
Stable tag: 1.4
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Formulario de tasación que podrás añadir a tu página de WordPress, y poder ofrecer a tus usuarios realizar tasaciones de vehículos.

== Description ==

Nuestro Tasador de Coches está dirigido tanto a establecimientos que se dedican a la compra venta de vehículos de ocasión como a usuarios que están interesados en adquirir coches de segunda mano y quieran obtener una tasación real y ajustada. La solicitud de tasación realizada por el usuario devuelve un valor en función de los criterios de tasación adecuados al mercado.

Obtener información de nuestra base de datos completamente actualizada:

Con el siguiente servicio API, se obtiene la información necesaria que irá completando el formulario de tasación, para finalmente obtener la tasación de su vehículo:

http://pre.solucionesaiapps.com/web/api/cars/

Descripción de las diferentes llamadas:

- **Marcas**: obtener un listado de todas las marcas disponibles.
- **Modelos**: obtener los modelos a partir de la marca seleccionada.
- **Mes**: obtener los diferentes meses de matriculación del vehículo.
- **Año**: obtener los diferentes años de matriculación del vehículo.
- **Motor**: obtener los diferentes tipos motor del vehículo.
- **Potencias**: obtener las diferentes potencias de motor del vehiculo.
- **Versiones**: finalmente según todos los parámetros seleccionados, se obtienen las diferentes versiones.

Con el siguiente servicio, se obtienen las imágenes que hace uso el formulario, para ayudar visualmente a la hora de seleccionar la marca de un vehículo:

http://pre.solucionesaiapps.com/web/


**Condiciones de uso / Política de privacidad**: http://staiapps.com/es/condiciones-uso-politica-privacidad-tasador/

== Installation ==

**Importante!!!** - Antes de proceder a instalar, asegúrate de que dispones de tu **api_key gratuita** para poder acceder a los datos de nuestro servidor, para ello contacta con nuestro equipo: info@staiapps.com

1. Añadir el plugin, ya sea desde el buscador de plugins de wordpress, cómo desde el archivo .zip descargado
2. Activar el plugin
3. Acceder a la página dónde se quiera insertar el formulario, y editamos la página.
4. Añadimos al editor la siguiente línea:

    [tasador_coches api_key="123456789012345678901234567890123456789" email="email@ejemplo.com" terminos="http://terminos-condiciones"]

    - Descripción de parámetros

        - **api_key**: clave que te permite acceder a nuestro backend. Solicita tu clave contactando con nuestro equipo: info@staiapps.com

        - **email**: email dónde llegarán las tasaciones que realizan los usuarios.

        - **términos**: debes indicar la ruta de página de tu web donde se deben mostrar los términos y condiciones de uso del tasador.

== Frequently Asked Questions ==

= ¿Cómo puedo obtener un API KEY? =

Para obtener un API KEY, contácte con nuestro equipo: info@staiapps.com

= ¿Dónde puedo obtener más información? =

Puede consultar más información detallada desde el siguiente enlace:

http://staiapps.com/app/tasador-de-coches/

= ¿Cómo puedo contactar con el equipo de desarrollo? =

Puede enviarnos cualquier duda o comentario sin ningún compromiso a la siguiente dirección: info@staiapps.com

= ¿Utiliza el plugin información externa? =

Si, nuestro plugin dispone de información actualizada desde nuestro servidor para disponer de los criterios de tasación adecuados al mercado.

== Screenshots ==

1. screenshot-1.png
2. screenshot-2.png
3. screenshot-3.png
4. screenshot-4.png

== Changelog ==

= 1.1 =

* Añadir la conexión con el backend.

= 1.2 =

* Solucionar problema de envío del valor de tasación al servidor.

== Upgrade Notice ==

= 1.1 =

* Añadir la conexión con el backend.

= 1.2 =

* Solucionar problema de envío del valor de tasación al servidor.

= 1.4 =

* Corregir errores de integración con otros plugins.
* Corrección en la vista de widget.