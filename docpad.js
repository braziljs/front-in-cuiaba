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
      price: "R$ 65",
      venue: "Arena Pantanal",
      address: "Av. Agrícola Paes de Barros",
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
        name: "Bruno Pacola",
        photo: "themes/yellow-swan/img/eventhost-pacola.jpg",
        bio: "Profissional Apaixonado pelo o que faz e privilegiado por ter descoberto muito cedo o que gosta de fazer na vida: trabalhar com tecnologia da informação. Nos dias de hoje, compartilha e constroi seus sonhos com pessoas fabulosas na empresa onde trabalha, Nuvem Tecnologia.",
        time: "08h10",
        type: "Apresentador",
        company: "Nuvem Tecnologia",
        link: {
          href: "https://twitter.com/bpacola",
          text: "@bpacola"
        },
        presentation: {
          title: "Abertura",
          description: "... e o árbitro já está em campo...",
          time: "08h10"
        }
    },
    {
        name: "Welcome Coffee",
        time: "08h20",
        description: "Foi dado início à partida!"
    },
    {
        name: "Gabriel Araujo",
        photo: "themes/yellow-swan/img/speaker-gabriel-araujo.jpg",
        bio: "Desenvolvedor Web, Aplicativos e Jogos, sempre estudando novas linguagens e frameworks. Interessado pelas novas tecnologias moveis e imoveis. Fanático por jogos desde que se conhece por gente. Bacharel em Analise de Sistemas, MBA em Gestão de Projetos e estudante de Filosofia. \"Na regra mais clara, no código mais denso. O bug sucumbira ante minha presença.\"",
        company: "SEFAZ/MT",
        link: {
            href: "https://twitter.com/gabriel_araujo",
            text: "@gabriel_araujo"
        },
        presentation: {
            title: "Dialetos, Ferramentas e Interfaces. Uma breve historia da programação.",
            description: "De forma humorada contar rapidamente como as linguagens de programação acompanharam os paradigmas da computação, e repensar sobre para aonde estamos indo.",
            time: "08h50"
        }
    },
    {
        name: "Rafael Venson",
        photo: "themes/yellow-swan/img/speaker-rafael-venson.jpg",
        bio: "Estudou Ciências Econômicas na Universidade do Estado do Mato Grosso (2006 a 2010) e formou em Gestão Comercial pela UNIRONDON (2012 a 2014), possui certificação em Master e Leader Coaching pela Sociedade Latino Americana de Coaching (SLAC). Durante cinco anos trabalhou no varejo do setor financeiro em três grandes instituições, Bradesco, HSBC e Santander, atuando como gerente de relacionamento em carteiras de alta renda. Em 2014 iniciou sua empresa de consultoria e treinamentos atendendo várias empresas no Mato Grosso com consultoria e treinamentos. Em 2015 ganhou participação na equipe da startup RCF Inovações na qual tem participação e atua como gestor.",
        company: "Venson Consultoria",
        link: {
            href: "https://www.linkedin.com/in/rafaelvenson",
            text: "@rafavenson"
        },
        presentation: {
            title: "Criatividade não surge por acaso",
            description: "Existe um mito de que a criatividade surge por acaso. Neste talk iremos mostrar que criatividade não é um mito e sim uma capacidade inata que precisa ser desenvolvida e cuja a utilidade é resolver problemas por meio da combinação de ideias e seguindo etapas de um processo criativo.",
            time: "09h50"
        }
    },
    {
        name: "Luan Castro",
        photo: "themes/yellow-swan/img/speaker-castrolol.jpg",
        bio: "Desenvolvedor inovador e apaixonado por natureza desde os 11 anos de idade, busca sempre estar por dentro das últimas tecnologias do mundo web, de mobile e de games. Desde 2009 aplicando Javascript para resolver todo e qualquer tipo de problema possível, atualmente trabalha no TJMT.",
        company: "TJ/MT",
        link: {
            href: "https://www.twitter.com/castrolol",
            text: "@castrolol"
        },
        presentation: {
            title: "Você no controle, Service Workers (Serviços para Browser)",
            description: "Primeiras experiencias e uso de Service Workers,  Push notifications no browser e usando cache para suporte offline, um passo largo nos seus poderes dentro do browser. The force (of service workers) may be with you.",
            time: "10h50"
        }
    },
    {
        name: "Intervalo",
        time: "11h50",
        description: "Fim do primeiro tempo"
    },
    {
        name: "Juarez Filho",
        photo: "themes/yellow-swan/img/speaker-juarezpaf.jpg",
        bio: "Apaixonado pela Califórnia e pela Web, um explorador que adora contar suas aventuras envolvendo Tecnologia e Produtos do Google. Já participou de equipes notáveis como Enjoei e madewithlove, atualmente passa a maior parte do seus dias escrevendo testes e contribuindo para a comunidade atuando como GDG Organizer e Google Developer Expert.",
        company: "Google Developer Expert",
        link: {
            href: "https://twitter.com/juarezpaf",
            text: "@juarezpaf"
        },
        presentation: {
            title: "Polymer & Firebase: Componentizando a Web em Tempo Real",
            description: "Polymer e Web Componentes trazem uma nova forma de construir aplicações Web. Nessa palestra você aprenderá como criar aplicações Web usando o Polymer Starter Kit e ainda armazenar os dados de sua aplicação, gerenciar autenticação do usuário e fazer deploy usando Firebase.",
            time: "14h00"
        }
    },
    {
        name: "Alvaro Viebrantz",
        photo: "themes/yellow-swan/img/speaker-alvaro-viebrantz.jpg",
        bio: "Desenvolvedor web, focado no backend mas entusiasta de tecnologias de frontend. Apaixonado por desenvolvimento de aplicativos mobiles usando tanto tecnologias hibridas e nativas. Language Agnostic.",
        company: "SEFAZ/MT",
        link: {
            href: "https://twitter.com/alvinhuuu",
            text: "@alvinhuuu"
        },
        presentation: {
            title: "Desenvolvendo Aplicativos com React Native.",
            description: "React Native foca na eficiência do desenvolvedor entre as diferentes plataformas suportadas, aplicando o famoso 'Learn once, write anywhere'. O Facebook usa React Native em diversos aplicativos em produção e vai continuar investindo nesta tecnologia.",
            time: "14h50"
        }
    },
    {
        name: "Intervalo",
        time: "15h40",
        description: "Fim do segundo tempo"
    },
    {
        name: "Joselito Junior",
        photo: "themes/yellow-swan/img/speaker-joselito-junior.jpg",
        bio: "Organizador do GDG Recife e CodeTalks, co-criador e instrutor dos cursos AngularJS Bootcamp, PhoneGap Bootcamp e Ionic Bootcamp e fundador das startups premiadas Estudorama e Rabiscapp. Além de ganhador de Hackathons profissional, é entusiasta do Design Thinking, Lean Startup e desenvolvimento Ágil de software. Fã de Fórmula 1 e de fazer piadas de gosto duvidoso.",
        company: "Tampa Works",
        link: {
            href: "https://twitter.com/joselitojunior1",
            text: "@joselitojunior1"
        },
        presentation: {
            title: "Progressive Web Apps: Um guia para você fazer webapps sem precisar de toalha",
            description: "De tempos em tempos na web surgem novos paradigmas para a construção de aplicativos web. Aplicativos progressivos se aproveitam de novos conceitos e tecnologias, como App Manifest, ServiceWorkers, HTTPS, Offline e Mobile First, bem como conceitos de usabilidade e experiência do usuário. Progressivos, Responsivos, independentes, instaláveis... conheça todos esses conceitos e aprenda como construir o seu primeiro Progressive Web App enquanto almoça num restaurante no fim do universo.",
            time: "16h10"
        }
    },
    {
        name: "Mesa Redonda",
        time: "17h00",
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
            {
                name: "Código5",
                logo: "themes/yellow-swan/img/sponsor-codigo5.png",
                url: "http://codigo5.com.br"
            }
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
        {
            name: "Venson Consultoria",
            logo: "themes/yellow-swan/img/partner-venson-consultoria.png",
            url: "http://vensonconsultoria.com.br/"
        },
        {
            name: "yoDojo",
            logo: "themes/yellow-swan/img/partner-yodojo.jpg",
            url: "https://www.facebook.com/yohacking"
        },
        {
            name: "Casa do Código",
            logo: "themes/yellow-swan/img/partner-casa-do-codigo.png",
            url: "https://www.casadocodigo.com.br"
        }
    ],

    backstage: [
        {
            name : "Desenvolvedores do Mato Grosso",
            logo: "themes/yellow-swan/img/backstage-devmt.png",
            url: "http://devmt.com.br"
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
