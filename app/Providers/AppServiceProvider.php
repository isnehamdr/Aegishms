<?php

namespace App\Providers;

use App\Models\ActivityLog;
use App\Models\Blog;
use App\Models\Career;
use App\Models\Event as EventModel;   // aliased to avoid the clash
use App\Observers\ActivityObserver;
use Illuminate\Auth\Events\Login;
use Illuminate\Auth\Events\Logout;
use Illuminate\Support\Facades\Event;  // the facade keeps the name Event
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        //
    }

    public function boot(): void
    {
        Event::listen(Login::class,  fn () => ActivityLog::record('Logged in'));
        Event::listen(Logout::class, fn () => ActivityLog::record('Logged out'));

        Blog::observe(ActivityObserver::class);
        EventModel::observe(ActivityObserver::class);
        Career::observe(ActivityObserver::class);

        Vite::prefetch(concurrency: 3);
    }
}