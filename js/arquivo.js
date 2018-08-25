function enviar(){

  var nome = document.getElementById("text-nome");
  //se o valor na variavel nome for diferente de vazio
  if(nome.value != ""){
      //mostrar mensagem com o Nome
      alert("Obrigado " + nome.value + ", mas está área está em desenvolvimento")
    } else{
      //mostrar mensagem generica
      alert("Obrigado, mas está área está em desenvolvimento")
    }


}
