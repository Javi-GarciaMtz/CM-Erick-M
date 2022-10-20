<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PropertyController extends Controller {

    public function get_property_by_id($id) {
        try {
            $property = DB::table('properties')->where('id', $id)->get();

            if(isset($property[0])) {
                $data = array(
                    'code' => 200,
                    'status' => 'Success',
                    'property' => $property[0]
                );

            } else {
                $data = array(
                    'code' => 404,
                    'status' => 'Error',
                    'msg' => "No existe la propiedad con id: ".$id
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

    public function get_details($detail, $id_property) {

        try {
            $detail_db = DB::table($detail)->where('property_id', $id_property)->get();

            if(isset($detail_db[0]))  {
                $data = array(
                    'code' => 200,
                    'status' => 'Success',
                    'detail' => $detail_db[0]
                );

            } else {
                $data = array(
                    'code' => 404,
                    'status' => 'Error',
                    'msg' => "No existe el detalle: ".$detail." con id de propiedad: ".$id_property
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
