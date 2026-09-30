<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'date',
        'images',
        'description',
    ];

    protected $casts = [
        'date'   => 'date:Y-m-d',
        'images' => 'array',
    ];
}