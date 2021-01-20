<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBuyerEnqueriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('buyer_enqueries', function (Blueprint $table) {
            $table->id();
            $table->string('country', 200);
            $table->integer('quantity')->nullable();
            $table->float('target_price', 10, 2)->nullable();
            $table->text('description')->nullable();
            $table->boolean('outwear')->default(0);
            $table->boolean('botoms')->default(0);
            $table->boolean('fabric')->default(0);
            $table->boolean('basic_knit')->default(0);
            $table->boolean('undergarment')->default(0);
            $table->boolean('design_concept')->default(0);
            $table->boolean('headwear')->default(0);
            $table->boolean('t_shirt')->default(0);
            $table->boolean('others')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('buyer_enqueries');
    }
}
