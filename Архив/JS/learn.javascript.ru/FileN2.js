var uslgn = prompt('Введите логин', '');

if (uslgn == 'Admin') {
	
  var uspss = prompt('Введите пароль', '');
  if (uspss == 'blacklord') {alert ('Добро пожаловать')}
  else if (uspss == null) {alert ('отказ от авторизации')}
  else {alert ('неверный пароль')}
  
  }
  
 else if (uslgn == null) {alert ('вход отменен')}
 else {alert('неизвестный пользователь')}
