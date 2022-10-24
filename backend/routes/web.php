<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PropertyController;
use App\Http\Controllers\UserController;

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
    return view('welcome');
    // return '<h1>Hola mundo, desde Ciudad Maderas!</h1>';
});

// Rutas de las propiedades
Route::get('/api/property/{id}', [PropertyController::class, 'get_property_by_id']);
Route::get('/api/{detail}/{id_property}', [PropertyController::class, 'get_details']);

// Rutas de los usuarios
Route::post('/api/save/user', [UserController::class, 'save_user']);
Route::get('/api/users', [UserController::class, 'getUsers']);
Route::get('/api/user/{id}', [UserController::class, 'get_user_by_id']);

/* RUTAS SIN GUIONES; UTILIZAR PURO / (SLASH) */