<?php 
    $to = "biosept.2016@gmail.com"; // this is your Email address
    // $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $subject = "Form submission";
    $message = $name . " " . $last_name . " wrote the following:" . "\n\n" . $phone;

    $headers = "From: site";
    mail($to,$subject,$message,$headers);
    // echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
?>