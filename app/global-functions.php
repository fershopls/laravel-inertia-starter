<?php

if (!function_exists('to_route')) {
    function to_route($route, $params = [])
    {
        return redirect()->route($route, $params);
    }
}
