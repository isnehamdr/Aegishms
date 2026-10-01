<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class ActivityLog extends Model
{
    // Uses your existing "logs" table
    protected $table = 'logs';

    protected $fillable = ['name', 'ip_address', 'title'];

    // Never lets a logging problem break the real action
    public static function record(string $title): void
    {
        try {
            static::create([
                'name'       => Auth::check() ? Auth::user()->name : 'Guest',
                'ip_address' => request()->ip() ?? 'console',
                'title'      => $title,
            ]);
        } catch (\Throwable $e) {
            report($e); // see storage/logs/laravel.log
        }
    }
}