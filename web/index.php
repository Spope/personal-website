<?php
error_reporting(E_ALL);
require_once __DIR__.'/../vendor/autoload.php';

$app = new Silex\Application();

 $app['debug'] = true;

$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/../views',
));

$app->get('/', function () use ($app) {
    return $app['twig']->render('home.html.twig', array(
        'name' => '',
    ));
});

$app->run();




/*
$portfolios = array(
    0 => array(
        'title'      => 'Realisation',
        'img'        => 'screen.png',
        'description' => 'Ipsum maxime non repudiandae reprehenderit placeat molestiae nulla consectetur veritatis minus. Aut officia accusantium facilis totam repellendus iste. Vero culpa ut quisquam blanditiis quam. Nesciunt sint voluptate consectetur nobis quod.',
        'url'        => 'http://www.spope.fr'
    ),
    1 => array(
        'title'      => 'Realisation',
        'img'        => 'screen.png',
        'description' => 'Ipsum maxime non repudiandae reprehenderit placeat molestiae nulla consectetur veritatis minus. Aut officia accusantium facilis totam repellendus iste. Vero culpa ut quisquam blanditiis quam. Nesciunt sint voluptate consectetur nobis quod.',
        'url'        => 'http://www.spope.fr'
    ),
    2 => array(
        'title'      => 'Realisation',
        'img'        => 'screen.png',
        'description' => 'Ipsum maxime non repudiandae reprehenderit placeat molestiae nulla consectetur veritatis minus. Aut officia accusantium facilis totam repellendus iste. Vero culpa ut quisquam blanditiis quam. Nesciunt sint voluptate consectetur nobis quod.',
        'url'        => 'http://www.spope.fr'
    ),
    3 => array(
        'title'      => 'Realisation',
        'img'        => 'screen.png',
        'description' => 'Ipsum maxime non repudiandae reprehenderit placeat molestiae nulla consectetur veritatis minus. Aut officia accusantium facilis totam repellendus iste. Vero culpa ut quisquam blanditiis quam. Nesciunt sint voluptate consectetur nobis quod.',
        'url'        => 'http://www.spope.fr'
    ),
    4 => array(
        'title'      => 'Realisation',
        'img'        => 'screen.png',
        'description' => 'Ipsum maxime non repudiandae reprehenderit placeat molestiae nulla consectetur veritatis minus. Aut officia accusantium facilis totam repellendus iste. Vero culpa ut quisquam blanditiis quam. Nesciunt sint voluptate consectetur nobis quod.',
        'url'        => 'http://www.spope.fr'
    ),
    5 => array(
        'title'      => 'Realisation',
        'img'        => 'screen.png',
        'description' => 'Ipsum maxime non repudiandae reprehenderit placeat molestiae nulla consectetur veritatis minus. Aut officia accusantium facilis totam repellendus iste. Vero culpa ut quisquam blanditiis quam. Nesciunt sint voluptate consectetur nobis quod.',
        'url'        => 'http://www.spope.fr'
    ),
    6 => array(
        'title'      => 'Realisation',
        'img'        => 'screen.png',
        'description' => 'Ipsum maxime non repudiandae reprehenderit placeat molestiae nulla consectetur veritatis minus. Aut officia accusantium facilis totam repellendus iste. Vero culpa ut quisquam blanditiis quam. Nesciunt sint voluptate consectetur nobis quod.',
        'url'        => 'http://www.spope.fr'
    ),
    7 => array(
        'title'      => 'Realisation',
        'img'        => 'screen.png',
        'description' => 'Ipsum maxime non repudiandae reprehenderit placeat molestiae nulla consectetur veritatis minus. Aut officia accusantium facilis totam repellendus iste. Vero culpa ut quisquam blanditiis quam. Nesciunt sint voluptate consectetur nobis quod.',
        'url'        => 'http://www.spope.fr'
    )
);
*/
?>
