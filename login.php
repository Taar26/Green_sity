<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="css/style5.css">
    <script type="text/javascript" src="js/jquery-1.4.1.min.js"></script>
</head>
<body style="height: 100%;">
<div id="main_text">
    <p>Вход</p>
</div>
    <form action="vendor/signup.php" method="post" enctype="multipart/form-data">   
    <div style="margin-left: 5%; margin-top: 5%;">
        <p id="name">Логин</p>
        <input id="name_input" name="login" value="Введите логин" onclick="clean_input()">
    </div>
    <div style="margin-left: 5%;">
        <p id="name">Пароль</p>
        <input id="name_input2" name="password" value="Введите пароль" onclick="clean_input2()">
    </div>
    <button style="margin-bottom: 60px;" id="but_reg" onclick="Ohran5()"><p>Регистрация</p></button>
    </form>
    
    <script src="js/script.js"></script>
</body>
</html>