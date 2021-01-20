<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Country;

class CountryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $countryArr = [
            'Bangladesh',
            'USA',
            'UK'
        ];

        foreach( $countryArr as $key=>$value ){
            Country::create([
                'name' => $value,
            ]);
		}
    }
}
