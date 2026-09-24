export default {
  "dev": [
    {
      "cat": "Debugging",
      "prompts": [
        {
          "title": "Trova il bug",
          "text": "Ecco il mio codice. Non funziona come previsto.\n\n[incolla il codice qui]\n\nL'errore o il problema riscontrato: [descrivilo]\n\nTrova il bug, spiega perché si verifica e mostra la soluzione corretta."
        },
        {
          "title": "Spiega questo errore",
          "text": "Ricevo questo errore:\n\n[incolla il messaggio di errore]\n\nEcco il codice pertinente:\n\n[incolla il codice qui]\n\nSpiega qual è la causa di questo errore e come risolverlo."
        },
        {
          "title": "Risolvi problema di prestazioni",
          "text": "Questo codice viene eseguito più lentamente del previsto:\n\n[incolla il codice qui]\n\nAnalizza la logica, identifica i colli di bottiglia e suggerisci ottimizzazioni specifiche con esempi prima/dopo."
        },
        {
          "title": "Correggi test fallito",
          "text": "Questo test fallisce:\n\n[incolla il codice del test]\n\nL'output dell'errore:\n\n[incolla l'errore]\n\nEcco l'implementazione sottoposta a test:\n\n[incolla il codice]\n\nSpiega perché il test fallisce e come correggerlo."
        }
      ]
    },
    {
      "cat": "Revisione del codice",
      "prompts": [
        {
          "title": "Revisione per bug e qualità",
          "text": "Analizza questo codice per individuare bug, casi limite e problemi di qualità del codice. Sii specifico su ciò che non va e suggerisci le correzioni necessarie:\n\n[incolla il codice qui]"
        },
        {
          "title": "Revisione della sicurezza",
          "text": "Analizza questo codice per individuare vulnerabilità di sicurezza (injection, problemi di autenticazione, esposizione di dati sensibili, OWASP Top 10). Valuta il livello di gravità e suggerisci come risolverle:\n\n[incolla il codice qui]"
        },
        {
          "title": "Revisione diff della PR",
          "text": "Ecco il diff di una pull request. Esaminalo per verificarne correttezza, stile, prestazioni e potenziali problemi. Fornisci un feedback conciso e immediatamente applicabile:\n\n[incolla il diff qui]"
        },
        {
          "title": "Suggerisci miglioramenti",
          "text": "Esamina questo codice e suggerisci miglioramenti per favorire leggibilità, manutenibilità e stile idiomatico. Mantieni invariata la funzionalità:\n\n[incolla il codice qui]"
        }
      ]
    },
    {
      "cat": "Refactoring",
      "prompts": [
        {
          "title": "Refactoring per la leggibilità",
          "text": "Rifai il refactoring di questo codice per renderlo più leggibile e manutenibile. Mantieni lo stesso comportamento. Spiega ogni modifica apportata:\n\n[incolla il codice qui]"
        },
        {
          "title": "Estrai logica riutilizzabile",
          "text": "Questo codice presenta logica duplicata o fortemente accoppiata. Estrai funzioni o moduli riutilizzabili mantenendo lo stesso comportamento:\n\n[incolla il codice qui]"
        },
        {
          "title": "Converti in async/await",
          "text": "Converti questo codice basato su callback o catene di Promise per utilizzare async/await. Gestisci correttamente gli errori:\n\n[incolla il codice qui]"
        },
        {
          "title": "Semplifica funzione complessa",
          "text": "Questa funzione è troppo complessa. Suddividila in funzioni più piccole e con nomi chiari. Mantieni gli stessi input e output:\n\n[incolla il codice qui]"
        }
      ]
    },
    {
      "cat": "Testing",
      "prompts": [
        {
          "title": "Scrivi unit test",
          "text": "Scrivi unit test completi per questa funzione. Copri i casi standard (happy path), i casi limite (edge case) e gli scenari di errore. Usa [framework di test]:\n\n[incolla il codice qui]"
        },
        {
          "title": "Scrivi test di integrazione",
          "text": "Scrivi un test di integrazione per questa funzionalità. Dovrà verificare l'intero flusso da [inizio] a [fine]:\n\n[incolla codice/API qui]\n\nUsa [framework di test]."
        },
        {
          "title": "Genera casi di test",
          "text": "Elenca tutti i casi di test che dovrei scrivere per questa funzione. Raggruppali per: flusso principale (happy path), casi limite, gestione degli errori e condizioni al contorno:\n\n[incolla il codice qui]"
        },
        {
          "title": "Aumenta la copertura dei test",
          "text": "Questo codice non ha test. Analizzalo, identifica i percorsi più critici e scrivi i test in ordine di priorità. Usa [framework di test]:\n\n[incolla il codice qui]"
        }
      ]
    },
    {
      "cat": "Architettura",
      "prompts": [
        {
          "title": "Progetta schema di database",
          "text": "Progetta uno schema di database per [descrivi la tua applicazione/funzionalità]. Includi tabelle, colonne, tipi di dati, relazioni e indici. Spiega le motivazioni delle tue scelte architetturali."
        },
        {
          "title": "Progetta un'API",
          "text": "Progetta un'API REST per [funzionalità/risorsa]. Includi endpoint, metodi HTTP, schemi di richiesta/risposta, codici di stato e autenticazione. Segui le best practice del settore."
        },
        {
          "title": "Confronta approcci",
          "text": "Devo scegliere tra questi approcci per [problema]:\n\nOpzione A: [descrivi]\nOpzione B: [descrivi]\n\nConfrontali in termini di: prestazioni, manutenibilità, complessità e scalabilità. Consigliami l'opzione migliore motivando la scelta."
        },
        {
          "title": "System design",
          "text": "Progetta l'architettura di sistema per [descrivi il caso d'uso]. Tratta: architettura ad alto livello, flusso dei dati, storage, strategia di caching e criteri di scalabilità. Individua i potenziali colli di bottiglia."
        }
      ]
    },
    {
      "cat": "DevOps",
      "prompts": [
        {
          "title": "Scrivi un Dockerfile",
          "text": "Scrivi un Dockerfile pronto per la produzione per questo progetto:\n\nLinguaggio/framework: [es. Node.js, Python Flask]\nRequisiti: [es. build multi-stage, utente non-root]\n\nIncludi le best practice per la sicurezza e l'ottimizzazione delle dimensioni dell'immagine."
        },
        {
          "title": "Pipeline CI/CD",
          "text": "Scrivi un workflow di GitHub Actions che:\n\n1. [elenca i passaggi, es. lint, test, build, deploy]\n\nLinguaggio/framework: [specifica]\nTarget di deployment: [es. AWS, Vercel, Docker Hub]\n\nIncludi caching e trigger appropriati."
        },
        {
          "title": "Risolvi errore in CI",
          "text": "La mia pipeline di CI sta fallendo. Ecco l'output del log:\n\n[incolla il log della CI]\n\nConfigurazione della pipeline:\n\n[incolla la configurazione]\n\nIdentifica il problema e suggerisci una correzione."
        },
        {
          "title": "Infrastructure as Code",
          "text": "Scrivi la configurazione [Terraform/CloudFormation/Pulumi] per:\n\n[descrivi l'infrastruttura, es. un bucket S3 con CloudFront, un VPC con subnet]\n\nSegui le best practice di sicurezza e inserisci commenti che spieghino ciascuna risorsa."
        }
      ]
    },
    {
      "cat": "Git e documentazione",
      "prompts": [
        {
          "title": "Scrivi messaggio di commit",
          "text": "Scrivi un messaggio di commit chiaro e conforme a Conventional Commits per questo diff. Usa il formato: tipo(ambito): descrizione. Sii conciso ma descrittivo:\n\n[incolla il diff qui]"
        },
        {
          "title": "Scrivi il README",
          "text": "Genera un file README.md per questo progetto. Includi: scopo del progetto, istruzioni di installazione, modalità d'uso, opzioni di configurazione e come contribuire:\n\n[incolla qui la struttura del progetto o il file principale]"
        },
        {
          "title": "Documenta questo codice",
          "text": "Aggiungi una documentazione chiara e concisa a questo codice. Includi docstring per funzioni/metodi, descrizioni dei parametri, valori di ritorno ed esempi di utilizzo:\n\n[incolla il codice qui]"
        },
        {
          "title": "Scrivi voce per il changelog",
          "text": "Scrivi una voce per il changelog per queste modifiche. Raggruppa per: Aggiunto, Modificato, Risolto, Rimosso. Usa un linguaggio chiaro e orientato agli utenti:\n\n[incolla il diff o l'elenco delle modifiche]"
        }
      ]
    }
  ],
  "writing": [
    {
      "cat": "Blog e articoli",
      "prompts": [
        {
          "title": "Scrivi scaletta per articolo di blog",
          "text": "Crea una scaletta dettagliata per un articolo di blog sul tema: [argomento]\n\nPubblico di riferimento: [descrivi il pubblico]\nTono di voce: [es. informativo, colloquiale, autorevole]\nNumero di parole target: [es. 1500 parole]\n\nIncludi: un titolo accattivante, un gancio introduttivo, 4–6 sezioni principali con sotto-punti e una conclusione con una call to action chiara."
        },
        {
          "title": "Migliora introduzione dell'articolo",
          "text": "Riscrivi l'introduzione di questo articolo in modo da catturare immediatamente l'attenzione del lettore. Ecco l'introduzione attuale:\n\n[incolla l'introduzione qui]\n\nL'articolo parla di: [argomento]\nLettore di riferimento: [descrivi il pubblico]\n\nRendi la nuova introduzione coinvolgente, precisa e sotto le 100 parole. Proponi 3 varianti diverse."
        },
        {
          "title": "Genera idee per articoli di blog",
          "text": "Genera 10 idee per articoli di blog per un [descrivi blog/brand] rivolto a [pubblico target].\n\nArea tematica: [es. produttività, marketing SaaS, finanza personale]\n\nPer ciascuna idea includi: un titolo provvisorio, l'angolatura o gancio principale e a chi è più utile. Dai priorità ad argomenti specifici, attuabili e ad alto potenziale di posizionamento SEO."
        },
        {
          "title": "Scrivi una conclusione efficace",
          "text": "Scrivi una conclusione per questo articolo di blog:\n\nArgomento: [argomento]\nPunti chiave trattati: [riassumi i punti principali]\nAzione desiderata dopo la lettura: [es. iscriversi alla newsletter, condividere, provare il prodotto]\n\nLa conclusione dovrebbe riassumere il takeaway fondamentale, trasmettere un senso di completezza e chiudersi con una call to action chiara e naturale."
        }
      ]
    },
    {
      "cat": "Social media",
      "prompts": [
        {
          "title": "Scrivi un thread per Twitter/X",
          "text": "Scrivi un thread per Twitter/X su: [argomento]\n\nPubblico: [descrivi]\nObiettivo: [es. educare, generare traffico, costruire autorevolezza]\nNumero di tweet: [es. 8–10]\n\nInizia con un tweet gancio d'impatto, suddividi l'argomento in punti semplici da assimilare e chiudi con una CTA chiara. Mantieni ciascun tweet sotto i 280 caratteri. Usa interruzioni di riga per favorire la leggibilità."
        },
        {
          "title": "Scrivi un post per LinkedIn",
          "text": "Scrivi un post per LinkedIn su: [argomento o esperienza]\n\nTono di voce: [es. riflessivo, diretto, narrativo/storytelling]\nObiettivo: [es. condividere un insegnamento, stimolare commenti, rafforzare la credibilità]\n\nInizia con un gancio di una riga che fermi lo scroll. Usa paragrafi brevi. Includi un punto di vista o un insight personale. Termina con una domanda per incentivare i commenti. Punta a 150–250 parole."
        },
        {
          "title": "Scrivi una didascalia per Instagram",
          "text": "Scrivi una didascalia per Instagram per un post su: [descrivi l'immagine/argomento]\n\nVoce del brand: [es. brillante, motivante, minimale]\nObiettivo: [es. aumentare i salvataggi, incentivare visite al profilo, vendere un prodotto]\n\nIncludi: una frase di apertura accattivante, 2–3 frasi di testo descrittivo, una call to action e 5–10 hashtag pertinenti."
        },
        {
          "title": "Piano editoriale per social media",
          "text": "Crea un piano editoriale di 2 settimane per i social media per [brand/creator] attivo su [piattaforme, es. LinkedIn + Instagram].\n\nNicchia: [area tematica]\nObiettivo: [es. aumentare i follower, generare traffico, lanciare un prodotto]\nFrequenza di pubblicazione: [es. 3 volte a settimana per piattaforma]\n\nPer ciascun post includi: data, piattaforma, tipologia di contenuto (es. consiglio pratico, storia, promo) e una riga di descrizione dell'idea del post."
        }
      ]
    },
    {
      "cat": "Email",
      "prompts": [
        {
          "title": "Scrivi un'email a freddo",
          "text": "Scrivi un'email di cold outreach per la seguente situazione:\n\nMittente: [il tuo nome/ruolo/azienda]\nDestinatario: [ruolo aziendale o profilo del destinatario]\nObiettivo: [es. fissare una call, ottenere una presentazione/referral, proporre una partnership]\nContesto: [qualsiasi dettaglio rilevante sul motivo del contatto]\n\nMantienila sotto le 150 parole. Metti in primo piano il valore o la pertinenza per il destinatario, non chi sei tu. Includi una CTA a basso attrito."
        },
        {
          "title": "Scrivi introduzione per newsletter",
          "text": "Scrivi l'introduzione per la newsletter di questa settimana.\n\nNome newsletter / argomento: [descrivi]\nQuesto numero parla di: [argomento o tema principale]\nPubblico: [descrivi gli iscritti]\nTono: [es. caloroso, brillante, conciso]\n\nL'introduzione deve sembrare personale, anticipare i contenuti principali e invogliare il lettore a continuare la lettura. Mantienila sotto le 80 parole."
        },
        {
          "title": "Scrivi un'email di follow-up",
          "text": "Scrivi un'email di follow-up per questa situazione:\n\nContesto iniziale: [descrivi la prima interazione — es. chiamata commerciale, colloquio di lavoro, proposta inviata]\nTempo trascorso dall'ultimo contatto: [es. 5 giorni]\nObiettivo del follow-up: [es. ottenere una decisione, riallacciare i contatti, confermare i prossimi passi]\n\nTono caloroso ma diretto. Fai un breve riferimento alla conversazione precedente. Rendi semplice e immediato rispondere. Mantienila sotto le 100 parole."
        },
        {
          "title": "Scrivi un'email delicata",
          "text": "Aiutami a scrivere un'email professionale per una situazione delicata:\n\nSituazione: [descrivi — es. scuse per una scadenza mancata, rifiutare una richiesta, comunicare una cattiva notizia]\nDestinatario: [descrivi la relazione — es. cliente, responsabile, collega]\nRisultato desiderato: [cosa desideri che accada dopo la lettura]\n\nSii onesto, assumiti la responsabilità dove opportuno e mantieni un tono costruttivo. Evita atteggiamenti difensivi o scuse eccessive."
        }
      ]
    },
    {
      "cat": "Copywriting",
      "prompts": [
        {
          "title": "Scrivi descrizione prodotto",
          "text": "Scrivi una descrizione prodotto persuasiva per:\n\nNome prodotto: [nome]\nCosa fa: [descrivi]\nCaratteristiche chiave: [elencane 3–5]\nCliente target: [descrivi]\nTono: [es. premium, giocoso, technical]\n\nFocalizzati sui benefici prima che sulle caratteristiche. Esordisci con il valore più importante. Mantieni il testo sotto le 120 parole e concludi con un invito naturale all'acquisto."
        },
        {
          "title": "Titolo e sottotitolo per landing page",
          "text": "Scrivi 5 combinazioni di titolo (headline) e sottotitolo (subheadline) per una landing page.\n\nProdotto/servizio: [descrivi]\nPubblico target: [descrivi]\nProposta di valore fondamentale: [quale problema risolve o quale risultato garantisce]\nTono: [es. audace, rassicurante, brillante]\n\nOgni titolo deve essere chiaro, specifico e orientato ai benefici. Il sottotitolo deve approfondire il concetto, superando un'obiezione o aggiungendo credibilità."
        },
        {
          "title": "Scrivi varianti di Call to Action",
          "text": "Scrivi 10 varianti di micro-copy per pulsanti di Call to Action (CTA) per:\n\nProdotto/servizio: [descrivi]\nObiettivo della CTA: [es. avvia la prova gratuita, prenota una demo, scarica la guida]\nTono: [es. orientato all'azione, a bassa pressione, incuriosito]\n\nVaria l'angolatura: sperimenta urgenza, benefici in primo piano, curiosità e riprova sociale. Mantieni ciascuna opzione sotto le 6 parole dove possibile."
        },
        {
          "title": "Riscrivi con il tono di voce del brand",
          "text": "Riscrivi il seguente testo per allinearlo al tono di voce del nostro brand.\n\nTesto originale:\n[incolla il testo qui]\n\nIl nostro tono di voce è: [descrivi — es. autorevole ma accessibile, esperto ma privo di gergo, caloroso e brillante]\nPubblico: [descrivi]\n\nMantieni intatto il messaggio principale ma adatta tono, lessico e struttura delle frasi al nostro stile. Mostra il testo prima e dopo la modifica."
        }
      ]
    },
    {
      "cat": "Editing e revisione",
      "prompts": [
        {
          "title": "Semplifica testo complesso",
          "text": "Semplifica il testo seguente in modo che risulti facile da comprendere per un pubblico generale privo di conoscenze pregresse sull'argomento.\n\n[incolla il testo qui]\n\nEvita tecnicismi e gergo. Usa frasi brevi. Sostituisci i termini tecnici con parole semplici. Preserva il significato originale e tutte le informazioni chiave. Punta a un livello di lettura accessibile a tutti."
        },
        {
          "title": "Migliora tono e stile",
          "text": "Revisiona il testo seguente per migliorarne il tono e lo stile.\n\nTesto attuale:\n[incolla il testo qui]\n\nIl tono desiderato è: [es. più sicuro, meno formale, più caloroso, più conciso]\nMantieni inalterati il significato e i fatti. Mostra la versione modificata e spiega brevemente le principali modifiche apportate."
        },
        {
          "title": "Riduci al conteggio parole target",
          "text": "Riduci il testo seguente a circa [numero target di parole] parole senza perdere il messaggio chiave né alterarne il significato.\n\n[incolla il testo qui]\n\nDai priorità al taglio di: formule riempitive, frasi ridondanti e spiegazioni eccessive. Mantieni i punti più importanti, gli esempi più chiari e il registro espressivo più incisivo."
        },
        {
          "title": "Correggi bozze e ottimizza",
          "text": "Correggi le bozze del testo seguente e suggerisci miglioramenti.\n\n[incolla il testo qui]\n\nControlla: errori ortografici e grammaticali, frasi poco fluide o poco chiare e incongruenze di tono. Presenta la versione corretta seguita da un breve elenco delle modifiche apportate con le relative motivazioni."
        }
      ]
    },
    {
      "cat": "Scrittura creativa",
      "prompts": [
        {
          "title": "Scrivi l'incipit di un racconto",
          "text": "Scrivi i primi 3 paragrafi di un racconto sulla base dei seguenti dettagli:\n\nGenere: [es. narrativa contemporanea, fantascienza, thriller]\nAmbientazione: [descrivi tempo e luogo]\nProtagonista: [breve descrizione]\nSituazione iniziale o conflitto: [descrivi]\nAtmosfera/tono: [es. tesa, malinconica, carica di speranza]\n\nInizia in medias res o con un momento vivido. Cattura subito il lettore. Evita preamboli."
        },
        {
          "title": "Genera dialogo tra personaggi",
          "text": "Scrivi una scena di dialogo tra due personaggi:\n\nPersonaggio A: [nome, breve descrizione, il suo obiettivo in questa scena]\nPersonaggio B: [nome, breve descrizione, il suo obiettivo in questa scena]\nSituazione: [descrivi cosa accade e dove]\nTensione sottostante: [cosa c'è realmente in gioco o non detto]\n\nRendi il dialogo naturale ed espressivo. Ogni personaggio deve avere una voce distintiva. Fai emergere il sottotesto: ciò che intendono rispetto a ciò che dicono."
        },
        {
          "title": "Crea metafore e analogie",
          "text": "Genera 8 metafore o analogie originali per spiegare il seguente concetto:\n\nConcetto: [descrivi l'idea, il processo o la cosa]\nPubblico: [chi deve comprenderlo]\nContesto: [dove verrà utilizzata — es. articolo di blog, discorso, scheda prodotto]\n\nPunta a un mix di stili: alcune visive, alcune emotive, altre ironiche. Evita cliché. Per ciascuna, aggiungi una frase di commento che spieghi in quale contesto funziona meglio."
        },
        {
          "title": "Riscrivi in uno stile differente",
          "text": "Riscrivi il seguente testo nello stile di [nome dell'autore o descrizione dello stile, es. Ernest Hemingway, romanzo vittoriano, post social per la Generazione Z].\n\nTesto originale:\n[incolla il testo qui]\n\nCattura la voce, il ritmo delle frasi, il lessico e le strutture tipiche di quello stile. Mantieni i contenuti e il significato fondamentali. Mostra solo la versione riscritta."
        }
      ]
    }
  ],
  "marketing": [
    {
      "cat": "Pianificazione campagne",
      "prompts": [
        {
          "title": "Pianifica campagna di marketing",
          "text": "Aiutami a pianificare una campagna di marketing per [prodotto/servizio].\n\nPubblico target: [descrivi]\nObiettivo: [es. lead, iscrizioni, notorietà del brand]\nBudget indicativo: [importo]\nTempistiche: [durata]\n\nDefinisci la strategia della campagna, i messaggi chiave, i canali, le tappe fondamentali (milestone) e le metriche di successo."
        },
        {
          "title": "Crea piano editoriale",
          "text": "Crea un piano editoriale a [30/60/90] giorni per [brand/prodotto].\n\nPubblico: [descrivi]\nCanali: [es. LinkedIn, email, blog, Instagram]\nTemi di contenuto: [elencane alcuni]\nObiettivo di frequenza di pubblicazione: [es. 3 volte a settimana]\n\nIncludi tipologie di contenuto, argomenti e un calendario di pubblicazione consigliato."
        },
        {
          "title": "Definisci la buyer persona target",
          "text": "Costruisci una buyer persona di marketing dettagliata per [prodotto/servizio].\n\nCosa sappiamo finora: [descrivi il tuo cliente attuale o le tue ipotesi]\n\nIncludi: dati demografici, ruolo professionale, obiettivi, punti di dolore (pain point), obiezioni frequenti, canali preferiti e processo decisionale d'acquisto."
        },
        {
          "title": "Analisi post-mortem della campagna",
          "text": "Aiutami a redigere un'analisi post-mortem per una campagna di marketing.\n\nObiettivo della campagna: [es. generare 500 lead]\nRisultato effettivo: [cosa è successo]\nCanali utilizzati: [elenco]\nMetriche chiave: [CTR, tasso di conversione, CAC, ecc.]\n\nAnalizza cosa ha funzionato, cosa no, le cause scatenanti e raccomandazioni specifiche per la prossima campagna."
        }
      ]
    },
    {
      "cat": "SEO",
      "prompts": [
        {
          "title": "Brief per ricerca parole chiave",
          "text": "Crea un brief di ricerca parole chiave (keyword research) per [argomento/prodotto].\n\nSito web: [URL o descrizione]\nPubblico target: [descrivi]\nConcorrenti: [elenca se noti]\n\nSuggerisci parole chiave principali, varianti a coda lunga (long-tail), categorie di intento di ricerca (informativo, commerciale, transazionale) e opportunità di contenuto per ciascun cluster."
        },
        {
          "title": "Scrivi meta tag SEO",
          "text": "Scrivi tag title e meta description ottimizzati SEO per la seguente pagina.\n\nArgomento della pagina: [descrivi]\nParola chiave target: [parola chiave]\nURL: [URL della pagina]\nLunghezza del testo della pagina: [approssimativa]\n\nFornisci 3 opzioni di tag title (massimo 60 caratteri ciascuna) e 3 opzioni di meta description (massimo 155 caratteri ciascuna). Indica il posizionamento della parola chiave target in ciascuna opzione."
        },
        {
          "title": "Analisi dei gap di contenuto",
          "text": "Esegui un'analisi dei gap di contenuto (content gap analysis) per [sito web/brand] nel settore [settore].\n\nArgomenti dei nostri contenuti attuali: [elenca o descrivi]\nConcorrenti principali: [elenco]\nPubblico target: [descrivi]\n\nIdentifica argomenti e parole chiave per cui i nostri concorrenti si posizionano e che a noi mancano, assegnando loro una priorità in base al potenziale di traffico e alla rilevanza per il business."
        },
        {
          "title": "Strategia di link interni",
          "text": "Crea una strategia di link interni (internal linking) per un [blog/sito web] dedicato a [argomento].\n\nPagine chiave esistenti: [elenca le pillar page o gli URL importanti]\nObiettivo: [es. migliorare il posizionamento per X, ridurre il tasso di rimbalzo, distribuire la link equity]\n\nSuggerisci anchor text, quali pagine dovrebbero linkare a quali altre e una struttura di collegamenti a supporto della topical authority."
        }
      ]
    },
    {
      "cat": "Pubblicità e Ads",
      "prompts": [
        {
          "title": "Scrivi annunci Google Ads",
          "text": "Scrivi il copy per annunci Google Ads per [prodotto/servizio].\n\nParola chiave target: [parola chiave]\nURL della landing page: [URL]\nVantaggio principale: [proposta di valore chiave]\nPubblico: [descrivi chi vedrà questo annuncio]\n\nFornisci 3 titoli (massimo 30 caratteri ciascuno) e 2 descrizioni (massimo 90 caratteri ciascuna) per un annuncio di ricerca adattabile. Metti in risalto i vantaggi, includi una CTA e rispecchia l'intento della parola chiave."
        },
        {
          "title": "Varianti di inserzione Facebook",
          "text": "Scrivi 3 varianti di inserzione per Facebook Ads per [prodotto/servizio].\n\nPubblico target: [descrivi caratteristiche demografiche e interessi]\nObiettivo: [es. clic, conversioni, notorietà]\nOfferta o gancio principale: [descrivi]\n\nPer ciascuna variante scrivi: testo principale (2-3 frasi), titolo (sotto i 40 caratteri) e descrizione (sotto i 25 caratteri). Usa un'angolatura diversa per ciascuna: es. punto di dolore, riprova sociale e proposta d'offerta diretta."
        },
        {
          "title": "Idee per A/B test su landing page",
          "text": "Genera idee per A/B test per una landing page di [prodotto/servizio].\n\nTasso di conversione attuale: [se noto]\nCTA principale: [es. Iscriviti gratis]\nPrincipale fonte di traffico: [es. Google Ads, Facebook]\nObiettivo della pagina: [descrivi]\n\nElenca 8-10 idee di test specifiche e ad alto impatto su: titolo, testo della CTA, riprova sociale, layout e formulazione dell'offerta. Assegna una priorità in base all'impatto atteso e alla semplicità di implementazione."
        },
        {
          "title": "Strategia di targeting del pubblico",
          "text": "Aiutami a definire una strategia di targeting del pubblico per campagne pubblicitarie a pagamento che promuovono [prodotto/servizio].\n\nPiattaforma: [es. Meta, Google, LinkedIn]\nBudget: [mensile]\nObiettivo: [es. lead, acquisti, registrazioni]\nCliente ideale: [descrivi]\n\nConsiglia: opzioni di targeting su pubblico freddo, segmenti di retargeting, strategia per pubblici simili (lookalike) ed esclusioni. Motiva la logica di ciascuna scelta."
        }
      ]
    },
    {
      "cat": "Analitica e metriche",
      "prompts": [
        {
          "title": "Interpreta calo di traffico",
          "text": "Aiutami a diagnosticare un calo di traffico su [sito web/pagina].\n\nDettagli del calo: [es. il traffico organico è sceso del 30% nelle ultime 2 settimane]\nData/periodo del calo: [data]\nPagine interessate: [quali pagine o l'intero sito]\nModifiche recenti: [eventuali modifiche al sito, aggiornamenti degli algoritmi, reindirizzamenti, ecc.]\n\nElenca le cause più probabili in ordine di probabilità e fornisci passaggi specifici di indagine e soluzioni per ciascuna."
        },
        {
          "title": "Analisi del funnel di conversione",
          "text": "Analizza questo funnel di marketing e identifica dove stiamo perdendo utenti.\n\nFasi del funnel e tassi di conversione:\n[es. Visitatore > Landing page: 100%]\n[Landing page > Registrazione: 12%]\n[Registrazione > Attivazione: 40%]\n[Attivazione > Acquisto: 18%]\n\nConfronta questi tassi con gli standard tipici di settore (benchmark), evidenzia i maggiori punti di abbandono e suggerisci miglioramenti specifici per ogni fase."
        },
        {
          "title": "Riepilogo report mensile",
          "text": "Scrivi un riepilogo conciso del report mensile di marketing per [mese].\n\nMetriche chiave:\n- Traffico: [numero, vs mese precedente]\n- Lead: [numero, vs mese precedente]\n- CAC: [importo]\n- Tasso di conversione: [%]\n- Miglior canale: [canale]\n- Traguardi notevoli: [elenco]\n- Criticità: [elenco]\n\nScrivi un sommario esecutivo (3-4 frasi), una sezione dedicata ai successi, una alle criticità e 3 azioni chiare da intraprendere il mese prossimo."
        },
        {
          "title": "Confronto modelli di attribuzione",
          "text": "Confronta i modelli di attribuzione per un'attività [B2B/B2C] che vende [prodotto/servizio].\n\nI nostri canali di marketing principali: [es. search a pagamento, organico, email, social]\nCiclo medio di vendita: [es. 2 settimane / 3 mesi]\nModello di attribuzione attuale: [es. ultimo clic]\n\nSpiega come i modelli first-touch, last-touch, lineare, con decadimento temporale e basato sui dati interpreterebbero diversamente il nostro funnel, e raccomanda il più adatto motivando la risposta."
        }
      ]
    },
    {
      "cat": "Brand e posizionamento",
      "prompts": [
        {
          "title": "Dichiarazione di posizionamento del brand",
          "text": "Scrivi una dichiarazione di posizionamento del brand per [azienda/prodotto].\n\nCosa facciamo: [descrivi]\nPubblico target: [descrivi]\nVantaggio fondamentale: [valore primario offerto]\nElemento differenziante: [cosa ci distingue dalle alternative]\nConcorrenti: [elenca i principali]\n\nUsa la struttura: Per [pubblico] che [bisogno], [brand] è la [categoria] che [vantaggio] perché [motivo per crederci / reason to believe]. Fornisci poi 2 versioni alternative con enfasi differenti."
        },
        {
          "title": "Differenziazione competitiva",
          "text": "Aiutami a definire come [prodotto/azienda] si differenzia dai concorrenti.\n\nIl nostro prodotto: [descrivi]\nConcorrenti principali: [elenco con breve descrizione di ciascuno]\nI nostri punti di forza chiave: [elenco]\nTemi ricorrenti nei feedback dei clienti: [cosa dicono di amare i clienti]\n\nIdentifica i nostri elementi differenzianti più forti, quali risultano più difendibili e come comunicarli chiaramente nel copy promozionale. Segnala eventuali affermazioni troppo generiche che necessitano di maggiore incisività."
        },
        {
          "title": "Linee guida per il tono di voce",
          "text": "Crea le linee guida per la voce del brand per [azienda/prodotto].\n\nCosa facciamo: [descrivi]\nPubblico target: [descrivi]\nPersonalità che vogliamo trasmettere: [es. autorevole ma accessibile, audace, caloroso]\nPersonalità che vogliamo evitare: [es. aziendale rigida, carica di gergo]\nEsempi di testi che ci piacciono: [incolla]\n\nDefinisci 4-5 attributi della voce del brand, spiegando ciascuno con una descrizione, esempi di cosa fare e cosa evitare (do/don't) e un esempio di riscrittura prima/dopo."
        },
        {
          "title": "Brainstorming di tagline e slogan",
          "text": "Fai un brainstorming di tagline e slogan per [azienda/prodotto].\n\nCosa facciamo: [descrivi in una frase]\nPubblico target: [descrivi]\nVantaggio principale: [proposta di valore chiave]\nTono di voce: [es. incisivo, riflessivo, sicuro, brillante]\nTagline attuali che non ci piacciono e perché: [facoltativo]\n\nGenera 15 opzioni di tagline. Raggruppale per approccio: orientate al beneficio, orientate all'emozione e da brand sfidante (challenger). Segnala le tue 3 scelte preferite spiegando brevemente il motivo."
        }
      ]
    },
    {
      "cat": "Growth e fidelizzazione",
      "prompts": [
        {
          "title": "Idee per programma referral",
          "text": "Progetta un programma di referral per [prodotto/servizio].\n\nModello di business: [es. abbonamento SaaS, e-commerce]\nBase utenti attuale: [dimensioni approssimative]\nLTV medio del cliente: [importo]\nObiettivo di costo di acquisizione: [CAC target]\n\nProponi 3 strutture di programmi referral con diverse dinamiche di incentivazione (es. ricompensa bilaterale, crediti, denaro). Per ciascuna: descrivi la dinamica, il flusso di referral, la struttura dei premi e l'impatto previsto sul coefficiente virale."
        },
        {
          "title": "Sequenza email di fidelizzazione",
          "text": "Scrivi una sequenza di email di retention per gli utenti che si sono registrati a [prodotto] ma non sono attivi da [X giorni].\n\nProdotto: [descrivi cosa fa]\nMotivo frequente di abbandono: [se noto]\nTono di voce: [es. amichevole, diretto]\nNumero di email: [es. sequenza di 3 email]\n\nPer ciascuna email fornisci: oggetto, testo di anteprima, corpo del testo e CTA. Distanziale di [X] giorni l'una dall'altra. Focalizzati sul riattivare l'interesse offrendo valore reale, non solo sconti."
        },
        {
          "title": "Ottimizzazione flusso di onboarding",
          "text": "Aiutami a ottimizzare il flusso di onboarding per [prodotto].\n\nFasi attuali di onboarding: [elencale]\nPunto di abbandono: [dove gli utenti lasciano]\nObiettivo Time-to-Value: [es. l'utente percepisce il valore entro 5 minuti]\nEvento chiave di attivazione: [es. primo progetto creato, collega invitato]\n\nIndividua i punti di attrito nel flusso attuale, suggerisci miglioramenti specifici per ogni passaggio e raccomanda l'onboarding minimo indispensabile che conduca gli utenti all'evento di attivazione nel minor tempo possibile."
        },
        {
          "title": "Strategia per loop virale",
          "text": "Progetta una strategia di loop virale per [prodotto/servizio].\n\nTipologia di prodotto: [es. strumento collaborativo, marketplace, app social]\nMeccanismo di crescita attuale: [descrivi come vi trovano gli utenti oggi]\nMomenti naturali di condivisione: [quando gli utenti sentono spontaneamente il bisogno di condividere?]\nObiettivo di coefficiente virale target: [es. K > 1]\n\nProponi 2-3 modelli di loop virale. Per ciascuno: descrivi il trigger scatenante, il meccanismo di condivisione, l'incentivo e il percorso di conversione per gli utenti invitati. Stima un coefficiente virale realistico per ciascuna proposta."
        }
      ]
    }
  ],
  "job": [
    {
      "cat": "Curriculum Vitae",
      "prompts": [
        {
          "title": "Riscrivi i punti elenco del CV",
          "text": "Riscrivi questi punti elenco del curriculum affinché risultino più incisivi, efficaci e orientati ai risultati. Usa verbi d'azione e quantifica i risultati ove possibile:\n\n[incolla i tuoi punti elenco qui]\n\nRuolo per cui mi candido: [titolo della posizione]\nSettore: [settore]"
        },
        {
          "title": "Adatta il CV all'annuncio di lavoro",
          "text": "Ecco il mio curriculum attuale e la descrizione dell'offerta di lavoro a cui desidero candidarmi. Identifica i gap, suggerisci quali competenze e parole chiave aggiungere o mettere in risalto e riscrivi le sezioni più pertinenti per allinearle al ruolo.\n\nIl mio curriculum:\n[incolla il curriculum qui]\n\nDescrizione del lavoro:\n[incolla la job description qui]"
        },
        {
          "title": "Scrivi il riepilogo professionale del CV",
          "text": "Scrivi un riepilogo professionale accattivante per il mio curriculum. Dovrà essere composto da 3-4 frasi, evidenziare i miei punti di forza ed esperienze chiave ed essere personalizzato per la posizione a cui aspiro.\n\nIl mio percorso: [anni di esperienza, competenze chiave, traguardi principali]\nRuolo a cui aspiro: [titolo della posizione e settore]"
        },
        {
          "title": "Quantifica i traguardi nel CV",
          "text": "Aiutami a quantificare e valorizzare questi risultati del mio curriculum. Se non ho fornito numeri, suggeriscimi quali metriche potrei verificare o stimare per rendere ogni punto più incisivo:\n\n[incolla qui i tuoi traguardi]\n\nIl mio ruolo: [titolo della posizione]\nDimensioni aziendali / settore: [dettagli]"
        }
      ]
    },
    {
      "cat": "Lettera di presentazione",
      "prompts": [
        {
          "title": "Scrivi una lettera di presentazione",
          "text": "Scrivi una lettera di presentazione efficace per questa candidatura di lavoro. Strutturala in 3 paragrafi: perché sono entusiasta dell'azienda, cosa posso apportare al ruolo e una chiara call to action finale.\n\nIl mio profilo: [breve riassunto]\nTitolo della posizione: [titolo]\nAzienda: [nome dell'azienda]\nRequisiti chiave dell'annuncio: [incolla 3-5 requisiti indicati nell'annuncio]\nUn motivo specifico per cui desidero questa azienda: [il tuo motivo]"
        },
        {
          "title": "Lettera per cambio carriera",
          "text": "Scrivi una lettera di presentazione per una candidatura finalizzata a un cambio di carriera. Spiega la transizione, collega le mie competenze trasferibili al nuovo ruolo e dimostra una forte e sincera motivazione per il cambiamento.\n\nIl mio percorso attuale: [settore attuale ed esperienza]\nRuolo a cui desidero passare: [nuovo titolo della posizione e settore]\nCompetenze trasferibili in mio possesso: [elencale]\nPerché desidero intraprendere questo cambiamento: [il tuo motivo]"
        },
        {
          "title": "Richiesta di trasferimento interno",
          "text": "Scrivi una lettera formale per richiedere un trasferimento interno verso un altro team o ruolo all'interno della mia azienda. Valorizza la mia conoscenza dell'azienda, i contributi forniti finora e spiega perché questo passaggio sarà reciprocamente vantaggioso sia per me sia per l'azienda.\n\nIl mio ruolo attuale: [titolo e team]\nRuolo verso cui desidero trasferirmi: [titolo e team]\nAnzianità in azienda: [durata]\nContributi chiave finora: [elencane 2-3]\nMotivo del trasferimento: [il tuo motivo]"
        },
        {
          "title": "Follow-up dopo la candidatura",
          "text": "Scrivi un'email di follow-up breve e professionale da inviare dopo aver inoltrato una candidatura per un posto di lavoro. Dovrà confermare il mio costante interesse, risultare cordiale e concisa senza apparire insistente.\n\nTitolo della posizione: [titolo]\nAzienda: [nome dell'azienda]\nData di invio della candidatura: [data]\nNome del responsabile delle selezioni (se noto): [nome o 'Responsabile delle Risorse Umane']"
        }
      ]
    },
    {
      "cat": "Preparazione colloqui",
      "prompts": [
        {
          "title": "Esercitati con domande comportamentali (STAR)",
          "text": "Aiutami a preparare risposte strutturate con il metodo STAR (Situazione, Compito, Azione, Risultato) per domande comportamentali in vista di un colloquio per questo ruolo. Per ciascuna domanda, guidami con lo schema: Situazione, Task/Compito, Azione, Risultato.\n\nRuolo per cui sosterrò il colloquio: [titolo della posizione]\nSettore: [settore]\nIl mio percorso: [breve riassunto]\n\nIniziamo con queste domande classiche:\n1. Raccontami di una volta in cui hai gestito un conflitto sul lavoro.\n2. Descrivi un progetto che hai coordinato dall'inizio alla fine.\n3. Parlami di una volta in cui hai fallito e cosa hai imparato da quell'esperienza."
        },
        {
          "title": "Preparazione al colloquio tecnico",
          "text": "Devo sostenere un colloquio tecnico per questa posizione. Crea un piano di studio mirato ed elenca gli argomenti più probabili e i tipi di domande su cui dovrei prepararmi. Includi domande di esempio e spiega quali sono le caratteristiche di una risposta eccellente.\n\nRuolo: [titolo della posizione]\nTipologia di azienda: [startup / grande azienda enterprise / stile FAANG]\nCompetenze chiave indicate nell'annuncio: [incollale qui]\nIl mio livello attuale di competenza: [base / intermedio / avanzato]\nTempo a disposizione prima del colloquio: [giorni/settimane]"
        },
        {
          "title": "Domande da porre al selezionatore",
          "text": "Genera un elenco di domande intelligenti e strategiche da rivolgere al selezionatore alla fine del colloquio. Includi domande relative al ruolo, alla cultura del team, alle opportunità di crescita professionale e alle metriche di valutazione delle performance. Evita domande generiche o banali.\n\nRuolo: [titolo della posizione]\nAzienda: [nome dell'azienda]\nFase del colloquio: [primo colloquio conoscitivo / colloquio finale / con l'hiring manager / panel con il team]\nCosa so già dell'azienda: [brevi note]"
        },
        {
          "title": "Script per la negoziazione dello stipendio",
          "text": "Scrivi uno script per negoziare la retribuzione dopo aver ricevuto un'offerta di lavoro. Dovrà trasmettere sicurezza ma spirito collaborativo, motivare la richiesta con dati di mercato e con la mia esperienza, mantenendo la conversazione su un tono positivo e costruttivo.\n\nOfferta ricevuta: [cifra lorda annuale proposta]\nLa mia retribuzione desiderata: [cifra desiderata]\nLa mia esperienza: [anni di esperienza e qualifiche chiave]\nRuolo: [titolo della posizione]\nSede / lavoro da remoto: [sede]"
        }
      ]
    },
    {
      "cat": "LinkedIn",
      "prompts": [
        {
          "title": "Ottimizza il sommario di LinkedIn",
          "text": "Scrivi 5 varianti per il sommario (headline) del mio profilo LinkedIn. Ciascuna deve essere ricca di parole chiave utili per le ricerche dei recruiter, comunicare chiaramente la mia proposta di valore e non superare i 220 caratteri.\n\nIl mio ruolo attuale: [titolo]\nSettore: [settore]\nCompetenze chiave: [elencane 3-5]\nPer cosa desidero essere riconosciuto: [breve descrizione]\nAperto a nuove opportunità lavorative: [sì / no]"
        },
        {
          "title": "Scrivi la sezione Informazioni di LinkedIn",
          "text": "Scrivi la sezione 'Informazioni' (About) per il mio profilo LinkedIn. Usa la prima persona, inizia con un gancio d'impatto, valorizza le mie esperienze e competenze principali e concludi indicando cosa sto cercando o come contattarmi. Punta a 250-350 parole.\n\nIl mio percorso: [riassunto dell'esperienza]\nCompetenze chiave e aree di competenza: [elencale]\nTraguardi notevoli: [1-3 risultati principali]\nCosa sto cercando: [ruoli, opportunità o collaborazioni]"
        },
        {
          "title": "Messaggio per richiesta di collegamento",
          "text": "Scrivi un messaggio breve e personalizzato per una richiesta di collegamento su LinkedIn (sotto i 300 caratteri). Deve essere cordiale, spiegare nello specifico perché sto contattando la persona e non chiedere subito favori o vendite.\n\nChi sto contattando: [nome e qualifica]\nPerché voglio entrare in contatto: [interesse comune, collegamento reciproco, stima per il suo lavoro, ecc.]\nIl mio profilo: [una riga di presentazione su chi sono]"
        },
        {
          "title": "Post LinkedIn su riflessione di carriera",
          "text": "Scrivi un post per LinkedIn in cui condivido una riflessione o una lezione appresa nel corso della mia carriera. Usa una prima riga forte per fermare lo scroll, racconta una breve storia o osservazione e concludi con una domanda per stimolare le interazioni. Evita cliché aziendali e mantieni uno stile autentico.\n\nArgomento o lezione: [cosa desidero condividere]\nContesto o storia correlata: [brevi dettagli]\nPubblico target: [a chi mi rivolgo]\nTono: [riflessivo / motivazionale / pratico]"
        }
      ]
    },
    {
      "cat": "Networking e relazioni",
      "prompts": [
        {
          "title": "Richiesta di colloquio informativo",
          "text": "Scrivi un'email per richiedere un colloquio conoscitivo/informativo di 20 minuti a un professionista che ricopre un ruolo o lavora in un'azienda di mio interesse. Sii conciso, mostra un sincero interesse per la sua esperienza e rendi semplice e poco impegnativo accettare.\n\nNome dell'interlocutore: [nome]\nRuolo e azienda: [dettagli]\nCome ho trovato il profilo: [LinkedIn, collegamento comune, articolo, ecc.]\nCosa vorrei approfondire: [argomenti o domande specifiche]\nIl mio profilo: [una frase su chi sono]"
        },
        {
          "title": "Email di ringraziamento post incontro",
          "text": "Scrivi un'email di ringraziamento da inviare entro 24 ore da un colloquio conoscitivo o incontro di networking. Fai riferimento a un elemento specifico emerso nella conversazione, esprimi sincera gratitudine e proponi un naturale passo successivo.\n\nNome dell'interlocutore: [nome]\nData dell'incontro: [data]\nElemento specifico discusso: [argomento o spunto di riflessione]\nProssimo passo che desidero proporre: [es. rimanere in contatto, condividere una risorsa, risentirci tra 3 mesi]"
        },
        {
          "title": "Elevator pitch",
          "text": "Scrivi un elevator pitch di 30 secondi da utilizzare durante eventi di networking o quando qualcuno mi chiede 'di cosa ti occupi?'. Dovrà essere chiaro, memorabile e aprire spontaneamente a una conversazione. Scrivi 3 versioni: formale, informale e per cambio di carriera.\n\nIl mio percorso: [ruolo attuale o recente e settore]\nCompetenze chiave o aree di specializzazione: [elencale]\nVerso cosa sto lavorando: [obiettivi o tipologia di opportunità che sto cercando]"
        },
        {
          "title": "Email di follow-up post conferenza",
          "text": "Scrivi un'email di follow-up per una persona conosciuta brevemente a una conferenza o a un evento di settore. Ricorda le circostanze in cui ci siamo conosciuti, riassumi la conversazione e proponi un modo per rimanere in contatto o proseguire il confronto.\n\nNome della persona: [nome]\nNome dell'evento: [conferenza o evento]\nCome ci siamo conosciuti / di cosa abbiamo parlato: [brevi dettagli]\nProssimo passo che desidero suggerire: [chiamata, caffè di persona o virtuale, scambio di risorse, ecc.]"
        }
      ]
    },
    {
      "cat": "Crescita professionale",
      "prompts": [
        {
          "title": "Crea piano di sviluppo professionale",
          "text": "Aiutami a creare un piano di sviluppo professionale a 12 mesi. Includi obiettivi specifici, competenze da sviluppare, traguardi da raggiungere e azioni concrete da intraprendere ogni trimestre. Rendilo realistico e allineato al ruolo a cui aspiro.\n\nIl mio ruolo attuale: [titolo e livello]\nRuolo target tra 12 mesi: [titolo e livello]\nGap principali da colmare: [competenze, esperienza o certificazioni mancanti]\nRisorse a mia disposizione: [corsi, mentori, budget per la formazione, ecc.]"
        },
        {
          "title": "Chiedere una promozione",
          "text": "Scrivi uno script per parlare con il mio responsabile e richiedere una promozione. Strutturalo con un'apertura di conversazione, un riassunto dei miei contributi e dell'impatto generato, una richiesta esplicita e un invito a discutere insieme i prossimi passi. Mantieni un tono sicuro e collaborativo.\n\nIl mio titolo attuale: [titolo]\nTitolo richiesto: [titolo desiderato]\nTempo trascorso nel ruolo attuale: [durata]\nRisultati chiave conseguiti: [elencane 3-5 con relativo impatto]\nPerché adesso: [tempistica o fattore scatenante]"
        },
        {
          "title": "Scrivi un'autovalutazione delle prestazioni",
          "text": "Aiutami a scrivere un'autovalutazione solida ed efficace per la mia revisione annuale delle prestazioni. Per ogni area, metti in risalto risultati specifici con impatto misurabile, riconosci con trasparenza le aree di miglioramento e collega il mio lavoro agli obiettivi del team e aziendali.\n\nIl mio ruolo: [titolo]\nProgetti o responsabilità principali in questo periodo: [elencali]\nTraguardi notevoli: [con metriche ove possibile]\nAree in cui desidero crescere: [sii specifico]\nObiettivi per il prossimo periodo: [elencane 2-3]"
        },
        {
          "title": "Analisi dei gap di competenze",
          "text": "Analizza il divario tra le mie competenze attuali e i requisiti necessari per il ruolo a cui aspiro. Assegna una priorità ai gap in base all'importanza, suggerisci modi concreti per colmare ciascuno di essi e stima una tempistica realistica.\n\nLe mie competenze attuali: [elenca competenze tecniche e soft skill]\nRuolo a cui aspiro: [titolo della posizione]\nDescrizione del lavoro o requisiti: [incolla o descrivi i requisiti principali]\nTempistiche a mia disposizione: [mesi o anni]"
        }
      ]
    }
  ],
  "startup": [
    {
      "cat": "Ideazione e validazione",
      "prompts": [
        {
          "title": "Valida idea di business",
          "text": "Ho un'idea di business: [descrivi la tua idea in 2-3 frasi].\n\nAiutami a validarla analizzando:\n1. Chiarezza del problema: esiste un problema reale e sentito in questo ambito?\n2. Cliente target: chi sarebbe disposto a pagare per questa soluzione?\n3. Dimensione del mercato: stima approssimativa di TAM, SAM e SOM\n4. Rischi principali e ipotesi fondamentali da testare\n5. 3 metodi rapidi ed economici per validare l'idea prima di sviluppare qualsiasi cosa."
        },
        {
          "title": "Individua il mercato target",
          "text": "Il mio prodotto è: [descrivi il prodotto o servizio].\n\nAiutami a individuare e prioritizzare il mio mercato target:\n1. Elenca 5 potenziali segmenti di clientela che potrebbero averne bisogno\n2. Per ciascun segmento descrivi il livello di urgenza/pain, la propensione a pagare e la facilità di acquisizione\n3. Consiglia quale segmento approcciare per primo e perché\n4. Descrivi in dettaglio il profilo del cliente ideale (ICP) per quel segmento."
        },
        {
          "title": "Analisi dello scenario competitivo",
          "text": "Sto sviluppando [descrivi il tuo prodotto/servizio] nel settore [settore/ambito].\n\nAnalizza lo scenario competitivo:\n1. Chi sono i principali concorrenti diretti e indiretti?\n2. Quali sono i loro punti di forza e di debolezza?\n3. Quali gap o bisogni insoddisfatti esistono sul mercato?\n4. Dove potrebbe realisticamente differenziarsi un nuovo operatore?\n5. Cosa spingerebbe i clienti ad abbandonare le soluzioni esistenti per passare alla nostra?"
        },
        {
          "title": "Prioritizzazione delle funzionalità dell'MVP",
          "text": "Sto realizzando un MVP per [descrivi il prodotto]. L'utente target è [descrivi l'utente] e il problema centrale che intendo risolvere è [descrivi il problema].\n\nAiutami a stabilire le priorità delle funzionalità:\n1. Elenca le funzionalità imprescindibili (must-have) per un MVP funzionante\n2. Elenca le funzionalità utili ma non essenziali al momento del lancio\n3. Elenca le funzionalità da rimandare a una versione successiva\n4. Suggerisci la versione più snella possibile da rilasciare entro [tempistica] per raccogliere feedback reale dagli utenti.\n\nUsa il metodo MoSCoW ove opportuno."
        }
      ]
    },
    {
      "cat": "Pitch e raccolta fondi",
      "prompts": [
        {
          "title": "Scrivi un elevator pitch",
          "text": "Aiutami a scrivere un elevator pitch incisivo di 30 secondi per la mia startup.\n\nDettagli:\n- Cosa facciamo: [descrivi il prodotto/servizio]\n- Problema che risolviamo: [descrivi il problema]\n- Cliente target: [a chi si rivolge]\n- Modello di monetizzazione: [business model]\n- Risultati ottenuti finora: [metriche, utenti, fatturato]\n\nScrivi 3 versioni: una per investitori, una per potenziali clienti e una per eventi di networking generali. Mantieni ciascuna sotto le 60 parole."
        },
        {
          "title": "Narrazione del pitch deck",
          "text": "Aiutami a costruire l'arco narrativo per il mio pitch deck per gli investitori.\n\nDettagli della startup:\n- Nome azienda: [nome]\n- Cosa facciamo: [descrizione]\n- Problema: [problema]\n- Soluzione: [soluzione]\n- Mercato: [dimensione del mercato]\n- Modello di business: [come monetizziamo]\n- Risultati e trazione: [metriche]\n- Team: [membri chiave del team]\n- Richiesta (Ask): [quanto capitale richiediamo e per quali obiettivi]\n\nPer ciascuna slide (Problema, Soluzione, Mercato, Prodotto, Trazione, Team, Richiesta), scrivi il messaggio chiave e 3 punti elenco di supporto. Mantieni l'approccio orientato agli investitori e guidato dallo storytelling."
        },
        {
          "title": "Email di presentazione agli investitori",
          "text": "Scrivi un'email a freddo per presentare la mia startup a un investitore di venture capital.\n\nContesto:\n- Focus dell'investitore: [es. B2B SaaS, early stage, fintech]\n- La mia startup: [nome e descrizione in una riga]\n- Perché questo investitore in particolare: [motivo]\n- Trazione/risultati chiave: [metriche o traguardi principali]\n- Richiesta (Ask): [es. call conoscitiva di 20 minuti]\n\nScrivi un oggetto efficace e un'email inferiore a 150 parole. Rendila diretta, specifica e convincente. Evita formule generiche o parole d'ordine vuote."
        },
        {
          "title": "Ipotesi per proiezioni finanziarie",
          "text": "Aiutami a definire le ipotesi fondamentali alla base delle mie proiezioni finanziarie a 3 anni.\n\nModello di business: [descrivi la monetizzazione, es. abbonamento SaaS, marketplace, vendita una tantum]\nCliente target: [descrivi il segmento di clienti]\nStato attuale: [fatturato, utenti o pre-revenue]\n\nPer ciascun anno (Anno 1, Anno 2, Anno 3), aiutami a formulare ipotesi realistiche per:\n1. Acquisizione clienti (canali, CAC, tasso di crescita)\n2. Ricavi per cliente (ACV o ARPU, churn rate)\n3. Organico e assunzioni chiave\n4. Principali driver di costo\n5. Percorso verso il pareggio di bilancio (break-even)\n\nSegnala quali ipotesi susciteranno con maggiore probabilità obiezioni o domande approfondite da parte degli investitori."
        }
      ]
    },
    {
      "cat": "Prodotto",
      "prompts": [
        {
          "title": "Scrivi un PRD (Product Requirements Document)",
          "text": "Scrivi un documento dei requisiti di prodotto (PRD) per la seguente funzionalità.\n\nNome funzionalità: [nome funzionalità]\nProdotto: [descrizione del prodotto]\nProblema dell'utente: [quale problema risolve e per chi]\nObiettivo di business: [perché la stiamo sviluppando]\n\nIl PRD deve includere:\n1. Panoramica e obiettivi\n2. User story (in quanto [utente], voglio [azione] per [risultato])\n3. Requisiti funzionali\n4. Fuori scopo (Out of scope)\n5. Metriche di successo\n6. Domande aperte\n\nMantienilo conciso e immediatamente fruibile per il team di sviluppo."
        },
        {
          "title": "User story mapping",
          "text": "Aiutami a creare una mappa delle user story (user story map) per [prodotto o funzionalità].\n\nUtente target: [descrivi l'utente]\nPercorso utente principale: [descrivi il flusso chiave da inizio a fine]\n\n1. Suddividi il percorso in 5-7 attività ad alto livello (la riga superiore della mappa)\n2. Sotto ciascuna attività elenca i task utente (story) necessari per completarla\n3. Identifica quali story appartengono al rilascio MVP rispetto alle release future\n4. Evidenzia eventuali dipendenze tra le diverse story\n\nFormatta il risultato come un elenco strutturato raggruppato per attività."
        },
        {
          "title": "Analisi della strategia di prezzo",
          "text": "Aiutami a definire la migliore strategia di pricing per il mio prodotto.\n\nProdotto: [descrivi cosa fa]\nCliente target: [chi lo acquista, dimensioni aziendali, settore]\nValore generato: [quale risultato produce per il cliente]\nPricing dei concorrenti: [quanto costano le alternative]\nIdee attuali: [eventuali ipotesi di prezzo già considerate]\n\nAnalizza:\n1. Il miglior modello di prezzo (abbonamento, a consumo, una tantum, freemium, ecc.) con vantaggi e svantaggi\n2. Fascia di prezzo consigliata con relative motivazioni\n3. Eventuali piani o scaglioni di prezzo (tier)\n4. Come testare e validare il pricing prima di formalizzarlo\n5. Errori comuni di pricing da evitare in questo mercato."
        },
        {
          "title": "Framework di prioritizzazione funzionalità",
          "text": "Ho un backlog di richieste di funzionalità e devo definirne le priorità. Aiutami ad applicare un framework di prioritizzazione strutturato.\n\nProdotto: [descrivi il prodotto]\nFase attuale: [es. pre-lancio, prima trazione, scalabilità]\nObiettivo di business principale attuale: [es. trattenere gli utenti, acquisire i primi 100 clienti, ridurre il churn]\n\nBacklog di funzionalità:\n[elenca qui le funzionalità]\n\nPer ciascuna funzionalità assegna un punteggio per:\n1. Impatto sull'obiettivo di business prioritario (1-5)\n2. Sforzo di sviluppo (1-5, dove 5 = impegno molto elevato)\n3. Segnale di domanda degli utenti (quanti utenti l'hanno richiesta)\n4. Coerenza strategica\n\nClassificale e consiglia cosa sviluppare per primo, per secondo e cosa accantonare per il momento."
        }
      ]
    },
    {
      "cat": "Growth e acquisizione",
      "prompts": [
        {
          "title": "Strategia di Go-to-Market",
          "text": "Aiutami a elaborare una strategia di Go-to-Market (GTM) per la mia startup.\n\nProdotto: [descrivi il prodotto]\nCliente target: [ICP — settore, dimensioni aziendali, ruolo, problema chiave]\nProposta di valore unica: [cosa vi distingue]\nPricing: [struttura di prezzo]\nTempistiche di lancio: [quando pianificate il lancio]\n\nTratta:\n1. Modello GTM (product-led, sales-led o marketing-led) con relative motivazioni\n2. I primi 3 canali di acquisizione su cui concentrarsi e perché\n3. Piano di lancio per i primi 90 giorni con i traguardi principali\n4. Rischi chiave e strategie di mitigazione\n5. Come valutare il successo a 30, 60 e 90 giorni dal lancio."
        },
        {
          "title": "Canali di acquisizione clienti",
          "text": "Devo individuare i migliori canali di acquisizione clienti per la mia startup.\n\nProdotto: [descrivi il prodotto]\nCliente target: [chi è, dove trascorre il proprio tempo online e offline]\nBudget di acquisizione: [budget mensile indicativo]\nDimensioni del team: [numero di persone dedicate alla crescita]\nTrazione attuale: [clienti già acquisiti o zero]\n\nPer ciascun canale consigliato indica:\n1. Perché è adatto al mio cliente e al mio prodotto\n2. Stima indicativa del range di CAC\n3. Come testarlo a basso costo in 2 settimane\n4. Come si presenta la versione scalata del canale\n\nOrdina i canali in base al maggior potenziale di ROI per la fase attuale della startup."
        },
        {
          "title": "Strategia di retention",
          "text": "Aiutami a progettare una strategia di fidelizzazione e retention per il mio prodotto.\n\nProdotto: [descrivi il prodotto]\nTipologia di utente: [B2B o B2C, descrivi l'utente]\nRetention attuale: [es. tasso di retention a 30 giorni o churn rate, se noto]\nFrequenza d'uso ideale: [con quale frequenza gli utenti dovrebbero utilizzare il prodotto]\nPrincipali motivi di abbandono (se noti): [elencali]\n\nFornisci:\n1. La leva di retention più importante su cui concentrarsi inizialmente e perché\n2. Un flusso di onboarding che guidi gli utenti più rapidamente all'effetto 'aha'\n3. 3 campagne di email/notifiche di lifecycle per migliorare la retention\n4. Funzionalità o modifiche in-app mirate a ridurre il churn\n5. Come identificare i clienti a rischio prima che abbandonino il servizio."
        },
        {
          "title": "Progettazione dashboard delle metriche",
          "text": "Aiutami a progettare la dashboard con le metriche chiave per la mia startup.\n\nModello di business: [es. B2B SaaS, marketplace, app consumer, e-commerce]\nFase: [pre-revenue / prima trazione / scalabilità]\nObiettivo prioritario attuale: [es. incrementare l'MRR, migliorare la retention, aumentare l'attivazione]\n\nDefinisci:\n1. La metrica più importante in assoluto (North Star Metric) su cui ottimizzare gli sforzi\n2. Le 5-7 metriche chiave che alimentano la North Star (input metric)\n3. Metriche di salute aziendale da monitorare (per cogliere tempestivamente i problemi)\n4. Metriche da ignorare nella fase attuale\n5. Come impostare una routine semplice di revisione settimanale attorno a questi dati."
        }
      ]
    },
    {
      "cat": "Operations e organizzazione",
      "prompts": [
        {
          "title": "Piano di assunzioni",
          "text": "Aiutami a definire un piano di assunzioni per la mia startup.\n\nTeam attuale: [elenca ruoli e organico attuale]\nStato dei finanziamenti: [bootstrapped / pre-seed / seed / Serie A]\nRunway disponibile: [mesi di liquidità residua]\nPriorità per i prossimi 12 mesi: [elenca 2-3 obiettivi chiave]\n\nFornisci:\n1. Le prime 3 figure da inserire e perché (in ordine di priorità)\n2. Per ciascun ruolo: titolo della posizione, responsabilità principali, competenze imprescindibili e formula contrattuale consigliata (full-time, part-time o consulenza)\n3. Come attrarre candidati di talento senza disporre di budget elevati per il recruiting\n4. Campanelli d'allarme (red flag) da monitorare nelle assunzioni in fase early stage\n5. Un processo di selezione snello che consenta di procedere rapidamente garantendo la qualità."
        },
        {
          "title": "Documento sulla cultura aziendale",
          "text": "Aiutami a redigere il documento fondativo della cultura aziendale per la mia startup.\n\nAzienda: [nome e attività svolta]\nFase: [dimensioni del team, fase di sviluppo]\nValori dei fondatori: [elenca 3-5 valori per te importanti]\nModalità di lavoro: [remoto / in presenza / ibrido]\nTipo di team che desideri creare: [descrivilo in una frase]\n\nScrivi:\n1. Una breve dichiarazione sulla cultura aziendale (2-3 frasi)\n2. 4-6 valori cardine spiegati in modo semplice e concreto\n3. 3 esempi pratici di come questi valori guidano le decisioni quotidiane\n4. Comportamenti NON accettabili (anti-valori)\n5. Come mantenere salda la cultura durante la crescita del team."
        },
        {
          "title": "Definizione degli OKR",
          "text": "Aiutami a definire gli OKR (Objectives and Key Results) per la mia startup.\n\nFase aziendale: [es. seed, Serie A]\nPeriodo di riferimento: [Q1 2026 o annuale]\nPriorità strategiche aziendali: [elenca 2-3 priorità strategiche]\nBaseline attuale delle metriche: [numeri chiave, se disponibili]\n\nPer ciascuna priorità definisci:\n- 1 Obiettivo (stimolante, qualitativo, direzionale)\n- 3 Risultati Chiave (misurabili, specifici, vincolati nel tempo)\n\nIncludi inoltre:\n1. Come declinare gli OKR a livello di singoli team (cascading)\n2. Una cadenza periodica per il monitoraggio e la valutazione degli OKR\n3. Errori comuni da evitare nella gestione degli OKR in una startup nelle prime fasi."
        },
        {
          "title": "Valutazione fornitori e software",
          "text": "Aiutami a valutare e scegliere tra diversi strumenti o fornitori per [esigenza specifica, es. CRM, data warehouse, piattaforma di supporto clienti].\n\nCaso d'uso: [descrivi esattamente cosa deve fare]\nDimensioni del team: [quante persone lo utilizzeranno]\nBudget: [budget mensile indicativo]\nRequisiti imprescindibili: [elenca i must-have non negoziabili]\nRequisiti auspicabili: [elenca le funzionalità secondarie gradite]\n\nOpzioni che sto valutando:\n1. [Opzione A]\n2. [Opzione B]\n3. [Opzione C]\n\nConfrontale per: funzionalità, prezzi, facilità di configurazione, scalabilità, integrazioni e assistenza. Consiglia una soluzione motivando la scelta e segnalando eventuali costi nascosti o rischi di lock-in."
        }
      ]
    },
    {
      "cat": "Aspetti legali e finanza",
      "prompts": [
        {
          "title": "Struttura dei Termini di Servizio",
          "text": "Aiutami a delineare la struttura dei Termini di Servizio (ToS) per il mio prodotto.\n\nTipologia di prodotto: [es. applicazione SaaS, marketplace, app consumer]\nUtenti: [clienti B2B / utenti privati consumer / entrambi]\nFunzionalità principali: [descrivi cosa possono fare gli utenti sulla piattaforma]\nAspetti specifici di attenzione: [es. contenuti generati dagli utenti, pagamenti, trattamento dei dati]\n\nFornisci:\n1. Una struttura consigliata con tutte le sezioni fondamentali che un documento di ToS deve includere\n2. Un riassunto chiaro e divulgativo di cosa tratta ogni sezione e perché è importante\n3. Clausole particolarmente critiche per la mia tipologia di prodotto\n4. Errori comuni commessi dai founder nella stesura dei ToS nelle fasi iniziali\n\nNota: queste indicazioni hanno scopo puramente pianificatorio; sottoporrò il documento finale alla revisione di un avvocato."
        },
        {
          "title": "Considerazioni per la Privacy Policy",
          "text": "Aiutami a comprendere cosa deve disciplinare l'informativa sulla privacy (Privacy Policy) del mio prodotto.\n\nProdotto: [descrivi il prodotto]\nDati raccolti: [elenca i tipi di dati raccolti, es. email, dati di pagamento, dati di utilizzo]\nUbicazione degli utenti: [es. Italia/UE, Stati Uniti, globale]\nStrumenti di terze parti utilizzati: [es. Stripe, Google Analytics, Intercom]\n\nTratta:\n1. Le sezioni fondamentali che ogni informativa privacy deve includere\n2. Requisiti specifici in base alla localizzazione geografica degli utenti (GDPR, CCPA, ecc.)\n3. Dati raccolti che potrebbero richiedere un consenso esplicito preventivo\n4. Obblighi di trasparenza relativi alla condivisione di dati con terze parti\n5. Come mantenere aggiornata l'informativa man mano che il prodotto si evolve\n\nNota: queste indicazioni sono solo a fini di pianificazione; farò revisionare il documento finale da un professionista legale."
        },
        {
          "title": "Simulazione della Cap Table",
          "text": "Aiutami a modellare uno scenario di tabella di capitalizzazione (Cap Table) per la mia startup.\n\nCap Table attuale:\n- Founder 1: [nome, % di quote]\n- Founder 2: [nome, % di quote]\n- Piano di stock option dipendenti: [%]\n- Altri: [business angel, SAFE, ecc.]\n\nRound di finanziamento proposto:\n- Tipologia di round: [es. Seed, Serie A]\n- Capitale da raccogliere: [€/$ X]\n- Valutazione pre-money: [€/$ Y] (oppure 'aiutami a definirla')\n- Nuovi investitori: [nome o 'da definire']\n\nMostra:\n1. Percentuali di partecipazione post-money per tutte le parti\n2. In che modo l'adeguamento/integrazione del pool di opzioni (top-up) incide sulla diluizione dei founder\n3. Come si configura la Cap Table al termine del round\n4. Clausole chiave da negoziare oltre alla valutazione (diritti pro-rata, posti nel CdA, ecc.)"
        },
        {
          "title": "Analisi della Unit Economics",
          "text": "Aiutami ad analizzare la Unit Economics del mio modello di business.\n\nModello di business: [descrivi come genera ricavi l'attività]\nPricing: [quanto pagano i clienti e con quale frequenza]\nCosti principali per acquisire un cliente: [elenca le voci primarie di CAC]\nCosti diretti per servire un cliente: [elenca le voci primarie di costo erogazione/COGS per cliente]\nTasso di churn (se noto): [mensile o annuale]\n\nCalcola e spiega:\n1. Costo di acquisizione del cliente (CAC)\n2. Ricavo medio per utente (ARPU) o Valore medio annuale del contratto (ACV)\n3. Margine lordo per cliente\n4. Valore nel tempo del cliente (Customer Lifetime Value - LTV)\n5. Rapporto LTV:CAC e relativo significato per la sostenibilità del business\n6. Periodo di recupero dell'investimento (Payback period)\n7. Aspetti da ottimizzare per raggiungere una Unit Economics sana e scalabile."
        }
      ]
    }
  ],
  "data": [
    {
      "cat": "SQL",
      "prompts": [
        {
          "title": "Scrivi query SQL",
          "text": "Scrivi una query SQL per la seguente attività:\n\nAttività: [descrivi cosa desideri estrarre, es. trovare tutti gli utenti che si sono registrati negli ultimi 30 giorni e hanno effettuato almeno un acquisto]\n\nTabelle e colonne pertinenti:\n\n[descrivi lo schema o incolla le istruzioni CREATE TABLE]\n\nDatabase: [es. PostgreSQL, MySQL, BigQuery]\n\nFornisci la query corredata da commenti che spieghino ogni passaggio chiave."
        },
        {
          "title": "Ottimizza query lenta",
          "text": "Questa query SQL ha tempi di esecuzione troppo lenti. Aiutami a ottimizzarla.\n\nQuery:\n\n[incolla la query qui]\n\nDatabase: [es. PostgreSQL, MySQL]\nDimensioni delle tabelle: [es. orders ha 50 milioni di righe, users ha 2 milioni di righe]\nIndici esistenti: [elencali o incolla l'output di EXPLAIN]\n\nIdentifica i colli di bottiglia, suggerisci modifiche agli indici e riscrivi la query se necessario. Spiega ogni singola ottimizzazione proposta."
        },
        {
          "title": "Spiega query complessa",
          "text": "Spiega questa query SQL in modo semplice e comprensibile. Analizzala passo dopo passo: cosa fa ciascuna clausola, quali dati produce e cosa rappresenta il risultato finale:\n\n[incolla la query qui]"
        },
        {
          "title": "Progettazione schema di database",
          "text": "Progetta uno schema di database per il seguente caso d'uso:\n\nCaso d'uso: [descrivi l'applicazione o la funzionalità, es. un SaaS multi-tenant con progetti, task e ruoli utente]\n\nDatabase: [es. PostgreSQL]\n\nIncludi: nomi delle tabelle, colonne con tipi di dati e vincoli, chiavi primarie ed esterne, indici e una spiegazione dettagliata delle scelte progettuali e degli eventuali compromessi (trade-off)."
        }
      ]
    },
    {
      "cat": "Analisi dati",
      "prompts": [
        {
          "title": "Piano per analisi esplorativa dei dati (EDA)",
          "text": "Ho a disposizione un dataset e desidero condurre un'analisi esplorativa dei dati (EDA). Crea un piano strutturato passo dopo passo.\n\nDescrizione del dataset: [descrivi colonne, tipi di dati, dimensioni approssimative e dominio applicativo, es. ordini e-commerce con ID cliente, prodotto, prezzo, data]\n\nDomanda di business a cui intendo rispondere: [descrivila]\n\nIncludi: verifiche sulla qualità dei dati, analisi univariata, relazioni da esplorare, visualizzazioni da produrre ed eventuali anomalie o campanelli d'allarme a cui prestare attenzione."
        },
        {
          "title": "Test di significatività statistica",
          "text": "Aiutami a scegliere e interpretare il test statistico più indicato per la mia analisi.\n\nElementi a confronto: [es. tassi di conversione tra due gruppi di utenti]\nTipologia di dati: [es. esiti binari, misurazioni continue]\nDimensioni dei campioni: [es. Gruppo A: 1.200, Gruppo B: 1.400]\nRisultati attuali: [es. Gruppo A: 4,2%, Gruppo B: 5,1%]\n\nConsiglia il test appropriato, enuncia le assunzioni di base, mostra il calcolo o il codice ed esprimi in modo chiaro e divulgativo come interpretare il p-value e l'intervallo di confidenza."
        },
        {
          "title": "Analisi per coorti",
          "text": "Aiutami a progettare e interpretare un'analisi per coorti (cohort analysis).\n\nObiettivo: [es. misurare la retention a 30/60/90 giorni per mese di registrazione]\nDati disponibili: [descrivi tabelle e colonne, es. tabella utenti con signup_date, tabella eventi con user_id e event_date]\nDatabase / strumento: [es. BigQuery, pandas]\n\nScrivi la query o il codice per generare la tabella di coorte, spiega come leggere l'output ed evidenzia eventuali errori comuni di interpretazione."
        },
        {
          "title": "Interpretazione dei trend",
          "text": "Sto riscontrando un trend nei miei dati e ho bisogno di supporto per interpretarlo correttamente.\n\nMetrica: [es. utenti attivi settimanali]\nCosa osservo: [es. calo del 15% nelle ultime 6 settimane dopo una crescita costante]\nContesto: [eventi noti, modifiche di prodotto, stagionalità o fattori esterni]\n\nAiutami a: individuare le cause più plausibili, escludere anomalie nel tracciamento dei dati, suggerire ulteriori analisi per confermare la causa radice e definire i prossimi passi raccomandati."
        }
      ]
    },
    {
      "cat": "Visualizzazione dati",
      "prompts": [
        {
          "title": "Consiglio tipo di grafico",
          "text": "Consigliami il tipo di grafico migliore per il mio caso d'uso e spiegami il motivo.\n\nCosa desidero rappresentare: [es. ripartizione del fatturato per categoria di prodotto e andamento mese su mese]\nDestinatari: [es. team di direzione in una revisione trimestrale aziendale]\nStruttura dei dati: [es. 12 mesi x 6 categorie, valori da 10.000 € a 2 milioni di €]\nStrumento: [es. Tableau, matplotlib, Looker Studio]\n\nProponi 2-3 opzioni, ordinale per efficacia e spiegane i relativi pro e contro."
        },
        {
          "title": "Progettazione layout dashboard",
          "text": "Aiutami a progettare un layout efficace per una dashboard.\n\nFinalità: [es. monitoraggio operativo quotidiano per il team di assistenza clienti]\nMetriche chiave da mostrare: [elencale, es. ticket aperti, tempo di risoluzione, punteggio CSAT, volume ticket per canale]\nDestinatari e modalità di utilizzo: [es. i team leader la consultano all'inizio di ogni turno]\nStrumento: [es. Metabase, Tableau, Grafana]\n\nProponi una suddivisione in sezioni, i tipi di grafici consigliati per ogni metrica e le best practice di UX per garantire una leggibilità immediata a colpo d'occhio."
        },
        {
          "title": "Storytelling narrativo con i dati",
          "text": "Aiutami a trasformare questi dati in una narrazione chiara e coinvolgente per una presentazione.\n\nRisultanze chiave: [elenca 3-5 insight principali emersi dall'analisi]\nDestinatari: [es. stakeholder non tecnici, dirigenti C-level]\nObiettivo della presentazione: [es. ottenere l'approvazione per investire nel miglioramento della retention]\n\nElabora una struttura narrativa che esordisca con l'insight più rilevante, lo sostenga con evidenze numeriche e si concluda con una raccomandazione azionabile. Mantieni il testo sintetico e privo di gergo tecnico."
        },
        {
          "title": "Annotazioni per un grafico",
          "text": "Aiutami a scrivere annotazioni per questo grafico in modo che risulti autoesplicativo.\n\nTipo di grafico: [es. grafico a linee]\nCosa rappresenta: [es. fatturato mensile degli ultimi 2 anni]\nMomenti salienti da evidenziare: [es. lancio di prodotto a marzo, variazione prezzi ad agosto, flessione a dicembre]\nDestinatari: [es. investitori in un pitch deck]\n\nScrivi 3-5 annotazioni brevi e incisive, accompagnate da un titolo e un sottotitolo di una riga per il grafico."
        }
      ]
    },
    {
      "cat": "Pulizia dei dati",
      "prompts": [
        {
          "title": "Checklist per pulizia dati",
          "text": "Genera una checklist esaustiva per la pulizia del mio dataset.\n\nDescrizione del dataset: [descrivi colonne, tipi di dati, sorgente e ambito]\nProblemi già riscontrati: [elenca eventuali criticità note, es. righe duplicate, formati data disomogenei, valori mancanti in colonne critiche]\nUtilizzo finale: [es. addestramento di un modello di machine learning, alimentazione di una dashboard]\n\nOrganizza la checklist in ordine di priorità e specifica quali controlli effettuare e come correggere ciascuna anomalia."
        },
        {
          "title": "Strategia per valori mancanti",
          "text": "Aiutami a definire il trattamento più appropriato per i valori mancanti (missing values) nel mio dataset.\n\nColonna con valori mancanti: [nome colonna e cosa rappresenta]\nPercentuale di dati mancanti: [es. 18%]\nTipo di dato: [es. numerico, categorico, data/ora]\nUtilizzo della colonna a valle: [es. variabile predittiva in un modello di regressione]\n\nConfronta le possibili opzioni (eliminazione delle righe, imputazione con media/mediana/moda, imputazione basata su modelli, valorizzazione come categoria a parte) e raccomanda l'approccio ottimale motivando la scelta."
        },
        {
          "title": "Rilevamento outlier",
          "text": "Aiutami a rilevare e gestire i valori anomali (outlier) nel mio dataset.\n\nColonna: [nome della colonna e cosa rappresenta]\nTipo di dato: [numerico / data e ora]\nStatistiche di base: [es. min: 0, max: 99.000, media: 450, mediana: 380, deviazione standard: 1.200]\nContesto: [es. valore dell'ordine in euro; cifre molto alte potrebbero rappresentare ordini all'ingrosso legittimi o errori nei dati]\n\nSuggerisci metodi di rilevamento adatti (IQR, z-score, Isolation Forest, ecc.), fornisci il codice in [Python/SQL] e consiglia come trattare gli outlier confermati."
        },
        {
          "title": "Standardizzazione dati non uniformi",
          "text": "Aiutami a standardizzare valori disomogenei presenti in questa colonna.\n\nNome colonna: [es. paese]\nEsempio di valori disomogenei: [es. 'Italia', 'IT', 'ITA', 'italia', 'Italy']\nFormato di output desiderato: [es. codici paese ISO 3166-1 alpha-2]\nStrumento: [es. Python pandas, SQL, dbt]\n\nScrivi il codice per mappare e standardizzare questi valori, gestire i casi particolari e segnalare le voci che non possono essere mappate in automatico."
        }
      ]
    },
    {
      "cat": "Python & R",
      "prompts": [
        {
          "title": "Pipeline dati con pandas",
          "text": "Scrivi una pipeline di elaborazione dati con pandas per la seguente attività.\n\nInput: [descrivi la sorgente dati, es. un file CSV con colonne: user_id, event_type, timestamp, revenue]\nTrasformazioni richieste:\n1. [es. filtrare solo gli eventi di acquisto]\n2. [es. aggregare i ricavi per utente su base mensile]\n3. [es. calcolare il tasso di crescita mese su mese]\nOutput: [descrivi il risultato atteso, es. un DataFrame con una riga per utente per mese]\n\nScrivi codice pulito, leggibile e ben commentato. Utilizza il method chaining dove contribuisce alla chiarezza."
        },
        {
          "title": "Visualizzazione con matplotlib/seaborn",
          "text": "Scrivi codice Python per creare la seguente visualizzazione dati.\n\nTipo di grafico: [es. heatmap, grafico a barre raggruppate, serie temporale con intervallo di confidenza]\nDati: [descrivi la struttura del DataFrame, es. colonne: mese, categoria, valore]\nRequisiti stilistici: [es. sfondo scuro, palette accessibile per daltonici, assenza di bordi del grafico]\nOutput: [es. salvataggio in PNG a 300 DPI]\n\nUsa matplotlib e/o seaborn. Aggiungi titolo, etichette degli assi e legenda ben formattati. Rendi il grafico pronto per la pubblicazione."
        },
        {
          "title": "Idee per Feature Engineering",
          "text": "Suggerisci idee di feature engineering per il mio dataset di machine learning.\n\nTarget di predizione: [es. se un utente abbandonerà il servizio nei prossimi 30 giorni]\nFeature grezze disponibili: [elencale con i rispettivi tipi, es. signup_date (data), last_login (data), num_sessions (int), plan_type (categorico)]\nGranularità dei dati: [es. una riga per utente]\n\nSuggerisci 10-15 feature derivate, spiega l'intuizione alla base di ciascuna e fornisci il relativo codice pandas per generarle."
        },
        {
          "title": "Script di validazione dati",
          "text": "Scrivi uno script Python per la validazione della qualità del mio dataset.\n\nDataset: [descrivi colonne, tipi di dati e sorgente]\nRegole di validazione da verificare:\n1. [es. user_id non deve contenere valori nulli e deve essere univoco]\n2. [es. event_date deve essere compresa tra 2020-01-01 e la data odierna]\n3. [es. revenue deve essere >= 0]\n4. [es. status deve appartenere a: active, inactive, pending]\n\nLo script deve stampare un riepilogo delle violazioni riscontrate, senza bloccarsi al primo errore. Usa pandas o Great Expectations."
        }
      ]
    },
    {
      "cat": "Reporting e documentazione",
      "prompts": [
        {
          "title": "Executive summary dai dati",
          "text": "Scrivi un executive summary basato sulle seguenti evidenze di dati.\n\nContesto: [es. revisione delle performance del primo trimestre 2026 per un prodotto SaaS]\nMetriche chiave:\n- [metrica 1]: [valore e variazione rispetto al periodo precedente]\n- [metrica 2]: [valore e variazione]\n- [metrica 3]: [valore e variazione]\nEventi rilevanti: [es. rilascio della funzionalità X a febbraio, perdita di un cliente strategico a marzo]\n\nScrivi un executive summary di 150-200 parole. Esordisci con l'insight principale, sii trasparente sulle criticità e chiudi con le 2-3 priorità per il prossimo trimestre."
        },
        {
          "title": "Report settimanale delle metriche",
          "text": "Scrivi un report settimanale conciso per i seguenti indicatori numerici.\n\nTeam / prodotto: [es. Growth team, applicazione mobile]\nSettimana: [es. settimana del 17 marzo 2026]\nMetriche della settimana:\n- [metrica]: [valore] vs [valore settimana precedente]\n- [metrica]: [valore] vs [valore settimana precedente]\nSuccessi e punti salienti: [traguardi o eventi rilevanti]\nCriticità: [flessioni o problemi riscontrati]\n\nFormatta il testo come un breve aggiornamento per Slack o email: 3-5 punti elenco, linguaggio diretto e privo di gergo. Evidenzia gli elementi che richiedono attenzione immediata."
        },
        {
          "title": "Sintesi dei risultati di un A/B test",
          "text": "Scrivi un riepilogo chiaro dei risultati del mio A/B test per un pubblico non tecnico.\n\nNome del test: [es. Nuovo flusso di checkout]\nIpotesi: [es. Semplificare il checkout a 2 passaggi aumenterà il tasso di conversione]\nGruppo di controllo vs variante: [descrivi la modifica introdotta]\nRisultati:\n- Metrica primaria: [es. tasso di conversione] — Controllo: [X%], Variante: [Y%], incremento relativo: [Z%]\n- Significatività statistica: [es. p=0,03, IC 95%: da +1,2% a +4,8%]\n- Metriche secondarie: [eventuali metriche di controllo (guardrail) e relativi esiti]\nDurata del test: [es. 14 giorni, 25.000 utenti per gruppo]\n\nSpiega il significato concreto dei risultati, se procedere con il rilascio della modifica ed eventuali limitazioni da tenere presenti."
        },
        {
          "title": "Documentazione Data Dictionary",
          "text": "Redigi un dizionario dei dati (data dictionary) per la seguente tabella o dataset.\n\nNome tabella: [es. orders]\nColonne:\n- [nome_colonna]: [tipo di dato, es. INT] — [breve descrizione del contenuto]\n- [nome_colonna]: [tipo di dato] — [descrizione]\n- [aggiungi altre colonne se necessario]\nDestinatari: [es. nuovi data analyst che entrano nel team]\n\nPer ciascuna colonna includi: nome, tipo di dato, descrizione, valori di esempio, ammissibilità di valori nulli ed eventuali particolarità o avvertenze note. Impagina il tutto in una tabella markdown chiara e ordinata."
        }
      ]
    }
  ],
  "design": [
    {
      "cat": "Revisione UI",
      "prompts": [
        {
          "title": "Critica di design dell'interfaccia UI",
          "text": "Agisci come senior product designer ed esamina questo design di interfaccia (UI):\n\n[descrivi la schermata o incolla una descrizione/screenshot]\n\nValuta: gerarchia visiva, spaziature, tipografia, uso del colore e coerenza complessiva. Sii specifico su cosa migliorare e perché."
        },
        {
          "title": "Checklist per audit di accessibilità",
          "text": "Esegui un audit di accessibilità su questa interfaccia in conformità alle linee guida WCAG 2.1 AA:\n\n[descrivi l'interfaccia o elencane i componenti]\n\nVerifica: contrasto cromatico, navigazione da tastiera, stati di focus, compatibilità con screen reader, dimensioni delle aree di tocco (touch target) e corretto utilizzo degli attributi ARIA. Elenca i problemi rilevati ordinati per gravità."
        },
        {
          "title": "Revisione responsività mobile",
          "text": "Revisiona questo design UI per verificarne la responsività su dispositivi mobili:\n\n[descrivi il layout o elenca i componenti]\n\nIndividua: elementi che non scalano correttamente, aree cliccabili/touch troppo piccole, contenuti soggetti a overflow e problemi di spaziatura su schermi ridotti. Suggerisci correzioni puntuali."
        },
        {
          "title": "Analisi della gerarchia visiva",
          "text": "Analizza la gerarchia visiva di questa interfaccia:\n\n[descrivi il layout della schermata e i relativi elementi]\n\nIdentifica: dove si posa per primo lo sguardo dell'utente, se la gerarchia visiva rispecchia l'obiettivo d'uso prefissato e quali modifiche migliorerebbero la scansionabilità e la comprensione immediata della schermata."
        }
      ]
    },
    {
      "cat": "Ricerca UX",
      "prompts": [
        {
          "title": "Guida per interviste con gli utenti",
          "text": "Scrivi una traccia per interviste utente per approfondire [argomento o funzionalità, es. 'come le persone gestiscono le proprie finanze personali'].\n\nIncludi: 3 domande introduttive (warm-up), 8–10 domande centrali e 2 domande conclusive di chiusura. Formula domande aperte evitando di influenzare o guidare le risposte dell'intervistato."
        },
        {
          "title": "Crea una user persona",
          "text": "Crea una user persona realistica per [prodotto o funzionalità].\n\nUtente target: [descrivi a grandi linee, es. 'graphic designer freelance, 28–40 anni']\n\nIncludi: nome, età, occupazione, obiettivi, frustrazioni/pain point, comportamenti chiave e una citazione rappresentativa. Rendila credibile e direttamente utilizzabile dal team di progetto."
        },
        {
          "title": "Script per test di usabilità",
          "text": "Scrivi uno script per un test di usabilità relativo a [funzionalità o flusso, es. 'il flusso di checkout'].\n\nIncludi: introduzione del moderatore, informativa sul consenso, 4–6 scenari di attività contestualizzati e domande di approfondimento da porre al termine di ogni compito. Evita di svelare o suggerire il percorso corretto."
        },
        {
          "title": "Progettazione questionario di feedback",
          "text": "Progetta un sondaggio per raccogliere feedback dagli utenti su [funzionalità, es. 'il nostro nuovo flusso di onboarding'].\n\nIncludi: 1 domanda NPS o CSAT, 4–6 domande a scala di valutazione o a scelta multipla e 2 domande aperte. Assicurati che sia compilabile in meno di 3 minuti e suggerisci l'ordine ottimale delle domande."
        }
      ]
    },
    {
      "cat": "Design System",
      "prompts": [
        {
          "title": "Convenzione di denominazione dei componenti",
          "text": "Proponi una convenzione di naming per i componenti UI del nostro design system.\n\nContesto: [es. 'Utilizziamo React e Figma e disponiamo di una combinazione di componenti atomici e composti']\n\nTratta: nomi dei componenti, denominazione delle varianti, convenzioni per le proprietà (props) e organizzazione di file e livelli in Figma. Fornisci esempi pratici per Button, Modal e Form Field."
        },
        {
          "title": "Documentazione per componente UI",
          "text": "Scrivi una documentazione chiara e completa per questo componente UI:\n\nComponente: [nome del componente, es. 'Notifica Toast']\nProp/varianti: [elencale]\nContesto d'uso: [dove viene utilizzato]\n\nIncludi: descrizione generale, quando utilizzarlo e quando evitarlo, tabella delle props, note sull'accessibilità ed esempio pratico di implementazione."
        },
        {
          "title": "Struttura dei design token",
          "text": "Proponi una struttura per i design token di [nome del prodotto o del design system].\n\nColori del brand: [elenca i colori principali]\nTipografia: [elenca i font o la scala tipografica]\nContesto: [es. applicazione web, app mobile o entrambi]\n\nOrganizza i token per: colore, tipografia, spaziature, raggio dei bordi, ombre e animazioni (motion). Mostra sia esempi di token primitivi sia di token semantici."
        },
        {
          "title": "Audit della libreria di pattern",
          "text": "Aiutami a revisionare la nostra libreria di componenti e pattern per individuare incoerenze.\n\nEcco l'elenco dei nostri componenti e delle relative varianti attuali:\n\n[incolla l'elenco dei componenti]\n\nIdentifica: pattern duplicati che assolvono al medesimo scopo, incongruenze nei nomi, componenti riutilizzabili mancanti ed elementi eccessivamente specifici che ostacolano il riutilizzo."
        }
      ]
    },
    {
      "cat": "Wireframing e flussi utente",
      "prompts": [
        {
          "title": "Mappa del flusso utente per funzionalità",
          "text": "Traccia il flusso utente per [funzionalità, es. 'reimpostazione della password'].\n\nObiettivo dell'utente: [descrivi cosa desidera ottenere l'utente]\nPunto di ingresso: [da dove inizia il percorso l'utente]\n\nElenca ciascun passaggio compiuto dall'utente, i bivi decisionali e i percorsi alternativi in caso di errore o casi limite. Formatta il tutto come un flusso numerato comprensivo di diramazioni ove necessario."
        },
        {
          "title": "Architettura dell'informazione per sezione",
          "text": "Proponi l'architettura dell'informazione per [sezione dell'applicazione, es. 'l'area impostazioni di una dashboard SaaS'].\n\nTipologie di utenti: [elencale se multiple]\nTask principali svolti dagli utenti: [elenca 4–6 task]\n\nSuggerisci una struttura di navigazione con sezioni di primo livello, sottosezioni, contenuti e azioni disponibili all'interno di ciascuna. Motiva i criteri di raggruppamento adottati."
        },
        {
          "title": "Proposta struttura di navigazione",
          "text": "Proponi un'architettura di navigazione per [prodotto, es. 'uno strumento di project management B2B'].\n\nFunzionalità chiave: [elenca le funzionalità principali]\nRuoli utente: [elenca i profili utente, se applicabile]\n\nConsiglia: voci di navigazione primaria, navigazione secondaria e gestione degli accessi differenziati per ruolo. Considera pattern adatti sia alla barra laterale su desktop sia alla barra di navigazione inferiore su mobile."
        },
        {
          "title": "Progettazione flusso di onboarding",
          "text": "Progetta un percorso di onboarding per [prodotto, es. 'un'app mobile per il monitoraggio delle abitudini'].\n\nObiettivo del nuovo utente: [cosa deve completare per percepire il primo valore]\nPassaggi di configurazione obbligatori: [elenca le azioni minime necessarie, es. 'creare la prima abitudine']\n\nProponi: sequenza delle schermate, informazioni da richiedere subito vs. da rimandare, indicatori di avanzamento e gestione delle opzioni 'salta' o 'completa più tardi'. Riduci al minimo il tempo necessario per sperimentare il primo valore (time-to-value)."
        }
      ]
    },
    {
      "cat": "Microcopy e testi UI",
      "prompts": [
        {
          "title": "Scrivi messaggi di errore",
          "text": "Scrivi messaggi di errore chiari e orientati all'utente per i seguenti scenari:\n\n[elenca gli scenari di errore, es. 'formato email non valido', 'file troppo pesante', 'sessione scaduta']\n\nPer ciascuno scrivi: titolo dell'errore, spiegazione semplice di cosa è andato storto e l'azione concreta che l'utente deve compiere per risolvere. Tono: [es. amichevole, professionale, essenziale]."
        },
        {
          "title": "Testi per schermate vuote (Empty State)",
          "text": "Scrivi testi per schermate vuote (empty state) per i seguenti stati dell'interfaccia:\n\n[elenca gli stati, es. 'nessun risultato di ricerca trovato', 'nessuna notifica presente', 'nessun file caricato']\n\nPer ciascuno fornisci: un titolo, una spiegazione di 1–2 frasi e una Call to Action (CTA) se appropriata. Tono: [es. incoraggiante, neutro, informale]. Evita formule banali o riempitive come 'Niente da vedere qui'."
        },
        {
          "title": "Varianti di etichette per pulsanti e CTA",
          "text": "Scrivi varianti di etichette per pulsanti e CTA per [azione o funzionalità, es. 'attivazione della prova gratuita'].\n\nContesto: [dove compare il pulsante, es. 'pagina dei prezzi', 'empty state', 'intestazione di una modale']\nTono: [es. diretto, focalizzato sul beneficio, a basso attrito]\n\nFornisci 6–8 opzioni classificate dalla più assertiva alla più discreta. Illustra i pro e i contro di ciascuna formulazione."
        },
        {
          "title": "Tooltip e testi di aiuto",
          "text": "Scrivi tooltip e testi di supporto contestuale (helper text) per questi elementi di interfaccia:\n\n[elenca gli elementi, es. 'campo chiave API', 'selettore ciclo di fatturazione', 'impostazione frequenza notifiche']\n\nPer ciascuno scrivi: un tooltip sintetico (sotto le 15 parole) e un testo di aiuto opzionale più esteso per l'integrazione inline. Privilegia sempre la chiarezza rispetto all'originalità fine a se stessa."
        }
      ]
    },
    {
      "cat": "Presentazione e stakeholder",
      "prompts": [
        {
          "title": "Razionale delle scelte di design",
          "text": "Aiutami a scrivere una motivazione chiara e solida per questa scelta di design:\n\nDecisione: [descrivi la decisione presa, es. 'Siamo passati da un layout a schede a una pagina unica scorrevole']\nContesto: [quale problema risolve o quali dati/insight hanno guidato la scelta]\nAlternative valutate: [elencane 1–2]\n\nScrivi una spiegazione concisa da condividere con gli stakeholder che tratti: il problema, la decisione adottata, le motivazioni per cui è la soluzione migliore e gli eventuali compromessi accettati."
        },
        {
          "title": "Scaletta per design review",
          "text": "Crea una scaletta per una presentazione di design review per [nome della funzionalità o del progetto].\n\nDestinatari: [es. 'team di prodotto + responsabili ingegneria']\nObiettivo della sessione: [es. 'ottenere l'approvazione finale prima dell'handoff' oppure 'raccogliere feedback sulla direzione concettuale']\nFase del progetto: [es. 'concept iniziale', 'mockup avanzati', 'design definitivi']\n\nIncludi: sezioni suggerite, contenuti da illustrare per ciascuna, allocazione dei tempi e come orientare e circoscrivere la richiesta di feedback."
        },
        {
          "title": "Narrazione del confronto prima/dopo",
          "text": "Scrivi una narrazione per illustrare un confronto prima/dopo di questa riprogettazione:\n\nPrima: [descrivi il design precedente e le sue criticità]\nDopo: [descrivi il nuovo design e le modifiche apportate]\nMetriche o feedback degli utenti (se disponibili): [incolla se presenti]\n\nScrivi una storia sintetica utilizzabile in un case study o in un aggiornamento per gli stakeholder, che metta in luce il problema iniziale, l'intuizione che ha guidato il cambiamento e l'impatto finale generato."
        },
        {
          "title": "Sintesi dei feedback degli stakeholder",
          "text": "Aiutami a sintetizzare ed elaborare questi feedback raccolti dagli stakeholder durante una design review:\n\n[incolla note grezze o commenti ricevuti]\n\nOrganizza il tutto per: temi ricorrenti, richieste specifiche immediatamente attuabili, aspetti che necessitano di chiarimento ed eventuali indicazioni tra loro contrastanti. Evidenzia gli elementi che si pongono in contrasto con le evidenze emerse dalla ricerca utente o con i principi fondamentali di design."
        }
      ]
    }
  ],
  "student": [
    {
      "cat": "Studio e apprendimento",
      "prompts": [
        {
          "title": "Guida allo studio per argomento",
          "text": "Crea una guida di studio esaustiva per [argomento].\n\nIncludi:\n- Concetti chiave e definizioni essenziali\n- Date, formule o nomi importanti da memorizzare\n- Errori concettuali comuni e fraintendimenti da evitare\n- Un riepilogo rapido da ripassare prima dell'esame\n\nLivello di approfondimento: [base / intermedio / avanzato]"
        },
        {
          "title": "Spiega concetto con analogie",
          "text": "Spiegami [concetto] utilizzando analogie semplici e quotidiane.\n\nSono uno studente di [anno/livello] che studia [materia]. Ho compreso [concetto correlato] ma trovo difficoltà con questo argomento specifico.\n\nUtilizza almeno due analogie differenti e verifica la mia comprensione al termine con una breve domanda."
        },
        {
          "title": "Genera flashcard domanda e risposta",
          "text": "Genera 10 coppie di domande e risposte per flashcard sul seguente argomento:\n\n[argomento o incolla qui i tuoi appunti]\n\nFormatta ogni card come:\nD: [domanda]\nR: [risposta sintetica]\n\nAlterna domande di memoria mnemonica, di comprensione concettuale e di applicazione pratica."
        },
        {
          "title": "Riassumi capitolo di manuale",
          "text": "Riassumi il seguente capitolo di testo in appunti chiari e sintetici.\n\n[incolla qui il testo del capitolo]\n\nStruttura il riassunto con:\n- Concetto principale (1–2 frasi)\n- Punti chiave (elenco puntato)\n- Termini da conoscere (con relative definizioni)\n- Argomenti ad alta probabilità di comparire all'esame"
        }
      ]
    },
    {
      "cat": "Redazione saggi e testi",
      "prompts": [
        {
          "title": "Generatore scaletta per saggio",
          "text": "Genera una scaletta dettagliata per un saggio/tema sulla base della seguente traccia:\n\n[traccia del saggio]\n\nMateria/corso: [nome del corso]\nNumero di parole target: [es. 1500 parole]\nStile argomentativo: [persuasivo / analitico / comparativo / espositivo]\n\nIncludi una tesi chiara (thesis statement), frasi guida tematiche per ciascun paragrafo del corpo del testo e argomentazioni di supporto."
        },
        {
          "title": "Laboratorio per la tesi del saggio",
          "text": "Aiutami a formulare una tesi (thesis statement) solida ed efficace per il mio saggio.\n\nArgomento: [argomento]\nLa mia idea iniziale o tesi di massima: [descrivi la tua idea generale]\nTipologia di elaborato: [argomentativo / analitico / di ricerca]\n\nProponi tre diverse formulazioni della tesi spaziando da un approccio prudente a uno più audace, con una breve nota sul punto di forza di ciascuna."
        },
        {
          "title": "Rafforza la mia argomentazione",
          "text": "Esamina questo paragrafo del mio saggio e aiutami a renderne l'argomentazione più incisiva.\n\n[incolla il paragrafo qui]\n\nIn particolare:\n1. La tesi sostenuta è chiara e difendibile?\n2. Le evidenze a supporto sono ben integrate nel testo?\n3. L'analisi spiega chiaramente l'importanza e le implicazioni del punto sollevato?\n\nRiscrivi il paragrafo integrando i miglioramenti e motiva ogni modifica apportata."
        },
        {
          "title": "Scrivi paragrafo introduttivo",
          "text": "Scrivi un paragrafo introduttivo coinvolgente per il mio saggio.\n\nArgomento: [argomento]\nTesi: [la tua tesi]\nDestinatari: [es. docente, lettore generale]\nTono di voce: [accademico / semi-formale]\n\nInizia con un gancio d'impatto, fornisci un breve contesto introduttivo e chiudi con l'enunciazione della tesi. Proponi poi una formula alternativa per il gancio iniziale."
        }
      ]
    },
    {
      "cat": "Metodologia e ricerca",
      "prompts": [
        {
          "title": "Affinamento della domanda di ricerca",
          "text": "Aiutami a perfezionare e mettere a fuoco la mia domanda di ricerca.\n\nDomanda attuale provvisoria: [la tua bozza di domanda]\nAmbito disciplinare: [campo di studio]\nAmbito e portata del lavoro: [es. tesi di laurea triennale, 3.000 parole, lavoro semestrale]\n\nRisulta troppo ampia, troppo ristretta o ben calibrata? Proponi tre versioni perfezionate spiegando perché ciascuna è più solida."
        },
        {
          "title": "Sintesi della rassegna della letteratura",
          "text": "Riassumi i temi e i dibattiti principali presenti nella letteratura accademica su [argomento].\n\nContesto: Sto scrivendo un [tipo di elaborato] per [corso/livello di studi].\n\nTratta:\n- Le principali correnti di pensiero o quadri teorici di riferimento\n- I punti di accordo e i disaccordi chiave nel settore\n- Le lacune e i limiti nella ricerca esistente\n- Parole chiave consigliate per la ricerca bibliografica di ulteriori fonti"
        },
        {
          "title": "Individua gap nella ricerca",
          "text": "Sto svolgendo una ricerca su [argomento]. Sulla base delle fonti e degli appunti seguenti, aiutami a individuare le lacune nella ricerca esistente che il mio lavoro potrebbe colmare:\n\n[incolla qui appunti o abstract delle fonti]\n\nQuali prospettive risultano poco esplorate? Quali interrogativi restano ancora aperti? Cosa costituirebbe un contributo originale e innovativo?"
        },
        {
          "title": "Voce per bibliografia annotata",
          "text": "Scrivi una voce di bibliografia annotata per la seguente fonte accademica.\n\nCitazione bibliografica: [citazione completa]\nSintesi della fonte: [incolla l'abstract o i passaggi chiave]\nStile citazionale: [APA / MLA / Chicago]\n\nL'annotazione deve includere: una sintesi concisa (2–3 frasi), una valutazione critica di autorevolezza e pertinenza, e le modalità con cui potrei valorizzare questa fonte nel mio elaborato."
        }
      ]
    },
    {
      "cat": "Matematica e scienze",
      "prompts": [
        {
          "title": "Spiega concetto matematico passo dopo passo",
          "text": "Spiegami [concetto matematico] passo dopo passo come se lo vedessi per la prima volta.\n\nIl mio livello attuale: [es. algebra delle superiori, analisi del primo anno universitario]\nDove mi blocco: [descrivi il passaggio critico]\n\nIllustra il concetto attraverso un esercizio guidato e risolto, poi proponimi un problema leggermente più impegnativo da provare a risolvere da solo. Mostrami la soluzione dettagliata al termine."
        },
        {
          "title": "Generatore di esercizi pratici",
          "text": "Genera 5 esercizi pratici su [argomento/concetto].\n\nLivello di difficoltà: [facile / medio / difficile]\nIl mio livello di studi: [es. chimica avanzata, fisica universitaria]\n\nPresenta prima i problemi senza soluzioni. Quindi, dopo una riga di separazione, fornisci le soluzioni dettagliate passaggio per passaggio per ciascun esercizio."
        },
        {
          "title": "Struttura per relazione di laboratorio",
          "text": "Aiutami a strutturare una relazione di laboratorio per il seguente esperimento.\n\nEsperimento: [descrivi cosa hai fatto]\nMateria: [es. biologia, chimica, fisica]\nLivello scolastico/accademico: [scuola superiore / università]\n\nFornisci la struttura standard delle sezioni (Titolo, Abstract, Introduzione, Materiali e Metodi, Risultati, Discussione, Conclusione) con punti elenco su cosa includere in ciascuna ed errori frequenti da evitare."
        },
        {
          "title": "Applicazione del metodo scientifico",
          "text": "Guidami nell'applicazione del metodo scientifico per indagare la seguente domanda:\n\nDomanda di ricerca: [la tua domanda]\nAmbito scientifico: [biologia / chimica / fisica / altro]\n\nPer ciascun passaggio — osservazione, ipotesi, progettazione sperimentale, raccolta dati, analisi e conclusione — spiega cosa dovrei fare e perché. Segnala eventuali implicazioni etiche se rilevanti."
        }
      ]
    },
    {
      "cat": "Apprendimento lingue",
      "prompts": [
        {
          "title": "Spiegazione grammaticale con esempi",
          "text": "Spiega questa regola grammaticale in [lingua] in modo chiaro e conciso.\n\nPunto grammaticale: [es. congiuntivo, forma passiva, uso delle particelle]\nIl mio livello: [A1 / A2 / B1 / B2 / C1]\n\nFornisci:\n- Una spiegazione chiara e semplice della regola\n- 5 frasi di esempio con traduzione a fronte\n- Gli errori più comuni commessi dagli studenti\n- Un breve esercizio pratico di verifica"
        },
        {
          "title": "Vocabolario nel contesto",
          "text": "Aiutami a memorizzare i seguenti vocaboli in [lingua] all'interno del loro contesto d'uso.\n\nTermini: [elenca le parole qui]\n\nPer ciascuna parola fornisci:\n- Definizione in italiano\n- Frase di esempio in [lingua] con traduzione a fronte\n- Indicazione sul registro linguistico (formale / informale / colloquiale / gergale)\n- Una combinazione frequente (collocation) o espressione comune in cui compare\n\nCrea infine un breve paragrafo che utilizzi tutte le parole in modo spontaneo e naturale."
        },
        {
          "title": "Traduzione con note di sfumatura",
          "text": "Traduci il testo seguente da [lingua di partenza] a [lingua di arrivo].\n\n[incolla il testo qui]\n\nDopo la traduzione, aggiungi note di approfondimento sulle sfumature linguistiche che illustrino:\n- Parole o modi di dire che non hanno una traduzione diretta\n- Riferimenti culturali che necessitano di contesto interpretativo\n- Traduzioni alternative nei passaggi in cui il significato risulta ambiguo\n- Differenze di registro o di tono tra il testo originale e la resa tradotta"
        },
        {
          "title": "Dialogo per fare pratica di conversazione",
          "text": "Scrivi un dialogo realistico in [lingua] per esercitarsi nel seguente scenario:\n\nScenario: [es. ordinare al ristorante, chiedere indicazioni stradali, sostenere un colloquio di lavoro]\nIl mio livello: [A1 / A2 / B1 / B2 / C1]\n\nIncludi:\n- Il dialogo completo tra i due interlocutori\n- La traduzione in italiano sotto ciascuna battuta\n- Note di vocabolario per i termini e le espressioni chiave\n- Due domande di approfondimento che potrei utilizzare per proseguire la conversazione"
        }
      ]
    },
    {
      "cat": "Preparazione esami",
      "prompts": [
        {
          "title": "Domande per simulazione d'esame",
          "text": "Genera 10 domande per simulare un esame su [materia/argomento].\n\nFormato d'esame: [scelta multipla / risposta sintetica / saggio breve / misto]\nLivello: [es. scuola secondaria, maturità, primo anno universitario]\nArgomenti prioritari: [elenca gli argomenti chiave]\n\nAl termine delle domande, inserisci una griglia di correzione con brevi spiegazioni per ciascuna risposta esatta."
        },
        {
          "title": "Spiega risposta errata",
          "text": "Ho sbagliato questa domanda d'esame. Aiutami a comprendere il motivo dell'errore.\n\nDomanda: [incolla la domanda]\nLa mia risposta: [cosa hai risposto o scelto]\nRisposta corretta: [la risposta esatta]\n\nSpiega:\n1. Perché la mia risposta è errata\n2. Perché la risposta corretta è esatta\n3. Il concetto teorico di base che devo approfondire e comprendere\n4. Una domanda simile per testare subito la mia comprensione"
        },
        {
          "title": "Tecniche di memoria per argomento",
          "text": "Forniscimi tecniche di memorizzazione efficaci per assimilare [argomento/nozioni].\n\nContenuti da memorizzare: [incolla contenuti, elenco o concetti]\nData dell'esame: [tra quanti giorni/settimane]\nStile di apprendimento preferito: [visivo / verbale / basato su schemi e pattern / indifferente]\n\nProponi almeno tre tecniche distinte (es. acronimi e mnemotecniche, metodo dei loci/palazzo della memoria, chunking) con esempi concreti applicati a questo specifico contenuto."
        },
        {
          "title": "Checklist di ripasso dell'ultimo minuto",
          "text": "Crea una checklist di ripasso dell'ultimo minuto per il mio prossimo esame.\n\nMateria: [materia]\nTempo rimanente prima dell'esame: [es. 24 ore, 3 giorni]\nArgomenti trattati: [elenca gli argomenti principali]\nFormato dell'esame: [scelta multipla / saggio / risoluzione di problemi]\n\nStabilisci le priorità su cosa ripassare per primo, evidenzia i concetti con la resa più alta in termini di punteggio e inserisci un breve elenco degli errori comuni da evitare durante la prova."
        }
      ]
    }
  ],
  "productivity": [
    {
      "cat": "Pianificazione",
      "prompts": [
        {
          "title": "Pianificazione settimanale",
          "text": "Aiutami a pianificare la mia settimana. Ecco i miei task, le scadenze e gli impegni:\n\n[elenca tutte le tue attività]\n\nOrganizzali in una pianificazione giornaliera, segnala eventuali sovrapposizioni e suggerisci cosa rimandare. Assegna le priorità in base all'impatto."
        },
        {
          "title": "Scomponi un grande progetto",
          "text": "Ho un progetto complesso da suddividere in parti gestibili:\n\nProgetto: [descrivi il progetto e il suo obiettivo]\nScadenza: [data]\nDimensioni del team: [numero di persone o da solo]\n\nCrea una scomposizione per fasi con milestone, dipendenze e stima del tempo necessario per ciascuna attività."
        },
        {
          "title": "Matrice delle priorità (urgente/importante)",
          "text": "Aiutami a costruire una matrice delle priorità per il mio carico di lavoro attuale. Suddividi ogni attività in: Fai subito, Pianifica, Delega o Elimina.\n\nLe mie attività:\n[elenca qui le tue attività]\n\nPer ciascuna, spiega brevemente il criterio di categorizzazione adottato."
        },
        {
          "title": "Definizione degli obiettivi trimestrali",
          "text": "Aiutami a fissare gli obiettivi per il prossimo trimestre. Il mio ruolo è [titolo della posizione/funzione] e il mio obiettivo principale è [descrivi cosa intendi raggiungere].\n\nDefinisci 3-5 obiettivi SMART con metriche di successo, azioni chiave per ciascun obiettivo e un metodo semplice per monitorare i progressi settimanalmente."
        }
      ]
    },
    {
      "cat": "Riunioni e meeting",
      "prompts": [
        {
          "title": "Template per ordine del giorno della riunione",
          "text": "Crea un ordine del giorno (agenda) strutturato per questa riunione:\n\nTipo di riunione: [es. allineamento settimanale, avvio progetto/kickoff, retrospettiva]\nDurata: [tempo]\nPartecipanti: [ruoli o nomi]\nObiettivo: [cosa deve essere deciso o completato]\n\nIncludi intervalli temporali dedicati per ciascuna sezione e un risultato finale atteso chiaro."
        },
        {
          "title": "Riassumi gli appunti della riunione",
          "text": "Riassumi questi appunti della riunione in un formato chiaro e facilmente scansionabile con tre sezioni: Decisioni chiave, Azioni da intraprendere (con responsabili e scadenze) e Questioni aperte.\n\nAppunti grezzi:\n[incolla qui i tuoi appunti]"
        },
        {
          "title": "Estrai le azioni da intraprendere dagli appunti",
          "text": "Estrai tutte le azioni operative (action item) da questi appunti di riunione. Per ciascuna identifica: l'attività da svolgere, il responsabile (se indicato) e la data di scadenza (se indicata). Formatta il tutto come un elenco numerato.\n\nAppunti della riunione:\n[incolla gli appunti qui]"
        },
        {
          "title": "Email di follow-up post riunione",
          "text": "Scrivi un'email di follow-up sintetica per una riunione appena conclusa.\n\nArgomento della riunione: [argomento]\nPartecipanti: [nomi o ruoli]\nDecisioni chiave prese: [elencale]\nAzioni da intraprendere: [elenco con relativi responsabili]\nProssima riunione: [data o da definire]\n\nMantieni il testo breve e professionale."
        }
      ]
    },
    {
      "cat": "Email e messaggi",
      "prompts": [
        {
          "title": "Bozza di email professionale",
          "text": "Scrivi un'email professionale sulla base dei seguenti dettagli:\n\nDestinatario: [destinatario e suo ruolo]\nContesto: [informazioni di background sulla situazione]\nMessaggio principale o richiesta: [cosa devi comunicare]\nTono: [es. formale, cordiale, diretto]\n\nMantieni il testo conciso e concludi con un chiaro passo successivo."
        },
        {
          "title": "Rispondi a un'email delicata o complessa",
          "text": "Aiutami a rispondere a questa email in modo professionale ed equilibrato.\n\nL'email ricevuta:\n[incolla qui l'email]\n\nLa mia situazione: [aggiungi qualsiasi contesto rilevante]\nRisultato desiderato: [cosa desideri che accada dopo l'invio della risposta]\n\nPrepara una bozza di risposta ferma ma costruttiva."
        },
        {
          "title": "Modelli di email riutilizzabili",
          "text": "Crea [numero] modelli di email riutilizzabili per [caso d'uso, es. check-in con clienti, aggiornamenti sullo stato di avanzamento del progetto, onboarding di nuovi contatti].\n\nOgni modello deve includere un oggetto, un corpo del messaggio con [segnaposto] per la personalizzazione e una call to action. Mantieni ciascun modello sotto le 150 parole."
        },
        {
          "title": "Rifiuta una richiesta con garbo",
          "text": "Aiutami a scrivere un'email cortese ma inequivocabile per rifiutare questa richiesta:\n\nLa richiesta: [descrivi cosa è stato chiesto]\nMotivo del rifiuto: [breve spiegazione sincera]\nRapporto con il mittente: [collega, cliente, responsabile, ecc.]\n\nSuggerisci un'alternativa o attenua il rifiuto ove opportuno. Mantieni il messaggio breve."
        }
      ]
    },
    {
      "cat": "Processo decisionale",
      "prompts": [
        {
          "title": "Framework per prendere decisioni",
          "text": "Devo prendere una decisione tra queste opzioni:\n\nOpzione A: [descrivi]\nOpzione B: [descrivi]\nOpzione C: [descrivi, o rimuovi se sono solo due]\n\nContesto: [cosa c'è in gioco, vincoli, tempistiche]\n\nValuta ogni opzione in base a: impatto, sforzo richiesto, rischio e reversibilità. Raccomanda l'opzione migliore motivando la scelta."
        },
        {
          "title": "Analisi pre-mortem",
          "text": "Esegui un'analisi pre-mortem su questo piano. Ipotizziamo che sia trascorso [6 mesi / 1 anno] da oggi e che il piano sia fallito completamente.\n\nIl piano: [descrivi il tuo piano o iniziativa]\n\nElenca le cause più probabili del fallimento, i segnali d'allarme da monitorare tempestivamente e le modifiche da apportare al piano fin da subito."
        },
        {
          "title": "Pro e contro con criteri ponderati",
          "text": "Aiutami a valutare questa decisione utilizzando criteri ponderati.\n\nDecisione: [cosa sto decidendo]\nOpzioni: [elenca le opzioni]\nCriteri importanti per me (assegna un'importanza da 1 a 5): [elenca i criteri, es. costo, rapidità, qualità, rischio]\n\nCostruisci una tabella di valutazione ponderata, assegna un punteggio a ciascuna opzione e raccomanda la scelta vincente."
        },
        {
          "title": "Analisi dell'impatto sugli stakeholder",
          "text": "Analizza l'impatto di questa decisione o cambiamento sugli stakeholder:\n\nLa decisione: [descrivila]\nStakeholder coinvolti: [elenca gruppi o persone]\n\nPer ciascuno stakeholder individua: in che modo è impattato (positivamente o negativamente), la sua reazione più probabile e cosa dovrei comunicare o fare per gestire al meglio la risposta."
        }
      ]
    },
    {
      "cat": "Comunicazione",
      "prompts": [
        {
          "title": "Scrivi aggiornamento sullo stato del progetto",
          "text": "Scrivi un aggiornamento sullo stato di avanzamento del progetto per [destinatari, es. direzione, team, cliente].\n\nProgetto: [nome e descrizione in una riga]\nStato: [in linea con i piani / a rischio / in ritardo]\nRisultati completati in questo periodo: [elenco]\nAttività pianificate per il prossimo periodo: [elenco]\nOstacoli o rischi: [elencali, oppure indica nessuno]\n\nMantieni il testo entro una pagina. Sii diretto e trasparente riguardo ai rischi."
        },
        {
          "title": "Spiega un concetto tecnico a un pubblico non tecnico",
          "text": "Spiega [concetto o termine tecnico] a una persona che non ha competenze tecniche. Usa un'analogia semplice, evita gerghi e tecnicismi e mantieni la spiegazione sotto le 150 parole. I destinatari sono [descrivili, es. dirigenti, clienti, team risorse umane]."
        },
        {
          "title": "Feedback per un membro del team",
          "text": "Aiutami a formulare un feedback chiaro e costruttivo per un membro del team.\n\nSituazione: [cosa è accaduto e quando]\nImpatto: [in che modo ha influenzato il team, il progetto o il risultato]\nComportamento da affrontare: [sii specifico, non rivolgerti alla persona in modo generico]\nCambiamento auspicato: [cosa vorresti che facesse diversamente]\n\nImposta il feedback utilizzando il modello SBI (Situazione, Comportamento, Impatto) e mantieni un tono supportivo e orientato alla crescita."
        },
        {
          "title": "Email di escalation",
          "text": "Scrivi un'email di escalation per una situazione bloccata o a rischio.\n\nProblema: [descrivi chiaramente il problema]\nImpatto in caso di mancata risoluzione: [tempistiche, rischi per il business o costi]\nCosa è già stato tentato: [azioni intraprese finora]\nDi cosa ho bisogno: [decisione, risorse o intervento di sblocco]\nDestinatario: [suo ruolo e relazione con il problema]\n\nSii diretto e orientato alla soluzione, senza assumere toni accusatori."
        }
      ]
    },
    {
      "cat": "Organizzazione personale",
      "prompts": [
        {
          "title": "Ottimizzazione della routine mattutina",
          "text": "Aiutami a progettare una routine mattutina efficace. Ecco la mia situazione attuale:\n\nOra della sveglia: [orario]\nTempo disponibile prima di iniziare a lavorare: [durata]\nRoutine attuale: [descrivila oppure indica nessuna]\nObiettivi che desidero favorire: [es. concentrazione, forma fisica, serenità, apprendimento]\nVincoli: [es. figli, tragitto casa-lavoro, spazi limitati]\n\nProgetta una routine realistica suddivisa in blocchi orari e spiega lo scopo di ogni singolo elemento."
        },
        {
          "title": "Progettazione registro delle abitudini (Habit Tracker)",
          "text": "Aiutami a progettare un habit tracker per le seguenti abitudini che intendo sviluppare:\n\nAbitudini: [elencale]\nFrequenza di tracciamento: [giornaliera / settimanale]\nFormato preferito: [semplice checklist, colonne su foglio di calcolo, spunti per diario, ecc.]\n\nPer ciascuna abitudine suggerisci un trigger (innesco), una versione minima indispensabile per le giornate no e una metrica per misurare i progressi."
        },
        {
          "title": "Template per la revisione settimanale",
          "text": "Crea un template di revisione settimanale da utilizzare ogni [giorno della settimana] per riflettere e pianificare.\n\nLe mie aree di focus principali: [es. progetti lavorativi, salute, relazioni, apprendimento]\nTempo a disposizione per la revisione: [durata]\n\nIncludi domande di riflessione, una sezione per annotare successi e insegnamenti appresi e una sezione di pianificazione per la settimana successiva. Rendilo pratico e rapido da compilare."
        },
        {
          "title": "Piano di apprendimento per una nuova competenza",
          "text": "Crea un piano di studio strutturato per [competenza che desidero apprendere].\n\nIl mio livello attuale: [principiante assoluto / qualche nozione di base / intermedio]\nTempo che posso dedicare: [ore a settimana]\nScadenza o data obiettivo: [data o flessibile]\nModalità di apprendimento preferita: [video, letture, progetti pratici, corsi, ecc.]\n\nSuddividi il piano in fasi con risorse specifiche, traguardi intermedi e un metodo per verificare i miei progressi in ogni fase."
        }
      ]
    }
  ],
  "legal": [
    {
      "cat": "Contratti e accordi",
      "prompts": [
        {
          "title": "Revisione contratto per clausole critiche",
          "text": "Esamina questo contratto e identifica eventuali campanelli d'allarme, clausole insolite o termini marcatamente sbilanciati. Segnala qualsiasi elemento che possa generare rischi o responsabilità legali significative:\n\n[incolla qui il testo del contratto]\n\nPer ogni criticità riscontrata, spiega il rischio correlato e suggerisci come migliorarla o riformularla."
        },
        {
          "title": "Sintesi dei termini chiave del contratto",
          "text": "Riassumi i termini chiave di questo contratto in un linguaggio chiaro e comprensibile. Tratta: parti coinvolte, durata, condizioni di pagamento, obblighi di ciascuna parte, condizioni di recesso e risoluzione ed eventuali limitazioni rilevanti:\n\n[incolla qui il testo del contratto]"
        },
        {
          "title": "Bozza di struttura per accordo di riservatezza (NDA)",
          "text": "Predisponi la struttura di un accordo di non divulgazione (NDA) tra:\n\nParte divulgante: [nome/tipologia, es. una startup SaaS]\nParte ricevente: [nome/tipologia, es. un potenziale cliente enterprise]\nFinalità: [es. valutazione di un'integrazione software]\nDurata: [es. 2 anni]\n\nIncludi le sezioni standard di un NDA: definizione delle informazioni riservate, obblighi di custodia, esclusioni, durata dell'obbligo e rimedi legali applicabili."
        },
        {
          "title": "Confronta due versioni di un contratto",
          "text": "Confronta queste due versioni di un contratto e riassumi le differenze principali. Evidenzia qualsiasi modifica che incida in modo sostanziale su diritti, doveri, responsabilità o pagamenti:\n\nVersione 1:\n[incolla qui]\n\nVersione 2:\n[incolla qui]"
        }
      ]
    },
    {
      "cat": "Conformità e compliance",
      "prompts": [
        {
          "title": "Checklist di conformità GDPR",
          "text": "Crea una checklist di conformità al GDPR per [tipologia di organizzazione, es. azienda SaaS B2B] che raccoglie [tipologie di dati, es. indirizzi email e dati di analisi di utilizzo] da utenti residenti nell'Unione Europea.\n\nTratta: basi giuridiche del trattamento, consenso, diritti degli interessati, conservazione dei dati (data retention), notifica di violazione dei dati (data breach) e requisiti del Data Processing Agreement (DPA)."
        },
        {
          "title": "Valutazione del trattamento dei dati",
          "text": "Aiutami a condurre una valutazione del trattamento dei dati per la seguente attività:\n\nAttività: [descrivi, es. invio di email di marketing a residenti nell'UE]\nDati raccolti: [elenca le tipologie]\nResponsabili del trattamento terzi coinvolti: [elencali, es. Mailchimp, Stripe]\n\nIdentifica gli obblighi di conformità, i profili di rischio e le misure di salvaguardia consigliate."
        },
        {
          "title": "Analisi dell'impatto di modifiche normative",
          "text": "Analizza l'impatto di questo aggiornamento normativo sulla nostra organizzazione:\n\nNormativa: [nome e giurisdizione, es. Regolamento UE sull'Intelligenza Artificiale - AI Act, California SB 1047]\nLa nostra attività: [breve descrizione]\nPratiche attuali: [descrivi le procedure operative pertinenti]\n\nCosa dobbiamo modificare nelle nostre operazioni? Assegna le priorità in base al grado di urgenza."
        },
        {
          "title": "Guida alla preparazione dell'audit",
          "text": "Aiutaci a prepararci per un imminente [tipo di audit, es. SOC 2 Type II, ISO 27001, audit GDPR].\n\nLa nostra organizzazione: [breve descrizione]\nAmbito dell'audit: [descrivi il perimetro]\nTempistiche: [es. l'audit si terrà tra 3 mesi]\n\nFornisci una checklist con priorità su cosa predisporre, le non conformità più comuni da gestire preventivamente e la documentazione probatoria da tenere pronta."
        }
      ]
    },
    {
      "cat": "Policy aziendali",
      "prompts": [
        {
          "title": "Struttura per Privacy Policy",
          "text": "Delinea la struttura di un'informativa sulla privacy per:\n\nProdotto/servizio: [descrivi]\nDati raccolti: [elenca le tipologie, es. nome, email, estremi di pagamento, dati di navigazione]\nServizi di terze parti utilizzati: [es. Stripe, Google Analytics, AWS]\nLocalizzazione geografica degli utenti: [es. Italia, UE e USA]\n\nIncludi tutte le sezioni obbligatorie previste da GDPR e CCPA. Utilizza un linguaggio chiaro, accessibile e orientato all'utente."
        },
        {
          "title": "Redazione policy di utilizzo accettabile",
          "text": "Scrivi una Policy di Utilizzo Accettabile (AUP) per [nome prodotto/piattaforma], uno [descrivi il prodotto, es. strumento di collaborazione cloud per aziende].\n\nIncludi: usi consentiti, attività espressamente vietate, misure sanzionatorie e conseguenze per le violazioni, e modalità di segnalazione degli abusi.\n\nIl tono deve essere chiaro, fermo e professionale, senza risultare eccessivamente giuridico."
        },
        {
          "title": "Sezione per manuale dipendenti",
          "text": "Scrivi una sezione per il nostro manuale dei dipendenti dedicata a [argomento, es. policy sullo smart working / sicurezza dei dati / utilizzo dei social media].\n\nTipologia di azienda: [descrivi]\nRegole cardine da trattare: [elenco]\nTono di voce: [es. accogliente ma inequivocabile]\n\nRendila semplice da comprendere, specificando cosa ci si aspetta dai collaboratori, i comportamenti vietati e le conseguenze in caso di inadempienza."
        },
        {
          "title": "Bozza di codice di condotta",
          "text": "Redigi una bozza di codice di condotta per [tipologia di organizzazione, es. un progetto open source / una startup tecnologica].\n\nValori chiave da rappresentare: [elenca, es. inclusività, rispetto, trasparenza]\nAmbito di applicazione: [es. si applica a contributori, dipendenti, eventi in presenza e online]\n\nIncludi: comportamenti attesi, condotte inaccettabili, procedura di segnalazione e modalità di applicazione dei provvedimenti."
        }
      ]
    },
    {
      "cat": "Proprietà intellettuale",
      "prompts": [
        {
          "title": "Preparazione ricerca marchi",
          "text": "Aiutami a prepararmi per una ricerca di anteriorità su un marchio per il seguente progetto:\n\nMarchio proposto: [nome o espressione]\nProdotti/servizi: [descrivi cosa vendi o offri]\nGiurisdizioni di interesse: [es. Italia, UE, USA, Regno Unito]\n\nSpiega cosa verificare durante la ricerca, quali requisiti rendono un marchio registrabile e a quali potenziali conflitti prestare particolare attenzione."
        },
        {
          "title": "Sintesi stato dell'arte per brevetto",
          "text": "Aiutami a sintetizzare lo stato dell'arte (prior art) pertinente per questo concetto inventivo ai fini di una domanda di brevetto:\n\nDescrizione dell'invenzione: [descrivila in linguaggio comune]\nSettore tecnologico: [es. machine learning, biotecnologie, software]\n\nSpiega cosa si intende per stato dell'arte, quali banche dati o categorie consultare e aiutami ad articolare ciò che rende questa invenzione nuova e inventiva."
        },
        {
          "title": "Confronto licenze open source",
          "text": "Confronta queste licenze open source per il nostro caso d'uso:\n\nLicenze da confrontare: [es. MIT, Apache 2.0, GPL v3, AGPL]\nIl nostro caso d'uso: [es. stiamo realizzando un prodotto SaaS commerciale che integra librerie open source]\n\nPer ciascuna licenza spiega: cosa ci è consentito fare, quali obblighi dobbiamo rispettare e cosa ci è vietato. Raccomanda la licenza più appropriata per il nostro progetto."
        },
        {
          "title": "Checklist cessione diritti di proprietà intellettuale",
          "text": "Crea una checklist per la cessione dei diritti di proprietà intellettuale (IP assignment) per quando assumiamo [freelance / dipendenti / collaboratori esterni] per realizzare [descrivi il lavoro, es. funzionalità software].\n\nQuali clausole devono essere presenti nel contratto? Cosa dobbiamo verificare? Quali errori frequenti dobbiamo evitare per garantire che la titolarità della proprietà intellettuale sia pienamente e validamente trasferita alla nostra azienda?"
        }
      ]
    },
    {
      "cat": "Affari societari e rischi",
      "prompts": [
        {
          "title": "Struttura dei Termini di Servizio commerciali",
          "text": "Predisponi la struttura dei Termini di Servizio per:\n\nProdotto: [descrivi]\nModello di business: [es. SaaS in abbonamento, marketplace, e-commerce]\nBacino di utenza: [es. privati consumer, aziende B2B]\n\nIncludi: gestione dell'account, pagamenti e rimborsi, usi vietati, limitazione di responsabilità, risoluzione delle controversie e legge applicabile. Evidenzia le sezioni che richiedono necessariamente la revisione di un avvocato."
        },
        {
          "title": "Valutazione del rischio di responsabilità",
          "text": "Aiutami a valutare i rischi di responsabilità civile o legale per questa attività di business:\n\nAttività: [descrivi, es. erogazione di report finanziari generati da IA a investitori retail]\nTipologia di attività: [descrivi]\nGiurisdizioni in cui operiamo: [dove operate]\n\nIdentifica le principali fattispecie di responsabilità, la loro probabilità e l'impatto potenziale, e suggerisci adeguate misure di mitigazione."
        },
        {
          "title": "Punti chiave per accordo di partnership",
          "text": "Delinea le clausole e i termini chiave da disciplinare in un accordo di partnership tra:\n\nParte A: [descrivi]\nParte B: [descrivi]\nNatura della collaborazione: [es. ripartizione dei ricavi su un prodotto sviluppato congiuntamente]\n\nTratta: ruoli e responsabilità, suddivisione dei ricavi e degli utili, titolarità della proprietà intellettuale, processi decisionali, clausole di uscita e risoluzione delle controversie."
        },
        {
          "title": "Checklist per revisione contratti fornitori",
          "text": "Crea una checklist per verificare i contratti dei fornitori prima della sottoscrizione. La nostra azienda è [descrivi, es. una startup fintech Serie A].\n\nCi interessano in modo particolare: [elenca le priorità, es. trattamento dei dati, livelli di servizio SLA, massimali di responsabilità, diritti di recesso]\n\nCosa dobbiamo verificare sistematicamente, quali sono le clausole sfavorevoli tipicamente inserite dai fornitori e su quali punti è opportuno negoziare modifiche?"
        }
      ]
    },
    {
      "cat": "Semplificazione del linguaggio legale",
      "prompts": [
        {
          "title": "Semplifica testo legale",
          "text": "Riscrivi questo testo legale in un linguaggio chiaro, lineare e accessibile a chi non è avvocato. Mantieni inalterato l'intero valore giuridico e significato, ma elimina gergo tecnico, forme passive e complicazioni sintattiche inutili:\n\n[incolla qui il testo legale]\n\nDestinatari di riferimento: [es. consumatori privati / titolari di piccole imprese]"
        },
        {
          "title": "Scrivi informativa legale per gli utenti",
          "text": "Scrivi un'informativa chiara per gli utenti relativa al seguente obbligo normativo:\n\nObbligo: [es. consenso GDPR per comunicazioni di marketing / informativa cookie / aggiornamento policy di conservazione dati]\nContesto: [dove comparirà questo testo, es. nel form di iscrizione / in un banner in-app]\nTono di voce: [es. accogliente, sintetico, trasparente]\n\nRendila chiara, onesta e il più concisa possibile, coprendo tutti gli elementi essenziali."
        },
        {
          "title": "FAQ da documento legale",
          "text": "Trasforma questo documento legale in una sezione di Domande Frequenti (FAQ) chiare e divulgative, che gli utenti leggano e comprendano davvero. Estrai i punti più rilevanti e le domande che le persone si pongono più frequentemente:\n\n[incolla il documento qui]\n\nFormatta come Domanda e Risposta (D&R). Punta a 8-12 domande. Mantieni ogni risposta entro 2-3 frasi."
        },
        {
          "title": "Trasforma policy in guida per dipendenti",
          "text": "Prendi questa policy formale e riscrivila sotto forma di guida pratica e intuitiva per i dipendenti. L'obiettivo è fare in modo che il personale la comprenda e la metta in pratica nella vita lavorativa quotidiana, anziché limitarsi a firmarla per presa visione.\n\nPolicy:\n[incolla qui]\n\nIncludi: cosa comporta nella routine di tutti i giorni, esempi pratici di cosa fare e cosa non fare (do/don't) e come comportarsi in caso di dubbi."
        }
      ]
    }
  ],
  "sales": [
    {
      "cat": "Prospecting e lead generation",
      "prompts": [
        {
          "title": "Scrivi email di cold outreach",
          "text": "Scrivi un'email di cold outreach da inviare a un potenziale cliente.\n\nNome dell'azienda: [azienda prospect]\nRuolo del prospect: [es. Direttore Commerciale, Responsabile Operations]\nNostro prodotto/servizio: [breve descrizione]\nProposta di valore chiave: [quale problema risolviamo]\nRisultato desiderato: [es. fissare una call conoscitiva di 20 minuti]\n\nMantienila sotto le 150 parole. Esordisci focalizzandoti sul suo problema concreto, non sul nostro prodotto. Concludi con una sola Call to Action a basso attrito."
        },
        {
          "title": "Sequenza di messaggi e collegamento LinkedIn",
          "text": "Scrivi una sequenza di outreach in 3 passaggi su LinkedIn per un prospect a freddo.\n\nProfilo del prospect: [ruolo, azienda, settore]\nNostra offerta: [prodotto/servizio e beneficio chiave]\n\nPassaggio 1: Nota per la richiesta di collegamento (sotto i 300 caratteri)\nPassaggio 2: Primo messaggio dopo l'accettazione (focalizzato sul valore, nessun pitch di vendita, sotto le 100 parole)\nPassaggio 3: Messaggio di follow-up in assenza di risposta dopo 5 giorni (promemoria discreto, sotto le 80 parole)\n\nTono: professionale ma autentico e umano. Evita esordi banali come 'Ho notato il tuo profilo'."
        },
        {
          "title": "Ricerca del prospect prima della call",
          "text": "Aiutami a preparare l'analisi di questo prospect prima di una call di vendita.\n\nNome del prospect: [nome]\nRuolo: [qualifica]\nAzienda: [nome dell'azienda]\nSettore: [settore]\nObiettivo della call: [es. discovery, demo, chiusura]\n\nFornisci:\n1. 5 domande strategiche da porre in base alle sue probabili priorità\n2. 3 potenziali punti di dolore tipici per chi ricopre quel ruolo\n3. 2 trend recenti di settore da citare per trasmettere credibilità e competenza\n4. Un rompighiaccio efficace legato al suo ruolo o alla sua azienda"
        },
        {
          "title": "Definizione del profilo cliente ideale (ICP)",
          "text": "Aiutami a definire il profilo del cliente ideale (Ideal Customer Profile - ICP) per il nostro prodotto.\n\nProdotto/servizio: [descrivi cosa vendi]\nMigliori clienti attuali: [descrivi 2-3 esempi reali se disponibili]\nProblema che risolviamo: [descrivi il pain point fondamentale]\nNostra fascia di prezzo: [indicativa]\n\nFornisci in output:\n1. Profilo aziendale e dimensionale (dimensioni aziendali, settore, area geografica, fatturato)\n2. Segnali tecnologici (strumenti/tecnologie che presumibilmente utilizzano)\n3. Trigger comportamentali ed eventi scatenanti (cosa innesca l'esigenza di acquisto)\n4. Anti-ICP: quali tipologie di clienti NON dobbiamo approcciare e perché"
        }
      ]
    },
    {
      "cat": "Discovery e qualificazione",
      "prompts": [
        {
          "title": "Framework di domande per call di discovery",
          "text": "Crea un framework di domande per una call commerciale di discovery.\n\nProdotto/servizio: [cosa vendiamo]\nPersona target: [ruolo e settore]\nDurata della call: [es. 30 minuti]\n\nStruttura le domande secondo questa sequenza:\n1. Situazione (2-3 domande per comprendere il loro stato attuale)\n2. Problema (2-3 domande per far emergere i punti di dolore)\n3. Implicazione (2 domande per esplorare il costo e le conseguenze del problema non risolto)\n4. Ritorno dell'investimento / Need-Payoff (2 domande per guidarli a verbalizzare il valore della soluzione)\n\nIncludi una domanda finale aperta per definire insieme i passi successivi."
        },
        {
          "title": "Identificazione dei punti di dolore (Pain Points)",
          "text": "Sulla base dei seguenti appunti della call di discovery, individua i principali punti di dolore del prospect e ordinali per livello di urgenza.\n\nAppunti della call:\n[incolla qui gli appunti della call]\n\nPer ciascun punto di dolore:\n1. Nominalo e descrivilo con precisione\n2. Cita o parafrasa le parole utilizzate dal prospect\n3. Valuta il livello di urgenza: Alto / Medio / Basso\n4. Indica a quale funzionalità del prodotto o risultato tangibile corrisponde\n\nEvidenzia inoltre eventuali esigenze inespresse deducibili implicitamente da quanto dichiarato."
        },
        {
          "title": "Template per l'analisi dei bisogni",
          "text": "Aiutami a completare un'analisi dei bisogni basata su questa conversazione con il prospect.\n\nProspect: [nome, ruolo, azienda]\nCosa ha dichiarato essere il suo obiettivo: [cita o parafrasa]\nProcesso o strumento attuale: [cosa utilizzano oggi]\nFrustrazioni menzionate: [elencale]\nTempistiche indicate: [se specificate]\nSegnali sul budget: [se emersi]\n\nGenera un'analisi dei bisogni strutturata che includa:\n- Esigenza primaria\n- Esigenze secondarie\n- Criteri di successo (come definiscono il problema 'risolto'?)\n- Prossimo passo consigliato nel processo di vendita"
        },
        {
          "title": "Checklist di qualificazione (BANT/MEDDIC)",
          "text": "Valuta questo prospect applicando i framework di qualificazione.\n\nProspect: [nome, ruolo, azienda]\nAppunti di discovery: [incolla gli appunti]\n\nValuta l'opportunità rispetto a entrambi i modelli:\n\nBANT:\n- Budget: [noto / sconosciuto / confermato]\n- Authority (potere decisionale): [decision maker / influenzatore / non identificato]\n- Need (necessità): [forte / moderata / debole / poco chiara]\n- Timeline (tempistiche): [urgente / entro 6 mesi / nessuna tempistica]\n\nMEDDIC:\n- Metrics (metriche di impatto quantificate): [individuate?]\n- Economic Buyer (acquirente economico): [identificato?]\n- Decision Criteria (criteri decisionali): [noti?]\n- Decision Process (processo decisionale): [mappato?]\n- Identify Pain (problema concreto): [confermato?]\n- Champion (alleato interno): [ne abbiamo uno?]\n\nRaccomanda l'azione: Qualifica / Coltiva (Nurture) / Squalifica — motivando il giudizio."
        }
      ]
    },
    {
      "cat": "Presentazione e demo",
      "prompts": [
        {
          "title": "Personalizza il pitch per la persona target",
          "text": "Personalizza il nostro pitch commerciale per un profilo specifico.\n\nNostro prodotto/servizio: [descrivilo]\nProposta di valore fondamentale: [1-2 frasi]\nProfilo del prospect: [ruolo, tipologia aziendale, settore]\nSue probabili priorità principali: [es. riduzione dei costi, efficienza del team, compliance]\nPunti di dolore emersi: [dalla fase di discovery]\n\nRiscrivi il pitch in modo che:\n1. Esordisca mettendo al centro ciò che conta di più per questo profilo\n2. Utilizzi il linguaggio tipico del suo ruolo (evitando il nostro gergo interno)\n3. Colleghi direttamente le nostre funzionalità ai problemi esplicitati\n4. Si chiuda con una solida motivazione per procedere adesso"
        },
        {
          "title": "Scaletta per script della demo",
          "text": "Scrivi una scaletta per lo script di una demo di prodotto.\n\nProdotto: [nome e breve descrizione]\nProspect: [ruolo, azienda, settore]\nProblemi confermati in discovery: [elencali]\nDurata della demo: [es. 30 minuti]\nFunzionalità chiave da evidenziare: [elencane 3-4]\n\nStruttura:\n1. Apertura (riconferma agenda e obiettivi condivisi, 2 min)\n2. Contestualizzazione (collegare la demo ai problemi emersi, 3 min)\n3. Flusso principale della demo (funzionalità per funzionalità con il relativo impatto pratico, 18 min)\n4. Checkpoint per le obiezioni (pausa dedicata a domande e chiarimenti, 4 min)\n5. Chiusura (prossimi passi e call to action, 3 min)\n\nIncludi una frase di transizione fluida tra ogni blocco."
        },
        {
          "title": "Narrazione del calcolo del ROI",
          "text": "Aiutami a elaborare una narrazione del ROI da presentare a un prospect.\n\nNostro prodotto/servizio: [descrizione]\nDimensioni dell'azienda del prospect: [dipendenti / fatturato se noti]\nProblema riscontrato: [descrivilo]\nRisultato della nostra soluzione: [cosa miglioriamo]\n\nCostruisci una narrazione che includa:\n1. Costo attuale del problema (tempo sprecato, perdite economiche o rischi)\n2. Stima prudenziale del miglioramento generato dalla nostra soluzione\n3. Calcolo del ROI annuale con assunzioni trasparenti\n4. Periodo di recupero dell'investimento (Payback period)\n5. Sintesi di una frase adatta a un dirigente di vertice (C-level)\n\nUtilizza cifre arrotondate ed evidenzia le ipotesi assunte, così che il prospect possa ricalcolarle facilmente."
        },
        {
          "title": "Sintesi di un caso studio per il prospect",
          "text": "Riassumi un caso studio cliente da condividere con un prospect.\n\nCliente: [nome azienda o 'un'azienda del settore [settore]']\nIl suo problema iniziale prima di noi: [descrivilo]\nCome ha utilizzato il nostro prodotto: [descrivi l'adozione]\nRisultati conseguiti: [metriche se disponibili]\nTempistiche: [tempo necessario per vedere i primi risultati]\n\nScrivi un riassunto di 150 parole strutturato in:\n- Situazione di partenza\n- Sfida affrontata\n- Soluzione adottata\n- Risultati ottenuti\n\nScrivi poi una versione condensata di una frase da inserire in un'email.\nInfine, scrivi 2 domande di approfondimento da porre al prospect per collegare questa storia alla sua situazione specifica."
        }
      ]
    },
    {
      "cat": "Gestione delle obiezioni",
      "prompts": [
        {
          "title": "Rispondi all'obiezione sul prezzo",
          "text": "Aiutami a gestire un'obiezione sul prezzo.\n\nCosa ha detto il prospect: \"[citazione esatta o parafrasi]\"\nNostro prezzo: [indicativo]\nValore che apportiamo: [risultati tangibili chiave]\nConcorrente o alternativa con cui ci confrontano: [se noto]\n\nFormula una risposta che:\n1. Riconosca la preoccupazione senza assumere un tono difensivo\n2. Riquadri il prezzo come investimento utilizzando argomentazioni sul ROI\n3. Scomponga il costo su base unitaria o giornaliera se utile alla comprensione\n4. Proponga un passo successivo costruttivo (non uno sconto) per avanzare\n\nSuggerisci anche una domanda di chiarimento preventiva per comprendere se si tratti di un reale limite di budget o di una mancata percezione del valore."
        },
        {
          "title": "Gestisci il confronto con la concorrenza",
          "text": "Aiutami a gestire un'obiezione sul confronto con un concorrente.\n\nCosa ha detto il prospect: \"[citazione o parafrasi]\"\nConcorrente citato: [nome del concorrente]\nCosa apprezzano probabilmente del concorrente: [prezzo / funzionalità / brand / relazione preesistente]\nNostri elementi distintivi chiave: [elencane 2-3]\n\nScrivi una risposta che:\n1. Riconosca positivamente il fatto che stiano svolgendo le dovute valutazioni di mercato\n2. Menzioni il concorrente con rispetto ed equilibrio (senza denigrarlo)\n3. Faccia perno sui nostri punti di forza unici rilevanti per le loro esigenze specifiche\n4. Suggerisca criteri di valutazione comparativa oggettivi da utilizzare nell'analisi\n\nConcludi con una domanda che mantenga attiva e costruttiva la conversazione."
        },
        {
          "title": "Gestisci l'obiezione \"non è il momento giusto\"",
          "text": "Aiutami a rispondere a un'obiezione legata alle tempistiche.\n\nCosa ha detto il prospect: \"[citazione o parafrasi, es. 'Siamo troppo occupati adesso' o 'Risentiamoci nel terzo trimestre']\"\nCosa so della sua situazione: [contesto emerso in discovery]\nNostre tempistiche standard di implementazione: [es. 2 settimane, 1 giorno]\n\nScrivi una risposta che:\n1. Dimostri empatia per il loro carico di lavoro attuale\n2. Ponga con tatto l'interrogativo se rimandare migliori o peggiori il problema\n3. Offra un passo successivo a basso impegno (non una chiusura contrattuale immediata)\n4. Fornisca una ragione concreta per cui muoversi oggi sia più vantaggioso che aspettare\n\nMantienila sotto le 120 parole. Evita qualsiasi pressione forzata."
        },
        {
          "title": "Supera l'obiezione \"ci devo pensare\"",
          "text": "Aiutami a rispondere all'obiezione 'ci devo pensare' o 'ti farò sapere'.\n\nContesto: [fase della trattativa — demo effettuata, proposta inviata, ecc.]\nCosa ha detto il prospect: \"[citazione esatta]\"\nQuale ritengo sia la vera esitazione: [prezzo / approvazione interna / timore del rischio / dubbio sul valore]\n\nScrivi una risposta che:\n1. Rispetti i suoi tempi di valutazione senza far raffreddare la trattativa\n2. Porti alla luce la reale perplessità con una domanda diretta ma cordiale\n3. Si offra di supportare l'ostacolo interno (es. predisporre il business case interno)\n4. Fissi un momento preciso per il follow-up prima di chiudere la conversazione"
        }
      ]
    },
    {
      "cat": "Follow-up e re-engagement",
      "prompts": [
        {
          "title": "Email di follow-up post demo",
          "text": "Scrivi un'email di follow-up da inviare entro 24 ore da una demo di prodotto.\n\nNome del prospect: [nome]\nAzienda: [azienda]\nData della demo: [data]\nPunti di dolore principali discussi: [elenca 1-3]\nFunzionalità a cui ha reagito con maggior interesse: [elenco]\nProssimo passo concordato: [es. invio proposta, call introduttiva con il team, prova gratuita]\nDomande aperte rimaste in sospeso: [elenca se presenti]\n\nL'email deve:\n1. Ringraziare richiamando un elemento specifico emerso durante la call\n2. Riepilogare i 2-3 punti chiave di valore allineati alle sue esigenze\n3. Rispondere a eventuali dubbi rimasti aperti\n4. Riconfermare il prossimo passo pattuito con un'azione chiara\n\nTono: caloroso e professionale. Sotto le 200 parole."
        },
        {
          "title": "Riattiva un contatto che non risponde (Cold Lead)",
          "text": "Scrivi un'email per riagganciare un prospect che non dà più notizie.\n\nNome del prospect: [nome]\nAzienda: [azienda]\nUltima interazione: [data e cosa è accaduto — es. demo, invio proposta]\nTempo trascorso dall'ultimo contatto: [es. 6 settimane]\nMotivo per cui potrebbe essersi interrotta la comunicazione: [se noto]\nNuovo spunto o trigger a cui fare riferimento: [es. novità aziendali del prospect, nuova funzionalità rilasciata da noi, cambiamenti normativi o di settore]\n\nScrivi un'email che:\n1. Non faccia sentire in colpa il destinatario né contenga scuse eccessive\n2. Esordisca con una novità o un elemento di valore (non un banale 'volevo solo sapere come va')\n3. Riconfermi la proposta di valore in una sola frase\n4. Abbia una sola Call to Action facile e immediata da compiere\n\nSotto le 100 parole."
        },
        {
          "title": "Email di accompagnamento della proposta",
          "text": "Scrivi un'email di accompagnamento all'invio di una proposta commerciale a un prospect.\n\nNome del prospect: [nome]\nAzienda: [azienda]\nSintesi della proposta: [panoramica di cosa è incluso]\nValore complessivo / investimento: [prezzo o fascia]\nRisultati chiave garantiti: [2-3 punti elenco]\nScadenza della proposta o termine per la decisione: [se applicabile]\nProssimo passo: [es. call di revisione già fissata, in attesa di firma]\n\nL'email deve:\n1. Inquadrare la proposta come soluzione specifica ai problemi identificati nella fase di discovery\n2. Mettere in primo piano i 2-3 risultati più importanti\n3. Rendere semplice orientarsi tra le sezioni principali del documento allegato\n4. Indicare con trasparenza il passo successivo\n\nTono: autorevole, collaborativo e disponibile. Sotto le 180 parole."
        },
        {
          "title": "Trattativa bloccata: email per sbloccare i prossimi passi",
          "text": "Scrivi un'email per sbloccare una trattativa che si è arenata.\n\nNome del prospect: [nome]\nAzienda: [azienda]\nFase della trattativa: [es. proposta inviata, accordo verbale senza firma, in attesa del parere legale]\nDa quanto tempo è ferma: [tempistica]\nUltima comunicazione: [breve sintesi]\nCosa ritengo costituisca il blocco: [la tua migliore ipotesi]\n\nScrivi un'email che:\n1. Non dia la sensazione di fare pressione o assillare\n2. Offra qualcosa di concretamente utile (es. un template, dati, una breve call per superare insieme gli ostacoli)\n3. Crei una moderata urgenza senza apparire artefatta\n4. Proponga un'azione concreta con una data precisa\n\nSuggerisci inoltre un approccio alternativo nel caso in cui l'email non riceva risposta."
        }
      ]
    },
    {
      "cat": "Previsioni e report vendite",
      "prompts": [
        {
          "title": "Riepilogo settimanale della pipeline",
          "text": "Scrivi un riepilogo settimanale della pipeline commerciale per il responsabile delle vendite o per il team.\n\nAttività della settimana:\n- Nuove opportunità aperte: [numero e breve descrizione]\n- Demo o call completate: [numero]\n- Proposte inviate: [numero]\n- Trattative chiuse vinte (Won): [numero e valore complessivo]\n- Trattative perse (Lost): [numero e motivazione se nota]\n\nFotografia della pipeline:\n- Valore totale della pipeline aperta: [importo]\n- Opportunità suddivise per fase: [elenco]\n- Trattative a rischio: [opportunità ferme o a rischio slittamento]\n\nPriorità per la prossima settimana: [elenca 3-4 azioni operative]\n\nFormatta il riepilogo in modo chiaro e scansionabile a colpo d'occhio. Usa un linguaggio pratico e privo di gergo inutile."
        },
        {
          "title": "Analisi delle trattative perse",
          "text": "Aiutami a redigere un'analisi di una trattativa commerciale persa.\n\nDettagli della trattativa:\n- Prospect: [nome azienda]\n- Valore economico: [importo]\n- Durata del ciclo di vendita: [durata]\n- Fase in cui è stata persa: [es. dopo la demo, dopo la proposta]\n- Causa dichiarata dal prospect: [cosa ci hanno detto]\n- Causa effettiva (tua interpretazione): [tua sincera valutazione]\n- Concorrente scelto (se noto): [nome]\n\nAnalizza:\n1. Quali segnali abbiamo trascurato o sottovalutato?\n2. In quale punto del processo di vendita si è verificata la rottura?\n3. Era una trattativa vincibile? Perché sì o perché no?\n4. Cosa faremmo diversamente col senno di poi?\n5. Esiste un percorso per riallacciare i contatti in futuro?\n\nSii onesto, costruttivo e focalizzato sull'apprendimento, senza assumere un atteggiamento difensivo."
        },
        {
          "title": "Pattern di vittorie e sconfitte (Win/Loss Analysis)",
          "text": "Analizza questi risultati di trattative vinte e perse per individuare trend e pattern ricorrenti.\n\nTrattative vinte di recente:\n[elenca i deal vinti — includi valore, settore, profilo del referente, durata della trattativa, motivo chiave della vittoria]\n\nTrattative perse di recente:\n[elenca i deal persi — includi valore, settore, profilo del referente, durata della trattativa, motivo chiave della perdita]\n\nIdentifica:\n1. Caratteristiche comuni delle trattative vinte (aderenza all'ICP, caso d'uso, profilo, dimensioni del deal)\n2. Caratteristiche comuni delle trattative perse\n3. Fattori determinanti nelle vittorie (prezzo, relazione personale, funzionalità, velocità di risposta)\n4. Fattori determinanti nelle sconfitte (gli stessi ambiti)\n5. Raccomandazioni operative: su cosa focalizzarsi, cosa correggere nel processo commerciale e su quale segmento raddoppiare gli investimenti"
        },
        {
          "title": "Narrazione delle previsioni di vendita (Sales Forecast)",
          "text": "Scrivi una relazione narrativa sulle previsioni di vendita per un aggiornamento alla direzione o al consiglio di amministrazione.\n\nPeriodo di previsione: [es. Q2 2026]\nQuota/Target di vendita: [obiettivo complessivo]\nPipeline attuale: [valore complessivo]\nPrevisione confermata (Commit): [cifra su cui c'è certezza di chiusura]\nScenario ottimistico (Best Case): [se tutte le opportunità favorevoli andassero a buon fine]\nRischi ponderati: [trattative che potrebbero slittare al trimestre successivo]\n\nTrattative chiave da evidenziare:\n[elencane 3-5 con nome/placeholder, fase, valore, data prevista di chiusura]\n\nScrivi una narrazione di 200 parole che:\n1. Esponga la cifra di riferimento in modo netto e inequivocabile\n2. Spieghi le motivazioni alla base della fiducia nelle stime\n3. Delinei con precisione i rischi principali e le azioni intraprese per mitigarli\n4. Si chiuda con una richiesta chiara o un supporto necessario da parte della direzione (se applicabile)\n\nTone: autorevole, trasparente e fondato sui numeri, mai difensivo."
        }
      ]
    }
  ]
};
