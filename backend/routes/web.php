<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PropertyController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    // return view('welcome');
    return '<h1>Hola mundo desde ciudad maderas</h1>';
});

Route::get('/api/property/{id}', [PropertyController::class, 'get_property_by_id']);

Route::get('/api/location/{id_property}', [PropertyController::class, 'get_location']);

Route::get('/api/virtual_tour/{id_property}', [PropertyController::class, 'get_virtual_tour']);

Route::get('/api/surfaces_amenities/{id_property}', [PropertyController::class, 'get_surfaces_amenities']);

Route::get('/api/financing/{id_property}', [PropertyController::class, 'get_financing']);

Route::get('/api/delivery/{id_property}', [PropertyController::class, 'get_delivery']);

Route::get('/api/mater_plan/{id_property}', [PropertyController::class, 'get_mater_plan']);


// Route::post('/api/save_user', [::class, '']);
// Route::get('/api/get_users', [::class, '']);