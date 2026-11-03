<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::firstOrCreate(
            ['email' => 'user@example.com'],
            ['name' => 'user', 'password' => '12345678'],
        );

        $this->call(CitySeeder::class);
    }
}
