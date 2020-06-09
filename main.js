$(document).ready(function(){
  //Quando clicco su next mostro immagine successiva
  $('div.next').click(function () {
    mostraImmagineSuccessiva();
  });

  //Quando clicco su next mostro immagine successiva
  $('div.prev').click(function () {
    mostraImmaginePrecedente();
  });
});

//funzione per mostrare immagina successiva
function mostraImmagineSuccessiva() {
  //seleziono elementi active
  var immagineCorrente = $('.images img.active');
  var cerchiettoCorrente = $('.nav .active');

  //elimino da loro la classe active
  immagineCorrente.removeClass('active');
  cerchiettoCorrente.removeClass('active');

  //se arrivo all'ultima torno alla prima
  if (immagineCorrente.hasClass('last')) {
    $('.images img.first').addClass('active');
    $('.nav .first').addClass('active');
  }

  //altrimenti passo solamente a successiva
  else {
    immagineCorrente.next('img').addClass('active');
    cerchiettoCorrente.next('i').addClass('active');
  }
}

//funzione per mostrare immagine mostraImmaginePrecedente
function mostraImmaginePrecedente() {

  //seleziono elementi active
  var immagineCorrente = $('.images img.active');
  var cerchiettoCorrente = $('.nav .active');

  //elimino da loro la classe active
  immagineCorrente.removeClass('active');
  cerchiettoCorrente.removeClass('active');

  //se sono alla prima vado all'ultima
  if (immagineCorrente.hasClass('first')) {
    $('.images img.last').addClass('active');
    $('.nav .last').addClass('active');
  }

  //altrimenti passo solamente a precedente
  else {
    immagineCorrente.prev('img').addClass('active');
    cerchiettoCorrente.prev('i').addClass('active');
  }
}
