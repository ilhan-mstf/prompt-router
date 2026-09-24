export default {
  "dev": [
    {
      "cat": "Depuración",
      "prompts": [
        {
          "title": "Encontrar el error",
          "text": "Aquí está mi código. No funciona como se esperaba.\n\n[pega el código aquí]\n\nEl error o problema: [descríbelo]\n\nEncuentra el error, explica por qué ocurre y muestra la solución."
        },
        {
          "title": "Explicar este error",
          "text": "Estoy recibiendo este error:\n\n[pega el mensaje de error]\n\nAquí está el código relevante:\n\n[pega el código aquí]\n\nExplica qué está causando este error y cómo solucionarlo."
        },
        {
          "title": "Depurar problema de rendimiento",
          "text": "Este código se ejecuta más lento de lo esperado:\n\n[pega el código aquí]\n\nAnaliza la lógica del rendimiento, identifica cuellos de botella y sugiere optimizaciones específicas con ejemplos de antes y después."
        },
        {
          "title": "Corregir prueba fallida",
          "text": "Esta prueba está fallando:\n\n[pega el código de la prueba]\n\nSalida del error:\n\n[pega el error]\n\nAquí está la implementación que prueba:\n\n[pega el código]\n\nExplica por qué falla la prueba y cómo solucionarla."
        }
      ]
    },
    {
      "cat": "Revisión de código",
      "prompts": [
        {
          "title": "Revisar errores y calidad",
          "text": "Revisa este código en busca de errores, casos extremos y problemas de calidad de código. Sé específico sobre qué está mal y sugiere correcciones:\n\n[pega el código aquí]"
        },
        {
          "title": "Revisión de seguridad",
          "text": "Revisa este código en busca de vulnerabilidades de seguridad (inyecciones, problemas de autenticación, exposición de datos, top 10 de OWASP). Califica la gravedad y sugiere correcciones:\n\n[pega el código aquí]"
        },
        {
          "title": "Revisar diff de PR",
          "text": "Aquí tienes un diff de pull request (PR). Revísalo en busca de corrección, estilo, rendimiento y posibles problemas. Sé conciso y directo a la acción:\n\n[pega el diff aquí]"
        },
        {
          "title": "Sugerir mejoras",
          "text": "Revisa este código y sugiere mejoras de legibilidad, mantenibilidad y estilo idiomático. Mantén la misma funcionalidad:\n\n[pega el código aquí]"
        }
      ]
    },
    {
      "cat": "Refactorización",
      "prompts": [
        {
          "title": "Refactorizar para mayor legibilidad",
          "text": "Refactoriza este código para que sea más legible y fácil de mantener. Mantén el mismo comportamiento. Explica cada cambio que realices:\n\n[pega el código aquí]"
        },
        {
          "title": "Extraer lógica reutilizable",
          "text": "Este código contiene lógica duplicada o fuertemente acoplada. Extrae funciones o módulos reutilizables manteniendo el mismo comportamiento:\n\n[pega el código aquí]"
        },
        {
          "title": "Convertir a async/await",
          "text": "Convierte este código basado en callbacks o encadenamiento de promesas para que use async/await. Maneja los errores adecuadamente:\n\n[pega el código aquí]"
        },
        {
          "title": "Simplificar función compleja",
          "text": "Esta función es demasiado compleja. Divídela en funciones más pequeñas y bien nombradas. Mantén las mismas entradas y salidas:\n\n[pega el código aquí]"
        }
      ]
    },
    {
      "cat": "Pruebas",
      "prompts": [
        {
          "title": "Escribir pruebas unitarias",
          "text": "Escribe pruebas unitarias exhaustivas para esta función. Cubre casos exitosos, casos extremos y escenarios de error. Usa [framework de pruebas]:\n\n[pega el código aquí]"
        },
        {
          "title": "Escribir prueba de integración",
          "text": "Escribe una prueba de integración para esta funcionalidad. Debe probar el flujo completo desde [inicio] hasta [fin]:\n\n[pega el código/API aquí]\n\nUsa [framework de pruebas]."
        },
        {
          "title": "Generar casos de prueba",
          "text": "Enumera todos los casos de prueba que debería escribir para esta función. Agrúpalos por: casos exitosos, casos extremos, manejo de errores y condiciones límite:\n\n[pega el código aquí]"
        },
        {
          "title": "Aumentar cobertura de pruebas",
          "text": "Este código no tiene pruebas. Analízalo, identifica las rutas más críticas y escribe pruebas en orden de prioridad. Usa [framework de pruebas]:\n\n[pega el código aquí]"
        }
      ]
    },
    {
      "cat": "Arquitectura",
      "prompts": [
        {
          "title": "Diseñar un esquema de base de datos",
          "text": "Diseña un esquema de base de datos para [describe tu aplicación/funcionalidad]. Incluye tablas, columnas, tipos, relaciones e índices. Explica tus decisiones de diseño."
        },
        {
          "title": "Diseñar una API",
          "text": "Diseña una API REST para [funcionalidad/recurso]. Incluye endpoints, métodos, esquemas de solicitud/respuesta, códigos de estado y autenticación. Sigue las mejores prácticas."
        },
        {
          "title": "Comparar enfoques",
          "text": "Necesito decidir entre estos enfoques para [problema]:\n\nOpción A: [describir]\nOpción B: [describir]\n\nCompáralos en cuanto a: rendimiento, mantenibilidad, complejidad y escalabilidad. Recomienda uno fundamentando la decisión."
        },
        {
          "title": "Diseño de sistemas",
          "text": "Diseña un sistema para [describe el caso de uso]. Cubre: arquitectura de alto nivel, flujo de datos, almacenamiento, estrategia de caché y cómo escala. Identifica posibles cuellos de botella."
        }
      ]
    },
    {
      "cat": "DevOps",
      "prompts": [
        {
          "title": "Escribir un Dockerfile",
          "text": "Escribe un Dockerfile listo para producción para este proyecto:\n\nLenguaje/framework: [ej. Node.js, Python Flask]\nRequisitos: [ej. compilación multietapa (multi-stage), usuario sin privilegios root]\n\nIncluye mejores prácticas de seguridad y optimización del tamaño de imagen."
        },
        {
          "title": "Pipeline de CI/CD",
          "text": "Escribe un flujo de trabajo de GitHub Actions que realice lo siguiente:\n\n1. [enumera los pasos, ej. lint, test, build, deploy]\n\nLenguaje/framework: [especificar]\nDestino de despliegue: [ej. AWS, Vercel, Docker Hub]\n\nIncluye almacenamiento en caché y disparadores adecuados."
        },
        {
          "title": "Depurar fallo en CI",
          "text": "Mi pipeline de CI está fallando. Aquí está el registro de salida (log):\n\n[pega el log de CI]\n\nLa configuración del pipeline:\n\n[pega la configuración]\n\nIdentifica el problema y sugiere una solución."
        },
        {
          "title": "Infraestructura como código",
          "text": "Escribe la configuración de [Terraform/CloudFormation/Pulumi] para:\n\n[describe la infraestructura, ej. un bucket de S3 con CloudFront, una VPC con subredes]\n\nSigue las mejores prácticas de seguridad y añade comentarios explicando cada recurso."
        }
      ]
    },
    {
      "cat": "Git y Documentación",
      "prompts": [
        {
          "title": "Escribir mensaje de commit",
          "text": "Escribe un mensaje de commit claro siguiendo conventional commits para este diff. Usa el formato: tipo(alcance): descripción. Sé conciso pero descriptivo:\n\n[pega el diff aquí]"
        },
        {
          "title": "Escribir README",
          "text": "Genera un archivo README.md para este proyecto. Incluye: qué hace, cómo instalarlo, cómo usarlo, opciones de configuración y cómo contribuir:\n\n[pega la estructura del proyecto o el archivo principal aquí]"
        },
        {
          "title": "Documentar este código",
          "text": "Añade documentación clara y concisa a este código. Incluye docstrings para funciones/métodos, descripciones de parámetros, valores de retorno y ejemplos de uso:\n\n[pega el código aquí]"
        },
        {
          "title": "Escribir entrada para changelog",
          "text": "Escribe una entrada de registro de cambios (changelog) para estos cambios. Agrupa por: Agregado, Modificado, Corregido, Eliminado. Usa un lenguaje claro orientado al usuario:\n\n[pega el diff o la lista de cambios]"
        }
      ]
    }
  ],
  "writing": [
    {
      "cat": "Blogs y Artículos",
      "prompts": [
        {
          "title": "Crear esquema para artículo de blog",
          "text": "Crea un esquema detallado para un artículo de blog sobre el tema: [tema]\n\nPúblico objetivo: [describe la audiencia]\nTono: [ej. informativo, conversacional, con autoridad]\nNúmero de palabras objetivo: [ej. 1500 palabras]\n\nIncluye: un título atractivo, un gancho inicial, de 4 a 6 secciones principales con subpuntos y una conclusión con un llamado a la acción claro."
        },
        {
          "title": "Mejorar introducción de artículo",
          "text": "Reescribe la introducción de este artículo para que enganche de inmediato al lector. La introducción actual es:\n\n[pega la introducción aquí]\n\nEl artículo trata sobre: [tema]\nLector objetivo: [describe la audiencia]\n\nHaz que la nueva introducción sea atractiva, específica y de menos de 100 palabras. Ofrece 3 variaciones."
        },
        {
          "title": "Generar ideas para artículos de blog",
          "text": "Genera 10 ideas de artículos de blog para [describe el blog/marca] dirigido a [audiencia].\n\nÁrea de enfoque: [ej. productividad, marketing SaaS, finanzas personales]\n\nPara cada idea, incluye: un título provisional, el ángulo o gancho central y para quién es más útil. Prioriza temas específicos, aplicables y con buen potencial de posicionamiento."
        },
        {
          "title": "Escribir una conclusión contundente",
          "text": "Escribe una conclusión para este artículo de blog:\n\nTema: [tema]\nPuntos clave cubiertos: [resume los puntos principales]\nAcción deseada tras la lectura: [ej. suscribirse, compartir, probar el producto]\n\nLa conclusión debe recapitular la idea central, brindar sensación de cierre y finalizar con un llamado a la acción claro y natural."
        }
      ]
    },
    {
      "cat": "Redes Sociales",
      "prompts": [
        {
          "title": "Escribir un hilo de X (Twitter)",
          "text": "Escribe un hilo de Twitter/X sobre: [tema]\n\nAudiencia: [describir]\nObjetivo: [ej. educar, generar tráfico, construir autoridad]\nNúmero de publicaciones: [ej. 8–10]\n\nComienza con un tweet gancho potente, divide el tema en puntos digeribles y termina con un llamado a la acción claro. Mantén cada tweet por debajo de los 280 caracteres. Usa saltos de línea para mejorar la legibilidad."
        },
        {
          "title": "Escribir una publicación de LinkedIn",
          "text": "Escribe una publicación de LinkedIn sobre: [tema o experiencia]\n\nTono: [ej. reflexivo, directo, basado en historias]\nObjetivo: [ej. compartir una lección, generar comentarios, generar credibilidad]\n\nComienza con una frase gancho que detenga el scroll. Usa párrafos cortos. Incluye un ángulo o aprendizaje personal. Finaliza con una pregunta para fomentar comentarios. Apunta a entre 150 y 250 palabras."
        },
        {
          "title": "Escribir texto para pie de foto en Instagram",
          "text": "Escribe un pie de foto para una publicación de Instagram sobre: [describe la imagen/tema]\n\nVoz de marca: [ej. divertida, inspiradora, minimalista]\nObjetivo: [ej. aumentar guardados, visitas al perfil, vender un producto]\n\nIncluye: una frase de apertura atractiva, 2 o 3 oraciones de texto explicativo, un llamado a la acción y de 5 a 10 hashtags relevantes."
        },
        {
          "title": "Calendario de contenidos para redes sociales",
          "text": "Crea un calendario de contenidos para redes sociales de 2 semanas para [marca/creador] publicando en [plataformas, ej. LinkedIn e Instagram].\n\nNicho: [área temática]\nObjetivo: [ej. conseguir seguidores, generar tráfico, lanzar un producto]\nFrecuencia de publicación: [ej. 3 veces por semana por plataforma]\n\nPara cada publicación incluye: fecha, plataforma, tipo de contenido (ej. consejo, historia, promoción) y una descripción en una sola línea de la idea de la publicación."
        }
      ]
    },
    {
      "cat": "Correo Electrónico",
      "prompts": [
        {
          "title": "Escribir un correo en frío",
          "text": "Escribe un correo de prospección en frío para la siguiente situación:\n\nRemitente: [tu nombre/cargo/empresa]\nDestinatario: [puesto o perfil de la persona]\nObjetivo: [ej. agendar una llamada, obtener una recomendación, proponer una colaboración]\nContexto: [cualquier detalle relevante sobre por qué te pones en contacto]\n\nMantenlo por debajo de 150 palabras. Comienza aportando valor o relevancia, no presentándote a ti mismo. Incluye un llamado a la acción de baja fricción."
        },
        {
          "title": "Escribir introducción para newsletter",
          "text": "Escribe una introducción para la newsletter de esta semana.\n\nNombre / temática de la newsletter: [describir]\nEsta edición trata sobre: [tema o cuestión principal]\nAudiencia: [describe a los suscriptores]\nTono: [ej. cercano, ingenioso, conciso]\n\nLa introducción debe sentirse personal, anticipar el contenido interior e incitar al lector a seguir leyendo. Mantenla por debajo de 80 palabras."
        },
        {
          "title": "Escribir correo de seguimiento",
          "text": "Escribe un correo de seguimiento para esta situación:\n\nContexto original: [describe la primera interacción — ej. una llamada de ventas, una entrevista de trabajo, una propuesta enviada]\nTiempo desde el último contacto: [ej. 5 días]\nObjetivo del seguimiento: [ej. obtener una decisión, retomar el contacto, confirmar los siguientes pasos]\n\nSé cordial pero directo. Menciona brevemente la conversación anterior. Haz que sea muy fácil responder. Mantenlo por debajo de 100 palabras."
        },
        {
          "title": "Escribir un correo difícil",
          "text": "Ayúdame a redactar un correo profesional para una situación delicada:\n\nSituación: [describe — ej. disculparse por no cumplir un plazo, rechazar una solicitud, comunicar malas noticias]\nDestinatario: [describe la relación — ej. cliente, responsable directo, colega]\nResultado deseado: [lo que deseas que ocurra tras su lectura]\n\nSé honesto, asume la responsabilidad cuando corresponda y mantén un tono constructivo. Evita ponerte a la defensiva o disculparte en exceso."
        }
      ]
    },
    {
      "cat": "Copywriting",
      "prompts": [
        {
          "title": "Escribir descripción de producto",
          "text": "Escribe una descripción de producto convincente para:\n\nNombre del producto: [nombre]\nQué hace: [describir]\nCaracterísticas principales: [enumera de 3 a 5]\nCliente objetivo: [describir]\nTono: [ej. premium, divertido, técnico]\n\nEnfócate en los beneficios antes que en las características. Destaca el valor principal. Mantenlo por debajo de 120 palabras y termina con un impulso natural hacia la compra."
        },
        {
          "title": "Titular y subtítulo para landing page",
          "text": "Escribe 5 combinaciones de titular y subtítulo para una landing page.\n\nProducto/servicio: [describir]\nPúblico objetivo: [describir]\nPropuesta de valor central: [qué problema resuelve o qué resultado ofrece]\nTono: [ej. audaz, tranquilizador, ingenioso]\n\nCada titular debe ser claro, específico y centrado en los beneficios. El subtítulo debe ampliar la idea, responder a una objeción o añadir credibilidad."
        },
        {
          "title": "Escribir variaciones de llamados a la acción",
          "text": "Escribe 10 variaciones de texto para botones de llamado a la acción (CTA) para:\n\nProducto/servicio: [describir]\nObjetivo del CTA: [ej. iniciar prueba gratuita, reservar demo, descargar guía]\nTono: [ej. orientado a la acción, sin presión, curioso]\n\nVaría el enfoque: prueba con urgencia, beneficios directos, curiosidad y prueba social. Mantén cada opción en menos de 6 palabras cuando sea posible."
        },
        {
          "title": "Reescritura con tono de marca",
          "text": "Reescribe el siguiente texto para adaptarlo a la voz de nuestra marca.\n\nTexto original:\n[pega el texto aquí]\n\nLa voz de nuestra marca es: [describe — ej. segura pero accesible, experta pero sin tecnicismos innecesarios, cercana e ingeniosa]\nAudiencia: [describir]\n\nMantén intacto el mensaje central pero ajusta el tono, la elección de palabras y la estructura de las oraciones para reflejar esa voz. Muestra el antes y el después."
        }
      ]
    },
    {
      "cat": "Edición y Corrección",
      "prompts": [
        {
          "title": "Simplificar texto complejo",
          "text": "Simplifica el siguiente texto para que sea fácil de entender para un público general sin conocimientos previos sobre el tema.\n\n[pega el texto aquí]\n\nEvita tecnicismos. Usa oraciones cortas. Sustituye términos técnicos por un lenguaje sencillo. Conserva el significado original y toda la información clave. Apunta a un nivel de lectura accesible."
        },
        {
          "title": "Corregir tono y estilo",
          "text": "Edita el siguiente texto para mejorar su tono y estilo.\n\nTexto actual:\n[pega el texto aquí]\n\nEl tono debe ser: [ej. más seguro, menos formal, más cálido, más conciso]\nMantén intactos el significado y los datos. Muestra la versión revisada y explica brevemente los cambios principales que realizaste."
        },
        {
          "title": "Reducir a un límite de palabras",
          "text": "Acorta el siguiente texto a aproximadamente [número de palabras objetivo] palabras sin perder el mensaje clave ni cambiar su significado.\n\n[pega el texto aquí]\n\nPrioriza eliminar: frases de relleno, oraciones redundantes y explicaciones excesivas. Conserva los puntos más importantes, los ejemplos más claros y el lenguaje más contundente."
        },
        {
          "title": "Corregir y mejorar texto",
          "text": "Revisa y corrige el siguiente texto y sugiere mejoras.\n\n[pega el texto aquí]\n\nVerifica: errores ortográficos y gramaticales, frases poco naturales, oraciones confusas e inconsistencias de tono. Presenta la versión corregida seguida de una breve lista de los cambios realizados y su motivo."
        }
      ]
    },
    {
      "cat": "Escritura Creativa",
      "prompts": [
        {
          "title": "Escribir el inicio de un relato corto",
          "text": "Escribe los primeros 3 párrafos de un relato corto con los siguientes detalles:\n\nGénero: [ej. ficción literaria, ciencia ficción, thriller]\nAmbientación: [describe época y lugar]\nPersonaje principal: [breve descripción]\nSituación o conflicto inicial: [describir]\nAmbiente/tono: [ej. tenso, melancólico, esperanzador]\n\nEmpieza en medio de la acción o en un momento vívido. Engancha al lector de inmediato. Evita introducciones innecesarias."
        },
        {
          "title": "Generar diálogo entre personajes",
          "text": "Escribe una escena de diálogo entre dos personajes:\n\nPersonaje A: [nombre, breve descripción, su objetivo en esta escena]\nPersonaje B: [nombre, breve descripción, su objetivo en esta escena]\nSituación: [describe qué está sucediendo y dónde]\nTensión subyacente: [lo que realmente está en juego o no se dice]\n\nHaz que el diálogo suene natural y revelador. Cada personaje debe tener una voz propia y distintiva. Muestra el subtexto: lo que quieren decir frente a lo que dicen con palabras."
        },
        {
          "title": "Crear metáforas y analogías",
          "text": "Genera 8 metáforas o analogías originales para explicar el siguiente concepto:\n\nConcepto: [describe la idea, proceso o cosa]\nAudiencia: [quién necesita comprenderlo]\nContexto: [dónde se utilizará — ej. un artículo de blog, un discurso, una explicación de producto]\n\nBusca una variedad de estilos: algunas visuales, otras emocionales, otras con humor. Evita clichés. Para cada una, añade una breve nota indicando en qué contexto funciona mejor."
        },
        {
          "title": "Reescribir en un estilo diferente",
          "text": "Reescribe el siguiente texto al estilo de [nombre de autor o descripción de estilo, ej. Ernest Hemingway, novelista victoriano, publicación de redes sociales para la Generación Z].\n\nTexto original:\n[pega el texto aquí]\n\nCapta la voz, el ritmo de las oraciones, el vocabulario y los patrones estructurales de ese estilo. Mantén el contenido principal y su significado. Muestra únicamente la versión reescrita."
        }
      ]
    }
  ],
  "marketing": [
    {
      "cat": "Planificación de Campañas",
      "prompts": [
        {
          "title": "Planificar campaña de marketing",
          "text": "Ayúdame a planificar una campaña de marketing para [producto/servicio].\n\nPúblico objetivo: [describir]\nObjetivo: [ej. clientes potenciales (leads), registros, notoriedad de marca]\nRango de presupuesto: [importe]\nCronograma: [duración]\n\nDescribe la estrategia de campaña, los mensajes clave, canales, hitos y métricas de éxito."
        },
        {
          "title": "Crear calendario de contenidos",
          "text": "Crea un calendario de contenidos de [30/60/90] días para [marca/producto].\n\nAudiencia: [describir]\nCanales: [ej. LinkedIn, email, blog, Instagram]\nEjes temáticos: [enumera los que haya]\nObjetivo de frecuencia de publicación: [ej. 3 veces por semana]\n\nIncluye tipos de contenido, temas y un cronograma de publicación sugerido."
        },
        {
          "title": "Definir buyer persona de la audiencia objetivo",
          "text": "Crea un buyer persona detallado de marketing para [producto/servicio].\n\nLo que sabemos hasta ahora: [describe tu cliente actual o hipótesis iniciales]\n\nIncluye: datos demográficos, puesto laboral, metas, puntos de dolor, objeciones, canales preferidos y cómo toma decisiones de compra."
        },
        {
          "title": "Análisis post-mortem de campaña",
          "text": "Ayúdame a redactar un análisis post-mortem de una campaña de marketing.\n\nObjetivo de la campaña: [ej. conseguir 500 leads]\nResultado real: [qué ocurrió]\nCanales utilizados: [enumerar]\nMétricas clave: [CTR, tasa de conversión, CAC, etc.]\n\nAnaliza qué funcionó, qué no, las causas principales y recomendaciones concretas para la próxima campaña."
        }
      ]
    },
    {
      "cat": "SEO",
      "prompts": [
        {
          "title": "Briefing de investigación de palabras clave",
          "text": "Crea un briefing de investigación de palabras clave (keywords) para [tema/producto].\n\nSitio web: [URL o descripción]\nPúblico objetivo: [describir]\nCompetidores: [enumerar si se conocen]\n\nSugiere palabras clave principales, variaciones de cola larga (long-tail), categorías por intención de búsqueda (informativa, comercial, transaccional) y oportunidades de contenido para cada grupo."
        },
        {
          "title": "Escribir metaetiquetas SEO",
          "text": "Escribe etiquetas title y meta descriptions optimizadas para SEO para la siguiente página.\n\nTema de la página: [describir]\nPalabra clave objetivo: [keyword]\nURL: [URL de la página]\nNúmero aproximado de palabras de la página: [aprox.]\n\nProporciona 3 opciones de title (máximo 60 caracteres cada una) y 3 opciones de meta description (máximo 155 caracteres cada una). Señala la ubicación de la palabra clave objetivo en cada una."
        },
        {
          "title": "Análisis de brechas de contenido",
          "text": "Realiza un análisis de brechas de contenido (content gap analysis) para [sitio web/marca] en el sector de [industria].\n\nTemas de contenido actuales: [enumerar o describir]\nPrincipales competidores: [enumerar]\nPúblico objetivo: [describir]\n\nIdentifica temas y palabras clave por las que rankean nuestros competidores y que nosotros no estamos cubriendo, priorizándolos por potencial de tráfico y relevancia para el negocio."
        },
        {
          "title": "Estrategia de enlazado interno",
          "text": "Crea una estrategia de enlazado interno para un [blog/sitio web] sobre [tema].\n\nPáginas clave actuales: [enumera tus páginas pilar o URLs importantes]\nObjetivo: [ej. mejorar posiciones para X, reducir tasa de rebote, distribuir link equity]\n\nSugiere textos ancla (anchor text), qué páginas deberían enlazar a cuáles y una estructura de enlaces que refuerce la autoridad temática."
        }
      ]
    },
    {
      "cat": "Publicidad y Anuncios",
      "prompts": [
        {
          "title": "Escribir textos para Google Ads",
          "text": "Escribe textos de Google Ads para [producto/servicio].\n\nPalabra clave objetivo: [keyword]\nURL de la landing page: [URL]\nBeneficio principal: [propuesta de valor central]\nAudiencia: [describe quién verá este anuncio]\n\nProporciona 3 títulos (máx. 30 caracteres cada uno) y 2 descripciones (máx. 90 caracteres cada una) para un anuncio responsivo de búsqueda. Destaca los beneficios, incluye un llamado a la acción y alinea el texto con la intención de la palabra clave."
        },
        {
          "title": "Variaciones de anuncios para Facebook",
          "text": "Escribe 3 variaciones de anuncios de Facebook para [producto/servicio].\n\nPúblico objetivo: [describe demografía e intereses]\nObjetivo: [ej. clics, conversiones, notoriedad]\nOferta o gancho principal: [describir]\n\nPara cada variación redacta: texto principal (2-3 oraciones), título (menos de 40 caracteres) y descripción (menos de 25 caracteres). Usa un ángulo diferente en cada una — ej. punto de dolor, prueba social y oferta directa."
        },
        {
          "title": "Ideas de pruebas A/B para landing page",
          "text": "Genera ideas de pruebas A/B para una landing page de [producto/servicio].\n\nTasa de conversión actual: [si se conoce]\nLlamado a la acción (CTA) principal: [ej. Regístrate gratis]\nPrincipal fuente de tráfico: [ej. Google Ads, Facebook]\nObjetivo de la página: [describir]\n\nEnumera de 8 a 10 ideas específicas y de alto impacto sobre: titular, texto del CTA, prueba social, estructura visual y planteamiento de la oferta. Ordénalas por impacto esperado y facilidad de implementación."
        },
        {
          "title": "Estrategia de segmentación de audiencias para anuncios",
          "text": "Ayúdame a diseñar una estrategia de segmentación de audiencias para campañas de pago que promocionan [producto/servicio].\n\nPlataforma: [ej. Meta, Google, LinkedIn]\nPresupuesto: [mensual]\nObjetivo: [ej. leads, compras, registros]\nCliente ideal: [describir]\n\nRecomienda: opciones de segmentación de tráfico frío, segmentos de retargeting, estrategia de públicos similares (lookalikes) y exclusiones. Explica la justificación de cada una."
        }
      ]
    },
    {
      "cat": "Analítica y Métricas",
      "prompts": [
        {
          "title": "Interpretar caída de tráfico",
          "text": "Ayúdame a diagnosticar una caída de tráfico en [sitio web/página].\n\nDetalles de la caída: [ej. el tráfico orgánico cayó un 30% en las últimas 2 semanas]\nFecha de la caída: [fecha]\nPáginas afectadas: [qué páginas o en todo el sitio]\nCambios recientes: [cambios en la web, actualizaciones de algoritmos, redirecciones, etc.]\n\nEnumera las causas más probables por orden de probabilidad y ofrece pasos de investigación y soluciones concretas para cada una."
        },
        {
          "title": "Análisis de embudo de conversión",
          "text": "Analiza este embudo de conversión e identifica en qué puntos estamos perdiendo usuarios.\n\nPasos del embudo y tasas de conversión:\n[ej. Visitante > Landing page: 100%]\n[Landing page > Registro: 12%]\n[Registro > Activación: 40%]\n[Activación > Compra: 18%]\n\nCompara estas tasas con los estándares típicos de la industria, destaca los mayores puntos de fuga y sugiere mejoras específicas para cada etapa."
        },
        {
          "title": "Resumen del informe mensual",
          "text": "Escribe un resumen ejecutivo conciso del informe mensual de marketing de [mes].\n\nMétricas clave:\n- Tráfico: [cifra, vs mes anterior]\n- Leads: [cifra, vs mes anterior]\n- CAC: [importe]\n- Tasa de conversión: [%]\n- Canal principal: [canal]\n- Logros destacados: [enumerar]\n- Retos o dificultades: [enumerar]\n\nRedacta un resumen ejecutivo (3-4 oraciones), una sección de logros destacados, una sección de retos y 3 planes de acción claros para el próximo mes."
        },
        {
          "title": "Comparación de modelos de atribución",
          "text": "Compara modelos de atribución para un negocio [B2B/B2C] que vende [producto/servicio].\n\nNuestros canales de marketing principales: [ej. búsqueda de pago, orgánico, email, redes sociales]\nCiclo de ventas promedio: [ej. 2 semanas / 3 meses]\nModelo de atribución actual: [ej. último clic]\n\nExplica cómo los modelos de primer clic, último clic, lineal, deterioro temporal y basado en datos interpretarían nuestro embudo de forma diferente, y recomienda la opción más adecuada con justificación."
        }
      ]
    },
    {
      "cat": "Marca y Posicionamiento",
      "prompts": [
        {
          "title": "Escribir declaración de posicionamiento de marca",
          "text": "Escribe una declaración de posicionamiento de marca para [empresa/producto].\n\nA qué nos dedicamos: [describir]\nPúblico objetivo: [describir]\nBeneficio clave: [valor principal que aportamos]\nDiferenciador: [qué nos distingue de las alternativas]\nCompetidores: [enumera los principales]\n\nUsa el formato: Para [audiencia] que [necesidad], [marca] es la [categoría] que [beneficio] porque [motivo para creer]. Luego proporciona 2 versiones alternativas con diferente énfasis."
        },
        {
          "title": "Diferenciación competitiva",
          "text": "Ayúdame a formular cómo [producto/empresa] se diferencia de sus competidores.\n\nNuestro producto: [describir]\nPrincipales competidores: [enumera con una breve descripción de cada uno]\nNuestras mayores fortalezas: [enumerar]\nTemas recurrentes en opiniones de clientes: [lo que los clientes dicen que les encanta]\n\nIdentifica nuestros diferenciadores más fuertes, cuáles son más sostenibles a largo plazo y cómo comunicarlos con claridad en los mensajes de marketing. Señala cualquier afirmación que suene genérica y deba afilarse."
        },
        {
          "title": "Guía de tono y voz de marca",
          "text": "Crea una guía de tono y voz de marca para [empresa/producto].\n\nA qué nos dedicamos: [describir]\nPúblico objetivo: [describir]\nPersonalidad que queremos proyectar: [ej. experta pero accesible, audaz, cálida]\nPersonalidad que queremos evitar: [ej. corporativa, cargada de jerga]\nEjemplos de textos que nos gustan: [pega ejemplos]\n\nDefine de 4 a 5 atributos de voz, explica cada uno con una descripción, ejemplos de qué hacer y qué evitar, y un ejemplo de reescritura antes/después."
        },
        {
          "title": "Lluvia de ideas para eslóganes",
          "text": "Genera ideas de eslóganes (taglines) para [empresa/producto].\n\nA qué nos dedicamos: [describe en una sola oración]\nPúblico objetivo: [describir]\nBeneficio principal: [propuesta de valor central]\nTono: [ej. contundente, reflexivo, seguro, divertido]\nEslóganes actuales que no nos gustan y por qué: [opcional]\n\nGenera 15 opciones de eslóganes. Agrúpalos por enfoque: orientados al beneficio, orientados a la emoción y retadores/disruptivos. Destaca tus 3 favoritos explicando brevemente el motivo de cada elección."
        }
      ]
    },
    {
      "cat": "Growth y Crecimiento",
      "prompts": [
        {
          "title": "Ideas para programas de referidos",
          "text": "Diseña un programa de referidos para [producto/servicio].\n\nModelo de negocio: [ej. suscripción SaaS, comercio electrónico]\nBase de usuarios actual: [tamaño aproximado]\nValor de vida del cliente (LTV) promedio: [importe]\nObjetivo de coste de adquisición: [CAC objetivo]\n\nPropón 3 estructuras de programas de referidos con diferentes mecánicas de incentivos (ej. recompensa para ambas partes, créditos, dinero en efectivo). Para cada una: describe la mecánica, el flujo de recomendación, la estructura de recompensas y el impacto esperado en el coeficiente viral."
        },
        {
          "title": "Secuencia de correos de retención",
          "text": "Escribe una secuencia de correos de retención para usuarios que se registraron en [producto] pero llevan inactivos [X días].\n\nProducto: [describe qué hace]\nMotivo común de abandono: [si se conoce]\nTono: [ej. cercano, directo]\nNúmero de correos: [ej. secuencia de 3 correos]\n\nPara cada correo proporciona: asunto, texto de vista previa, cuerpo del mensaje y llamado a la acción. Espácialos [X] días entre sí. Enfócate en reconectar aportando valor, no solo ofreciendo descuentos."
        },
        {
          "title": "Optimización del flujo de onboarding",
          "text": "Ayúdame a optimizar el flujo de incorporación (onboarding) para [producto].\n\nPasos actuales del onboarding: [enuméralos]\nPunto de abandono: [dónde abandonan los usuarios]\nObjetivo de tiempo hasta obtener valor (time to value): [ej. que el usuario obtenga valor en 5 minutos]\nEvento clave de activación: [ej. creó su primer proyecto, invitó a un compañero de equipo]\n\nIdentifica los puntos de fricción en el flujo actual, sugiere mejoras específicas para cada paso y recomienda un onboarding mínimo viable que lleve a los usuarios al evento de activación lo más rápido posible."
        },
        {
          "title": "Estrategia de bucle viral (viral loop)",
          "text": "Diseña una estrategia de bucle viral para [producto/servicio].\n\nTipo de producto: [ej. herramienta colaborativa, marketplace, aplicación social]\nMecanismo de crecimiento actual: [describe cómo te descubren los usuarios hoy]\nMomentos naturales para compartir: [¿en qué momento los usuarios desean compartir de forma natural?]\nObjetivo de coeficiente viral: [ej. K > 1]\n\nPropón 2 o 3 diseños de bucle viral. Para cada uno: describe el detonante, el mecanismo para compartir, el incentivo y el flujo de conversión para los usuarios referidos. Estima un coeficiente viral realista para cada opción."
        }
      ]
    }
  ],
  "job": [
    {
      "cat": "Currículum (CV)",
      "prompts": [
        {
          "title": "Reescribir viñetas del currículum",
          "text": "Reescribe estos puntos del currículum para que sean más contundentes, impactantes y orientados a resultados. Usa verbos de acción y cuantifica los logros siempre que sea posible:\n\n[pega tus puntos aquí]\n\nPuesto al que aspiro: [título del puesto]\nSector: [sector/industria]"
        },
        {
          "title": "Adaptar currículum a una oferta de trabajo",
          "text": "Aquí está mi currículum actual y la descripción del puesto al que quiero postularme. Identifica las discrepancias o carencias, sugiere qué habilidades y palabras clave añadir o destacar, y reescribe las secciones más relevantes para ajustarlas al perfil solicitado.\n\nMi currículum:\n[pega el currículum aquí]\n\nDescripción del puesto:\n[pega la descripción del puesto aquí]"
        },
        {
          "title": "Escribir extracto o perfil profesional para el CV",
          "text": "Escribe un extracto profesional convincente para mi currículum. Debe tener entre 3 y 4 oraciones, destacar mis fortalezas y experiencia principales, y estar adaptado al puesto al que aspiro.\n\nMi trayectoria: [años de experiencia, habilidades clave, logros destacados]\nPuesto al que aspiro: [título del puesto y sector]"
        },
        {
          "title": "Cuantificar logros profesionales",
          "text": "Ayúdame a cuantificar y dar más peso a estos logros en mi currículum. Si no he aportado cifras, sugiere qué métricas podría investigar o estimar para que cada viñeta sea más impactante:\n\n[pega los logros aquí]\n\nMi puesto: [título del puesto]\nTamaño de la empresa / sector: [detalles]"
        }
      ]
    },
    {
      "cat": "Carta de Presentación",
      "prompts": [
        {
          "title": "Escribir carta de presentación",
          "text": "Escribe una carta de presentación convincente para esta candidatura laboral. Mantén una estructura de 3 párrafos: por qué me entusiasma la empresa, qué aporto al puesto y un llamado a la acción claro.\n\nMi experiencia: [breve resumen]\nTítulo del puesto: [puesto]\nEmpresa: [nombre de la empresa]\nRequisitos clave del puesto: [pega de 3 a 5 requisitos de la oferta]\nUna razón específica por la que elijo esta empresa: [tu motivo]"
        },
        {
          "title": "Carta de presentación para cambio de carrera",
          "text": "Escribe una carta de presentación para postularme a un cambio de rumbo profesional. Reconoce la transición, conecta mis habilidades transferibles con el nuevo puesto y muestra una motivación genuina por el cambio.\n\nMi experiencia actual: [área y experiencia actuales]\nPuesto al que deseo cambiar: [nuevo título del puesto y área]\nHabilidades transferibles que poseo: [enuméralas]\nPor qué estoy haciendo este cambio: [tu motivo]"
        },
        {
          "title": "Carta de solicitud de traslado interno",
          "text": "Escribe una carta solicitando un traslado interno a otro equipo o puesto dentro de mi empresa. Resalta mi conocimiento de la organización, mis contribuciones hasta la fecha y por qué este cambio beneficia tanto a mí como a la empresa.\n\nMi puesto actual: [título y equipo]\nPuesto al que deseo trasladarme: [título y equipo]\nTiempo en la empresa: [duración]\nContribuciones principales hasta ahora: [enumera 2 o 3]\nMotivo del traslado: [tu motivo]"
        },
        {
          "title": "Seguimiento tras enviar candidatura",
          "text": "Escribe un correo breve y profesional de seguimiento tras haber enviado una solicitud de empleo. Debe expresar interés continuo, ser cordial y conciso, sin resultar invasivo.\n\nTítulo del puesto: [puesto]\nEmpresa: [nombre de la empresa]\nFecha de postulación: [fecha]\nNombre del responsable de contratación (si se conoce): [nombre o 'Responsable de selección']"
        }
      ]
    },
    {
      "cat": "Preparación de Entrevistas",
      "prompts": [
        {
          "title": "Practicar preguntas por competencias (método STAR)",
          "text": "Ayúdame a preparar respuestas con el método STAR para preguntas de entrevistas por competencias para este puesto. Para cada pregunta, guíame con la estructura: Situación, Tarea, Acción, Resultado.\n\nPuesto para el que me entrevistan: [título del puesto]\nSector: [sector/industria]\nMi trayectoria: [breve resumen]\n\nComienza con estas preguntas habituales:\n1. Cuéntame sobre alguna ocasión en la que gestionaste un conflicto en el trabajo.\n2. Describe un proyecto que lideraste de principio a fin.\n3. Háblame de una ocasión en la que cometiste un error y qué aprendiste de ello."
        },
        {
          "title": "Preparación para entrevista técnica",
          "text": "Tengo una entrevista técnica para este puesto. Crea un plan de estudio enfocado y enumera los temas y tipos de preguntas más probables para los que debería prepararme. Incluye preguntas de ejemplo y explica cómo son las respuestas sobresalientes.\n\nPuesto: [título del puesto]\nTipo de empresa: [startup / gran empresa / tipo FAANG]\nHabilidades clave indicadas en la oferta: [pégalas]\nMi nivel de habilidad actual: [principiante / intermedio / avanzado]\nTiempo restante hasta la entrevista: [días/semanas]"
        },
        {
          "title": "Preguntas para hacerle al entrevistador",
          "text": "Genera una lista de preguntas inteligentes y estratégicas que pueda hacer al final de mi entrevista. Incluye preguntas sobre el puesto, la cultura del equipo, las oportunidades de crecimiento y las métricas de éxito. Evita preguntas genéricas.\n\nPuesto: [título del puesto]\nEmpresa: [nombre de la empresa]\nEtapa de la entrevista: [primera ronda / ronda final / responsable de contratación / panel]\nLo que ya sé sobre la empresa: [notas breves]"
        },
        {
          "title": "Guion para negociación salarial",
          "text": "Escribe un guion de negociación salarial que pueda usar tras recibir una oferta de trabajo. Debe sonar seguro pero colaborativo, justificar mi petición con datos de mercado y mi experiencia, y mantener la conversación en un tono positivo.\n\nOferta recibida: [salario ofertado]\nMi salario objetivo: [salario deseado]\nMi experiencia: [años y cualificaciones clave]\nPuesto: [título del puesto]\nUbicación / en remoto: [ubicación]"
        }
      ]
    },
    {
      "cat": "LinkedIn",
      "prompts": [
        {
          "title": "Optimizar titular de LinkedIn",
          "text": "Escribe 5 variaciones de titular para mi perfil de LinkedIn. Cada una debe incluir palabras clave relevantes para búsquedas de reclutadores, comunicar con claridad mi propuesta de valor y tener menos de 220 caracteres.\n\nMi puesto actual: [título]\nSector: [sector]\nHabilidades clave: [enumera de 3 a 5]\nPor qué quiero ser reconocido: [breve descripción]\nAbierto a nuevas oportunidades: [sí / no]"
        },
        {
          "title": "Escribir extracto de LinkedIn (sección Acerca de)",
          "text": "Escribe una sección 'Acerca de' de LinkedIn para mi perfil. Usa primera persona, comienza con un gancho potente, destaca mi experiencia y competencias clave, y finaliza indicando qué busco o cómo pueden contactarme. Apunta a entre 250 y 350 palabras.\n\nMi trayectoria: [resumen de experiencia]\nHabilidades y experiencia clave: [enuméralas]\nLogros destacados: [de 1 a 3 hitos]\nQué busco: [puestos, oportunidades o colaboraciones]"
        },
        {
          "title": "Mensaje de solicitud de contacto",
          "text": "Escribe un mensaje breve y personalizado para solicitar contacto en LinkedIn (menos de 300 caracteres). Debe ser cordial, específico sobre por qué quiero conectar y no pedir nada de inmediato.\n\nA quién me dirijo: [su nombre y cargo]\nPor qué quiero conectar: [interés común, contacto mutuo, admiración por su trabajo, etc.]\nMi perfil: [descripción en una sola línea sobre quién soy]"
        },
        {
          "title": "Publicación de LinkedIn sobre aprendizaje profesional",
          "text": "Escribe una publicación de LinkedIn compartiendo una lección o aprendizaje profesional de mi carrera. Usa una primera línea impactante que detenga el scroll, cuenta una breve historia u observación y termina con una pregunta para fomentar la interacción. Evita clichés y mantenlo auténtico.\n\nTema o lección: [lo que quiero compartir]\nContexto o historia detrás: [detalles breves]\nPúblico objetivo: [para quién escribo]\nTono: [reflexivo / motivacional / práctico]"
        }
      ]
    },
    {
      "cat": "Networking y Contactos",
      "prompts": [
        {
          "title": "Solicitud de entrevista informativa",
          "text": "Escribe un correo solicitando una charla o entrevista informativa de 20 minutos con alguien que trabaje en un puesto o empresa que me interesa. Sé conciso, muestra un interés genuino en su experiencia y haz que sea muy fácil aceptar.\n\nSu nombre: [nombre]\nSu puesto y empresa: [detalles]\nCómo le encontré: [LinkedIn, contacto mutuo, artículo, etc.]\nQué quiero aprender: [temas o preguntas específicas]\nMi perfil: [una sola oración sobre quién soy]"
        },
        {
          "title": "Correo de agradecimiento tras reunión de networking",
          "text": "Escribe un correo de agradecimiento para enviar dentro de las primeras 24 horas tras una entrevista informativa o reunión de networking. Menciona algo específico de nuestra conversación, expresa un agradecimiento sincero y sugiere un siguiente paso natural.\n\nSu nombre: [nombre]\nFecha de la reunión: [fecha]\nAlgo específico que comentamos: [tema o aprendizaje]\nSiguiente paso que propongo: [ej. mantener el contacto, compartir un recurso, retomar contacto en 3 meses]"
        },
        {
          "title": "Elevator pitch profesional",
          "text": "Escribe un elevator pitch de 30 segundos que pueda usar en eventos de networking o cuando alguien me pregunte '¿a qué te dedicas?'. Debe ser claro, memorable y propiciar de manera natural una conversación. Redacta 3 versiones: formal, casual y para cambio de trayectoria.\n\nMi trayectoria: [puesto actual o reciente y sector]\nHabilidades o experiencia clave: [enuméralas]\nHacia dónde me dirijo: [metas o tipo de oportunidad que busco]"
        },
        {
          "title": "Correo de seguimiento tras conferencia o evento",
          "text": "Escribe un correo de seguimiento para alguien que conocí brevemente en una conferencia o evento del sector. Recuerda cómo nos conocimos, recapitula brevemente la conversación y propón una forma de mantener el contacto o continuar el diálogo.\n\nSu nombre: [nombre]\nNombre del evento: [conferencia o evento]\nCómo nos conocimos / qué comentamos: [detalles breves]\nSiguiente paso que sugiero: [llamada breve, café, compartir un recurso, etc.]"
        }
      ]
    },
    {
      "cat": "Desarrollo Profesional",
      "prompts": [
        {
          "title": "Crear un plan de desarrollo profesional",
          "text": "Ayúdame a elaborar un plan de desarrollo profesional a 12 meses. Incluye metas específicas, habilidades por desarrollar, hitos a alcanzar y acciones concretas para cada trimestre. Hazlo realista y alineado con el puesto al que aspiro.\n\nMi puesto actual: [título y nivel]\nPuesto objetivo en 12 meses: [título y nivel]\nBrechas clave por cerrar: [habilidades, experiencia o certificaciones que me faltan]\nRecursos disponibles: [cursos, mentores, presupuesto, etc.]"
        },
        {
          "title": "Pedir un ascenso o promoción",
          "text": "Escribe un guion para plantearle un ascenso a mi responsable directo. Estructúralo con una apertura de conversación, un resumen de mis contribuciones e impacto, una petición clara y una invitación a definir conjuntamente los siguientes pasos. Mantén un tono seguro y colaborativo.\n\nMi cargo actual: [puesto]\nCargo que solicito: [puesto objetivo]\nTiempo en el puesto actual: [duración]\nLogros clave: [enumera de 3 a 5 con su impacto]\nPor qué ahora: [momento propicio o motivo detonante]"
        },
        {
          "title": "Redactar autoevaluación de desempeño",
          "text": "Ayúdame a redactar una autoevaluación sólida para mi evaluación anual de desempeño. Para cada área, destaca logros específicos con impacto cuantificable, reconoce honestamente áreas de mejora y vincula mi trabajo con los objetivos del equipo y de la empresa.\n\nMi puesto: [título]\nProyectos o responsabilidades clave de este periodo: [enuméralos]\nLogros notables: [con métricas siempre que sea posible]\nÁreas en las que deseo crecer: [sé específico]\nObjetivos para el próximo periodo: [enumera 2 o 3]"
        },
        {
          "title": "Análisis de brecha de competencias",
          "text": "Analiza la brecha entre mis competencias actuales y los requisitos para el puesto al que aspiro. Prioriza las carencias por orden de importancia, sugiere formas concretas de cerrar cada una y estima un cronograma realista.\n\nMis habilidades actuales: [enumera competencias técnicas e interpersonales]\nPuesto objetivo: [título del puesto]\nDescripción del puesto o requisitos: [pega o describe los requisitos clave]\nPlazo con el que cuento: [meses o años]"
        }
      ]
    }
  ],
  "startup": [
    {
      "cat": "Ideación",
      "prompts": [
        {
          "title": "Validar idea de negocio",
          "text": "Tengo una idea de negocio: [describe tu idea en 2 o 3 oraciones].\n\nAyúdame a validarla analizando:\n1. Claridad del problema: ¿existe aquí un problema real y doloroso?\n2. Cliente objetivo: ¿quién pagaría por esto?\n3. Tamaño de mercado: estimación aproximada de TAM/SAM/SOM\n4. Principales riesgos e hipótesis que debo poner a prueba\n5. 3 formas rápidas y económicas de validarla antes de programar o construir nada."
        },
        {
          "title": "Encontrar el mercado objetivo",
          "text": "Mi producto es: [describe el producto o servicio].\n\nAyúdame a identificar y priorizar mi mercado objetivo:\n1. Enumera 5 segmentos potenciales de clientes que podrían necesitarlo\n2. Para cada segmento, describe su nivel de dolor o necesidad, disposición a pagar y facilidad de acceso o captación\n3. Recomienda a qué segmento dirigirse primero y por qué\n4. Describe detalladamente el perfil de cliente ideal (ICP) para ese segmento."
        },
        {
          "title": "Análisis del panorama competitivo",
          "text": "Estoy creando [describe tu producto/servicio] en el sector de [industria/sector].\n\nAnaliza el entorno competitivo:\n1. ¿Quiénes son los principales competidores directos e indirectos?\n2. ¿Cuáles son sus fortalezas y debilidades?\n3. ¿Qué brechas o necesidades desatendidas existen en el mercado?\n4. ¿En qué aspecto podría diferenciarse de forma realista un nuevo competidor?\n5. ¿Qué motivaría a los clientes a migrar desde sus soluciones actuales?"
        },
        {
          "title": "Priorización de funcionalidades del MVP",
          "text": "Estoy creando un MVP para [describe el producto]. Mi usuario objetivo es [describe al usuario] y el problema central que resuelvo es [describe el problema].\n\nAyúdame a priorizar las funcionalidades:\n1. Enumera las características imprescindibles (must-have) para un MVP funcional\n2. Enumera características secundarias deseables pero no esenciales para el lanzamiento\n3. Enumera características a posponer para una versión posterior\n4. Sugiere la versión más pequeña y viable que podría lanzar en [plazo] para obtener comentarios reales de usuarios.\n\nUtiliza el método MoSCoW cuando resulte útil."
        }
      ]
    },
    {
      "cat": "Presentación y Financiación",
      "prompts": [
        {
          "title": "Escribir elevator pitch",
          "text": "Ayúdame a redactar un elevator pitch contundente de 30 segundos para mi startup.\n\nDetalles:\n- A qué nos dedicamos: [describe el producto/servicio]\n- Problema que resolvemos: [describe el problema]\n- Cliente objetivo: [a quién va dirigido]\n- Cómo generamos ingresos: [modelo de negocio]\n- Tracción conseguida hasta ahora: [métricas, usuarios, ingresos]\n\nEscribe 3 versiones: una para un inversor, otra para un cliente potencial y otra para un evento general de networking. Mantén cada una por debajo de 60 palabras."
        },
        {
          "title": "Narrativa para pitch deck",
          "text": "Ayúdame a construir el hilo conductor narrativo para mi presentación a inversores (pitch deck).\n\nDatos de la startup:\n- Nombre de la empresa: [nombre]\n- Qué hacemos: [descripción]\n- Problema: [problema]\n- Solución: [solución]\n- Mercado: [tamaño del mercado]\n- Modelo de negocio: [cómo generamos ingresos]\n- Tracción: [métricas]\n- Equipo: [miembros clave del equipo]\n- Solicitud de fondos (Ask): [cuánto buscamos y para qué]\n\nPara cada diapositiva (Problema, Solución, Mercado, Producto, Tracción, Equipo, Ask), escribe el mensaje clave y 3 puntos de apoyo. Mantén un enfoque atractivo para inversores y una narrativa sólida."
        },
        {
          "title": "Correo de presentación a inversores",
          "text": "Escribe un correo de contacto en frío para presentar mi startup a un inversor de capital riesgo (VC).\n\nContexto:\n- Enfoque del inversor: [ej. SaaS B2B, etapas iniciales, fintech]\n- Mi startup: [nombre y descripción en una sola línea]\n- Por qué este inversor en particular: [motivo]\n- Tracción / datos probatorios: [métricas clave o hitos]\n- Petición (Ask): [ej. llamada introductoria de 20 minutos]\n\nEscribe una línea de asunto y un cuerpo de correo de menos de 150 palabras. Hazlo directo, específico y persuasivo. Evita generalidades y términos de moda vacíos."
        },
        {
          "title": "Hipótesis para proyecciones financieras",
          "text": "Ayúdame a definir las hipótesis clave detrás de mis proyecciones financieras a 3 años.\n\nModelo de negocio: [describe cómo cobras, ej. suscripción SaaS, marketplace, venta única]\nCliente objetivo: [describe el segmento de clientes]\nEstado actual: [ingresos, usuarios o pre-ingresos]\n\nPara cada año (Año 1, Año 2, Año 3), ayúdame a definir hipótesis realistas sobre:\n1. Adquisición de clientes (canales, CAC, tasa de crecimiento)\n2. Ingreso medio por cliente (ACV o ARPU, rotación/churn)\n3. Equipo y contrataciones clave\n4. Principales generadores de costes\n5. Ruta hacia el punto de equilibrio (breakeven)\n\nSeñala qué supuestos tienen mayor probabilidad de ser cuestionados por inversores."
        }
      ]
    },
    {
      "cat": "Producto",
      "prompts": [
        {
          "title": "Escribir documento de requisitos de producto (PRD)",
          "text": "Escribe un documento de requisitos de producto (PRD) para la siguiente funcionalidad.\n\nNombre de la funcionalidad: [nombre de la funcionalidad]\nProducto: [descripción del producto]\nProblema del usuario: [qué problema resuelve y para quién]\nObjetivo de negocio: [por qué estamos construyendo esto]\n\nEl PRD debe incluir:\n1. Resumen y objetivos\n2. Historias de usuario (como [usuario], quiero [acción] para [resultado])\n3. Requisitos funcionales\n4. Fuera de alcance (out of scope)\n5. Métricas de éxito\n6. Preguntas abiertas\n\nMantenlo conciso y directamente aplicable para un equipo de ingeniería."
        },
        {
          "title": "Mapeo de historias de usuario (Story Mapping)",
          "text": "Ayúdame a crear un mapa de historias de usuario (user story map) para [producto o funcionalidad].\n\nUsuario objetivo: [describe al usuario]\nRecorrido principal del usuario: [describe el flujo principal de principio a fin]\n\n1. Divide el recorrido en 5 a 7 actividades de alto nivel (la fila superior del mapa)\n2. Bajo cada actividad, lista las tareas de usuario (historias) necesarias para completarla\n3. Identifica qué historias pertenecen al lanzamiento del MVP frente a versiones posteriores\n4. Señala posibles dependencias entre historias\n\nPreséntalo como una lista estructurada agrupada por actividad."
        },
        {
          "title": "Análisis de estrategia de precios",
          "text": "Ayúdame a definir la estrategia de precios adecuada para mi producto.\n\nProducto: [describe qué hace]\nCliente objetivo: [quién lo compra, tamaño de empresa, sector]\nValor aportado: [qué resultado genera para el cliente]\nPrecios de la competencia: [cuánto cobran las alternativas]\nIdeas actuales: [ideas de precios que ya tengo]\n\nAnaliza:\n1. El mejor modelo de precios (suscripción, basado en uso, pago único, freemium, etc.) con ventajas y desventajas\n2. Punto de precio recomendado y su justificación\n3. Niveles o planes de precios si procede\n4. Cómo probar y validar los precios antes de fijarlos\n5. Errores habituales de precios a evitar en este mercado."
        },
        {
          "title": "Marco de priorización de funcionalidades",
          "text": "Tengo un backlog de peticiones de funcionalidades y necesito priorizarlas. Ayúdame a aplicar un marco de priorización estructurado.\n\nProducto: [describe el producto]\nEtapa actual: [ej. pre-lanzamiento, tracción inicial, escalado]\nObjetivo principal de negocio en este momento: [ej. retener usuarios, captar los primeros 100 clientes, reducir churn]\n\nBacklog de funcionalidades:\n[enumera tus funcionalidades aquí]\n\nPara cada funcionalidad, puntúala en:\n1. Impacto en el objetivo de negocio principal (1-5)\n2. Esfuerzo de desarrollo (1-5, donde 5 = alto esfuerzo)\n3. Señal de demanda de los usuarios (cuántos usuarios la solicitaron)\n4. Ajuste estratégico\n\nOrdénalas por prioridad y recomienda qué construir en primer lugar, en segundo lugar y qué dejar aparcado."
        }
      ]
    },
    {
      "cat": "Crecimiento",
      "prompts": [
        {
          "title": "Estrategia Go-to-Market (GTM)",
          "text": "Ayúdame a elaborar una estrategia de salida al mercado (go-to-market o GTM) para mi startup.\n\nProducto: [describe el producto]\nCliente objetivo: [ICP: sector, tamaño de empresa, rol, punto de dolor]\nPropuesta de valor única: [qué te diferencia]\nNivel de precios: [precios]\nCronograma de lanzamiento: [cuándo planeas lanzar]\n\nCubre:\n1. Motor GTM (product-led, sales-led o marketing-led) y justificación\n2. Los 3 primeros canales de adquisición en los que enfocarse y por qué\n3. Plan de lanzamiento para los primeros 90 días con hitos clave\n4. Principales riesgos y cómo mitigarlos\n5. Cómo luce el éxito a los 30, 60 y 90 días tras el lanzamiento."
        },
        {
          "title": "Canales de adquisición de clientes",
          "text": "Necesito identificar los mejores canales de adquisición de clientes para mi startup.\n\nProducto: [describe el producto]\nCliente objetivo: [quiénes son, dónde pasan tiempo online y offline]\nPresupuesto de captación: [rango de presupuesto mensual]\nTamaño del equipo: [número de personas dedicadas a crecimiento]\nTracción actual: [clientes existentes o cero]\n\nPara cada canal recomendado:\n1. Por qué encaja con mi cliente y producto\n2. Rango estimado de CAC\n3. Cómo probarlo a bajo coste en 2 semanas\n4. Cómo se vería en una fase escalada\n\nOrdena los canales según su potencial de retorno de inversión (ROI) para mi etapa actual."
        },
        {
          "title": "Estrategia de retención",
          "text": "Ayúdame a diseñar una estrategia de retención para mi producto.\n\nProducto: [describe el producto]\nTipo de usuario: [B2B o B2C, describe al usuario]\nRetención actual: [ej. tasa de retención a 30 días o tasa de churn si se conoce]\nPatrón de uso clave: [con qué frecuencia deberían usar idealmente el producto]\nPrincipales motivos de abandono (si se conocen): [enuméralos]\n\nProporciona:\n1. La palanca de retención más importante en la que enfocarse primero y por qué\n2. Un flujo de onboarding que guíe a los usuarios al 'momento ajá' más rápido\n3. 3 campañas de correos o notificaciones durante el ciclo de vida para mejorar la retención\n4. Funcionalidades o cambios dentro del producto para reducir el abandono\n5. Cómo identificar a usuarios en riesgo antes de que se den de baja."
        },
        {
          "title": "Diseño de panel de métricas (Dashboard)",
          "text": "Ayúdame a diseñar el panel de métricas principales para mi startup.\n\nTipo de negocio: [ej. SaaS B2B, marketplace, app de consumo, ecommerce]\nEtapa: [pre-ingresos / tracción inicial / escalado]\nObjetivo principal actual: [ej. hacer crecer el MRR, mejorar retención, aumentar activación]\n\nDefine:\n1. La métrica fundamental única (North Star Metric) a optimizar\n2. Las 5 a 7 métricas clave que impulsan la North Star (inputs)\n3. Métricas de salud del negocio a monitorizar (para detectar problemas a tiempo)\n4. Métricas que se deben ignorar en mi etapa actual\n5. Cómo establecer una cadencia sencilla de revisión semanal sobre estas métricas."
        }
      ]
    },
    {
      "cat": "Operaciones",
      "prompts": [
        {
          "title": "Plan de contratación",
          "text": "Ayúdame a crear un plan de contratación para mi startup.\n\nEquipo actual: [lista de roles actuales/plantilla]\nEstado de financiación: [bootstrapped / pre-seed / seed / Serie A]\nRunway disponible: [meses de margen financiero]\nPrioridades principales para los próximos 12 meses: [lista 2-3 objetivos clave]\n\nProporciona:\n1. Las 3 primeras contrataciones que debería realizar y por qué (en orden de prioridad)\n2. Para cada rol: título del puesto, responsabilidades clave, habilidades indispensables y modalidad (tiempo completo, tiempo parcial o freelance)\n3. Cómo atraer candidatos de primer nivel sin un gran presupuesto de selección\n4. Señales de alarma (red flags) a tener en cuenta al contratar en etapas tempranas\n5. Un proceso de contratación ágil que no sacrifique calidad."
        },
        {
          "title": "Documento de cultura empresarial",
          "text": "Ayúdame a redactar un documento fundacional de cultura corporativa para mi startup.\n\nEmpresa: [nombre y a qué se dedica]\nEtapa: [tamaño del equipo, fase]\nValores de los fundadores: [enumera de 3 a 5 valores personalmente importantes]\nModalidad de trabajo: [remoto / presencial / híbrido]\nTipo de equipo que se quiere construir: [describe en una frase]\n\nRedacta:\n1. Una declaración breve de cultura (2-3 oraciones)\n2. De 4 a 6 valores fundamentales con una explicación práctica de lo que significan en el día a día\n3. 3 ejemplos de cómo se reflejan estos valores en decisiones cotidianas\n4. Qué conductas NO son tolerables (antivalores)\n5. Cómo mantener viva la cultura a medida que el equipo crece."
        },
        {
          "title": "Definición de OKRs",
          "text": "Ayúdame a definir OKRs (Objetivos y Resultados Clave) para mi startup.\n\nEtapa de la empresa: [ej. Seed, Serie A]\nPeriodo de tiempo: [Q1 2026 o anual]\nPrioridades estratégicas principales: [lista 2-3 prioridades estratégicas]\nLínea base de métricas actuales: [cifras clave si están disponibles]\n\nPara cada prioridad, redacta:\n- 1 Objetivo (inspirador, cualitativo, orientativo)\n- 3 Resultados Clave (medibles, específicos, con fecha límite)\n\nProporciona además:\n1. Cómo desplegar (hacer cascada) de los OKRs al nivel del equipo\n2. Una cadencia para el seguimiento y evaluación de los OKRs\n3. Errores habituales con los OKRs a evitar en una startup en fase temprana."
        },
        {
          "title": "Evaluación de proveedores o herramientas",
          "text": "Ayúdame a evaluar y elegir entre diferentes herramientas o proveedores para [necesidad específica, ej. CRM, data warehouse, plataforma de atención al cliente].\n\nCaso de uso: [describe con exactitud qué necesito que haga]\nTamaño del equipo: [cuántas personas la utilizarán]\nPresupuesto: [rango de presupuesto mensual]\nRequisitos indispensables (must-haves): [lista de elementos no negociables]\nRequisitos deseables (nice-to-haves): [lista de necesidades secundarias]\n\nOpciones que estoy evaluando:\n1. [Opción A]\n2. [Opción B]\n3. [Opción C]\n\nCompáralas en: funcionalidades, precios, facilidad de configuración, escalabilidad, integraciones y soporte. Recomienda una con una justificación clara y señala costes ocultos o riesgos de bloqueo (vendor lock-in)."
        }
      ]
    },
    {
      "cat": "Legal y Finanzas",
      "prompts": [
        {
          "title": "Estructura de Términos y Condiciones",
          "text": "Ayúdame a crear una estructura para los Términos y Condiciones de Uso (Terms of Service) de mi producto.\n\nTipo de producto: [ej. app SaaS, marketplace, app de consumo]\nUsuarios: [clientes B2B / consumidores finales / ambos]\nFuncionalidades clave: [describe qué pueden hacer los usuarios en la plataforma]\nPreocupaciones específicas: [ej. contenido generado por usuarios, pagos, gestión de datos]\n\nProporciona:\n1. Una estructura recomendada con todas las secciones clave que debe incluir un documento de términos\n2. Un resumen en lenguaje sencillo de lo que cubre cada sección y por qué es importante\n3. Cláusulas de especial relevancia para mi tipo de producto\n4. Errores habituales que cometen los fundadores con sus términos legales en etapas iniciales\n\nNota: esto es únicamente con fines de planificación; un abogado revisará el documento final."
        },
        {
          "title": "Consideraciones para la política de privacidad",
          "text": "Ayúdame a comprender qué debe contemplar la política de privacidad de mi producto.\n\nProducto: [describe el producto]\nDatos recopilados: [lista tipos de datos que recopilas, ej. correo, información de pago, datos de uso]\nUbicación de los usuarios: [ej. España, UE, EE. UU., global]\nHerramientas de terceros utilizadas: [ej. Stripe, Google Analytics, Intercom]\n\nCubre:\n1. Secciones clave que toda política de privacidad debe incluir\n2. Requisitos específicos según la ubicación geográfica de los usuarios (RGPD, CCPA, etc.)\n3. Datos que recopilo que podrían requerir consentimiento explícito\n4. Información sobre cesión de datos a terceros que debo declarar\n5. Cómo mantener la política actualizada conforme evoluciona el producto\n\nNota: esto es solo para fines de planificación; un abogado revisará el documento definitivo."
        },
        {
          "title": "Simulación de tabla de capitalización (Cap Table)",
          "text": "Ayúdame a modelar un escenario de tabla de capitalización (cap table) para mi startup.\n\nCap table actual:\n- Fundador 1: [nombre, % de participación]\n- Fundador 2: [nombre, % de participación]\n- Fondo de opciones para empleados (pool): [%]\n- Otros: [inversores ángeles, notas convertibles/SAFEs, etc.]\n\nRonda de financiación propuesta:\n- Tipo de ronda: [ej. Seed, Serie A]\n- Importe a captar: [$X]\n- Valoración pre-money: [$Y] (o 'ayúdame a estimarla')\n- Nuevo(s) inversor(es): [nombre o 'por determinar']\n\nCalcula y muestra:\n1. Porcentajes de participación post-money para todas las partes\n2. Cómo afecta la ampliación del option pool (si la hay) a la dilución de los fundadores\n3. Cómo queda la cap table tras la ronda\n4. Cláusulas clave a negociar más allá de la valoración (derechos pro-rata, puestos en el consejo de administración, etc.)"
        },
        {
          "title": "Análisis de unit economics",
          "text": "Ayúdame a analizar la rentabilidad unitaria (unit economics) de mi negocio.\n\nModelo de negocio: [describe cómo generas ingresos]\nPrecios: [cuánto pagan los clientes y con qué frecuencia]\nCostes clave de captación de cliente: [lista los componentes principales del CAC]\nCostes clave para dar servicio a un cliente: [lista costes de servicio / COGS por cliente]\nTasa de churn (si se conoce): [mensual o anual]\n\nCalcula y explica:\n1. Coste de Adquisición de Cliente (CAC)\n2. Ingreso Medio por Usuario (ARPU) o Valor Anual de Contrato (ACV)\n3. Margen bruto por cliente\n4. Valor del Tiempo de Vida del Cliente (LTV)\n5. Ratio LTV:CAC y qué significa para la viabilidad de mi negocio\n6. Periodo de recuperación de la inversión (Payback period)\n7. Qué aspectos debo mejorar para lograr unos unit economics sostenibles."
        }
      ]
    }
  ],
  "data": [
    {
      "cat": "SQL",
      "prompts": [
        {
          "title": "Escribir consulta SQL",
          "text": "Escribe una consulta SQL para la siguiente tarea:\n\nTarea: [describe lo que necesitas, ej. encontrar todos los usuarios que se registraron en los últimos 30 días y realizaron al menos una compra]\n\nTablas y columnas relevantes:\n\n[describe tu esquema o pega las sentencias CREATE TABLE]\n\nBase de datos: [ej. PostgreSQL, MySQL, BigQuery]\n\nDevuelve la consulta con comentarios explicando cada paso clave."
        },
        {
          "title": "Optimizar consulta lenta",
          "text": "Esta consulta SQL se ejecuta muy lentamente. Ayúdame a optimizarla.\n\nConsulta:\n\n[pega la consulta aquí]\n\nBase de datos: [ej. PostgreSQL, MySQL]\nTamaño de las tablas: [ej. pedidos tiene 50M de filas, usuarios tiene 2M de filas]\nÍndices existentes: [enuméralos o pega la salida de EXPLAIN]\n\nIdentifica los cuellos de botella, sugiere modificaciones de índices y reescribe la consulta si es necesario. Explica cada optimización realizada."
        },
        {
          "title": "Explicar consulta compleja",
          "text": "Explica esta consulta SQL en un lenguaje sencillo y accesible. Analízala paso a paso: qué hace cada cláusula, qué datos produce y qué representa el resultado final:\n\n[pega la consulta aquí]"
        },
        {
          "title": "Diseñar esquema de base de datos",
          "text": "Diseña un esquema de base de datos para el siguiente caso de uso:\n\nCaso de uso: [describe tu aplicación o funcionalidad, ej. un SaaS multiinquilino con proyectos, tareas y roles de usuario]\n\nBase de datos: [ej. PostgreSQL]\n\nIncluye: nombres de tablas, columnas con tipos y restricciones, claves primarias/foráneas, índices y una explicación de las decisiones de diseño y posibles compromisos (trade-offs)."
        }
      ]
    },
    {
      "cat": "Análisis de Datos",
      "prompts": [
        {
          "title": "Plan de análisis exploratorio de datos (EDA)",
          "text": "Tengo un conjunto de datos y quiero realizar un análisis exploratorio de datos (EDA). Crea un plan paso a paso.\n\nDescripción del dataset: [describe columnas, tipos de datos, tamaño aproximado y sector, ej. pedidos de ecommerce con ID de cliente, producto, precio, fecha]\n\nPregunta de negocio que intento resolver: [descríbela]\n\nIncluye: comprobaciones de calidad del dato, análisis univariante, relaciones a explorar, visualizaciones a generar y posibles señales de alerta a vigilar."
        },
        {
          "title": "Prueba de significancia estadística",
          "text": "Ayúdame a elegir e interpretar la prueba estadística adecuada para mi análisis.\n\nQué estoy comparando: [ej. tasas de conversión entre dos grupos de usuarios]\nTipo de datos: [ej. resultados binarios, mediciones continuas]\nTamaños de muestra: [ej. Grupo A: 1.200, Grupo B: 1.400]\nResultados actuales: [ej. Grupo A: 4,2 %, Grupo B: 5,1 %]\n\nRecomienda la prueba adecuada, expón los supuestos previos, muestra el cálculo o código y explica cómo interpretar el p-valor y el intervalo de confianza en un lenguaje comprensible."
        },
        {
          "title": "Análisis de cohortes",
          "text": "Ayúdame a diseñar e interpretar un análisis de cohortes.\n\nObjetivo: [ej. medir retención a 30/60/90 días por mes de registro]\nDatos disponibles: [describe tablas y columnas, ej. tabla de usuarios con fecha_registro, tabla de eventos con user_id y fecha_evento]\nBase de datos / herramienta: [ej. BigQuery, pandas]\n\nEscribe la consulta o código para construir la tabla de cohortes, explica cómo leer la salida y señala posibles errores de interpretación habituales."
        },
        {
          "title": "Interpretación de tendencias",
          "text": "Estoy observando una tendencia en mis datos y necesito ayuda para interpretarla.\n\nMétrica: [ej. usuarios activos semanales]\nQué observo: [ej. caída del 15 % en las últimas 6 semanas tras un crecimiento sostenido]\nContexto: [eventos conocidos, cambios de producto, estacionalidad o factores externos]\n\nAyúdame a: identificar causas probables, descartar anomalías o artefactos en los datos, sugerir análisis adicionales para confirmar la causa raíz y recomendar siguientes pasos."
        }
      ]
    },
    {
      "cat": "Visualización",
      "prompts": [
        {
          "title": "Recomendación de tipo de gráfico",
          "text": "Recomienda el mejor tipo de gráfico para mi caso de uso y explica por qué.\n\nQué quiero mostrar: [ej. cómo se desglosan los ingresos por categoría de producto y cómo varían mes a mes]\nAudiencia: [ej. equipo directivo en una reunión de revisión trimestral]\nForma de los datos: [ej. 12 meses x 6 categorías, valores entre 10.000 € y 2.000.000 €]\nHerramienta: [ej. Tableau, matplotlib, Looker Studio]\n\nSugiere de 2 a 3 opciones, ordénalas por preferencia y explica las ventajas e inconvenientes de cada una."
        },
        {
          "title": "Diseño de estructura de dashboard",
          "text": "Ayúdame a diseñar una estructura de panel o dashboard eficaz.\n\nPropósito: [ej. supervisión de operaciones diarias para un equipo de soporte]\nMétricas clave a mostrar: [enuméralas, ej. tickets abiertos, tiempo de resolución, puntuación CSAT, volumen de tickets por canal]\nAudiencia y forma de uso: [ej. los jefes de equipo lo consultan al inicio de cada turno]\nHerramienta: [ej. Metabase, Tableau, Grafana]\n\nPropón un diseño con secciones, tipos de gráficos para cada métrica y mejores prácticas de experiencia de usuario para una lectura rápida y clara de un vistazo."
        },
        {
          "title": "Narrativa de storytelling con datos",
          "text": "Ayúdame a transformar estos datos en una narrativa clara y convincente para una presentación.\n\nHallazgos clave: [enumera de 3 a 5 conclusiones principales de tu análisis]\nAudiencia: [ej. interesados o directivos no técnicos, comité de dirección]\nObjetivo de la presentación: [ej. conseguir aprobación para invertir en mejoras de retención]\n\nRedacta un arco narrativo que comience con la conclusión más importante, la respalde con datos y finalice con una recomendación clara. Mantenlo conciso y sin tecnicismos innecesarios."
        },
        {
          "title": "Anotaciones en un gráfico",
          "text": "Ayúdame a redactar anotaciones para este gráfico para que sea autoexplicativo.\n\nTipo de gráfico: [ej. gráfico de líneas]\nQué muestra: [ej. ingresos mensuales durante los últimos 2 años]\nMomentos clave a destacar: [ej. lanzamiento del producto en marzo, cambio de precios en agosto, caída en diciembre]\nAudiencia: [ej. inversores en un pitch deck]\n\nRedacta de 3 a 5 etiquetas de anotación breves y contundentes, junto con un título y subtítulo de una sola línea para el gráfico."
        }
      ]
    },
    {
      "cat": "Limpieza de Datos",
      "prompts": [
        {
          "title": "Checklist de limpieza de datos",
          "text": "Genera una lista de control (checklist) exhaustiva de limpieza de datos para mi conjunto de datos.\n\nDescripción del dataset: [describe columnas, tipos de datos, origen y ámbito]\nProblemas conocidos: [enumera problemas ya identificados, ej. filas duplicadas, formatos de fecha inconsistentes, valores ausentes en columnas clave]\nUso posterior: [ej. alimentar un modelo de machine learning, construir un dashboard]\n\nOrganiza la lista por orden de prioridad e incluye las comprobaciones concretas a ejecutar y cómo resolver cada anomalía."
        },
        {
          "title": "Estrategia para tratar valores ausentes",
          "text": "Ayúdame a decidir cómo tratar los valores ausentes (nulos) en mi conjunto de datos.\n\nColumna con valores ausentes: [nombre de la columna y qué representa]\nPorcentaje de datos faltantes: [ej. 18 %]\nTipo de dato: [ej. numérico, categórico, fecha y hora]\nUso posterior de la columna: [ej. es una variable predictora en un modelo de regresión]\n\nCompara las opciones (eliminar filas, imputar con media/mediana/moda, imputación basada en modelos, etiquetar como categoría separada) y recomienda el enfoque más apropiado con justificación."
        },
        {
          "title": "Detectar valores atípicos (outliers)",
          "text": "Ayúdame a detectar y gestionar valores atípicos (outliers) en mi conjunto de datos.\n\nColumna: [nombre de la columna y qué representa]\nTipo de dato: [numérico / fecha y hora]\nEstadísticos de la muestra: [ej. mín.: 0, máx.: 99.000, media: 450, mediana: 380, desviación estándar: 1.200]\nContexto: [ej. valor de pedidos en euros; importes muy altos podrían ser pedidos legítimos al por mayor o errores en los datos]\n\nSugiere métodos de detección apropiados (rango intercuartílico/IQR, z-score, Isolation Forest, etc.), proporciona código en [Python/SQL] y aconseja sobre cómo tratar los valores atípicos confirmados."
        },
        {
          "title": "Estandarizar datos inconsistentes",
          "text": "Ayúdame a estandarizar valores inconsistentes en esta columna.\n\nNombre de la columna: [ej. país]\nMuestra de valores desordenados: [ej. 'USA', 'United States', 'US', 'u.s.a', 'America']\nFormato de salida deseado: [ej. códigos de país ISO 3166-1 alfa-2]\nHerramienta: [ej. Python pandas, SQL, dbt]\n\nEscribe el código para mapear y estandarizar estos valores, gestionar casos extremos y marcar aquellos valores que no puedan asociarse de forma automática."
        }
      ]
    },
    {
      "cat": "Python y R",
      "prompts": [
        {
          "title": "Crear pipeline de datos con pandas",
          "text": "Escribe un pipeline de datos con pandas para la siguiente tarea:\n\nEntrada: [describe la fuente de datos, ej. un archivo CSV con columnas: user_id, event_type, timestamp, revenue]\nTransformaciones requeridas:\n1. [ej. filtrar solo eventos de compra]\n2. [ej. agregar ingresos por usuario por mes]\n3. [ej. calcular tasa de crecimiento intermensual]\nSalida: [describe el resultado esperado, ej. un DataFrame con una fila por usuario y por mes]\n\nEscribe código limpio y legible con comentarios. Utiliza encadenamiento de métodos (method chaining) donde aporte mayor claridad."
        },
        {
          "title": "Crear visualización con matplotlib/seaborn",
          "text": "Escribe código en Python para generar la siguiente visualización:\n\nTipo de gráfico: [ej. mapa de calor, gráfico de barras agrupadas, serie temporal con intervalo de confianza]\nDatos: [describe la estructura del DataFrame, ej. df tiene columnas: mes, categoría, valor]\nRequisitos de estilo: [ej. fondo oscuro, paleta accesible para personas con daltonismo, sin bordes de gráfico]\nSalida: [ej. guardar como PNG a 300 DPI]\n\nUsa matplotlib y/o seaborn. Incluye título adecuado, etiquetas en los ejes y leyenda. Déjalo listo para publicación o presentación."
        },
        {
          "title": "Ideas de ingeniería de variables (Feature Engineering)",
          "text": "Sugiere ideas de ingeniería de variables para mi conjunto de datos de machine learning.\n\nObjetivo de predicción: [ej. si un usuario se dará de baja (churn) en los próximos 30 días]\nVariables brutas disponibles: [enuméralas con sus tipos, ej. signup_date (fecha), last_login (fecha), num_sessions (entero), plan_type (categórica)]\nGranularidad de los datos: [ej. una fila por usuario]\n\nSugiere de 10 a 15 variables derivadas, explica la intuición detrás de cada una y proporciona el código en pandas para crearlas."
        },
        {
          "title": "Escribir script de validación de datos",
          "text": "Escribe un script de validación de datos en Python para mi conjunto de datos.\n\nDataset: [describe columnas, tipos y origen]\nReglas de validación a aplicar:\n1. [ej. user_id debe ser no nulo y único]\n2. [ej. event_date debe estar comprendido entre 2020-01-01 y hoy]\n3. [ej. revenue debe ser >= 0]\n4. [ej. status debe ser uno de: activo, inactivo, pendiente]\n\nEl script debe imprimir un resumen de las infracciones detectadas en lugar de detenerse en el primer error. Utiliza pandas o Great Expectations."
        }
      ]
    },
    {
      "cat": "Informes y Reportes",
      "prompts": [
        {
          "title": "Resumen ejecutivo a partir de datos",
          "text": "Escribe un resumen ejecutivo basado en las siguientes conclusiones extraídas de los datos.\n\nContexto: [ej. revisión de rendimiento del Q1 2026 para un producto SaaS]\nMétricas clave:\n- [métrica 1]: [valor y variación respecto al periodo anterior]\n- [métrica 2]: [valor y variación]\n- [métrica 3]: [valor y variación]\nEventos relevantes: [ej. lanzamiento de la funcionalidad X en febrero, pérdida de una cuenta importante en marzo]\n\nEscribe un resumen ejecutivo de entre 150 y 200 palabras. Comienza con la conclusión más importante, sé directo con los problemas identificados y finaliza con las 2 o 3 prioridades clave para el próximo trimestre."
        },
        {
          "title": "Informe semanal de métricas",
          "text": "Escribe un informe semanal de métricas conciso para los siguientes datos.\n\nEquipo / producto: [ej. equipo de Crecimiento, app móvil]\nSemana: [ej. semana del 17 de marzo de 2026]\nMétricas de esta semana:\n- [métrica]: [valor] frente a [valor de la semana anterior]\n- [métrica]: [valor] frente a [valor de la semana anterior]\nLogros destacados: [victorias o eventos notables]\nPreocupaciones: [caídas o anomalías]\n\nFormátalo como una actualización corta para Slack o correo: 3 a 5 puntos, lenguaje claro y sin jerga técnica. Marca los puntos que requieran atención inmediata."
        },
        {
          "title": "Informe de resultados de prueba A/B",
          "text": "Escribe un resumen claro de los resultados de mi prueba A/B orientado a una audiencia no técnica.\n\nNombre del experimento: [ej. nuevo flujo de pago / checkout]\nHipótesis: [ej. simplificar el proceso a 2 pasos aumentará la conversión]\nControl frente a variante: [describe el cambio]\nResultados:\n- Métrica principal: [ej. tasa de conversión] — Control: [X %], Variante: [Y %], incremento relativo: [Z %]\n- Significancia estadística: [ej. p=0,03, IC 95 %: +1,2 % a +4,8 %]\n- Métricas secundarias: [métricas de control/guarda y sus resultados]\nDuración de la prueba: [ej. 14 días, 25.000 usuarios por grupo]\n\nExplica qué significan los resultados, si se recomienda lanzar el cambio y posibles advertencias a tener en cuenta."
        },
        {
          "title": "Documentación de diccionario de datos",
          "text": "Escribe un diccionario de datos para la siguiente tabla o conjunto de datos.\n\nNombre de la tabla: [ej. pedidos]\nColumnas:\n- [nombre_columna]: [tipo de dato, ej. INT] — [breve descripción de su contenido]\n- [nombre_columna]: [tipo de dato] — [descripción]\n- [añadir más según corresponda]\nAudiencia: [ej. nuevos analistas de datos que se incorporan al equipo]\n\nPara cada columna incluye: nombre, tipo de dato, descripción, valores de ejemplo, si admite nulos y cualquier peculiaridad o advertencia conocida. Dale formato de tabla limpia en markdown."
        }
      ]
    }
  ],
  "design": [
    {
      "cat": "Revisión de UI",
      "prompts": [
        {
          "title": "Crítica de diseño de interfaz (UI)",
          "text": "Actúa como un diseñador de producto sénior. Haz una crítica constructiva de este diseño de interfaz (UI):\n\n[describe la pantalla o pega una descripción/captura]\n\nEvalúa: jerarquía visual, espaciado, tipografía, uso del color y consistencia. Sé específico sobre qué mejorar y por qué."
        },
        {
          "title": "Auditoría de accesibilidad",
          "text": "Audita esta interfaz (UI) en busca de problemas de accesibilidad según las pautas WCAG 2.1 AA:\n\n[describe la UI o enumera sus componentes]\n\nComprueba: contraste de color, navegación por teclado, estados de foco, compatibilidad con lectores de pantalla, tamaños de áreas táctiles y uso de atributos ARIA. Clasifica los problemas según su gravedad."
        },
        {
          "title": "Revisión de adaptabilidad móvil (Responsive)",
          "text": "Revisa este diseño de interfaz para evaluar su adaptabilidad a dispositivos móviles:\n\n[describe el diseño o lista los componentes]\n\nIdentifica: elementos que no escalarán adecuadamente, áreas táctiles demasiado pequeñas, contenidos que se desbordarán y problemas de espaciado en pantallas reducidas. Sugiere soluciones específicas."
        },
        {
          "title": "Análisis de jerarquía visual",
          "text": "Analiza la jerarquía visual de esta interfaz de usuario:\n\n[describe la distribución de la pantalla y sus elementos]\n\nIdentifica: en qué elemento se fijará primero la mirada del usuario, si la jerarquía se ajusta al objetivo previsto para el usuario y qué modificaciones mejorarían el escaneo visual y la comprensión."
        }
      ]
    },
    {
      "cat": "Investigación de UX",
      "prompts": [
        {
          "title": "Preguntas para entrevistas con usuarios",
          "text": "Escribe una guía de entrevista con usuarios para investigar [tema o funcionalidad, ej. 'cómo gestionan las personas sus finanzas'].\n\nIncluye: 3 preguntas de calentamiento o introducción, de 8 a 10 preguntas centrales y 2 preguntas de cierre. Utiliza formulaciones abiertas. Evita preguntas tendenciosas que condicionen la respuesta."
        },
        {
          "title": "Crear arquetipo de usuario (User Persona)",
          "text": "Crea una persona de usuario (user persona) realista para [producto o funcionalidad].\n\nUsuario objetivo: [describe a grandes rasgos, ej. 'diseñadores gráficos freelance, 28–40 años']\n\nIncluye: nombre, edad, ocupación, metas, frustraciones, comportamientos clave y una cita textual breve. Mantenla fundamentada en la realidad y práctica para el diseño."
        },
        {
          "title": "Guion de prueba de usabilidad",
          "text": "Escribe un guion para una prueba de usabilidad sobre [funcionalidad o flujo, ej. 'el proceso de compra o checkout'].\n\nIncluye: introducción del facilitador, recordatorio de consentimiento, de 4 a 6 escenarios de tareas con contexto realista y preguntas de sondeo posteriores a cada tarea. Evita desvelar la ruta correcta."
        },
        {
          "title": "Diseño de encuesta para feedback de funcionalidades",
          "text": "Diseña una encuesta de usuarios para recopilar opiniones sobre [funcionalidad, ej. 'nuestro nuevo flujo de bienvenida / onboarding'].\n\nIncluye: 1 pregunta de tipo NPS o CSAT, de 4 a 6 preguntas de valoración numérica o de opción múltiple y 2 preguntas abiertas. El tiempo para completarla debe ser inferior a 3 minutos. Sugiere el orden de preguntas más idóneo."
        }
      ]
    },
    {
      "cat": "Sistemas de Diseño",
      "prompts": [
        {
          "title": "Convención de nombres de componentes",
          "text": "Propón una convención de nomenclatura para componentes de interfaz en nuestro sistema de diseño.\n\nContexto: [ej. 'Usamos React, Figma y combinamos componentes atómicos y compuestos']\n\nCubre: nombres de componentes, nomenclatura de variantes, nombres de props y estructura de nombres para archivos y capas en Figma. Proporciona ejemplos para Botón, Modal y Campo de Formulario."
        },
        {
          "title": "Documentar componente de diseño",
          "text": "Escribe una documentación clara para este componente de interfaz:\n\nComponente: [nombre del componente, ej. 'Notificación Toast']\nProps/variantes: [enuméralas]\nContexto de uso: [dónde se utiliza]\n\nIncluye: descripción general, cuándo usarlo frente a cuándo no usarlo, tabla de propiedades (props), notas de accesibilidad y un ejemplo de uso."
        },
        {
          "title": "Estructura de design tokens",
          "text": "Propón una estructura de design tokens para [nombre del producto o sistema de diseño].\n\nColores de marca: [enumera los colores clave]\nTipografía: [enumera familias tipográficas o escala]\nContexto: [ej. app web, app móvil o ambas]\n\nOrganiza los tokens en: color, tipografía, espaciado, radio de bordes (border-radius), sombras y animaciones (motion). Muestra ejemplos de tokens tanto primitivos como semánticos."
        },
        {
          "title": "Auditoría de librería de patrones",
          "text": "Ayúdame a auditar nuestra biblioteca de patrones en busca de inconsistencias.\n\nAquí tienes la lista de nuestros componentes y variantes actuales:\n\n[pega la lista de componentes]\n\nIdentifica: patrones duplicados que cumplen el mismo fin, incoherencias de nomenclatura, lagunas donde falta un componente reutilizable y componentes que puedan ser excesivamente específicos para resultar reutilizables."
        }
      ]
    },
    {
      "cat": "Wireframing y Arquitectura",
      "prompts": [
        {
          "title": "Flujo de usuario para una funcionalidad",
          "text": "Diseña el flujo de usuario para [funcionalidad, ej. 'restablecer la contraseña'].\n\nObjetivo del usuario: [describe qué desea lograr el usuario]\nPunto de entrada: [dónde comienza el usuario]\n\nEnumera cada paso que da el usuario, las decisiones que afronta y posibles rutas de error o casos extremos. Preséntalo como un flujo numerado con bifurcaciones donde sea preciso."
        },
        {
          "title": "Arquitectura de información para una sección",
          "text": "Propón la arquitectura de información para [sección de la aplicación, ej. 'el área de configuración de un panel de control SaaS'].\n\nTipos de usuario: [enumera si hay varios]\nTareas clave que realizan los usuarios: [lista de 4 a 6 tareas]\n\nSugiere una estructura de navegación con secciones principales, subsecciones y el contenido o acciones en cada una. Justifica tus agrupaciones."
        },
        {
          "title": "Propuesta de estructura de navegación",
          "text": "Propón una estructura de navegación para [producto, ej. 'una herramienta B2B de gestión de proyectos'].\n\nFuncionalidades principales: [lista las funcionalidades centrales]\nRoles de usuario: [lista roles si aplica]\n\nRecomienda: elementos de navegación principal, navegación secundaria y cómo gestionar el acceso basado en roles. Ten en cuenta patrones tanto de barra lateral en escritorio como de navegación inferior en móviles."
        },
        {
          "title": "Diseño de flujo de onboarding",
          "text": "Diseña un flujo de incorporación (onboarding) para [producto, ej. 'una aplicación móvil de seguimiento de hábitos'].\n\nMeta del nuevo usuario: [qué necesita lograr para experimentar valor]\nPasos de configuración obligatorios: [enumera los indispensables, ej. 'crear primer hábito']\n\nPropón: secuencia de pantallas, qué pedir de inmediato frente a qué posponer, indicador de progreso y cómo gestionar las opciones de omitir o configurar más tarde. Mantén el tiempo hasta obtener valor lo más corto posible."
        }
      ]
    },
    {
      "cat": "Microcopy y Textos de UX",
      "prompts": [
        {
          "title": "Redacción de mensajes de error",
          "text": "Escribe mensajes de error claros y comprensibles para el usuario en estos escenarios:\n\n[enumera los escenarios de error, ej. 'formato de correo inválido', 'archivo demasiado grande', 'sesión caducada']\n\nPara cada uno: redacta el título del error, una explicación sencilla de lo ocurrido y la acción que debe realizar el usuario. Tono: [ej. cercano, profesional, minimalista]."
        },
        {
          "title": "Textos para estados vacíos (Empty States)",
          "text": "Escribe textos para pantallas de estado vacío en estos casos de interfaz:\n\n[enumera estados, ej. 'sin resultados de búsqueda', 'aún no hay notificaciones', 'ningún archivo subido']\n\nPara cada uno: escribe un encabezado, una explicación de 1 o 2 frases y un llamado a la acción si corresponde. Tono: [ej. motivador, neutro, desenfadado]. Evita frases de relleno vacías como 'Nada que ver por aquí'."
        },
        {
          "title": "Variaciones de texto para botones y CTAs",
          "text": "Escribe variaciones de texto para botones y llamados a la acción (CTA) para [acción o funcionalidad, ej. 'iniciar prueba gratuita'].\n\nContexto: [dónde aparece el botón, ej. 'página de precios', 'estado vacío', 'cabecera de modal']\nTono: [ej. directo, enfocado en el beneficio, sin fricción]\n\nProporciona de 6 a 8 opciones de texto ordenadas de mayor a menor asertividad. Explica los pros y contras de cada una."
        },
        {
          "title": "Tooltips y textos de ayuda",
          "text": "Escribe tooltips y textos de ayuda para los siguientes elementos de interfaz:\n\n[enumera elementos, ej. 'campo de clave de API', 'selector de ciclo de facturación', 'ajuste de frecuencia de notificaciones']\n\nPara cada uno: escribe un tooltip conciso (menos de 15 palabras) y un texto de ayuda opcional más largo para usar en línea. Prioriza la claridad sobre el ingenio."
        }
      ]
    },
    {
      "cat": "Presentación y Defensa de Diseño",
      "prompts": [
        {
          "title": "Justificación de decisiones de diseño",
          "text": "Ayúdame a redactar una justificación sólida para esta decisión de diseño:\n\nDecisión: [describe lo que se decidió, ej. 'Cambiamos de un diseño con pestañas a una página única desplazable']\nContexto: [qué problema resuelve o qué dato/aprendizaje motivó el cambio]\nAlternativas consideradas: [enumera 1 o 2]\n\nEscribe una explicación concisa que pueda compartir con las partes interesadas que cubra: el problema, la decisión tomada, por qué es la solución idónea y las concesiones asumidas."
        },
        {
          "title": "Esquema de presentación para revisión de diseño",
          "text": "Crea un esquema de presentación para una sesión de revisión de diseño sobre [nombre de la funcionalidad o proyecto].\n\nAudiencia: [ej. 'equipo de producto + líderes de ingeniería']\nObjetivo de la sesión: [ej. 'obtener aprobación final antes de desarrollo' o 'recoger opiniones sobre la dirección conceptual']\nFase: [ej. 'concepto inicial', 'maquetas refinadas', 'diseños finales']\n\nIncluye: secciones sugeridas, qué mostrar en cada una, distribución del tiempo y cómo formular la petición de feedback."
        },
        {
          "title": "Narrativa de comparación antes y después",
          "text": "Escribe una narrativa de 'antes y después' para esta mejora de diseño:\n\nAntes: [describe el diseño anterior y sus problemas]\nDespués: [describe el nuevo diseño y qué cambió]\nMétricas o feedback de usuarios (si existen): [pega si están disponibles]\n\nRedacta una historia concisa que pueda usar en un caso de estudio o en una actualización a stakeholders explicando el problema, el hallazgo y el impacto del cambio."
        },
        {
          "title": "Síntesis de feedback de partes interesadas",
          "text": "Ayúdame a resumir y sintetizar las notas de feedback de los stakeholders tras una sesión de revisión de diseño:\n\n[pega las notas o comentarios brutos]\n\nOrganízalo en: temas principales, peticiones concretas aplicables, dudas que requieren aclaración y opiniones que entran en conflicto entre sí. Señala cualquier comentario que contradiga la investigación con usuarios o los principios de diseño."
        }
      ]
    }
  ],
  "student": [
    {
      "cat": "Estudio y Aprendizaje",
      "prompts": [
        {
          "title": "Crear guía de estudio sobre un tema",
          "text": "Crea una guía de estudio completa para [tema].\n\nIncluye:\n- Conceptos clave y definiciones\n- Fechas, fórmulas o nombres importantes para memorizar\n- Errores conceptuales habituales que se deben vigilar\n- Un resumen rápido para repasar justo antes del examen\n\nNivel: [principiante / intermedio / avanzado]"
        },
        {
          "title": "Explicar concepto mediante analogías",
          "text": "Explícame [concepto] utilizando analogías claras de la vida cotidiana.\n\nSoy estudiante de [curso/nivel] de [materia]. Entiendo [concepto relacionado] pero se me dificulta comprender este en concreto.\n\nUtiliza al menos dos analogías diferentes y comprueba mi comprensión al final con una pregunta rápida."
        },
        {
          "title": "Generar preguntas y respuestas para flashcards",
          "text": "Genera 10 pares de preguntas y respuestas para tarjetas de estudio (flashcards) sobre el siguiente tema:\n\n[tema o pega aquí tus apuntes]\n\nFormatea cada tarjeta como:\nP: [pregunta]\nR: [respuesta concisa]\n\nCombina preguntas de memoria fáctica, comprensión conceptual y aplicación práctica."
        },
        {
          "title": "Resumir capítulo de libro de texto",
          "text": "Resume el siguiente capítulo de libro de texto en apuntes claros y concisos.\n\n[pega el texto del capítulo aquí]\n\nOrganiza el resumen con:\n- Idea central (1–2 oraciones)\n- Puntos clave (lista con viñetas)\n- Términos a recordar (con sus definiciones)\n- Aspectos con alta probabilidad de aparecer en un examen"
        }
      ]
    },
    {
      "cat": "Redacción de Ensayos",
      "prompts": [
        {
          "title": "Generador de esquema de ensayo",
          "text": "Genera un esquema detallado para un ensayo a partir de la siguiente consigna:\n\n[consigna del ensayo]\n\nAsignatura: [nombre de la materia]\nLímite de palabras: [ej. 1500 palabras]\nEstilo de argumentación: [persuasivo / analítico / comparativo / expositivo]\n\nIncluye una tesis principal, oraciones temáticas para cada párrafo del cuerpo y puntos de apoyo y argumentación."
        },
        {
          "title": "Taller de formulación de tesis",
          "text": "Ayúdame a formular una tesis sólida para mi ensayo.\n\nTema: [tema]\nMi idea o postura inicial: [describe tu idea preliminar]\nTipo de trabajo: [argumentativo / analítico / de investigación]\n\nProporciona tres opciones diferentes de enunciado de tesis, desde una opción prudente hasta una más audaz, con una breve valoración sobre la fuerza de cada una."
        },
        {
          "title": "Reforzar argumentación de un párrafo",
          "text": "Revisa este párrafo de mi ensayo y ayúdame a reforzar su argumentación.\n\n[pega el párrafo aquí]\n\nEspecíficamente analiza:\n1. ¿La afirmación es clara y defendible?\n2. ¿Las evidencias están bien integradas?\n3. ¿El análisis explica claramente el 'por qué importa' o la trascendencia de la idea?\n\nReescribe el párrafo con tus mejoras y explica cada cambio realizado."
        },
        {
          "title": "Escribir párrafo de introducción",
          "text": "Escribe un párrafo introductorio atractivo para mi ensayo.\n\nTema: [tema]\nTesis: [tu enunciado de tesis]\nAudiencia: [ej. profesor, lector general]\nTono: [académico / semiformal]\n\nComienza con una frase gancho, aporta un breve contexto y concluye con la tesis. Luego ofrece una opción alternativa de gancho inicial."
        }
      ]
    },
    {
      "cat": "Investigación Académica",
      "prompts": [
        {
          "title": "Refinamiento de pregunta de investigación",
          "text": "Ayúdame a perfeccionar mi pregunta de investigación.\n\nPregunta actual: [tu borrador de pregunta]\nÁrea de estudio: [disciplina académica]\nAlcance: [ej. trabajo de grado universitario, 3000 palabras, un cuatrimestre]\n\n¿Es demasiado amplia, demasiado estrecha o tiene el alcance adecuado? Sugiere tres versiones refinadas y explica por qué cada una es más sólida."
        },
        {
          "title": "Síntesis de revisión bibliográfica",
          "text": "Sintetiza los temas clave y debates principales en la literatura académica sobre [tema].\n\nContexto: Estoy escribiendo un [tipo de trabajo] para [asignatura/nivel].\n\nCubre:\n- Principales corrientes de pensamiento o marcos teóricos\n- Puntos clave de acuerdo y desacuerdo en este campo\n- Lagunas en las investigaciones existentes\n- Términos de búsqueda sugeridos para encontrar más fuentes académicas"
        },
        {
          "title": "Identificar vacíos en la investigación",
          "text": "Estoy investigando sobre [tema]. A partir de las siguientes fuentes y notas, ayúdame a identificar vacíos o lagunas en la literatura académica que mi trabajo podría abordar:\n\n[pega notas o resúmenes de fuentes aquí]\n\n¿Qué perspectivas o ángulos están poco explorados? ¿Qué preguntas siguen sin respuesta? ¿Qué aportaría una contribución original y novedosa?"
        },
        {
          "title": "Ficha de bibliografía anotada",
          "text": "Escribe una entrada de bibliografía anotada para la siguiente fuente.\n\nCita: [cita completa]\nResumen de la fuente: [pega resumen o puntos clave]\nEstilo de citación: [APA / MLA / Chicago]\n\nLa anotación debe incluir: un breve resumen (2–3 oraciones), una evaluación de la credibilidad y relevancia de la fuente, y cómo podría utilizarla en mi trabajo de investigación."
        }
      ]
    },
    {
      "cat": "Matemáticas y Ciencias",
      "prompts": [
        {
          "title": "Explicar concepto matemático paso a paso",
          "text": "Explícame [concepto matemático] paso a paso como si nunca lo hubiera visto antes.\n\nMi nivel actual: [ej. álgebra de secundaria, cálculo universitario de primer curso]\nDónde me atasco: [describe el punto de dificultad]\n\nDesarrolla el concepto con un ejemplo resuelto y luego plantéame un problema un poco más complejo para que lo intente yo. Muestra la solución después."
        },
        {
          "title": "Generador de problemas de práctica",
          "text": "Genera 5 problemas de práctica para [tema/concepto].\n\nDificultad: [fácil / media / difícil]\nMi nivel: [ej. química de bachillerato, física universitaria]\n\nPresenta primero los problemas sin soluciones. Luego, tras una línea separadora, proporciona las soluciones completas paso a paso para cada uno."
        },
        {
          "title": "Estructura de informe de laboratorio",
          "text": "Ayúdame a estructurar un informe de laboratorio para el siguiente experimento:\n\nExperimento: [describe qué hiciste]\nMateria: [ej. Biología, Química, Física]\nNivel académico: [secundaria/bachillerato / universidad]\n\nProporciona las secciones estándar (Título, Resumen/Abstract, Introducción, Metodología, Resultados, Discusión, Conclusión) con viñetas sobre qué incluir en cada una y errores habituales a evitar."
        },
        {
          "title": "Guía práctica del método científico",
          "text": "Guíame en la aplicación del método científico para la siguiente cuestión:\n\nPregunta de investigación: [tu pregunta]\nÁrea disciplinar: [biología / química / física / otra]\n\nPara cada etapa — observación, hipótesis, diseño experimental, recolección de datos, análisis y conclusión — explica qué debería hacer y por qué. Señala consideraciones éticas si corresponde."
        }
      ]
    },
    {
      "cat": "Idiomas",
      "prompts": [
        {
          "title": "Explicación gramatical con ejemplos",
          "text": "Explica la siguiente regla gramatical en [idioma] de forma clara y concisa.\n\nPunto gramatical: [ej. modo subjuntivo, voz pasiva, uso de partículas]\nMi nivel: [A1 / A2 / B1 / B2 / C1]\n\nProporciona:\n- Una explicación de la regla en lenguaje sencillo\n- 5 oraciones de ejemplo con su traducción\n- Los errores más frecuentes que cometen los estudiantes\n- Un ejercicio práctico breve"
        },
        {
          "title": "Vocabulario en contexto",
          "text": "Ayúdame a aprender el siguiente vocabulario en [idioma] en su contexto real.\n\nPalabras: [enumera las palabras aquí]\n\nPara cada palabra proporciona:\n- Definición en español\n- Oración de ejemplo en [idioma] con su traducción\n- Nota sobre el registro (formal / informal / coloquial)\n- Una colocación habitual o frase hecha en la que suele aparecer\n\nLuego crea un párrafo corto que utilice todas las palabras de manera natural."
        },
        {
          "title": "Traducción con notas de matices",
          "text": "Traduce el siguiente texto de [idioma de origen] a [idioma de destino].\n\n[pega el texto aquí]\n\nTras la traducción, añade notas sobre matices explicando:\n- Palabras o expresiones que no tienen traducción directa\n- Referencias culturales que puedan requerir contexto\n- Traducciones alternativas donde el significado sea ambiguo\n- Diferencias de registro o tono entre el texto original y la traducción"
        },
        {
          "title": "Diálogo de práctica de conversación",
          "text": "Escribe un diálogo de práctica realista en [idioma] para la siguiente situación:\n\nSituación: [ej. pedir comida en un restaurante, pedir indicaciones por la calle, una entrevista de trabajo]\nMi nivel: [A1 / A2 / B1 / B2 / C1]\n\nIncluye:\n- El diálogo completo entre dos interlocutores\n- La traducción al español debajo de cada línea\n- Notas de vocabulario para palabras y frases clave\n- Dos preguntas de seguimiento que podría usar para prolongar la conversación"
        }
      ]
    },
    {
      "cat": "Preparación de Exámenes",
      "prompts": [
        {
          "title": "Preguntas de examen de práctica",
          "text": "Genera 10 preguntas de examen de práctica para [materia/tema].\n\nFormato del examen: [opción múltiple / respuesta corta / desarrollo / mixto]\nNivel: [ej. secundaria, bachillerato, primer año de universidad]\nTemas principales en los que centrarse: [lista temas clave]\n\nDespués de las preguntas, proporciona una plantilla de respuestas con breves explicaciones para cada respuesta correcta."
        },
        {
          "title": "Explicar respuesta incorrecta",
          "text": "He respondido mal a esta pregunta de examen. Ayúdame a entender por qué.\n\nPregunta: [pega la pregunta]\nMi respuesta: [lo que escribiste o marcaste]\nRespuesta correcta: [la respuesta correcta]\n\nExplica:\n1. Por qué mi respuesta es incorrecta\n2. Por qué la respuesta correcta es la adecuada\n3. El concepto fundamental subyacente que necesito comprender\n4. Una pregunta de práctica similar para comprobar mi comprensión ahora mismo"
        },
        {
          "title": "Técnicas de memorización para un tema",
          "text": "Dame técnicas de memorización eficaces para recordar [tema/información].\n\nContenido a memorizar: [pega el contenido, lista o concepto]\nFecha del examen: [cuánto tiempo falta]\nPreferencia de estilo de aprendizaje: [visual / verbal / basado en patrones / indiferente]\n\nProporciona al menos tres técnicas diferentes (ej. reglas mnemotécnicas, método de loci o palacio de la memoria, fragmentación/chunking) con ejemplos específicos aplicados a este contenido."
        },
        {
          "title": "Checklist de repaso de última hora",
          "text": "Crea una lista de repaso de última hora para mi próximo examen.\n\nMateria: [asignatura]\nEl examen es en: [ej. 24 horas, 3 días]\nTemas incluidos: [enumera los temas principales]\nFormato: [opción múltiple / ensayo / resolución de problemas]\n\nPrioriza qué repasar primero, destaca los conceptos de mayor rendimiento en puntuación e incluye una breve lista de errores comunes a evitar durante el examen."
        }
      ]
    }
  ],
  "productivity": [
    {
      "cat": "Planificación",
      "prompts": [
        {
          "title": "Sesión de planificación semanal",
          "text": "Ayúdame a planificar mi semana. Aquí están mis tareas, fechas límite y compromisos:\n\n[enumera todo lo que tienes pendiente]\n\nOrganiza esto en un horario día a día, señala posibles conflictos y sugiere qué posponer. Prioriza según el impacto."
        },
        {
          "title": "Desglosar un proyecto grande",
          "text": "Tengo un proyecto de gran envergadura y necesito dividirlo en partes manejables:\n\nProyecto: [describe el proyecto y su objetivo]\nFecha límite: [fecha]\nTamaño del equipo: [número de personas o individual]\n\nCrea un desglose por fases con hitos, dependencias y tiempo estimado por tarea."
        },
        {
          "title": "Matriz de prioridades (urgente/importante)",
          "text": "Ayúdame a construir una matriz de prioridades para mi carga de trabajo actual. Clasifica cada elemento en: Hacer ya, Programar, Delegar o Descartar.\n\nMis tareas:\n[enumera tus tareas aquí]\n\nPara cada una, explica brevemente el motivo de su clasificación."
        },
        {
          "title": "Definición de objetivos trimestrales",
          "text": "Ayúdame a fijar objetivos para el próximo trimestre. Mi rol es [puesto/función] y mi objetivo principal es [describe lo que intentas conseguir].\n\nRedacta de 3 a 5 objetivos SMART con métricas de éxito, acciones clave por objetivo y una forma sencilla de monitorizar el progreso semanalmente."
        }
      ]
    },
    {
      "cat": "Reuniones",
      "prompts": [
        {
          "title": "Plantilla de orden del día para reunión",
          "text": "Crea una agenda estructurada para esta reunión:\n\nTipo de reunión: [ej. sincronización semanal, lanzamiento de proyecto, retrospectiva]\nDuración: [tiempo]\nAsistentes: [roles o nombres]\nObjetivo: [qué debe decidirse o lograrse]\n\nIncluye bloques de tiempo para cada punto y un resultado deseado claro."
        },
        {
          "title": "Resumir notas de reunión",
          "text": "Resume estas notas de reunión en un formato limpio y fácil de escanear con tres secciones: Decisiones Clave, Tareas Pendientes (con responsables y fechas límite) y Preguntas Abiertas.\n\nNotas en bruto:\n[pega tus notas aquí]"
        },
        {
          "title": "Extraer tareas pendientes de notas",
          "text": "Extrae todas las acciones y tareas pendientes de estas notas de reunión. Para cada una identifica: la tarea, el responsable (si se menciona) y la fecha de entrega (si se menciona). Formátalo como una lista numerada.\n\nNotas de la reunión:\n[pega las notas aquí]"
        },
        {
          "title": "Correo de seguimiento tras reunión",
          "text": "Escribe un correo conciso de seguimiento para una reunión que acaba de terminar.\n\nTema de la reunión: [tema]\nAsistentes: [nombres o roles]\nDecisiones clave tomadas: [enuméralas]\nAcciones pendientes: [lista con responsables]\nPróxima reunión: [fecha o por determinar]\n\nMantenlo breve y profesional."
        }
      ]
    },
    {
      "cat": "Correo Electrónico",
      "prompts": [
        {
          "title": "Redactar correo profesional",
          "text": "Escribe un correo electrónico profesional con los siguientes detalles:\n\nPara: [destinatario y su función]\nContexto: [antecedentes de la situación]\nMensaje o petición principal: [lo que necesitas comunicar]\nTono: [ej. formal, cordial, directo]\n\nMantenlo conciso y finaliza con un siguiente paso claro."
        },
        {
          "title": "Responder a un correo difícil",
          "text": "Ayúdame a responder a este correo de forma profesional y comedida.\n\nEl correo recibido:\n[pega el correo aquí]\n\nMi situación: [añade contexto relevante]\nResultado deseado: [lo que quiero que ocurra tras enviar mi respuesta]\n\nRedacta una respuesta firme pero constructiva."
        },
        {
          "title": "Plantillas de correo reutilizables",
          "text": "Crea [número] plantillas de correo reutilizables para [caso de uso, ej. contacto de seguimiento con clientes, informes de estado de proyecto, bienvenida a nuevos contactos].\n\nCada plantilla debe incluir línea de asunto, cuerpo del mensaje con [marcadores de posición] para personalizar y un llamado a la acción. Mantén cada una por debajo de 150 palabras."
        },
        {
          "title": "Rechazar solicitud educadamente",
          "text": "Ayúdame a redactar un correo educado pero claro declinando esta solicitud:\n\nLa solicitud: [describe lo que te han pedido]\nMotivo por el que la declino: [motivo breve y honesto]\nRelación con el remitente: [colega, cliente, responsable directo, etc.]\n\nSugiere una alternativa o suaviza la negativa cuando sea apropiado. Mantenlo breve."
        }
      ]
    },
    {
      "cat": "Toma de Decisiones",
      "prompts": [
        {
          "title": "Marco de toma de decisiones",
          "text": "Necesito tomar una decisión entre las siguientes opciones:\n\nOpción A: [describir]\nOpción B: [describir]\nOpción C: [describir, o eliminar si solo hay dos]\n\nContexto: [qué está en juego, restricciones, plazos]\n\nEvalúa cada opción según: impacto, esfuerzo, riesgo y reversibilidad. Recomienda la mejor opción con una justificación fundamentada."
        },
        {
          "title": "Análisis pre-mortem",
          "text": "Realiza un análisis pre-mortem sobre este plan. Asume que han pasado [6 meses / 1 año] y que el plan ha fracasado por completo.\n\nEl plan: [describe tu plan o iniciativa]\n\nEnumera las causas más probables de su fracaso, las señales de advertencia tempranas que debería vigilar y las correcciones que debería introducir en el plan ahora mismo."
        },
        {
          "title": "Pros y contras con criterios ponderados",
          "text": "Ayúdame a evaluar esta decisión mediante criterios ponderados.\n\nDecisión: [qué estoy decidiendo]\nOpciones: [lista de opciones]\nCriterios importantes para mí (pondera su importancia del 1 al 5): [lista de criterios, ej. coste, rapidez, calidad, riesgo]\n\nConstruye una tabla de puntuación ponderada, califica cada opción y recomienda la alternativa ganadora."
        },
        {
          "title": "Análisis de impacto en partes interesadas",
          "text": "Analiza el impacto que tendrá esta decisión o cambio en las partes interesadas (stakeholders):\n\nLa decisión: [descríbela]\nPartes interesadas involucradas: [enumera grupos o personas]\n\nPara cada parte interesada identifica: cómo se ve afectada (positiva o negativamente), su reacción probable y qué debería comunicar o hacer yo para gestionar su respuesta."
        }
      ]
    },
    {
      "cat": "Comunicación",
      "prompts": [
        {
          "title": "Informe de estado de proyecto",
          "text": "Escribe una actualización de estado de proyecto para [audiencia, ej. dirección, el equipo, un cliente].\n\nProyecto: [nombre y descripción en una línea]\nEstado: [en plazo / en riesgo / retrasado]\nCompletado en este periodo: [enumerar]\nPlanificado para el siguiente periodo: [enumerar]\nBloqueos o riesgos: [enumerar, o indicar ninguno]\n\nLimítalo a una sola página. Sé directo respecto a los riesgos."
        },
        {
          "title": "Explicar concepto técnico a público no técnico",
          "text": "Explica [concepto o término técnico] a alguien sin experiencia técnica previa. Utiliza una analogía sencilla, evita tecnicismos y mantenlo por debajo de 150 palabras. La audiencia es [descríbela, ej. ejecutivos, clientes, equipo de RR. HH.]."
        },
        {
          "title": "Feedback para un miembro del equipo",
          "text": "Ayúdame a redactar un feedback constructivo y claro para un miembro de mi equipo.\n\nSituación: [qué ocurrió y cuándo]\nImpacto: [cómo afectó al equipo, proyecto o resultado]\nConducta a tratar: [sé específico, sin personalizar]\nCambio deseado: [qué deseas que haga de forma distinta]\n\nEstructúralo usando el modelo SBI (Situación, Conducta, Impacto) y mantén un tono de apoyo."
        },
        {
          "title": "Correo de escalado de problemas",
          "text": "Escribe un correo de escalado para una situación que se encuentra bloqueada o en riesgo.\n\nProblema: [describe la incidencia con claridad]\nImpacto si no se resuelve: [plazos, riesgo de negocio o coste]\nQué se ha intentado ya: [acciones tomadas hasta la fecha]\nQué necesito: [decisión, recursos o acción de desbloqueo]\nDestinatario: [su cargo y relación con el problema]\n\nSé directo y orientado a soluciones, sin tono acusatorio."
        }
      ]
    },
    {
      "cat": "Productividad Personal",
      "prompts": [
        {
          "title": "Optimización de rutina matutina",
          "text": "Ayúdame a diseñar una rutina de mañana productiva. Esta es mi situación actual:\n\nHora a la que despierto: [hora]\nTiempo disponible antes de empezar a trabajar: [duración]\nRutina actual: [descríbela o indica ninguna]\nObjetivos que deseo apoyar: [ej. concentración, forma física, calma mental, estudio]\nLimitaciones: [ej. hijos, desplazamientos, espacio limitado]\n\nDiseña una rutina realista con bloques de tiempo y explica el propósito de cada elemento."
        },
        {
          "title": "Diseño de registro de hábitos",
          "text": "Ayúdame a diseñar un registro de hábitos (habit tracker) para los siguientes hábitos que quiero consolidar:\n\nHábitos: [enuméralos]\nPeriodo de seguimiento: [diario / semanal]\nFormato preferido: [checklist simple, columnas en hoja de cálculo, diario de reflexión, etc.]\n\nPara cada hábito, sugiere un detonante, una versión mínima viable para días complicados y una métrica para medir el avance."
        },
        {
          "title": "Plantilla de revisión semanal",
          "text": "Crea una plantilla de revisión semanal que pueda utilizar cada [día de la semana] para reflexionar y planificar.\n\nMis principales áreas de enfoque: [ej. proyectos de trabajo, salud, relaciones, aprendizaje]\nTiempo disponible para la revisión: [duración]\n\nIncluye preguntas de reflexión, una sección para registrar logros y aprendizajes, y una sección de planificación para la semana entrante. Haz que sea práctica y rápida de completar."
        },
        {
          "title": "Plan de aprendizaje de una nueva habilidad",
          "text": "Crea un plan de aprendizaje estructurado para [habilidad que quiero aprender].\n\nMi nivel actual: [principiante absoluto / nociones básicas / intermedio]\nTiempo que puedo dedicar: [horas a la semana]\nFecha límite u objetivo: [fecha o flexible]\nEstilo de aprendizaje preferido: [vídeos, lecturas, proyectos prácticos, cursos, etc.]\n\nDivide el plan en etapas con recursos específicos, hitos clave y una forma de evaluar mi progreso en cada fase."
        }
      ]
    }
  ],
  "legal": [
    {
      "cat": "Contratos",
      "prompts": [
        {
          "title": "Revisar contrato en busca de cláusulas de riesgo",
          "text": "Revisa este contrato e identifica señales de alerta (red flags), cláusulas inusuales o términos excesivamente desfavorables. Señala cualquier punto que pueda generar riesgos o responsabilidades significativas:\n\n[pega el texto del contrato aquí]\n\nPara cada problema detectado, explica el riesgo y sugiere cómo mejorarlo o renegociarlo."
        },
        {
          "title": "Resumir términos clave de un contrato",
          "text": "Resume los términos clave de este contrato en un lenguaje claro y comprensible. Cubre: partes implicadas, vigencia, condiciones de pago, obligaciones de cada parte, causas de rescisión y restricciones destacables:\n\n[pega el texto del contrato aquí]"
        },
        {
          "title": "Borrador de estructura de acuerdo de confidencialidad (NDA)",
          "text": "Redacta un esquema para un acuerdo de confidencialidad (NDA) entre:\n\nParte divulgadora: [nombre/tipo, ej. una startup SaaS]\nParte receptora: [nombre/tipo, ej. un cliente corporativo potencial]\nPropósito: [ej. evaluar una integración de software]\nDuración: [ej. 2 años]\n\nIncluye las cláusulas estándar de un NDA: definición de información confidencial, obligaciones, excepciones, vigencia y recursos legales."
        },
        {
          "title": "Comparar dos versiones de un contrato",
          "text": "Compara estas dos versiones de un contrato y resume las diferencias clave. Resalta cualquier cambio que altere de forma sustancial derechos, obligaciones, responsabilidad o pagos:\n\nVersión 1:\n[pega aquí]\n\nVersión 2:\n[pega aquí]"
        }
      ]
    },
    {
      "cat": "Cumplimiento Normativo (Compliance)",
      "prompts": [
        {
          "title": "Checklist de cumplimiento del RGPD",
          "text": "Crea una lista de comprobación de cumplimiento del RGPD para una [tipo de entidad, ej. empresa SaaS B2B] que recopila [tipos de datos, ej. direcciones de correo y analítica de uso] de usuarios de la UE.\n\nCubre: base legal para el tratamiento, consentimiento, derechos de los interesados, retención de datos, notificación de brechas de seguridad y requisitos para encargados del tratamiento (DPA)."
        },
        {
          "title": "Evaluación de tratamiento de datos",
          "text": "Ayúdame a llevar a cabo una evaluación de tratamiento de datos para la siguiente actividad:\n\nActividad: [describe, ej. envío de correos de marketing a residentes de la UE]\nDatos recopilados: [enumera tipos de datos]\nEncargados o terceros implicados: [lista, ej. Mailchimp, Stripe]\n\nIdentifica obligaciones legales de cumplimiento, riesgos y medidas de seguridad recomendadas."
        },
        {
          "title": "Análisis de impacto de cambio normativo",
          "text": "Analiza el impacto de esta modificación regulatoria en nuestra organización:\n\nNormativa: [nombre y jurisdicción, ej. Ley de Inteligencia Artificial de la UE, SB 1047 de California]\nNuestra actividad: [breve descripción]\nPrácticas actuales: [describe las prácticas actuales relevantes]\n\n¿Qué debemos cambiar? Prioriza según el nivel de urgencia."
        },
        {
          "title": "Guía de preparación para auditorías",
          "text": "Ayúdanos a prepararnos para una próxima auditoría de [tipo de auditoría, ej. SOC 2 Tipo II, ISO 27001, auditoría RGPD].\n\nNuestra organización: [breve descripción]\nAlcance de la auditoría: [describir]\nPlazo disponible: [ej. la auditoría es en 3 meses]\n\nProporciona una lista priorizada de lo que debemos preparar, hallazgos habituales que conviene subsanar proactivamente y la documentación que debemos tener lista."
        }
      ]
    },
    {
      "cat": "Políticas Corporativas",
      "prompts": [
        {
          "title": "Esquema de política de privacidad",
          "text": "Redacta un esquema para una política de privacidad para:\n\nProducto/servicio: [describir]\nDatos recopilados: [enumera los tipos, ej. nombre, correo, datos de pago, datos de navegación]\nServicios de terceros utilizados: [ej. Stripe, Google Analytics, AWS]\nUbicación de los usuarios: [ej. España, UE y EE. UU.]\n\nIncluye todas las secciones requeridas por el RGPD y la CCPA. Redáctalo en un lenguaje claro y accesible."
        },
        {
          "title": "Redactar política de uso aceptable",
          "text": "Escribe una política de uso aceptable (AUP) para [nombre del producto/plataforma], que es [describe el producto, ej. una herramienta de colaboración en la nube para empresas].\n\nIncluye: usos permitidos, conductas prohibidas, medidas de control y consecuencias, y cómo reportar infracciones.\n\nEl tono debe ser claro y profesional, sin excesivos tecnicismos legales."
        },
        {
          "title": "Sección para manual del empleado",
          "text": "Escribe una sección para nuestro manual del empleado sobre [tema, ej. política de teletrabajo / seguridad de la información / uso de redes sociales].\n\nTipo de empresa: [describir]\nNormas principales a incluir: [enumerar]\nTono: [ej. cercano pero firme]\n\nHazlo fácil de comprender e incluye qué se espera de ellos, qué conductas no están permitidas y las consecuencias en caso de incumplimiento."
        },
        {
          "title": "Borrador de código de conducta",
          "text": "Redacta un borrador de código de conducta para [tipo de organización, ej. un proyecto de código abierto / una startup tecnológica].\n\nValores clave a reflejar: [enumerar, ej. inclusión, respeto, transparencia]\nÁmbito de aplicación: [ej. colaboradores, empleados, eventos]\n\nIncluye: comportamientos esperados, conductas inaceptables, procedimiento de denuncia y medidas disciplinarias."
        }
      ]
    },
    {
      "cat": "Propiedad Intelectual",
      "prompts": [
        {
          "title": "Preparación para búsqueda de marcas",
          "text": "Ayúdame a preparar una búsqueda de antecedentes de marca para lo siguiente:\n\nMarca propuesta: [nombre o frase]\nProductos/servicios: [describe qué comercializas o haces]\nJurisdicciones: [ej. España, UE, EE. UU.]\n\nExplica qué buscar en el registro, qué factores determinan si una marca es registrable y qué posibles conflictos de anterioridad vigilar."
        },
        {
          "title": "Búsqueda del estado de la técnica para patentes",
          "text": "Ayúdame a sintetizar el estado de la técnica (prior art) relevante para el concepto de esta invención antes de solicitar una patente:\n\nDescripción de la invención: [describe en lenguaje accesible]\nCampo tecnológico: [ej. machine learning, biotecnología, software]\n\nExplica qué implica el estado de la técnica, qué fuentes consultar y ayúdame a articular en qué reside la novedad de esta invención."
        },
        {
          "title": "Comparación de licencias de código abierto",
          "text": "Compara estas licencias open source para nuestro caso de uso:\n\nLicencias a comparar: [ej. MIT, Apache 2.0, GPL v3, AGPL]\nNuestro caso de uso: [ej. estamos construyendo un producto SaaS comercial que incluye librerías de código abierto]\n\nPara cada licencia, explica: qué podemos hacer, qué estamos obligados a hacer y qué no podemos hacer. Recomienda la licencia más apropiada para nuestro proyecto."
        },
        {
          "title": "Checklist de cesión de propiedad intelectual",
          "text": "Crea una lista de verificación de cesión de derechos de propiedad intelectual cuando contratamos [freelancers / empleados / contratistas] para desarrollar [describe el trabajo, ej. funcionalidades de software].\n\n¿Qué cláusulas indispensables deben figurar en el contrato? ¿Qué comprobaciones debemos realizar? ¿Qué errores frecuentes evitar para asegurar que la titularidad de la PI se transfiera correctamente a la empresa?"
        }
      ]
    },
    {
      "cat": "Negocio y Legalidad Comercial",
      "prompts": [
        {
          "title": "Estructura de condiciones de servicio",
          "text": "Redacta una propuesta de estructura para las condiciones de servicio (Terms of Service) para:\n\nProducto: [describir]\nModelo de negocio: [ej. suscripción SaaS, marketplace, comercio electrónico]\nBase de usuarios: [ej. particulares, empresas]\n\nIncluye: condiciones de la cuenta, pagos y reembolsos, usos prohibidos, limitación de responsabilidad, resolución de litigios y ley aplicable. Señala qué apartados requieren indispensablemente la revisión de un abogado."
        },
        {
          "title": "Evaluación de riesgos de responsabilidad civil",
          "text": "Ayúdame a evaluar los riesgos de responsabilidad legal para esta actividad de negocio:\n\nActividad: [describe, ej. ofrecer análisis financieros generados por IA a inversores particulares]\nTipo de empresa: [describir]\nJurisdicciones: [dónde operas]\n\nIdentifica las principales categorías de riesgo legal, su probabilidad e impacto potencial, y sugiere medidas concretas de mitigación."
        },
        {
          "title": "Términos clave para acuerdo de colaboración",
          "text": "Detalla los términos y cláusulas clave que deben incluirse en un acuerdo de colaboración o alianza entre:\n\nParte A: [describir]\nParte B: [describir]\nNaturaleza de la alianza: [ej. reparto de ingresos sobre un producto desarrollado conjuntamente]\n\nCubre: roles y responsabilidades, reparto de ingresos/beneficios, titularidad de la propiedad intelectual, toma de decisiones, causas de salida y resolución de conflictos."
        },
        {
          "title": "Checklist de revisión de contratos de proveedores",
          "text": "Crea una lista de verificación para revisar contratos de proveedores antes de su firma. Nuestra empresa es [describe, ej. una startup fintech en fase Serie A].\n\nNos preocupan especialmente: [lista de aspectos clave, ej. gestión y custodia de datos, SLAs, límites de indemnización, derechos de cancelación]\n\n¿Qué cláusulas debemos comprobar siempre, cuáles son las condiciones desfavorables habituales de los proveedores y qué puntos debemos renegociar?"
        }
      ]
    },
    {
      "cat": "Lenguaje Claro y Accesible",
      "prompts": [
        {
          "title": "Simplificar lenguaje legal",
          "text": "Reescribe este texto legal en un lenguaje claro y sencillo que cualquier persona sin formación jurídica pueda comprender. Mantén intacto todo el sentido original, pero elimina tecnicismos innecesarios, construcciones pasivas y complejidades superfluas:\n\n[pega el texto legal aquí]\n\nPúblico destinatario: [ej. consumidores generales / autónomos y pequeños empresarios]"
        },
        {
          "title": "Redactar aviso legal para usuarios",
          "text": "Redacta un aviso orientado al usuario final para el siguiente requisito legal:\n\nRequisito: [ej. consentimiento de RGPD para correos comerciales / aviso de cookies / actualización de retención de datos]\nContexto: [dónde aparecerá el aviso, ej. formulario de registro / banner en la app]\nTono: [ej. cercano, conciso, transparente]\n\nHazlo claro, honesto y lo más breve posible sin omitir lo fundamental."
        },
        {
          "title": "Preguntas frecuentes a partir de documento legal",
          "text": "Convierte este documento legal en una sección de preguntas frecuentes (FAQ) en lenguaje llano que los usuarios realmente lean y comprendan. Extrae los puntos más relevantes y las dudas más previsibles de los usuarios:\n\n[pega el documento aquí]\n\nFormátalo como preguntas y respuestas. Apunta a entre 8 y 12 preguntas. Limita cada respuesta a 2 o 3 oraciones."
        },
        {
          "title": "Adaptar política formal a guía práctica para empleados",
          "text": "Toma esta política formal y reescríbela como una guía amena y práctica para los empleados. El objetivo es que el personal realmente la entienda y la aplique en su día a día, no solo que firme su conformidad.\n\nPolítica:\n[pega aquí]\n\nIncluye: qué implica en la práctica diaria, ejemplos concretos de conductas correctas e incorrectas, y qué pasos dar ante cualquier duda."
        }
      ]
    }
  ],
  "sales": [
    {
      "cat": "Prospección",
      "prompts": [
        {
          "title": "Escribir correo de prospección en frío",
          "text": "Escribe un correo de prospección en frío dirigido a un cliente potencial.\n\nNombre de la empresa: [empresa del prospecto]\nCargo del destinatario: [ej. Director Comercial, Responsable de Operaciones]\nNuestro producto/servicio: [breve descripción]\nPropuesta de valor clave: [qué problema resolvemos]\nObjetivo deseado: [ej. concertar una llamada de 20 minutos]\n\nMantenlo por debajo de 150 palabras. Comienza con su punto de dolor, no con nuestro producto. Finaliza con un único llamado a la acción (CTA) de baja fricción."
        },
        {
          "title": "Secuencia de mensajes y conexión en LinkedIn",
          "text": "Escribe una secuencia de contacto de 3 pasos en LinkedIn para un cliente potencial en frío.\n\nPerfil del prospecto: [cargo, empresa, sector]\nNuestra oferta: [producto/servicio y beneficio principal]\n\nPaso 1: Nota de solicitud de contacto (menos de 300 caracteres)\nPaso 2: Primer mensaje tras conectar (enfocado en aportar valor, sin venta directa, menos de 100 palabras)\nPaso 3: Mensaje de seguimiento si no responde tras 5 días (recordatorio sutil, menos de 80 palabras)\n\nTono: profesional pero cercano y humano. Evita aperturas trilladas como 'He visto tu perfil'."
        },
        {
          "title": "Investigar prospecto antes de una llamada",
          "text": "Ayúdame a investigar a este cliente potencial antes de una llamada de ventas.\n\nNombre del prospecto: [nombre]\nCargo: [título del puesto]\nEmpresa: [nombre de la empresa]\nSector: [industria]\nObjetivo de la llamada: [ej. cualificación/descubrimiento, demo, cierre]\n\nProporciona:\n1. 5 preguntas inteligentes que demuestren criterio según sus prioridades previsibles\n2. 3 posibles dolores o problemas habituales para alguien en su puesto\n3. 2 tendencias sectoriales recientes que pueda mencionar para generar credibilidad\n4. Un rompehielos inicial basado en su rol o compañía"
        },
        {
          "title": "Definir el perfil de cliente ideal (ICP)",
          "text": "Ayúdame a definir el perfil de cliente ideal (ICP) para nuestro producto.\n\nProducto/servicio: [describe qué vendes]\nMejores clientes actuales: [describe de 2 a 3 ejemplos si existen]\nProblema que resolvemos: [describe el dolor central]\nNivel de precios: [aproximado]\n\nResultado esperado:\n1. Perfil firmográfico (tamaño de empresa, sector, ubicación geográfica, facturación)\n2. Señales tecnográficas (herramientas y software que probablemente utilizan)\n3. Detonantes de compra (qué acontecimientos disparan su necesidad)\n4. Anti-ICP: a quiénes NO debemos dirigirnos y por qué"
        }
      ]
    },
    {
      "cat": "Descubrimiento y Cualificación",
      "prompts": [
        {
          "title": "Guion de preguntas para llamada de descubrimiento",
          "text": "Crea una estructura de preguntas para una llamada de descubrimiento en ventas.\n\nProducto/servicio: [qué comercializamos]\nPerfil objetivo: [rol y sector]\nDuración de la llamada: [ej. 30 minutos]\n\nEstructura las preguntas según este orden:\n1. Situación (2-3 preguntas para comprender su estado actual)\n2. Problema (2-3 preguntas para destapar dolores y fricciones)\n3. Implicación (2 preguntas para explorar el coste de no resolver el problema)\n4. Necesidad y beneficio (2 preguntas para que el cliente verbalice el valor de solucionarlo)\n\nIncluye una pregunta abierta de cierre para definir los siguientes pasos."
        },
        {
          "title": "Identificación de puntos de dolor",
          "text": "A partir de las siguientes notas de una llamada de descubrimiento, identifica los puntos de dolor centrales del prospecto y ordénalos por urgencia.\n\nNotas de la llamada:\n[pega tus notas aquí]\n\nPara cada punto de dolor:\n1. Nómbralo y descríbelo con claridad\n2. Cita o parafrasea lo que dijo el prospecto\n3. Evalúa la urgencia: Alta / Media / Baja\n4. Indica qué funcionalidad o resultado de nuestro producto le da respuesta\n\nSeñala también posibles dolores implícitos no expresados directamente."
        },
        {
          "title": "Plantilla de análisis de necesidades",
          "text": "Ayúdame a completar un análisis de necesidades a partir de esta conversación con un prospecto.\n\nCliente potencial: [nombre, cargo, empresa]\nObjetivo declarado por el prospecto: [cita o paráfrasis]\nProceso o herramienta actual: [qué utilizan hoy]\nFrustraciones mencionadas: [enuméralas]\nPlazo indicado: [si lo hay]\nIndicios presupuestarios: [si los hay]\n\nGenera un análisis estructurado de necesidades que incluya:\n- Necesidad principal\n- Necesidades secundarias\n- Criterios de éxito (¿qué significa para ellos haberlo resuelto con éxito?)\n- Siguiente paso recomendado en el ciclo comercial"
        },
        {
          "title": "Checklist de cualificación (BANT / MEDDIC)",
          "text": "Evalúa a este prospecto frente a marcos de cualificación de ventas.\n\nProspecto: [nombre, cargo, empresa]\nNotas de descubrimiento: [pega notas]\n\nCalifícalo según ambos métodos:\n\nBANT:\n- Presupuesto (Budget): [conocido / desconocido / confirmado]\n- Autoridad (Authority): [decisor / prescriptor / desconocido]\n- Necesidad (Need): [fuerte / moderada / débil / dudosa]\n- Plazo (Timeline): [urgente / menos de 6 meses / sin plazo definido]\n\nMEDDIC:\n- Métricas (Metrics): [¿impacto cuantificado identificado?]\n- Comprador económico (Economic Buyer): [¿identificado?]\n- Criterios de decisión (Decision Criteria): [¿conocidos?]\n- Proceso de decisión (Decision Process): [¿mapeado?]\n- Dolor identificado (Identify Pain): [¿confirmado?]\n- Campeón interno (Champion): [¿contamos con uno?]\n\nRecomienda: Cualificar / Madurar (Nurture) / Descartar — argumentando la decisión."
        }
      ]
    },
    {
      "cat": "Presentación y Demostración",
      "prompts": [
        {
          "title": "Adaptar discurso de ventas al perfil del cliente",
          "text": "Adapta nuestro discurso comercial a un perfil específico de comprador.\n\nNuestro producto/servicio: [descríbelo]\nPropuesta de valor central: [1-2 oraciones]\nPerfil del prospecto: [cargo, tipo de empresa, sector]\nSus prioridades previsibles: [ej. reducción de costes, productividad del equipo, cumplimiento]\nPuntos de dolor detectados: [en la fase de descubrimiento]\n\nReescribe el argumento de ventas para que:\n1. Abra destacando lo más prioritario para este perfil\n2. Use su propio lenguaje y términos (sin jerga técnica interna)\n3. Vincule nuestras funcionalidades directamente con sus problemas planteados\n4. Termine con un motivo de peso para avanzar de inmediato"
        },
        {
          "title": "Guion para demostración de producto (Demo)",
          "text": "Redacta la estructura de un guion para una llamada de demostración de producto.\n\nProducto: [nombre y descripción breve]\nProspecto: [cargo, empresa, sector]\nPuntos de dolor confirmados en descubrimiento: [enuméralos]\nDuración de la demo: [ej. 30 minutos]\nFuncionalidades clave a destacar: [enumera de 3 a 4]\n\nEstructura:\n1. Apertura (reconfirmar agenda y objetivos, 2 min)\n2. Puesta en contexto (conectar la demo con sus dolores, 3 min)\n3. Recorrido central (funcionalidad por funcionalidad destacando el valor práctico de cada una, 18 min)\n4. Punto de control para resolver dudas y objeciones (4 min)\n5. Cierre (siguientes pasos y llamado a la acción, 3 min)\n\nIncluye una frase de transición entre cada sección."
        },
        {
          "title": "Argumentario de cálculo de ROI",
          "text": "Ayúdame a construir una narrativa de retorno de inversión (ROI) para presentar a un cliente potencial.\n\nNuestro producto/servicio: [descripción]\nTamaño de la empresa del prospecto: [empleados / facturación si se conoce]\nProblema o ineficiencia actual: [describir]\nResultado esperado de nuestra solución: [qué mejoramos]\n\nConstruye un argumento que incluya:\n1. Coste actual del problema (tiempo, dinero o exposición al riesgo)\n2. Estimación prudente de mejora gracias a nuestra solución\n3. Cálculo anual del ROI con supuestos transparentes\n4. Periodo de amortización o retorno (Payback period)\n5. Resumen de una sola frase adecuado para presentar a la dirección\n\nUsa cifras redondeadas y desglosa las hipótesis con claridad para que el prospecto pueda ajustarlas."
        },
        {
          "title": "Resumen de caso de éxito para prospectos",
          "text": "Sintetiza un caso de éxito de un cliente para compartirlo con un prospecto.\n\nCliente: [nombre de la empresa o 'una empresa del sector [industria]']\nSu situación antes de contratarnos: [describir]\nCómo utilizó nuestro producto: [describir]\nResultados alcanzados: [métricas si están disponibles]\nPlazo en el que vieron resultados: [tiempo]\n\nRedacta un resumen de 150 palabras con la estructura:\n- Situación\n- Reto\n- Solución\n- Resultados\n\nLuego redacta una versión condensada en 1 sola frase para insertar en un correo.\nPor último, escribe 2 preguntas de seguimiento para formularle al prospecto y vincular esta historia con su caso particular."
        }
      ]
    },
    {
      "cat": "Manejo de Objeciones",
      "prompts": [
        {
          "title": "Responder a objeción sobre el precio",
          "text": "Ayúdame a responder a una objeción de precio.\n\nLo que dijo el prospecto: \"[cita exacta o paráfrasis]\"\nNuestro precio: [aproximado]\nValor que aportamos: [resultados clave]\nCompetidor o alternativa con la que se comparan: [si se conoce]\n\nRedacta una respuesta que:\n1. Valide su preocupación sin ponerse a la defensiva\n2. Reencuadre el precio como una inversión mediante argumentos de ROI\n3. Desglose el coste por unidad o por día si resulta útil\n4. Proponga un siguiente paso (que no sea un descuento) para seguir avanzando\n\nSugiere también una pregunta aclaratoria previa para identificar si se trata de un problema real de presupuesto o de una falta de percepción de valor."
        },
        {
          "title": "Responder a comparación con la competencia",
          "text": "Ayúdame a gestionar una objeción de comparación con un competidor.\n\nLo que dijo el prospecto: \"[cita o paráfrasis]\"\nCompetidor mencionado: [nombre del competidor]\nQué valoran previsiblemente del competidor: [precio / funcionalidades / marca / relación previa]\nNuestros diferenciadores clave: [enumera de 2 a 3]\n\nEscribe una respuesta que:\n1. Valide positivamente que comparen opciones en el mercado\n2. Reconozca al competidor con respeto (sin descalificaciones)\n3. Reoriente la conversación hacia nuestras fortalezas específicas vinculadas a sus problemas\n4. Proponga criterios de evaluación comparativa que deberían considerar\n\nFinaliza con una pregunta que mantenga el diálogo abierto y en avance."
        },
        {
          "title": "Gestionar la objeción \"no es el momento adecuado\"",
          "text": "Ayúdame a responder a una objeción de temporalidad.\n\nLo que dijo el prospecto: \"[cita o paráfrasis, ej. 'Estamos demasiado ocupados ahora' o 'Hablemos en el tercer trimestre']\"\nLo que sé sobre su contexto: [información de la fase de descubrimiento]\nNuestro tiempo habitual de implantación: [ej. 2 semanas, 1 día]\n\nRedacta una respuesta que:\n1. Empatice con su falta de tiempo o saturación de trabajo\n2. Cuestione amablemente si posponerlo empeora o alivia el problema actual\n3. Ofrezca un paso intermedio de muy bajo compromiso (no la venta completa)\n4. Dé una razón concreta y fundamentada de por qué avanzar ahora es mejor que esperar\n\nMantenla por debajo de 120 palabras. Evita tácticas agresivas de presión."
        },
        {
          "title": "Superar el \"tenemos que pensarlo\"",
          "text": "Ayúdame a responder a la objeción 'tenemos que pensarlo' o 'ya te diremos algo'.\n\nContexto: [punto actual del proceso: demo completada, propuesta entregada, etc.]\nLo que dijo el prospecto: \"[cita textual]\"\nCuál creo que es la duda real: [precio / aprobación interna / miedo al riesgo / falta de claridad sobre el valor]\n\nRedacta una respuesta que:\n1. Respete sus tiempos de decisión sin dejar que la oportunidad se enfríe\n2. Saque a la superficie la verdadera duda con una pregunta directa pero prudente\n3. Se ofrezca a ayudar con el factor que frena la decisión (ej. justificación para la dirección)\n4. Concrete una fecha y hora específicas de seguimiento antes de dar por cerrada la llamada"
        }
      ]
    },
    {
      "cat": "Seguimiento Comercial",
      "prompts": [
        {
          "title": "Correo de seguimiento tras la demo",
          "text": "Escribe un correo de seguimiento para enviar en las 24 horas siguientes a una demo de producto.\n\nNombre del cliente potencial: [nombre]\nEmpresa: [empresa]\nFecha de la demo: [fecha]\nPuntos de dolor principales comentados: [enumera de 1 a 3]\nFuncionalidades que generaron mayor interés: [enumerar]\nSiguiente paso acordado: [ej. enviar propuesta, llamada con su equipo, prueba piloto]\nDudas pendientes que surgieron: [si las hubo]\n\nEl correo debe:\n1. Agradecer el tiempo y hacer referencia a un momento concreto de la llamada\n2. Recapitular los 2 o 3 puntos de valor esenciales para sus problemas\n3. Resolver cualquier cuestión pendiente\n4. Confirmar el siguiente paso acordado con una acción clara y fecha\n\nTono: cordial y profesional. Menos de 200 palabras."
        },
        {
          "title": "Reactivar cliente potencial frío",
          "text": "Escribe un correo para reactivar a un cliente potencial que dejó de responder.\n\nNombre del prospecto: [nombre]\nEmpresa: [empresa]\nÚltima interacción: [fecha y qué ocurrió — ej. demo realizada, propuesta enviada]\nTiempo transcurrido desde el último contacto: [ej. 6 semanas]\nPosible motivo por el que guardó silencio: [si se conoce]\nNuevo ángulo o detonante a mencionar: [ej. noticia sobre su empresa, nueva funcionalidad lanzada, novedad en el sector]\n\nEscribe un correo que:\n1. No culpe al cliente ni se disculpe en exceso\n2. Abra con algo nuevo o relevante (nunca con un 'solo quería saber cómo va todo')\n3. Reitere el valor principal en una sola frase\n4. Tenga un único llamado a la acción muy fácil de responder\n\nMenos de 100 palabras."
        },
        {
          "title": "Correo para acompañar el envío de una propuesta",
          "text": "Escribe un correo para acompañar el envío de una propuesta comercial a un prospecto.\n\nNombre del prospecto: [nombre]\nEmpresa: [empresa]\nResumen de la propuesta: [breve descripción de lo que se incluye]\nInversión / importe total: [precio o rango]\nBeneficios clave que obtendrán: [2-3 puntos en viñetas]\nPlazo de validez o fecha de decisión: [si aplica]\nSiguiente paso: [ej. llamada agendada para resolver dudas, firma pendiente]\n\nEl correo debe:\n1. Enmarcar la propuesta como la respuesta a los dolores específicos detectados en descubrimiento\n2. Destacar los 2 o 3 resultados más transformadores\n3. Indicar con claridad dónde consultar los puntos clave del documento\n4. Exponer el siguiente paso sin ambigüedades\n\nTono: seguro y servicial. Menos de 180 palabras."
        },
        {
          "title": "Correo para desatascar una oportunidad encallada",
          "text": "Escribe un correo para desbloquear una negociación que se ha quedado estancada.\n\nNombre del prospecto: [nombre]\nEmpresa: [empresa]\nEtapa de la oportunidad: [ej. propuesta enviada, acuerdo verbal sin firma, pendiente de revisión legal]\nTiempo que lleva estancada: [tiempo]\nÚltima comunicación: [breve resumen]\nCuál sospecho que es el bloqueo: [tu mejor hipótesis]\n\nEscribe un correo que:\n1. No suene a presión ni reproche\n2. Ofrezca un recurso genuinamente útil (ej. una plantilla, datos comparativos, una breve sesión de trabajo para resolver dudas)\n3. Genere una urgencia moderada sin recurrir a presiones artificiales\n4. Proponga una acción concreta con una fecha tentativa\n\nSugiere además una estrategia alternativa en caso de que este correo no reciba respuesta."
        }
      ]
    },
    {
      "cat": "Informes de Ventas",
      "prompts": [
        {
          "title": "Resumen semanal del pipeline de ventas",
          "text": "Escribe un resumen semanal del estado del pipeline para mi responsable comercial o el equipo.\n\nActividad de esta semana:\n- Nuevas oportunidades abiertas: [número y breve descripción]\n- Demos o llamadas completadas: [número]\n- Propuestas enviadas: [número]\n- Operaciones cerradas (ganadas): [número e importe]\n- Operaciones cerradas (perdidas): [número y motivo si se conoce]\n\nFotografía del pipeline:\n- Valor total del pipeline abierto: [importe]\n- Operaciones por fase: [enumerar]\n- Oportunidades en riesgo: [operaciones estancadas o con alertas]\n\nPrioridades para la próxima semana: [lista de 3 a 4 acciones]\n\nFormátalo como un resumen claro y escaneable. Usa lenguaje directo, sin tecnicismos innecesarios."
        },
        {
          "title": "Análisis de oportunidad perdida (Lost Deal)",
          "text": "Ayúdame a redactar un análisis de oportunidad perdida (lost deal analysis).\n\nDatos de la oportunidad:\n- Prospecto: [nombre de la empresa]\nTamaño del contrato: [importe]\nDuración del ciclo de venta: [tiempo]\nEtapa en la que se perdió: [ej. tras la demo, tras la propuesta]\nMotivo manifestado por el cliente: [lo que nos dijeron]\nMotivo real (tu interpretación): [tu valoración sincera]\nCompetidor elegido (si se conoce): [nombre]\n\nAnaliza:\n1. ¿Qué señales pasamos por alto o ignoramos?\n2. ¿En qué punto se rompió el proceso comercial?\n3. ¿Era una oportunidad que podíamos haber ganado? ¿Por qué sí o por qué no?\n4. ¿Qué haríamos de forma diferente si empezáramos de nuevo?\n5. ¿Existe una vía para retomar el contacto en el futuro?\n\nMantén un tono honesto y orientado al aprendizaje, sin posturas defensivas."
        },
        {
          "title": "Análisis de patrones de victorias y derrotas",
          "text": "Analiza estos resultados de ventas ganadas y perdidas para identificar patrones y tendencias.\n\nVictorias recientes:\n[enumera operaciones ganadas: incluye tamaño, sector, cargo del decisor, duración del ciclo y motivo clave]\n\nDerrotas recientes:\n[enumera operaciones perdidas: incluye tamaño, sector, cargo del decisor, duración del ciclo y motivo clave]\n\nIdentifica:\n1. Rasgos comunes de las operaciones que ganamos (ajuste al ICP, caso de uso, rol decisor, tamaño del contrato)\n2. Rasgos comunes de las operaciones que perdemos\n3. Patrones en los motivos por los que ganamos (precio, relación, funcionalidades, rapidez)\n4. Patrones en los motivos por los que perdemos\n5. Recomendaciones: dónde enfocar esfuerzos, qué corregir en el proceso comercial y en qué segmento redoblar la apuesta"
        },
        {
          "title": "Narrativa de previsión de ventas para dirección",
          "text": "Escribe una narrativa de previsión de ventas (forecast) para un informe ante la dirección o el consejo.\n\nPeriodo de previsión: [ej. Q2 2026]\nObjetivo / Cuota: [objetivo total]\nPipeline actual: [valor total]\nPrevisión comprometida (Commit): [lo que estoy seguro de que cerrará]\nMejor escenario (Best Case): [si todo sale favorablemente]\nRiesgos a vigilar: [operaciones que podrían retrasarse]\n\nOperaciones clave a destacar:\n[enumera de 3 a 5 con nombre/marcador, fase, valor y fecha prevista de cierre]\n\nRedacta una narrativa de 200 palabras que:\n1. Declare la cifra principal con contundencia\n2. Explique en qué se fundamenta la confianza de cierre\n3. Nombre con transparencia los riesgos clave y las acciones para mitigarlos\n4. Concluya con una petición o apoyo concreto requerido de la dirección (si aplica)\n\nTono: seguro y basado en datos, sin justificaciones a la defensiva."
        }
      ]
    }
  ]
};
