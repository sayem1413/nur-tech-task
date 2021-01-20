<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\BuyerEnqueryStore;
use App\Models\BuyerEnquery;

class BuyerEnqueryController extends Controller
{
    public function index(){
        $response = [];
        $status = 200;
        try {
            $buyerEnqueries = BuyerEnquery::all();

            $response = [
                'buyerEnqueries' => $buyerEnqueries,
                'success' => true
            ];
        } catch(\Exception $e){
            if(config('app.env') != 'production')
                $response['getTrace'] = $e->getTrace();
            $response['errors'] = $e->getMessage();
            $status = 500;
        }
        return response()->json($response, $status);
    }

    public function storeBuyerEnquery( BuyerEnqueryStore $request )
    {
        $response = [];
        $status = 200;
        try {
            $tagsArr = [
                $request->outwear,
                $request->botoms,
                $request->fabric,
                $request->basic_knit,
                $request->undergarment,
                $request->design_concept,
                $request->headwear,
                $request->t_shirt,
                $request->others,
            ];
            if( !in_array( 1, $tagsArr ) ){
                $response["success"] = false;
                $response["message"] = "Min 1 (One) tag needed";
                $status = 404;
                return response()->json($response, $status);
            }
            $buyerEnquery = BuyerEnquery::create([
                'country'        => $request->country,
                'quantity'       => $request->quantity,
                'target_price'   => $request->target_price,
                'description'    => $request->description,

                'outwear'        => $request->outwear,
                'botoms'         => $request->botoms,
                'fabric'         => $request->fabric,
                'basic_knit'     => $request->basic_knit,
                'undergarment'   => $request->undergarment,
                'design_concept' => $request->design_concept,
                'headwear'       => $request->headwear,
                't_shirt'        => $request->t_shirt,
                'others'         => $request->others,
            ]);

            $response = [
                'buyerEnquery' => $buyerEnquery,
                'success' => true
            ];
        } catch(\Exception $e){
            if(config('app.env') != 'production')
                $response['getTrace'] = $e->getTrace();
            $response['errors'] = $e->getMessage();
            $status = 500;
        }
        return response()->json($response, $status);
    }
}
