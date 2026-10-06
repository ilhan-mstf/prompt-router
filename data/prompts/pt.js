export default {
  "dev": [
    {
      "cat": "Depuração",
      "prompts": [
        {
          "title": "Encontrar o bug",
          "text": "Aqui está o meu código. Ele não está funcionando como esperado.\n\n[cole o código aqui]\n\nO erro ou problema: [descreva-o]\n\nEncontre o bug, explique por que ele acontece e mostre a correção."
        },
        {
          "title": "Explicar este erro",
          "text": "Estou recebendo este erro:\n\n[cole a mensagem de erro]\n\nAqui está o código relevante:\n\n[cole o código aqui]\n\nExplique o que está causando esse erro e como corrigi-lo."
        },
        {
          "title": "Depurar problema de desempenho",
          "text": "Este código está rodando mais devagar do que o esperado:\n\n[cole o código aqui]\n\nAnalise o perfil da lógica, identifique gargalos e sugira otimizações específicas com exemplos de antes/depois."
        },
        {
          "title": "Corrigir teste com falha",
          "text": "Este teste está falhando:\n\n[cole o código do teste]\n\nA saída de erro:\n\n[cole o erro]\n\nAqui está a implementação que ele testa:\n\n[cole o código]\n\nExplique por que o teste falha e como corrigi-lo."
        }
      ]
    },
    {
      "cat": "Revisão de Código",
      "prompts": [
        {
          "title": "Revisar bugs e qualidade",
          "text": "Revise este código em busca de bugs, casos extremos e problemas de qualidade. Seja específico sobre o que está errado e sugira correções:\n\n[cole o código aqui]"
        },
        {
          "title": "Revisão de segurança",
          "text": "Revise este código em busca de vulnerabilidades de segurança (injeção, problemas de autenticação, exposição de dados, OWASP Top 10). Avalie a severidade e sugira correções:\n\n[cole o código aqui]"
        },
        {
          "title": "Revisar diff de PR",
          "text": "Aqui está o diff de um PR. Revise-o quanto à correção, estilo, desempenho e possíveis problemas. Seja conciso e prático:\n\n[cole o diff aqui]"
        },
        {
          "title": "Sugerir melhorias",
          "text": "Revise este código e sugira melhorias de legibilidade, manutenibilidade e estilo idiomático. Mantenha a mesma funcionalidade:\n\n[cole o código aqui]"
        }
      ]
    },
    {
      "cat": "Refatoração",
      "prompts": [
        {
          "title": "Refatorar para legibilidade",
          "text": "Refatore este código para torná-lo mais legível e fácil de manter. Mantenha o mesmo comportamento. Explique cada alteração feita:\n\n[cole o código aqui]"
        },
        {
          "title": "Extrair lógica reutilizável",
          "text": "Este código possui lógica duplicada ou fortemente acoplada. Extraia funções/módulos reutilizáveis mantendo o mesmo comportamento:\n\n[cole o código aqui]"
        },
        {
          "title": "Converter para async/await",
          "text": "Converta este código baseado em callbacks ou encadeamento de promises para usar async/await. Trate os erros adequadamente:\n\n[cole o código aqui]"
        },
        {
          "title": "Simplificar função complexa",
          "text": "Esta função está muito complexa. Divida-a em funções menores e bem nomeadas. Mantenha as mesmas entradas e saídas:\n\n[cole o código aqui]"
        }
      ]
    },
    {
      "cat": "Testes",
      "prompts": [
        {
          "title": "Escrever testes unitários",
          "text": "Escreva testes unitários abrangentes para esta função. Cubra caminhos felizes, casos extremos e cenários de erro. Use [framework de teste]:\n\n[cole o código aqui]"
        },
        {
          "title": "Escrever teste de integração",
          "text": "Escreva um teste de integração para este recurso. Ele deve testar o fluxo completo de [início] até [fim]:\n\n[cole o código/API aqui]\n\nUse [framework de teste]."
        },
        {
          "title": "Gerar casos de teste",
          "text": "Liste todos os casos de teste que devo escrever para esta função. Agrupe-os por: caminho feliz, casos extremos, tratamento de erros e condições de limite:\n\n[cole o código aqui]"
        },
        {
          "title": "Aumentar cobertura de testes",
          "text": "Este código não possui testes. Analise-o, identifique os caminhos mais críticos e escreva testes em ordem de prioridade. Use [framework de teste]:\n\n[cole o código aqui]"
        }
      ]
    },
    {
      "cat": "Arquitetura",
      "prompts": [
        {
          "title": "Projetar esquema de banco de dados",
          "text": "Projete um esquema de banco de dados para [descreva seu app/recurso]. Inclua tabelas, colunas, tipos, relacionamentos e índices. Explique suas decisões de arquitetura."
        },
        {
          "title": "Projetar uma API",
          "text": "Projete uma API REST para [recurso/funcionalidade]. Inclua endpoints, métodos, esquemas de requisição/resposta, códigos de status e autenticação. Siga as melhores práticas."
        },
        {
          "title": "Comparar abordagens",
          "text": "Preciso decidir entre estas abordagens para [problema]:\n\nOpção A: [descreva]\nOpção B: [descreva]\n\nCompare-as quanto a: desempenho, facilidade de manutenção, complexidade e escalabilidade. Recomende uma com as devidas justificativas."
        },
        {
          "title": "Design de sistemas",
          "text": "Projete um sistema para [descreva o caso de uso]. Aborde: arquitetura de alto nível, fluxo de dados, armazenamento, estratégia de cache e como ele escala. Identifique potenciais gargalos."
        }
      ]
    },
    {
      "cat": "DevOps",
      "prompts": [
        {
          "title": "Escrever um Dockerfile",
          "text": "Escreva um Dockerfile pronto para produção para este projeto:\n\nLinguagem/framework: [ex.: Node.js, Python Flask]\nRequisitos: [ex.: build em múltiplos estágios, usuário não-root]\n\nInclua as melhores práticas de segurança e otimização de tamanho de imagem."
        },
        {
          "title": "Pipeline de CI/CD",
          "text": "Escreva um fluxo de trabalho (workflow) do GitHub Actions que:\n\n1. [liste os passos, ex.: lint, testes, build, deploy]\n\nLinguagem/framework: [especifique]\nDestino do deploy: [ex.: AWS, Vercel, Docker Hub]\n\nInclua cache e gatilhos apropriados."
        },
        {
          "title": "Depurar falha no CI",
          "text": "Meu pipeline de CI está falhando. Aqui está o log de saída:\n\n[cole o log do CI]\n\nA configuração do pipeline:\n\n[cole a configuração]\n\nIdentifique o problema e sugira uma correção."
        },
        {
          "title": "Infraestrutura como código",
          "text": "Escreva a configuração em [Terraform/CloudFormation/Pulumi] para:\n\n[descreva a infraestrutura, ex.: um bucket S3 com CloudFront, uma VPC com sub-redes]\n\nSiga as melhores práticas de segurança e adicione comentários explicando cada recurso."
        }
      ]
    },
    {
      "cat": "Git e Documentação",
      "prompts": [
        {
          "title": "Escrever mensagem de commit",
          "text": "Escreva uma mensagem de commit clara e convencional para este diff. Use o formato: tipo(escopo): descrição. Seja conciso, mas descritivo:\n\n[cole o diff aqui]"
        },
        {
          "title": "Escrever README",
          "text": "Gere um README.md para este projeto. Inclua: o que ele faz, como instalar, como usar, opções de configuração e como contribuir:\n\n[cole a estrutura do projeto ou arquivo principal aqui]"
        },
        {
          "title": "Documentar este código",
          "text": "Adicione documentação clara e concisa a este código. Inclua docstrings de funções/métodos, descrições de parâmetros, valores de retorno e exemplos de uso:\n\n[cole o código aqui]"
        },
        {
          "title": "Escrever entrada no changelog",
          "text": "Escreva uma entrada de changelog para estas alterações. Agrupe por: Adicionado, Alterado, Corrigido, Removido. Use uma linguagem clara e voltada ao usuário:\n\n[cole o diff ou lista de alterações]"
        }
      ]
    }
  ],
  "writing": [
    {
      "cat": "Blog e Artigos",
      "prompts": [
        {
          "title": "Criar estrutura de post de blog",
          "text": "Crie um esboço detalhado de um post de blog sobre o tema: [tema]\n\nPúblico-alvo: [descreva o público]\nTom: [ex.: informativo, conversacional, de autoridade]\nMeta de contagem de palavras: [ex.: 1500 palavras]\n\nInclua: um título atraente, gancho de introdução, 4 a 6 seções principais com subtópicos e uma conclusão com uma chamada para ação (CTA) clara."
        },
        {
          "title": "Melhorar introdução de artigo",
          "text": "Reescreva a introdução deste artigo para prender imediatamente a atenção do leitor. A introdução atual:\n\n[cole a introdução aqui]\n\nO artigo é sobre: [tema]\nLeitor-alvo: [descreva o público]\n\nTorne a nova introdução envolvente, específica e com menos de 100 palavras. Apresente 3 variações."
        },
        {
          "title": "Gerar ideias para posts de blog",
          "text": "Gere 10 ideias de posts de blog para [descreva o blog/marca] voltado para [público-alvo].\n\nÁrea de foco: [ex.: produtividade, marketing SaaS, finanças pessoais]\n\nPara cada ideia, inclua: um título provisório, o ângulo ou gancho central e para quem é mais útil. Priorize temas específicos, práticos e com bom potencial de ranqueamento."
        },
        {
          "title": "Escrever uma conclusão impactante",
          "text": "Escreva uma conclusão para este post de blog:\n\nTema: [tema]\nPrincipais pontos abordados: [resuma os pontos principais]\nAção desejada após a leitura: [ex.: inscrever-se, compartilhar, testar o produto]\n\nA conclusão deve recapitular o aprendizado central, transmitir sensação de fechamento e terminar com uma chamada para ação clara e natural."
        }
      ]
    },
    {
      "cat": "Redes Sociais",
      "prompts": [
        {
          "title": "Escrever thread no Twitter/X",
          "text": "Escreva uma thread no Twitter/X sobre: [tema]\n\nPúblico: [descreva]\nObjetivo: [ex.: educar, gerar tráfego, construir autoridade]\nNúmero de tweets: [ex.: 8–10]\n\nComece com um tweet de gancho forte, divida o assunto em pontos fáceis de assimilar e finalize com uma CTA clara. Mantenha cada tweet abaixo de 280 caracteres. Use quebras de linha para facilitar a leitura."
        },
        {
          "title": "Escrever post para o LinkedIn",
          "text": "Escreva um post para o LinkedIn sobre: [tema ou experiência]\n\nTom: [ex.: reflexivo, direto, storytelling]\nObjetivo: [ex.: compartilhar uma lição, gerar comentários, construir credibilidade]\n\nComece com uma primeira linha impactante que faça parar a rolagem. Use parágrafos curtos. Inclua um ponto de vista pessoal ou insight. Termine com uma pergunta para incentivar comentários. Mire entre 150 e 250 palavras."
        },
        {
          "title": "Escrever legenda para o Instagram",
          "text": "Escreva uma legenda de Instagram para um post sobre: [descreva a imagem/tema]\n\nVoz da marca: [ex.: bem-humorada, inspiradora, minimalista]\nObjetivo: [ex.: aumentar salvamentos, atrair visitas ao perfil, vender um produto]\n\nInclua: uma frase de abertura envolvente, 2 a 3 frases de texto complementar, uma chamada para ação e de 5 a 10 hashtags relevantes."
        },
        {
          "title": "Calendário de conteúdo para redes sociais",
          "text": "Crie um calendário de conteúdo de 2 semanas para [marca/criador] publicando em [plataformas, ex.: LinkedIn + Instagram].\n\nNicho: [área temática]\nObjetivo: [ex.: atrair seguidores, gerar tráfego, lançar um produto]\nFrequência de postagem: [ex.: 3x por semana por plataforma]\n\nPara cada post inclua: data, plataforma, tipo de conteúdo (ex.: dica, história, promoção) e uma descrição em uma linha sobre a ideia da postagem."
        }
      ]
    },
    {
      "cat": "E-mail",
      "prompts": [
        {
          "title": "Escrever e-mail de prospecção fria",
          "text": "Escreva um e-mail de abordagem inicial (cold email) para a seguinte situação:\n\nRemetente: [seu nome/cargo/empresa]\nDestinatário: [cargo ou perfil da pessoa]\nObjetivo: [ex.: agendar uma reunião, obter uma indicação, propor parceria]\nContexto: [qualquer detalhe relevante sobre o motivo do contato]\n\nMantenha abaixo de 150 palavras. Comece destacando valor ou relevância — não quem você é. Inclua uma CTA de baixo atrito."
        },
        {
          "title": "Escrever introdução de newsletter",
          "text": "Escreva uma introdução para a edição desta semana da newsletter.\n\nNome da newsletter / tema: [descreva]\nEsta edição é sobre: [assunto ou tema principal]\nPúblico: [descreva os assinantes]\nTom: [ex.: caloroso, espirituoso, conciso]\n\nA introdução deve parecer pessoal, antecipar o conteúdo da edição e despertar a vontade de continuar lendo. Mantenha em menos de 80 palavras."
        },
        {
          "title": "Escrever e-mail de follow-up",
          "text": "Escreva um e-mail de acompanhamento (follow-up) para esta situação:\n\nContexto original: [descreva a primeira interação — ex.: reunião comercial, entrevista de emprego, proposta enviada]\nTempo desde o último contato: [ex.: 5 dias]\nObjetivo do follow-up: [ex.: obter uma resposta/decisão, reengajar, confirmar próximos passos]\n\nSeja cordial, mas direto. Faça uma breve referência à conversa anterior. Torne fácil responder. Mantenha abaixo de 100 palavras."
        },
        {
          "title": "Escrever um e-mail delicado",
          "text": "Ajude-me a escrever um e-mail profissional para uma situação delicada:\n\nSituação: [descreva — ex.: pedir desculpas por um prazo perdido, recusar uma solicitação, dar uma notícia ruim]\nDestinatário: [descreva o relacionamento — ex.: cliente, gestor, colega]\nResultado desejado: [o que você quer que aconteça após a leitura]\n\nSeja honesto, assuma a responsabilidade quando apropriado e mantenha um tom construtivo. Evite ficar na defensiva ou se desculpar em excesso."
        }
      ]
    },
    {
      "cat": "Copywriting",
      "prompts": [
        {
          "title": "Escrever descrição de produto",
          "text": "Escreva uma descrição de produto convincente para:\n\nNome do produto: [nome]\nO que faz: [descreva]\nPrincipais recursos: [liste de 3 a 5]\nCliente ideal: [descreva]\nTom: [ex.: sofisticado, descontraído, técnico]\n\nFoque nos benefícios em vez de características. Comece com a principal proposta de valor. Mantenha em menos de 120 palavras e termine com um incentivo natural para a compra."
        },
        {
          "title": "Título e subtítulo para landing page",
          "text": "Escreva 5 combinações de título e subtítulo para uma landing page.\n\nProduto/serviço: [descreva]\nPúblico-alvo: [descreva]\nProposta de valor central: [qual problema resolve ou qual resultado entrega]\nTom: [ex.: arrojado, seguro, espirituoso]\n\nCada título deve ser claro, específico e focado em benefícios. O subtítulo deve aprofundar a ideia e quebrar uma objeção ou adicionar credibilidade."
        },
        {
          "title": "Criar variações de chamada para ação (CTA)",
          "text": "Escreva 10 variações de texto de botão de chamada para ação (CTA) para:\n\nProduto/serviço: [descreva]\nObjetivo da CTA: [ex.: iniciar teste grátis, agendar demonstração, baixar guia]\nTom: [ex.: orientado à ação, sem pressão, instigante]\n\nVarie a abordagem — teste urgência, benefício primeiro, curiosidade e prova social. Mantenha cada opção abaixo de 6 palavras, quando possível."
        },
        {
          "title": "Reescrever na voz da marca",
          "text": "Reescreva o seguinte texto para que combine com o tom de voz da nossa marca.\n\nTexto original:\n[cole o texto aqui]\n\nTom de voz da nossa marca: [descreva — ex.: confiante mas acessível, especialista sem jargões excessivos, caloroso e inteligente]\nPúblico: [descreva]\n\nMantenha a mensagem principal intacta, mas ajuste o tom, a escolha de palavras e a estrutura das frases para adequar à voz da marca. Mostre o antes e depois."
        }
      ]
    },
    {
      "cat": "Edição e Revisão",
      "prompts": [
        {
          "title": "Simplificar texto complexo",
          "text": "Simplifique o seguinte texto para que seja fácil de entender para um público geral sem conhecimento prévio sobre o tema.\n\n[cole o texto aqui]\n\nEvite jargões. Use frases curtas. Substitua termos técnicos por linguagem simples. Preserve o significado original e todas as informações essenciais. Mire em um nível de leitura acessível e claro."
        },
        {
          "title": "Ajustar tom e estilo",
          "text": "Edite o seguinte texto para melhorar seu tom e estilo.\n\nTexto atual:\n[cole o texto aqui]\n\nO tom deve ser: [ex.: mais confiante, menos formal, mais acolhedor, mais conciso]\nMantenha o sentido e os fatos intactos. Mostre a versão revisada e explique brevemente as principais alterações realizadas."
        },
        {
          "title": "Reduzir contagem de palavras",
          "text": "Reduza o seguinte texto para aproximadamente [número desejado de palavras] palavras sem perder a mensagem principal ou alterar o significado.\n\n[cole o texto aqui]\n\nPriorize cortar: palavras de preenchimento, frases redundantes e explicações em excesso. Mantenha os pontos mais importantes, os exemplos mais claros e o vocabulário mais expressivo."
        },
        {
          "title": "Revisar e aprimorar",
          "text": "Revise o texto a seguir e sugira melhorias.\n\n[cole o texto aqui]\n\nVerifique: erros de ortografia e gramática, construções confusas, frases ambíguas e inconsistências de tom. Apresente a versão corrigida acompanhada de uma breve lista das alterações feitas e suas justificativas."
        }
      ]
    },
    {
      "cat": "Escrita Criativa",
      "prompts": [
        {
          "title": "Escrever abertura de conto",
          "text": "Escreva os 3 parágrafos iniciais de um conto com os seguintes detalhes:\n\nGênero: [ex.: ficção literária, ficção científica, suspense]\nCenário: [descreva época e local]\nPersonagem principal: [breve descrição]\nSituação inicial ou conflito: [descreva]\nClima/tom: [ex.: tenso, melancólico, esperançoso]\n\nComece no meio da ação ou em um momento marcante. Prenda o leitor imediatamente. Evite introduções demoradas."
        },
        {
          "title": "Criar diálogo entre personagens",
          "text": "Escreva uma cena de diálogo entre dois personagens:\n\nPersonagem A: [nome, breve descrição, objetivo nesta cena]\nPersonagem B: [nome, breve descrição, objetivo nesta cena]\nSituação: [descreva o que está acontecendo e onde]\nTensão subjacente: [o que realmente está em jogo ou não foi dito]\n\nFaça o diálogo soar natural e revelador. Cada personagem deve ter uma voz própria e distinta. Demonstre o subtexto — o que querem dizer versus o que realmente dizem."
        },
        {
          "title": "Criar metáforas e analogias",
          "text": "Gere 8 metáforas ou analogias originais para explicar o seguinte conceito:\n\nConceito: [descreva a ideia, processo ou coisa]\nPúblico: [quem precisa entender]\nContexto: [onde será usado — ex.: post de blog, palestra, apresentação de produto]\n\nBusque uma variedade de estilos: algumas visuais, algumas emocionais, outras bem-humoradas. Evite clichês. Para cada uma, adicione uma observação de uma frase sobre em que momento ela funciona melhor."
        },
        {
          "title": "Reescrever em estilo diferente",
          "text": "Reescreva o seguinte texto no estilo de [nome do autor ou descrição do estilo, ex.: Machado de Assis, Ernest Hemingway, post de rede social da Geração Z].\n\nTexto original:\n[cole o texto aqui]\n\nCapte a voz, o ritmo das frases, o vocabulário e os padrões estruturais desse estilo. Mantenha o conteúdo central e o significado. Apresente apenas a versão reescrita."
        }
      ]
    }
  ],
  "marketing": [
    {
      "cat": "Planejamento de Campanha",
      "prompts": [
        {
          "title": "Planejar campanha de marketing",
          "text": "Ajude-me a planejar uma campanha de marketing para [produto/serviço].\n\nPúblico-alvo: [descreva]\nObjetivo: [ex.: leads, cadastros, reconhecimento de marca]\nFaixa de orçamento: [valor]\nCronograma: [duração]\n\nEstruture a estratégia da campanha, mensagens-chave, canais, marcos principais e métricas de sucesso."
        },
        {
          "title": "Criar calendário de conteúdo",
          "text": "Crie um calendário de conteúdo de [30/60/90] dias para [marca/produto].\n\nPúblico: [descreva]\nCanais: [ex.: LinkedIn, e-mail, blog, Instagram]\nTemas de conteúdo: [liste os temas]\nMeta de frequência de postagem: [ex.: 3x por semana]\n\nInclua formatos de conteúdo, temas e uma sugestão de cronograma de publicação."
        },
        {
          "title": "Definir persona do público-alvo",
          "text": "Construa uma persona de marketing detalhada para [produto/serviço].\n\nO que sabemos até agora: [descreva seu cliente atual ou hipótese]\n\nInclua: dados demográficos, cargo, objetivos, dores, objeções, canais preferidos e como toma decisões de compra."
        },
        {
          "title": "Análise pós-campanha (post-mortem)",
          "text": "Ajude-me a escrever um relatório de análise pós-campanha (post-mortem) para uma campanha de marketing.\n\nObjetivo da campanha: [ex.: gerar 500 leads]\nResultado real: [o que aconteceu]\nCanais utilizados: [liste]\nMétricas-chave: [CTR, taxa de conversão, CAC, etc.]\n\nAnalise o que funcionou, o que não funcionou, as causas-raiz e recomendações específicas para a próxima campanha."
        }
      ]
    },
    {
      "cat": "SEO",
      "prompts": [
        {
          "title": "Briefing de pesquisa de palavras-chave",
          "text": "Crie um briefing de pesquisa de palavras-chave para [tema/produto].\n\nSite: [URL ou descrição]\nPúblico-alvo: [descreva]\nConcorrentes: [liste se souber]\n\nSugira palavras-chave principais, variações de cauda longa (long-tail), categorias de intenção de busca (informacional, comercial, transacional) e oportunidades de conteúdo para cada cluster."
        },
        {
          "title": "Escrever meta tags para SEO",
          "text": "Escreva title tags e meta descriptions otimizadas para SEO para a seguinte página.\n\nTema da página: [descreva]\nPalavra-chave foco: [palavra-chave]\nURL: [URL da página]\nContagem de palavras da página: [aproximada]\n\nForneça 3 opções de title tag (menos de 60 caracteres cada) e 3 opções de meta description (menos de 155 caracteres cada). Destaque o posicionamento da palavra-chave em cada opção."
        },
        {
          "title": "Análise de lacunas de conteúdo",
          "text": "Realize uma análise de lacunas de conteúdo (content gap) para [site/marca] no segmento de [setor/indústria].\n\nNossos temas de conteúdo existentes: [liste ou descreva]\nPrincipais concorrentes: [liste]\nPúblico-alvo: [descreva]\n\nIdentifique tópicos e palavras-chave para os quais nossos concorrentes ranqueiam e que ainda não cobrimos, priorizando por potencial de tráfego e relevância comercial."
        },
        {
          "title": "Estratégia de links internos",
          "text": "Crie uma estratégia de links internos para um [blog/site] sobre [tema].\n\nPáginas principais existentes: [liste suas páginas pilares ou URLs importantes]\nObjetivo: [ex.: melhorar o ranqueamento para X, reduzir taxa de rejeição, distribuir autoridade de links]\n\nSugira textos-âncora, quais páginas devem linkar para quais e uma estrutura de links que fortaleça a autoridade tópica."
        }
      ]
    },
    {
      "cat": "Anúncios e Mídia Paga",
      "prompts": [
        {
          "title": "Escrever copy para Google Ads",
          "text": "Escreva copies para anúncios no Google Ads para [produto/serviço].\n\nPalavra-chave foco: [palavra-chave]\nURL da landing page: [URL]\nPrincipal benefício: [proposta de valor principal]\nPúblico: [descreva quem verá este anúncio]\n\nForneça 3 títulos (máx. 30 caracteres cada) e 2 descrições (máx. 90 caracteres cada) para um anúncio responsivo de pesquisa. Destaque benefícios, inclua uma CTA e corresponda à intenção da palavra-chave."
        },
        {
          "title": "Variações de anúncios para Facebook/Meta",
          "text": "Escreva 3 variações de anúncios de Facebook/Instagram para [produto/serviço].\n\nPúblico-alvo: [descreva dados demográficos e interesses]\nObjetivo: [ex.: cliques, conversões, reconhecimento]\nOferta principal ou gancho: [descreva]\n\nPara cada variação escreva: texto principal (2 a 3 frases), título (menos de 40 caracteres) e descrição (menos de 25 caracteres). Use um ângulo diferente em cada uma — ex.: foco na dor, prova social e foco na oferta."
        },
        {
          "title": "Ideias de testes A/B para landing page",
          "text": "Gere ideias de testes A/B para a landing page de [produto/serviço].\n\nTaxa de conversão atual: [se souber]\nCTA principal: [ex.: Cadastre-se grátis]\nPrincipal fonte de tráfego: [ex.: Google Ads, Facebook]\nObjetivo da página: [descreva]\n\nListe de 8 a 10 ideias de testes específicas e de alto impacto divididas em: título, texto de CTA, prova social, layout e enquadramento da oferta. Priorize por impacto esperado e facilidade de implementação."
        },
        {
          "title": "Estratégia de segmentação de público para anúncios",
          "text": "Ajude-me a estruturar uma estratégia de segmentação de público para anúncios pagos promovendo [produto/serviço].\n\nPlataforma: [ex.: Meta, Google, LinkedIn]\nOrçamento: [mensal]\nObjetivo: [ex.: leads, vendas, cadastros]\nCliente ideal: [descreva]\n\nRecomende: opções de público frio, segmentos de remarketing, estratégia de lookalike e exclusões. Explique a justificativa para cada recomendação."
        }
      ]
    },
    {
      "cat": "Métricas e Análise",
      "prompts": [
        {
          "title": "Diagnosticar queda de tráfego",
          "text": "Ajude-me a diagnosticar uma queda de tráfego em [site/página].\n\nDetalhes da queda: [ex.: o tráfego orgânico caiu 30% nas últimas 2 semanas]\nData da queda: [data]\nPáginas afetadas: [quais páginas ou se foi em todo o site]\nMudanças recentes: [alterações no site, atualizações de algoritmo, redirecionamentos, etc.]\n\nListe as causas mais prováveis por ordem de probabilidade e forneça passos específicos de investigação e correção para cada uma."
        },
        {
          "title": "Análise de funil",
          "text": "Analise este funil de marketing e identifique onde estamos perdendo usuários.\n\nEtapas do funil e taxas de conversão:\n[ex.: Visitante > Landing page: 100%]\n[Landing page > Cadastro: 12%]\n[Cadastro > Ativação: 40%]\n[Ativação > Compra: 18%]\n\nCompare essas taxas com padrões comuns do mercado, aponte os maiores pontos de desistência e sugira melhorias específicas para cada etapa."
        },
        {
          "title": "Resumo de relatório mensal",
          "text": "Escreva um resumo conciso para o relatório mensal de marketing de [mês].\n\nMétricas principais:\n- Tráfego: [número, comparado ao mês anterior]\n- Leads: [número, comparado ao mês anterior]\n- CAC: [valor]\n- Taxa de conversão: [%]\n- Canal com melhor desempenho: [canal]\n- Principais conquistas: [liste]\n- Desafios: [liste]\n\nEscreva um sumário executivo (3 a 4 frases), uma seção de destaques, uma de desafios e 3 planos de ação claros para o próximo mês."
        },
        {
          "title": "Comparação de modelos de atribuição",
          "text": "Compare modelos de atribuição para uma empresa [B2B/B2C] que vende [produto/serviço].\n\nNossos principais canais de marketing: [ex.: pesquisa paga, orgânico, e-mail, redes sociais]\nCiclo médio de vendas: [ex.: 2 semanas / 3 meses]\nModelo de atribuição atual: [ex.: último clique]\n\nExplique como os modelos de primeiro clique, último clique, linear, decaimento temporal e orientado a dados interpretariam nosso funil de maneira diferente e recomende o mais adequado com justificativa."
        }
      ]
    },
    {
      "cat": "Branding e Marca",
      "prompts": [
        {
          "title": "Escrever declaração de posicionamento de marca",
          "text": "Escreva uma declaração de posicionamento de marca para [empresa/produto].\n\nO que fazemos: [descreva]\nPúblico-alvo: [descreva]\nPrincipal benefício: [valor primordial que entregamos]\nDiferencial: [o que nos torna diferentes das alternativas]\nConcorrentes: [liste os principais]\n\nUse a estrutura: Para [público] que [necessidade], a [marca] é a [categoria] que [benefício] porque [razão para acreditar]. Depois, forneça 2 versões alternativas com ênfases distintas."
        },
        {
          "title": "Diferenciação competitiva",
          "text": "Ajude-me a articular como o(a) [produto/empresa] se diferencia dos concorrentes.\n\nNosso produto: [descreva]\nPrincipais concorrentes: [liste com uma breve descrição de cada]\nNossos pontos fortes: [liste]\nTemas recorrentes no feedback de clientes: [o que os clientes dizem que adoram]\n\nIdentifique nossos diferenciais mais fortes, quais são mais defensáveis e como comunicá-los claramente nos materiais de marketing. Aponte afirmações genéricas que precisem de mais precisão."
        },
        {
          "title": "Diretrizes de tom de voz da marca",
          "text": "Crie diretrizes de tom de voz para [empresa/produto].\n\nO que fazemos: [descreva]\nPúblico-alvo: [descreva]\nPersonalidade que queremos transmitir: [ex.: especialista mas acessível, arrojada, calorosa]\nPersonalidade que queremos evitar: [ex.: corporativa demais, repleta de jargões]\nExemplos de textos que gostamos: [cole se houver]\n\nDefina 4 a 5 atributos de voz, detalhando cada um com descrição, exemplos de 'faça / não faça' e um exemplo de reescrita antes/depois."
        },
        {
          "title": "Brainstorming de slogans (taglines)",
          "text": "Faça um brainstorming de slogans e taglines para [empresa/produto].\n\nO que fazemos: [descreva em uma frase]\nPúblico-alvo: [descreva]\nPrincipal benefício: [proposta de valor central]\nTom: [ex.: direto, reflexivo, confiante, bem-humorado]\nSlogans existentes que não gostamos e por quê: [opcional]\n\nGere 15 opções de slogans. Agrupe-os por abordagem: orientados a benefícios, emocionais e desafiadores. Indique seus 3 favoritos com uma breve justificativa para cada."
        }
      ]
    },
    {
      "cat": "Growth e Aquisição",
      "prompts": [
        {
          "title": "Ideias para programa de indicação",
          "text": "Projete um programa de indicação (referral) para [produto/serviço].\n\nModelo de negócio: [ex.: assinatura SaaS, e-commerce]\nBase de usuários atual: [tamanho aproximado]\nLTV médio do cliente: [valor]\nMeta de custo de aquisição: [CAC alvo]\n\nProponha 3 formatos de programas de indicação com diferentes mecânicas de incentivo (ex.: recompensa para ambos os lados, créditos na plataforma, dinheiro). Para cada um: descreva a mecânica, fluxo de indicação, estrutura de recompensa e impacto esperado no coeficiente viral."
        },
        {
          "title": "Sequência de e-mails de retenção",
          "text": "Escreva uma sequência de e-mails de retenção para usuários que se cadastraram no [produto], mas estão inativos há [X dias].\n\nProduto: [descreva o que faz]\nMotivo comum de desistência: [se souber]\nTom: [ex.: amigável, direto]\nNúmero de e-mails: [ex.: sequência de 3 e-mails]\n\nPara cada e-mail forneça: linha de assunto, texto de pré-visualização, corpo do e-mail e CTA. Estabeleça um espaçamento de [X] dias entre eles. Foque em reconquistar o usuário por meio de valor real, não apenas descontos."
        },
        {
          "title": "Otimização do fluxo de onboarding",
          "text": "Ajude-me a otimizar o fluxo de onboarding do [produto].\n\nEtapas atuais do onboarding: [liste-as]\nPonto de maior abandono: [onde os usuários desistem]\nMeta de tempo até o valor (Time to Value): [ex.: usuário percebe valor em até 5 minutos]\nEvento principal de ativação: [ex.: criar primeiro projeto, convidar um colega de equipe]\n\nIdentifique pontos de atrito no fluxo atual, sugira melhorias específicas para cada etapa e recomende um onboarding mínimo viável que conduza o usuário ao evento de ativação o mais rápido possível."
        },
        {
          "title": "Estratégia de loop viral",
          "text": "Projete uma estratégia de loop viral para [produto/serviço].\n\nTipo de produto: [ex.: ferramenta de colaboração, marketplace, rede social]\nMecanismo atual de crescimento: [descreva como as pessoas chegam até você hoje]\nMomentos naturais de compartilhamento: [quando os usuários naturalmente sentem vontade de compartilhar?]\nMeta de coeficiente viral: [ex.: K > 1]\n\nProponha de 2 a 3 formatos de loops virais. Para cada um: descreva o gatilho, o mecanismo de compartilhamento, o incentivo e o fluxo de conversão dos novos usuários indicados. Estime um coeficiente viral realista para cada."
        }
      ]
    }
  ],
  "job": [
    {
      "cat": "Currículo",
      "prompts": [
        {
          "title": "Reescrever tópicos do currículo",
          "text": "Reescreva estes tópicos de currículo para que fiquem mais fortes, impactantes e orientados a resultados. Use verbos de ação e quantifique conquistas sempre que possível:\n\n[cole seus tópicos aqui]\n\nCargo para o qual estou me candidatando: [cargo]\nSetor/Indústria: [setor]"
        },
        {
          "title": "Adaptar currículo à descrição da vaga",
          "text": "Aqui está o meu currículo atual e a descrição de uma vaga à qual desejo me candidatar. Identifique lacunas, sugira quais habilidades e palavras-chave adicionar ou enfatizar e reescreva as seções mais relevantes para adequá-las ao cargo.\n\nMeu currículo:\n[cole o currículo aqui]\n\nDescrição da vaga:\n[cole a descrição da vaga aqui]"
        },
        {
          "title": "Escrever resumo profissional do currículo",
          "text": "Escreva um resumo profissional convincente para o meu currículo. Deve ter de 3 a 4 frases, destacar meus principais pontos fortes e experiência, e ser sob medida para a oportunidade que busco.\n\nMinha trajetória: [anos de experiência, principais competências, conquistas marcantes]\nCargo desejado: [cargo e setor]"
        },
        {
          "title": "Quantificar conquistas no currículo",
          "text": "Ajude-me a quantificar e fortalecer estas realizações no meu currículo. Se eu não tiver fornecido números, sugira quais métricas posso pesquisar ou estimar para tornar cada tópico mais expressivo:\n\n[cole as realizações aqui]\n\nMeu cargo: [cargo]\nPorte da empresa / setor: [detalhes]"
        }
      ]
    },
    {
      "cat": "Carta de Apresentação",
      "prompts": [
        {
          "title": "Escrever carta de apresentação",
          "text": "Escreva uma carta de apresentação atraente para esta candidatura de emprego. Estruture em 3 parágrafos: por que estou entusiasmado com a empresa, o que agrego à função e uma chamada para ação clara.\n\nMinha formação/experiência: [breve resumo]\nCargo: [cargo]\nEmpresa: [nome da empresa]\nRequisitos principais da vaga: [cole de 3 a 5 requisitos do anúncio]\nUm motivo específico pelo qual quero esta empresa: [seu motivo]"
        },
        {
          "title": "Carta de apresentação para transição de carreira",
          "text": "Escreva uma carta de apresentação para uma candidatura de transição de carreira. Reconheça a mudança de área, conecte minhas competências transferíveis à nova função e demonstre motivação genuína para essa transição.\n\nMinha trajetória atual: [área atual e experiência]\nÁrea/cargo para onde estou migrando: [novo cargo e setor]\nHabilidades transferíveis que possuo: [liste-as]\nPor que estou fazendo essa mudança: [seu motivo]"
        },
        {
          "title": "Carta para transferência interna",
          "text": "Escreva uma carta solicitando uma transferência interna para outra equipe ou função dentro da minha empresa. Destaque meu conhecimento dos processos internos, minhas contribuições até o momento e como essa mudança beneficia tanto a mim quanto à organização.\n\nMeu cargo atual: [cargo e equipe]\nCargo para onde desejo migrar: [cargo e equipe]\nTempo de casa: [duração]\nPrincipais contribuições até agora: [liste 2 a 3]\nMotivo da transferência: [seu motivo]"
        },
        {
          "title": "Follow-up após envio de candidatura",
          "text": "Escreva um e-mail de acompanhamento (follow-up) breve e profissional para enviar após a candidatura a uma vaga. O texto deve reiterar meu interesse, ser cordial, sucinto e não parecer insistente.\n\nCargo: [cargo]\nEmpresa: [nome da empresa]\nData da candidatura: [data]\nNome do responsável pela contratação (se souber): [nome ou 'Gestor de Contratação']"
        }
      ]
    },
    {
      "cat": "Preparação para Entrevistas",
      "prompts": [
        {
          "title": "Praticar perguntas comportamentais (STAR)",
          "text": "Ajude-me a preparar respostas no formato STAR para perguntas comportamentais de entrevista para esta função. Para cada pergunta, estruture com: Situação, Tarefa, Ação e Resultado.\n\nCargo para o qual serei entrevistado: [cargo]\nSetor: [setor]\nMinha experiência: [breve resumo]\n\nComece com estas perguntas comuns:\n1. Fale sobre uma situação em que você lidou com um conflito no trabalho.\n2. Descreva um projeto que você liderou do início ao fim.\n3. Conte sobre uma ocasião em que você cometeu um erro ou falhou e o que aprendeu com isso."
        },
        {
          "title": "Preparação para entrevista técnica",
          "text": "Tenho uma entrevista técnica para esta vaga. Crie um plano de estudos focado e liste os temas e tipos de perguntas mais prováveis para os quais devo me preparar. Inclua exemplos de perguntas e explique como seriam respostas exemplares.\n\nCargo: [cargo]\nTipo de empresa: [startup / grande empresa corporativa / padrão FAANG]\nPrincipais habilidades listadas na vaga: [cole-as]\nMeu nível de domínio atual: [iniciante / intermediário / avançado]\nTempo restante até a entrevista: [dias/semanas]"
        },
        {
          "title": "Perguntas para fazer ao entrevistador",
          "text": "Gere uma lista de perguntas estratégicas e inteligentes para fazer ao entrevistador no final da conversa. Inclua perguntas sobre o papel, cultura da equipe, oportunidades de crescimento e métricas de sucesso. Evite perguntas genéricas.\n\nCargo: [cargo]\nEmpresa: [nome da empresa]\nEtapa da entrevista: [primeira fase / entrevista final / com o gestor / com o painel de equipe]\nO que já sei sobre a empresa: [breves anotações]"
        },
        {
          "title": "Roteiro para negociação salarial",
          "text": "Escreva um roteiro de negociação salarial para usar após receber uma proposta de emprego. O tom deve ser confiante, porém colaborativo, justificando meu pedido com dados de mercado e minha experiência, mantendo o diálogo positivo.\n\nProposta recebida: [valor salarial]\nMinha pretensão salarial: [valor desejado]\nMinha experiência: [anos e principais qualificações]\nCargo: [cargo]\nLocalização / remoto: [localidade]"
        }
      ]
    },
    {
      "cat": "LinkedIn",
      "prompts": [
        {
          "title": "Otimizar título do LinkedIn",
          "text": "Escreva 5 variações de título profissional para o meu perfil do LinkedIn. Cada uma deve conter palavras-chave relevantes para buscas de recrutadores, comunicar minha proposta de valor com clareza e ter menos de 220 caracteres.\n\nMeu cargo atual: [cargo]\nSetor: [setor]\nPrincipais competências: [liste de 3 a 5]\nPelo que quero ser reconhecido: [breve descrição]\nAberto a novas oportunidades: [sim / não]"
        },
        {
          "title": "Escrever resumo do LinkedIn (Sobre)",
          "text": "Escreva a seção 'Sobre' para o meu perfil do LinkedIn. Use narrativa em primeira pessoa, comece com um gancho envolvente, destaque minha trajetória e principais competências, e finalize com meus objetivos ou formas de contato. Mire entre 250 e 350 palavras.\n\nMinha trajetória: [resumo da experiência]\nPrincipais habilidades e especialidades: [liste-as]\nConquistas relevantes: [1 a 3 destaques]\nO que busco no momento: [cargos, oportunidades ou conexões para projetos]"
        },
        {
          "title": "Mensagem de pedido de conexão",
          "text": "Escreva uma mensagem curta e personalizada de solicitação de conexão no LinkedIn (menos de 300 caracteres). O tom deve ser acolhedor, explicar especificamente por que estou fazendo o contato e não pedir nada de imediato.\n\nPara quem estou enviando: [nome e cargo]\nPor que quero me conectar: [interesse em comum, conexão mútua, admiração pelo trabalho, etc.]\nMinha área/atuação: [descrição em uma linha sobre quem sou]"
        },
        {
          "title": "Post para LinkedIn com lição de carreira",
          "text": "Escreva um post para o LinkedIn compartilhando um aprendizado ou lição profissional. Use uma primeira linha forte para reter a atenção, conte uma breve história ou observação e finalize com uma pergunta para gerar engajamento. Evite jargões vazios e mantenha a autenticidade.\n\nTema ou lição: [o que desejo compartilhar]\nContexto ou história por trás: [breves detalhes]\nPúblico-alvo: [para quem escrevo]\nTom: [reflexivo / motivacional / prático]"
        }
      ]
    },
    {
      "cat": "Networking",
      "prompts": [
        {
          "title": "Solicitar entrevista informativa",
          "text": "Escreva um e-mail solicitando uma conversa de 20 minutos (entrevista informativa) com um profissional em uma área ou empresa do meu interesse. O texto deve ser conciso, demonstrar interesse genuíno pela trajetória da pessoa e facilitar uma resposta positiva.\n\nNome da pessoa: [nome]\nCargo e empresa: [detalhes]\nComo a encontrei: [LinkedIn, indicação mútua, artigo, etc.]\nO que gostaria de aprender: [tópicos específicos ou dúvidas]\nMinha apresentação: [uma frase sobre quem sou]"
        },
        {
          "title": "E-mail de agradecimento pós-conversa de networking",
          "text": "Escreva um e-mail de agradecimento para enviar dentro de 24 horas após uma conversa profissional ou reunião de networking. Mencione algo específico do que conversamos, expresse gratidão genuína e sugira um próximo passo natural.\n\nNome do profissional: [nome]\nData da reunião: [data]\nAlgo específico abordado: [tema ou conselho compartilhado]\nPróximo passo que gostaria de propor: [ex.: manter contato, compartilhar um material, retomar contato em 3 meses]"
        },
        {
          "title": "Discurso de elevador (Elevator Pitch)",
          "text": "Crie um pitch pessoal de 30 segundos (elevator pitch) para usar em eventos de networking ou quando alguém perguntar 'o que você faz?'. Deve ser claro, marcante e abrir caminho naturalmente para uma conversa. Crie 3 versões: formal, descontraída e para transição de carreira.\n\nMinha trajetória: [cargo atual ou recente e setor]\nPrincipais competências ou áreas de especialidade: [liste-as]\nO que busco no momento: [objetivos ou tipo de oportunidade que procuro]"
        },
        {
          "title": "E-mail de follow-up pós-evento",
          "text": "Escreva um e-mail de acompanhamento para alguém que conheci rapidamente em uma conferência ou evento do setor. Lembre como nos conhecemos, recapitule brevemente a conversa e sugira uma forma de manter contato ou continuar o diálogo.\n\nNome da pessoa: [nome]\nNome do evento: [conferência ou evento]\nComo nos conhecemos / sobre o que falamos: [breves detalhes]\nPróximo passo proposto: [ligação rápida, café virtual, envio de um artigo, etc.]"
        }
      ]
    },
    {
      "cat": "Desenvolvimento Profissional",
      "prompts": [
        {
          "title": "Criar plano de desenvolvimento de carreira (PDI)",
          "text": "Ajude-me a elaborar um plano de desenvolvimento profissional para os próximos 12 meses. Inclua metas específicas, habilidades a aprimorar, marcos a atingir e ações práticas para cada trimestre. Torne-o realista e alinhado ao cargo que almejo.\n\nMeu cargo atual: [cargo e nível]\nCargo desejado em 12 meses: [cargo e nível]\nPrincipais lacunas a suprir: [competências, experiências ou certificações que faltam]\nRecursos disponíveis: [cursos, mentores, orçamento da empresa, etc.]"
        },
        {
          "title": "Pedir uma promoção",
          "text": "Escreva um roteiro para solicitar uma promoção ao meu gestor. Estruture em: abertura da conversa, resumo das minhas contribuições e impacto, solicitação clara da promoção e convite para traçar os próximos passos juntos. Mantenha um tom seguro e colaborativo.\n\nMeu cargo atual: [cargo]\nCargo pretendido: [cargo almejado]\nTempo na função atual: [duração]\nPrincipais realizações: [liste de 3 a 5 com o impacto gerado]\nPor que agora: [momento propício ou justificativa]"
        },
        {
          "title": "Escrever autoavaliação de desempenho",
          "text": "Ajude-me a redigir uma autoavaliação consistente para a avaliação de desempenho anual. Para cada área avaliada, destaque conquistas específicas com resultados mensuráveis, reconheça oportunidades de melhoria com transparência e relacione meu trabalho aos objetivos da equipe e da empresa.\n\nMeu cargo: [cargo]\nProjetos ou responsabilidades principais no período: [liste-os]\nConquistas expressivas: [com números e métricas, se houver]\nÁreas em que desejo evoluir: [seja específico]\nMetas para o próximo ciclo: [liste de 2 a 3]"
        },
        {
          "title": "Análise de lacunas de competências",
          "text": "Analise a distância entre minhas competências atuais e as exigências do cargo que pretendo alcançar. Priorize as lacunas por ordem de relevância, sugira formas práticas de desenvolvê-las e estabeleça uma estimativa de prazo realista.\n\nMinhas habilidades atuais: [liste competências técnicas e comportamentais]\nCargo desejado: [cargo]\nDescrição ou requisitos da vaga: [cole ou descreva as exigências principais]\nPrazo estimado com o qual estou trabalhando: [meses ou anos]"
        }
      ]
    }
  ],
  "startup": [
    {
      "cat": "Ideação e Validação",
      "prompts": [
        {
          "title": "Validar ideia de negócio",
          "text": "Tenho uma ideia de negócio: [descreva sua ideia em 2 a 3 frases].\n\nAjude-me a validá-la abordando:\n1. Clareza do problema — existe uma dor real e relevante aqui?\n2. Cliente-alvo — quem pagaria por isso?\n3. Tamanho de mercado — estimativa aproximada de TAM/SAM/SOM\n4. Principais riscos e premissas que preciso testar\n5. 3 formas rápidas e baratas de validar antes de construir qualquer coisa."
        },
        {
          "title": "Identificar mercado-alvo",
          "text": "Meu produto é: [descreva o produto ou serviço].\n\nAjude-me a identificar e priorizar meu mercado-alvo:\n1. Liste 5 potenciais segmentos de clientes que possam precisar disso\n2. Para cada segmento, descreva o nível de dor, a disposição para pagar e a facilidade de alcance\n3. Recomende qual segmento focar primeiro e o porquê\n4. Descreva detalhadamente o perfil de cliente ideal (ICP) para esse segmento."
        },
        {
          "title": "Análise do cenário competitivo",
          "text": "Estou construindo [descreva seu produto/serviço] no setor de [setor/mercado].\n\nAnalise o cenário competitivo:\n1. Quem são os principais concorrentes diretos e indiretos?\n2. Quais são seus pontos fortes e fracos?\n3. Que lacunas ou demandas não atendidas existem no mercado?\n4. Onde um novo entrante poderia realisticamente se diferenciar?\n5. O que motivaria os clientes a migrarem das soluções existentes?"
        },
        {
          "title": "Priorização de recursos do MVP",
          "text": "Estou construindo um MVP para [descreva o produto]. Meu usuário-alvo é [descreva o usuário] e o problema central que estou resolvendo é [descreva o problema].\n\nAjude-me a priorizar os recursos:\n1. Liste os recursos indispensáveis (must-have) para um MVP funcional\n2. Liste recursos que seriam bons ter (nice-to-have), mas não essenciais no lançamento\n3. Liste recursos para postergar para uma versão futura\n4. Sugira a menor versão possível que eu poderia lançar em [prazo] para obter feedback real de usuários.\n\nUse o método MoSCoW onde for pertinente."
        }
      ]
    },
    {
      "cat": "Pitch e Captação de Recursos",
      "prompts": [
        {
          "title": "Criar elevator pitch",
          "text": "Ajude-me a criar um elevator pitch objetivo de 30 segundos para minha startup.\n\nDetalhes:\n- O que fazemos: [descreva o produto/serviço]\n- Problema que resolvemos: [descreva o problema]\n- Cliente-alvo: [para quem é]\n- Como monetizamos: [modelo de negócio]\n- Tração até o momento: [métricas, usuários, receita]\n\nEscreva 3 versões: uma para investidores, uma para clientes em potencial e uma para eventos gerais de networking. Mantenha cada versão abaixo de 60 palavras."
        },
        {
          "title": "Narrativa de pitch deck",
          "text": "Ajude-me a estruturar o arco narrativo para o meu pitch deck de investidores.\n\nDetalhes da startup:\n- Nome da empresa: [nome]\n- O que fazemos: [descrição]\n- Problema: [problema]\n- Solução: [solução]\n- Mercado: [tamanho do mercado]\n- Modelo de negócio: [como geramos receita]\n- Tração: [métricas]\n- Equipe: [principais integrantes da equipe]\n- Pedido/Investimento pretendido: [quanto, para qual finalidade]\n\nPara cada slide (Problema, Solução, Mercado, Produto, Tração, Equipe, Captação), escreva a mensagem principal e 3 tópicos de apoio. Mantenha o foco no investidor e em uma narrativa envolvente."
        },
        {
          "title": "Apresentação para investidores por e-mail",
          "text": "Escreva um e-mail de abordagem inicial (cold email) para apresentar minha startup a um investidor de capital de risco (VC).\n\nContexto:\n- Foco do investidor: [ex.: SaaS B2B, early stage, fintech]\n- Minha startup: [nome e descrição em uma linha]\n- Por que este investidor especificamente: [motivo]\n- Tração/provas de conceito: [métricas-chave ou marcos atingidos]\n- Solicitação: [ex.: conversa introdutória de 20 minutos]\n\nEscreva uma linha de assunto e um e-mail com menos de 150 palavras. Seja direto, específico e persuasivo. Evite termos genéricos e jargões vazios."
        },
        {
          "title": "Premissas de projeções financeiras",
          "text": "Ajude-me a definir as premissas fundamentais por trás das minhas projeções financeiras de 3 anos.\n\nModelo de negócio: [descreva como você cobra, ex.: assinatura SaaS, marketplace, venda avulsa]\nCliente-alvo: [descreva o segmento de clientes]\nMomento atual: [faturamento, base de usuários ou pré-receita]\n\nPara cada ano (Ano 1, Ano 2, Ano 3), ajude-me a estabelecer premissas realistas para:\n1. Aquisição de clientes (canais, CAC, taxa de crescimento)\n2. Receita por cliente (ACV ou ARPU, churn)\n3. Quadro de funcionários e contratações estratégicas\n4. Principais direcionadores de custo (cost drivers)\n5. Caminho até o ponto de equilíbrio (breakeven)\n\nAponte quais premissas têm maior probabilidade de serem questionadas por investidores."
        }
      ]
    },
    {
      "cat": "Produto",
      "prompts": [
        {
          "title": "Escrever PRD (requisitos de produto)",
          "text": "Escreva um documento de requisitos de produto (PRD) para o seguinte recurso.\n\nNome do recurso: [nome do recurso]\nProduto: [descrição do produto]\nProblema do usuário: [qual problema isso resolve e para quem]\nObjetivo de negócio: [por que estamos construindo isso]\n\nO PRD deve conter:\n1. Visão geral e objetivos\n2. Histórias de usuário (como [usuário], quero [ação] para que [resultado])\n3. Requisitos funcionais\n4. Fora de escopo\n5. Métricas de sucesso\n6. Questões em aberto\n\nMantenha o texto conciso e prático para uma equipe de engenharia."
        },
        {
          "title": "Mapeamento de histórias de usuário",
          "text": "Ajude-me a criar um mapa de histórias de usuário (User Story Mapping) para [produto ou recurso].\n\nUsuário-alvo: [descreva o usuário]\nJornada principal do usuário: [descreva o fluxo do início ao fim]\n\n1. Divida a jornada em 5 a 7 atividades de alto nível (a linha superior do mapa de histórias)\n2. Sob cada atividade, liste as tarefas do usuário (histórias) necessárias para concluí-la\n3. Identifique quais histórias pertencem ao lançamento do MVP versus versões futuras\n4. Aponte dependências entre as histórias\n\nFormate como uma lista estruturada agrupada por atividade."
        },
        {
          "title": "Análise de estratégia de preços",
          "text": "Ajude-me a definir a estratégia de precificação adequada para o meu produto.\n\nProduto: [descreva o que faz]\nCliente-alvo: [quem compra, porte da empresa, setor]\nValor entregue: [qual resultado proporciona ao cliente]\nPreços da concorrência: [quanto cobram as alternativas]\nIdeia inicial: [quaisquer hipóteses de preço que você já tenha]\n\nAnalise:\n1. O melhor modelo de precificação (assinatura, por uso, pontual, freemium, etc.) com prós e contras\n2. Faixa de preço recomendada e justificativa\n3. Planos ou níveis de empacotamento, se aplicável\n4. Como testar e validar o preço antes de oficializar\n5. Erros comuns de precificação a serem evitados nesse mercado."
        },
        {
          "title": "Framework de priorização de recursos",
          "text": "Tenho um backlog de solicitações de recursos e preciso priorizá-los. Ajude-me a aplicar um framework estruturado de priorização.\n\nProduto: [descreva o produto]\nMomento atual: [ex.: pré-lançamento, tração inicial, escala]\nPrincipal objetivo de negócio agora: [ex.: retenção de usuários, primeiros 100 clientes, redução de churn]\n\nBacklog de recursos:\n[liste seus recursos aqui]\n\nPara cada recurso, atribua uma pontuação em:\n1. Impacto no principal objetivo de negócio (1 a 5)\n2. Esforço de desenvolvimento (1 a 5, onde 5 = esforço elevado)\n3. Sinal de demanda dos usuários (quantos usuários pediram)\n4. Alinhamento estratégico\n\nClassifique-os e recomende o que construir primeiro, segundo e o que deixar em segundo plano."
        }
      ]
    },
    {
      "cat": "Crescimento e Tração",
      "prompts": [
        {
          "title": "Estratégia de Go-to-Market (GTM)",
          "text": "Ajude-me a estruturar uma estratégia de go-to-market (GTM) para minha startup.\n\nProduto: [descreva o produto]\nCliente-alvo: [ICP — setor, porte da empresa, cargo, principal dor]\nProposta de valor única: [o que torna você diferente]\nFaixa de preço: [preço]\nPrevisão de lançamento: [quando pretende lançar]\n\nAborde:\n1. Estratégia de tração (Product-Led, Sales-Led ou Marketing-Led) e por quê\n2. Os 3 primeiros canais de aquisição para focar e a justificativa\n3. Plano de lançamento para os primeiros 90 dias com os principais marcos\n4. Riscos principais e planos de mitigação\n5. Indicadores de sucesso aos 30, 60 e 90 dias após o lançamento."
        },
        {
          "title": "Canais de aquisição de clientes",
          "text": "Preciso identificar os melhores canais de aquisição de clientes para a minha startup.\n\nProduto: [descreva o produto]\nCliente-alvo: [quem são, onde passam tempo online e offline]\nOrçamento para aquisição: [faixa de orçamento mensal]\nTamanho da equipe: [quantas pessoas dedicadas ao crescimento]\nTração atual: [clientes existentes ou zero]\n\nPara cada canal recomendado:\n1. Por que ele se encaixa no meu cliente e produto\n2. Faixa estimada de CAC\n3. Como testá-lo de forma barata em 2 semanas\n4. Como seria a operação desse canal em escala\n\nClassifique os canais pelo maior potencial de ROI para o meu estágio atual."
        },
        {
          "title": "Estratégia de retenção",
          "text": "Ajude-me a desenhar uma estratégia de retenção para o meu produto.\n\nProduto: [descreva o produto]\nPerfil de usuário: [B2B ou B2C, descreva o usuário]\nRetenção atual: [ex.: taxa de retenção de 30 dias ou churn, se souber]\nPadrão de uso ideal: [com que frequência os usuários deveriam idealmente usar o produto]\nPrincipais motivos de churn (se conhecidos): [liste-os]\n\nForneça:\n1. A alavanca de retenção mais importante para priorizar e por quê\n2. Um fluxo de onboarding que conduza os usuários ao 'momento aha' mais rapidamente\n3. 3 campanhas de e-mail/notificação de ciclo de vida para aumentar a retenção\n4. Recursos no próprio produto ou alterações que reduzam o churn\n5. Como identificar usuários em risco de evasão antes que eles cancelem."
        },
        {
          "title": "Estruturação de dashboard de métricas",
          "text": "Ajude-me a estruturar o dashboard de métricas fundamentais para minha startup.\n\nTipo de negócio: [ex.: SaaS B2B, marketplace, app de consumo, e-commerce]\nEstágio: [pré-receita / tração inicial / escala]\nPrincipal objetivo agora: [ex.: crescer MRR, melhorar retenção, aumentar ativação]\n\nDefina:\n1. A métrica única mais importante (North Star Metric) que devo otimizar\n2. As 5 a 7 métricas-chave que impulsionam a North Star (métricas de entrada)\n3. Métricas de integridade/saúde do negócio para acompanhar (para detectar problemas com antecedência)\n4. Métricas a ignorar no meu estágio atual\n5. Como estabelecer uma rotina simples de acompanhamento semanal dessas métricas."
        }
      ]
    },
    {
      "cat": "Operações",
      "prompts": [
        {
          "title": "Plano de contratações",
          "text": "Ajude-me a criar um plano de contratações para minha startup.\n\nEquipe atual: [liste cargos atuais/número de pessoas]\nStatus de investimento: [bootstrapped / pre-seed / seed / Série A]\nRunway: [meses de caixa]\nPrioridades para os próximos 12 meses: [liste 2 a 3 metas principais]\n\nForneça:\n1. As primeiras 3 contratações prioritárias e por quê (em ordem de relevância)\n2. Para cada cargo: título, principais responsabilidades, competências essenciais e se deve ser integral, parcial ou PJ/contrato\n3. Como atrair profissionais de alto nível sem um grande orçamento de recrutamento\n4. Sinais de alerta (red flags) ao contratar em estágios iniciais\n5. Um processo seletivo ágil que preserve a qualidade."
        },
        {
          "title": "Documento de cultura da empresa",
          "text": "Ajude-me a redigir o documento fundador de cultura para minha startup.\n\nEmpresa: [nome e o que faz]\nEstágio: [tamanho da equipe, fase]\nValores dos fundadores: [liste de 3 a 5 valores pessoalmente importantes]\nModelo de trabalho: [remoto / presencial / híbrido]\nTipo de equipe que deseja construir: [descreva em uma frase]\n\nEscreva:\n1. Uma breve declaração de cultura (2 a 3 frases)\n2. 4 a 6 valores essenciais com uma explicação clara e prática do que cada um significa no dia a dia\n3. 3 exemplos de como esses valores se refletem em decisões rotineiras\n4. Quais comportamentos NÃO são tolerados (anti-valores)\n5. Como manter a cultura forte à medida que o time cresce."
        },
        {
          "title": "Definição de OKRs",
          "text": "Ajude-me a definir OKRs (Objetivos e Resultados-Chave) para minha startup.\n\nEstágio da empresa: [ex.: seed, Série A]\nPeríodo: [1º trimestre de 2026 ou anual]\nPrincipais prioridades estratégicas: [liste 2 a 3 prioridades]\nLinha de base atual das métricas: [números-chave se houver]\n\nPara cada prioridade, escreva:\n- 1 Objetivo (inspirador, qualitativo e direcional)\n- 3 Resultados-Chave (mensuráveis, específicos e com prazo)\n\nForneça também:\n1. Como desdobrar esses OKRs para o nível das equipes\n2. Uma rotina de check-in e avaliação de progresso dos OKRs\n3. Erros comuns de OKR a evitar em uma startup em estágio inicial."
        },
        {
          "title": "Avaliação de ferramentas e fornecedores",
          "text": "Ajude-me a avaliar e escolher ferramentas ou fornecedores para [necessidade específica, ex.: CRM, data warehouse, plataforma de suporte ao cliente].\n\nCaso de uso: [descreva exatamente o que a ferramenta precisa fazer]\nTamanho da equipe: [quantas pessoas irão utilizar]\nOrçamento: [faixa de orçamento mensal]\nRequisitos essenciais: [liste itens inegociáveis]\nRequisitos desejáveis: [liste recursos secundários]\n\nOpções que estou considerando:\n1. [Opção A]\n2. [Opção B]\n3. [Opção C]\n\nCompare-as quanto a: funcionalidades, preços, facilidade de implementação, escalabilidade, integrações e suporte. Recomende uma com justificativa clara e alerte sobre custos ocultos ou riscos de lock-in."
        }
      ]
    },
    {
      "cat": "Jurídico e Finanças",
      "prompts": [
        {
          "title": "Estrutura de Termos de Serviço",
          "text": "Ajude-me a estruturar o esboço dos Termos de Serviço (ToS) para o meu produto.\n\nTipo de produto: [ex.: app SaaS, marketplace, aplicativo B2C]\nUsuários: [clientes B2B / consumidores / ambos]\nPrincipais funcionalidades: [descreva o que os usuários podem fazer na plataforma]\nPreocupações específicas: [ex.: conteúdo gerado pelo usuário, pagamentos, tratamento de dados]\n\nForneça:\n1. Uma estrutura recomendada com todas as seções indispensáveis em um Termo de Serviço\n2. Um resumo em linguagem clara do que cada seção aborda e sua importância\n3. Cláusulas particularmente críticas para o meu modelo de produto\n4. Erros comuns que fundadores cometem com termos de serviço no início\n\nNota: este esboço é apenas para fins de planejamento e organização — um advogado revisará o documento final."
        },
        {
          "title": "Diretrizes para Política de Privacidade",
          "text": "Ajude-me a entender o que a Política de Privacidade do meu produto precisa contemplar.\n\nProduto: [descreva o produto]\nDados coletados: [liste tipos de dados coletados, ex.: e-mail, informações de pagamento, dados de navegação]\nLocalização dos usuários: [ex.: Brasil, EUA, União Europeia, global]\nFerramentas de terceiros integradas: [ex.: Stripe, Google Analytics, Intercom]\n\nAborde:\n1. Seções essenciais que toda política de privacidade deve conter\n2. Requisitos específicos de acordo com a jurisdição dos usuários (LGPD, GDPR, CCPA, etc.)\n3. Dados coletados que possam exigir consentimento explícito\n4. Divulgações necessárias sobre compartilhamento de dados com terceiros\n5. Como manter a política atualizada conforme o produto evolui\n\nNota: este conteúdo é apenas para planejamento preliminar — um advogado especializado revisará o documento final."
        },
        {
          "title": "Simulação de cap table",
          "text": "Ajude-me a modelar um cenário de tabela de capitalização (cap table) para minha startup.\n\nCap table atual:\n- Fundador 1: [nome, % de participação]\n- Fundador 2: [nome, % de participação]\n- Pool de opções de funcionários: [%]\n- Outros: [investidores-anjo, SAFEs, etc.]\n\nRodada de investimento proposta:\n- Tipo de rodada: [ex.: Seed, Série A]\n- Valor a captar: [R$ ou US$ X]\n- Valuation pré-dinheiro (pre-money): [R$ ou US$ Y] (ou 'ajude-me a estruturar isso')\n- Novos investidores: [nome ou 'A definir']\n\nDemonstre:\n1. Percentuais de participação pós-rodada (post-money) para todas as partes\n2. Como o ajuste/expansão do pool de opções impacta a diluição dos fundadores\n3. Como ficará a distribuição do cap table após essa captação\n4. Cláusulas contratuais essenciais para negociar além do valuation (direitos de preferência, assentos no conselho, etc.)"
        },
        {
          "title": "Análise de unit economics",
          "text": "Ajude-me a analisar a economia unitária (unit economics) do meu negócio.\n\nModelo de negócio: [descreva como gera receita]\nPrecificação: [quanto os clientes pagam e em qual frequência]\nCustos principais para adquirir um cliente: [liste os principais componentes do CAC]\nCustos principais para atender um cliente: [liste os principais custos diretos/serviço por cliente (COGS)]\nTaxa de cancelamento/churn (se souber): [mensal ou anual]\n\nCalcule e explique:\n1. Custo de Aquisição de Clientes (CAC)\n2. Receita Média por Usuário (ARPU) ou Valor Anual de Contrato (ACV)\n3. Margem bruta por cliente\n4. Valor do Tempo de Vida do Cliente (LTV)\n5. Relação LTV:CAC e o que indica sobre a saúde do negócio\n6. Período de retorno do investimento (Payback)\n7. O que precisa ser otimizado para atingir uma economia unitária saudável."
        }
      ]
    }
  ],
  "data": [
    {
      "cat": "SQL",
      "prompts": [
        {
          "title": "Escrever consulta SQL",
          "text": "Escreva uma consulta SQL para a seguinte tarefa:\n\nTarefa: [descreva o que precisa, ex.: encontrar todos os usuários cadastrados nos últimos 30 dias que fizeram pelo menos uma compra]\n\nTabelas e colunas relevantes:\n\n[descreva seu esquema ou cole comandos CREATE TABLE]\n\nBanco de dados: [ex.: PostgreSQL, MySQL, BigQuery]\n\nRetorne a consulta com comentários explicando cada etapa importante."
        },
        {
          "title": "Otimizar consulta lenta",
          "text": "Esta consulta SQL está lenta. Ajude-me a otimizá-la.\n\nConsulta:\n\n[cole a consulta aqui]\n\nBanco de dados: [ex.: PostgreSQL, MySQL]\nTamanho das tabelas: [ex.: pedidos tem 50M de linhas, usuários tem 2M de linhas]\nÍndices existentes: [liste-os ou cole o plano de execução EXPLAIN]\n\nIdentifique os gargalos, sugira alterações de índices e reescreva a consulta, se necessário. Explique cada otimização aplicada."
        },
        {
          "title": "Explicar consulta complexa",
          "text": "Explique esta consulta SQL em linguagem clara. Detalhe passo a passo — o que cada cláusula faz, quais dados ela processa e o que o resultado final representa:\n\n[cole a consulta aqui]"
        },
        {
          "title": "Projetar esquema de banco de dados",
          "text": "Projete um esquema de banco de dados para o seguinte caso de uso:\n\nCaso de uso: [descreva sua aplicação ou funcionalidade, ex.: SaaS multi-inquilino com projetos, tarefas e funções de usuários]\n\nBanco de dados: [ex.: PostgreSQL]\n\nInclua: nomes de tabelas, colunas com tipos de dados e restrições, chaves primárias e estrangeiras, índices e uma explicação das decisões de design e eventuais concessões (trade-offs)."
        }
      ]
    },
    {
      "cat": "Análise de Dados",
      "prompts": [
        {
          "title": "Plano de análise exploratória de dados (EDA)",
          "text": "Tenho um conjunto de dados e quero realizar uma análise exploratória (EDA). Crie um plano detalhado passo a passo.\n\nDescrição do dataset: [descreva colunas, tipos de dados, volume aproximado e domínio, ex.: pedidos de e-commerce com ID do cliente, produto, preço, data]\n\nPergunta de negócio que pretendo responder: [descreva-a]\n\nInclua: verificações de qualidade dos dados, análise univariada, correlações e relações a explorar, visualizações recomendadas e possíveis inconsistências a monitorar."
        },
        {
          "title": "Teste de significância estatística",
          "text": "Ajude-me a selecionar e interpretar o teste estatístico correto para minha análise.\n\nO que estou comparando: [ex.: taxas de conversão entre dois grupos de usuários]\nTipo de dados: [ex.: resultados binários, medições contínuas]\nTamanhos de amostra: [ex.: Grupo A: 1.200, Grupo B: 1.400]\nResultados atuais: [ex.: Grupo A: 4,2%, Grupo B: 5,1%]\n\nRecomende o teste adequado, apresente as premissas necessárias, mostre o cálculo ou código correspondente e explique como interpretar o valor-p (p-value) e o intervalo de confiança em linguagem acessível."
        },
        {
          "title": "Análise de coorte",
          "text": "Ajude-me a estruturar e interpretar uma análise de coorte (cohort analysis).\n\nObjetivo: [ex.: medir retenção em 30/60/90 dias pelo mês de cadastro]\nDados disponíveis: [descreva tabelas e colunas, ex.: tabela de usuários com data de cadastro, tabela de eventos com ID do usuário e data do evento]\nBanco de dados / ferramenta: [ex.: BigQuery, pandas]\n\nEscreva a consulta ou código para construir a tabela de coortes, explique como interpretar os resultados e aponte possíveis armadilhas de análise."
        },
        {
          "title": "Interpretação de tendências",
          "text": "Estou observando uma tendência nos meus dados e preciso de apoio para interpretá-la.\n\nMétrica: [ex.: usuários ativos semanais (WAU)]\nO que observei: [ex.: queda de 15% nas últimas 6 semanas após um período de crescimento constante]\nContexto: [eventos conhecidos, mudanças no produto, sazonalidade ou fatores externos]\n\nAjude-me a: identificar causas prováveis, descartar anomalias de instrumentação/dados, sugerir análises complementares para confirmar a causa-raiz e propor os próximos passos."
        }
      ]
    },
    {
      "cat": "Visualização de Dados",
      "prompts": [
        {
          "title": "Recomendação de tipo de gráfico",
          "text": "Recomende o tipo de gráfico mais adequado para o meu caso de uso e justifique a escolha.\n\nO que desejo apresentar: [ex.: distribuição da receita por categoria de produto e evolução mês a mês]\nPúblico: [ex.: diretoria executiva em reunião trimestral]\nEstrutura dos dados: [ex.: 12 meses x 6 categorias, valores entre R$ 50 mil e R$ 2 milhões]\nFerramenta: [ex.: Tableau, matplotlib, Looker Studio]\n\nSugira de 2 a 3 alternativas, classifique-as por recomendação e explique os prós e contras de cada uma."
        },
        {
          "title": "Estruturação de layout de dashboard",
          "text": "Ajude-me a planejar o layout de um dashboard funcional e eficiente.\n\nObjetivo: [ex.: monitoramento operacional diário da equipe de suporte]\nMétricas-chave a exibir: [liste-as, ex.: chamados abertos, tempo de resolução, pontuação CSAT, volume por canal]\nPúblico e contexto de uso: [ex.: líderes de equipe verificam no início de cada turno]\nFerramenta: [ex.: Metabase, Tableau, Grafana]\n\nProponha uma disposição com seções lógicas, tipos de gráficos para cada indicador e boas práticas de UX para leitura rápida e intuitiva."
        },
        {
          "title": "Narrativa com dados (Data Storytelling)",
          "text": "Ajude-me a transformar esses dados em uma narrativa clara e persuasiva para uma apresentação.\n\nPrincipais descobertas: [liste de 3 a 5 conclusões fundamentais da sua análise]\nPúblico: [ex.: partes interessadas não técnicas, liderança C-level]\nObjetivo da apresentação: [ex.: aprovar investimento em melhorias de retenção]\n\nEscreva um arco narrativo que comece com o insight mais impactante, sustente com dados concretos e finalize com recomendações claras. Mantenha o texto direto e sem jargões desnecessários."
        },
        {
          "title": "Adicionar anotações a gráficos",
          "text": "Ajude-me a elaborar anotações para este gráfico de forma que ele seja autoexplicativo.\n\nTipo de gráfico: [ex.: gráfico de linhas]\nO que ele apresenta: [ex.: receita mensal dos últimos 2 anos]\nMarcos importantes a destacar: [ex.: lançamento do produto em março, mudança de preços em agosto, queda pontual em dezembro]\nPúblico: [ex.: investidores em um pitch deck]\n\nEscreva de 3 a 5 rótulos de anotação concisos e impactantes, além de uma sugestão de título e subtítulo de uma frase para o gráfico."
        }
      ]
    },
    {
      "cat": "Limpeza e Tratamento de Dados",
      "prompts": [
        {
          "title": "Checklist de limpeza de dados",
          "text": "Gere um checklist abrangente de limpeza e validação para o meu conjunto de dados.\n\nDescrição do dataset: [descreva colunas, tipos de dados, origem e domínio]\nProblemas conhecidos: [liste inconsistências já identificadas, ex.: linhas duplicadas, datas com formatos divergentes, valores ausentes em campos essenciais]\nUso final: [ex.: treinamento de modelo de machine learning, alimentação de dashboard]\n\nOrganize o checklist por ordem de prioridade, detalhando as verificações a executar e como tratar cada problema."
        },
        {
          "title": "Estratégia para dados ausentes",
          "text": "Ajude-me a definir a melhor abordagem para tratar valores ausentes no meu dataset.\n\nColuna com dados ausentes: [nome da coluna e o que ela representa]\nPercentual ausente: [ex.: 18%]\nTipo de dados: [ex.: numérico, categórico, data/hora]\nComo a coluna é usada na etapa seguinte: [ex.: é uma feature em um modelo de regressão]\n\nCompare as alternativas (exclusão de registros, imputação por média/mediana/moda, imputação por modelo preditivo, criação de categoria separada) e recomende a melhor solução com embasamento técnico."
        },
        {
          "title": "Detecção de outliers",
          "text": "Ajude-me a identificar e tratar valores atípicos (outliers) no meu conjunto de dados.\n\nColuna: [nome da coluna e o que representa]\nTipo de dado: [numérico / data/hora]\nEstatísticas da amostra: [ex.: mín: 0, máx: 99.000, média: 450, mediana: 380, desvio padrão: 1.200]\nContexto: [ex.: valor de pedidos em reais; valores muito altos podem ser pedidos legítimos no atacado ou falhas de sistema]\n\nSugira métodos apropriados de detecção (IQR, z-score, Isolation Forest, etc.), forneça o código em [Python/SQL] e recomende como proceder com os outliers confirmados."
        },
        {
          "title": "Padronização de dados inconsistentes",
          "text": "Ajude-me a padronizar valores inconsistentes nesta coluna.\n\nNome da coluna: [ex.: país]\nAmostra de valores despadronizados: [ex.: 'Brasil', 'brasil', 'BR', 'BRA', 'brazil']\nFormato de saída desejado: [ex.: códigos ISO 3166-1 alfa-2]\nFerramenta: [ex.: Python pandas, SQL, dbt]\n\nEscreva o código para mapear e normalizar esses valores, tratar casos excepcionais e sinalizar registros que não puderem ser convertidos automaticamente."
        }
      ]
    },
    {
      "cat": "Python e R",
      "prompts": [
        {
          "title": "Construir pipeline de dados com pandas",
          "text": "Escreva um pipeline de processamento de dados usando pandas para a seguinte tarefa.\n\nEntrada: [descreva a fonte de dados, ex.: arquivo CSV com colunas: user_id, event_type, timestamp, revenue]\nTransformações necessárias:\n1. [ex.: filtrar apenas eventos de compra]\n2. [ex.: agregar receita por usuário por mês]\n3. [ex.: calcular taxa de crescimento mês a mês]\nSaída: [descreva o resultado esperado, ex.: DataFrame com uma linha por usuário por mês]\n\nEscreva código limpo, legível e comentado. Utilize encadeamento de métodos (method chaining) onde isso melhorar a clareza."
        },
        {
          "title": "Criar visualização com matplotlib/seaborn",
          "text": "Escreva código Python para gerar a seguinte visualização.\n\nTipo de gráfico: [ex.: mapa de calor (heatmap), barras agrupadas, série temporal com intervalo de confiança]\nDados: [descreva a estrutura do DataFrame, ex.: colunas: mês, categoria, valor]\nRequisitos visuais: [ex.: tema escuro, paleta acessível para daltônicos, sem bordas desnecessárias]\nSaída: [ex.: salvar como imagem PNG em 300 DPI]\n\nUtilize matplotlib e/ou seaborn. Adicione título adequado, rótulos de eixos e legenda. Deixe o gráfico pronto para publicação."
        },
        {
          "title": "Ideias de engenharia de recursos (Feature Engineering)",
          "text": "Sugira ideias de engenharia de features para meu conjunto de dados de machine learning.\n\nVariável alvo (target): [ex.: se um usuário vai cancelar nos próximos 30 dias (churn)]\nFeatures brutas disponíveis: [liste-as com os tipos, ex.: data_cadastro (data), ultimo_login (data), total_sessoes (int), tipo_plano (categórico)]\nGranularidade dos dados: [ex.: uma linha por usuário]\n\nSugira de 10 a 15 features derivadas, explique a intuição analítica de cada uma e forneça o código em pandas para criá-las."
        },
        {
          "title": "Criar script de validação de dados",
          "text": "Escreva um script Python de validação de dados para o meu dataset.\n\nDataset: [descreva colunas, tipos e origem]\nRegras de validação a aplicar:\n1. [ex.: user_id não pode ser nulo e deve ser único]\n2. [ex.: data_evento deve estar entre 2020-01-01 e a data atual]\n3. [ex.: valor_receita deve ser >= 0]\n4. [ex.: status deve ser um de: ativo, inativo, pendente]\n\nO script deve exibir um relatório consolidado com todas as violações encontradas, em vez de falhar no primeiro erro. Use pandas ou Great Expectations."
        }
      ]
    },
    {
      "cat": "Relatórios e Documentação",
      "prompts": [
        {
          "title": "Sumário executivo a partir de dados",
          "text": "Escreva um sumário executivo com base nas seguintes descobertas de dados.\n\nContexto: [ex.: revisão de desempenho do 1º trimestre de 2026 para um produto SaaS]\nMétricas principais:\n- [métrica 1]: [valor e variação em relação ao período anterior]\n- [métrica 2]: [valor e variação]\n- [métrica 3]: [valor e variação]\nFatos relevantes: [ex.: lançamento do recurso X em fevereiro, perda de um cliente-chave em março]\n\nEscreva um sumário executivo de 150 a 200 palavras. Destaque a conclusão mais importante logo no início, aborde problemas com transparência e encerre com as 2 a 3 prioridades para o próximo trimestre."
        },
        {
          "title": "Relatório semanal de métricas",
          "text": "Escreva um relatório semanal sucinto para os seguintes números.\n\nEquipe / produto: [ex.: time de Growth, aplicativo móvel]\nSemana: [ex.: semana de 17 de março de 2026]\nMétricas desta semana:\n- [métrica]: [valor] vs [valor da semana anterior]\n- [métrica]: [valor] vs [valor da semana anterior]\nDestaques positivos: [conquistas ou marcos atingidos]\nPontos de atenção: [quedas ou inconsistências observadas]\n\nFormate como uma atualização curta para Slack ou e-mail: 3 a 5 tópicos, linguagem direta e sem jargões. Sinalize itens que exigem ação imediata."
        },
        {
          "title": "Relatório de resultados de teste A/B",
          "text": "Escreva um resumo claro dos resultados do meu teste A/B para um público não técnico.\n\nNome do teste: [ex.: Novo fluxo de checkout]\nHipótese: [ex.: Simplificar o checkout para 2 etapas aumentará a conversão]\nControle vs variante: [descreva a alteração testada]\nResultados:\n- Métrica primária: [ex.: taxa de conversão] — Controle: [X%], Variante: [Y%], ganho relativo: [Z%]\n- Significância estatística: [ex.: p=0,03, IC 95%: +1,2% a +4,8%]\n- Métricas secundárias/de guarda: [resultados das métricas de controle]\nDuração do teste: [ex.: 14 dias, 25.000 usuários por grupo]\n\nExplique o significado prático dos resultados, se a alteração deve ser implementada em produção e eventuais ressalvas a considerar."
        },
        {
          "title": "Documentação de dicionário de dados",
          "text": "Elabore um dicionário de dados para a seguinte tabela ou dataset.\n\nNome da tabela: [ex.: pedidos]\nColunas:\n- [nome_coluna]: [tipo de dado, ex.: INT] — [breve descrição do conteúdo]\n- [nome_coluna]: [tipo de dado] — [descrição]\n- [adicione mais conforme necessário]\nPúblico-alvo: [ex.: novos analistas de dados que estão entrando na equipe]\n\nPara cada coluna inclua: nome, tipo de dado, descrição, exemplos de valores, permissão de valores nulos e peculiaridades ou pegadinhas conhecidas. Formate como uma tabela limpa em Markdown."
        }
      ]
    }
  ],
  "design": [
    {
      "cat": "Revisão de UI",
      "prompts": [
        {
          "title": "Crítica de design de interface (UI)",
          "text": "Atue como um designer sênior de produto. Faça uma análise crítica deste design de UI:\n\n[descreva a tela ou cole uma descrição/captura de tela]\n\nAvalie: hierarquia visual, espaçamento, tipografia, uso de cores e consistência. Seja específico sobre o que aprimorar e os motivos."
        },
        {
          "title": "Checklist de auditoria de acessibilidade",
          "text": "Faça uma auditoria de acessibilidade nesta interface com base nas diretrizes WCAG 2.1 nível AA:\n\n[descreva a UI ou liste seus componentes]\n\nVerifique: contraste de cores, navegação por teclado, estados de foco, compatibilidade com leitores de tela, dimensões das áreas de toque (touch targets) e uso de atributos ARIA. Liste os problemas por ordem de severidade."
        },
        {
          "title": "Revisão de responsividade mobile",
          "text": "Avalie este design de interface quanto à responsividade em dispositivos móveis:\n\n[descreva o layout ou liste os componentes]\n\nIdentifique: elementos com problemas de escala, áreas de toque muito reduzidas, conteúdos que podem estourar a tela e problemas de espaçamento em telas menores. Sugira correções práticas."
        },
        {
          "title": "Análise de hierarquia visual",
          "text": "Analise a hierarquia visual desta interface:\n\n[descreva a disposição da tela e seus elementos]\n\nIdentifique: para onde o olhar do usuário é atraído primeiro, se a hierarquia conduz ao objetivo pretendido e quais alterações melhorariam a legibilidade e a rapidez de compreensão."
        }
      ]
    },
    {
      "cat": "Pesquisa de UX (User Research)",
      "prompts": [
        {
          "title": "Elaborar perguntas para entrevista com usuários",
          "text": "Elabore um roteiro de entrevista com usuários para pesquisar [tema ou funcionalidade, ex.: 'como as pessoas gerenciam suas finanças pessoais'].\n\nInclua: 3 perguntas de quebra-gelo, 8 a 10 perguntas centrais e 2 perguntas de encerramento. Use formulações abertas. Evite induzir as respostas do participante."
        },
        {
          "title": "Criar persona de usuário",
          "text": "Crie uma persona de usuário realista para [produto ou funcionalidade].\n\nUsuário-alvo: [descreva de forma geral, ex.: 'designers gráficos freelancers, de 28 a 40 anos']\n\nInclua: nome, idade, ocupação, objetivos, frustrações, comportamentos habituais e uma citação representativa. Mantenha o perfil fundamentado e prático."
        },
        {
          "title": "Roteiro de teste de usabilidade",
          "text": "Escreva um roteiro de teste de usabilidade para [funcionalidade ou fluxo, ex.: 'o fluxo de checkout'].\n\nInclua: apresentação do moderador, termo de consentimento, 4 a 6 cenários de tarefas com contexto realista e perguntas de aprofundamento após cada tarefa. Evite revelar o caminho correto."
        },
        {
          "title": "Criação de questionário de feedback de produto",
          "text": "Desenvolva um questionário para coletar feedback de usuários sobre [recurso, ex.: 'nosso novo fluxo de onboarding'].\n\nInclua: 1 pergunta de NPS ou CSAT, 4 a 6 perguntas de escala ou múltipla escolha e 2 perguntas abertas. Planeje para ser preenchido em menos de 3 minutos. Sugira a melhor ordem para as perguntas."
        }
      ]
    },
    {
      "cat": "Design Systems",
      "prompts": [
        {
          "title": "Convenção de nomenclatura de componentes",
          "text": "Proponha uma convenção de nomenclatura para os componentes de UI do nosso design system.\n\nContexto: [ex.: 'Usamos React e Figma, com uma combinação de componentes atômicos e compostos']\n\nAborde: nomes de componentes, nomenclatura de variantes, nomes de propriedades (props) e organização de arquivos/camadas no Figma. Forneça exemplos práticos para Botão (Button), Modal e Campo de Formulário (Form Field)."
        },
        {
          "title": "Escrever documentação de componente",
          "text": "Escreva uma documentação clara para este componente de UI:\n\nComponente: [nome do componente, ex.: 'Notificação Toast']\nPropriedades/variantes: [liste-as]\nContexto de uso: [onde é aplicado]\n\nInclua: descrição geral, diretrizes de quando usar vs. não usar, tabela de propriedades, notas de acessibilidade e um exemplo prático de aplicação."
        },
        {
          "title": "Estrutura de design tokens",
          "text": "Proponha uma estrutura de design tokens para [nome do produto ou do design system].\n\nCores institucionais: [liste as cores principais]\nTipografia: [liste famílias tipográficas ou escala]\nContexto: [ex.: aplicação web, app mobile ou ambos]\n\nOrganize os tokens em: cor, tipografia, espaçamento, raio de borda (border radius), sombra e animação/movimento. Apresente exemplos de tokens primitivos e semânticos."
        },
        {
          "title": "Auditoria de biblioteca de padrões",
          "text": "Ajude-me a auditar nossa biblioteca de componentes e padrões em busca de inconsistências.\n\nAqui está a lista dos nossos componentes e variantes atuais:\n\n[cole a lista de componentes]\n\nIdentifique: padrões duplicados que atendem ao mesmo objetivo, divergências na nomenclatura, lacunas onde falta um componente reutilizável e elementos específicos demais para estarem na biblioteca global."
        }
      ]
    },
    {
      "cat": "Wireframing e Fluxos",
      "prompts": [
        {
          "title": "Fluxo de usuário para funcionalidade",
          "text": "Mapeie o fluxo de usuário (User Flow) para [recurso, ex.: 'redefinição de senha'].\n\nObjetivo do usuário: [descreva o que o usuário quer realizar]\nPonto de entrada: [onde o usuário inicia]\n\nListe cada passo executado pelo usuário, decisões com as quais se depara e possíveis caminhos de erro ou fluxos alternativos. Formate como um fluxo numerado com bifurcações onde necessário."
        },
        {
          "title": "Arquitetura de informação para seção de app",
          "text": "Proponha a arquitetura de informação para [seção do app, ex.: 'a área de configurações de um dashboard SaaS'].\n\nPerfis de usuário: [liste se houver mais de um]\nTarefas principais executadas: [liste de 4 a 6 tarefas]\n\nSugira uma estrutura de navegação com seções de nível superior, subseções e os conteúdos ou ações disponíveis em cada uma. Justifique os agrupamentos propostos."
        },
        {
          "title": "Proposta de estrutura de navegação",
          "text": "Proponha uma estrutura de navegação para [produto, ex.: 'uma ferramenta B2B de gestão de projetos'].\n\nPrincipais funcionalidades: [liste as principais]\nPerfis/papéis de usuário: [liste papéis, se aplicável]\n\nRecomende: itens de navegação primária, navegação secundária e tratamento para permissões baseadas em papéis. Considere tanto menus laterais para desktop quanto barras de navegação inferiores para mobile."
        },
        {
          "title": "Design de fluxo de onboarding",
          "text": "Desenvolva um fluxo de onboarding para [produto, ex.: 'um aplicativo móvel de acompanhamento de hábitos'].\n\nObjetivo do novo usuário: [o que ele precisa concluir para perceber valor]\nConfigurações indispensáveis: [liste passos obrigatórios, ex.: 'criar o primeiro hábito']\n\nProponha: sequência de telas, o que solicitar imediatamente vs. postergar, indicação de progresso e opções para pular/fazer mais tarde. Mantenha o tempo até a percepção de valor o menor possível."
        }
      ]
    },
    {
      "cat": "UX Writing e Microcopy",
      "prompts": [
        {
          "title": "Redação de mensagens de erro",
          "text": "Escreva mensagens de erro claras e amigáveis para estes cenários:\n\n[liste os cenários de erro, ex.: 'formato de e-mail inválido', 'arquivo muito grande', 'sessão expirada']\n\nPara cada um: escreva o título do erro, uma explicação em linguagem acessível sobre o ocorrido e a ação recomendada que o usuário deve tomar. Tom: [ex.: acolhedor, profissional, minimalista]."
        },
        {
          "title": "Redação para estados vazios (Empty States)",
          "text": "Escreva textos para estes estados vazios de interface (Empty States):\n\n[liste os estados, ex.: 'nenhum resultado de busca', 'nenhuma notificação recente', 'nenhum arquivo enviado']\n\nPara cada um: elabore um título, uma explicação de 1 a 2 frases e uma CTA quando oportuno. Tom: [ex.: motivador, neutro, bem-humorado]. Evite frases genéricas como 'Nada por aqui'."
        },
        {
          "title": "Variações de texto para botões e CTAs",
          "text": "Escreva variações de rótulos para botões e chamadas para ação (CTA) para [ação ou recurso, ex.: 'iniciar período de teste gratuito'].\n\nContexto: [onde o botão é exibido, ex.: 'página de planos', 'estado vazio', 'cabeçalho de modal']\nTom: [ex.: direto, focado em benefícios, sem pressão]\n\nForneça de 6 a 8 opções ordenadas da mais assertiva para a mais sutil. Explique as considerações e prós/contras de cada uma."
        },
        {
          "title": "Textos para tooltips e instruções de ajuda",
          "text": "Escreva tooltips e textos auxiliares para estes elementos de interface:\n\n[liste os elementos, ex.: 'campo de chave de API', 'seletor de ciclo de faturamento', 'frequência de notificações']\n\nPara cada um: escreva uma tooltip concisa (menos de 15 palavras) e um texto auxiliar complementar para exibição em linha. Priorize a clareza sobre o estilo."
        }
      ]
    },
    {
      "cat": "Apresentação e Alinhamento",
      "prompts": [
        {
          "title": "Justificativa de decisão de design",
          "text": "Ajude-me a redigir uma justificativa clara para esta decisão de design:\n\nDecisão: [descreva o que foi decidido, ex.: 'Migramos de um layout baseado em abas para uma página única com rolagem contínua']\nContexto: [qual problema ela resolve ou quais dados/pesquisas motivaram a mudança]\nAlternativas avaliadas: [liste 1 ou 2]\n\nEscreva uma explicação concisa para compartilhar com os stakeholders cobrindo: o problema, a solução escolhida, por que é a melhor opção e as concessões assumidas."
        },
        {
          "title": "Estrutura para apresentação de design review",
          "text": "Crie a estrutura para uma apresentação de revisão de design (Design Review) sobre [nome da funcionalidade ou projeto].\n\nPúblico: [ex.: 'time de produto + liderança técnica de engenharia']\nObjetivo da sessão: [ex.: 'aprovação formal antes do handoff' ou 'coleta de feedback sobre a direção visual']\nFase do projeto: [ex.: 'conceito inicial', 'mockups refinados', 'designs finais']\n\nInclua: seções recomendadas, o que demonstrar em cada etapa, divisão de tempo e como orientar o pedido de feedback."
        },
        {
          "title": "Narrativa de comparação antes e depois",
          "text": "Escreva uma narrativa comparativa de antes e depois para esta melhoria de design:\n\nAntes: [descreva o design anterior e seus problemas]\nDepois: [descreva o novo design e o que foi transformado]\nMétricas ou feedback de usuários (se houver): [cole se disponível]\n\nEscreva uma narrativa concisa que possa ser usada em um estudo de caso ou alinhamento com stakeholders, detalhando o problema, o insight motivador e o impacto da mudança."
        },
        {
          "title": "Síntese de feedback de stakeholders",
          "text": "Ajude-me a sintetizar e estruturar estas anotações de feedback de uma revisão de design:\n\n[cole as notas brutas ou comentários dos stakeholders]\n\nOrganize em: temas centrais, solicitações práticas e acionáveis, dúvidas que demandam alinhamento e feedbacks conflitantes entre si. Sinalize pontos que contrariem pesquisas com usuários ou princípios fundamentais de design."
        }
      ]
    }
  ],
  "student": [
    {
      "cat": "Métodos de Estudo",
      "prompts": [
        {
          "title": "Criar guia de estudos sobre tema",
          "text": "Crie um guia de estudos completo sobre [tema].\n\nInclua:\n- Conceitos fundamentais e definições\n- Datas importantes, fórmulas ou nomes essenciais para memorizar\n- Equívocos comuns a serem evitados\n- Um resumo rápido para revisão de última hora antes de uma prova\n\nNível: [iniciante / intermediário / avançado]"
        },
        {
          "title": "Explicar conceito com analogias",
          "text": "Explique o conceito de [conceito] utilizando analogias claras e do dia a dia.\n\nSou estudante de [ano/nível] na área de [disciplina]. Eu compreendo [conceito relacionado], mas estou com dificuldades neste aqui.\n\nUtilize pelo menos duas analogias diferentes e faça uma pergunta rápida no final para testar meu entendimento."
        },
        {
          "title": "Gerar perguntas e respostas para flashcards",
          "text": "Gere 10 pares de perguntas e respostas para flashcards sobre o seguinte tema:\n\n[tema ou cole suas anotações aqui]\n\nFormate cada cartão como:\nP: [pergunta]\nR: [resposta concisa]\n\nMescle perguntas de memorização de fatos, compreensão conceitual e aplicação prática."
        },
        {
          "title": "Resumir capítulo de livro didático",
          "text": "Resuma o seguinte capítulo de livro em notas claras e concisas.\n\n[cole o texto do capítulo aqui]\n\nOrganize o resumo com:\n- Ideia central (1 a 2 frases)\n- Pontos-chave (em tópicos)\n- Termos e vocabulário essencial (com definições)\n- Conteúdos com alta probabilidade de caírem na prova"
        }
      ]
    },
    {
      "cat": "Redação de Ensaios e Trabalhos",
      "prompts": [
        {
          "title": "Gerador de estrutura para redação/ensaio",
          "text": "Gere um esboço detalhado de redação/ensaio para a seguinte proposta:\n\n[tema ou proposta da redação]\n\nDisciplina: [nome da matéria]\nMeta de palavras: [ex.: 1500 palavras]\nEstilo argumentativo: [persuasivo / analítico / comparativo / expositivo]\n\nInclua uma declaração de tese, frases-tópico para cada parágrafo do desenvolvimento e argumentos de sustentação."
        },
        {
          "title": "Elaboração de declaração de tese",
          "text": "Ajude-me a formular uma tese sólida e convincente para meu ensaio acadêmico.\n\nTema: [tema]\nMinha ideia ou argumento inicial: [descreva sua ideia geral]\nTipo de trabalho: [argumentativo / analítico / pesquisa]\n\nForneça três opções diferentes de declarações de tese, variando da mais conservadora à mais arrojada, com uma breve análise dos pontos fortes de cada uma."
        },
        {
          "title": "Fortalecer a argumentação",
          "text": "Revise este parágrafo do meu trabalho e ajude-me a fortalecer a linha argumentativa.\n\n[cole o parágrafo aqui]\n\nEspecificamente:\n1. A afirmação principal é clara e sustentável?\n2. As evidências foram bem articuladas ao texto?\n3. A análise aprofunda a relevância prática do ponto abordado?\n\nReescreva o parágrafo com as melhorias sugeridas e explique cada alteração realizada."
        },
        {
          "title": "Escrever parágrafo de introdução",
          "text": "Escreva um parágrafo de introdução envolvente para o meu ensaio.\n\nTema: [tema]\nTese: [sua declaração de tese]\nPúblico: [ex.: professor, leitores em geral]\nTom: [acadêmico / semiformal]\n\nComece com um gancho cativante, forneça uma breve contextualização e finalize com a tese. Em seguida, ofereça uma alternativa diferente para o gancho inicial."
        }
      ]
    },
    {
      "cat": "Pesquisa Acadêmica",
      "prompts": [
        {
          "title": "Refinamento de pergunta de pesquisa",
          "text": "Ajude-me a refinar minha pergunta de pesquisa acadêmica.\n\nPergunta atual: [seu rascunho de pergunta]\nÁrea do conhecimento: [campo de estudo]\nEscopo: [ex.: artigo de graduação, 3000 palavras, um semestre]\n\nA pergunta está muito ampla, muito restrita ou com escopo adequado? Sugira três versões aprimoradas e explique por que cada uma é mais sólida."
        },
        {
          "title": "Síntese de revisão bibliográfica",
          "text": "Sintetize as principais correntes e debates na literatura científica sobre [tema].\n\nContexto: Estou escrevendo um(a) [tipo de trabalho] para a disciplina de [curso/nível].\n\nAborde:\n- Principais correntes teóricas ou referenciais conceituais\n- Consensos e divergências centrais na área\n- Lacunas existentes na pesquisa atual\n- Sugestões de termos de busca para encontrar mais artigos e fontes"
        },
        {
          "title": "Identificar lacunas na pesquisa",
          "text": "Estou pesquisando sobre [tema]. Com base nas seguintes fontes e anotações, ajude-me a identificar lacunas na literatura acadêmica que meu trabalho poderia explorar:\n\n[cole as anotações ou resumos das fontes aqui]\n\nQuais ângulos são pouco explorados? Quais questões permanecem em aberto? Qual abordagem traria uma contribuição original?"
        },
        {
          "title": "Elaborar entrada de bibliografia anotada",
          "text": "Escreva uma entrada de bibliografia anotada para a seguinte fonte.\n\nReferência: [referência bibliográfica completa]\nResumo da fonte: [cole o abstract ou pontos principais]\nNorma de citação: [ABNT / APA / MLA / Chicago]\n\nA anotação deve conter: um resumo conciso (2 a 3 frases), uma avaliação crítica da credibilidade e pertinência, e como pretendo utilizar essa fonte no meu trabalho."
        }
      ]
    },
    {
      "cat": "Exatas e Ciências",
      "prompts": [
        {
          "title": "Explicar conceito matemático passo a passo",
          "text": "Explique [conceito matemático] passo a passo como se eu estivesse vendo isso pela primeira vez.\n\nMeu nível atual: [ex.: álgebra do ensino médio, cálculo 1 da faculdade]\nOnde estou travando: [descreva a principal dúvida]\n\nExplique o conceito com um exercício resolvido detalhadamente e depois apresente um exercício um pouco mais desafiador para eu resolver sozinho. Mostre a resolução em seguida."
        },
        {
          "title": "Gerador de exercícios práticos",
          "text": "Gere 5 exercícios práticos sobre [tema/conceito].\n\nDificuldade: [fácil / média / difícil]\nMeu nível: [ex.: química do ensino médio, física universitária]\n\nApresente primeiro os enunciados sem o gabarito. Em seguida, após uma linha divisória, forneça a resolução completa e comentada passo a passo para cada um."
        },
        {
          "title": "Estrutura de relatório de laboratório",
          "text": "Ajude-me a estruturar um relatório de laboratório para o seguinte experimento.\n\nExperimento: [descreva o que realizou no laboratório]\nDisciplina: [ex.: Biologia, Química, Física]\nNível de formação: [ensino médio / graduação]\n\nApresente as seções padronizadas (Título, Resumo, Introdução, Metodologia/Materiais, Resultados, Discussão, Conclusão) com tópicos detalhando o que deve constar em cada uma e erros frequentes a evitar."
        },
        {
          "title": "Aplicação passo a passo do método científico",
          "text": "Guie-me na aplicação das etapas do método científico para a seguinte questão:\n\nPergunta de pesquisa: [sua dúvida ou questão]\nÁrea do conhecimento: [biologia / química / física / outra]\n\nPara cada etapa — observação, hipótese, desenho experimental, coleta de dados, análise e conclusão — explique o que devo fazer e o porquê. Destaque eventuais considerações éticas se pertinente."
        }
      ]
    },
    {
      "cat": "Idiomas",
      "prompts": [
        {
          "title": "Explicação gramatical com exemplos",
          "text": "Explique a seguinte regra gramatical em [idioma] de forma clara e objetiva.\n\nTópico gramatical: [ex.: modo subjuntivo, voz passiva, uso de partículas]\nMeu nível: [A1 / A2 / B1 / B2 / C1]\n\nForneça:\n- Uma explicação da regra em linguagem simples\n- 5 frases de exemplo com traduções\n- Os erros mais comuns cometidos por aprendizes\n- Um exercício rápido de fixação"
        },
        {
          "title": "Vocabulário em contexto",
          "text": "Ajude-me a aprender o seguinte vocabulário de [idioma] em contexto.\n\nPalavras: [liste as palavras aqui]\n\nPara cada termo forneça:\n- Definição em português\n- Frase de exemplo em [idioma] com tradução\n- Indicação de registro (formal / informal / gíria)\n- Uma expressão ou colocação comum na qual a palavra costuma aparecer\n\nEm seguida, crie um pequeno parágrafo utilizando todas as palavras de maneira natural."
        },
        {
          "title": "Tradução com notas de nuances",
          "text": "Traduza o seguinte texto de [idioma de origem] para [idioma de destino].\n\n[cole o texto aqui]\n\nApós a tradução, inclua notas explicativas sobre nuances abordando:\n- Palavras ou expressões sem correspondência direta\n- Referências culturais que demandam contextualização\n- Opções alternativas de tradução onde houver ambiguidade\n- Diferenças de tom ou formalidade entre o original e a versão traduzida"
        },
        {
          "title": "Diálogo prático para conversação",
          "text": "Escreva um diálogo de conversação realista em [idioma] para a seguinte situação:\n\nSituação: [ex.: fazer um pedido em um restaurante, pedir informações na rua, entrevista de emprego]\nMeu nível: [A1 / A2 / B1 / B2 / C1]\n\nInclua:\n- O diálogo completo entre dois interlocutores\n- A tradução em português abaixo de cada fala\n- Notas de vocabulário para palavras e expressões essenciais\n- Duas perguntas complementares que eu poder usar para estender o diálogo"
        }
      ]
    },
    {
      "cat": "Preparação para Provas e Concursos",
      "prompts": [
        {
          "title": "Simulado de questões de prova",
          "text": "Gere 10 questões práticas de simulado para [matéria/tema].\n\nFormato da prova: [múltipla escolha / respostas curtas / dissertativa / misto]\nNível: [ex.: ensino médio, vestibular, concurso público, graduação]\nAssuntos prioritários: [liste os temas fundamentais]\n\nApós a lista de questões, forneça o gabarito comentado com explicações breves para cada alternativa correta."
        },
        {
          "title": "Explicar questão incorreta",
          "text": "Errei esta questão em um simulado/prova. Ajude-me a entender o motivo.\n\nQuestão: [cole a questão]\nMinha resposta: [o que você respondeu ou assinalou]\nGabarito oficial: [a resposta correta]\n\nExplique:\n1. Por que a minha resposta está errada\n2. Por que o gabarito oficial está correto\n3. O conceito teórico subjacente que preciso dominar\n4. Uma questão semelhante para testar minha compreensão agora"
        },
        {
          "title": "Técnicas de memorização para conteúdo",
          "text": "Apresente técnicas eficazes de memorização para reter o seguinte conteúdo:\n\nConteúdo a memorizar: [cole a matéria, lista ou conceito]\nData da prova: [tempo restante]\nEstilo de aprendizagem preferido: [visual / verbal / baseado em padrões / indiferente]\n\nForneça pelo menos três técnicas diferentes (ex.: mnemônicos, palácio da memória / método de loci, técnica de blocos/chunking) com exemplos práticos aplicados a este conteúdo."
        },
        {
          "title": "Checklist de revisão de última hora",
          "text": "Crie um checklist de revisão de última hora para a minha prova que se aproxima.\n\nDisciplina: [matéria]\nA prova será em: [ex.: 24 horas, 3 dias]\nConteúdo programático: [liste os temas principais]\nFormato da avaliação: [múltipla escolha / dissertativa / resolução de problemas]\n\nPriorize o que revisar primeiro, destaque os conceitos de maior recorrência em provas e inclua uma lista breve de erros comuns para ficar atento no dia do exame."
        }
      ]
    }
  ],
  "productivity": [
    {
      "cat": "Planejamento",
      "prompts": [
        {
          "title": "Sessão de planejamento semanal",
          "text": "Ajude-me a planejar minha semana. Aqui estão minhas tarefas, prazos e compromissos:\n\n[liste tudo o que você tem para fazer]\n\nOrganize tudo em um cronograma diário, aponte conflitos de agenda e sugira o que pode ser adiado. Priorize por impacto."
        },
        {
          "title": "Desmembrar um grande projeto",
          "text": "Tenho um projeto grande e preciso dividi-lo em etapas gerenciáveis:\n\nProjeto: [descreva o projeto e seu objetivo]\nPrazo final: [data]\nTamanho da equipe: [número de pessoas ou individual]\n\nCrie uma divisão estruturada em fases com marcos de entrega, dependências e tempo estimado por tarefa."
        },
        {
          "title": "Matriz de prioridades (urgente/importante)",
          "text": "Ajude-me a criar uma matriz de prioridades para minha carga atual de trabalho. Categorize cada item em: Fazer Agora, Agendar, Delegar ou Eliminar.\n\nMinhas tarefas:\n[liste suas tarefas aqui]\n\nPara cada item, explique brevemente a classificação."
        },
        {
          "title": "Definição de metas trimestrais",
          "text": "Ajude-me a definir metas para o próximo trimestre. Minha função é [cargo/área] e meu objetivo principal é [descreva o que está buscando alcançar].\n\nElabore de 3 a 5 metas SMART com métricas de sucesso, ações-chave para cada meta e uma forma simples de acompanhar o progresso semanalmente."
        }
      ]
    },
    {
      "cat": "Reuniões",
      "prompts": [
        {
          "title": "Modelo de pauta de reunião",
          "text": "Crie uma pauta estruturada para esta reunião:\n\nTipo de reunião: [ex.: alinhamento semanal, kickoff de projeto, retrospectiva]\nDuração: [tempo]\nParticipantes: [cargos ou nomes]\nObjetivo: [o que deve ser decidido ou alcançado]\n\nInclua blocos de tempo para cada seção e um resultado esperado claro."
        },
        {
          "title": "Resumir anotações de reunião",
          "text": "Resuma estas anotações de reunião em um formato limpo e fácil de escanear, dividido em três seções: Decisões Principais, Itens de Ação (com responsáveis e prazos) e Questões em Aberto.\n\nAnotações brutas:\n[cole suas anotações aqui]"
        },
        {
          "title": "Extrair itens de ação das anotações",
          "text": "Extraia todos os itens de ação destas anotações de reunião. Para cada um, identifique: a tarefa, o responsável (se mencionado) e o prazo de entrega (se mencionado). Formate como uma lista numerada.\n\nAnotações da reunião:\n[cole as anotações aqui]"
        },
        {
          "title": "E-mail de follow-up pós-reunião",
          "text": "Escreva um e-mail conciso de acompanhamento para uma reunião que acabou de terminar.\n\nTema da reunião: [tema]\nParticipantes: [nomes ou cargos]\nPrincipais decisões tomadas: [liste-as]\nItens de ação: [liste com os respectivos responsáveis]\nPróxima reunião: [data ou a definir]\n\nMantenha o texto breve e profissional."
        }
      ]
    },
    {
      "cat": "E-mails",
      "prompts": [
        {
          "title": "Redigir e-mail profissional",
          "text": "Escreva um e-mail profissional com as seguintes informações:\n\nPara: [destinatário e cargo]\nContexto: [contexto da situação]\nPrincipal pedido ou mensagem: [o que precisa comunicar]\nTom: [ex.: formal, amigável, direto]\n\nMantenha conciso e finalize com um próximo passo claro."
        },
        {
          "title": "Responder a e-mail difícil",
          "text": "Ajude-me a responder a este e-mail de maneira profissional e ponderada.\n\nO e-mail recebido:\n[cole o e-mail aqui]\n\nMinha situação: [adicione qualquer contexto relevante]\nResultado desejado: [o que desejo que aconteça após o envio da resposta]\n\nRedija uma resposta firme, porém construtiva."
        },
        {
          "title": "Modelos de e-mail em lote",
          "text": "Crie [número] modelos de e-mail reutilizáveis para [caso de uso, ex.: acompanhamento de clientes, atualização de status de projeto, boas-vindas a novos contatos].\n\nCada modelo deve conter linha de assunto, corpo da mensagem com [espaços reservados] para personalização e uma chamada para ação. Mantenha cada um abaixo de 150 palavras."
        },
        {
          "title": "Recusar solicitação educadamente",
          "text": "Ajude-me a escrever um e-mail educado e claro recusando esta solicitação:\n\nA solicitação: [descreva o que foi pedido]\nMotivo da recusa: [breve justificativa sincera]\nRelação com o remetente: [colega, cliente, gestor, etc.]\n\nSugira uma alternativa ou amenize a recusa onde for apropriado. Mantenha curto."
        }
      ]
    },
    {
      "cat": "Tomada de Decisão",
      "prompts": [
        {
          "title": "Framework para tomada de decisão",
          "text": "Preciso tomar uma decisão entre estas opções:\n\nOpção A: [descreva]\nOpção B: [descreva]\nOpção C: [descreva, ou remova se houver apenas duas]\n\nContexto: [o que está em jogo, restrições, prazo]\n\nAvalie cada opção com base em: impacto, esforço, risco e reversibilidade. Recomende a melhor opção com as devidas justificativas."
        },
        {
          "title": "Análise pré-morte (Pre-mortem)",
          "text": "Faça uma análise pré-morte (pre-mortem) deste plano. Imagine que se passaram [6 meses / 1 ano] e o plano falhou completamente.\n\nO plano: [descreva seu plano ou iniciativa]\n\nListe as causas mais prováveis do fracasso, os sinais de alerta que devo monitorar desde o início e os ajustes que devo fazer no plano agora mesmo."
        },
        {
          "title": "Prós e contras com critérios ponderados",
          "text": "Ajude-me a avaliar esta decisão usando critérios ponderados.\n\nDecisão: [o que estou decidindo]\nOpções: [liste as opções]\nCritérios importantes para mim (classifique a importância de 1 a 5): [liste critérios, ex.: custo, agilidade, qualidade, risco]\n\nMonte uma tabela de pontuação ponderada, avalie cada opção e recomende a escolha vencedora."
        },
        {
          "title": "Análise de impacto sobre stakeholders",
          "text": "Analise o impacto desta decisão ou mudança sobre as partes interessadas (stakeholders):\n\nA decisão: [descreva-a]\nStakeholders envolvidos: [liste grupos ou pessoas]\n\nPara cada stakeholder, identifique: como são afetados (positiva ou negativamente), a provável reação deles e o que devo comunicar ou fazer para gerenciar essa resposta."
        }
      ]
    },
    {
      "cat": "Comunicação Corporativa",
      "prompts": [
        {
          "title": "Escrever atualização de status de projeto",
          "text": "Escreva uma atualização de status de projeto para [público, ex.: liderança, equipe, cliente].\n\nProjeto: [nome e descrição em uma linha]\nStatus: [no prazo / em risco / atrasado]\nRealizações deste período: [liste]\nPlanejado para o próximo período: [liste]\nBloqueios ou riscos: [liste, ou indique 'nenhum']\n\nMantenha em uma única página. Seja transparente sobre os riscos."
        },
        {
          "title": "Explicar conceito técnico para público leigo",
          "text": "Explique [conceito ou termo técnico] para alguém sem formação na área técnica. Use uma analogia simples, evite jargões e mantenha em menos de 150 palavras. O público é [descreva-o, ex.: executivos, clientes, equipe de RH]."
        },
        {
          "title": "Feedback para membro da equipe",
          "text": "Ajude-me a redigir um feedback claro e construtivo para um membro da equipe.\n\nSituação: [o que aconteceu e quando]\nImpacto: [como isso afetou o time, o projeto ou os resultados]\nComportamento a ser abordado: [seja específico e impessoal]\nMudança esperada: [o que você gostaria que fizessem de forma diferente]\n\nEstruture utilizando o modelo SCI (Situação, Comportamento, Impacto) e mantenha um tom de apoio."
        },
        {
          "title": "E-mail de escalonamento",
          "text": "Escreva um e-mail de escalonamento para uma situação bloqueada ou em risco.\n\nProblema: [descreva a situação com clareza]\nImpacto se não for resolvido: [cronograma, risco de negócio ou custos]\nO que já foi tentado: [ações já realizadas]\nO que preciso: [decisão, recurso ou ação de desbloqueio]\nDestinatário: [cargo e relação com o problema]\n\nSeja direto e focado em soluções, evitando tom acusatório."
        }
      ]
    },
    {
      "cat": "Produtividade Pessoal",
      "prompts": [
        {
          "title": "Otimização de rotina matinal",
          "text": "Ajude-me a desenhar uma rotina matinal eficaz. Aqui está a minha situação atual:\n\nHorário que acordo: [horário]\nTempo disponível antes do trabalho: [duração]\nRotina atual: [descreva-a ou informe que não possui]\nObjetivos que desejo incentivar: [ex.: foco, exercícios físicos, tranquilidade, estudos]\nRestrições: [ex.: filhos, deslocamento, espaço limitado]\n\nProjete uma rotina realista dividida em blocos de tempo e explique o propósito de cada elemento."
        },
        {
          "title": "Estruturação de rastreador de hábitos",
          "text": "Ajude-me a criar um rastreador de hábitos (habit tracker) para os seguintes hábitos que desejo construir:\n\nHábitos: [liste-os]\nFrequência de acompanhamento: [diária / semanal]\nFormato de preferência: [checklist simples, colunas em planilha, anotações em diário, etc.]\n\nPara cada hábito, sugira um gatilho, uma versão mínima viável para dias difíceis e uma métrica para medir o progresso."
        },
        {
          "title": "Modelo de revisão semanal",
          "text": "Crie um modelo de revisão semanal que eu possa usar todo(a) [dia da semana] para refletir e planejar.\n\nMinhas principais áreas de foco: [ex.: projetos profissionais, saúde, relacionamentos, aprendizado]\nTempo disponível para a revisão: [duração]\n\nInclua perguntas de reflexão, uma seção para registrar vitórias e aprendizados e uma área de planejamento para a semana seguinte. Mantenha o formato prático e rápido de preencher."
        },
        {
          "title": "Plano de aprendizado de nova habilidade",
          "text": "Crie um plano de aprendizado estruturado para [habilidade que desejo aprender].\n\nMeu nível atual: [iniciante absoluto / algum contato / intermediário]\nTempo que posso dedicar: [horas por semana]\nPrazo ou meta de conclusão: [data ou flexível]\nEstilo de aprendizado preferido: [vídeos, leitura, projetos práticos, cursos, etc.]\n\nDivida o plano em fases com recursos específicos, marcos de progresso e uma forma prática de testar minha evolução em cada etapa."
        }
      ]
    }
  ],
  "legal": [
    {
      "cat": "Contratos",
      "prompts": [
        {
          "title": "Revisar contrato em busca de riscos (red flags)",
          "text": "Revise este contrato e identifique sinais de alerta (red flags), cláusulas incomuns ou termos excessivamente unilaterais. Destaque qualquer ponto que possa gerar risco ou responsabilidade significativa:\n\n[cole o texto do contrato aqui]\n\nPara cada problema encontrado, explique o risco associado e sugira como reescrevê-lo ou melhorá-lo."
        },
        {
          "title": "Resumir termos principais de contrato",
          "text": "Resuma os termos essenciais deste contrato em linguagem clara. Aborde: partes envolvidas, vigência, condições de pagamento, obrigações de cada parte, regras de rescisão e restrições relevantes:\n\n[cole o texto do contrato aqui]"
        },
        {
          "title": "Estrutura de Acordo de Confidencialidade (NDA)",
          "text": "Elabore uma estrutura para um acordo de confidencialidade (NDA) entre:\n\nParte reveladora: [nome/perfil, ex.: startup de SaaS]\nParte receptora: [nome/perfil, ex.: potencial cliente corporativo]\nFinalidade: [ex.: avaliação de integração de software]\nVigência: [ex.: 2 anos]\n\nInclua as seções padrão de um NDA: definição de informações confidenciais, obrigações, exceções, prazo e penalidades/remédios jurídicos."
        },
        {
          "title": "Comparar duas versões de contrato",
          "text": "Compare estas duas versões de um contrato e resuma as principais diferenças. Destaque quaisquer alterações que modifiquem de forma relevante direitos, obrigações, responsabilidades ou termos de pagamento:\n\nVersão 1:\n[cole aqui]\n\nVersão 2:\n[cole aqui]"
        }
      ]
    },
    {
      "cat": "Conformidade e Compliance",
      "prompts": [
        {
          "title": "Checklist de conformidade com LGPD/GDPR",
          "text": "Crie um checklist de conformidade com LGPD/GDPR para uma [tipo de organização, ex.: empresa SaaS B2B] que coleta [tipos de dados, ex.: endereços de e-mail e métricas de uso] de usuários.\n\nAborde: bases legais para tratamento, consentimento, direitos dos titulares de dados, retenção e descarte, notificação de incidentes e requisitos para contratos de processamento de dados (DPA)."
        },
        {
          "title": "Avaliação de impacto no tratamento de dados",
          "text": "Ajude-me a conduzir uma avaliação de tratamento de dados para a seguinte atividade:\n\nAtividade: [descreva, ex.: envio de e-mails de marketing para clientes cadastrados]\nDados coletados: [liste os tipos]\nOperadores terceirizados envolvidos: [liste, ex.: Mailchimp, Stripe]\n\nIdentifique obrigações de conformidade, riscos potenciais e medidas de segurança recomendadas."
        },
        {
          "title": "Análise de impacto de mudanças regulatórias",
          "text": "Analise o impacto desta alteração regulatória sobre nossa organização:\n\nRegulamentação: [nome e jurisdição, ex.: Marco Legal da IA, Regulamento Europeu de IA]\nNosso negócio: [breve descrição]\nPráticas atuais: [descreva as práticas relevantes em vigor]\n\nO que precisamos alterar? Priorize por ordem de urgência."
        },
        {
          "title": "Guia de preparação para auditoria",
          "text": "Ajude-nos a nos preparar para uma auditoria iminente de [tipo de auditoria, ex.: SOC 2 Tipo II, ISO 27001, auditoria de conformidade com LGPD].\n\nNossa organização: [breve descrição]\nEscopo da auditoria: [descreva]\nCronograma: [ex.: a auditoria ocorrerá em 3 meses]\n\nForneça um checklist priorizado do que preparar, apontamentos frequentes para corrigir preventivamente e documentos que devemos ter prontos."
        }
      ]
    },
    {
      "cat": "Políticas Internas",
      "prompts": [
        {
          "title": "Estrutura de Política de Privacidade",
          "text": "Elabore uma estrutura para uma política de privacidade para:\n\nProduto/serviço: [descreva]\nDados coletados: [liste tipos, ex.: nome, e-mail, dados de pagamento, dados de navegação]\nServiços de terceiros utilizados: [ex.: Stripe, Google Analytics, AWS]\nLocalização dos usuários: [ex.: Brasil e União Europeia]\n\nInclua todas as seções exigidas pela LGPD e GDPR. Escreva em linguagem acessível e transparente."
        },
        {
          "title": "Escrever Política de Uso Aceitável",
          "text": "Escreva uma Política de Uso Aceitável (AUP) para [nome do produto/plataforma], uma [descreva o produto, ex.: ferramenta de colaboração em nuvem para empresas].\n\nInclua: usos permitidos, atividades proibidas, medidas de fiscalização e penalidades, e canais para denúncia de violações.\n\nO tom deve ser claro e profissional, evitando juridiquês excessivo."
        },
        {
          "title": "Seção do manual do colaborador",
          "text": "Escreva uma seção para o manual do colaborador sobre [tema, ex.: política de trabalho remoto / segurança da informação / uso de redes sociais].\n\nTipo de empresa: [descreva]\nRegras principais a contemplar: [liste]\nTom: [ex.: acolhedor mas firme]\n\nTorne o texto fácil de compreender, especificando expectativas, comportamentos não permitidos e consequências para o não cumprimento."
        },
        {
          "title": "Minuta de Código de Conduta",
          "text": "Elabore uma minuta de código de conduta para [tipo de organização, ex.: projeto open source / startup de tecnologia].\n\nValores fundamentais a refletir: [liste, ex.: inclusão, respeito mútuo, transparência]\nEscopo: [ex.: aplica-se a contribuidores, colaboradores e eventos]\n\nInclua: comportamentos esperados, atitudes inaceitáveis, canal de denúncias e procedimentos de aplicação."
        }
      ]
    },
    {
      "cat": "Propriedade Intelectual",
      "prompts": [
        {
          "title": "Preparação para busca de marcas",
          "text": "Ajude-me a me preparar para uma busca de anterioridade de marca para o seguinte caso:\n\nMarca proposta: [nome ou expressão]\nProdutos/serviços: [descreva o que comercializa ou faz]\nJurisdições: [ex.: Brasil (INPI), EUA (USPTO), União Europeia]\n\nExplique o que pesquisar, o que torna uma marca registrável e quais conflitos potenciais devem ser monitorados."
        },
        {
          "title": "Síntese do estado da técnica (patentes)",
          "text": "Ajude-me a resumir o estado da técnica relevante para o conceito desta invenção visando um pedido de patente:\n\nDescrição da invenção: [descreva em linguagem acessível]\nÁrea tecnológica: [ex.: inteligência artificial, biotecnologia, software]\n\nExplique o significado de estado da técnica, quais bases pesquisar e ajude-me a articular o que há de inovador nesta invenção."
        },
        {
          "title": "Comparação de licenças de código aberto",
          "text": "Compare estas licenças open source para o nosso caso de uso:\n\nLicenças a comparar: [ex.: MIT, Apache 2.0, GPL v3, AGPL]\nNosso caso de uso: [ex.: estamos desenvolvendo um produto SaaS comercial que utiliza bibliotecas open source]\n\nPara cada licença, explique: o que podemos fazer, o que devemos fazer obrigatoriamente e o que é proibido. Recomende a licença mais adequada para o projeto."
        },
        {
          "title": "Checklist de cessão de direitos de PI",
          "text": "Crie um checklist de cessão de propriedade intelectual para a contratação de [freelancers / funcionários / prestadores PJ] para desenvolver [descreva o trabalho, ex.: funcionalidades de software].\n\nQuais cláusulas devem constar no contrato? O que precisamos validar? Quais erros habituais devemos evitar para garantir que a titularidade da PI seja devidamente transferida para nossa empresa?"
        }
      ]
    },
    {
      "cat": "Negócios e Responsabilidade",
      "prompts": [
        {
          "title": "Estrutura de Termos de Serviço comercial",
          "text": "Elabore uma estrutura para os termos de serviço de:\n\nProduto: [descreva]\nModelo de negócio: [ex.: SaaS por assinatura, marketplace, e-commerce]\nBase de usuários: [ex.: consumidores finais, empresas]\n\nInclua: termos de conta, pagamentos e cancelamentos/reembolsos, usos proibidos, limitação de responsabilidade, resolução de disputas e legislação aplicável. Sinalize seções que demandem revisão obrigatória por advogado."
        },
        {
          "title": "Avaliação de riscos de responsabilidade civil",
          "text": "Ajude-me a mapear os riscos de responsabilidade jurídica para esta atividade empresarial:\n\nAtividade: [descreva, ex.: disponibilizar análises financeiras geradas por IA para investidores pessoa física]\nTipo de empresa: [descreva]\nJurisdições: [onde você atua]\n\nIdentifique as principais categorias de risco, probabilidade e impacto estimado, e recomende medidas de mitigação."
        },
        {
          "title": "Termos essenciais de acordo de parceria",
          "text": "Esboce as cláusulas essenciais que devem constar em um acordo de parceria entre:\n\nParte A: [descreva]\nParte B: [descreva]\nNatureza da parceria: [ex.: divisão de receitas em um produto codesenvolvido]\n\nAborde: papéis e responsabilidades, divisão de receitas/lucros, titularidade da PI, processo de tomada de decisão, cláusulas de saída/término e solução de controvérsias."
        },
        {
          "title": "Checklist de revisão de contratos de fornecedores",
          "text": "Crie um checklist para revisar contratos de fornecedores antes da assinatura. Nossa empresa é uma [descreva, ex.: startup fintech em Série A].\n\nNossas maiores preocupações: [liste, ex.: tratamento e segurança de dados, SLAs, limites de indenização, direitos de rescisão]\n\nO que devemos sempre checar, quais termos desfavoráveis os fornecedores costumam incluir e em quais pontos devemos negociar alterações?"
        }
      ]
    },
    {
      "cat": "Linguagem Jurídica Acessível",
      "prompts": [
        {
          "title": "Simplificar texto jurídico",
          "text": "Reescreva este texto jurídico em uma linguagem simples e direta, acessível para quem não é da área jurídica. Mantenha todo o sentido legal intacto, mas elimine jargões, construções passivas e termos desnecessários:\n\n[cole o texto jurídico aqui]\n\nPúblico-alvo: [ex.: consumidores em geral / pequenos empreendedores]"
        },
        {
          "title": "Redigir aviso legal voltado ao usuário",
          "text": "Escreva um aviso para o usuário final atendendo à seguinte exigência legal:\n\nExigência: [ex.: consentimento da LGPD para e-mails promocionais / aviso de cookies / atualização na retenção de dados]\nContexto: [onde o aviso será exibido, ex.: formulário de cadastro / banner no app]\nTom: [ex.: amigável, conciso, transparente]\n\nTorne a mensagem clara, transparente e o mais breve possível, cobrindo todos os pontos essenciais."
        },
        {
          "title": "Criar FAQ a partir de documento jurídico",
          "text": "Transforme este documento jurídico em um FAQ em linguagem acessível que os usuários realmente leiam e compreendam. Extraia os pontos centrais e as dúvidas mais frequentes que possam surgir:\n\n[cole o documento aqui]\n\nFormate como Perguntas e Respostas. Elabore entre 8 e 12 perguntas. Mantenha cada resposta em 2 a 3 frases."
        },
        {
          "title": "Converter política interna em guia para colaboradores",
          "text": "Transforme esta política formal em um guia prático e amigável para os colaboradores. O objetivo é que a equipe realmente compreenda e aplique as diretrizes no dia a dia — e não apenas assine um termo.\n\nPolítica:\n[cole aqui]\n\nInclua: o que isso representa na rotina de trabalho, exemplos práticos do que fazer e do que evitar, e a quem recorrer em caso de dúvidas."
        }
      ]
    }
  ],
  "sales": [
    {
      "cat": "Prospecção",
      "prompts": [
        {
          "title": "Escrever e-mail de prospecção fria",
          "text": "Escreva um e-mail de prospecção fria (cold outreach) para um cliente em potencial.\n\nNome da empresa: [empresa do prospect]\nCargo do prospect: [ex.: Diretor de Vendas, Head de Operações]\nNosso produto/serviço: [breve descrição]\nProposta de valor principal: [qual dor resolvemos]\nResultado desejado: [ex.: agendar uma conversa de 20 minutos]\n\nMantenha abaixo de 150 palavras. Comece focando na dor do cliente, não no nosso produto. Termine com uma única CTA de baixo atrito."
        },
        {
          "title": "Sequência de mensagens e conexão no LinkedIn",
          "text": "Escreva uma sequência de 3 etapas de prospecção no LinkedIn para um contato frio.\n\nPerfil do prospect: [cargo, empresa, setor]\nNossa oferta: [produto/serviço e benefício principal]\n\nEtapa 1: Nota de solicitação de conexão (menos de 300 caracteres)\nEtapa 2: Primeira mensagem após a conexão (focada em valor, sem tentar vender de imediato, menos de 100 palavras)\nEtapa 3: Mensagem de acompanhamento após 5 dias sem resposta (lembrete cordial, menos de 80 palavras)\n\nTom: profissional e humano. Sem aberturas clichês como 'Vi seu perfil e achei interessante'."
        },
        {
          "title": "Pesquisa sobre o prospect antes da reunião",
          "text": "Ajude-me a pesquisar este prospect antes de uma reunião de vendas.\n\nNome do prospect: [nome]\nCargo: [cargo]\nEmpresa: [nome da empresa]\nSetor: [setor]\nObjetivo da reunião: [ex.: diagnóstico, demonstração, fechamento]\n\nForneça:\n1. 5 perguntas estratégicas com base nas prioridades prováveis do cargo dele\n2. 3 potenciais dores comuns para alguém nessa função\n3. 2 tendências recentes do setor que posso citar para demonstrar autoridade\n4. Um gancho quebra-gelo baseado na empresa ou trajetória da pessoa"
        },
        {
          "title": "Definição de Perfil de Cliente Ideal (ICP)",
          "text": "Ajude-me a estruturar o Perfil de Cliente Ideal (ICP) para nosso produto.\n\nProduto/serviço: [descreva o que comercializa]\nMelhores clientes atuais: [descreva 2 a 3 exemplos se houver]\nProblema que resolvemos: [descreva a dor central]\nNossa faixa de preço: [valor aproximado]\n\nResultado esperado:\n1. Perfil firmográfico (porte da empresa, setor, localização, faturamento)\n2. Sinais tecnográficos (ferramentas e tecnologias que utilizam)\n3. Gatilhos comportamentais (o que os motiva a comprar agora)\n4. Anti-ICP: quem NÃO devemos prospectar e os motivos"
        }
      ]
    },
    {
      "cat": "Diagnóstico e Qualificação",
      "prompts": [
        {
          "title": "Framework de perguntas para call de diagnóstico",
          "text": "Crie um roteiro de perguntas para uma conversa inicial de diagnóstico (discovery call).\n\nProduto/serviço: [o que vendemos]\nPersona-alvo: [cargo e setor]\nDuração da reunião: [ex.: 30 minutos]\n\nEstruture as perguntas na seguinte ordem:\n1. Situação (2 a 3 perguntas para compreender o cenário atual)\n2. Problema (2 a 3 perguntas para evidenciar as dores)\n3. Implicação (2 perguntas para explorar o custo de não resolver o problema)\n4. Necessidade de solução (2 perguntas para que o próprio cliente articule o valor da solução)\n\nInclua uma pergunta final aberta para alinhar os próximos passos."
        },
        {
          "title": "Identificação de dores do cliente",
          "text": "Com base nas seguintes anotações de uma reunião de diagnóstico, identifique as principais dores do prospect e ordene-as por urgência.\n\nAnotações da reunião:\n[cole suas anotações aqui]\n\nPara cada dor identificada:\n1. Nomeie e descreva com clareza\n2. Cite ou parafraseie o que o cliente disse\n3. Classifique a urgência: Alta / Média / Baixa\n4. Indique qual recurso ou benefício do produto resolve essa dor\n\nAponte também eventuais dores implícitas sugeridas pelo contexto."
        },
        {
          "title": "Análise de necessidades do prospect",
          "text": "Ajude-me a preencher uma análise de necessidades com base nesta conversa com o prospect.\n\nProspect: [nome, cargo, empresa]\nO que declarou como objetivo principal: [citação ou resumo]\nProcesso/ferramenta atual: [o que utilizam hoje]\nFrustrações mencionadas: [liste-as]\nPrazo indicado: [se houver]\nIndícios sobre orçamento: [se houver]\n\nGere uma análise estruturada contendo:\n- Necessidade primordial\n- Necessidades secundárias\n- Critérios de sucesso (o que representa 'problema resolvido' para eles?)\n- Próximo passo recomendado no ciclo de vendas"
        },
        {
          "title": "Checklist de qualificação (BANT / MEDDIC)",
          "text": "Avalie este prospect utilizando frameworks de qualificação de vendas.\n\nProspect: [nome, cargo, empresa]\nAnotações do diagnóstico: [cole as anotações]\n\nAvalie segundo ambos os modelos:\n\nBANT:\n- Budget (Orçamento): [conhecido / desconhecido / confirmado]\n- Authority (Autoridade): [decisor / influenciador / desconhecido]\n- Need (Necessidade): [forte / moderada / fraca / incerta]\n- Timeline (Prazo): [urgente / em até 6 meses / sem previsão]\n\nMEDDIC:\n- Metrics (Métricas quantificadas identificadas?)\n- Economic Buyer (Comprador econômico identificado?)\n- Decision Criteria (Critérios de decisão conhecidos?)\n- Decision Process (Processo de decisão mapeado?)\n- Identify Pain (Dor confirmada?)\n- Champion (Temos um patrocinador interno?)\n\nRecomende: Qualificar / Nutrir / Desqualificar — com justificativa detalhada."
        }
      ]
    },
    {
      "cat": "Apresentação e Demonstração",
      "prompts": [
        {
          "title": "Personalizar pitch para a persona",
          "text": "Adapte nosso pitch de vendas para uma persona específica.\n\nNosso produto/serviço: [descreva-o]\nProposta de valor central: [1 a 2 frases]\nPersona do prospect: [cargo, perfil da empresa, setor]\nProváveis prioridades máximas: [ex.: redução de custos, produtividade da equipe, conformidade]\nDores identificadas no diagnóstico: [resumo das dores]\n\nReescreva o pitch para que ele:\n1. Comece pelo que é mais relevante para esta persona\n2. Utilize a linguagem do cliente (evitando nossos jargões internos)\n3. Conecte nossos recursos diretamente à dor declarada\n4. Finalize com um motivo convincente para avançar agora"
        },
        {
          "title": "Roteiro de demonstração de produto",
          "text": "Escreva um roteiro estruturado para uma sessão de demonstração de produto.\n\nProduto: [nome e breve descrição]\nProspect: [cargo, empresa, setor]\nDores confirmadas no diagnóstico: [liste-as]\nDuração da demo: [ex.: 30 minutos]\nPrincipais recursos a destacar: [liste de 3 a 4]\n\nEstrutura:\n1. Abertura (reconfirmar pauta e objetivos, 2 min)\n2. Contextualização (conectar a demo às dores do prospect, 3 min)\n3. Demonstração prática (recurso por recurso, destacando o 'e daí?' de cada um, 18 min)\n4. Checagem de objeções (pausa para dúvidas, 4 min)\n5. Fechamento (próximos passos e chamada para ação, 3 min)\n\nInclua frases de transição entre cada etapa."
        },
        {
          "title": "Narrativa de cálculo de ROI",
          "text": "Ajude-me a construir uma narrativa de Retorno sobre Investimento (ROI) para apresentar ao prospect.\n\nNosso produto/serviço: [descrição]\nPorte da empresa do prospect: [número de colaboradores / receita se souber]\nDor enfrentada: [descreva]\nResultado da nossa solução: [o que melhoramos]\n\nElabore uma narrativa que contemple:\n1. Custo atual do problema (tempo perdido, gastos diretos ou riscos)\n2. Estimativa conservadora de ganho com nossa solução\n3. Projeção anual de ROI com premissas transparentes\n4. Prazo de retorno (Payback)\n5. Resumo executivo em uma frase para apresentação à diretoria\n\nUse números redondos e destaque as premissas para que o prospect possa ajustá-las conforme necessário."
        },
        {
          "title": "Resumo de caso de sucesso para prospect",
          "text": "Resuma um estudo de caso de cliente para compartilhar com um prospect.\n\nCliente: [nome da empresa ou 'uma empresa do setor de X']\nProblema antes da nossa solução: [descreva]\nComo utilizou nosso produto: [descreva]\nResultados obtidos: [métricas disponíveis]\nPrazo para retorno: [tempo até colher resultados]\n\nEscreva um resumo de 150 palavras estruturado em:\n- Cenário\n- Desafio\n- Solução\n- Resultados\n\nEm seguida, crie uma versão de 1 frase para inclusão em e-mails.\nFinalize com 2 perguntas de acompanhamento para relacionar essa história ao contexto do prospect."
        }
      ]
    },
    {
      "cat": "Tratamento de Objeções",
      "prompts": [
        {
          "title": "Responder a objeção de preço",
          "text": "Ajude-me a contornar uma objeção sobre preço.\n\nO que o prospect disse: \"[citação exata ou paráfrase]\"\nNosso preço: [valor aproximado]\nValor que entregamos: [principais resultados]\nConcorrente ou alternativa com a qual estão comparando: [se souber]\n\nEscreva uma resposta que:\n1. Valide a preocupação sem adotar tom defensivo\n2. Reposicione o preço como investimento usando linguagem de ROI\n3. Decomponha o custo em valor por unidade ou por dia, se conveniente\n4. Proponha um próximo passo construtivo (sem oferecer desconto de imediato)\n\nSugira também uma pergunta investigativa para fazer antes de responder, identificando se é uma restrição real de orçamento ou falta de percepção de valor."
        },
        {
          "title": "Lidar com comparação de concorrentes",
          "text": "Ajude-me a responder a uma objeção comparando nosso produto ao concorrente.\n\nO que o prospect disse: \"[citação ou resumo]\"\nConcorrente citado: [nome do concorrente]\nO que provavelmente valorizam no concorrente: [preço / funcionalidades / marca / relação prévia]\nNossos principais diferenciais: [liste de 2 a 3]\n\nEscreva uma resposta que:\n1. Reconheça positivamente que estão fazendo uma avaliação cuidadosa\n2. Respeite o concorrente sem críticas depreciativas\n3. Direcione a conversa para nossos pontos fortes exclusivos alinhados à dor do cliente\n4. Sugira critérios comparativos que deveriam levar em conta na decisão\n\nEncerre com uma pergunta que mantenha o diálogo avançando."
        },
        {
          "title": "Contornar a objeção \"não é o momento certo\"",
          "text": "Ajude-me a contornar uma objeção de momento/timing.\n\nO que o prospect disse: \"[citação ou resumo, ex.: 'Estamos sem tempo agora' ou 'Vamos retomar no segundo semestre']\"\nO que sei sobre o contexto dele: [informações levantadas no diagnóstico]\nNosso prazo típico de implantação: [ex.: 2 semanas, 1 dia]\n\nEscreva uma resposta que:\n1. Demonstre empatia em relação à sobrecarga atual da equipe\n2. Questione gentilmente se adiar a decisão agrava ou ameniza o problema\n3. Ofereça um próximo passo de baixo compromisso (não o fechamento imediato)\n4. Apresente um motivo concreto pelo qual agir agora é mais vantajoso\n\nMantenha abaixo de 120 palavras. Evite táticas agressivas de pressão."
        },
        {
          "title": "Superar o \"preciso pensar a respeito\"",
          "text": "Ajude-me a lidar com a objeção do tipo 'preciso pensar a respeito' ou 'depois te dou um retorno'.\n\nContexto: [estágio da negociação — demo realizada, proposta enviada, etc.]\nO que o prospect disse: \"[citação exata]\"\nO que acredito ser a real hesitação: [preço / aprovação interna / receio de risco / dúvida de valor]\n\nEscreva uma resposta que:\n1. Respeite o processo de decisão do cliente sem deixar a negociação esfriar\n2. Revele a objeção real com uma pergunta direta, porém cordial\n3. Se coloque à disposição para apoiar na questão que gerou a pausa (ex.: elaboração de caso de negócio interno)\n4. Defina um horário específico de acompanhamento antes de encerrar o contato"
        }
      ]
    },
    {
      "cat": "Acompanhamento (Follow-up)",
      "prompts": [
        {
          "title": "E-mail de follow-up pós-demonstração",
          "text": "Escreva um e-mail de follow-up para enviar em até 24 horas após uma demonstração de produto.\n\nNome do prospect: [nome]\nEmpresa: [empresa]\nData da demo: [data]\nPrincipais dores abordadas: [liste de 1 a 3]\nRecursos que despertaram maior interesse: [liste]\nPróximo passo combinado: [ex.: envio de proposta, alinhamento com a diretoria, início de teste]\nDúvidas pendentes: [liste, se houver]\n\nO e-mail deve:\n1. Agradecer e resgatar um momento específico da conversa\n2. Sintetizar os 2 a 3 pontos fundamentais de valor conectados à dor do cliente\n3. Responder às questões pendentes\n4. Confirmar o próximo passo com um chamado à ação objetivo\n\nTom: cordial e profissional. Menos de 200 palavras."
        },
        {
          "title": "Reengajar lead inativo (cold lead)",
          "text": "Escreva um e-mail para retomar contato com um prospect que parou de responder.\n\nNome do prospect: [nome]\nEmpresa: [empresa]\nÚltima interação: [data e o que aconteceu — ex.: demo realizada, proposta enviada]\nTempo desde o último contato: [ex.: 6 semanas]\nPossível razão para o silêncio: [se souber]\nNovo gancho ou fato relevante a citar: [ex.: novidade sobre a empresa dele, novo recurso lançado, mudança no setor]\n\nEscreva um e-mail que:\n1. Não gere sentimento de culpa nem peça desculpas excessivas\n2. Inicie com algo novo e relevante (nada de 'só passando para dar um oi')\n3. Reforce o valor da solução em uma única frase\n4. Contenha uma CTA única e simples de responder\n\nMenos de 100 palavras."
        },
        {
          "title": "E-mail de encaminhamento de proposta",
          "text": "Escreva um e-mail para acompanhar o envio de uma proposta comercial a um prospect.\n\nNome do prospect: [nome]\nEmpresa: [empresa]\nResumo da proposta: [visão geral do que está contemplado]\nInvestimento total: [valor ou faixa de preço]\nPrincipais resultados esperados: [2 a 3 tópicos]\nPrazo de validade da proposta: [se houver]\nPróximo passo: [ex.: reunião de alinhamento agendada, aguardando assinatura]\n\nO e-mail deve:\n1. Posicionar a proposta como a solução para a dor diagnosticada\n2. Destacar os 2 a 3 resultados de maior impacto\n3. Facilitar a navegação pelos pontos principais da proposta\n4. Deixar o próximo passo muito claro\n\nTom: seguro e colaborativo. Menos de 180 palavras."
        },
        {
          "title": "E-mail para destravar negociação emperrada",
          "text": "Escreva um e-mail para destravar uma oportunidade de venda que estagnou.\n\nNome do prospect: [nome]\nEmpresa: [empresa]\nEtapa da negociação: [ex.: proposta enviada, concordância verbal sem assinatura, em análise jurídica]\nTempo de estagnação: [prazo]\nÚltimo contato: [breve resumo]\nQual você supõe ser o gargalo: [sua melhor hipótese]\n\nEscreva um e-mail que:\n1. Não soe como cobrança ou pressão insistente\n2. Ofereça algo genuinamente útil (ex.: modelo, dados, reunião para sanar dúvidas)\n3. Crie um senso sutil de urgência sem parecer artificial\n4. Proponha uma ação concreta com data sugerida\n\nSugira também uma abordagem alternativa caso o e-mail não seja respondido."
        }
      ]
    },
    {
      "cat": "Relatórios Comerciais",
      "prompts": [
        {
          "title": "Resumo semanal de pipeline",
          "text": "Escreva um resumo semanal do pipeline para meu gestor comercial ou equipe.\n\nAtividades da semana:\n- Novas oportunidades criadas: [número e breve descrição]\n- Demos ou reuniões realizadas: [número]\n- Propostas enviadas: [número]\n- Negócios fechados (ganhos): [número e valor]\n- Negócios perdidos: [número e motivo, se conhecido]\n\nPanorama do pipeline:\n- Valor total em aberto: [valor]\n- Oportunidades em cada estágio: [liste]\n- Negócios em risco: [oportunidades estagnadas ou com ressalvas]\n\nPrioridades para a próxima semana: [liste de 3 a 4 ações]\n\nFormate como um resumo objetivo e fácil de ler. Use linguagem direta e evite jargões desnecessários."
        },
        {
          "title": "Análise de oportunidade perdida (Lost Deal)",
          "text": "Ajude-me a elaborar uma análise detalhada sobre uma oportunidade perdida.\n\nDetalhes do negócio:\n- Prospect: [nome da empresa]\n- Valor da oportunidade: [valor]\nDuração do ciclo de vendas: [tempo]\n- Etapa em que foi perdida: [ex.: após a demo, após envio da proposta]\n- Motivo alegado pelo cliente: [o que informaram]\n- Motivo real (sua percepção): [sua avaliação sincera]\n- Concorrente escolhido (se souber): [nome]\n\nAnalise:\n1. Que sinais negligenciamos ou deixamos de perceber?\n2. Onde o processo comercial falhou?\n3. Era uma oportunidade viável de fechamento? Por quê?\n4. O que faríamos diferente hoje?\n5. Há possibilidade de reengajamento futuro?\n\nSeja honesto e orientado a aprendizado, evitando tom defensivo."
        },
        {
          "title": "Padrões de vitórias e perdas (Win/Loss)",
          "text": "Analise estes resultados de vendas para identificar padrões de vitórias e perdas.\n\nNegócios ganhos recentemente:\n[liste oportunidades ganhas — incluindo porte, setor, persona, duração e principal motivo do ganho]\n\nNegócios perdidos recentemente:\n[liste oportunidades perdidas — incluindo porte, setor, persona, duração e principal motivo da perda]\n\nIdentifique:\n1. Características comuns dos negócios que ganhamos (aderência ao ICP, caso de uso, persona, valor)\n2. Características comuns dos negócios que perdemos\n3. Fatores determinantes nas vitórias (preço, relacionamento, recursos, agilidade)\n4. Fatores determinantes nas perdas (mesmos quesitos)\n5. Recomendações: onde concentrar esforços, o que corrigir no processo e em qual segmento dobrar a aposta"
        },
        {
          "title": "Narrativa de previsão de vendas (Forecast)",
          "text": "Escreva uma narrativa de previsão de vendas (forecast) para apresentação à liderança ou diretoria.\n\nPeríodo da previsão: [ex.: 2º trimestre de 2026]\nMeta comercial: [meta total]\nPipeline atual: [valor total em aberto]\nPrevisão confirmada (committed): [valor que tenho certeza de fechamento]\nCenário otimista (best case): [se todas as negociações avançarem]\nRiscos mapeados: [oportunidades com risco de escorregar para o trimestre seguinte]\n\nPrincipais negócios em destaque:\n[liste de 3 a 5 com nome/placeholder, estágio, valor e data prevista de fechamento]\n\nEscreva um texto executivo de 200 palavras que:\n1. Apresente o número principal com clareza\n2. Explique os fatores que sustentam a confiança na previsão\n3. Destaque os principais riscos e as ações em andamento para mitigá-los\n4. Finalize com um pedido claro de suporte ou intervenção da liderança, se necessário\n\nTom: seguro e fundamentado em dados, sem postura defensiva."
        }
      ]
    }
  ],
  "stocks": [
    {
      "cat": "Análise Fundamentalista",
      "prompts": [
        {
          "title": "Desmonte analítico de relatório 10-K / 10-Q",
          "text": "Realize uma análise fundamentalista aprofundada do mais recente relatório 10-K ou 10-Q desta companhia.\n\nEmpresa: [Ticker / Nome]\nPeríodo: [ex.: 10-K do exercício de 2025 ou 10-Q do 2º trimestre de 2026]\nPrincipais métricas: [Receita Líquida, Margem Bruta, Lucro Líquido, Fluxo de Caixa Livre (FCF)]\n\nAnalise e estruture:\n1. Motores de crescimento de receita: Crescimento orgânico vs. aquisições, abertura por segmento de produto e exposição geográfica\n2. Trajetória das margens: Evolução das margens bruta, operacional e líquida nos últimos 3 a 5 anos\n3. Solidez do balanço patrimonial: Caixa vs. dívida total, cronograma de amortização de vencimentos e capital de giro líquido\n4. Qualidade do fluxo de caixa: FCF versus Lucro Líquido (ajustes por remuneração baseada em ações / SBC e capital de giro)\n5. Principais fatores de risco: Os 3 riscos operacionais ou regulatórios mais críticos apontados no Item 1A\n\nConclua com 3 perguntas estratégicas que a diretoria executiva deve esclarecer na próxima teleconferência de resultados."
        },
        {
          "title": "Auditoria de fosso econômico e vantagens competitivas",
          "text": "Avalie o fosso econômico (Economic Moat) e a vantagem competitiva sustentável desta empresa com base nas metodologias da Morningstar e das 5 Forças de Porter.\n\nEmpresa: [Nome / Ticker]\nSetor: [ex.: Infraestrutura de Nuvem, Semicondutores, SaaS B2B]\nPrincipais concorrentes: [liste de 2 a 4 pares]\n\nExamine cada pilar de fosso competitivo:\n1. Efeitos de rede (Network effects): A plataforma ganha mais valor para cada usuário à medida que a base cresce?\n2. Custos de substituição (Switching costs): Quão custoso e arriscado é para um cliente migrar para uma solução rival?\n3. Vantagens de custos: Economias de escala, patentes de processos proprietários ou acesso exclusivo a insumos\n4. Ativos intangíveis: Patentes registradas, licenças governamentais ou poder de precificação da marca\n5. Escala eficiente: O nicho de mercado desestimula racionalmente a entrada de novos competidores?\n\nClassificação do Moat: Inexistente / Estreito / Amplo com justificativa detalhada e a principal ameaça a monitorar na próxima década."
        },
        {
          "title": "Alocação de capital e histórico de ROIC",
          "text": "Analise o histórico de alocação de capital da diretoria e o Retorno sobre o Capital Investido (ROIC).\n\nEmpresa: [Nome / Ticker]\nDados dos últimos 3 a 5 anos:\n- ROIC / ROCE: [números reportados ou estimativa]\n- WACC: [custo médio ponderado de capital estimado]\n- CapEx: [expansão vs. manutenção]\n- Histórico de M&A: [principais aquisições]\n- Recompras de ações e dividendos: [valores]\n\nAvalie:\n1. Geração de valor econômico: O ROIC supera de forma consistente o WACC? Qual é a origem desse diferencial?\n2. Reinvestimento orgânico: Os lucros retidos estão sendo reinvestidos a taxas marginais atrativas de retorno?\n3. Disciplina em M&A: As aquisições anteriores criaram valor sinérgico ou resultaram em amortizações de ágio (impairment)?\n4. Retorno ao acionista: As recompras de ações ocorrem abaixo do valor intrínseco ou servem apenas para compensar a diluição de executivos?\n5. Nota final para a alocação de capital (de A a F) com fundamentação objetiva."
        },
        {
          "title": "Eficiência do capital de giro e ciclo de caixa",
          "text": "Examine a gestão do capital de giro e o ciclo de conversão de caixa (Cash Conversion Cycle) desta empresa.\n\nEmpresa: [Nome / Ticker]\nMétricas operacionais:\n- Prazo médio de recebimento de vendas (DSO): [dias]\n- Prazo médio de rotação de estoques (DIO): [dias]\n- Prazo médio de pagamento a fornecedores (DPO): [dias]\n- Conversão em FCF (% do EBITDA ou Lucro Líquido): [%]\n\nAnalise:\n1. Ciclo de Conversão de Caixa (CCC = DSO + DIO - DPO): Calcule a trajetória ao longo dos últimos 3 anos\n2. Qualidade do capital de giro: As contas a receber crescem em ritmo superior ao das receitas? Há acúmulo de estoques parados?\n3. Poder de barganha com fornecedores: A extensão do DPO decorre de real força competitiva ou de aperto na liquidez?\n4. Consumo vs. geração de caixa: À medida que a empresa cresce, o capital de giro drena liquidez ou libera caixa livre?\n5. Comparativo setorial: Confronte esses indicadores com 2 concorrentes diretos."
        }
      ]
    },
    {
      "cat": "Valuation e Modelagem Financeira",
      "prompts": [
        {
          "title": "Premissas para modelo de valuation por DCF",
          "text": "Ajude-me a elaborar premissas consistentes e defensáveis para um modelo de Fluxo de Caixa Descontado (DCF) em um horizonte de 5 anos.\n\nEmpresa: [Nome / Ticker]\nPreço atual da ação: $[Preço]\nReceita Líquida anual: $[Receita]\nFluxo de Caixa Livre (FCF): $[FCF]\nSetor de atuação: [Setor]\n\nConstrua uma matriz de 3 cenários (Pessimista / Base / Otimista):\n1. CAGR da Receita (Anos 1 a 5): Justifique as taxas de expansão com base no mercado endereçável (TAM) e ganho de market share\n2. Margem de FCF terminal: Dinâmica de alavancagem operacional e nível de CapEx de manutenção em estado estacionário\n3. Taxa de desconto (WACC): Beta, custo de capital próprio e custo da dívida após efeitos tributários\n4. Taxa de crescimento perpétuo (g): Taxa conservadora indexada à inflação e ao PIB de longo prazo (2% a 3%)\n5. Ponte de Enterprise Value para Equity Value: Ajustes de dívida líquida, participações minoritárias e ações diluídas\n\nCalcule o preço justo implícito por ação em cada cenário e aponte a variável de maior sensibilidade."
        },
        {
          "title": "Múltiplos comparáveis em relação aos pares",
          "text": "Realize um valuation relativo por múltiplos comparando esta empresa com seus principais concorrentes de mercado.\n\nEmpresa analisada: [Ticker]\nPares comparáveis: [Par 1, Par 2, Par 3, Par 4]\nMétricas de avaliação:\n- EV / Vendas projetadas (NTM): [Empresa vs. Pares]\n- EV / EBITDA projetado (NTM): [Empresa vs. Pares]\n- Preço / Lucro projetado (Forward P/E): [Empresa vs. Pares]\n- Índice PEG: [Empresa vs. Pares]\n- Regra dos 40 / Score de crescimento: [Crescimento de Receita + Margem FCF]\n\nForneça:\n1. Tabela comparativa de múltiplos consolidada\n2. Prêmio ou desconto: A ação negocia com prêmio ou desconto frente aos pares? O diferencial é justificado por crescimento ou ROIC superior?\n3. Múltiplo normalizado: Em qual patamar de múltiplo a empresa deveria negociar quando atingir maturidade operacional?\n4. Faixa de preço-alvo deduzida a partir da mediana dos pares do setor."
        },
        {
          "title": "DCF Reverso: Teste de expectativas do mercado",
          "text": "Execute um DCF Reverso (Reverse DCF) para descobrir qual taxa de crescimento e rentabilidade o preço atual da ação embute.\n\nEmpresa: [Ticker]\nValor de Mercado / Enterprise Value atual: $[Valor]\nPreço atual por ação: $[Preço]\nFluxo de Caixa Livre anual: $[FCF]\nWACC assumido: [ex.: 9% ou 10%]\nTaxa de crescimento na perpetuidade: [ex.: 2,5%]\n\nDetermine:\n1. Crescimento implícito de FCF: Qual taxa anual composta de FCF para os próximos 5 a 10 anos o preço atual reflete?\n2. Desdobramento operacional: Qual ritmo de vendas e expansão de margens é exigido para entregar esse fluxo de caixa?\n3. Teste de plausibilidade frente ao TAM: O market share implícito que a empresa precisaria alcançar é viável?\n4. Assimetria de risco e retorno: A cotação oferece margem de segurança (Margin of Safety) ou precifica perfeição absoluta?"
        },
        {
          "title": "Segurança de dividendos e cobertura pelo FCF",
          "text": "Avalie a segurança, a sustentabilidade e a perspectiva de crescimento do fluxo de dividendos distribuído por esta empresa.\n\nEmpresa: [Nome / Ticker]\nDividend Yield atual: [%]\nDividendo anual por ação: $[Valor]\nFluxo de Caixa Livre por ação: $[Valor]\nLucro por Ação (LPA): $[Valor]\nDívida Líquida / EBITDA: [Múltiplo]\n\nVerifique:\n1. Payout sobre o FCF: Proporção dos proventos pagos sobre o Fluxo de Caixa Livre (está abaixo do teto prudencial de 60% a 70%?)\n2. Lucro contábil vs. Caixa real: A distribuição é coberta por geração operacional ou depende de endividamento?\n3. Alavancagem e vencimentos de dívida: Os compromissos financeiros ameaçam o dividendo em momentos de desaceleração?\n4. Histórico de proventos: CAGR de elevação dos proventos em 3, 5 e 10 anos\n5. Teste de estresse: Em um cenário com queda de 15% nas receitas e recuo de 300 bps nas margens, os proventos continuam seguros?\n\nParecer final: Seguro / Vulnerável / Risco de corte com sinais de alerta a monitorar."
        }
      ]
    },
    {
      "cat": "Resultados e Teleconferências",
      "prompts": [
        {
          "title": "Análise de teleconferência de resultados e Q&A",
          "text": "Analise a transcrição ou os pontos altos da teleconferência de divulgação de resultados (Earnings Call) desta empresa.\n\nEmpresa: [Nome / Ticker]\nTrimestre: [ex.: 4T25 / 1T26]\nTrechos da transcrição ou declarações-chave:\n[cole as falas da diretoria e as perguntas dos analistas]\n\nSintetize:\n1. Mensagens prioritárias da administração: Quais conquistas a diretoria enfatizou no discurso de abertura?\n2. Pontos de atrito na sessão de perguntas e respostas: Em quais temas os analistas de sell-side mais insistiram?\n3. Respostas vagas ou defensivas: Quais métricas e projeções a gestão procurou contornar sem detalhar?\n4. Sinais operacionais sutis: Evidências nas entrelinhas sobre desaceleração de funil comercial, pressões de custos ou gargalos\n5. Conclusão em 3 frases objetivas voltada para investidores fundamentalistas."
        },
        {
          "title": "Variação de guidance vs. consenso de mercado",
          "text": "Analise as novas metas e estimativas (guidance) fornecidas pela companhia em confronto com as expectativas do mercado.\n\nEmpresa: [Ticker]\nHorizonte de projeção: [ex.: 2T26 / Exercício completo de 2026]\nGuidance oficial anunciado:\n- Receita: [Faixa]\n- EBITDA / Lucro Operacional: [Faixa]\n- Lucro Líquido por Ação (LPA) ajustado: [Faixa]\nConsenso anterior dos analistas:\n- Receita estimada: [Consenso]\n- LPA estimado: [Consenso]\n\nEntregue:\n1. Resumo Beat / Meet / Miss: Quantifique a divergência percentual tanto nos números divulgados quanto nas metas futuras\n2. Consistência da projeção: A meta anual pressupõe um ritmo homogêneo ou depende de uma concentração irrealista no encerramento do ano (efeito taco de hóquei)?\n3. Alavancagem operacional: A receita avança mas o lucro por ação desacelera (compressão de margens)?\n4. Tendência esperada para as revisões de preço-alvo dos grandes bancos de investimento."
        },
        {
          "title": "Histórico de surpresas e volatilidade pós-balanço",
          "text": "Examine o histórico de surpresas de lucros e receitas e o comportamento do preço das ações após os balanços trimestrais.\n\nEmpresa: [Ticker]\nSérie histórica dos últimos 4 a 8 trimestres:\n- Surpresas no LPA (% Beat/Miss): [listar trimestres]\n- Surpresas na Receita (% Beat/Miss): [listar trimestres]\n- Oscilação média da cotação no dia seguinte (%): [ex.: +/- 6%]\n- Movimento implícito no mercado de opções para a próxima divulgação: [se disponível]\n\nAnalise:\n1. Padrão de credibilidade da gestão: A diretoria costuma adotar projeções ultraconservadoras para superar estimativas com frequência?\n2. Assimetria nas reações do mercado: A ação despenca fortemente diante de leves frustrações nas expectativas?\n3. Origem contábil do resultado positivo: O ganho derivou de tração operacional genuína ou de créditos fiscais e efeitos cambiais não recorrentes?\n4. Gerenciamento de risco: Qual dimensionamento de posição ou mecanismo de proteção é recomendado antes do anúncio?"
        },
        {
          "title": "Detecção de mudança de tom e sentimento da gestão",
          "text": "Compare a linguagem e o tom da diretoria entre dois trimestres consecutivos para captar inflexões de sentimento.\n\nEmpresa: [Ticker]\nDeclarações do Trimestre Anterior (1T):\n[cole trechos representativos]\nDeclarações do Trimestre Atual (2T):\n[cole trechos representativos]\n\nIdentifique:\n1. Mudança de tom: A diretoria assumiu uma postura mais cautelosa, defensiva ou visivelmente mais entusiasmada?\n2. Alterações de vocabulário: Frequência de palavras como 'desafios macroeconômicos', 'ambiente adverso' vs. 'aceleração', 'demanda robusta'\n3. Omissão de indicadores: Métricas antes destacadas com frequência (taxa de retenção líquida, backlog) deixaram de ser citadas?\n4. Comunicação sobre capital: Houve mudanças quanto a planos de recompra de ações, desalavancagem ou investimentos de expansão?\n5. Pontuação consolidada de sentimento: Conclusão otimista (bullish), neutra ou pessimista (bearish)."
        }
      ]
    },
    {
      "cat": "Análise Técnica e Gerenciamento de Risco",
      "prompts": [
        {
          "title": "Tendência em múltiplos tempos gráficos e suportes",
          "text": "Mapeie a estrutura gráfica, o alinhamento de tendências e os níveis de suporte e resistência em múltiplos tempos gráficos.\n\nTicker: [Ticker]\nPreço atual: $[Preço]\nContexto semanal: [Máxima/mínima de 52 semanas, média móvel de 200 semanas, tendência de longo prazo]\nContexto diário: [Médias móveis de 50 e 200 dias, padrão gráfico em formação como bandeira, xícara com alça ou consolidação]\nIndicadores: [IFR/RSI, MACD, perfil de volume]\n\nEstruture:\n1. Tendência predominante: Alta, baixa ou lateral nos gráficos semanal e diário\n2. Níveis de resistência: 3 zonas críticas com probabilidade de entrada de força vendedora\n3. Níveis de suporte: 3 patamares técnicos de absorção compradora (antigos rompimentos, confluência de médias)\n4. Diagnóstico de médias móveis: Relação com as SMAs de 20, 50 e 200 períodos (Cruzamento Dourado, Cruzamento da Morte, sobreextensão)\n5. Plano tático: Faixa de entrada ideal com risco controlado, stop de invalidação e primeiro objetivo de lucro."
        },
        {
          "title": "Cálculo de risco/retorno e tamanho da posição",
          "text": "Calcule uma relação risco/retorno assimétrica e o dimensionamento técnico de posição para proteger o patrimônio.\n\nCapital total da carteira: $[ex.: 100.000]\nRisco financeiro máximo aceito por operação: [ex.: 1% do portfólio = 1.000 $]\nPreço pretendido de entrada: $[Entrada]\nStop-loss técnico ou fundamentalista: $[Preço do Stop]\nAlvo de realização 1 (Conservador): $[Alvo 1]\nAlvo de realização 2 (Cenário estendido): $[Alvo 2]\n\nCalcule e estabeleça:\n1. Risco por ação: Entrada - Stop Loss ($ e %)\n2. Quantidade de ações: Número exato de papéis a adquirir para que o stop disparado não ultrapasse a perda tolerada\n3. Capital financeiro alocado: Valor total da compra e percentual correspondente sobre a carteira\n4. Relação Risco/Retorno (R:R): Razão para o Alvo 1 e Alvo 2 (alerta se for inferior a 3:1)\n5. Estratégia de saída: Plano de realização parcial de lucros e ajuste do stop para o preço de entrada (breakeven)."
        },
        {
          "title": "Auditoria de short interest e risco de Short Squeeze",
          "text": "Avalie a pressão de posições vendidas a descoberto, o custo de aluguel de ações e o risco de um 'short squeeze'.\n\nEmpresa: [Ticker]\nShort interest (% sobre o free float): [%]\nDays to Cover (dias para cobertura de posições): [Dias]\nTaxa de aluguel das ações (Borrow Fee): [%]\nParticipação de investidores institucionais (%): [%]\nEngajamento de investidores pessoas físicas nas redes: [Alto / Médio / Baixo]\n\nExamine:\n1. Vulnerabilidade ao squeeze (escala de 1 a 10): Com base no tamanho do float, taxa de empréstimo e volume negociado\n2. Tese dos vendedores a descoberto: Por que fundos institucionais apostam contra o papel? Qual é o ponto central da tese pessimista?\n3. Gatilho de reversão altista: Qual fato novo (resultado, aprovação, ativismo) forçaria uma corrida de recompra de papéis?\n4. Disponibilidade para aluguel: A oferta de ações para venda a descoberto está escassa?\n5. Advertência de risco: Riscos assimétricos a considerar tanto para posições compradas quanto vendidas."
        },
        {
          "title": "Perfil de volume e acúmulo institucional de ativos",
          "text": "Analise a dinâmica de volume para verificar se investidores institucionais estão acumulando ou distribuindo o papel.\n\nAção: [Ticker]\nComportamento recente do preço: [ex.: consolidando entre 140 $ e 150 $ após gap de resultados]\nPadrão dos volumes:\n- Volume nos dias de alta vs. dias de baixa: [ex.: forte volume nas barras verdes, volume decrescente nos recuos]\n- Operações em bloco / negociações em dark pools: [se disponível]\n- Indicador On-Balance Volume (OBV): [ascendente, lateralizado, descendente]\n\nAvalie:\n1. Fase de Acumulação vs. Distribuição: Os institucionais absorvem a pressão de venda nos suportes?\n2. Secagem de volume nas correções: O volume diminui expressivamente nos recuos em direção às médias?\n3. Ponto de Controle (POC): A faixa de preço com a maior concentração de contratos e ações trocadas no período\n4. Sinais de clímax: Evidências de pânico vendedor ou euforia compradora desmedida\n5. Conclusão: Os volumes apoiam uma continuidade de alta sólida?"
        }
      ]
    },
    {
      "cat": "Macroeconomia e Ciclos Setoriais",
      "prompts": [
        {
          "title": "Sensibilidade macroeconômica e ciclicidade setorial",
          "text": "Examine o comportamento desta empresa diante das diferentes fases do ciclo econômico e dos ciclos monetários.\n\nEmpresa / Setor: [ex.: Automação Industrial, Bens de Luxo, Bancos Regionais]\nCenário macroeconômico vigente:\n- Taxas de juros: [em alta / estáveis / em queda]\n- Inflação e custos de mão de obra: [altos / desacelerando]\n- Confiança do consumidor e taxas de inadimplência: [fortes / em deterioração]\n- PMI Industrial ou de Serviços: [expansão >50 / contração <50]\n\nAnalise:\n1. Crescimento cíclico vs. estrutural: Qual fatia do avanço recente veio de ventos favoráveis de mercado vs. tendências seculares?\n2. Sensibilidade aos juros: Impacto do custo da dívida no balanço e nas decisões de investimento dos clientes\n3. Poder de repasse de preços: Capacidade de repassar custos mais altos sem sacrificar volumes de vendas\n4. Comportamento em recessões: Resiliência de receita e margens durante as crises de 2008 e 2020\n5. Posição no ciclo setorial: O segmento está mais próximo de um topo ou de um fundo de ciclo?"
        },
        {
          "title": "Concentração de receita e vulnerabilidades na cadeia",
          "text": "Avalie a dependência de grandes clientes e os pontos de vulnerabilidade geopolítica na cadeia de suprimentos.\n\nEmpresa: [Nome / Ticker]\nPerfil da base de clientes:\n- % da receita vinda do maior cliente: [ex.: o Cliente A representa 18%]\n- Participação conjunta dos 5 ou 10 maiores clientes: [conforme relatório 10-K]\nCadeia de suprimentos e fabricação:\n- Fornecedores estratégicos ou fundições: [ex.: TSMC, fornecedores exclusivos de insumos]\n- Concentração territorial da produção: [ex.: 70% fabricado em Taiwan ou na Ásia]\n\nEntregue:\n1. Grau de risco por concentração: Alto / Médio / Baixo e o impacto financeiro caso um grande cliente encerre contratos\n2. Pontos Únicos de Falha (Single Points of Failure): Componentes críticos sem fornecedores alternativos qualificados\n3. Exposição a barreiras tarifárias, embargos e instabilidades geopolíticas\n4. Iniciativas de diversificação: Cronograma e investimentos (CapEx) voltados a diluir a dependência geográfica."
        },
        {
          "title": "Riscos regulatórios e processos antitruste",
          "text": "Avalie processos de regulação concorrencial, disputas judiciais antitruste e mudanças legislativas que pesam sobre o papel.\n\nEmpresa: [Ticker / Setor]\nÓrgãos envolvidos: [ex.: Comissão Europeia, FTC, DOJ, SEC, CADE]\nProcessos em andamento: [descreva ações civis, propostas tarifárias ou inquéritos administrativos]\n\nExamine:\n1. Cenário mais desfavorável: Multas pecuniárias expressivas, cisões forçadas de negócios ou proibições a práticas comerciais\n2. Receita diretamente sob escrutínio: Qual percentual das vendas ou dos lucros de alta margem depende das práticas questionadas?\n3. Precedentes no setor: Como casos semelhantes envolvendo concorrentes foram concluídos no passado?\n4. Efeito barreira de entrada: Um marco regulatório mais rígido pode blindar a empresa frente a novos competidores menores?\n5. Impacto financeiro ponderado pela probabilidade sobre o LPA nos próximos 1 a 3 anos."
        },
        {
          "title": "Matriz comparativa de benchmarking concorrencial",
          "text": "Construa uma comparação aprofundada lado a lado entre esta empresa e seus dois maiores rivais de setor.\n\nEmpresa sob análise: [Empresa A]\nConcorrente direto 1: [Empresa B]\nConcorrente direto 2: [Empresa C]\n\nCompare sob 6 dimensões estratégicas:\n1. Porte e ritmo de crescimento: Crescimento anualizado de receita e faturamento absoluto\n2. Perfil das margens: Margem bruta, margem operacional e conversão em FCF\n3. Métricas unitárias e monetização: ARPU, taxa de retenção líquida (NRR) ou margem de contribuição por usuário\n4. Investimento em inovação: Gastos com P&D como % da receita e velocidade de lançamentos\n5. Estrutura de capital: Posição de caixa líquido, endividamento e notas de crédito\n6. Múltiplos de mercado: P/E, EV/Sales, EV/EBITDA\n\nConclusão: Qual das 3 alternativas reúne a melhor combinação entre qualidade operacional e atratividade de preço?"
        }
      ]
    },
    {
      "cat": "Tese de Investimento & Cenário Pessimista",
      "prompts": [
        {
          "title": "Debate institucional entre teses otimista e pessimista",
          "text": "Desenvolva um debate analítico de nível institucional confrontando a tese otimista (Bull) com a tese pessimista (Bear).\n\nEmpresa: [Nome / Ticker]\nPreço atual / Múltiplos vigentes: $[Preço, Múltiplos]\nResumo da proposta de valor: [1 a 2 frases explicando o modelo de negócios]\n\nDesenvolva:\n\nTese Otimista (Os 3 principais pilares):\n1. Principal catalisador de crescimento e expansão de mercado endereçável\n2. Alavancagem operacional e perspectiva de ampliação das margens\n3. Razões pelas quais o valuation atual subestima a capacidade de gerar lucros futuros\n\nTese Pessimista (Os 3 principais fatores de risco):\n1. Principal vulnerabilidade ligada a concorrência, avanços tecnológicos ou macroeconomia\n2. Risco de perda de poder de precificação e compressão de rentabilidade\n3. Motivos pelos quais as projeções de consenso pecam por complacência excessiva\n\nFator decisório: Qual métrica ou marco nos próximos 12 meses comprovará qual dos lados está correto?"
        },
        {
          "title": "Pre-mortem de investimento: Por que a tese fracassou",
          "text": "Faça um exercício de pre-mortem: Imagine que se passaram 3 anos e esta ação despencou 50%. Descreva como o fracasso aconteceu.\n\nEmpresa: [Nome / Ticker]\nMinha tese de investimento atual: [motivos para comprar ou manter]\nPremissas otimistas assumidas: [velocidade de crescimento, solidez do moat, competência da diretoria]\n\nDetalhe o encadeamento dos acontecimentos que levaram à perda:\n1. O ponto cego crítico: Qual risco decisivo foi menosprezado ou ignorado pelo consenso e por mim?\n2. Ruptura concorrencial: Qual concorrente ou nova tecnologia desestruturou a precificação do produto?\n3. Falha de alocação de recursos: Qual aquisição com preço excessivo ou endividamento imprudente comprometeu as finanças?\n4. Compressão de múltiplos: Por que o mercado rebaixou o múltiplo de 30x para 15x mesmo com lucros estáveis?\n5. Sinais precursores: 3 alertas precoces que teriam permitido liquidar a posição ainda no primeiro ano."
        },
        {
          "title": "Memorando conciso de investimento em 1 página",
          "text": "Redija um memorando de investimento de alta convicção, claro e persuasivo, sintetizado em uma única página.\n\nEmpresa: [Nome / Ticker]\nPreço da cotação: $[Preço] | Valor de Mercado: $[Cap]\nHorizonte pretendido: [ex.: 1 a 3 anos]\n\nEstruture o documento:\n1. Resumo Executivo: O que a empresa faz e qual é a distorção de valuation atual praticada pelo mercado (3 frases)\n2. Percepção Diferenciada (Variant Perception): Qual aspecto fundamental você enxerga com nitidez que a média do mercado ignora?\n3. Dinâmica Financeira: Principais motores de receita, economia unitária e perfil de geração de caixa livre\n4. Valuation e Preço-Alvo: Valor justo estimado no cenário base com taxa interna de retorno esperada (TIR)\n5. Catalisadores-chave: 2 a 3 eventos concretos nos próximos 12 a 18 meses com força para destravar valor\n6. Critérios de Venda Forçada: Em quais circunstâncias específicas a tese será considerada invalidada, exigindo a liquidação da posição."
        },
        {
          "title": "Estratégia de saída e gatilhos de invalidação da tese",
          "text": "Defina previamente uma política rigorosa de realização de lucros e gatilhos para desmonte da posição antes de investir.\n\nEmpresa: [Nome / Ticker]\nPreço de compra: $[Preço]\nValuation de referência para saída: $[Preço-Alvo]\nPremissas da tese original: [liste 2 ou 3 fundamentos]\n\nEstabeleça o plano de saída:\n1. Realizações parciais de lucro: Em quais patamares de cotação ou múltiplos você reduzirá 33%, 50% ou encerrará toda a posição?\n2. Gatilhos de invalidação fundamentalista: 3 deteriorações operacionais mensuráveis (ex.: retenção líquida abaixo de 110%, queda de margens por 2 trimestres seguidos, saída do fundador) que exigem venda imediata, independentemente do preço da ação\n3. Custo de oportunidade: Em quais cenários outra oportunidade com assimetria superior justifica migrar os recursos?\n4. Barreira emocional: Qual diretriz impedirá a armadilha de comprar mais papéis em uma empresa cujos fundamentos estão se deteriorando?"
        }
      ]
    }
  ],
  "finance": [
    {
      "cat": "Orçamento & Fluxo de Caixa",
      "prompts": [
        {
          "title": "Planejador de orçamento 50/30/20 e base zero",
          "text": "Construa um planejamento orçamentário mensal sob medida combinando a regra 50/30/20 com os princípios do orçamento de base zero.\n\nRenda líquida mensal (após impostos): $[Valor]\nGastos fixos essenciais (Moradia, Contas, Parcelas de dívidas, Seguros): $[Valor]\nGastos variáveis (Alimentação, Lazer, Transporte, Restaurantes): $[Valor]\nPoupança e investimentos mensais atuais: $[Valor]\nMetas prioritárias: [ex.: entrada de imóvel, quitação de dívidas, reserva de emergência]\n\nElabore:\n1. Distribuição 50/30/20: Necessidades Básicas ($), Desejos ($) e Poupança/Dívidas ($) apontando os desvios da meta ideal\n2. Alocação de Base Zero: Destine cada real a uma finalidade específica até que o saldo a classificar seja zero\n3. 3 alavancas imediatas: Linhas de despesa passíveis de corte para liberar de 200 a 500 $/mês\n4. Cronograma semanal de fluxo de caixa para evitar aperto financeiro no fim do mês."
        },
        {
          "title": "Auditoria de assinaturas e redução de custos fixos",
          "text": "Ajude-me a revisar detalhadamente e reduzir gastos recorrentes, assinaturas e contas residenciais.\n\nLista dos meus pagamentos periódicos (mensais e anuais):\n[serviços de streaming, planos de celular, internet, academias, seguros, aplicativos e mensalidades]\n\nEntregue:\n1. Classificação: Essencial, Conveniente mas dispensável, e Esquecido ou redundante\n2. Cancelamentos prioritários: Serviços para descontinuar imediatamente com a economia anual correspondente\n3. Scripts de negociação: Falas prontas para negociar descontos com empresas de telecomunicações e seguradoras\n4. Otimização de ciclo: Serviços em que a migração para a fatura anual viabiliza descontos de 15% a 20%\n5. Rotina de revisão trimestral de 10 minutos para barrar o reaparecimento de cobranças desnecessárias."
        },
        {
          "title": "Calculadora de reserva de emergência e cronograma",
          "text": "Calcule o montante ideal para minha reserva de emergência e desenhe um cronograma acelerado para compô-la.\n\nGastos mensais inadiáveis (custo mínimo de sobrevivência): $[Valor]\nRecursos já guardados como reserva: $[Valor]\nEstabilidade profissional: [Alta / Média / Volátil / Autônomo]\nDependentes financeiros: [Filhos ou outros dependentes]\nEventualidades previsíveis (franquias, manutenção de carro, despesas médicas): $[Valor]\n\nCalcule e estruture:\n1. Meta financeira: Projeção de 3, 6, 9 ou 12 meses de despesas de acordo com meu perfil de estabilidade\n2. Arquitetura em camadas: Divisão entre conta corrente (resgate imediato), contas remuneradas (CDB liquidez diária/Tesouro Selic) e fundos de curto prazo\n3. Plano de aportes: Parcela mensal recomendada para bater o valor em 6, 12 ou 18 meses\n4. Diretrizes de acionamento: Critérios inequívocos sobre o que qualifica uma emergência real vs. um gasto planejável."
        },
        {
          "title": "Corte de vazamentos financeiros e gastos variáveis",
          "text": "Ajude-me a localizar vazamentos cotidianos de dinheiro e a enxugar despesas variáveis sem comprometer meu bem-estar.\n\nGastos variáveis mensais rotineiros:\n- Supermercado e feira: $[Valor]\n- Bares, restaurantes e aplicativos de entrega: $[Valor]\n- Lazer, vestuário e compras pessoais: $[Valor]\n- Combustível, transporte e mobilidade: $[Valor]\n- Pequenos gastos casuais: $[Valor]\n\nForneça:\n1. Ajustes de alto impacto: 3 mudanças práticas de rotina que liberam mais de 300 $ de economia mensal imediata\n2. Estratégia de substituição: Alternativas prazerosas e econômicas para refeições fora de casa e entretenimento\n3. Mecanismo de contenção: Um sistema simples de teto orçamentário (ex.: cartão pré-pago exclusivo para gastos de lazer)\n4. Desafio de 30 dias para neutralizar impulsos de compras automáticas."
        }
      ]
    },
    {
      "cat": "Quitação de Dívidas & Estratégias de Pagamento",
      "prompts": [
        {
          "title": "Planejador de quitação: Bola de Neve vs. Avalanche",
          "text": "Desenvolva um plano sistemático de eliminação de passivos comparando os métodos Bola de Neve e Avalanche.\n\nDívidas atuais:\n[Descreva cada dívida: Credor, Saldo devedor ($), Taxa de juros anual (CET %), Parcela mínima mensal ($)]\nRecursos adicionais mensais disponíveis para amortização: $[Valor]\n\nEstruture:\n1. Método Avalanche: Priorização do passivo com a taxa de juros mais pesada (cálculo dos juros economizados e data de quitação final)\n2. Método Bola de Neve: Priorização da dívida com menor saldo devedor (motivação psicológica e cronograma)\n3. Comparativo consolidado: Total de juros despendidos, prazo total em meses e método recomendado para meu perfil comportamental\n4. Roteiro de pagamento detalhado para cada credor do Mês 1 ao Mês 6."
        },
        {
          "title": "Consolidação de cartão e transferência de dívida",
          "text": "Avalie se vale a pena recorrer a uma portabilidade de dívida com juros reduzidos ou a um empréstimo pessoal de consolidação.\n\nDívidas no cartão rotativo e cheque especial:\n[Cartão 1: Saldo, Juros %]\n[Cartão 2: Saldo, Juros %]\nScore de crédito estimado: [Bom / Regular]\nTaxa de transferência ou contratação: [percentual ou tarifa]\nCondições de empréstimo de consolidação disponíveis: [Taxa de juros %, prazo em meses, taxas]\n\nAnalise:\n1. Estudo de custo-benefício: Custos de contratação frente aos juros abusivos poupados nas taxas do rotativo\n2. Parcela necessária: Valor mensal fixo para liquidar integralmente o débito antes do término do período promocional (ex.: 12 a 18 meses)\n3. Cuidados essenciais: Multas por atraso, aumento de juros no pós-promoção e risco de reendividamento nos cartões liberados\n4. Conclusão: Portabilidade de crédito vs. empréstimo consignado/pessoal vs. amortização acelerada sem novos contratos."
        },
        {
          "title": "Estratégia para financiamento estudantil",
          "text": "Analise meu contrato de financiamento educacional e determine a conduta mais vantajosa entre liquidação e repactuação.\n\nContratos em aberto:\n[Lista de empréstimos: Financiamento público (ex.: FIES) ou Bancário, Saldo devedor, Juros contratuais, Parcela mensal]\nRenda bruta anual: $[Valor]\nÁrea de atuação: [Setor público / Empresa privada / Terceiro setor]\nSituação familiar: [Solteiro / Dependentes]\n\nAvalie:\n1. Repactuação por renda vs. Parcelamento padrão: Desembolso mensal e custo total consolidado\n2. Elegibilidade para renegociações governamentais ou abatimentos de juros: Critérios legais e melhor calendário de adesão\n3. Renegociação bancária privada: A redução da taxa compensa a perda de carências e proteções oferecidas pelo programa original?\n4. Amortizar antecipadamente vs. Investir: Faz mais sentido focar na quitação do saldo ou direcionar os aportes a fundos de índice?"
        },
        {
          "title": "Amortização extraordinária de financiamento imobiliário",
          "text": "Calcule os reflexos de realizar amortizações extraordinárias diretamente no saldo devedor do meu financiamento imobiliário.\n\nValor original financiado: $[Valor]\nSaldo devedor restante: $[Valor]\nTaxa nominal de juros: [%]\nPrazo residual: [ex.: 20 anos / 240 meses]\nParcela mensal atual (amortização + juros): $[Valor]\nAporte extraordinário pretendido: $[ex.: 250 $/mês ou 5.000 $ em parcela única anual]\n\nCalcule:\n1. Redução de prazo: Em quantos anos e meses a quitação completa do imóvel é antecipada?\n2. Economia em juros: Total poupado em juros e seguros habitacionais ao longo do contrato\n3. Retorno garantido vs. Custo de oportunidade: Comparação entre a rentabilidade certa (a taxa do financiamento) e o retorno esperado no mercado de ações (7% a 8% líquido)\n4. Estratégia mista: Como conciliar abatimentos parciais da dívida com investimentos para a aposentadoria."
        }
      ]
    },
    {
      "cat": "Poupança & Metas Financeiras",
      "prompts": [
        {
          "title": "Plano de poupança para grandes metas de vida",
          "text": "Monte um plano de poupança disciplinado para realizar um objetivo financeiro de grande porte (imóvel, veículo, casamento ou ano sabático).\n\nObjetivo: [ex.: Entrada para aquisição de casa própria]\nValor global necessário: $[Valor]\nPrazo pretendido: [ex.: 24 meses / 2 anos]\nRecursos já guardados para esta finalidade: $[Valor]\nCapacidade mensal de aporte dedicada: $[Valor]\n\nEntregue:\n1. Aporte mensal necessário: Cálculo detalhado considerando o rendimento dos juros compostos em instrumentos de renda fixa\n2. Ativo indicado para custódia: Instrumento conservador apropriado (Tesouro Selic/Direto, CDB de liquidez diária, Fundos DI/Monetários)\n3. Aceleradores de prazo: 3 iniciativas para encurtar a meta utilizando receitas sazonais ou cortes temporários de gastos\n4. Pontos de checagem: Volume acumulado que deve ser alcançado nos meses 6, 12, 18 e 24."
        },
        {
          "title": "Sistema de contas de reserva para gastos periódicos",
          "text": "Desenvolva uma sistemática de provisões (Sinking Funds) para cobrir sem sustos as despesas anuais ou pontuais que desequilibram o orçamento.\n\nDespesas previstas ao longo do ano:\n- IPVA, seguro e licenciamento de veículos: $[Total anual]\n- IPTU e condomínio/manutenções do imóvel: $[Total anual]\n- Festas de fim de ano, aniversários e presentes: $[Total anual]\n- Consultas médicas, dentista e exames: $[Total anual]\n- Viagens e férias: $[Total anual]\n- Veterinário e cuidados de pets: $[Total anual]\n\nEstruture:\n1. Aporte mensal total: Valor exato a ser transferido automaticamente para essa conta de apoio a cada mês\n2. Mecânica operacional: Como organizar as caixinhas/subcontas sem a complicação de abrir dezenas de contas bancárias\n3. Cobranças em vencimentos próximos: Como proceder caso uma fatura vença logo nos primeiros meses do plano\n4. Automatização: Agendamento das transferências no mesmo dia em que o salário for creditado."
        },
        {
          "title": "Otimizador de rendimento de liquidez e caixa",
          "text": "Otimize o rendimento e a proteção da minha liquidez de curto prazo distribuindo os recursos em instrumentos de baixo risco.\n\nVolume total em caixa disponível: $[Valor]\nNecessidade temporal dos recursos:\n- Necessário em até 30 dias: $[Valor]\n- Necessário de 3 a 12 meses: $[Valor]\n- Necessário de 1 a 3 anos: $[Valor]\nFaixa de tributação / Imposto de Renda: [Alíquota esperada]\n\nAnalise e compare:\n1. Aplicações de liquidez diária (CDBs remunerados a 100%+ do CDI, Tesouro Selic): Garantias do Fundo Garantidor de Créditos (FGC até 250k) e liquidez\n2. Fundos de Renda Fixa Simples / Monetários: Segurança das carteiras e condições de resgate\n3. Títulos públicos de curto prazo: Rendimento e tributação regressiva\n4. Estrutura em escada (laddering): Escalonamento de vencimentos para travar rentabilidade\n5. Proposta de divisão percentual para maximizar a rentabilidade líquida após o imposto de renda."
        },
        {
          "title": "Barreira contra a inflação do estilo de vida",
          "text": "Ajude-me a traçar um plano de conduta diante de um aumento salarial recente para me blindar da inflação do padrão de vida.\n\nRenda líquida mensal anterior: $[Valor]\nNova renda líquida mensal: $[Valor] (Ganho extra: +$[Diferença]/mês)\nTaxa de poupança praticada até então: [%]\nFraquezas habituais de consumo: [onde tenho tendência a gastar sem perceber]\n\nDefina a estratégia de destinação do acréscimo:\n1. Regra 50/50: Canalize 50% do ganho líquido para a construção patrimonial/dívidas e 50% para melhorias deliberadas no bem-estar sem culpa\n2. Automação reversa: Programar a ampliação das aplicações financeiras automáticas na mesma data de entrada do novo salário\n3. Lista de desejos conscientes: Eleger 2 ou 3 gastos de real valor pessoal em vez de pulverizar o dinheiro em consumo supérfluo contínuo\n4. Nova taxa meta de poupança após a consolidação do reajuste salarial."
        }
      ]
    },
    {
      "cat": "Investimentos & Gestão de Patrimônio",
      "prompts": [
        {
          "title": "Alocação de ativos e carteira neutra Boglehead",
          "text": "Projete uma carteira de investimentos neutra, diversificada e de custos ultrabaixos inspirada nos conceitos Bogleheads.\n\nIdade: [Idade]\nAnos estimados até a aposentadoria / usufruto: [ex.: 20 a 30 anos]\nPerfil de tolerância a riscos: [Arrojado / Moderado / Conservador]\nPatrimônio financeiro já investido: $[Valor]\nDistribuição atual da carteira: [ações locais, ETFs internacionais, criptoativos, caixa]\n\nEntregue:\n1. Alocação recomendada: Percentual em Renda Variável Global (Países Desenvolvidos e Emergentes) vs. Renda Fixa/Ativos de Proteção\n2. Carteira simplificada com 2 ou 3 ETFs globais: Tickers e produtos com taxa de administração muito baixa (TER < 0,22%)\n3. Cenário de volatilidade histórica: Projeção de retrações em crises anteriores (-20% a -40%) para calibrar a firmeza psicológica\n4. Cronograma de reestruturação para ajustar a carteira atual sem incorrer em custos tributários indevidos."
        },
        {
          "title": "Hierarquia de prioridade para aportes e contas",
          "text": "Ajude-me a escalonar a ordem lógica de aportes entre produtos com benefícios fiscais, planos de previdência e contas normais.\n\nRendimento bruto anual: $[Valor]\nBenefícios corporativos disponíveis: [ex.: contrapartida patronal em plano de previdência fechada, matching de 100%]\nVeículos de investimento acessíveis:\n- Previdência Privada com dedução fiscal (PGBL até 12% da renda ou 401k/IRA): [Detalhes]\n- Previdência Privada sem dedução (VGBL): [Detalhes]\n- Conta tradicional de investimentos em corretora (ações, FIIs, ETFs): [disponível]\nOrçamento anual total disponível para investir: $[Valor]\n\nMonte a ordem prioritária em etapas:\n1. Nível 1: Aporte necessário para capturar a totalidade da contribuição patrocinada pela empresa (retorno imediato sem risco)\n2. Nível 2: Utilização integral do benefício fiscal de dedução de base de cálculo tributária\n3. Nível 3: Alocação em ETFs e ativos globais de baixo custo em conta comum para preservar flexibilidade e liquidez\n\nIndique as quantias sugeridas para cada modalidade e os ganhos tributários associados."
        },
        {
          "title": "Aportes regulares (DCA) vs. Alocação total (Lump Sum)",
          "text": "Estruture um método prudente para alocar no mercado financeiro uma quantia considerável de recursos acumulados.\n\nRecursos líquidos a investir: $[ex.: 50.000 ou 150.000]\nProcedência do montante: [Herança, bônus corporativo, venda de patrimônio, reserva acumulada]\nCondições de mercado atuais: [Máximas históricas / Correção recente / Volatilidade elevada]\nInsegurança pessoal: [Receio de aplicar tudo no topo do mercado antes de uma queda]\n\nForneça:\n1. Fundamentação estatística: Análise comparativa entre aporte integral imediato (Lump Sum) e aportes parcelados (Dollar-Cost Averaging / DCA) segundo pesquisas da Vanguard\n2. Cronograma tático de DCA: Desdobramento do capital em 3, 6 ou 12 parcelas mensais em datas pré-definidas\n3. Gatilho de oportunidade: Diretriz para antecipar parcelas caso os índices corrijam 5% ou 10% durante o processo\n4. Custódia do capital em trânsito: Rentabilização das parcelas remanescentes em aplicações conservadoras de liquidez diária\n5. Regra de compromisso irrevogável para evitar a paralisação dos aportes programados em períodos de estresse de mercado."
        },
        {
          "title": "Rebalanceamento de portfólio e controle de desvios",
          "text": "Oriente-me em uma rotina metódica de rebalanceamento de carteira para conservar o nível de risco estabelecido.\n\nAlocação alvo desejada: [ex.: 70% Ações Mundiais, 20% Mercados Emergentes, 10% Renda Fixa]\nComposição atual e valor dos ativos:\n[Ativo 1: Valor de mercado / % na carteira]\n[Ativo 2: Valor de mercado / % na carteira]\n[Ativo 3: Valor de mercado / % na carteira]\nRecursos novos para aporte neste mês: $[Valor]\n\nForneça:\n1. Mapeamento de desvios: Identificação dos ativos sobreponderados e subponderados frente às metas\n2. Rebalanceamento por aportes novos: Como direcionar as compras do mês para corrigir as distorções sem gerar vendas ou custos com tributação sobre ganho de capital\n3. Alienação estratégica: Caso vendas sejam inevitáveis, como priorizar instrumentos que contem com faixas de isenção fiscal mensal\n4. Parâmetro de tolerância (regra 5/25): Critério para rebalancear somente quando um ativo oscilar mais de 5% absolutos ou 25% relativos."
        }
      ]
    },
    {
      "cat": "Planejamento Tributário & Proteção Patrimonial",
      "prompts": [
        {
          "title": "Fechamento tributário anual e compensação de perdas",
          "text": "Crie uma lista de checagem para otimização do imposto de renda antes do término do ano-calendário.\n\nPerfil tributário: [Pessoa Física / Carnê-Leão / Declaração Completa]\nRendimento anual estimado: $[Valor]\nPrejuízos acumulados não realizados em operações de bolsa: $[Valor]\nGanhos de capital auferidos no decorrer do ano: $[Valor]\nGastos dedutíveis computados: [Aportes em PGBL, despesas médicas, instrução]\n\nEspecifique as intervenções prioritárias de fim de ano:\n1. Compensação de perdas e ganhos: Estratégia para liquidar posições deficitárias de modo a abater tributos sobre lucros já materializados\n2. Normas de recompra e regras anti-elisão: Prazos e instrumentos para manter a exposição de mercado sem invalidar o aproveitamento fiscal\n3. Aproveitamento do limite de 12% da renda tributável em planos de previdência antes do encerramento do exercício\n4. Conferência dos recolhimentos na fonte para mitigar cobranças inesperadas no ajuste anual."
        },
        {
          "title": "Auditoria de coberturas de seguros e blindagem",
          "text": "Examine minhas contratações de seguro para assegurar proteção efetiva do patrimônio e da família contra imprevistos severos.\n\nFaixa etária e estrutura familiar: [Idade, estado civil, filhos dependentes]\nRenda anual: $[Valor]\nApólices atualmente vigentes:\n- Seguro de Vida: [Capital segurado, termo ou resgatável]\n- Invalidez Permanente / DIT: [Valor coberto]\n- Responsabilidade Civil e Seguro Residencial: [Limites]\n- Plano de Saúde: [Modalidade e acomodação]\n\nAudite:\n1. Dimensionamento do seguro de vida: Cálculo do capital indispensável para amparar a formação dos filhos e cobrir passivos contratuais\n2. Proteção contra invalidez ou afastamento: A apólice ampara a incapacidade para o exercício da profissão habitual ou apenas invalidez total?\n3. Limites de responsabilidade civil: As coberturas são suficientes diante do patrimônio a ser blindado?\n4. Apólices inócuas: Relação de seguros de baixo valor prático ou de custo desmedido a serem cancelados."
        },
        {
          "title": "Sucessão patrimonial e inventário de beneficiários",
          "text": "Ajude-me a estruturar as disposições de planejamento sucessório, procurações e designação de beneficiários em contratos.\n\nConfiguração dos herdeiros: [Filhos menores, cônjuge, pais idosos]\nPatrimônio relevante: [Imóveis, cotas de empresas, contas de investimento, previdência privada]\nDomicílio fiscal: [Brasil / Exterior]\n\nElabore uma lista de conferência:\n1. Revisão de beneficiários: Como planos de previdência privada (VGBL/PGBL) e seguros tramitam sem passar pelo inventário\n2. Atos jurídicos estruturantes: Testamento público, diretivas antecipadas de vontade e procurações plenas\n3. Tutela de filhos menores: Indicação prévia de tutores e administradores patrimoniais em caso de ausência\n4. Inventário de ativos digitais: Mapeamento de senhas, autenticadores em dois fatores e custódia de chaves de acesso\n5. Manual emergencial para familiares contendo os procedimentos burocráticos essenciais para as primeiras 72 horas."
        },
        {
          "title": "Fortalecimento de score de crédito e cadastro positivo",
          "text": "Elabore um plano de ação para aprimorar minha pontuação de crédito (Score Serasa/Boa Vista) e meu conceito perante as instituições financeiras.\n\nQuadro financeiro atual:\n- Número de cartões e contratos de financiamento ativos: [Quantidade]\n- Limites totais disponibilizados vs. Saldo em uso: $[Limite / Uso] (Taxa de Utilização de Limite %)\n- Histórico de atrasos ou apontamentos: [Sem restrições / Apontamentos pretéritos]\n- Idade do relacionamento bancário mais antigo: [Anos]\n\nEstruture:\n1. Manejo da taxa de utilização: Medidas para estabilizar o uso dos limites abaixo de 15% a 20% dos tetos contratados\n2. Estratégia de fechamento de faturas: Como antecipar pagamentos antes da data de corte para reportar saldos reduzidos aos birôs\n3. Conferência de apontamentos nos birôs: Procedimentos para contestar e expurgar lançamentos incorretos\n4. Adequação de limites bancários: Quando solicitar elevações de limites globais para diluir o percentual de utilização sem aumentar despesas\n5. Horizonte esperado de recuperação do score (90 a 180 dias)."
        }
      ]
    },
    {
      "cat": "Carreira & Independência Financeira (FI/RE)",
      "prompts": [
        {
          "title": "Roteiro para negociação salarial e pacote total",
          "text": "Elabore um roteiro de argumentação e scripts com falas sugeridas para uma conversa de revisão salarial ou avaliação de proposta de emprego.\n\nFunção e nível de senioridade: [Cargo, escopo de responsabilidades]\nRemuneração atual ou proposta inicial recebida: $[Salário base]\nFaixa salarial praticada pelo mercado: [Valores médios do setor: ex.: 50k a 65k]\nEntregas mensuráveis no período recente: [Resultados quantificados, melhorias de processos, metas batidas]\nDemais componentes: [Bônus variável, opções de ações / RSU, trabalho remoto, capacitações]\n\nEstruture:\n1. Formulação da contraproposta: Cifra de ancoragem e defesa amparada em dados concretos de valor gerado\n2. Diálogos palavra por palavra: Frases assertivas, profissionais e colaborativas sem soar confrontador\n3. Benefícios complementares negociáveis: Férias estendidas, bônus de contratação (signing bonus) ou compromisso de reavaliação em 6 meses\n4. Gestão de objeções: Respostas adequadas para a colocação 'Nosso teto orçamentário para o cargo já foi atingido'."
        },
        {
          "title": "Viabilidade econômica de atividade paralela",
          "text": "Examine a viabilidade comercial, a remuneração horária líquida efetiva e a carga tributária de uma atividade extra ou freelance.\n\nProposta de projeto secundário: [prestação de consultoria, infoproduto, serviço técnico, e-commerce]\nDisponibilidade semanal de dedicação: [ex.: 8 a 10 horas/semana]\nPreço ou honorário pretendido: $[Valor por hora ou preço unitário]\nCustos fixos iniciais e mensais de manutenção: $[Softwares, hospedagem, divulgação, contador]\n\nAnalise:\n1. Ganho horário líquido real: Faturamento bruto deduzido de despesas operacionais e tributos, dividido pelas horas efetivamente trabalhadas\n2. Ponto de Equilíbrio (Break-Even): Quantidade necessária de vendas ou clientes mensais para cobrir os desembolsos fixos\n3. Estruturação contábil e jurídica (MEI, Simples Nacional, alvarás e eventuais restrições no contrato de trabalho principal)\n4. Balanço de foco: A atividade paralela acelera sua rota para a independência ou drena energia que renderia mais na profissão principal?"
        },
        {
          "title": "Otimização de benefícios e planos de ações (ESPP)",
          "text": "Oriente-me a eleger e maximizar o retorno das opções de benefícios corporativos e planos de compra de ações de funcionários.\n\nBenefícios ofertados pela empresa:\n[Plano de Compra de Ações (ESPP), previdência corporativa com contrapartida, vale-refeição, assistência médica premium, auxílio home office]\nCondições pessoais: [Estado civil, deslocamento]\n\nEntregue:\n1. Avaliação do ESPP: Havendo desconto de compra (ex.: 15%), cálculo do retorno efetivo e conveniência da venda imediata após o período de compra\n2. Benefícios indiretos eficientes: Itens que agregam economia substancial isenta de tributação na folha de pagamento\n3. Triagem de opções desvantajosas: Benefícios que implicam coparticipações elevadas ou baixa utilização real\n4. Combinação ótima para maximizar a renda líquida disponível no encerramento do ano."
        },
        {
          "title": "Calculadora de número FI/RE e marco Coast FI",
          "text": "Calcule o montante financeiro para alcançar a Independência Financeira / Aposentadoria Antecipada (FI/RE) e meu marco de Coast FI.\n\nIdade atual: [Idade]\nPatrimônio já investido acumulado: $[Valor]\nCusto de vida anual estimado na aposentadoria: $[Custo anual]\nCapacidade anual de poupança e investimentos: $[Valor/ano]\nTaxa Segura de Retirada (Safe Withdrawal Rate): [3,5% ou 4,0%]\nRetorno real médio esperado das aplicações (acima da inflação): [ex.: 5% a 6%]\n\nCalcule e projete:\n1. Patrimônio alvo para o FI/RE: (Despesa anual × 25 ou 28,5)\n2. Anos estimados até a emancipação financeira mantido o ritmo atual de economia\n3. Condição Coast FI: O portfólio acumulado até aqui já é capaz de atingir a meta aos 65 anos apenas pela ação dos juros compostos, sem nenhum aporte adicional?\n4. Alavancagem do esforço: De quanto tempo o prazo total é encurtado ao aumentar a taxa de poupança em 5% ou 10% adicionais."
        }
      ]
    }
  ]
};
