<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Career extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'openings',
        'responsibilities',
        'location',
        'type',
        'date_posted',
        'valid_through',
        'employment_type',
        'status',
    ];

    protected $casts = [
        'responsibilities' => 'array',
        'date_posted'      => 'date:Y-m-d',
        'valid_through'    => 'date:Y-m-d',
        'openings'         => 'integer',
    ];
}