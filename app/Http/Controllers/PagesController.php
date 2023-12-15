<?php
namespace App\Http\Controllers;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Response;
use Illuminate\Http\Request;
use Inertia\Inertia;


class PagesController extends Controller
{
    public function __invoke(Request $request)
    {
        $results = null;
       // $client = new Client( $this->url, 'masterKey');
       // $results = $client->stats();
        //dd($results);
        return Inertia::render('Home');   

    }
    public function home()
    {
        return Inertia::render('Home');   
    }


    public function about(Request $request)
    {
        return Inertia::render('About');   
    }
    public function services(Request $request)
    {
        return Inertia::render('Services');   
    }
    public function projects(Request $request)
    {
        return Inertia::render('Projects');   
    }
    public function contact(Request $request)
    {
        return Inertia::render('Contact');   
    }
   
    public function blogDetails(Request $request)
    {
        return Inertia::render('BlogDetails');   
    }
}