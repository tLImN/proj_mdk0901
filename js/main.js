//Кнопка «Наверх»
const btnUp = {
    addEventListener() {
        el: document.querySelector('#btn-up'),
            document.querySelector('#btn-up').onclick = () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
    }
}
btnUp.addEventListener();

//Cookie
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(';');
  for(let i=0;i < ca.length;i++) {
    let c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
function eraseCookie(name) {   
  document.cookie = name+'=; Max-Age=-99999999; path=/';  
}


document.addEventListener('DOMContentLoaded', function() {
  const loginBtn = document.getElementById('loginBtn');
  const accountBtn = document.getElementById('accountBtn');

  if(getCookie('user_logged_in') === 'yes') {
    if(loginBtn) loginBtn.style.display = 'none';
    if(accountBtn) accountBtn.style.display = 'inline-block';
  } else {
    if(loginBtn) loginBtn.style.display = 'inline-block';
    if(accountBtn) accountBtn.style.display = 'none';
  }
  console.log('test')
});

//Выход из аккаунта
document.getElementById('logoutBtn').onclick = function(e) {
  e.preventDefault();
  eraseCookie('user_logged_in');
  window.location.href = "./index.html";
};
