<?php

namespace App\Http\Controllers;

use App\Models\County;
use Illuminate\Http\Request;

class CountyController extends Controller
{
    public function index()
    {
        return response()->json(['counties' => County::with('cities')->orderBy('name')->get()]);
    }

    public function store(Request $request)
    {
        $county = County::create($this->validated($request));

        return response()->json(['county' => $county], 201);
    }

    public function update(Request $request, $id)
    {
        $county = County::findOrFail($id);
        $county->update($this->validated($request));

        return response()->json(['county' => $county]);
    }

    public function destroy($id)
    {
        County::findOrFail($id)->delete();

        return response()->json(['message' => 'County deleted']);
    }

    private function validated(Request $request): array
    {
        return $request->validate([
            'name' => 'required|string|max:255',
        ]);
    }
}
