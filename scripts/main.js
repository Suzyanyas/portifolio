// Objeto de traduções
const translations = {
  "title": {
    pt: "Suzy Alves",
    en: "Suzy Alves",
    es: "Suzy Alves"
  },
  "nav-home": {
    pt: "Home",
    en: "Home",
    es: "Inicio"
  },
  "nav-about": {
    pt: "Sobre",
    en: "About",
    es: "Sobre"
  },
  "nav-portfolio": {
    pt: "Portifólio",
    en: "Portfolio",
    es: "Portafolio"
  },
  "nav-contact": {
    pt: "Contacto",
    en: "Contact",
    es: "Contacto"
  },
  "header-greeting": {
    pt: "Olá, eu sou",
    en: "Hello, I am",
    es: "Hola, soy"
  },
  "header-about": {
    pt: "Sobre",
    en: "About",
    es: "Sobre"
  },
  "header-contact": {
    pt: "Contacto",
    en: "Contact",
    es: "Contacto"
  },
  "typing-text": {
    pt: "Desenvolvedora Web Fullstack | JavaScript • React.js • Node.js • PHP • CSS • HTML • MySQL",
    en: "Fullstack Web Developer | JavaScript • React.js • Node.js • PHP • CSS • HTML • MySQL",
    es: "Desarrolladora Web Fullstack | JavaScript • React.js • Node.js • PHP • CSS • HTML • MySQL"
  },
  "about-title": {
    pt: "Sobre Mim",
    en: "About Me",
    es: "Sobre Mí"
  },
  "about-description": {
    pt: "Gosto de transformar ideias em aplicações reais e de solucionar problemas de forma criativa usando a tecnologia. Por isso, estou sempre em busca de aprender e evoluir como desenvolvedora, contribuindo para projetos que realmente façam a diferença.",
    en: "I love turning ideas into real applications and solving problems creatively using technology. That's why I'm always seeking to learn and grow as a developer, contributing to projects that truly make a difference.",
    es: "Me gusta transformar ideas en aplicaciones reales y resolver problemas de manera creativa utilizando la tecnología. Por eso, siempre estoy buscando aprender y evolucionar como desarrolladora, contribuyendo a proyectos que realmente marquen la diferencia."
  },
  "timeline-1-date": {
    pt: "Março 2025 – Presente",
    en: "March 2025 – Present",
    es: "Marzo 2025 – Presente"
  },
  "timeline-1-title": {
    pt: "CET - Técnico Especialista em Programação e Análise de Sistemas",
    en: "CET - Specialist Technician in Programming and Systems Analysis",
    es: "CET - Técnico Especialista en Programación y Análisis de Sistemas"
  },
  "timeline-1-description": {
    pt: "Formação de nível 5 no IEFP, com foco em desenvolvimento de software, análise de sistemas e bases de dados.",
    en: "Level 5 training at IEFP, focusing on software development, systems analysis, and databases.",
    es: "Formación de nivel 5 en el IEFP, con enfoque en desarrollo de software, análisis de sistemas y bases de datos."
  },
  "timeline-2-date": {
    pt: "Paralelamente ao CET",
    en: "Alongside CET",
    es: "Paralelamente al CET"
  },
  "timeline-2-title": {
    pt: "Formação Fullstack em JavaScript",
    en: "Fullstack JavaScript Training",
    es: "Formación Fullstack en JavaScript"
  },
  "timeline-2-description": {
    pt: "Curso online intensivo com foco em JavaScript moderno, React, Next.js e MongoDB, com projetos práticos.",
    en: "Intensive online course focusing on modern JavaScript, React, Next.js, and MongoDB, with practical projects.",
    es: "Curso intensivo en línea con enfoque en JavaScript moderno, React, Next.js y MongoDB, con proyectos prácticos."
  },
  "portfolio-title": {
    pt: "Meus Projetos",
    en: "My Projects",
    es: "Mis Proyectos"
  },
  "project-1-title": {
    pt: "Hotel Sol&Mar </br> Gerenciamento de Reservas de Hotel em <u>PHP</u>",
    en: "Hotel Sol&Mar </br> Hotel Booking Management in <u>PHP</u>",
    es: "Hotel Sol&Mar </br> Gestión de Reservas de Hotel en <u>PHP</u>"
  },
  "project-2-title": {
    pt: "Ecommerce de </br> Produtos de Limpeza",
    en: "Ecommerce for </br> Cleaning Products",
    es: "Ecommerce de </br> Productos de Limpieza"
  },
  "project-3-title": {
    pt: "Projeto Barbershop",
    en: "Barbershop Project",
    es: "Proyecto Barbershop"
  },
  "project-github": {
    pt: "Github",
    en: "Github",
    es: "Github"
  },
  "project-visit": {
    pt: "Visitar",
    en: "Visit",
    es: "Visitar"
  },
  "brands-title": {
    pt: "Tecnologias Utilizadas",
    en: "Technologies Used",
    es: "Tecnologías Utilizadas"
  },
  "contact-title": {
    pt: "Envie-me Uma Mensagem",
    en: "Send Me a Message",
    es: "Envíame un Mensaje"
  },
  "contact-description": {
    pt: "Você pode usar este espaço para enviar-me uma mensagem, <br>ao clicar em enviar mensagem, sua mensagem será direcionada para meu Whatsapp.",
    en: "You can use this space to send me a message, <br>by clicking send message, your message will be directed to my WhatsApp.",
    es: "Puedes usar este espacio para enviarme un mensaje, <br>al hacer clic en enviar mensaje, tu mensaje será dirigido a mi WhatsApp."
  },
  "contact-submit": {
    pt: "Enviar Mensagem",
    en: "Send Message",
    es: "Enviar Mensaje"
  },
  "footer-copyright": {
    pt: "&copy; SuzySoares",
    en: "&copy; SuzySoares",
    es: "&copy; SuzySoares"
  }
};

