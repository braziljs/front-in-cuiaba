module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "FrontInCuiabá",
      description: "O FrontInCuiabá é um evento que nasceu com o intuito de propagar conhecimento e as novas técnicas para desenvolvimento web. Fazemos parte de um movimento que acontece por muitas cidades brasileiras que por onde passa é um grande sucesso. Abordamos especialmente assuntos Front-End Web e Mobile.",
      date: "28 de Março",
      // If your event is free, just comment this line
      //price: "R$ 65",
      venue: "Mato Grosso Palace Hotel",
      address: "Rua Joaquim Murtinho, 170, Centro",
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
    // callToAction: {
    //     text: "Inscreva-se!",
    //     link: "http://eventick.com.br/frontincuiaba"
    // },

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
      'partners'
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
      contact: "Contato"
    },

    // The entire schedule
    schedule: [
      {
        name: "Credenciamento / Welcome Coffee",
        time: "08h00"
      },
      {
        name: "Juarez Filho",
        photo: "themes/yellow-swan/img/eventhost-juarezpaf.jpg",
        bio: "Front end Engineer na madewithlove onde constrói produtos com amor, tem mais de 7 anos de experiência, começou sua carreira como desenvolvedor PHP, tentou aprender Java e depois se entregou ao Ruby e Rails, mas com sua primeira classe CSS dedicou-se completamente a carreira de Front End e UX.",
        company: "madewithlove",
        type: "Apresentador",
        link: {
          href: "http://www.twitter.com/juarezpaf",
          text: "@juarezpaf"
        },
        presentation: {
          title: "Abertura Front in Cuiabá",
          time: "08h10"
        }
      },
      {
        name: "Alvaro Viebranz",
        photo: "themes/yellow-swan/img/speaker-alvaro-viebranz.jpg",
        bio: "É Analista de TI na Sefaz-MT e CTO da startup cuiabana Procurix. Graduado pela UFMT em Ciência da Computação, com estudos na área de banco de dados NoSQL e buscas textuais. Curte muito desenvolvimento web, com foco maior no back-end, mas é entusiasta com front-end em AngularJS. É apaixonado por desenvolvimento mobile utilizando tanto tecnologias hibridas quanto nativas.  Arduinista nas horas vagas.",
        company: "Secretaria de Fazenda do Estado de Mato Grosso",
        link: {
          href: "http://www.twitter.com/alvinhuuu",
          text: "@alvinhuu"
        },
        presentation: {
          title: "Construindo Aplicativos Híbridos com Ionic Framework",
          description: "Na tentativa de padronizar uma forma de se desenvolver aplicativo híbridos, nasceu o Ionic Framework, focado em padrões modernos (HTML5, CSS e JS), performance e facilidade de uso.",
          time: "08h30",
          slide: "http://alvarowolfx.github.io/ionic-present"
        }
      },
      {
        name: "Ney Simões",
        photo: "themes/yellow-swan/img/speaker-ney-simoes.jpg",
        bio: "É desenvolvedor front-end e mobile na empresa CI&T. Atua na área a 5 anos já passou por empresas como e-Construmarket e UOL. Começou a aprender programação por necessidade e se transformou na sua paixão de vida. Entusiasta de CSS acha que a vida pode ser mais bonita com um bom estilo.",
        company: "CI&T",
        link: {
          href: "https://github.com/neysimoes/",
          text: "@neysimoes"
        },
        presentation: {
          title: "Arquitetura CSS",
          description: "Arquitetura CSS é uma das partes mais importantes do front-end, pode não parecer mas num projeto mal estruturado podemos perder mais tempo estilizando do que programando a lógica. Tendo percebido isso vários desenvolvedores no mundo desenvolveram técnicas para uma arquitetura sólida do CSS.",
          time: "09h30"
        }
      },
      {
        name: "Almir Filho",
        photo: "themes/yellow-swan/img/speaker-almir-filho.jpg",
        bio: "Desenvolvedor web na Globo.com e co-fundador do Loop Infinito, onde compartilha seu conhecimento, experiências e pensamentos sobre front-end. Possui mestrado em Ciência da Computação, é entusiasta e extremamente interessado pelo mundo dos padrões web e produtividade. Artista de sanduíches nas horas vagas.",
        company: "Globo.com",
        link: {
          href: "http://twitter.com/almirfilho",
          text: "@almirfilho"
        },
        presentation: {
          title: "Esse cara é o grunt",
          description: "♫ O cara que observa seus arquivos toda hora O cara que te avisa quando você quebra o build O cara que faz o reload por você O cara que após o save, te chama Pra dizer se o teste passou ou quebrou Esse cara é o Grunt!",
          time: "10h30",
          slide: "https://speakerdeck.com/almirfilho/esse-cara-e-o-grunt"
        }
      },
      {
        name: "Almoço",
        time: "11h30"
      },
      {
        name: "Fabian Carlos",
        photo: "themes/yellow-swan/img/speaker-fabian-carlos.jpg",
        bio: "Desenvolvedor \"on demand\" apaixonado por Front-end e Back-end, desenvolve para web e mobile. Possui experiência com ferramentas de alta produtividade e escalabilidade como Ruby/Rails, Nodejs, Backbonejs, Angularjs, MongoDB. Vem atuando principalmente no desenvolvimento para Startups da região.",
        company: "MeoApp",
        link: {
          href: "https://github.com/fabiancarlos",
          text: "@fabiancarlos"
        },
        presentation: {
          title: "Javascript: The Good, Bad and Ugly parts",
          description: "Todas linguagens tem suas partes boas e ruins, e com Javascript a coisa pode ficar realmente feia se for mal compreendida. Vamos falar de como surgiu e que rumo tomou até os dias de hoje de uma amada e odiada linguagem, o Javascript.",
          time: "13h00"
        }
      },
      {
        name: "Dhyego Fernando",
        photo: "themes/yellow-swan/img/speaker-dhyego-fernando.jpg",
        bio: "Atualmente com 18 anos, é desenvolvedor web front e back-end apaixonado no que faz e fissurado em solucionar problemas com boas práticas e um bom código. Sempre buscou enfrentar novos desafios, conhecer e utilizar novas tecnologias pois acredita que um bom desenvolvedor não deve ser rotulado.",
        company: "WebFlavia",
        link: {
          href: "https://github.com/dhyegofernando",
          text: "@dhyegofernando"
        },
        presentation: {
          title: "Modularização com AngularJS",
          description: "Muitos acoplamentos podem tornar sua aplicação complicada de se manter. Esta palestra irá abordar soluções inteligentes com AngularJS para resolver de forma ágil este problema.",
          time: "13h50",
          slide: "http://dhyegofernando.github.io/modular-angularjs-talk/"
        }
      },
      {
        name: "Coffee-break",
        time: "14h40"
      },
      {
        name: "Davidson Fellipe",
        photo: "themes/yellow-swan/img/speaker-davidson-fellipe.jpg",
        bio: "É Front-end engineer na Globo.com, onde já se envolveu com projetos para o Globoesporte.com, Futpédia, Tempo Real, Eu Atleta e Sportv. Bastante envolvido com a comunidade JS, sendo o fundador do Riojs e Pernambucojs, além de organizar os eventos Front in BH e Front in Recife. Graduado em engenharia da computação pela UPE, técnico em eletrônica pelo IFPE e Mestrando em Ciência da Computação na PUC-Rio.",
        company: "Globo.com",
        link: {
          href: "http://github.com/davidsonfellipe",
          text: "@davidsonfellipe"
        },
        presentation: {
          title: "Guia do Front-end das Galáxias",
          description: "Como encarar os desafios da área de desenvolvimento front-end para web, esse campo que é cheio de grandes desafios, sejam eles voltados para dispositivos, browsers, resoluções... Então, quais frameworks, ferramentas e bibliotecas são relevantes para aprimorar sua forma de trabalho? Venha conhecer 42 dicas para trabalhar mais feliz.",
          time: "15h10",
          slide: "http://www.slideshare.net/davidsonfellipe/guia-do-front-end-das-galaxias"
        }
      },
      {
        name: "Karuan Bertoluci",
        photo: "themes/yellow-swan/img/speaker-karuan-bertoluci.jpg",
        bio: "É User Experience designer na CI&T, onde atua com desenvolvimento criativo e inovação. Passou por agências de publicidade e diversas startups trabalhando com desenvolvimento de produtos web/mobile e tecnologia. Estudante e experimentador de processos e metodologias de design para entender melhor o mundo dos usuários. Atualmente organizador do GDG Campinas e DevCast Day e tem como lema: update or die.",
        company: "CI&T",
        link: {
          href: "http://twitter.com/karuanbertoluci",
          text: "@karuanbertoluci"
        },
        presentation: {
          title: "Inovação & User Experience - Estética ou Funcionalidade?",
          description: "Qual a ligação de inovação e experiência de usuário? Vamos realizar um breve estudo de caso utilizando a criação de Phillipe Starck: Juicy Salif. Um objeto estranho com um grande apelo visual e apenas uma funcionalidade: Espremer Laranjas. Mas em algum momento o Juicy deixou sua real funcionalidade de lado e hoje atua melhor como uma micro escultura. Isso não faz sentido, faz? Essa palestra faz um tour em algumas ferramentas e metodologias de design para mapear e justificar todos os aspectos do produto em análise.",
          time: "16h10",
          slide: "https://medium.com/@karuanbertoluci/inovacao-e-experiencia-de-usuario-8c7f99bbfb73"
        }
      },
      {
        name: "Mesa Redonda",
        time: "17h10"
      },
      {
        name: "Sorteios",
        time: "17h40"
      },
      {
        name: "Encerramento",
        time: "17h50"
      },

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
              {
                name: "Globo.com",
                logo: "themes/yellow-swan/img/sponsor-globocom.png",
                url: "https://github.com/globocom"
              }
            ]
        },

        {
            name: 'Prata',
            items: [
              {
                name: "CBANET",
                logo: "themes/yellow-swan/img/sponsor-cbanet.png",
                url: "http://cbanet.com.br/"
              },
              {
                name: "TreinaWeb",
                logo: "themes/yellow-swan/img/sponsor-treinaweb.jpg",
                url: "https://www.treinaweb.com.br/"
              },
              {
                name: "Tiago de Mattos",
                logo: "themes/yellow-swan/img/sponsor-tiagodemattos.png",
                url: "http://tiagodemattos.com.br/index"
              }
            ]
        },

        {
            name: 'Bronze',
            items: [
              {
                name: "RCF Inovações",
                logo: "themes/yellow-swan/img/sponsor-rcf-inovacoes.png",
                url: "http://rcfinovacoes.com.br/"
              },

              {
                name: "Procurix",
                logo: "themes/yellow-swan/img/sponsor-procurix.jpg",
                url: "http://www.procurix.com.br/"
              },

              {
                name: "Nuvem Tecnologia",
                logo: "themes/yellow-swan/img/sponsor-nuvem.png",
                url: "http://www.nuvem.net/"
              },

              {
                name: "8bits_ propaganda",
                logo: "themes/yellow-swan/img/partner-8bits-propaganda.png",
                url: "http://8bitspropaganda.com.br/"
              }
            ]
        }

    ],

    // List of Partners
    partners: [
      {
        name: "Eventick",
        logo: "themes/yellow-swan/img/partner-eventick.png",
        url: "http://eventick.com.br/"
      },
      {
        name: "BrazilJS",
        logo: "themes/yellow-swan/img/partner-braziljs.png",
        url: "http://braziljs.org"
      },
      {
        name: "Caelum",
        logo: "themes/yellow-swan/img/partner-caelum.png",
        url: "https://www.caelum.com.br/"
      },
      {
        name: "yoDojo",
        logo: "themes/yellow-swan/img/partner-yodojo.jpg",
        url: "https://www.facebook.com/yohacking"
      },
      {
        name: "Vá Nesta Direção",
        logo: "themes/yellow-swan/img/partner-va-nesta-direcao.png",
        url: "http://vanestadirecao.com/"
      },
      {
        name: "Império Estampas",
        logo: "themes/yellow-swan/img/partner-imperio.png",
        url: "http://www.imperioestampas.com.br/"
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
