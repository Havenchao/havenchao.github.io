<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if(!empty($_POST['contactname']) && !empty($_POST['contactemail']) && !empty($_POST['contactmessage'])) {
	$to = 'service@cgpmanagement.net'; // Replace with your email.
	$body = "Name: {$_POST['contactname']}\n\nEmail: {$_POST['contactemail']}\n\nWebsite: {$_POST['contactwebsite']}\n\nMessage: {$_POST['contactmessage']}";
	mail($to, "Contact Form Submission", $body, "From: {$_POST['contactemail']}");
    }
}
?>