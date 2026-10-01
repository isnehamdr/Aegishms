<?php

namespace App\Observers;

use App\Models\ActivityLog;
use Illuminate\Database\Eloquent\Model;

class ActivityObserver
{
    private function describe(Model $model): string
    {
        $label = class_basename($model);
        $name  = $model->title ?? $model->name ?? '#' . $model->getKey();

        return "{$label}: {$name}";
    }

    public function created(Model $model): void
    {
        ActivityLog::record('Created ' . $this->describe($model));
    }

    public function updated(Model $model): void
    {
        ActivityLog::record('Updated ' . $this->describe($model));
    }

    public function deleted(Model $model): void
    {
        ActivityLog::record('Deleted ' . $this->describe($model));
    }

    // Your BlogController uses forceDelete(), which fires this event
    public function forceDeleted(Model $model): void
    {
        ActivityLog::record('Deleted ' . $this->describe($model));
    }
}