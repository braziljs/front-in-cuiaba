module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "FrontInCuiabá 2016",
      description: "O FrontInCuiabá é um evento que nasceu com o intuito de propagar conhecimento e as novas técnicas para desenvolvimento web. Fazemos parte de um movimento que acontece por muitas cidades brasileiras que por onde passa é um grande sucesso. Abordamos especialmente assuntos Front-End Web e Mobile.",
      date: "16 de Abril",
      // If your event is free, just comment this line
      price: "R$ 45",
      venue: "",
      address: "Arena Pantanal",
      city: "Cuiabá",
      state: "MT"
  },

    // Facebook buttons
    // If you don't want this, just remove the fbButtons property
    fbButtons: {
        href: "https://www.facebook.com/FrontInCuiaba",
        layout: "button_count",
        action: "like",
        showFaces: true,
        share: true
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    /*callToAction: {
        text: "Certificado de participação!",
        link: "http://certificado.eventick.com.br/generate/gb6R-Cr3f7xsQE8XBZUVrQ"
    },*/
    callToAction: {
        text: "Inscreva-se!",
        link: "http://eventick.com.br/frontincuiaba-2016"
    },


    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    forkButton: {
        repository: "https://github.com/braziljs/front-in-cuiaba"
    },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://frontincuiaba.com.br/",
      googleanalytics: "UA-59028630-1"
  },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
        'about',
        'location',
        //'speakers',
        'schedule',
        'sponsors',
        'partners',
        'backstage'
        // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "O Evento",
      location: "Local",
      speakers: "Palestrantes",
      schedule: "Agenda",
      sponsors: "Patrocinadores",
      partners: "Apoiadores",
      contact: "Contato",
      backstage: "Realização"
  },

    // The entire schedule
    schedule: [
    {
        name: "Alongamento",
        time: "07h50",
        description: "Os portões se abrem para o alongamento"
    },
    {
        name: "Abertura",
        time: "08h10",
        description: "... e o árbitro já está em campo..."
    },
    {
        name: "Welcome Coffee",
        time: "08h20",
        description: "Foi dado início à partida!"
    },
    {
        name: "Galvão Bueno",
        time: "08h50",
        description: "Bem, meus caros amigos, estamos aqui para dar início a mais uma partida ..."
    },
    {
        name: "Suárez",
        time: "09h40",
        description: "Rawwwr"
    },
    {
        name: "Vampeta",
        time: "10h20",
        description: "Manda nudez?!"
    },
    {
        name: "Intervalo",
        time: "11h00",
        description: "Fim do primeiro tempo"
    },
    {
        name: "Cláudio Taffarel",
        time: "13h00",
        description: "Sai que é tua!"
    },
    {
        name: "Ronaldinho Gaucho",
        time: "13h50",
        description: "Faz o sinal do hand-loose"
    },
    {
        name: "Neymar Junior",
        time: "14h40",
        description: "... e o árbitro marca falta!"
    },
    {
        name: "Intervalo",
        time: "15h30",
        description: "Fim do segundo tempo"
    },
    {
        name: "Pelé",
        time: "16h00",
        description: "Não, eu sou o Jô Soares..."
    },
    {
        name: "Mesa Redonda",
        time: "16h50",
        description: "Fim do bate-bola, vamos ao terceiro tempo"
    },
    {
        name: "Sorteios",
        time: "17h30",
        description: "Quem quer o Gol de Ouro?"
    },
    {
        name: "Encerramento",
        time: "18h00",
        description: "As luzes do estádio se apagam."
    }
    ],

    // List of Sponsors
    sponsors: [
    {
        name: 'Diamante',
        items: [
        ]
    },
    {
        name: 'Ouro',
        items: [
        ]
    },

    {
        name: 'Prata',
        items: [
        ]
    },

    {
        name: 'Bronze',
        items: [
        ]
    }

    ],

    // List of Partners
    partners: [
    {
        name: "BrazilJS",
        logo: "themes/yellow-swan/img/partner-braziljs.png",
        url: "http://braziljs.org"
    },
    {
        name: "Eventick",
        logo: "themes/yellow-swan/img/partner-eventick.png",
        url: "http://eventick.com.br/"
    },
    ],

    backstage: [
    {
        name : "Desenvolvedores do Mato Grosso",
        logo: "themes/yellow-swan/img/backstage-devmt.png",
        url: "#"
    },
    {
        name: "Gabinete de Assuntos Estratégicos",
        logo: "themes/yellow-swan/img/backstage-gae.png",
        url: "http://www.mt.gov.br"
    }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
  },

    // Site Path
    getUrl: function() {
      return this.site.url;
  }
}
};
