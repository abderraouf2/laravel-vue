<?php

namespace App\Http\Controllers;

use App\addUsers;
use Illuminate\Http\Request;

class AddUsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        dd($request->all);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\addUsers  $addUsers
     * @return \Illuminate\Http\Response
     */
    public function show(addUsers $addUsers)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\addUsers  $addUsers
     * @return \Illuminate\Http\Response
     */
    public function edit(addUsers $addUsers)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\addUsers  $addUsers
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, addUsers $addUsers)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\addUsers  $addUsers
     * @return \Illuminate\Http\Response
     */
    public function destroy(addUsers $addUsers)
    {
        //
    }
}
