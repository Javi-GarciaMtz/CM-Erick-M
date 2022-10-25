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
});

// Rutas de las propiedades
Route::get('/api/property/{id}', [PropertyController::class, 'getPropertyById']);
Route::get('/api/property/{detail}/{id_property}', [PropertyController::class, 'getDetails']);

// Rutas de los usuarios
Route::post('/api/user/save', [UserController::class, 'saveUser']);
Route::get('/api/user/all', [UserController::class, 'getUsers']);
Route::get('/api/user/{id}', [UserController::class, 'getUserById']);