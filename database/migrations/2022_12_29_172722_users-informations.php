<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UsersInformations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usersInfo',function (Blueprint $table){
            $table->id();
            $table->string('firstname');
            $table->string('lastname');
            $table->string('email');
            $table->integer('phonenbr');
            $table->date('dateOfBirth');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usersInfo');
    }
}
