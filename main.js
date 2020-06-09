$(document).ready(function(){
  //Quando clicco su next mostro immagine successiva
  $('div.next').click(function () {
    mostraImmagineSuccessiva();
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
