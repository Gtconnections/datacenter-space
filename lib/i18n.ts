export type Lang = "es" | "en";

export const dict: Record<Lang, LangDict> = {
  es: {
    nav: {
      vision: "Visión",
      tech: "Tecnología",
      how: "Cómo funciona",
      token: "Tokenización",
      contact: "Contacto",
      cta: "Invertir",
    },
    hero: {
      badge: "Infraestructura de cómputo orbital",
      title: "Data centers en órbita,",
      titleAccent: "impulsados por el sol",
      subtitle:
        "Space DC lleva servidores de alto rendimiento al espacio, alimentados por energía solar continua y autosustentable. Cómputo global, sin límites térmicos ni de red eléctrica terrestre.",
      ctaPrimary: "Quiero invertir",
      ctaSecondary: "Conocer el proyecto",
      stat1Label: "Energía solar disponible",
      stat1Value: "24/7",
      stat2Label: "Escalabilidad",
      stat2Value: "Terawatt-class",
      stat3Label: "Latencia global",
      stat3Value: "Órbita baja",
    },
    vision: {
      kicker: "La visión",
      title: "El próximo salto de la infraestructura digital",
      body:
        "La demanda de cómputo crece más rápido que la capacidad de la Tierra para alimentarla y enfriarla. Space DC traslada esa carga al lugar con más energía y mejor disipación del sistema solar: la órbita. Servidores autosustentables, alimentados por el sol y refrigerados por el vacío, disponibles para el mundo entero.",
      point1Title: "Energía sin fin",
      point1Body:
        "En órbita el sol no se pone. Paneles solares de alta eficiencia alimentan los racks de forma continua y autosustentable.",
      point2Title: "Refrigeración natural",
      point2Body:
        "El vacío y el frío del espacio disipan el calor sin torres de enfriamiento ni consumo de agua.",
      point3Title: "Alcance planetario",
      point3Body:
        "Enlaces ópticos y de radio conectan las estaciones orbitales con centros terrestres en tiempo casi real.",
    },
    tech: {
      kicker: "La tecnología",
      title: "Infraestructura diseñada para el espacio",
      body:
        "Cada módulo es una estación de cómputo independiente: racks de servidores, arreglos solares desplegables, gestión térmica pasiva y enlaces de comunicación redundantes. Modular, reparable y escalable lanzamiento tras lanzamiento.",
      f1Title: "Racks orbitales",
      f1Body: "Servidores de alto rendimiento en chasis endurecido para radiación y microgravedad.",
      f2Title: "Arreglos solares",
      f2Body: "Paneles desplegables que garantizan energía autosustentable a escala de terawatts.",
      f3Title: "Enlace con la Tierra",
      f3Body: "Comunicación óptica de alta capacidad para contactar con nosotros desde el suelo.",
      f4Title: "Autonomía total",
      f4Body: "Sistemas autónomos de orientación, energía y disipación térmica sin intervención humana.",
    },
    how: {
      kicker: "Cómo funciona",
      title: "De la Tierra a la órbita, paso a paso",
      step1Title: "Formamos el equipo",
      step1Body: "Reunimos a ingenieros, científicos y socios estratégicos para diseñar cada estación.",
      step2Title: "Alianza de lanzamiento",
      step2Body: "Nos conectamos con la empresa que envía los módulos al espacio de forma segura.",
      step3Title: "Despliegue en órbita",
      step3Body: "Los data centers se activan, despliegan sus paneles y comienzan a operar con energía solar.",
      step4Title: "Enlace con nosotros",
      step4Body: "Establecemos el contacto desde la Tierra para operar, monitorear y ofrecer el servicio.",
    },
    token: {
      kicker: "Tokenización",
      title: "Cómputo orbital, tokenizado",
      body:
        "La capacidad de cada estación puede tokenizarse: un modelo transparente y verificable para participar del rendimiento de la infraestructura orbital. Democratizamos el acceso a la próxima gran clase de activos: el cómputo en el espacio.",
      point1: "Participación fraccionada en la capacidad de cómputo",
      point2: "Trazabilidad y transparencia on-chain",
      point3: "Liquidez para un activo de infraestructura real",
    },
    stats: {
      title: "Una nueva clase de infraestructura",
      s1Value: "100%",
      s1Label: "Energía solar autosustentable",
      s2Value: "0",
      s2Label: "Consumo de agua para enfriar",
      s3Value: "24/7",
      s3Label: "Operación continua en órbita",
      s4Value: "∞",
      s4Label: "Escalabilidad lanzamiento a lanzamiento",
    },
    contact: {
      kicker: "Contacto",
      title: "Sé parte del futuro del cómputo",
      body:
        "Buscamos inversores, socios estratégicos y visionarios. Déjanos tus datos y nuestro equipo te contactará.",
      name: "Nombre",
      email: "Correo electrónico",
      company: "Empresa / Organización",
      phone: "Teléfono",
      interest: "Tipo de interés",
      interestOptions: ["Inversión", "Alianza estratégica", "Prensa", "Otro"],
      interestPlaceholder: "Selecciona una opción",
      message: "Mensaje",
      messagePlaceholder: "Cuéntanos sobre tu interés en Space DC...",
      submit: "Enviar mensaje",
      sending: "Enviando...",
      success: "¡Gracias! Hemos recibido tu mensaje. Te contactaremos pronto.",
      error: "Hubo un problema al enviar. Inténtalo de nuevo o escríbenos directamente.",
      required: "Este campo es obligatorio",
      invalidEmail: "Ingresa un correo válido",
    },
    footer: {
      tagline: "Impulsando el futuro del cómputo, en órbita.",
      rights: "Todos los derechos reservados.",
      nav: "Navegación",
      contact: "Contacto",
    },
  },
  en: {
    nav: {
      vision: "Vision",
      tech: "Technology",
      how: "How it works",
      token: "Tokenization",
      contact: "Contact",
      cta: "Invest",
    },
    hero: {
      badge: "Orbital compute infrastructure",
      title: "Data centers in orbit,",
      titleAccent: "powered by the sun",
      subtitle:
        "Space DC brings high-performance servers to space, powered by continuous, self-sustaining solar energy. Global compute, free from Earth's thermal and power-grid limits.",
      ctaPrimary: "I want to invest",
      ctaSecondary: "Explore the project",
      stat1Label: "Solar energy available",
      stat1Value: "24/7",
      stat2Label: "Scalability",
      stat2Value: "Terawatt-class",
      stat3Label: "Global latency",
      stat3Value: "Low orbit",
    },
    vision: {
      kicker: "The vision",
      title: "The next leap in digital infrastructure",
      body:
        "Demand for compute is growing faster than Earth's ability to power and cool it. Space DC moves that load to where the solar system has the most energy and the best heat dissipation: orbit. Self-sustaining servers, powered by the sun and cooled by the vacuum, available to the entire world.",
      point1Title: "Endless energy",
      point1Body:
        "In orbit the sun never sets. High-efficiency solar arrays power the racks continuously and self-sufficiently.",
      point2Title: "Natural cooling",
      point2Body:
        "The vacuum and cold of space dissipate heat with no cooling towers and zero water usage.",
      point3Title: "Planetary reach",
      point3Body:
        "Optical and radio links connect orbital stations with ground centers in near real time.",
    },
    tech: {
      kicker: "The technology",
      title: "Infrastructure built for space",
      body:
        "Each module is a self-contained compute station: server racks, deployable solar arrays, passive thermal management and redundant communication links. Modular, serviceable and scalable launch after launch.",
      f1Title: "Orbital racks",
      f1Body: "High-performance servers in chassis hardened for radiation and microgravity.",
      f2Title: "Solar arrays",
      f2Body: "Deployable panels delivering self-sustaining, terawatt-class energy.",
      f3Title: "Link to Earth",
      f3Body: "High-capacity optical communication to reach us from the ground.",
      f4Title: "Full autonomy",
      f4Body: "Autonomous attitude, power and thermal systems with no human intervention.",
    },
    how: {
      kicker: "How it works",
      title: "From Earth to orbit, step by step",
      step1Title: "We build the team",
      step1Body: "We gather engineers, scientists and strategic partners to design each station.",
      step2Title: "Launch partnership",
      step2Body: "We connect with the company that safely delivers the modules to space.",
      step3Title: "Orbital deployment",
      step3Body: "The data centers activate, unfold their panels and start operating on solar power.",
      step4Title: "Link back to us",
      step4Body: "We establish contact from Earth to operate, monitor and deliver the service.",
    },
    token: {
      kicker: "Tokenization",
      title: "Orbital compute, tokenized",
      body:
        "Each station's capacity can be tokenized: a transparent, verifiable model to participate in the yield of orbital infrastructure. We democratize access to the next great asset class: compute in space.",
      point1: "Fractional participation in compute capacity",
      point2: "On-chain traceability and transparency",
      point3: "Liquidity for a real infrastructure asset",
    },
    stats: {
      title: "A new class of infrastructure",
      s1Value: "100%",
      s1Label: "Self-sustaining solar energy",
      s2Value: "0",
      s2Label: "Water used for cooling",
      s3Value: "24/7",
      s3Label: "Continuous operation in orbit",
      s4Value: "∞",
      s4Label: "Scalability launch after launch",
    },
    contact: {
      kicker: "Contact",
      title: "Be part of the future of compute",
      body:
        "We're looking for investors, strategic partners and visionaries. Leave your details and our team will reach out.",
      name: "Name",
      email: "Email",
      company: "Company / Organization",
      phone: "Phone",
      interest: "Interest",
      interestOptions: ["Investment", "Strategic partnership", "Press", "Other"],
      interestPlaceholder: "Select an option",
      message: "Message",
      messagePlaceholder: "Tell us about your interest in Space DC...",
      submit: "Send message",
      sending: "Sending...",
      success: "Thank you! We received your message and will be in touch soon.",
      error: "Something went wrong. Please try again or email us directly.",
      required: "This field is required",
      invalidEmail: "Enter a valid email",
    },
    footer: {
      tagline: "Powering the future of compute, in orbit.",
      rights: "All rights reserved.",
      nav: "Navigation",
      contact: "Contact",
    },
  },
};

