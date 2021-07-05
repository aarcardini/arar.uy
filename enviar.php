<?php

if (isset($_POST['enviar'])) {
    if (!empty($_POST["name"]) && !empty($_POST["email"]) && !empty($_POST["telephone"]) && !empty($_POST["subject"]) && !empty($_POST["message"])) {

        $name = $_POST['name'];
        $email = $_POST['email'];
        $telephone = $_POST['telephone'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];
        $header = "From: alejandro@arar.uy" . "\r\n";
        $header. = "Reply-To: alejandro@arar.uy" . "\r\n";
        $header. = "X-Mailer: PHP/". phoversion();
        $mail = @mail($email,$subject,$message,$header);
        if ($mail) {
            echo 'mensaje enviado correctamente';
        }
    }
}

?>
