<?php
use Symfony\Component\HttpFoundation\Request;

require_once __DIR__.'/bootstrap.php';

$app->get('/', function () use ($app) {
    
    return $app['twig']->render('home.html.twig', array(
        'portfolios' => getPortfolios($app),
        'contacted'  => false
    ));
});




$app->post('/contact', function(Request $request) use ($app) {

    $name = $request->get('name');
    $email = $request->get('email');
    $message = nl2br($request->get('message'));

    if(filter_var($email, FILTER_VALIDATE_EMAIL) && $message != "" && $name != "") {

        $date = new \DateTime("now");
        $contact = array(
            'name'    => $name,
            'email'   => $email,
            'message' => $message,
            'date'    => $date->format('Y-m-d H:i:s')
        );

        $db = $app['db'];
        $db->insert('contact', $contact);

        if(!$app['debug']){
            $mail = utf8_decode('Nom : '.$name.'<br />E-mail : '.$email.'<br /><br />'.$message);
            mail('pinaudt@gmail.com', 'Spope contact', $mail, 'Content-type: text/html; charset=utf-8');
        }

        if($request->isXmlHttpRequest()){

            return $app->json(array('response'=>true), 201);
        }else{

            return $app['twig']->render('home.html.twig', array(
                'portfolios' => getPortfolios($app),
                'contacted'  => true
            ));
        }
    }else{
        if($request->isXmlHttpRequest()){

            return $app->json(array('response'=>false), 400);
        }else{

            return $app['twig']->render('home.html.twig', array(
                'portfolios' => getPortfolios($app),
                'contacted'  => true,
                'error'      => true
            ));
        }
    }
})->bind('post_contact');



function getPortfolios($app){

    $db = $app['db'];
    $sql = "SELECT * FROM portfolio ORDER BY date DESC";

    return $app['db']->fetchAll($sql);
}

return $app;
