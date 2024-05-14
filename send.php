<?php
$to      = 'contact@dianadiamond.dk';
$subject = 'the subject';
$message = $_GET['message'];
$headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?>
