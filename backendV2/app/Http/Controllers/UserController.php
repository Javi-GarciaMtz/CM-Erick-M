<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{

    public function saveUser(Request $request) {
        $json = $request->input('json', null);
        $params_array = json_decode($json, true);

        // Validar datos
        $validate = \Validator::make($params_array, [
            'name'      =>  'required|regex:/^[\pL\s\-]+$/u',
            'surname'   =>  'regex:/^[\pL\s\-]+$/u',
            'email'     =>  'required|email',
            'phone'     =>  'required',
        ]);

        if($validate->fails()) {
            $data = array(
                'status'    =>  'error',
                'code'  =>  400,
                'message'   =>  "El usuario no ha sido creado",
                'errors'    =>  $validate->errors()
            );

        } else {
            try {
                $query_result = DB::insert('INSERT INTO users (id, name, surname, email, phone) values (?, ?, ?, ?, ?)', [null, $params_array['name'], $params_array['surname'], $params_array['email'], $params_array['phone']]);
                $data = array(
                    'code' => 200,
                    'status' => 'success',
                    'msg' => 'Usuario almacenado correctamente.'
                );

            } catch (\Throwable $th) {
                $data = array(
                    'code' => 400,
                    'status' => 'error',
                    'msg' => "Error al conectarse a la base de datos!"
                );

            }
        }

        return response()->json($data, $data['code']);
    }

    public function getUsers() {
        try {
            $users = DB::table('users')->get();
            $data = array(
                'code' => 200,
                'status' => 'success',
                'users' => $users
            );

        } catch (\Throwable $th) {
            $data = array(
                'code' => 400,
                'status' => 'error',
                'msg' => "Error al conectarse a la base de datos!"
            );

        }

        return response()->json($data, $data['code']);
    }

    public function getUserById($id) {
        try {
            $user = DB::table('users')->where('id', $id)->get();

            if(isset($user[0])) {
                $data = array(
                    'code' => 200,
                    'status' => 'success',
                    'user' => $user[0]
                );

            } else {
                $data = array(
                    'code' => 404,
                    'status' => 'error',
                    'msg' => "No existe el usuario con id: ".$id
                );

            }

        } catch (\Throwable $th) {
            $data = array(
                'code' => 400,
                'status' => 'error',
                'msg' => "Error al conectarse a la base de datos!"
            );

        }

        return response()->json($data, $data['code']);
    }

}
