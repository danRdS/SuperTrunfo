var cartaRafa = {
    nome: "bulbassauro",
    imagem: "https://gartic.com.br/imgs/mural/jh/jhonfs/bulbassauro.png",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 6
    }
  };
  
  var cartaGui = {
    nome: "Darth Vader",
    imagem: "https://static.wikia.nocookie.net/ptstarwars/images/a/ae/Darthvader1_cover.jpg",
    atributos: {
      ataque: 9,
      defesa: 8,
      magia: 2
    }
  };
  
  var cartaPaulo = {
    nome: "Shiryu de Dragão",
    imagem: "https://i.pinimg.com/originals/d4/91/94/d49194130ad744d09d577d1bb7aa6307.jpg",
    atributos: {
      ataque: 5,
      defesa: 9,
      magia: 10
    }
  };

  var cartaDaniel1 = {
    nome: "Saga de Gêmeos",
    imagem: "https://omaringa.com.br/wp-content/uploads/2021/11/saga-2.jpg",
    atributos: {
      ataque: 10,
      defesa: 7,
      magia: 8
    }
  };

  var cartaDaniel2 = {
    nome: "Charmander",
    imagem: "https://sm.ign.com/ign_br/screenshot/default/blob_bkmv.jpg",
    atributos: {
      ataque: 8,
      defesa: 7,
      magia: 7
    }
  };

  var cartaOculta = {
    nome: "???",
    imagem: "https://i.pinimg.com/736x/d3/ff/50/d3ff5055dcced901eda0bf9f82362aa2.jpg",
    atributos: {
      ataque: 0,
      defesa: 0,
      magia: 0
    }
  };
  
  var cartas = [cartaRafa, cartaGui, cartaPaulo, cartaDaniel1, cartaDaniel2];
  var cartasJ = [cartaRafa, cartaGui, cartaPaulo, cartaDaniel1, cartaDaniel2];
  var cartaMaquina;
  var cartaJogador;
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
    cartaMaquina = cartas[numeroCartaMaquina];
  
    var numeroCartaJogador = parseInt(Math.random() * cartasJ.length);
    /*while (numeroCartaMaquina == numeroCartaJogador) {
      numeroCartaJogador = parseInt(Math.random() * 5);
    }*/
    cartaJogador = cartasJ[numeroCartaJogador];
    //cartaJogador = cartas[4];
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
  
    exibirCartaJogador()
    exibirCartaEmBranco()
    var divResultado = document.getElementById("resultado");
    htmlResultado = "<p class='resultado-final'>aspargos</p>";
    divResultado.innerHTML = null
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
  
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
  
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
      htmlResultado = "<p class='resultado-final'>Venceu</p>";
      /*let cartaConquistada = cartas.splice(numeroCartaMaquina, 1)
      cartasJ.push(cartaConquistada.pop())*/
      console.log("cartas da Maquina 'cartas':", cartas)
      console.log("cartas do Jogador 'cartasJ':", cartasJ)
    } else if (cartaMaquina.atributos[atributoSelecionado] > cartaJogador.atributos[atributoSelecionado]) {
      htmlResultado = "<p class='resultado-final'>Perdeu</p>"
    } else {
      htmlResultado = "<p class='resultado-final'>Empatou</p>"
    }
    divResultado.innerHTML = htmlResultado
    
    exibirCartaMaquina()
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnSortear").disabled = false;
    //resultadoFinal()
    /*if(cartas == '') {
      htmlResultado = "<p class='resultado-final'>PARABÉNS, VOCÊ VENCEU!</p>";
      document.getElementById("btnJogar").disabled = true;
      document.getElementById("btnSortear").disabled = true;
    }*/
  }
  
  function exibirCartaJogador(){
    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div id= 'opcoes' class='carta-status'>"
    
    var opcoesTexto = ""
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
  }
  
  function exibirCartaMaquina(){
    var divCartaMaquina = document.getElementById("carta-maquina")
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div id= 'opcoes' class='carta-status'>"
    
    var opcoesTexto = ""
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
  }
  
  function exibirCartaEmBranco(){
    var divCartaMaquina = document.getElementById("carta-maquina")
    divCartaMaquina.style.backgroundImage = `url(${cartaOculta.imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div id= 'opcoes' class='carta-status'>"
    
    var opcoesTexto = ""
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
      "<p type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo + " " + "???" + "</p>";
    }
    var nome = `<p class="carta-subtitle">???</p>`
    
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
  }
  