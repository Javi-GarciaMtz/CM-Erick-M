<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller {

    public function save_user() {
        return "<h1>Guardo un usuario</h1>";
    }

    public function get_users() {
        return "<h1>Regreso todos los usuarios</h1>";
    }


}
