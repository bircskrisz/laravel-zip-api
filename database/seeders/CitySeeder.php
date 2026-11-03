<?php

namespace Database\Seeders;

use App\Models\City;
use App\Models\County;
use Illuminate\Database\Seeder;

class CitySeeder extends Seeder
{
    public function run(): void
    {
        $handle = fopen(database_path('data/iranyitoszamok.csv'), 'r');
        fgetcsv($handle, 0, ';');

        while (($row = fgetcsv($handle, 0, ';')) !== false) {
            [$zipCode, $name, $countyName] = $row;

            City::firstOrCreate([
                'county_id' => County::firstOrCreate(['name' => $countyName])->id,
                'name' => $name,
                'zip_code' => $zipCode,
            ]);
        }

        fclose($handle);
    }
}
