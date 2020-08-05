function validateLogin() {
    var username = document.getElementById('sign_in_user').value;
    var password = document.getElementById('sign_in_pass').value;
    var successScreen = document.getElementById('success_login');
    var loginScreen = document.getElementById('sign_in');
    if (username == null || password == null || username.length == 0 || password.length == 0) {
        alert('Invalid login credentials!');
    }
    if (username != null && password != null) {
        successScreen.style.display = 'inline';
        loginScreen.style.display = 'none';
    }
}

function validatePassword() {
    //needs to satisfy requirements and password need to match
    var password = document.getElementById('new_password_input').value;
    var passwordAlert = document.getElementById('password-alert');
    var requirements = document.getElementsByClassName('requirements');
    var leng, bigLetter, num, specialChar;
    var leng = document.getElementById('leng').value;
    var bigLetter = document.getElementById('big-letter').value;
    var num = document.getElementById('num').value;
    var specialChar = document.getElementById('special-char').value;
    var specialChars = "!@#%^&*()-_=+[{]}\\|;:'\",<.>/?`~";
    var numbers = "0123456789";




    if (password.length < 8) {
        leng = false;
    } else if (val.length > 7) {
        leng = true;
    }


    if (password.toLowerCase() == val) {
        bigLetter = false;
    } else { bigLetter = true; }

    num = false;
    for (var i = 0; i < password.length; i++) {
        for (var j = 0; j < numbers.length; j++) {
            if (password[i] == numbers[j]) {
                num = true;
            }
        }
    }

    specialChar = false;
    for (var i = 0; i < password.length; i++) {
        for (var j = 0; j < specialChars.length; j++) {
            if (password[i] == specialChars[j]) {
                specialChar = true;
            }
        }
    }

    console.log(leng, bigLetter, num, specialChar);

    if (leng == true && bigLetter == true && num == true && specialChar == true) {
        (this).addClass("valid").removeClass("invalid");
        requirements.removeClass("wrong").addClass("good");
        passwordAlert.removeClass("alert-warning").addClass("alert-success");
    } else {
        (this).addClass("invalid").removeClass("valid");
        passwordAlert.removeClass("alert-success").addClass("alert-warning");

        if (leng == false) { leng.addClass("wrong").removeClass("good"); } else { leng.addClass("good").removeClass("wrong"); }

        if (bigLetter == false) { bigLetter.addClass("wrong").removeClass("good"); } else { bigLetter.addClass("good").removeClass("wrong"); }

        if (num == false) { num.addClass("wrong").removeClass("good"); } else { num.addClass("good").removeClass("wrong"); }

        if (specialChar == false) { specialChar.addClass("wrong").removeClass("good"); } else { specialChar.addClass("good").removeClass("wrong"); }
    }

}

function show(shown, hidden) {
    document.getElementById(shown).style.display = 'inline';
    document.getElementById(hidden).style.display = 'none';
}