<?php
    require_once 'connect.php';

    $name = $POST['name'];
    $full_name = $POST['full_name'];
    $login = $POST['login'];
    $password = $POST['password'];
    $email = $POST['email'];

    $path = 'uploads/' . time() . $_FILES['avatar']['name'];
    move_uploaded_file($_FILES['avatar']['tmp_name'], '../' . $path);

    mysqli_query($connect, "INSERT INTO `users` (`id`, `name`, `full_name`, `login`, `password`, `avatar`, `email`) VALUES (NULL, '$name', '$full_name', '$login', '$password', '$email', '$path');

    header('Location: ../index11.php');
    ");
?>
