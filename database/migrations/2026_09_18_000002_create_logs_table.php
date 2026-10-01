<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

// One migration for every case:
// - logs table missing        -> creates it (with the created_at index)
// - logs table already exists -> only adds the index (skips if it already exists)
return new class extends Migration
{
    public function up(): void
    {
        if (! Schema::hasTable('logs')) {
            Schema::create('logs', function (Blueprint $table) {
                $table->id();
                $table->string('name');
                $table->string('ip_address');
                $table->string('title');
                $table->timestamps();
                $table->index('created_at');
            });

            return;
        }

        try {
            Schema::table('logs', function (Blueprint $table) {
                $table->index('created_at');
            });
        } catch (\Throwable $e) {
            // index already exists, nothing to do
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('logs');
    }
};