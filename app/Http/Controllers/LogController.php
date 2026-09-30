<?php

namespace App\Http\Controllers;

use App\Models\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LogController extends Controller
{
    /**
     * Display a listing of the logs.
     */
   public function index()
    {
        // Fetch all logs, latest first
        $logs = Log::latest()->get();

        return response()->json([
            'success' => true,
            'data' => $logs,
        ]);
    }
}