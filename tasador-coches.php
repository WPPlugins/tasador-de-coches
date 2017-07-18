<?php
/*
Plugin Name: Tasador de coches
Plugin URI: http://staiapps.com/app/tasador-de-coches/
Description: Plugin para añadir un formulario para tasar coches
Version: 1.4
Author: Juan Carlos Rico Ochoa
Author URI: http://www.staiapps.com/juan-carlos-rico
License: GPL2
*/

/*  Copyright 2016 STAIAPPS  (email : info@staiapps.com)

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License, version 2, as
    published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

class tasador_coches_plugin extends WP_Widget {

    // constructor
    function __construct() {
        parent::__construct(false, $name = __('Tasador de coches', 'wp_widget_plugin') );
    }

    // widget form creation
    function form($instance) {
        // Check values
        if( $instance) {
            $apikey = esc_attr($instance['apikey']);
            $email = esc_attr($instance['email']);
            $terminos = esc_attr($instance['terminos']);
        } else {
            $apikey = '';
            $email = '';
            $terminos = '';
        }
        ?>


        <p>
            <label for="<?php echo $this->get_field_id('apikey'); ?>"><?php _e('API KEY:', 'wp_widget_plugin'); ?></label>
            <input class="widefat" id="<?php echo $this->get_field_id('apikey'); ?>" name="<?php echo $this->get_field_name('apikey'); ?>" type="text" value="<?php echo $apikey; ?>" />
        </p>

        <p>
            <label for="<?php echo $this->get_field_id('email'); ?>"><?php _e('Email:', 'wp_widget_plugin'); ?></label>
            <input class="widefat" id="<?php echo $this->get_field_id('email'); ?>" name="<?php echo $this->get_field_name('email'); ?>" type="text" value="<?php echo $email; ?>" />
        </p>

        <p>
            <label for="<?php echo $this->get_field_id('terminos'); ?>"><?php _e('Términos:', 'wp_widget_plugin'); ?></label>
            <input class="widefat" id="<?php echo $this->get_field_id('terminos'); ?>" name="<?php echo $this->get_field_name('terminos'); ?>" type="text" value="<?php echo $terminos; ?>" />
        </p>


        <?php
    }

    // widget update
    function update($new_instance, $old_instance) {
        $instance = $old_instance;
        // Fields
        $instance['apikey'] = strip_tags($new_instance['apikey']);
        $instance['email'] = strip_tags($new_instance['email']);
        $instance['terminos'] = strip_tags($new_instance['terminos']);

        return $instance;
    }

    // widget display
    function widget($args, $instance) {
        extract( $args );
        $apikey = $instance['apikey'];
        $email = $instance['email'];
        $terminos = $instance['terminos'];

        ob_start();
        getTasadorForm($apikey,$email,$terminos);
        $output = ob_get_contents();
        ob_end_clean();


        echo $output;

    }
}

include_once "inc/form.php";

// register widget
add_action('widgets_init', create_function('', 'return register_widget("tasador_coches_plugin");'));


function tasador_coches_enqueue(){
    //register styles and scripts
    wp_enqueue_style( 'bootstrap-css-local', plugin_dir_url(__FILE__) . 'css/bootstrap.min.css');

    wp_enqueue_style( 'tasador-style', plugin_dir_url(__FILE__) . 'css/style.css', array( 'bootstrap-css-local' ) );

    wp_enqueue_script( 'bootstrap-js-local', plugin_dir_url(__FILE__) . 'js/bootstrap.min.js', array('jquery'), NULL, true);

    wp_enqueue_script( 'tasador-functions', plugin_dir_url(__FILE__) . 'js/functions.js', array ( 'bootstrap-js-local' ), 1.1, true);
    wp_enqueue_script( 'tasador-numeral', plugin_dir_url(__FILE__) . 'js/numeral.min.js', 1.1, true);
    wp_enqueue_script( 'tasador-script', plugin_dir_url(__FILE__) . 'js/scripts.js', array ( 'bootstrap-js-local', 'tasador-functions' ), 1.1, true);
}
add_action( 'wp_enqueue_scripts', 'tasador_coches_enqueue' );


function tasador_shortcode($atts = array()){
    ob_start();
    getTasadorForm(esc_attr($atts['api_key']), esc_attr($atts['email']), esc_attr($atts['terminos']));
    $output = ob_get_contents();
    ob_end_clean();
    return $output;
}
add_shortcode( 'tasador_coches', 'tasador_shortcode' );


