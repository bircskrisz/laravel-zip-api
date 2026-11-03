<?php

namespace App\Http\Controllers;

use App\Models\City;
use Illuminate\Http\Request;

class CityController extends Controller
{
    public function index(Request $request)
    {
        $cities = City::with('county')
            ->when($request->filled('search'), function ($query) use ($request) {
                $search = $request->input('search');

                $query->where(fn ($where) => $where
                    ->where('name', 'like', '%'.$search.'%')
                    ->orWhere('zip_code', 'like', $search.'%'));
            })
            ->when($request->filled('county_id'), fn ($query) => $query->where('county_id', $request->input('county_id')))
            ->orderBy('zip_code')
            ->get();

        return response()->json(['cities' => $cities]);
    }

    public function store(Request $request)
    {
        $city = City::create($this->validated($request));

        return response()->json(['city' => $city->load('county')], 201);
    }

    public function update(Request $request, $id)
    {
        $city = City::findOrFail($id);
        $city->update($this->validated($request));

        return response()->json(['city' => $city->load('county')]);
    }

    public function destroy($id)
    {
        City::findOrFail($id)->delete();

        return response()->json(['message' => 'City deleted']);
    }

    private function validated(Request $request): array
    {
        return $request->validate([
            'name' => 'required|string|max:255',
            'zip_code' => 'required|digits:4',
            'county_id' => 'required|exists:counties,id',
        ]);
    }
}
