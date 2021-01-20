<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BuyerEnquery extends Model
{
    use HasFactory;

    protected $fillable = [
        'country',
        'quantity',
        'target_price',
        'description',
        'outwear',
        'botoms',
        'fabric',
        'basic_knit',
        'undergarment',
        'design_concept',
        'headwear',
        't_shirt',
        'others',
    ];
}