// Função para envolver a primeira palavra em um span
function wrapFirstWord(text) {
  const words = text.split(" ");
  if (words.length > 1) {
    return `<span>${words[0]}</span> ${words.slice(1).join(" ")}`;
  }
  return text;
}

// Função para atualizar o idioma
function setLanguage(lang) {
  // Atualizar o atributo lang da tag <html>
  document.documentElement.lang = lang;

  // Atualizar todos os elementos com data-i18n
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (translations[key] && translations[key][lang]) {
      // Aplicar span na primeira palavra para títulos específicos
      if (["about-title", "portfolio-title", "brands-title", "contact-title"].includes(key)) {
        element.innerHTML = wrapFirstWord(translations[key][lang]);
      } else {
        element.innerHTML = translations[key][lang];
      }
    }
  });

  // Atualizar o título da página
  const titleKey = document.querySelector("title").getAttribute("data-i18n");
  if (translations[titleKey] && translations[titleKey][lang]) {
    document.title = translations[titleKey][lang];
  }

  // Atualizar o efeito de digitação
  startTypingEffect(lang);

  // Atualizar o toggle do idioma
  const flagImages = {
    pt: "/images/bandeira-pt.png",
    en: "/images/bandeira-en.png",
    es: "/images/bandeira-es.png"
  };
  const langNames = {
    pt: "PT",
    en: "EN",
    es: "ES"
  };
  document.getElementById("current-flag").src = flagImages[lang];
  document.getElementById("current-flag").alt = `Bandeira de ${lang === "pt" ? "Portugal" : lang === "en" ? "Reino Unido" : "Espanha"}`;
  document.getElementById("current-lang").textContent = langNames[lang];

  // Salvar a escolha do idioma no localStorage
  localStorage.setItem("language", lang);
}

// Função para o efeito de digitação
function startTypingEffect(lang) {
  const typingElement = document.getElementById("typing-text");
  const text = translations["typing-text"][lang];
  let index = 0;

  // Limpar o texto atual e reiniciar o índice
  typingElement.innerHTML = "";
  clearTimeout(window.typingTimeout);

  function typeEffect() {
    if (index < text.length) {
      typingElement.innerHTML += text.charAt(index);
      index++;
      window.typingTimeout = setTimeout(typeEffect, 60);
    }
  }

  typeEffect();
}

// Funcionalidades do site
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar o idioma
  const savedLang = localStorage.getItem("language") || "pt";
  setLanguage(savedLang);

  // Evento do menu de navegação
  document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector("ul.menu").classList.toggle("show");
  });

  // Evento do formulário de contato
  const whatsappNumber = "+351967578514";
  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const message = document.getElementById("message").value;
    const whatsappMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    window.open(whatsappLink, "_blank");
  });

  // Duplicação da seção de marcas
  const brands = document.querySelector(".brands");
  const clone = brands.innerHTML;
  brands.innerHTML += clone;

  // Eventos do menu de idiomas
  const toggle = document.getElementById("language-toggle");
  const dropdown = document.getElementById("language-dropdown");

  // Abrir/fechar dropdown ao clicar
  toggle.addEventListener("click", () => {
    const isOpen = dropdown.classList.toggle("active");
    toggle.setAttribute("aria-expanded", isOpen);
    dropdown.setAttribute("aria-hidden", !isOpen);
  });

  // Selecionar idioma no dropdown
  dropdown.querySelectorAll("li").forEach(item => {
    item.addEventListener("click", () => {
      const lang = item.getAttribute("data-lang");
      setLanguage(lang);
      dropdown.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
      dropdown.setAttribute("aria-hidden", "true");
    });
  });

  // Suporte a teclado (Enter ou Espaço para abrir/fechar)
  toggle.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      const isOpen = dropdown.classList.toggle("active");
      toggle.setAttribute("aria-expanded", isOpen);
      dropdown.setAttribute("aria-hidden", !isOpen);
    }
  });

  // Fechar dropdown ao clicar fora
  document.addEventListener("click", (event) => {
    if (!toggle.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
      dropdown.setAttribute("aria-hidden", "true");
    }
  });
});