<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="css/style5.css">
    <script type="text/javascript" src="js/jquery-1.4.1.min.js"></script>
</head>
<body>
    <div id="main_text"><p>Регистрация</p></div>
    <form action="vendor/signup.php" method="post" enctype="multipart/form-data">   
    <div style="margin-left: 5%; margin-top: 5%;">
        <p id="name">Имя</p>
        <input id="name_input" name="name" value="Введите имя" onclick="clean_input()">
    </div>
    <div style="margin-left: 5%;">
        <p id="name">Фамилия</p>
        <input id="name_input2" name="full_name" value="Введите фамилию" onclick="clean_input2()">
    </div>
    <div style="margin-left: 5%;">
        <p id="name">Аватар</p>
        <div class="input__wrapper">
            <input type="file" name="file" id="input__file" class="input input__file" multiple>
            <label for="input__file" class="input__file-button">
                <span class="input__file-icon-wrapper"><img class="input__file-icon" src="img/upload.svg" alt="Выбрать файл" width="25"></span>
                <span class="input__file-button-text">Выберите файл</span>
            </label>
        </div>
    </div>
    <div style="margin-left: 5%;">
        <p id="name">Логин</p>
        <input name="login" id="name_input" value="Придумайте логин" onclick="clean_input()">
    </div>
    <div style="margin-left: 5%; margin-top: 5%;">
        <p id="name">Пароль</p>
        <input name="password" id="name_input2_2" value="Придумайте пароль" onclick="clean_input2_2()">
    </div>
    <div style="margin-left: 5%; margin-top: 5%;">
        <p id="name">Электронная почта</p>
        <input name="email" id="name_input3" value="Введите почту" onclick="clean_input3()">
    </div>
    <div style="margin-top: 23%; margin-left: 15%; display: flex; flex-direction: row;">
        <p id="enter_with_help">Войти с помощью</p>
        <button><img src="https://i.ibb.co/3c7VFsp/free-png-1.png"></button>
        <button><img src="https://i.ibb.co/GnSrr12/2020-09-23-sber-logotype-1.png"></button>
    </div>
    <button id="but_reg" onclick="Ohran5()"><p>Регистрация</p></button>
    <p id="license">Принимаю условия пользовательского<br>соглашения и политику конфиденциальности</p>
    </form>
    
    <script src="js/script.js"></script>
</body>
</html>