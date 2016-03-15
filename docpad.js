module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "FrontInCuiabá",
      description: "O FrontInCuiabá é um evento que nasceu com o intuito de propagar conhecimento e as novas técnicas para desenvolvimento web. Fazemos parte de um movimento que acontece por muitas cidades brasileiras que por onde passa é um grande sucesso. Abordamos especialmente assuntos Front-End Web e Mobile.",
      date: "16 de Abril",
      // If your event is free, just comment this line
      price: "R$ 45",
      venue: "Arena Pantanal",
      address: "Arena Pantanal, Centro",
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
    'speakers',
    'schedule',
    'sponsors',
    'partners',
    'realization'
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
      realization: "Realização"
  },

    // The entire schedule
    schedule: [
    {
        name: "Credenciamento",
        time: "07h50"
    },
    {
        name: "Abertura",
        time: "08h15"
    },
    {
        name: "Welcome Coffee",
        time: "08h25"
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

    realization: [
    {
        name : "Desenvolvedores do Mato Grosso",
        logo: "themes/yellow-swan/img/realization-devmt.png",
        url: "#"
    },
    {
        name: "Gabinete de Assuntos Estratégicos",
        logo: "themes/yellow-swan/img/realization-gae.png",
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
