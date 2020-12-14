let form = document.forms.register;

form.addEventListener("submit", checkData);

function checkData (event) {
    event.preventDefault();
    let data = new FormData(form);
    console.log([...data.entries()]);
    let info = "";
    if (!fieldIsFilled(data.get("email"))) {
        info += "Введите адрес электронной почты</br>";
    }
    else if (!emailIsMatchFormat(data.get("email"))) {
        info += "Неверный формат email-адреса</br>";
    }
    if (!fieldIsFilled(data.get("username"))) {
        info += "Введите имя пользователя<br>"
    }
    if (!fieldIsFilled(data.get("password"))) {
        info += "Введите пароль<br>";
    } else if (!passwordIsMatchRequirements(data.get("password"))) {
        info += "Пароль слишком короткий<br>";
    } else {
        if (!fieldIsFilled(data.get("password confirm"))) {
            info += "Подтвердите пароль<br>";
        } else if (!comparePasswords(data.get("password"), data.get("password confirm"))) {
            info += "Пароли не совпадают";
        }
    }

    if (info != "") {
        Swal.fire({
            icon: 'error',
            title: 'Проверьте данные!',
            html: info
        });
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Поздравляем!',
            text: 'Вы успешно зарегистрированы'
        }).then(function (isConfirm) {
            if (isConfirm) {
                form.submit();
            }
        });
    }
}