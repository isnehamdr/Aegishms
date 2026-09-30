<?php

use App\Models\User;

test('authenticated users can create users from the users endpoint', function () {
    $this->actingAs(User::factory()->create());

    $response = $this->postJson(route('users.store'), [
        'name' => 'Created User',
        'email' => 'created@example.com',
        'password' => 'password',
    ]);

    $response
        ->assertCreated()
        ->assertJsonPath('user.name', 'Created User')
        ->assertJsonPath('user.email', 'created@example.com');

    $this->assertDatabaseHas('users', [
        'name' => 'Created User',
        'email' => 'created@example.com',
    ]);

    $this->assertDatabaseHas('logs', [
        'title' => 'User Created: Created User',
    ]);
});
