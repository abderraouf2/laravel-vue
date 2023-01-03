<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class addUsers extends Model
{
    protected $fillable = [
        'firstname',
        'lastname',
        'email',
        'phonenbr',
        'dateOfBirth'
    ];
}
