<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;

class Blog extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'title', 'slug', 'excerpt', 'content', 'image', 'category',
        'author', 'author_url', 'date', 'read_time', 'tags', 'status',
    ];

    protected $casts = [
        'date'   => 'date:Y-m-d',
        'tags'   => 'array',
        'status' => 'boolean',
    ];

    protected $appends = ['image_url'];

   public function getImageUrlAttribute(): ?string
{
    return $this->image ? '/storage/' . $this->image : null;
}
}