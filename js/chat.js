send.onclick = function() {
    let message = document.getElementById('message').value;
    let Data = new Date();
    chat.insertAdjacentHTML('beforeend', '<div class="me-message"><div class="me-text-message"><p id="out-message" class="me-message">'+ message +'</p><div class="flex-time"><p class="time">'+ Data.getHours() + ":" + Data.getMinutes() +'</p></div></div></div>');

    let techmessage = "";
    function testmess(){
        switch(message){
            case "Привет":
                techmessage = "Здраствуйте, чем я могу вам помочь? Вы можете воспользоваться командами 'Проект', 'Деревья', 'Разработчики', 'Что делать?', 'С чего начать?'";
                break;
            case "Здравствуй":
                techmessage = "Здраствуйте, чем я могу вам помочь? Вы можете воспользоваться командами 'Проект', 'Деревья', 'Разработчики', 'Что делать?' 'С чего начать?'";
                break;
            case "Охаё":
                techmessage = "Здраствуйте, чем я могу вам помочь? Вы можете воспользоваться командами 'Проект', 'Деревья', 'Разработчики', 'Что делать?' 'С чего начать?'";
                break;
            case "Хелло":
                techmessage = "Здраствуйте, чем я могу вам помочь? Вы можете воспользоваться командами 'Проект', 'Деревья', 'Разработчики', 'Что делать?' 'С чего начать?'";
                break;
            case "Хай":
                techmessage = "Здраствуйте, чем я могу вам помочь? Вы можете воспользоваться командами 'Проект', 'Деревья', 'Разработчики', 'Что делать?' 'С чего начать?'";
                break;
            case "Проект":
                techmessage = "Наш проект под названием 'Green boro' направлен на Озеленение Боровичей. Каждый желающий может зарегистрироватсья в приложении и внести свой вклад. Чтобы в конечно итоге превратить Боровичи в цветущий лес";
                break;
            case "Деревья":
                techmessage = "На данный момент доступно только 2 вида деревьев: ясень, ель";
                break;
            case "Разработчики":
                techmessage = "Разработчиками приложения являются: Иванов Андрей, Моргушко Родион, Махнутин Кирилл, Федоров Данил, Панов Игнат, Абдраманов Иван";
                break;
            case "Что делать?":
                techmessage = "Откройте карту, далее выберите доступной для посадки место, выберите доступной для посадки в этом месте дерево. После вы получите уникальный код с которым вам необходимо обратится в администрацию Боровичей, где вам выдадут необходимый сажанец";
                break;
            case "С чего начать?":
                techmessage = "Я бы посоветовал изучить специфику различных деревьев перед посадкой, а также самостоятельно ознакомится с местом посадки. Приложение находится на ранней стадии и могут быть ошибки";
                break;
            default:
                techmessage = "Я не знаю такой команды, простите. Вы можете воспользоваться командами 'Проект', 'Деревья', 'Разработчики', 'Что делать?' 'С чего начать?'";
        }
        chat.insertAdjacentHTML('beforeend', '<div class="tech-message"><div class="flex-img"><img src="img/unsplash__iKNFEIVthQ.png"> </div><div class="he-text-message"><p class="he-message">'+ techmessage +'</p></div></div>');
    }
    setTimeout(testmess, 2000);
}