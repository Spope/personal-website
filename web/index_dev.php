<?php
error_reporting(E_ALL);
define('DEBUG', true);

$app = require(__DIR__.'/../app/app.php');
$app->run();