export type LangDict = {
  nav: {
    vision: string;
    tech: string;
    how: string;
    token: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stat1Label: string;
    stat1Value: string;
    stat2Label: string;
    stat2Value: string;
    stat3Label: string;
    stat3Value: string;
  };
  vision: {
    kicker: string;
    title: string;
    body: string;
    point1Title: string;
    point1Body: string;
    point2Title: string;
    point2Body: string;
    point3Title: string;
    point3Body: string;
  };
  tech: {
    kicker: string;
    title: string;
    body: string;
    f1Title: string;
    f1Body: string;
    f2Title: string;
    f2Body: string;
    f3Title: string;
    f3Body: string;
    f4Title: string;
    f4Body: string;
  };
  how: {
    kicker: string;
    title: string;
    step1Title: string;
    step1Body: string;
    step2Title: string;
    step2Body: string;
    step3Title: string;
    step3Body: string;
    step4Title: string;
    step4Body: string;
  };
  token: {
    kicker: string;
    title: string;
    body: string;
    point1: string;
    point2: string;
    point3: string;
  };
  stats: {
    title: string;
    s1Value: string;
    s1Label: string;
    s2Value: string;
    s2Label: string;
    s3Value: string;
    s3Label: string;
    s4Value: string;
    s4Label: string;
  };
  contact: {
    kicker: string;
    title: string;
    body: string;
    name: string;
    email: string;
    company: string;
    phone: string;
    interest: string;
    interestOptions: string[];
    interestPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    required: string;
    invalidEmail: string;
  };
  footer: {
    tagline: string;
    rights: string;
    nav: string;
    contact: string;
  };
};

export type Dict = LangDict;
