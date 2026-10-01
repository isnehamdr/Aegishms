<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('careers', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->unsignedInteger('openings')->default(1);
            $table->json('responsibilities')->nullable();
            $table->string('location')->default('Nepal');
            $table->string('type')->default('Full-time');
            $table->date('date_posted')->nullable();
            $table->date('valid_through')->nullable();
            $table->string('employment_type')->nullable();
            $table->string('status')->default('active');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('careers');
    }
};