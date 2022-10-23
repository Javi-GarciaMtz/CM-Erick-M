<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller {

    public function save_user(Request $request) {
        $json = $request->input('json', null);
        $params_array = json_decode($json, true);

        // Validar datos
        $validate = \Validator::make($params_array, [
            'name'      =>  'required|alpha',
            'surname'   =>  'alpha',
            'email'     =>  'required|email',
            'phone'     =>  'required',
        ]);

        if($validate->fails()) {
            $data = array(
                'status'    =>  'error',
                'code'  =>  404,
                'message'   =>  "The user hasn't been created",
                'errors'    =>  $validate->errors()
            );

        } else {
            try {
                $query_result = DB::insert('INSERT INTO users (id, name, surname, email, phone) values (?, ?, ?, ?, ?)', [null, $params_array['name'], $params_array['surname'], $params_array['email'], $params_array['phone']]);
                $data = array(
                    'code' => 200,
                    'status' => 'Success',
                    'msg' => 'Usuario almacenado correctamente.'
                );

            } catch (\Throwable $th) {
                $data = array(
                    'code' => 400,
                    'status' => 'Error',
                    'msg' => "Error al conectarse a la base de datos!"
                );

            }

        }

        return response()->json($data, $data['code']);

    }

    public function get_users() {
        try {
            $users = DB::table('users')->get();
            $data = array(
                'code' => 200,
                'status' => 'Success',
                'users' => $users
            );

        } catch (\Throwable $th) {
            $data = array(
                'code' => 400,
                'status' => 'Error',
                'msg' => "Error al conectarse a la base de datos!"
            );

        }

        return response()->json($data, $data['code']);

    }

    public function get_user_by_id($id) {
        try {
            $user = DB::table('users')->where('id', $id)->get();

            if(isset($user[0])) {
                $data = array(
                    'code' => 200,
                    'status' => 'Success',
                    'user' => $user[0]
                );

            } else {
                $data = array(
                    'code' => 404,
                    'status' => 'Error',
                    'msg' => "No existe el usuario con id: ".$id
                );

            }

        } catch (\Throwable $th) {
            $data = array(
                'code' => 400,
                'status' => 'Error',
                'msg' => "Error al conectarse a la base de datos!"
            );

        }

        return response()->json($data, $data['code']);
    }

}
