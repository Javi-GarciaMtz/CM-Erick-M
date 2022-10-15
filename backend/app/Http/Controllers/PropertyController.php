<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PropertyController extends Controller
{

    public function get_property_by_id($id) {
        return "<h1>Regrese la propiedad con id: ".$id." y esta chidori!</h1>";
    }

}
