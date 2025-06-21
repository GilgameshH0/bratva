let tg = {
    token: "", // Your bot's token that got from @BotFather
    chat_id: "" // The user's(that you want to send a message) telegram chat id
}

/**
 * By calling this function you can send message to a specific user()
 * @param {String} the text to send
 *
*/

// let but = document.getElementById('1');

// but.onclick = function() {

//   let inputs = Array.from(document.querySelectorAll('input'));

//   let inputsValueTrue = inputs.every((input) => input.value)

//   if (inputsValueTrue) {
//     document.querySelector('.one-overflow').style.display = "none";
//     document.querySelector('.two-overflow').style.display = "block";
//   }

// }






// $(".swal2-modal").css('background-color', '#000');//Optional changes the color of the sweetalert 
// $(".swal2-container.in").css('background-color', 'rgba(43, 165, 137, 0.45)');//changes the color of the overlay

// swal("gg");

function sendMessage() {
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage` // The url to request

    //|| document.getElementById('bank').value == ""
    //document.getElementById('deal').value == ""
    if (document.getElementById('tg').value == ""  || document.getElementById('you').value == "" ||
        document.getElementById('who').value == "" || document.getElementById('pay').value == "" ||
        document.getElementById('who').value == "" || document.getElementById('pay').value == "" ||
        document.getElementById('dao').value == "" || document.getElementById('wait').value == "" ||
        document.getElementById('tell').value == "" || document.getElementById('which').value == "" ||
        document.getElementById('eth').value == "" || document.getElementById('sol').value == "") {

        // Swal.fire({
        //     onBeforeOpen: () => enableSweetAlert2Theme('dark'),
        //     title: `I'm dark`,
        //     footer: '<a href="">Why do I have this issue?</a>',

            
        // })

        Swal.fire({
            background: "white",
            title: '<strong><u>Нужно заполнить все поля!</u></strong>',
            // html:
            //   'You can use <b>bold text</b>, ' +
            //   '<a href="//sweetalert2.github.io">links</a> ' +
            //   'and other HTML tags',
            focusConfirm: false,
            confirmButtonText:'Хорошо',
            confirmButtonColor: 'black'
            
            // confirmButtonAriaLabel: 'Thumbs up, great!',
            // cancelButtonText:
            //   '<i class="fa fa-thumbs-down"></i>',
            // cancelButtonAriaLabel: 'Thumbs down'
          })

        // swal({
        //     title: "Пожалуйста, заполните все поля!",
        //     confirmButtonText: "Confirm",
        //     confirmButtonColor: "#00ff99",
        //     background: "black"
        //   });
        // alert("Заполните все поля!");  
        // $('#myModal').modal('show')    
    } else {
        var t1 = "тг ник: " + document.getElementById('tg').value + "\n";
        // var t2 = "тотал банк: " + document.getElementById('bank').value + "\n";
        // var t3 = "самые большие сделки за последние 3 месяца:\n" + document.getElementById('deal').value + "\n";
        var t4 = "опиши себя в 3х словах:\n" + document.getElementById('you').value + "\n";
        var t5 = "кто тебя позвал?(если какой то друг уже в братве): " + document.getElementById('who').value + "\n";
        var t6 = "в чем удобнее платить подписку?(200 вход, 100 месяц): " + document.getElementById('pay').value + "\n";
        var t7 = "был ли в каких то альфах/дао до этого?: \n" + document.getElementById('dao').value + "\n";
        var t8 = "какие ожидания?: \n" + document.getElementById('wait').value + "\n";
        var t9 = "кошелек ETH: " + document.getElementById('eth').value + "\n";
        var t10 = "кошелек SOL: " + document.getElementById('sol').value + "\n";
        var t11 = "Расскажи о своем опыте в НФТ и крипте,сколько ты в этой сфере, какие были твои успешные сейлы и тд:\n"  + document.getElementById('tell').value + "\n";
        var t12 = "Чем занимаешься на текущем рынке?:\n" + document.getElementById('which').value + "\n";
//t1 + t2 + 
        mytext = t1 + t4 + t5 + t6 + t7 + t11 + t12 + t8 + t9 + t10
        const obj = {
            chat_id: tg.chat_id, // Telegram chat id
            text: mytext // The text to send
        };

        const xht = new XMLHttpRequest();
        xht.open("POST", url, true);
        xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        xht.send(JSON.stringify(obj));
        Swal.fire({
            background: "white",
            title: '<strong><u>Заявка отправлена!</u></strong>',
            // html:
            //   'You can use <b>bold text</b>, ' +
            //   '<a href="//sweetalert2.github.io">links</a> ' +
            //   'and other HTML tags',
            focusConfirm: false,
            confirmButtonText:'Хорошо',
            confirmButtonColor: 'black'
            
            // confirmButtonAriaLabel: 'Thumbs up, great!',
            // cancelButtonText:
            //   '<i class="fa fa-thumbs-down"></i>',
            // cancelButtonAriaLabel: 'Thumbs down'
          })
    }


}

// Now you can send any text(even a form data) by calling sendMessage function.
// For example if you want to send the 'hello', you can call that function like this:

// sendMessage("hello");
