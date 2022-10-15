<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PropertyController extends Controller {

    public function get_property_by_id($id) {
        return "<h1>Regrese la propiedad con id: ".$id." y esta chidori!</h1>";
    }

    public function get_location($id_property) {
        return "<h1>Regrese la localizacion de la propiedad con id: ".$id_property." y esta chidori!</h1>";
    }

    public function get_virtual_tour($id_property) {
        return "<h1>Regrese el recorrido virtual de la propiedad con id: ".$id_property." y esta chidori!</h1>";
    }

    public function get_surfaces_amenities($id_property) {
        return "<h1>Regrese las superficies y amenidades de la propiedad con id: ".$id_property." y esta chidori!</h1>";
    }

    public function get_financing($id_property) {
        return "<h1>Regrese el financiamiento de la propiedad con id: ".$id_property." y esta chidori!</h1>";
    }

    public function get_delivery($id_property) {
        return "<h1>Regrese la entrega de la propiedad con id: ".$id_property." y esta chidori!</h1>";
    }

    public function get_mater_plan($id_property) {
        return "<h1>Regrese el master plan de la propiedad con id: ".$id_property." y esta chidori!</h1>";
    }


}
