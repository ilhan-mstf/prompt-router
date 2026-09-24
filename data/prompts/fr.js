export default {
  "dev": [
    {
      "cat": "Débogage",
      "prompts": [
        {
          "title": "Trouver le bug",
          "text": "Voici mon code. Il ne fonctionne pas comme prévu.\n\n[collez le code ici]\n\nL'erreur ou le problème : [décrivez-le]\n\nTrouvez le bug, expliquez pourquoi il se produit et proposez une solution."
        },
        {
          "title": "Expliquer cette erreur",
          "text": "J'obtiens cette erreur :\n\n[collez le message d'erreur]\n\nVoici le code concerné :\n\n[collez le code ici]\n\nExpliquez ce qui provoque cette erreur et comment la corriger."
        },
        {
          "title": "Résoudre un problème de performance",
          "text": "Ce code s'exécute plus lentement que prévu :\n\n[collez le code ici]\n\nAnalysez la logique, identifiez les goulots d'étranglement et proposez des optimisations concrètes avec des exemples avant/après."
        },
        {
          "title": "Corriger un test qui échoue",
          "text": "Ce test échoue :\n\n[collez le code du test]\n\nLe message d'erreur :\n\n[collez l'erreur]\n\nVoici l'implémentation testée :\n\n[collez le code]\n\nExpliquez pourquoi le test échoue et comment le corriger."
        }
      ]
    },
    {
      "cat": "Revue de code",
      "prompts": [
        {
          "title": "Vérifier les bugs et la qualité",
          "text": "Examinez ce code pour y déceler d'éventuels bugs, cas limites et problèmes de qualité. Soyez précis sur ce qui ne va pas et proposez des correctifs :\n\n[collez le code ici]"
        },
        {
          "title": "Audit de sécurité",
          "text": "Analysez ce code pour détecter des vulnérabilités de sécurité (injections, failles d'authentification, exposition de données, top 10 OWASP). Évaluez la gravité et suggérez des correctifs :\n\n[collez le code ici]"
        },
        {
          "title": "Revue d'un diff de PR",
          "text": "Voici le diff d'une pull request. Examinez-le sous l'angle de la correction, du style, de la performance et des risques potentiels. Soyez concis et pratique :\n\n[collez le diff ici]"
        },
        {
          "title": "Suggérer des améliorations",
          "text": "Examinez ce code et proposez des améliorations en matière de lisibilité, de maintenabilité et de style idiomatique, tout en conservant les mêmes fonctionnalités :\n\n[collez le code ici]"
        }
      ]
    },
    {
      "cat": "Refactorisation",
      "prompts": [
        {
          "title": "Refactoriser pour la lisibilité",
          "text": "Refactorisez ce code afin de le rendre plus lisible et maintenable. Conservez le même comportement. Expliquez chaque modification apportée :\n\n[collez le code ici]"
        },
        {
          "title": "Extraire la logique réutilisable",
          "text": "Ce code contient de la logique dupliquée ou fortement couplée. Extrayez des fonctions ou modules réutilisables tout en conservant le même comportement :\n\n[collez le code ici]"
        },
        {
          "title": "Convertir en async/await",
          "text": "Convertissez ce code basé sur des callbacks ou des chaînes de promesses pour utiliser async/await. Gérez correctement les erreurs :\n\n[collez le code ici]"
        },
        {
          "title": "Simplifier une fonction complexe",
          "text": "Cette fonction est trop complexe. Décomposez-la en fonctions plus petites et bien nommées. Conservez les mêmes entrées/sorties :\n\n[collez le code ici]"
        }
      ]
    },
    {
      "cat": "Tests",
      "prompts": [
        {
          "title": "Rédiger des tests unitaires",
          "text": "Rédigez des tests unitaires complets pour cette fonction. Couvrez les cas nominaux, les cas limites et les scénarios d'erreur. Utilisez [framework de test] :\n\n[collez le code ici]"
        },
        {
          "title": "Rédiger un test d'intégration",
          "text": "Rédigez un test d'intégration pour cette fonctionnalité. Il doit tester le flux complet du [début] à la [fin] :\n\n[collez le code/l'API ici]\n\nUtilisez [framework de test]."
        },
        {
          "title": "Générer des cas de test",
          "text": "Listez tous les cas de test que je devrais écrire pour cette fonction. Regroupez-les par : cas nominal, cas limites, gestion des erreurs et conditions aux limites :\n\n[collez le code ici]"
        },
        {
          "title": "Ajouter une couverture de tests",
          "text": "Ce code ne dispose d'aucun test. Analysez-le, identifiez les parcours les plus critiques et écrivez les tests par ordre de priorité. Utilisez [framework de test] :\n\n[collez le code ici]"
        }
      ]
    },
    {
      "cat": "Architecture",
      "prompts": [
        {
          "title": "Concevoir un schéma de base de données",
          "text": "Concevez un schéma de base de données pour [décrivez votre application/fonctionnalité]. Incluez les tables, colonnes, types, relations et index. Justifiez vos choix de conception."
        },
        {
          "title": "Concevoir une API",
          "text": "Concevez une API REST pour [fonctionnalité/ressource]. Spécifiez les points de terminaison, méthodes, schémas de requête/réponse, codes de statut et authentification. Suivez les bonnes pratiques."
        },
        {
          "title": "Comparer des approches",
          "text": "Je dois trancher entre ces approches pour [problème] :\n\nOption A : [décrivez]\nOption B : [décrivez]\n\nComparez-les sur : la performance, la maintenabilité, la complexité et la scalabilité. Recommandez une option avec argumentation à l'appui."
        },
        {
          "title": "Conception de système",
          "text": "Concevez un système pour [décrivez le cas d'usage]. Couvrez : l'architecture globale, le flux de données, le stockage, la stratégie de cache et la montée en charge. Identifiez les goulots d'étranglement potentiels."
        }
      ]
    },
    {
      "cat": "DevOps",
      "prompts": [
        {
          "title": "Écrire un Dockerfile",
          "text": "Rédigez un Dockerfile prêt pour la production pour ce projet :\n\nLangage/framework : [ex. Node.js, Python Flask]\nBesoins : [ex. build multi-étapes, utilisateur non-root]\n\nIntégrez les meilleures pratiques en matière de sécurité et de taille d'image."
        },
        {
          "title": "Pipeline CI/CD",
          "text": "Créez un workflow GitHub Actions qui :\n\n1. [listez les étapes, ex. lint, test, build, deploy]\n\nLangage/framework : [précisez]\nCible de déploiement : [ex. AWS, Vercel, Docker Hub]\n\nIncluez la mise en cache et des déclencheurs pertinents."
        },
        {
          "title": "Déboguer un échec CI",
          "text": "Mon pipeline CI échoue. Voici les logs d'exécution :\n\n[collez les logs CI]\n\nLa configuration du pipeline :\n\n[collez la configuration]\n\nIdentifiez le problème et proposez un correctif."
        },
        {
          "title": "Infrastructure as Code",
          "text": "Rédigez une configuration [Terraform/CloudFormation/Pulumi] pour :\n\n[décrivez l'infrastructure, ex. un bucket S3 avec CloudFront, un VPC avec des sous-réseaux]\n\nSuivez les bonnes pratiques de sécurité et commentez chaque ressource pour expliquer son rôle."
        }
      ]
    },
    {
      "cat": "Git et documentation",
      "prompts": [
        {
          "title": "Rédiger un message de commit",
          "text": "Rédigez un message de commit clair et conventionnel pour ce diff. Utilisez le format : type(portée): description. Soyez concis mais précis :\n\n[collez le diff ici]"
        },
        {
          "title": "Rédiger un README",
          "text": "Générez un fichier README.md pour ce projet. Incluez : la description du projet, les instructions d'installation, le guide d'utilisation, les options de configuration et comment contribuer :\n\n[collez l'arborescence du projet ou le fichier principal ici]"
        },
        {
          "title": "Documenter ce code",
          "text": "Ajoutez une documentation claire et concise à ce code. Incluez les docstrings de fonctions/méthodes, la description des paramètres, les valeurs de retour et des exemples d'utilisation :\n\n[collez le code ici]"
        },
        {
          "title": "Rédiger une entrée de changelog",
          "text": "Rédigez une entrée de changelog pour ces modifications. Regroupez par : Ajouté, Modifié, Corrigé, Supprimé. Adoptez un langage clair et orienté utilisateur :\n\n[collez le diff ou la liste des changements]"
        }
      ]
    }
  ],
  "writing": [
    {
      "cat": "Blog et articles",
      "prompts": [
        {
          "title": "Rédiger le plan d'un article de blog",
          "text": "Créez le plan détaillé d'un article de blog sur le sujet : [sujet]\n\nPublic cible : [décrivez le public]\nTon : [ex. informatif, conversationnel, expert]\nNombre de mots visé : [ex. 1 500 mots]\n\nIncluez : un titre accrocheur, une introduction captivante, 4 à 6 sections principales avec des sous-points, et une conclusion avec un appel à l'action clair."
        },
        {
          "title": "Améliorer l'introduction d'un article",
          "text": "Réécrivez l'introduction de cet article pour qu'elle accroche immédiatement le lecteur. L'introduction actuelle :\n\n[collez l'introduction ici]\n\nL'article porte sur : [sujet]\nLecteur cible : [décrivez le public]\n\nRendez la nouvelle introduction captivante, spécifique et de moins de 100 mots. Proposez 3 variantes."
        },
        {
          "title": "Générer des idées d'articles de blog",
          "text": "Générez 10 idées d'articles de blog pour [décrivez le blog/la marque] ciblant [public cible].\n\nDomaine d'intérêt : [ex. productivité, marketing SaaS, finances personnelles]\n\nPour chaque idée, incluez : un titre de travail, l'angle ou l'accroche clé, et à qui elle est le plus utile. Privilégiez les sujets précis, directement applicables et à fort potentiel SEO."
        },
        {
          "title": "Rédiger une conclusion percutante",
          "text": "Rédigez une conclusion pour cet article de blog :\n\nSujet : [sujet]\nPoints clés abordés : [résumez les points principaux]\nAction souhaitée après la lecture : [ex. s'abonner, partager, tester le produit]\n\nLa conclusion doit récapituler l'enseignement principal, apporter une clôture nette et se terminer par un appel à l'action clair et naturel."
        }
      ]
    },
    {
      "cat": "Réseaux sociaux",
      "prompts": [
        {
          "title": "Rédiger un thread Twitter/X",
          "text": "Rédigez un thread Twitter/X sur le sujet suivant : [sujet]\n\nPublic cible : [décrivez]\nObjectif : [ex. éduquer, générer du trafic, asseoir son autorité]\nNombre de tweets : [ex. 8 à 10]\n\nCommencez par un tweet d'accroche percutant, découpez le sujet en points digestes et terminez par un appel à l'action clair. Gardez chaque tweet sous les 280 caractères. Utilisez des sauts de ligne pour faciliter la lecture."
        },
        {
          "title": "Rédiger un post LinkedIn",
          "text": "Rédigez un post LinkedIn sur : [sujet ou retour d'expérience]\n\nTon : [ex. réflexif, direct, storytelling]\nObjectif : [ex. partager une leçon, susciter des commentaires, renforcer sa crédibilité]\n\nCommencez par une phrase d'accroche qui stoppe le défilement. Utilisez des paragraphes courts. Intégrez un angle personnel ou une perspective concrète. Terminez par une question pour stimuler les échanges. Visez entre 150 et 250 mots."
        },
        {
          "title": "Rédiger une légende Instagram",
          "text": "Rédigez une légende Instagram pour une publication sur : [décrivez l'image/le sujet]\n\nVoix de marque : [ex. enjouée, inspirante, épurée]\nObjectif : [ex. augmenter les enregistrements, attirer des visites sur le profil, vendre un produit]\n\nIncluez : une phrase d'ouverture engageante, 2 à 3 phrases d'accompagnement, un appel à l'action et 5 à 10 hashtags pertinents."
        },
        {
          "title": "Calendrier éditorial pour les réseaux sociaux",
          "text": "Créez un calendrier éditorial de 2 semaines pour [marque/créateur] publiant sur [plateformes, ex. LinkedIn + Instagram].\n\nThématique : [domaine]\nObjectif : [ex. gagner des abonnés, générer du trafic, lancer un produit]\nFréquence de publication : [ex. 3x/semaine par plateforme]\n\nPour chaque publication, indiquez : la date, la plateforme, le type de contenu (ex. conseil, anecdote, promotion) et une description en une ligne de l'idée du post."
        }
      ]
    },
    {
      "cat": "E-mails",
      "prompts": [
        {
          "title": "Rédiger un e-mail de prospection",
          "text": "Rédigez un e-mail de prospection (cold email) pour la situation suivante :\n\nExpéditeur : [votre nom/poste/entreprise]\nDestinataire : [intitulé du poste ou profil du contact]\nObjectif : [ex. réserver un appel, obtenir une mise en relation, proposer un partenariat]\nContexte : [tout détail pertinent expliquant votre démarche]\n\nNe dépassez pas 150 mots. Démarrez par la valeur apportée ou la pertinence — pas par votre présentation. Terminez par un appel à l'action fluide et simple d'accès."
        },
        {
          "title": "Rédiger l'introduction d'une newsletter",
          "text": "Rédigez l'introduction de l'édition de cette semaine de ma newsletter.\n\nNom de la newsletter / Thème : [décrivez]\nCette édition traite de : [sujet principal ou fil conducteur]\nPublic cible : [décrivez les abonnés]\nTon : [ex. chaleureux, spirituel, concis]\n\nL'introduction doit paraître personnelle, donner un avant-goût du contenu et donner envie de lire la suite. Restez sous la barre des 80 mots."
        },
        {
          "title": "Rédiger un e-mail de relance",
          "text": "Rédigez un e-mail de relance pour cette situation :\n\nContexte initial : [décrivez le premier échange — ex. un appel commercial, un entretien d'embauche, une proposition envoyée]\nDélai depuis le dernier contact : [ex. 5 jours]\nObjectif de la relance : [ex. obtenir une décision, renouer le contact, valider les prochaines étapes]\n\nAdoptez un ton chaleureux mais direct. Faites brièvement référence à l'échange précédent. Facilitez la réponse. Restez sous les 100 mots."
        },
        {
          "title": "Rédiger un e-mail délicat",
          "text": "Aidez-moi à rédiger un e-mail professionnel pour une situation délicate :\n\nSituation : [décrivez — ex. s'excuser pour un retard, refuser une demande, annoncer une mauvaise nouvelle]\nDestinataire : [décrivez la relation — ex. client, manager, collègue]\nRésultat souhaité : [ce qui doit se passer après la lecture]\n\nSoyez honnête, assumez la responsabilité si nécessaire et conservez un ton constructif. Évitez d'être sur la défensive ou excessivement désolé."
        }
      ]
    },
    {
      "cat": "Copywriting",
      "prompts": [
        {
          "title": "Rédiger une description de produit",
          "text": "Rédigez une fiche produit persuasive pour :\n\nNom du produit : [nom]\nCe qu'il fait : [décrivez]\nCaractéristiques clés : [listez-en 3 à 5]\nClient cible : [décrivez]\nTon : [ex. haut de gamme, ludique, technique]\n\nMettez l'accent sur les bénéfices plutôt que sur les caractéristiques. Commencez par la valeur principale. Restez sous les 120 mots et concluez par une incitation naturelle à l'achat."
        },
        {
          "title": "Titre et sous-titre de page d'atterrissage",
          "text": "Rédigez 5 combinaisons de titre et sous-titre pour une page d'atterrissage (landing page).\n\nProduit/service : [décrivez]\nPublic cible : [décrivez]\nProposition de valeur principale : [quel problème résout-il ou quel résultat apporte-t-il]\nTon : [ex. audacieux, rassurant, percutant]\n\nChaque titre doit être clair, spécifique et axé sur les bénéfices. Le sous-titre doit développer l'idée, lever une objection ou renforcer la crédibilité."
        },
        {
          "title": "Rédiger des variantes d'appels à l'action",
          "text": "Rédigez 10 variantes de texte pour un bouton d'appel à l'action (CTA) pour :\n\nProduit/service : [décrivez]\nObjectif du CTA : [ex. démarrer un essai gratuit, réserver une démo, télécharger un guide]\nTon : [ex. orienté action, sans engagement, axé sur la curiosité]\n\nVariez les approches — essayez l'urgence, le bénéfice d'abord, la curiosité et la preuve sociale. Dans la mesure du possible, limitez chaque option à moins de 6 mots."
        },
        {
          "title": "Réécriture selon la voix de marque",
          "text": "Réécrivez le texte suivant pour qu'il corresponde à notre voix de marque.\n\nTexte d'origine :\n[collez le texte ici]\n\nNotre voix de marque est : [décrivez — ex. assurée mais accessible, experte sans jargon, chaleureuse et piquante]\nPublic cible : [décrivez]\n\nConservez le message fondamental intact tout en adaptant le ton, le lexique et le rythme des phrases. Présentez une version avant/après."
        }
      ]
    },
    {
      "cat": "Édition et correction",
      "prompts": [
        {
          "title": "Simplifier un texte complexe",
          "text": "Simplifiez le texte suivant pour le rendre accessible à un public général sans connaissances préalables sur le sujet.\n\n[collez le texte ici]\n\nÉvitez le jargon. Privilégiez des phrases courtes. Remplacez les termes techniques par des mots du langage courant. Préservez le sens initial et toutes les informations essentielles. Visez un niveau de lecture grand public."
        },
        {
          "title": "Ajuster le ton et le style",
          "text": "Éditez le texte suivant pour en améliorer le ton et le style.\n\nTexte actuel :\n[collez le texte ici]\n\nLe ton souhaité doit être : [ex. plus affirmé, moins formel, plus chaleureux, plus concis]\nConservez le sens et l'exactitude des faits. Présentez la version révisée et expliquez brièvement les principaux changements apportés."
        },
        {
          "title": "Raccourcir au nombre de mots voulu",
          "text": "Raccourcissez le texte suivant à environ [nombre de mots cible] mots sans perdre le message clé ni changer le sens.\n\n[collez le texte ici]\n\nSupprimez en priorité : les formules de remplissage, les phrases redondantes et les explications superflues. Conservez les points essentiels, les exemples les plus parlants et les formulations les plus fortes."
        },
        {
          "title": "Relire et améliorer",
          "text": "Relisez le texte suivant et proposez des améliorations.\n\n[collez le texte ici]\n\nVérifiez : les erreurs d'orthographe et de grammaire, les tournures maladroites, les phrases ambiguës et les incohérences de ton. Présentez la version corrigée, suivie d'une brève liste des modifications apportées et de leurs justifications."
        }
      ]
    },
    {
      "cat": "Créativité",
      "prompts": [
        {
          "title": "Écrire l'ouverture d'une nouvelle",
          "text": "Rédigez les 3 premiers paragraphes d'une nouvelle à partir des éléments suivants :\n\nGenre : [ex. fiction littéraire, science-fiction, thriller]\nCadre : [décrivez le lieu et l'époque]\nPersonnage principal : [brève description]\nSituation initiale ou conflit : [décrivez]\nAmbiance/ton : [ex. tendu, mélancolique, plein d'espoir]\n\nCommencez au cœur de l'action ou dans un moment saisissant. Accrochez immédiatement le lecteur. Évitez les préambules."
        },
        {
          "title": "Créer un dialogue de personnages",
          "text": "Rédigez une scène de dialogue entre deux personnages :\n\nPersonnage A : [nom, brève description, son objectif dans cette scène]\nPersonnage B : [nom, brève description, son objectif dans cette scène]\nSituation : [décrivez ce qui se passe et où]\nTension sous-jacente : [ce qui est réellement en jeu ou passé sous silence]\n\nRendez le dialogue naturel et révélateur. Chaque personnage doit avoir une voix distincte. Mettez en avant le sous-texte — la différence entre ce qu'ils disent et ce qu'ils pensent."
        },
        {
          "title": "Créer des métaphores et des analogies",
          "text": "Générez 8 métaphores ou analogies originales pour expliquer le concept suivant :\n\nConcept : [décrivez l'idée, le processus ou l'objet]\nPublic cible : [qui doit le comprendre]\nContexte : [où cela sera utilisé — ex. un article de blog, un discours, une présentation de produit]\n\nVisez une diversité de styles : certaines visuelles, d'autres émotionnelles ou humoristiques. Évitez les clichés. Pour chacune, ajoutez une phrase précisant dans quel cas elle fonctionne le mieux."
        },
        {
          "title": "Réécrire dans un style différent",
          "text": "Réécrivez le texte suivant dans le style de [nom d'auteur ou description du style, ex. Ernest Hemingway, un romancier victorien, un post de réseau social Génération Z].\n\nTexte d'origine :\n[collez le texte ici]\n\nAdoptez la voix, le rythme des phrases, le vocabulaire et les schémas structuraux de ce style. Conservez le fond du message et son sens. Présentez uniquement la version réécrite."
        }
      ]
    }
  ],
  "marketing": [
    {
      "cat": "Planification de campagnes",
      "prompts": [
        {
          "title": "Planifier une campagne marketing",
          "text": "Aidez-moi à planifier une campagne marketing pour [produit/service].\n\nPublic cible : [décrivez]\nObjectif : [ex. leads, inscriptions, notoriété]\nFourchette de budget : [montant]\nCalendrier : [durée]\n\nDétaillez la stratégie de campagne, les messages clés, les canaux de diffusion, les étapes charnières et les indicateurs de succès (KPIs)."
        },
        {
          "title": "Créer un calendrier éditorial",
          "text": "Créez un calendrier de contenu sur [30/60/90] jours pour [marque/produit].\n\nPublic cible : [décrivez]\nCanaux : [ex. LinkedIn, e-mail, blog, Instagram]\nThématiques : [listez-en]\nObjectif de fréquence de publication : [ex. 3x/semaine]\n\nIncluez les formats de contenu, les sujets et un planning de publication suggéré."
        },
        {
          "title": "Définir un persona d'audience cible",
          "text": "Construisez un buyer persona détaillé pour [produit/service].\n\nCe que nous savons jusqu'ici : [décrivez votre client actuel ou vos hypothèses]\n\nIncluez : données démographiques, intitulé du poste, objectifs, points de douleur, freins/objections, canaux favoris et processus de prise de décision d'achat."
        },
        {
          "title": "Bilan post-campagne",
          "text": "Aidez-moi à rédiger le bilan (post-mortem) d'une campagne marketing.\n\nObjectif initial de la campagne : [ex. générer 500 leads]\nRésultat effectif : [ce qui s'est passé]\nCanaux exploités : [listez]\nIndicateurs clés : [CTR, taux de conversion, CAC, etc.]\n\nAnalysez ce qui a fonctionné, ce qui a échoué, les causes profondes et formulez des recommandations concrètes pour la prochaine campagne."
        }
      ]
    },
    {
      "cat": "SEO",
      "prompts": [
        {
          "title": "Brief de recherche de mots-clés",
          "text": "Créez un brief de recherche de mots-clés pour [thématique/produit].\n\nSite web : [URL ou description]\nPublic cible : [décrivez]\nConcurrents : [listez si connus]\n\nSuggérez des mots-clés principaux, des variantes de longue traîne, la répartition par intention de recherche (informationnelle, commerciale, transactionnelle) ainsi que des opportunités de contenu pour chaque groupe thématique (cluster)."
        },
        {
          "title": "Rédiger des balises méta SEO",
          "text": "Rédigez des balises de titre (title) et des méta-descriptions optimisées pour le SEO pour la page suivante.\n\nSujet de la page : [décrivez]\nMot-clé visé : [mot-clé]\nURL : [URL de la page]\nNombre de mots de la page : [approximatif]\n\nFournissez 3 options de balise title (moins de 60 caractères chacune) et 3 options de méta-description (moins de 155 caractères chacune). Notez l'emplacement du mot-clé cible dans chaque option."
        },
        {
          "title": "Analyse d'opportunités de contenu (Content Gap)",
          "text": "Réalisez une analyse des opportunités de contenu manquantes (content gap) pour [site web/marque] dans le secteur [secteur d'activité].\n\nNos thématiques de contenu actuelles : [listez ou décrivez]\nPrincipaux concurrents : [listez]\nPublic cible : [décrivez]\n\nIdentifiez les sujets et mots-clés sur lesquels nos concurrents sont positionnés et sur lesquels nous sommes absents, puis classez-les par potentiel de trafic et pertinence stratégique."
        },
        {
          "title": "Stratégie de maillage interne",
          "text": "Élaborez une stratégie de maillage interne pour un [blog/site web] dédié à [sujet].\n\nPages clés existantes : [listez vos pages piliers ou URLs stratégiques]\nObjectif : [ex. améliorer le positionnement sur X, réduire le taux de rebond, diffuser le jus de lien]\n\nProposez des textes d'ancrage pertinents, définissez les liens à créer entre les pages et établissez une architecture de liens consolidant l'autorité thématique du site."
        }
      ]
    },
    {
      "cat": "Publicité (Ads)",
      "prompts": [
        {
          "title": "Rédiger des annonces Google Ads",
          "text": "Rédigez des annonces Google Ads pour [produit/service].\n\nMot-clé ciblé : [mot-clé]\nURL de la page de destination : [URL]\nBénéfice principal : [proposition de valeur majeure]\nAudience : [décrivez qui verra cette annonce]\n\nFournissez 3 titres (30 caractères max chacun) et 2 descriptions (90 caractères max chacune) pour une annonce responsive sur le Réseau de Recherche. Valorisez les bénéfices, intégrez un appel à l'action et alignez le texte avec l'intention de recherche."
        },
        {
          "title": "Variantes d'annonces Facebook",
          "text": "Rédigez 3 variantes de publicités Facebook pour [produit/service].\n\nAudience ciblée : [décrivez les données démographiques et centres d'intérêt]\nObjectif : [ex. clics, conversions, notoriété]\nOffre clé ou accroche : [décrivez]\n\nPour chaque variante, écrivez : un texte principal (2-3 phrases), un titre (moins de 40 caractères) et une description (moins de 25 caractères). Exploitez un angle différent pour chacune — ex. point de douleur, preuve sociale et offre promotionnelle."
        },
        {
          "title": "Idées d'A/B testing pour page d'atterrissage",
          "text": "Générez des idées d'A/B testing pour la page d'atterrissage de [produit/service].\n\nTaux de conversion actuel : [si connu]\nCTA principal : [ex. S'inscrire gratuitement]\nSource de trafic majeure : [ex. Google Ads, Facebook]\nObjectif de la page : [décrivez]\n\nListez 8 à 10 idées de tests concrètes et à fort impact réparties sur : le titre, le texte du CTA, les éléments de réassurance (preuve sociale), la disposition et la formulation de l'offre. Priorisez selon l'impact attendu et la simplicité de mise en œuvre."
        },
        {
          "title": "Stratégie de ciblage publicitaire",
          "text": "Aidez-moi à concevoir une stratégie de ciblage d'audience pour des campagnes payantes promouvant [produit/service].\n\nPlateforme : [ex. Meta, Google, LinkedIn]\nBudget : [mensuel]\nObjectif : [ex. leads, ventes, inscriptions]\nClient idéal : [décrivez]\n\nRecommandez : les options de ciblage d'audience froide (prospection), les segments de reciblage (retargeting), la stratégie d'audiences similaires (lookalike) et les exclusions à mettre en place. Justifiez chaque choix."
        }
      ]
    },
    {
      "cat": "Analytics",
      "prompts": [
        {
          "title": "Analyser une baisse de trafic",
          "text": "Aidez-moi à diagnostiquer une baisse de trafic sur [site web/page].\n\nDétails de la baisse : [ex. le trafic organique a chuté de 30 % sur les 2 dernières semaines]\nDate de la baisse : [date]\nPages concernées : [quelles pages ou ensemble du site]\nChangements récents : [modifications du site, mises à jour d'algorithmes, redirections, etc.]\n\nListez les causes les plus plausibles par ordre de probabilité, puis fournissez les étapes précises d'investigation et les solutions pour chacune."
        },
        {
          "title": "Analyse de tunnel de conversion",
          "text": "Analysez cet entonnoir de conversion marketing et identifiez où nous perdons nos utilisateurs.\n\nÉtapes du tunnel et taux de conversion :\n[ex. Visiteur > Page d'atterrissage : 100 %]\n[Page d'atterrissage > Inscription : 12 %]\n[Inscription > Activation : 40 %]\n[Activation > Achat : 18 %]\n\nComparez ces taux aux standards du secteur, mettez en exergue les points de déperdition majeurs et préconisez des améliorations spécifiques pour chaque étape."
        },
        {
          "title": "Synthèse de rapport mensuel",
          "text": "Rédigez une synthèse claire pour le rapport marketing mensuel de [mois].\n\nIndicateurs clés :\n- Trafic : [chiffre, vs mois précédent]\n- Leads : [chiffre, vs mois précédent]\n- CAC : [montant]\n- Taux de conversion : [%]\n- Meilleur canal : [canal]\n- Succès notables : [listez]\n- Défis rencontrés : [listez]\n\nRédigez un résumé exécutif (3 à 4 phrases), une section sur les temps forts, une sur les défis et 3 plans d'action clairs pour le mois prochain."
        },
        {
          "title": "Comparaison des modèles d'attribution",
          "text": "Comparez les modèles d'attribution pour une entreprise [B2B/B2C] commercialisant [produit/service].\n\nNos canaux marketing principaux : [ex. recherche payante, organique, e-mailing, réseaux sociaux]\nCycle de vente moyen : [ex. 2 semaines / 3 mois]\nModèle d'attribution actuel : [ex. dernier clic]\n\nExpliquez comment les modèles au premier contact, au dernier contact, linéaire, à dépréciation dans le temps et basé sur les données interpréteraient chacun notre tunnel de conversion, et préconisez le modèle le plus adapté en justifiant votre choix."
        }
      ]
    },
    {
      "cat": "Image de marque",
      "prompts": [
        {
          "title": "Rédiger une déclaration de positionnement",
          "text": "Rédigez une déclaration de positionnement de marque pour [entreprise/produit].\n\nCe que nous faisons : [décrivez]\nPublic cible : [décrivez]\nBénéfice clé : [valeur première apportée]\nDifférenciateur : [ce qui nous distingue des alternatives]\nConcurrents : [listez les principaux]\n\nUtilisez la structure suivante : Pour [public cible] qui a besoin de [besoin], [marque] est [catégorie] qui [bénéfice] parce que [raison d'y croire]. Proposez ensuite 2 variantes alternatives avec des angles d'attaque différents."
        },
        {
          "title": "Différenciation concurrentielle",
          "text": "Aidez-moi à formaliser la différenciation de [produit/entreprise] face à la concurrence.\n\nNotre produit : [décrivez]\nPrincipaux concurrents : [listez avec une brève description de chacun]\nNos atouts majeurs : [listez]\nRetours clients récurrents : [ce que les clients apprécient le plus]\n\nIdentifiez nos facteurs de différenciation les plus robustes et défendables, et expliquez comment les valoriser clairement dans nos messages marketing. Pointez les affirmations trop génériques qui méritent d'être affûtées."
        },
        {
          "title": "Charte de voix de marque",
          "text": "Créez une charte de voix de marque pour [entreprise/produit].\n\nCe que nous faisons : [décrivez]\nPublic cible : [décrivez]\nPersonnalité à projeter : [ex. experte mais accessible, audacieuse, chaleureuse]\nTraits de caractère à éviter : [ex. institutionnel, trop technique/jargon]\nExemples de textes inspirants : [collez-en si disponibles]\n\nDéfinissez 4 à 5 attributs de voix, commentez chacun avec une description détaillée, des exemples « à faire / à éviter » et un exemple de réécriture avant/après."
        },
        {
          "title": "Brainstorming de slogans",
          "text": "Faites un brainstorming de slogans pour [entreprise/produit].\n\nCe que nous faisons : [décrivez en une phrase]\nPublic cible : [décrivez]\nBénéfice clé : [proposition de valeur principale]\nTon : [ex. percutant, inspirant, confiant, espiègle]\nSlogans actuels rejetés et pourquoi : [facultatif]\n\nGénérez 15 propositions de slogans. Regroupez-les par approche : orientée bénéfice, émotionnelle, et disruptive. Mettez en avant vos 3 options préférées avec une brève justification."
        }
      ]
    },
    {
      "cat": "Growth",
      "prompts": [
        {
          "title": "Idées de programme de parrainage",
          "text": "Concevez un programme de parrainage pour [produit/service].\n\nModèle économique : [ex. abonnement SaaS, e-commerce]\nBase d'utilisateurs actuelle : [taille approximative]\nValeur vie client moyenne (LTV) : [montant]\nObjectif de coût d'acquisition : [CAC cible]\n\nProposez 3 structures de programme de parrainage avec des mécaniques d'incitation distinctes (ex. récompense bilatérale, crédits, numéraire). Pour chacune : détaillez le fonctionnement, le flux de parrainage, la structure des récompenses et l'impact estimé sur le coefficient viral."
        },
        {
          "title": "Séquence d'e-mails de rétention",
          "text": "Rédigez une séquence d'e-mails de rétention pour les utilisateurs inscrits à [produit] mais inactifs depuis [X jours].\n\nProduit : [décrivez ses fonctionnalités]\nCause fréquente d'abandon : [si connue]\nTon : [ex. amical, direct]\nNombre d'e-mails : [ex. séquence de 3 e-mails]\n\nPour chaque e-mail, fournissez : objet, texte de prévisualisation, corps du message et appel à l'action. Espacez-les de [X] jours. Concentrez-vous sur le réengagement par la valeur, sans vous limiter à de simples réductions."
        },
        {
          "title": "Optimisation du parcours d'onboarding",
          "text": "Aidez-moi à optimiser le parcours d'accueil et d'onboarding pour [produit].\n\nÉtapes actuelles de l'onboarding : [listez-les]\nPoint d'abandon : [où les utilisateurs quittent]\nObjectif de délai d'accès à la valeur : [ex. l'utilisateur perçoit la valeur en 5 minutes]\nÉvénement clé d'activation : [ex. premier projet créé, membre d'équipe invité]\n\nIdentifiez les frictions dans le flux actuel, proposez des améliorations ciblées pour chaque étape et recommandez l'onboarding minimal viable permettant d'amener les utilisateurs à l'événement d'activation le plus rapidement possible."
        },
        {
          "title": "Stratégie de boucle virale",
          "text": "Concevez une stratégie de boucle virale pour [produit/service].\n\nType de produit : [ex. outil collaboratif, marketplace, application sociale]\nMécanisme de croissance actuel : [décrivez comment les utilisateurs vous découvrent aujourd'hui]\nMoments naturels de partage : [quand les utilisateurs ont-ils spontanément envie de partager ?]\nObjectif de coefficient viral cible : [ex. K > 1]\n\nProposez 2 à 3 architectures de boucles virales. Pour chacune : décrivez le déclencheur, le mécanisme de partage, l'incitation et le parcours de conversion pour les utilisateurs invités. Évaluez le coefficient viral réaliste pour chaque scénario."
        }
      ]
    }
  ],
  "job": [
    {
      "cat": "CV",
      "prompts": [
        {
          "title": "Réécrire les puces d'un CV",
          "text": "Réécrivez ces puces de CV pour les rendre plus fortes, percutantes et axées sur les résultats. Utilisez des verbes d'action et chiffrez les résultats dès que possible :\n\n[collez vos puces de CV ici]\n\nPoste visé : [intitulé du poste]\nSecteur : [secteur]"
        },
        {
          "title": "Adapter un CV à une offre d'emploi",
          "text": "Voici mon CV actuel et l'offre d'emploi à laquelle je souhaite postuler. Identifiez les manques, suggérez quelles compétences et quels mots-clés ajouter ou mettre en valeur, et réécrivez les sections les plus pertinentes pour correspondre au poste.\n\nMon CV :\n[collez votre CV ici]\n\nDescription du poste :\n[collez la description du poste ici]"
        },
        {
          "title": "Rédiger l'accroche d'un CV",
          "text": "Rédigez une accroche professionnelle percutante pour mon CV. Elle doit comporter 3 à 4 phrases, valoriser mes atouts et expériences clés, et être adaptée au rôle visé.\n\nMon profil : [années d'expérience, compétences clés, réalisations majeures]\nPoste ciblé : [intitulé du poste et secteur]"
        },
        {
          "title": "Chiffrer ses réalisations",
          "text": "Aidez-moi à quantifier et renforcer ces réalisations sur mon CV. Si je n'ai pas fourni de chiffres, suggérez les indicateurs que je pourrais estimer ou rechercher pour rendre chaque puce plus percutante :\n\n[collez vos réalisations ici]\n\nMon poste : [intitulé du poste]\nTaille de l'entreprise / secteur : [détails]"
        }
      ]
    },
    {
      "cat": "Lettre de motivation",
      "prompts": [
        {
          "title": "Rédiger une lettre de motivation",
          "text": "Rédigez une lettre de motivation percutante pour cette candidature. Limitez-la à 3 paragraphes : pourquoi l'entreprise me passionne, ce que j'apporte au poste, et un appel à l'action clair.\n\nMon profil : [bref résumé]\nIntitulé du poste : [titre]\nEntreprise : [nom de l'entreprise]\nExigences clés de l'offre : [collez 3 à 5 prérequis de l'annonce]\nUne raison précise pour laquelle je choisis cette entreprise : [votre raison]"
        },
        {
          "title": "Lettre de motivation pour reconversion",
          "text": "Rédigez une lettre de motivation pour une candidature de reconversion professionnelle. Valorisez cette transition, reliez mes compétences transférables au nouveau rôle et démontrez une réelle motivation pour ce changement de trajectoire.\n\nMon parcours actuel : [domaine actuel et expérience]\nPoste visé : [nouvel intitulé et nouveau secteur]\nMes compétences transférables : [listez-les]\nPourquoi j'entreprends ce changement : [votre raison]"
        },
        {
          "title": "Lettre de mobilité interne",
          "text": "Rédigez une lettre de demande de mobilité interne vers une autre équipe ou un autre rôle au sein de mon entreprise. Mettez en avant ma connaissance interne, mes contributions passées et en quoi cette évolution bénéficie à la fois à l'entreprise et à moi-même.\n\nMon poste actuel : [titre et équipe]\nPoste visé : [titre et équipe souhaitée]\nAncienneté dans l'entreprise : [durée]\nPrincipales contributions à ce jour : [listez-en 2 ou 3]\nMotif de la mobilité : [votre raison]"
        },
        {
          "title": "Relance après candidature",
          "text": "Rédigez un e-mail de relance court et professionnel à envoyer après avoir soumis une candidature. Il doit exprimer mon intérêt constant, rester courtois et synthétique, sans paraître insistant.\n\nPoste visé : [titre]\nEntreprise : [nom de l'entreprise]\nDate de candidature : [date]\nNom du responsable du recrutement (si connu) : [nom ou 'Responsable du recrutement']"
        }
      ]
    },
    {
      "cat": "Préparation aux entretiens",
      "prompts": [
        {
          "title": "S'entraîner aux questions comportementales (STAR)",
          "text": "Aidez-moi à préparer des réponses au format STAR (Situation, Tâche, Action, Résultat) pour des questions d'entretien comportementales pour ce poste. Pour chaque question, guidez-moi avec cette structure.\n\nPoste pour lequel je passe l'entretien : [intitulé du poste]\nSecteur : [secteur]\nMon parcours : [bref résumé]\n\nCommençons par ces questions classiques :\n1. Racontez-moi une situation où vous avez géré un conflit au travail.\n2. Décrivez un projet que vous avez mené de bout en bout.\n3. Parlez-moi d'une fois où vous avez échoué et de ce que vous en avez appris."
        },
        {
          "title": "Préparation à l'entretien technique",
          "text": "J'ai un entretien technique pour ce poste. Créez un plan d'étude ciblé et listez les sujets et types de questions les plus probables auxquels je dois me préparer. Incluez des exemples de questions et expliquez ce qui fait une excellente réponse.\n\nPoste : [intitulé du poste]\nType d'entreprise : [startup / grande entreprise / type FAANG]\nCompétences clés de l'offre : [collez-les]\nMon niveau actuel : [débutant / intermédiaire / solide]\nTemps avant l'entretien : [jours/semaines]"
        },
        {
          "title": "Questions à poser au recruteur",
          "text": "Générez une liste de questions pertinentes et stratégiques que je peux poser à la fin de mon entretien. Incluez des questions sur les enjeux du poste, la culture d'équipe, les opportunités d'évolution et les critères d'évaluation de la réussite. Évitez les questions trop convenues.\n\nPoste : [intitulé du poste]\nEntreprise : [nom de l'entreprise]\nÉtape de l'entretien : [premier tour / tour final / manager opérationnel / panel]\nCe que je sais déjà de l'entreprise : [brèves notes]"
        },
        {
          "title": "Trame de négociation salariale",
          "text": "Rédigez une trame de négociation salariale que je peux utiliser après avoir reçu une offre d'emploi. Elle doit être assurée mais collaborative, justifier ma demande par des données de marché et mon expérience, et maintenir une dynamique d'échange positive.\n\nOffre reçue : [montant du salaire]\nMon salaire cible : [montant souhaité]\nMon expérience : [années et qualifications clés]\nPoste : [intitulé du poste]\nLieu / télétravail : [localisation]"
        }
      ]
    },
    {
      "cat": "LinkedIn",
      "prompts": [
        {
          "title": "Optimiser son titre de profil LinkedIn",
          "text": "Rédigez 5 variantes de titre pour mon profil LinkedIn. Chacune doit être riche en mots-clés pour les recherches des recruteurs, communiquer clairement ma proposition de valeur et faire moins de 220 caractères.\n\nMon poste actuel : [titre]\nSecteur : [secteur]\nCompétences clés : [listez-en 3 à 5]\nCe pour quoi je veux être reconnu : [brève description]\nÀ l'écoute d'opportunités : [oui / non]"
        },
        {
          "title": "Rédiger sa section « Infos » sur LinkedIn",
          "text": "Rédigez la section « Infos » (À propos) de mon profil LinkedIn. Utilisez la première personne, commencez par une accroche forte, mettez en valeur mon expérience et mes compétences clés, et terminez par ce que je recherche ou la façon de me contacter. Visez 250 à 350 mots.\n\nMon parcours : [résumé de l'expérience]\nCompétences clés et expertise : [listez-les]\nRéalisations marquantes : [1 à 3 faits saillants]\nCe que je recherche : [postes, opportunités ou collaborations]"
        },
        {
          "title": "Message de demande de mise en relation",
          "text": "Rédigez un message court et personnalisé pour une demande de mise en relation sur LinkedIn (moins de 300 caractères). Il doit être chaleureux, expliquer clairement la raison de ma prise de contact et ne rien demander immédiatement.\n\nPersonne contactée : [son nom et son poste]\nPourquoi je souhaite entrer en contact : [intérêt partagé, relation mutuelle, admiration pour son travail, etc.]\nMon profil : [description en une phrase de qui je suis]"
        },
        {
          "title": "Post LinkedIn sur un retour d'expérience",
          "text": "Rédigez un post LinkedIn partageant une réflexion professionnelle ou une leçon tirée de mon parcours. Utilisez une première ligne forte pour arrêter le défilement, racontez une brève histoire ou observation, et terminez par une question pour susciter l'engagement. Évitez les mots à la mode et privilégiez l'authenticité.\n\nThématique ou leçon : [ce que je souhaite partager]\nContexte ou histoire sous-jacente : [brefs détails]\nPublic visé : [pour qui j'écris]\nTon : [réflexif / motivant / pragmatique]"
        }
      ]
    },
    {
      "cat": "Réseautage",
      "prompts": [
        {
          "title": "Demander un entretien exploratoire",
          "text": "Rédigez un e-mail pour solliciter un entretien exploratoire de 20 minutes avec une personne occupant un poste ou travaillant dans une entreprise qui m'intéresse. Restez concis, montrez un intérêt sincère pour son parcours et facilitez son acceptation.\n\nSon nom : [nom]\nSon poste et son entreprise : [détails]\nComment je l'ai découverte : [LinkedIn, contact mutuel, article, etc.]\nCe que je souhaite apprendre : [sujets ou questions spécifiques]\nMon profil : [une phrase sur qui je suis]"
        },
        {
          "title": "E-mail de remerciement après un échange réseau",
          "text": "Rédigez un e-mail de remerciement à envoyer dans les 24 heures suivant un entretien exploratoire ou une rencontre de réseau. Faites référence à un point précis de notre échange, exprimez une reconnaissance sincère et proposez une prochaine étape naturelle.\n\nSon nom : [nom]\nDate de l'échange : [date]\nPoint précis abordé : [sujet ou idée]\nProchaine étape suggérée : [ex. rester en contact, partager une ressource, refaire un point dans 3 mois]"
        },
        {
          "title": "Pitch de présentation",
          "text": "Rédigez un pitch percutant de 30 secondes que je peux utiliser lors d'événements de réseautage ou lorsqu'on me demande « que faites-vous ? ». Il doit être clair, mémorable et engager naturellement la conversation. Proposez 3 versions : formelle, décontractée et reconversion professionnelle.\n\nMon parcours : [poste actuel ou récent et secteur]\nCompétences clés ou domaines d'expertise : [listez-les]\nCe vers quoi je tends : [objectifs ou type d'opportunités recherchées]"
        },
        {
          "title": "E-mail de suivi après une conférence",
          "text": "Rédigez un e-mail de suivi pour une personne rencontrée brièvement lors d'une conférence ou d'un événement professionnel. Rappelez les circonstances de notre rencontre, résumez notre échange et proposez un moyen de rester en contact ou de poursuivre la discussion.\n\nSon nom : [nom]\nNom de l'événement : [conférence ou événement]\nCirconstances de la rencontre / sujet abordé : [brefs détails]\nProchaine étape proposée : [appel, café informel, partage d'une ressource, etc.]"
        }
      ]
    },
    {
      "cat": "Évolution de carrière",
      "prompts": [
        {
          "title": "Créer un plan de développement professionnel",
          "text": "Aidez-moi à concevoir un plan d'évolution de carrière sur 12 mois. Incluez des objectifs spécifiques, les compétences à développer, les étapes clés à franchir et les actions à mener chaque trimestre. Rendez-le réaliste et directement lié au poste visé.\n\nMon poste actuel : [titre et niveau]\nPoste visé d'ici 12 mois : [titre et niveau]\nÉcarts majeurs à combler : [compétences, expérience ou certifications manquantes]\nRessources disponibles : [formations, mentors, budget, etc.]"
        },
        {
          "title": "Demander une promotion",
          "text": "Rédigez une trame pour demander une promotion à mon manager. Structurez-la sous forme d'une amorce de discussion, d'un récapitulatif de mes contributions et de mon impact, d'une demande claire et d'une invitation à définir ensemble les étapes à venir. Conservez un ton assuré et constructif.\n\nMon titre actuel : [titre]\nTitre sollicité : [titre visé]\nAncienneté dans le poste actuel : [durée]\nAccomplissements majeurs : [listez-en 3 à 5 avec leur impact]\nPourquoi maintenant : [opportunité du calendrier ou élément déclencheur]"
        },
        {
          "title": "Rédiger son auto-évaluation",
          "text": "Aidez-moi à rédiger une auto-évaluation solide pour mon entretien annuel de performance. Pour chaque domaine, mettez en valeur les réalisations concrètes avec un impact mesurable, reconnaissez honnêtement les axes d'amélioration et reliez mon travail aux objectifs de l'équipe et de l'entreprise.\n\nMon poste : [titre]\nProjets majeurs ou responsabilités de la période : [listez-les]\nRéalisations notables : [avec métriques si possible]\nDomaines dans lesquels je souhaite progresser : [soyez précis]\nObjectifs pour la période suivante : [listez-en 2-3]"
        },
        {
          "title": "Analyse des lacunes de compétences",
          "text": "Analysez l'écart entre mes compétences actuelles et les exigences du poste auquel j'aspire. Classez ces lacunes par ordre d'importance, suggérez des moyens concrets de combler chacune d'elles et estimez un calendrier réaliste.\n\nMes compétences actuelles : [listez compétences techniques et soft skills]\nPoste visé : [intitulé du poste]\nDescription du poste ou exigences : [collez ou décrivez les prérequis clés]\nÉchéance envisagée : [mois ou années]"
        }
      ]
    }
  ],
  "startup": [
    {
      "cat": "Idéation",
      "prompts": [
        {
          "title": "Valider une idée d'entreprise",
          "text": "J'ai une idée d'entreprise : [décrivez votre idée en 2-3 phrases].\n\nAidez-moi à la valider en abordant les points suivants :\n1. Clarté du problème — s'agit-il d'un problème réel et douloureux ?\n2. Client cible — qui paierait pour cela ?\n3. Taille du marché — estimation approximative du TAM/SAM/SOM\n4. Risques clés et hypothèses à tester\n5. 3 méthodes rapides et économiques pour valider l'idée avant de développer quoi que ce soit."
        },
        {
          "title": "Identifier son marché cible",
          "text": "Mon produit est : [décrivez votre produit ou service].\n\nAidez-moi à identifier et hiérarchiser mon marché cible :\n1. Listez 5 segments de clients potentiels susceptibles d'en avoir besoin\n2. Pour chaque segment, décrivez l'intensité du besoin (pain point), la propension à payer et la facilité d'accès\n3. Recommandez le segment à cibler en priorité et expliquez pourquoi\n4. Décrivez en détail le profil du client idéal (ICP) pour ce segment."
        },
        {
          "title": "Analyse du paysage concurrentiel",
          "text": "Je développe [décrivez votre produit/service] dans le secteur [secteur/domaine].\n\nAnalysez le paysage concurrentiel :\n1. Qui sont les principaux concurrents directs et indirects ?\n2. Quels sont leurs points forts et leurs points faibles ?\n3. Quelles sont les lacunes ou les besoins mal servis sur le marché ?\n4. Sur quels aspects un nouvel entrant pourrait-il raisonnablement se différencier ?\n5. Qu'est-ce qui inciterait les clients à quitter leurs solutions actuelles ?"
        },
        {
          "title": "Priorisation des fonctionnalités du MVP",
          "text": "Je conçois un MVP pour [décrivez le produit]. Mon utilisateur cible est [décrivez l'utilisateur] et le problème central que je résous est [décrivez le problème].\n\nAidez-moi à prioriser les fonctionnalités :\n1. Listez les fonctionnalités indispensables et non négociables pour un MVP fonctionnel\n2. Listez les fonctionnalités utiles mais non indispensables pour le lancement\n3. Listez les fonctionnalités à reporter à une version ultérieure\n4. Suggérez la version la plus épurée possible que je pourrais déployer en [délai] pour obtenir de vrais retours d'utilisateurs.\n\nUtilisez la méthode MoSCoW si pertinent."
        }
      ]
    },
    {
      "cat": "Pitch et levée de fonds",
      "prompts": [
        {
          "title": "Rédiger un pitch éclair (elevator pitch)",
          "text": "Aidez-moi à rédiger un elevator pitch percutant de 30 secondes pour ma startup.\n\nDétails :\n- Ce que nous faisons : [décrivez le produit/service]\n- Problème que nous résolvons : [décrivez le problème]\n- Client cible : [à qui cela s'adresse]\n- Modèle économique : [comment nous gagnons de l'argent]\n- Traction à ce jour : [métriques, utilisateurs, chiffre d'affaires]\n\nRédigez 3 versions : une pour un investisseur, une pour un client potentiel et une pour un événement de réseautage général. Gardez chaque version sous les 60 mots."
        },
        {
          "title": "Trame narrative du pitch deck",
          "text": "Aidez-moi à construire l'arc narratif du pitch deck destiné à mes investisseurs.\n\nDétails de la startup :\n- Nom de l'entreprise : [nom]\n- Ce que nous faisons : [description]\n- Problème : [problème]\n- Solution : [solution]\n- Marché : [taille du marché]\n- Modèle économique : [comment nous générons des revenus]\n- Traction : [métriques]\n- Équipe : [membres clés]\n- Demande de financement (Ask) : [montant recherché, utilisation des fonds]\n\nPour chaque diapositive (Problème, Solution, Marché, Produit, Traction, Équipe, Demande), rédigez le message clé et 3 points d'appui. Adoptez une approche narrative et orientée investisseurs."
        },
        {
          "title": "E-mail d'introduction auprès d'investisseurs",
          "text": "Rédigez un e-mail à froid pour présenter ma startup à un fonds de capital-risque (VC).\n\nContexte :\n- Thèse de l'investisseur : [ex. SaaS B2B, amorçage (early stage), fintech]\n- Ma startup : [nom et description en une phrase]\n- Pourquoi cet investisseur en particulier : [raison]\n- Traction / éléments probants : [métriques clés ou jalons majeurs]\n- Demande : [ex. un appel d'introduction de 20 minutes]\n\nRédigez un objet percutant et un e-mail de moins de 150 mots. Soyez direct, précis et convaincant. Évitez les formules convenues et les buzzwords."
        },
        {
          "title": "Hypothèses de projections financières",
          "text": "Aidez-moi à formuler les hypothèses clés qui sous-tendent mes prévisions financières sur 3 ans.\n\nModèle économique : [décrivez votre tarification, ex. abonnement SaaS, marketplace, vente unique]\nClient cible : [décrivez le segment de clientèle]\nSituation actuelle : [revenus actuels, utilisateurs, ou pré-revenus]\n\nPour chaque année (A1, A2, A3), aidez-moi à définir des hypothèses réalistes pour :\n1. L'acquisition client (canaux, CAC, rythme de croissance)\n2. Le revenu par client (ACV ou ARPU, attrition/churn)\n3. Les effectifs et recrutements clés\n4. Les principaux postes de coûts\n5. La trajectoire vers le seuil de rentabilité (breakeven)\n\nSignalez les hypothèses les plus susceptibles d'être contestées par les investisseurs."
        }
      ]
    },
    {
      "cat": "Produit",
      "prompts": [
        {
          "title": "Rédiger un PRD (cahier des charges produit)",
          "text": "Rédigez un document de spécifications produit (PRD) pour la fonctionnalité suivante.\n\nNom de la fonctionnalité : [nom de la fonctionnalité]\nProduit : [description du produit]\nProblème utilisateur : [quel problème cela résout-il et pour qui]\nObjectif commercial : [pourquoi développons-nous cela]\n\nLe PRD doit inclure :\n1. Présentation générale et objectifs\n2. User stories (en tant que [utilisateur], je veux [action] afin de [bénéfice])\n3. Exigences fonctionnelles\n4. Éléments hors périmètre (out of scope)\n5. Indicateurs de succès\n6. Questions en suspens\n\nRestez concis et directement exploitable pour une équipe d'ingénierie."
        },
        {
          "title": "Cartographie des récits utilisateurs (User Story Mapping)",
          "text": "Aidez-moi à concevoir un User Story Map pour [produit ou fonctionnalité].\n\nUtilisateur cible : [décrivez l'utilisateur]\nParcours utilisateur principal : [décrivez le flux central du début à la fin]\n\n1. Décomposez le parcours en 5 à 7 activités majeures (la rangée supérieure de la carte)\n2. Sous chaque activité, listez les tâches utilisateur (stories) nécessaires à son accomplissement\n3. Identifiez les stories qui font partie de la version MVP par rapport aux versions ultérieures\n4. Mettez en évidence les éventuelles dépendances entre les stories\n\nPrésentez le résultat sous forme de liste structurée, regroupée par activité."
        },
        {
          "title": "Analyse de stratégie de tarification",
          "text": "Aidez-moi à définir la stratégie de tarification optimale pour mon produit.\n\nProduit : [décrivez ce qu'il fait]\nClient cible : [qui achète, taille d'entreprise, secteur]\nValeur apportée : [quel résultat concret apporte-t-il au client]\nTarifs des concurrents : [que facturent les alternatives]\nIdées actuelles : [toute piste tarifaire déjà envisagée]\n\nAnalysez :\n1. Le meilleur modèle tarifaire (abonnement, à l'usage, achat unique, freemium, etc.) avec avantages et inconvénients\n2. Le niveau de prix recommandé et sa justification\n3. La segmentation en offres/paliers (tiers) si pertinent\n4. Comment tester et valider la tarification avant de la figer\n5. Les erreurs tarifaires fréquentes à éviter sur ce marché."
        },
        {
          "title": "Cadre de priorisation des fonctionnalités",
          "text": "J'ai un backlog de demandes de fonctionnalités et je dois les hiérarchiser. Aidez-moi à appliquer un cadre de priorisation structuré.\n\nProduit : [décrivez le produit]\nStade actuel : [ex. pré-lancement, première traction, passage à l'échelle]\nObjectif commercial prioritaire en ce moment : [ex. retenir les utilisateurs, signer les 100 premiers clients, réduire le churn]\n\nBacklog de fonctionnalités :\n[listez vos fonctionnalités ici]\n\nPour chaque fonctionnalité, évaluez-la sur :\n1. L'impact sur l'objectif commercial prioritaire (1 à 5)\n2. L'effort de développement (1 à 5, 5 étant un effort très élevé)\n3. Le signal de la demande utilisateur (combien d'utilisateurs l'ont demandée)\n4. L'alignement stratégique\n\nClassez-les et recommandez quoi construire en premier, en deuxième, et quoi mettre de côté."
        }
      ]
    },
    {
      "cat": "Croissance (Growth)",
      "prompts": [
        {
          "title": "Stratégie de mise sur le marché (GTM)",
          "text": "Aidez-moi à élaborer une stratégie de mise sur le marché (Go-To-Market / GTM) pour ma startup.\n\nProduit : [décrivez le produit]\nClient cible : [ICP — secteur, taille d'entreprise, rôle, problème rencontré]\nProposition de valeur unique : [ce qui vous rend unique]\nNiveau de prix : [tarification]\nCalendrier de lancement : [date ou période prévue]\n\nAbordez :\n1. Le moteur GTM (product-led, sales-led, ou marketing-led) et ses motivations\n2. Les 3 premiers canaux d'acquisition à privilégier et leur justification\n3. Le plan de lancement pour les 90 premiers jours avec les jalons clés\n4. Les risques majeurs et leurs plans d'atténuation\n5. Les critères de succès à 30, 60 et 90 jours après le lancement."
        },
        {
          "title": "Canaux d'acquisition de clients",
          "text": "Je dois identifier les canaux d'acquisition client les plus pertinents pour ma startup.\n\nProduit : [décrivez le produit]\nClient cible : [qui il est, où il passe son temps en ligne et hors ligne]\nBudget d'acquisition : [fourchette de budget mensuel]\nTaille de l'équipe : [nombre de personnes dédiées à la croissance]\nTraction actuelle : [clients existants ou zéro]\n\nPour chaque canal recommandé :\n1. Pourquoi il correspond à mon client et à mon produit\n2. La fourchette estimée de coût d'acquisition client (CAC)\n3. Comment le tester à faible coût en 2 semaines\n4. À quoi ressemble ce canal une fois passé à l'échelle\n\nClassez les canaux selon le potentiel de retour sur investissement (ROI) le plus élevé pour mon stade de développement."
        },
        {
          "title": "Stratégie de rétention",
          "text": "Aidez-moi à concevoir une stratégie de rétention pour mon produit.\n\nProduit : [décrivez le produit]\nType d'utilisateur : [B2B ou B2C, décrivez l'utilisateur]\nRétention actuelle : [ex. taux de rétention à 30 jours ou taux de churn si connu]\nModèle d'usage idéal : [à quelle fréquence les utilisateurs devraient-ils idéalement utiliser le produit]\nPrincipales raisons de désabonnement (si connues) : [listez-les]\n\nFournissez :\n1. Le levier de rétention le plus important à travailler en premier et pourquoi\n2. Un parcours d'intégration (onboarding) guidant plus vite les utilisateurs vers le moment « eurêka » (aha moment)\n3. 3 campagnes d'e-mails ou de notifications sur le cycle de vie pour améliorer la rétention\n4. Des fonctionnalités ou ajustements in-app pour réduire le churn\n5. La méthode pour repérer les utilisateurs à risque avant qu'ils ne partent."
        },
        {
          "title": "Conception d'un tableau de bord de métriques",
          "text": "Aidez-moi à concevoir le tableau de bord des métriques fondamentales de ma startup.\n\nType d'activité : [ex. SaaS B2B, marketplace, application grand public, e-commerce]\nStade : [pré-revenu / amorçage / passage à l'échelle]\nObjectif prioritaire actuel : [ex. augmenter le MRR, améliorer la rétention, doper l'activation]\n\nDéfinissez :\n1. L'unique métrique directrice (North Star Metric) à optimiser en priorité\n2. Les 5 à 7 métriques clés qui alimentent cette North Star (métriques d'entrée/inputs)\n3. Les métriques de santé opérationnelle à surveiller (pour détecter les anomalies en amont)\n4. Les métriques à ignorer délibérément à mon stade actuel\n5. Un rituel de revue hebdomadaire simple articulé autour de ces indicateurs."
        }
      ]
    },
    {
      "cat": "Opérations",
      "prompts": [
        {
          "title": "Plan de recrutement",
          "text": "Aidez-moi à élaborer un plan de recrutement pour ma startup.\n\nÉquipe actuelle : [listez les rôles et effectifs actuels]\nStatut financier : [autofinancé (bootstrapped) / pré-amorçage / amorçage / Série A]\nTrésorerie restante (Runway) : [mois de runway disponibles]\nPriorités clés des 12 prochains mois : [listez 2 à 3 objectifs majeurs]\n\nFournissez :\n1. Les 3 premiers recrutements à effectuer et pourquoi (par ordre de priorité)\n2. Pour chaque rôle : intitulé, responsabilités clés, compétences indispensables, et type de contrat (plein temps, temps partiel ou freelance)\n3. Comment attirer des profils de premier plan sans budget de chasse de têtes important\n4. Les signaux d'alerte (red flags) à surveiller lors de recrutements en phase de démarrage\n5. Un processus de recrutement simple, réactif et garantissant le niveau d'exigence."
        },
        {
          "title": "Charte de culture d'entreprise",
          "text": "Aidez-moi à rédiger le document fondateur de la culture d'entreprise de ma startup.\n\nEntreprise : [nom et activité]\nStade de maturité : [taille de l'équipe, étape de développement]\nValeurs des fondateurs : [listez 3 à 5 valeurs qui vous tiennent personnellement à cœur]\nOrganisation du travail : [télétravail / présentiel / hybride]\nProfil de l'équipe visée : [décrivez en une phrase le collectif que vous souhaitez bâtir]\n\nRédigez :\n1. Une déclaration de culture concise (2 à 3 phrases)\n2. 4 à 6 valeurs fondamentales explicitant concrètement ce que chacune implique au quotidien\n3. 3 exemples illustrant l'application de ces valeurs dans les décisions de tous les jours\n4. Les comportements formellement proscrits (anti-valeurs)\n5. La manière de préserver cette culture au fur et à mesure que l'équipe s'agrandit."
        },
        {
          "title": "Définition des OKR",
          "text": "Aidez-moi à fixer les OKR (Objectifs et Résultats Clés) de ma startup.\n\nStade de l'entreprise : [ex. seed, Série A]\nPériode visée : [T1 2026 ou annuel]\nPriorités stratégiques majeures : [listez 2 à 3 priorités d'entreprise]\nNiveau de référence actuel des métriques : [données chiffrées si disponibles]\n\nPour chaque priorité, définissez :\n- 1 Objectif (inspirant, qualitatif, donnant le cap)\n- 3 Résultats Clés (mesurables, spécifiques, limités dans le temps)\n\nFournissez également :\n1. La méthode pour décliner les OKR au niveau de chaque équipe\n2. Un rythme de suivi régulier et un système de notation des résultats\n3. Les erreurs fréquentes d'application des OKR à éviter dans une jeune startup."
        },
        {
          "title": "Évaluation d'outils et de prestataires",
          "text": "Aidez-moi à évaluer et choisir entre plusieurs solutions ou prestataires pour [besoin précis, ex. CRM, data warehouse, support client].\n\nCas d'usage : [décrivez exactement la tâche attendue]\nTaille de l'équipe : [nombre d'utilisateurs prévus]\nBudget : [fourchette de budget mensuel]\nExigences indispensables : [critères non négociables]\nExigences souhaitables : [besoins secondaires appréciables]\n\nOptions à l'étude :\n1. [Option A]\n2. [Option B]\n3. [Option C]\n\nComparez-les sur : les fonctionnalités, les prix, la simplicité de déploiement, la scalabilité, les intégrations et le support. Recommandez une option avec des arguments limpides et signalez tout coût caché ou risque de dépendance technologique (lock-in)."
        }
      ]
    },
    {
      "cat": "Juridique et finance",
      "prompts": [
        {
          "title": "Trame des conditions générales d'utilisation (CGU)",
          "text": "Aidez-moi à élaborer la structure des Conditions Générales d'Utilisation (CGU) de mon produit.\n\nType de produit : [ex. application SaaS, marketplace, application grand public]\nUtilisateurs : [clients B2B / particuliers / les deux]\nFonctionnalités clés : [décrivez les actions réalisables par les utilisateurs]\nPréoccupations spécifiques : [ex. contenu généré par les utilisateurs, paiements, gestion des données]\n\nFournissez :\n1. Une structure recommandée regroupant toutes les sections incontournables des CGU\n2. Un résumé vulgarisé de ce que chaque section doit stipuler et de sa portée juridique\n3. Les clauses particulièrement stratégiques pour mon type de produit\n4. Les erreurs courantes commises par les fondateurs à leurs débuts\n\nRemarque : ce travail sert uniquement de préparation — un avocat spécialisé validera le document final."
        },
        {
          "title": "Considérations relatives à la politique de confidentialité",
          "text": "Aidez-moi à comprendre ce que ma politique de confidentialité doit obligatoirement couvrir.\n\nProduit : [décrivez le produit]\nDonnées collectées : [listez les types de données, ex. e-mail, coordonnées bancaires, données d'usage]\nLocalisation des utilisateurs : [ex. France/UE, États-Unis, monde entier]\nOutils tiers utilisés : [ex. Stripe, Google Analytics, Intercom]\n\nAbordez :\n1. Les sections fondamentales que toute politique de confidentialité doit comporter\n2. Les exigences légales spécifiques selon la localisation géographique des utilisateurs (RGPD, CCPA, etc.)\n3. Les données collectées nécessitant un consentement explicite\n4. Les mentions obligatoires concernant le partage de données avec des tiers\n5. La procédure à suivre pour maintenir la politique à jour au fil des évolutions du produit\n\nRemarque : ceci est une aide à la préparation — le document sera relu par un professionnel du droit."
        },
        {
          "title": "Simulation de table de capitalisation (Cap Table)",
          "text": "Aidez-moi à modéliser un scénario de table de capitalisation (cap table) pour ma startup.\n\nCap table actuelle :\n- Fondateur 1 : [nom, % détenu]\n- Fondateur 2 : [nom, % détenu]\n- Pool d'options d'employés (BSPCE/ESOP) : [%]\n- Autres : [business angels, BSA-AIR/SAFE, etc.]\n\nProjet de levée de fonds :\n- Type de tour : [ex. Seed, Série A]\n- Montant recherché : [montant]\n- Valorisation pré-monnaie (pre-money) : [montant] (ou 'aidez-moi à l'estimer')\n- Nouvel investisseur : [nom ou 'À définir']\n\nPrésentez :\n1. Les pourcentages de détention post-monnaie pour l'ensemble des parties prenantes\n2. L'impact du réabondement éventuel du pool d'options sur la dilution des fondateurs\n3. La configuration complète de la cap table à l'issue de ce tour\n4. Les clauses clés à négocier au-delà de la simple valorisation (droit de prorata, sièges au conseil d'administration, etc.)"
        },
        {
          "title": "Analyse de la rentabilité unitaire (Unit Economics)",
          "text": "Aidez-moi à analyser la rentabilité unitaire (unit economics) de mon activité.\n\nModèle économique : [décrivez comment vous générez des revenus]\nTarification : [montant facturé et fréquence de paiement]\nCoûts principaux pour acquérir un client : [principaux éléments composant le CAC]\nCoûts opérationnels pour servir un client : [principaux coûts directs/COGS par client]\nTaux d'attrition (churn) si connu : [mensuel ou annuel]\n\nCalculez et explicitez :\n1. Le Coût d'Acquisition Client (CAC)\n2. Le Revenu Moyen Par Utilisateur (ARPU) ou la Valeur Annuelle du Contrat (ACV)\n3. La marge brute par client\n4. La Valeur Vie Client (Customer Lifetime Value / LTV)\n5. Le ratio LTV:CAC et ce qu'il indique sur la pérennité économique de l'activité\n6. La période de retour sur investissement du CAC (Payback period)\n7. Les leviers prioritaires à actionner pour atteindre une rentabilité unitaire saine."
        }
      ]
    }
  ],
  "data": [
    {
      "cat": "SQL",
      "prompts": [
        {
          "title": "Écrire une requête SQL",
          "text": "Rédigez une requête SQL pour la tâche suivante :\n\nTâche : [décrivez votre besoin, ex. trouver tous les utilisateurs inscrits au cours des 30 derniers jours ayant effectué au moins un achat]\n\nTables et colonnes concernées :\n\n[décrivez votre schéma ou collez les instructions CREATE TABLE]\n\nBase de données : [ex. PostgreSQL, MySQL, BigQuery]\n\nFournissez la requête commentée en expliquant chaque étape clé."
        },
        {
          "title": "Optimiser une requête lente",
          "text": "Cette requête SQL est trop lente. Aidez-moi à l'optimiser.\n\nRequête :\n\n[collez la requête ici]\n\nBase de données : [ex. PostgreSQL, MySQL]\nVolume des tables : [ex. la table orders contient 50 millions de lignes, users en contient 2 millions]\nIndex existants : [listez-les ou collez le résultat de EXPLAIN]\n\nIdentifiez les goulots d'étranglement, préconisez des ajouts d'index et réécrivez la requête si nécessaire. Expliquez chaque optimisation apportée."
        },
        {
          "title": "Expliquer une requête complexe",
          "text": "Expliquez cette requête SQL en langage simple. Détaillez-la pas à pas — ce que fait chaque clause, quelles données intermédiaires sont produites et ce que représente le résultat final :\n\n[collez la requête ici]"
        },
        {
          "title": "Conception de schéma de base de données",
          "text": "Concevez un schéma de base de données pour le cas d'usage suivant :\n\nCas d'usage : [décrivez votre application ou fonctionnalité, ex. un SaaS multi-locataire avec projets, tâches et rôles utilisateurs]\n\nBase de données : [ex. PostgreSQL]\n\nIncluez : les noms de tables, les colonnes avec leurs types et contraintes, les clés primaires et étrangères, les index, ainsi qu'une explication de vos choix d'architecture et des compromis effectués."
        }
      ]
    },
    {
      "cat": "Analyse de données",
      "prompts": [
        {
          "title": "Plan d'analyse exploratoire des données (EDA)",
          "text": "Je dispose d'un jeu de données et souhaite mener une analyse exploratoire des données. Établissez un plan d'action EDA étape par étape.\n\nDescription du jeu de données : [décrivez les colonnes, les types de données, le volume approximatif et le domaine métier, ex. commandes e-commerce avec ID client, produit, prix, date]\n\nProblématique métier à résoudre : [décrivez-la]\n\nIncluez : vérifications de la qualité des données, analyse univariée, relations à explorer, visualisations à produire et anomalies potentielles à surveiller."
        },
        {
          "title": "Test de significativité statistique",
          "text": "Aidez-moi à choisir et interpréter le test statistique adéquat pour mon analyse.\n\nÉléments comparés : [ex. taux de conversion entre deux groupes d'utilisateurs]\nType de données : [ex. résultats binaires, mesures continues]\nTailles d'échantillon : [ex. Groupe A : 1 200, Groupe B : 1 400]\nRésultats observés : [ex. Groupe A : 4,2 %, Groupe B : 5,1 %]\n\nRecommandez le test approprié, énoncez les hypothèses préalables requises, fournissez le calcul ou le code, et expliquez comment interpréter la p-value et l'intervalle de confiance en termes simples."
        },
        {
          "title": "Analyse de cohortes",
          "text": "Aidez-moi à concevoir et interpréter une analyse de cohortes.\n\nObjectif : [ex. mesurer la rétention à 30/60/90 jours selon le mois d'inscription]\nDonnées disponibles : [décrivez les tables et colonnes, ex. table users avec signup_date, table events avec user_id et event_date]\nOutil / Base de données : [ex. BigQuery, pandas]\n\nRédigez la requête ou le code pour générer la table de cohortes, expliquez la lecture des résultats et pointez les pièges d'interprétation classiques."
        },
        {
          "title": "Interprétation d'une tendance",
          "text": "J'observe une tendance dans mes données et j'ai besoin d'aide pour l'interpréter.\n\nMétrique suivie : [ex. utilisateurs actifs hebdomadaires (WAU)]\nConstat : [ex. baisse de 15 % au cours des 6 dernières semaines après une croissance régulière]\nContexte : [événements connus, changements de produit, saisonnalité ou facteurs externes]\n\nAidez-moi à : identifier les causes probables, éliminer les biais ou artefacts de données, proposer des analyses complémentaires pour confirmer la cause profonde et recommander des actions correctives."
        }
      ]
    },
    {
      "cat": "Visualisation",
      "prompts": [
        {
          "title": "Recommandation de type de graphique",
          "text": "Recommandez le type de graphique le plus adapté à mon cas d'usage et expliquez pourquoi.\n\nCe que je souhaite mettre en évidence : [ex. la répartition du chiffre d'affaires par catégorie de produits et son évolution mois après mois]\nPublic visé : [ex. comité de direction lors d'une revue trimestrielle]\nStructure des données : [ex. 12 mois x 6 catégories, valeurs comprises entre 10 k$ et 2 M$]\nOutil utilisé : [ex. Tableau, matplotlib, Looker Studio]\n\nProposez 2 à 3 alternatives, hiérarchisez-les et explicitez les compromis de lisibilité de chacune."
        },
        {
          "title": "Agencement d'un tableau de bord",
          "text": "Aidez-moi à concevoir un agencement de tableau de bord clair et efficace.\n\nFinalité : [ex. suivi opérationnel quotidien pour une équipe support]\nMétriques clés à afficher : [listez-les, ex. tickets ouverts, délai de résolution, score CSAT, volume par canal]\nUtilisateurs et modalité d'usage : [ex. les chefs d'équipe le consultent au début de chaque rotation]\nOutil : [ex. Metabase, Tableau, Grafana]\n\nProposez un agencement par sections, les types de graphiques pour chaque indicateur et les meilleures pratiques UX pour une lisibilité instantanée."
        },
        {
          "title": "Narration de données (Data Storytelling)",
          "text": "Aidez-moi à transformer ces données en une narration percutante pour une présentation.\n\nConclusions clés : [listez 3 à 5 enseignements majeurs de votre analyse]\nAudience : [ex. décideurs non techniques, direction générale]\nObjectif de la présentation : [ex. obtenir l'arbitrage budgétaire pour investir dans la rétention]\n\nConstruisez une trame narrative qui démarre par le constat le plus marquant, l'étaye par des preuves chiffrées précises et se conclut par une recommandation opérationnelle claire. Restez concis et bannissez le jargon superflu."
        },
        {
          "title": "Annoter un graphique",
          "text": "Aidez-moi à rédiger des annotations pour rendre ce graphique parfaitement explicite et autonome.\n\nType de graphique : [ex. graphique linéaire]\nCe qu'il représente : [ex. chiffre d'affaires mensuel sur les 2 dernières années]\nMoments charnières à souligner : [ex. lancement produit en mars, changement de tarification en août, fléchissement en décembre]\nPublic : [ex. investisseurs dans un pitch deck]\n\nRédigez 3 à 5 annotations concises et percutantes, ainsi qu'un titre et un sous-titre de graphique en une phrase chacun."
        }
      ]
    },
    {
      "cat": "Nettoyage de données",
      "prompts": [
        {
          "title": "Check-list de nettoyage des données",
          "text": "Générez une check-list complète de nettoyage de données pour mon dataset.\n\nDescription du jeu de données : [décrivez les colonnes, types de données, source et domaine métier]\nAnomalies déjà repérées : [listez les problèmes identifiés, ex. doublons, formats de date hétérogènes, valeurs manquantes dans des colonnes critiques]\nUsage final : [ex. entraînement d'un modèle de machine learning, création d'un dashboard]\n\nOrganisez la liste par ordre de priorité en précisant les contrôles systématiques à effectuer et la méthode de traitement pour chaque écueil."
        },
        {
          "title": "Stratégie de gestion des valeurs manquantes",
          "text": "Aidez-moi à choisir la meilleure approche pour traiter les valeurs manquantes dans mon jeu de données.\n\nColonne concernée : [nom de la colonne et sa signification]\nPourcentage de données manquantes : [ex. 18 %]\nType de données : [ex. numérique, catégoriel, date/heure]\nUtilisation de la colonne : [ex. variable explicative dans une régression]\n\nComparez les différentes options (suppression des lignes, imputation par la moyenne/médiane/mode, imputation par modèle, encodage en catégorie distincte) et recommandez la plus rigoureuse avec argumentation."
        },
        {
          "title": "Détection des valeurs aberrantes (outliers)",
          "text": "Aidez-moi à détecter et traiter les valeurs aberrantes (outliers) dans mon jeu de données.\n\nColonne : [nom de la colonne et sa signification]\nType de données : [numérique / date/heure]\nStatistiques descriptives : [ex. min : 0, max : 99 000, moyenne : 450, médiane : 380, écart-type : 1 200]\nContexte : [ex. montant des commandes en euros ; des valeurs très élevées peuvent être des commandes grossistes légitimes ou des erreurs de saisie]\n\nProposez les méthodes de détection adaptées (IQR, Z-score, forêt d'isolement, etc.), fournissez le code en [Python/SQL] et conseillez le traitement optimal pour les anomalies confirmées."
        },
        {
          "title": "Harmoniser des données hétérogènes",
          "text": "Aidez-moi à uniformiser les valeurs incohérentes présentes dans cette colonne.\n\nNom de la colonne : [ex. pays]\nÉchantillon de valeurs désordonnées : [ex. 'USA', 'United States', 'US', 'u.s.a', 'America']\nFormat cible souhaité : [ex. codes pays ISO 3166-1 alpha-2]\nOutil utilisé : [ex. Python pandas, SQL, dbt]\n\nÉcrivez le code permettant de mapper et standardiser ces valeurs, gérez les cas particuliers et isolez les valeurs impossibles à convertir automatiquement."
        }
      ]
    },
    {
      "cat": "Python et R",
      "prompts": [
        {
          "title": "Écrire un pipeline de données pandas",
          "text": "Rédigez un pipeline de transformation de données pandas pour la tâche suivante.\n\nEntrée : [décrivez la source, ex. un fichier CSV avec les colonnes user_id, event_type, timestamp, revenue]\nTransformations requises :\n1. [ex. filtrer uniquement sur les événements d'achat]\n2. [ex. agréger les revenus par utilisateur et par mois]\n3. [ex. calculer le taux de croissance mensuel]\nSortie attendue : [décrivez le résultat souhaité, ex. un DataFrame avec une ligne par utilisateur et par mois]\n\nÉcrivez un code propre, lisible et commenté. Utilisez le chaînage de méthodes (method chaining) là où il améliore la clarté."
        },
        {
          "title": "Créer une visualisation matplotlib/seaborn",
          "text": "Écrivez le code Python pour créer la visualisation suivante.\n\nType de graphique : [ex. heatmap, diagramme en barres groupées, série temporelle avec intervalle de confiance]\nDonnées : [décrivez la structure du DataFrame, ex. df comporte les colonnes month, category, value]\nContraintes de style : [ex. fond sombre, palette adaptée aux daltoniens, absence de bordures]\nSortie : [ex. sauvegarde au format PNG à 300 DPI]\n\nUtilisez matplotlib et/ou seaborn. Ajoutez les titres appropriés, les étiquettes d'axes et la légende. Le rendu doit être de qualité publication."
        },
        {
          "title": "Idées d'ingénierie des caractéristiques (Feature Engineering)",
          "text": "Proposez des idées d'ingénierie des caractéristiques (feature engineering) pour mon jeu de données de machine learning.\n\nVariable cible à prédire : [ex. si un utilisateur va résilier dans les 30 prochains jours]\nVariables brutes disponibles : [listez-les avec leurs types, ex. signup_date (date), last_login (date), num_sessions (entier), plan_type (catégoriel)]\nNiveau d'agrégation : [ex. une ligne par utilisateur]\n\nProposez 10 à 15 variables dérivées, expliquez l'intuition métier derrière chacune et fournissez le code pandas pour les générer."
        },
        {
          "title": "Écrire un script de validation des données",
          "text": "Rédigez un script Python de validation de données pour mon dataset.\n\nJeu de données : [décrivez les colonnes, les types et la source]\nRègles de validation à appliquer :\n1. [ex. user_id doit être non nul et unique]\n2. [ex. event_date doit être comprise entre le 2020-01-01 et aujourd'hui]\n3. [ex. revenue doit être >= 0]\n4. [ex. status doit appartenir à : active, inactive, pending]\n\nLe script doit afficher un récapitulatif complet de toutes les anomalies relevées, plutôt que d'interrompre l'exécution à la première erreur. Utilisez pandas ou Great Expectations."
        }
      ]
    },
    {
      "cat": "Rapports et synthèse",
      "prompts": [
        {
          "title": "Synthèse pour la direction à partir des données",
          "text": "Rédigez un résumé exécutif à destination de la direction basé sur les résultats de données suivants.\n\nContexte : [ex. bilan de performance du T1 2026 pour un produit SaaS]\nIndicateurs clés :\n- [métrique 1] : [valeur et variation par rapport à la période précédente]\n- [métrique 2] : [valeur et variation]\n- [métrique 3] : [valeur et variation]\nFaits marquants : [ex. déploiement de la fonctionnalité X en février, perte d'un compte clé en mars]\n\nRédigez une synthèse de 150 à 200 mots. Débutez par l'enseignement stratégique majeur, abordez sans détour les points de vigilance et concluez par les 2 ou 3 priorités d'action pour le prochain trimestre."
        },
        {
          "title": "Rapport hebdomadaire de métriques",
          "text": "Rédigez un rapport hebdomadaire synthétique à partir des chiffres suivants.\n\nÉquipe / produit : [ex. Équipe Growth, application mobile]\nSemaine : [ex. semaine du 17 mars 2026]\nMétriques de la semaine :\n- [indicateur] : [valeur] vs [valeur semaine précédente]\n- [indicateur] : [valeur] vs [valeur semaine précédente]\nPoints forts : [succès ou événements notables]\nPoints de vigilance : [baisses inattendues ou incidents]\n\nPrésentez le tout sous la forme d'un court message Slack ou e-mail : 3 à 5 points à puces, langage clair, sans jargon. Mettez en avant les points nécessitant un arbitrage."
        },
        {
          "title": "Compte-rendu de résultats d'A/B test",
          "text": "Rédigez un compte-rendu clair des résultats de mon test A/B à destination d'un public non technique.\n\nNom du test : [ex. Nouveau tunnel de commande]\nHypothèse : [ex. Simplifier le paiement en 2 étapes va augmenter le taux de conversion]\nContrôle vs Variante : [décrivez la modification]\nRésultats :\n- Métrique principale : [ex. taux de conversion] — Contrôle : [X %], Variante : [Y %], gain relatif : [Z %]\n- Significativité statistique : [ex. p=0,03, intervalle de confiance à 95 % : +1,2 % à +4,8 %]\n- Métriques secondaires : [métriques garde-fous et leurs résultats]\nDurée du test : [ex. 14 jours, 25 000 utilisateurs par groupe]\n\nExplicitez le sens des résultats, tranchez sur l'opportunité de déployer la modification et signalez les éventuelles réserves."
        },
        {
          "title": "Documentation de dictionnaire de données",
          "text": "Rédigez un dictionnaire de données pour la table ou le jeu de données suivant.\n\nNom de la table : [ex. orders]\nColonnes :\n- [nom_colonne] : [type, ex. INT] — [brève description du contenu]\n- [nom_colonne] : [type] — [description]\n- [ajoutez-en selon les besoins]\nPublic destinataire : [ex. nouveaux data analysts intégrant l'équipe]\n\nPour chaque colonne, précisez : nom, type de données, description, exemples de valeurs, acceptation des valeurs nulles et particularités ou pièges connus. Présentez le document sous forme d'un tableau markdown clair."
        }
      ]
    }
  ],
  "design": [
    {
      "cat": "Revue d'interface (UI)",
      "prompts": [
        {
          "title": "Critique d'un design d'interface",
          "text": "Agissez en tant que designer produit senior. Faites la critique constructive de ce design d'interface :\n\n[décrivez l'écran ou collez une description/capture d'écran]\n\nÉvaluez : la hiérarchie visuelle, les espacements, la typographie, la palette de couleurs et la cohérence d'ensemble. Soyez précis sur les améliorations à apporter et justifiez chacune d'elles."
        },
        {
          "title": "Check-list d'audit d'accessibilité",
          "text": "Auditez l'accessibilité de cette interface selon les critères WCAG 2.1 AA :\n\n[décrivez l'interface ou listez ses composants]\n\nVérifiez : les contrastes de couleurs, la navigation au clavier, les états de focus, la compatibilité avec les lecteurs d'écran, la taille des zones tactiles et l'utilisation des attributs ARIA. Classez les anomalies par niveau de gravité."
        },
        {
          "title": "Revue de responsivité mobile",
          "text": "Examinez ce design d'interface sous l'angle de l'adaptation mobile (responsive) :\n\n[décrivez la mise en page ou listez les composants]\n\nIdentifiez : les éléments qui s'adapteront mal aux petits écrans, les cibles tactiles trop exiguës, les risques de débordement de contenu et les défauts d'espacement. Proposez des correctifs précis."
        },
        {
          "title": "Analyse de la hiérarchie visuelle",
          "text": "Analysez la hiérarchie visuelle de cette interface :\n\n[décrivez l'agencement de l'écran et ses éléments]\n\nDéterminez : où se pose le regard de l'utilisateur en premier, si cette hiérarchie sert efficacement son objectif et quelles modifications permettraient d'améliorer le balayage visuel et la compréhension."
        }
      ]
    },
    {
      "cat": "Recherche utilisateur (UX)",
      "prompts": [
        {
          "title": "Rédiger des questions d'entretien utilisateur",
          "text": "Rédigez un guide d'entretien utilisateur pour explorer [thème ou fonctionnalité, ex. 'comment les gens gèrent leurs finances personnelles'].\n\nPrévoyez : 3 questions de mise en confiance, 8 à 10 questions de fond et 2 questions de conclusion. Formulez des questions ouvertes et évitez toute tournure orientée."
        },
        {
          "title": "Créer un persona utilisateur",
          "text": "Créez un persona utilisateur réaliste pour [produit ou fonctionnalité].\n\nUtilisateur cible : [description générale, ex. 'graphistes freelances, 28–40 ans']\n\nIncluez : nom, âge, métier, objectifs, frustrations, comportements clés et une citation représentative. Rendez-le concret et directement exploitable par l'équipe."
        },
        {
          "title": "Protocole de test d'utilisabilité",
          "text": "Rédigez un protocole de test d'utilisabilité pour [fonctionnalité ou parcours, ex. 'le parcours de commande'].\n\nIncluez : l'introduction de l'animateur, le recueil du consentement, 4 à 6 scénarios de tâches contextualisés et des questions de relance après chaque tâche. Veillez à ne jamais dévoiler le parcours idéal."
        },
        {
          "title": "Conception d'un questionnaire de feedback",
          "text": "Concevez un questionnaire utilisateur pour recueillir des retours sur [fonctionnalité, ex. 'notre nouveau parcours d'onboarding'].\n\nPrévoyez : 1 question NPS ou CSAT, 4 à 6 questions à échelle ou à choix multiples et 2 questions ouvertes. Le temps de réponse doit être inférieur à 3 minutes. Proposez un ordonnancement optimal des questions."
        }
      ]
    },
    {
      "cat": "Design Systems",
      "prompts": [
        {
          "title": "Convention de nommage des composants",
          "text": "Proposez une convention de nommage pour les composants d'interface de notre design system.\n\nContexte : [ex. 'Nous utilisons React, Figma, avec une combinaison de composants atomiques et composés']\n\nCouvrez : les noms de composants, les variantes, les propriétés (props) et le nommage des calques/fichiers dans Figma. Donnez des exemples concrets pour un Bouton, une Modale et un Champ de formulaire."
        },
        {
          "title": "Rédiger la documentation d'un composant",
          "text": "Rédigez une documentation complète et claire pour ce composant d'interface :\n\nComposant : [nom du composant, ex. 'Notification Toast']\nPropriétés/variantes : [listez-les]\nContexte d'utilisation : [où il intervient]\n\nIncluez : description générale, quand l'utiliser et quand ne pas l'utiliser, tableau des propriétés, considérations d'accessibilité et exemple d'intégration."
        },
        {
          "title": "Structure des jetons de design (Design Tokens)",
          "text": "Proposez une architecture de tokens de design pour [nom du produit ou du design system].\n\nCouleurs de marque : [listez les couleurs principales]\nTypographie : [listez les polices ou l'échelle typographique]\nContexte : [ex. application web, application mobile, ou les deux]\n\nOrganisez les tokens en : couleur, typographie, espacements, rayons de bordure (radius), ombres et animations. Illustrez avec des exemples de tokens primitifs et sémantiques."
        },
        {
          "title": "Audit de la bibliothèque de composants",
          "text": "Aidez-moi à auditer notre bibliothèque de motifs d'interface (pattern library) pour éliminer les incohérences.\n\nVoici la liste de nos composants et variantes actuels :\n\n[collez la liste des composants]\n\nIdentifiez : les doublons répondant au même besoin, les écarts de nommage, les manques nécessitant la création d'un composant réutilisable et les composants trop spécifiques pour être mutualisés."
        }
      ]
    },
    {
      "cat": "Wireframing et architecture",
      "prompts": [
        {
          "title": "Flux utilisateur d'une fonctionnalité",
          "text": "Cartographiez le parcours utilisateur (user flow) pour [fonctionnalité, ex. 'réinitialisation du mot de passe'].\n\nObjectif utilisateur : [ce qu'il cherche à accomplir]\nPoint d'entrée : [par où il commence]\n\nListez chaque étape franchie, les choix rencontrés ainsi que les embranchements d'erreur ou cas limites. Présentez sous forme de séquence numérotée avec embranchements."
        },
        {
          "title": "Architecture de l'information d'une section",
          "text": "Proposez l'architecture de l'information pour [section d'application, ex. 'l'espace paramètres d'un tableau de bord SaaS'].\n\nTypes d'utilisateurs : [listez si plusieurs profils]\nTâches clés effectuées : [listez 4 à 6 tâches]\n\nSuggérez une arborescence de navigation articulée en sections principales, sous-sections et actions associées. Justifiez vos regroupements."
        },
        {
          "title": "Proposition de structure de navigation",
          "text": "Proposez une architecture de navigation pour [produit, ex. 'un outil de gestion de projet B2B'].\n\nFonctionnalités majeures : [listez les fonctionnalités]\nRôles utilisateurs : [listez les profils le cas échéant]\n\nRecommandez : les éléments de navigation principale, la navigation secondaire et la gestion des accès selon les rôles. Prenez en compte le panneau latéral (sidebar) sur desktop et la barre inférieure sur mobile."
        },
        {
          "title": "Conception d'un flux d'onboarding",
          "text": "Concevez le flux d'accueil et d'onboarding pour [produit, ex. 'une application mobile de suivi des habitudes'].\n\nObjectif du nouvel utilisateur : [ce qu'il doit accomplir pour percevoir la valeur]\nÉtapes de configuration obligatoires : [listez les prérequis stricts, ex. 'créer sa première habitude']\n\nProposez : l'enchaînement des écrans, les informations à demander tout de suite vs plus tard, l'indicateur de progression et la gestion de l'option « passer pour l'instant ». Réduisez au strict minimum le délai d'accès à la valeur."
        }
      ]
    },
    {
      "cat": "Microcopie et UX Writing",
      "prompts": [
        {
          "title": "Rédaction de messages d'erreur",
          "text": "Rédigez des messages d'erreur clairs, bienveillants et utiles pour ces situations :\n\n[listez les cas d'erreur, ex. 'format d'e-mail invalide', 'fichier trop volumineux', 'session expirée']\n\nPour chaque scénario : écrivez le titre de l'erreur, une explication simple de l'incident et l'action précise que l'utilisateur doit mener. Tonalité : [ex. chaleureuse, professionnelle, épurée]."
        },
        {
          "title": "Textes pour états vides (Empty States)",
          "text": "Rédigez la microcopie des états vides (empty states) pour ces écrans :\n\n[listez les états, ex. 'aucun résultat de recherche', 'aucune notification pour le moment', 'aucun fichier importé']\n\nPour chacun : formulez un titre, une explication en 1 ou 2 phrases et un bouton d'action si opportun. Tonalité : [ex. encourageante, sobre, enjouée]. Proscrivez les formules vides du type 'Rien à voir ici'."
        },
        {
          "title": "Variantes de libellés de boutons et CTA",
          "text": "Rédigez plusieurs variantes de libellés pour un bouton d'appel à l'action pour [action ou fonctionnalité, ex. 'démarrer un essai gratuit'].\n\nEmplacement : [où se trouve le bouton, ex. 'page de tarification', 'état vide', 'en-tête de modale']\nTon : [ex. direct, axé sur le bénéfice, sans engagement]\n\nProposez 6 à 8 options classées de la plus incitative à la plus neutre. Explicitez les nuances de chacune."
        },
        {
          "title": "Infobulles et textes d'aide",
          "text": "Rédigez des infobulles (tooltips) et des textes d'aide contextuels pour ces éléments d'interface :\n\n[listez les éléments, ex. 'champ de clé d'API', 'sélecteur de cycle de facturation', 'paramètre de fréquence des notifications']\n\nPour chacun : écrivez une infobulle concise (moins de 15 mots) et un texte d'aide optionnel plus détaillé pour un affichage sous le champ. Privilégiez la limpidité à l'esprit."
        }
      ]
    },
    {
      "cat": "Présentation et restitution",
      "prompts": [
        {
          "title": "Argumentaire de choix de design",
          "text": "Aidez-moi à rédiger une argumentation solide pour justifier ce choix de design :\n\nDécision : [décrivez le parti pris, ex. 'Nous sommes passés d'un affichage par onglets à une page unique à défilement continu']\nContexte : [quel problème cela résout ou quelle donnée/retour utilisateur motive ce choix]\nAlternatives explorées : [listez-en 1 ou 2]\n\nRédigez une synthèse claire à partager avec les parties prenantes précisant : le problème, la décision prise, pourquoi c'est la meilleure option et les arbitrages consentis."
        },
        {
          "title": "Plan de présentation de revue de design",
          "text": "Élaborez le plan d'une présentation de revue de design pour [fonctionnalité ou projet].\n\nPublic : [ex. 'équipe produit + leads ingénierie']\nObjectif de la revue : [ex. 'obtenir la validation finale avant transmission aux développeurs' ou 'recueillir des retours d'orientation']\nStade : [ex. 'premières esquisses', 'maquettes avancées', 'designs finalisés']\n\nIncluez : les sections suggérées, les livrables à montrer dans chacune, le temps alloué et la formulation exacte des attentes de feedback."
        },
        {
          "title": "Récit comparatif avant/après",
          "text": "Rédigez un récit comparatif avant/après pour valoriser cette refonte de design :\n\nAvant : [décrivez l'ancien design et ses défauts]\nAprès : [décrivez la nouvelle interface et ce qui a changé]\nMétriques ou retours utilisateurs (si existants) : [collez-les]\n\nÉcrivez une histoire concise exploitable pour une étude de cas ou un point d'étape avec les parties prenantes, expliquant le problème initial, le déclic de conception et l'impact mesurable du changement."
        },
        {
          "title": "Synthèse des retours des parties prenantes",
          "text": "Aidez-moi à synthétiser et structurer ces retours de parties prenantes recueillis lors d'une revue de design :\n\n[collez les notes brutes ou les commentaires]\n\nOrganisez-les par : grands thèmes, demandes concrètes et immédiatement actionnables, questions nécessitant des éclaircissements, et avis contradictoires. Signalez les remarques en contradiction avec la recherche utilisateur ou les principes de design établis."
        }
      ]
    }
  ],
  "student": [
    {
      "cat": "Méthodes de travail",
      "prompts": [
        {
          "title": "Créer une fiche de révision sur un sujet",
          "text": "Créez une fiche de révision complète sur le sujet : [sujet].\n\nIncluez :\n- Notions fondamentales et définitions\n- Dates clés, formules ou figures marquantes à mémoriser\n- Pièges et idées reçues à éviter\n- Une synthèse express à relire juste avant l'examen\n\nNiveau : [débutant / intermédiaire / avancé]"
        },
        {
          "title": "Expliquer un concept avec des analogies",
          "text": "Expliquez-moi [concept] à l'aide d'analogies concrètes de la vie quotidienne.\n\nJe suis étudiant en [année/niveau] en [matière]. J'ai bien assimilé [notion connexe], mais j'ai du mal avec celle-ci.\n\nEmployez au moins deux analogies distinctes et terminez par une courte question pour tester ma bonne compréhension."
        },
        {
          "title": "Générer des questions-réponses pour flashcards",
          "text": "Générez 10 cartes de révision (flashcards) avec questions et réponses sur le thème suivant :\n\n[sujet ou collez vos notes ici]\n\nPrésentez chaque carte sous la forme :\nQ : [question]\nR : [réponse concise]\n\nVariez entre restitution de faits, compréhension théorique et mises en application."
        },
        {
          "title": "Résumer un chapitre de manuel scolaire",
          "text": "Résumez le chapitre suivant sous forme de notes claires et synthétiques.\n\n[collez le texte du chapitre ici]\n\nOrganisez le résumé selon la structure suivante :\n- Idée directrice (1 à 2 phrases)\n- Points incontournables (liste à puces)\n- Vocabulaire et notions à maîtriser (avec définitions)\n- Questions typiques susceptibles de tomber à l'examen"
        }
      ]
    },
    {
      "cat": "Rédaction de dissertations",
      "prompts": [
        {
          "title": "Générateur de plan de dissertation",
          "text": "Générez le plan détaillé d'une dissertation pour le sujet suivant :\n\n[sujet de la dissertation]\n\nMatière : [intitulé de la matière]\nLongueur visée : [ex. 1 500 mots]\nType de démarche : [argumentatif / analytique / comparatif / explicatif]\n\nPrévoyez une problématique/thèse centrale, des phrases d'amorce pour chaque partie et sous-partie, ainsi que les arguments et exemples d'appui."
        },
        {
          "title": "Atelier de formulation de problématique",
          "text": "Aidez-moi à formuler une problématique ou thèse solide et percutante pour ma dissertation.\n\nSujet : [sujet]\nMon intuition ou angle de départ : [décrivez vos premières idées]\nType de devoir : [argumentatif / analytique / travail de recherche]\n\nProposez trois formulations distinctes allant de la plus classique à la plus audacieuse, avec un bref commentaire sur les forces de chacune."
        },
        {
          "title": "Renforcer mon argumentation",
          "text": "Examinez ce paragraphe de ma dissertation et aidez-moi à en consolider l'argumentation.\n\n[collez le paragraphe ici]\n\nPlus précisément :\n1. L'affirmation de départ est-elle limpide et justifiable ?\n2. Les exemples et preuves sont-ils bien articulés au propos ?\n3. L'analyse met-elle clairement en évidence les enjeux ('en quoi cela répond au sujet') ?\n\nRéécrivez le paragraphe en intégrant vos améliorations et commentez les modifications apportées."
        },
        {
          "title": "Rédiger un paragraphe d'introduction",
          "text": "Rédigez une introduction captivante pour ma dissertation.\n\nSujet : [sujet]\nThèse / Problématique : [votre thèse]\nDestinataire : [ex. professeur, lecteur général]\nTon : [académique / semi-formel]\n\nCommencez par une amorce (accroche), contextualisez brièvement et amenez la problématique et le plan. Proposez ensuite une seconde accroche alternative."
        }
      ]
    },
    {
      "cat": "Recherche académique",
      "prompts": [
        {
          "title": "Affinage d'une question de recherche",
          "text": "Aidez-moi à affiner ma question de recherche.\n\nQuestion actuelle : [votre ébauche de question]\nDiscipline : [domaine d'études]\nPérimètre : [ex. mémoire de licence, 3 000 mots, un semestre]\n\nEst-elle trop large, trop restrictive ou bien calibrée ? Proposez trois versions reformulées et expliquez pourquoi chacune est plus pertinente."
        },
        {
          "title": "Synthèse de revue de littérature",
          "text": "Résumez les grands axes et controverses de la littérature scientifique consacrée à [sujet].\n\nContexte : Je rédige un(e) [type de travail académique] en [discipline/niveau].\n\nTraitez :\n- Les principaux courants de pensée et cadres théoriques\n- Les points de consensus et débats majeurs dans la discipline\n- Les zones d'ombre ou lacunes de la recherche actuelle\n- Des mots-clés et expressions recommandés pour trouver des sources supplémentaires"
        },
        {
          "title": "Identifier des angles de recherche inexplorés",
          "text": "Je mène des recherches sur [sujet]. En vous basant sur les sources et notes suivantes, aidez-moi à déceler les lacunes de la recherche actuelle que mon travail pourrait explorer :\n\n[collez vos notes ou résumés de sources ici]\n\nQuels aspects restent peu étudiés ? Quelles questions demeurent sans réponse ? Comment apporter une contribution novatrice ?"
        },
        {
          "title": "Notice de bibliographie commentée",
          "text": "Rédigez une notice de bibliographie commentée pour la source suivante.\n\nRéférence bibliographique : [citation complète]\nRésumé de la source : [collez le résumé ou les points clés]\nNorme de citation : [APA / MLA / Chicago / ISO 690]\n\nLa notice doit comporter : un résumé succinct (2 à 3 phrases), une appréciation critique de la fiabilité et de la pertinence de la source, et la manière dont je peux l'exploiter dans mon devoir."
        }
      ]
    },
    {
      "cat": "Mathématiques et sciences",
      "prompts": [
        {
          "title": "Expliquer un concept mathématique pas à pas",
          "text": "Expliquez-moi [concept mathématique] pas à pas, comme si je le découvrais pour la toute première fois.\n\nMon niveau actuel : [ex. algèbre de lycée, analyse de première année]\nCe qui me bloque : [décrivez le point d'achoppement]\n\nDéveloppez le concept à travers un exemple entièrement résolu, puis proposez-moi un exercice d'application légèrement plus difficile à tenter par moi-même. Dévoilez la solution complète ensuite."
        },
        {
          "title": "Générateur d'exercices d'entraînement",
          "text": "Générez 5 exercices d'entraînement sur le thème : [sujet/concept].\n\nNiveau de difficulté : [facile / intermédiaire / difficile]\nMon niveau scolaire : [ex. physique de terminale, thermodynamique universitaire]\n\nPrésentez d'abord les énoncés seuls, sans correction. Puis, après une ligne de séparation, fournissez le corrigé détaillé étape par étape de chaque exercice."
        },
        {
          "title": "Structure d'un compte-rendu de TP",
          "text": "Aidez-moi à structurer le compte-rendu de laboratoire (TP) pour l'expérience suivante.\n\nExpérience : [décrivez ce que vous avez réalisé]\nMatière : [ex. Biologie, Chimie, Physique]\nNiveau d'études : [lycée / enseignement supérieur]\n\nDétaillez les rubriques conventionnelles (Titre, Résumé/Abstract, Introduction, Matériel et méthodes, Résultats, Discussion, Conclusion) avec des indications précises sur le contenu attendu pour chacune et les erreurs courantes à éviter."
        },
        {
          "title": "Démarche de la méthode scientifique",
          "text": "Guidez-moi dans l'application de la démarche scientifique pour répondre à la question suivante :\n\nQuestion de recherche : [votre question]\nDiscipline : [biologie / chimie / physique / autre]\n\nPour chaque étape — observation, formulation d'hypothèse, protocole expérimental, collecte des données, analyse et conclusion —, explicitez les actions à mener et leur raison d'être. Soulignez les aspects éthiques ou biais méthodologiques à anticiper."
        }
      ]
    },
    {
      "cat": "Langues vivantes",
      "prompts": [
        {
          "title": "Explication de règle de grammaire avec exemples",
          "text": "Expliquez cette règle grammaticale en [langue] de façon claire et méthodique.\n\nPoint de grammaire : [ex. subjonctif, voix passive, emploi des particules]\nMon niveau : [A1 / A2 / B1 / B2 / C1]\n\nFournissez :\n- Une explication accessible de la règle\n- 5 phrases d'exemples accompagnées de leur traduction\n- Les erreurs les plus fréquentes commises par les apprenants\n- Un court exercice d'application pratique"
        },
        {
          "title": "Apprendre le vocabulaire en contexte",
          "text": "Aidez-moi à mémoriser et utiliser ce vocabulaire en [langue] en contexte.\n\nMots à étudier : [listez les mots ici]\n\nPour chaque mot, indiquez :\n- La définition en français\n- Une phrase d'exemple en [langue] avec sa traduction\n- Le niveau de langue (formel / familier / argot)\n- Une colocation ou expression courante dans laquelle il s'emploie fréquemment\n\nComposez ensuite un court paragraphe naturel intégrant l'ensemble de ces mots."
        },
        {
          "title": "Traduction commentée avec nuances",
          "text": "Traduisez le texte suivant du [langue source] vers le [langue cible].\n\n[collez le texte ici]\n\nÀ la suite de la traduction, ajoutez des remarques sur les subtilités linguistiques explicitant :\n- Les termes ou tournures qui n'ont pas d'équivalent direct\n- Les références culturelles nécessitant des éclaircissements\n- Les variantes de traduction envisageables en cas de polysémie\n- Les différences de registre ou de tonalité entre le texte d'origine et la traduction"
        },
        {
          "title": "Dialogue d'entraînement à la conversation",
          "text": "Rédigez un dialogue d'entraînement réaliste en [langue] pour la situation suivante :\n\nScénario : [ex. commander au restaurant, demander son chemin, un entretien d'embauche]\nMon niveau : [A1 / A2 / B1 / B2 / C1]\n\nIncluez :\n- Le dialogue intégral entre deux interlocuteurs\n- La traduction française sous chaque réplique\n- Des notes lexicales sur les mots et expressions clés\n- Deux questions de relance que je pourrais employer pour prolonger la discussion"
        }
      ]
    },
    {
      "cat": "Préparation aux examens",
      "prompts": [
        {
          "title": "Questions types d'examen",
          "text": "Générez 10 questions d'entraînement pour réviser un examen sur [matière/sujet].\n\nFormat de l'épreuve : [QCM / réponses courtes / dissertation / mixte]\nNiveau scolaire : [ex. baccalauréat, classe préparatoire, première année universitaire]\nThèmes prioritaires : [listez les thèmes]\n\nÀ la suite des questions, fournissez le corrigé accompagné d'une brève explication pour chaque bonne réponse."
        },
        {
          "title": "Comprendre une erreur d'examen",
          "text": "Je me suis trompé à cette question d'examen. Aidez-moi à comprendre mon erreur.\n\nÉnoncé de la question : [collez la question]\nMa réponse : [ce que vous avez répondu]\nBonne réponse : [la réponse attendue]\n\nExpliquez :\n1. En quoi ma réponse est inexacte\n2. Pourquoi la réponse officielle est correcte\n3. Le concept sous-jacent que je dois consolider\n4. Une question similaire d'entraînement pour tester ma compréhension dès maintenant"
        },
        {
          "title": "Techniques de mémorisation pour réviser",
          "text": "Indiquez-moi des techniques de mémorisation efficaces pour retenir [sujet/notions].\n\nContenu à mémoriser : [collez le contenu, la liste ou le concept]\nDate de l'examen : [délai restant]\nPréférence d'apprentissage : [visuelle / verbale / logique / indifférent]\n\nProposez au moins trois méthodes éprouvées (ex. moyen mnémotechnique, méthode des lieux / palais mental, découpage en blocs / chunking) appliquées concrètement à ce contenu."
        },
        {
          "title": "Check-list de révision de dernière minute",
          "text": "Créez une check-list de révision de dernière minute avant mon examen.\n\nMatière : [matière]\nÉchéance : [ex. dans 24 heures, dans 3 jours]\nThèmes au programme : [listez les thèmes principaux]\nFormat de l'épreuve : [QCM / dissertation / résolution de problèmes]\n\nHiérarchisez ce qu'il faut revoir en priorité, pointez les concepts à plus haute valeur ajoutée et listez les pièges classiques à garder en tête le jour J."
        }
      ]
    }
  ],
  "productivity": [
    {
      "cat": "Planification",
      "prompts": [
        {
          "title": "Session de planification hebdomadaire",
          "text": "Aidez-moi à planifier ma semaine. Voici mes tâches, échéances et engagements :\n\n[listez tout ce que vous avez à faire]\n\nOrganisez cela dans un emploi du temps jour par jour, signalez les conflits d'agenda et suggérez ce qui peut être reporté. Hiérarchisez selon l'impact."
        },
        {
          "title": "Découper un grand projet",
          "text": "J'ai un projet d'envergure que je dois découper en étapes gérables :\n\nProjet : [décrivez le projet et son objectif]\nÉchéance : [date]\nTaille de l'équipe : [nombre de personnes ou en solo]\n\nCréez un découpage par phases avec jalons, dépendances et estimation du temps par tâche."
        },
        {
          "title": "Matrice des priorités (urgent / important)",
          "text": "Aidez-moi à construire une matrice des priorités pour ma charge de travail actuelle. Classez chaque élément dans : À faire maintenant, À planifier, À déléguer, ou À abandonner.\n\nMes tâches :\n[listez vos tâches ici]\n\nPour chacune, justifiez brièvement le classement retenu."
        },
        {
          "title": "Définition des objectifs trimestriels",
          "text": "Aidez-moi à fixer mes objectifs pour le prochain trimestre. Mon rôle est [intitulé du poste / fonction] et mon objectif principal est [décrivez ce que vous essayez d'accomplir].\n\nRédigez 3 à 5 objectifs SMART assortis d'indicateurs de succès, des actions clés par objectif et d'une méthode simple pour suivre les progrès chaque semaine."
        }
      ]
    },
    {
      "cat": "Réunions",
      "prompts": [
        {
          "title": "Modèle d'ordre du jour de réunion",
          "text": "Créez un ordre du jour structuré pour cette réunion :\n\nType de réunion : [ex. synchronisation hebdomadaire, lancement de projet, rétrospective]\nDurée : [durée]\nParticipants : [rôles ou noms]\nObjectif : [ce qui doit être tranché ou accompli]\n\nPrévoyez des plages horaires précises pour chaque point et un livrable final attendu."
        },
        {
          "title": "Résumer les notes de réunion",
          "text": "Résumez ces notes de réunion sous un format clair et lisible en trois parties distinctes : Décisions clés, Actions à mener (avec responsables et échéances), et Questions en suspens.\n\nNotes brutes :\n[collez vos notes ici]"
        },
        {
          "title": "Extraire les plans d'action des notes",
          "text": "Extrayez toutes les actions à entreprendre à partir de ces notes de réunion. Pour chacune, identifiez : la tâche, le responsable (si mentionné) et la date d'échéance (si mentionnée). Présentez sous forme de liste numérotée.\n\nNotes de réunion :\n[collez vos notes ici]"
        },
        {
          "title": "E-mail de suivi après réunion",
          "text": "Rédigez un e-mail de synthèse concis à l'issue d'une réunion venant de se terminer.\n\nSujet de la réunion : [sujet]\nParticipants : [noms ou fonctions]\nDécisions clés arrêtées : [listez-les]\nActions à mener : [listez avec les responsables]\nProchaine réunion : [date ou à définir]\n\nRestez synthétique et professionnel."
        }
      ]
    },
    {
      "cat": "E-mails",
      "prompts": [
        {
          "title": "Rédiger un e-mail professionnel",
          "text": "Rédigez un e-mail professionnel à partir des éléments suivants :\n\nDestinataire : [destinataire et son rôle]\nContexte : [contexte de la situation]\nDemande principale ou message : [ce que vous devez communiquer]\nTon : [ex. formel, courtois, direct]\n\nRestez concis et concluez par une prochaine étape explicite."
        },
        {
          "title": "Répondre à un e-mail délicat",
          "text": "Aidez-moi à répondre à cet e-mail de façon professionnelle et mesurée.\n\nL'e-mail reçu :\n[collez l'e-mail ici]\n\nMa situation : [ajoutez tout contexte utile]\nRésultat souhaité : [ce qui doit se produire après l'envoi de ma réponse]\n\nRédigez une réponse ferme mais constructive."
        },
        {
          "title": "Modèles d'e-mails réutilisables",
          "text": "Créez [nombre] modèles d'e-mails réutilisables pour [cas d'usage, ex. prise de contact client, point d'avancement de projet, intégration de nouveaux contacts].\n\nChaque modèle doit comporter un objet percutant, un corps de texte avec des [champs personnalisables] et un appel à l'action. Limitez chacun à moins de 150 mots."
        },
        {
          "title": "Décliner une demande avec politesse",
          "text": "Aidez-moi à rédiger un e-mail courtois mais sans équivoque pour décliner cette demande :\n\nLa demande : [décrivez ce qui a été demandé]\nMotif du refus : [explication succincte et honnête]\nRelation avec l'expéditeur : [collègue, client, manager, etc.]\n\nProposez une alternative ou atténuez le refus si approprié. Restez bref."
        }
      ]
    },
    {
      "cat": "Prise de décision",
      "prompts": [
        {
          "title": "Cadre d'aide à la décision",
          "text": "Je dois trancher entre plusieurs options :\n\nOption A : [décrivez]\nOption B : [décrivez]\nOption C : [décrivez, ou supprimez s'il n'y en a que deux]\n\nContexte : [enjeux, contraintes, calendrier]\n\nÉvaluez chaque option sur : l'impact, l'effort requis, le risque et la réversibilité. Recommandez la meilleure option avec argumentation."
        },
        {
          "title": "Analyse pré-mortem",
          "text": "Menez une analyse pré-mortem sur ce plan. Supposez que nous sommes dans [6 mois / 1 an] et que le projet a fait un échec cuisant.\n\nLe projet : [décrivez votre plan ou initiative]\n\nListez les causes les plus plausibles de cet échec, les signaux avant-coureurs à surveiller dès le départ et les ajustements à apporter au plan dès aujourd'hui."
        },
        {
          "title": "Pour et contre avec critères pondérés",
          "text": "Aidez-moi à évaluer cette décision à l'aide d'une grille de critères pondérés.\n\nDécision : [ce que je dois décider]\nOptions : [listez les options]\nCritères déterminants (importance de 1 à 5) : [listez les critères, ex. coût, rapidité, qualité, risque]\n\nConstruisez une grille d'évaluation pondérée, notez chaque option et recommandez la solution gagnante."
        },
        {
          "title": "Analyse d'impact sur les parties prenantes",
          "text": "Analysez l'impact de cette décision ou de ce changement sur les parties prenantes :\n\nLa décision : [décrivez-la]\nParties prenantes impliquées : [listez les groupes ou individus]\n\nPour chaque partie prenante, identifiez : l'impact subi (positif ou négatif), leur réaction probable et la communication ou démarche à adopter pour gérer au mieux leur réaction."
        }
      ]
    },
    {
      "cat": "Communication",
      "prompts": [
        {
          "title": "Rédiger un point d'étape de projet",
          "text": "Rédigez une mise au point sur l'état d'avancement d'un projet pour [destinataire, ex. direction, équipe, client].\n\nProjet : [nom et description en une phrase]\nStatut : [dans les temps / sous surveillance / en retard]\nRéalisations de la période : [listez]\nProchaines étapes prévues : [listez]\nPoints de blocage ou risques : [listez, ou 'aucun']\n\nFaites tenir le tout sur une page. Soyez direct sur les risques."
        },
        {
          "title": "Vulgariser un concept technique pour un public non technique",
          "text": "Expliquez [concept technique ou terme] à une personne sans aucun bagage technique. Utilisez une analogie simple, évitez le jargon et tenez en moins de 150 mots. Le public visé : [décrivez-le, ex. dirigeants, clients, équipe RH]."
        },
        {
          "title": "Formuler un feedback pour un collaborateur",
          "text": "Aidez-moi à formuler un feedback clair et constructif pour un membre de l'équipe.\n\nSituation : [ce qui s'est passé et quand]\nImpact : [conséquences sur l'équipe, le projet ou les résultats]\nComportement à corriger : [soyez précis, ciblez les faits et non la personne]\nChangement souhaité : [ce que vous aimeriez qu'il fasse différemment]\n\nStructurez le retour selon le modèle SBI (Situation, Comportement / Behavior, Impact) et conservez un ton bienveillant."
        },
        {
          "title": "E-mail d'escalade",
          "text": "Rédigez un e-mail d'escalade pour une situation bloquée ou à risque.\n\nProblème : [décrivez clairement la difficulté]\nImpact en cas de non-résolution : [délais, risques pour l'entreprise ou surcoûts]\nActions déjà tentées : [démarches menées jusqu'ici]\nBesoin d'arbitrage : [décision attendue, ressources ou déblocage requis]\nDestinataire : [son rôle et son lien avec le sujet]\n\nAdoptez un ton direct et orienté solution, sans être accusateur."
        }
      ]
    },
    {
      "cat": "Organisation personnelle",
      "prompts": [
        {
          "title": "Optimiser sa routine matinale",
          "text": "Aidez-moi à concevoir une routine matinale équilibrée et efficace. Voici ma situation actuelle :\n\nHeure de réveil : [heure]\nTemps disponible avant le travail : [durée]\nRoutine actuelle : [décrivez-la ou indiquez 'aucune']\nObjectifs visés : [ex. concentration, forme physique, sérénité, apprentissage]\nContraintes : [ex. enfants, transports, espace restreint]\n\nConcevez une routine réaliste articulée en blocs de temps et expliquez la raison d'être de chaque composante."
        },
        {
          "title": "Conception d'un suivi des habitudes (Habit Tracker)",
          "text": "Aidez-moi à concevoir un suivi des habitudes pour celles que je souhaite ancrer :\n\nHabitudes : [listez-les]\nPériodicité de suivi : [quotidienne / hebdomadaire]\nFormat privilégié : [liste à cocher, tableau, journal, etc.]\n\nPour chaque habitude, proposez un déclencheur, une version minimale pour les jours difficiles et un indicateur de progression."
        },
        {
          "title": "Modèle de bilan hebdomadaire",
          "text": "Créez un modèle de bilan hebdomadaire à utiliser chaque [jour de la semaine] pour faire le point et planifier.\n\nMes domaines d'attention prioritaires : [ex. projets professionnels, santé, relations, apprentissage]\nTemps alloué au bilan : [durée]\n\nIncluez des questions d'introspection, une section pour consigner les victoires et apprentissages, et une partie planification pour la semaine à venir. Rendez l'exercice pratique et rapide."
        },
        {
          "title": "Plan d'apprentissage pour une nouvelle compétence",
          "text": "Créez un plan d'apprentissage structuré pour [compétence à acquérir].\n\nMon niveau actuel : [grand débutant / quelques notions / intermédiaire]\nTemps disponible : [heures par semaine]\nÉchéance visée : [date ou flexible]\nFormat d'apprentissage privilégié : [vidéos, lectures, projets pratiques, cours en ligne, etc.]\n\nDécoupez le plan en phases avec ressources spécifiques, étapes clés et modalités d'évaluation des acquis à chaque stade."
        }
      ]
    }
  ],
  "legal": [
    {
      "cat": "Contrats",
      "prompts": [
        {
          "title": "Détecter les signaux d'alerte dans un contrat",
          "text": "Examinez ce contrat et identifiez les clauses à risque, les formulations inhabituelles ou les termes manifestement déséquilibrés. Signalez tout élément créant un risque ou une responsabilité disproportionnée :\n\n[collez le texte du contrat ici]\n\nPour chaque problème décelé, expliquez le risque encouru et suggérez une reformulation plus équitable."
        },
        {
          "title": "Résumer les termes clés d'un contrat",
          "text": "Résumez les clauses essentielles de ce contrat en langage courant. Abordez : les parties en présence, la durée, les modalités de paiement, les obligations réciproques, les conditions de résiliation et les restrictions particulières :\n\n[collez le texte du contrat ici]"
        },
        {
          "title": "Rédiger la trame d'un accord de confidentialité (NDA)",
          "text": "Rédigez la trame d'un accord de confidentialité (NDA) entre :\n\nPartie divulgatrice : [nom/type, ex. startup SaaS]\nPartie récipiendaire : [nom/type, ex. grand compte potentiel]\nObjet : [ex. évaluation d'une intégration logicielle]\nDurée : [ex. 2 ans]\n\nIncluez les rubriques standards d'un NDA : définition des informations confidentielles, obligations de garde, exclusions, durée de validité et voies de recours."
        },
        {
          "title": "Comparer deux versions d'un contrat",
          "text": "Comparez ces deux versions d'un contrat et synthétisez les différences majeures. Mettez en relief toute modification ayant un impact significatif sur les droits, les obligations, la responsabilité ou les paiements :\n\nVersion 1 :\n[collez ici]\n\nVersion 2 :\n[collez ici]"
        }
      ]
    },
    {
      "cat": "Conformité",
      "prompts": [
        {
          "title": "Check-list de conformité RGPD",
          "text": "Établissez une check-list de conformité au RGPD pour une [type d'organisation, ex. entreprise SaaS B2B] qui collecte [types de données, ex. adresses e-mail et données d'usage] auprès d'utilisateurs situés dans l'UE.\n\nAbordez : bases légales du traitement, consentement, droits des personnes concernées, durée de conservation, notification des violations de données et accords de sous-traitance (DPA)."
        },
        {
          "title": "Évaluation d'une activité de traitement des données",
          "text": "Aidez-moi à réaliser une analyse de conformité pour l'activité de traitement suivante :\n\nActivité : [décrivez, ex. envoi d'e-mails marketing à des résidents de l'UE]\nDonnées collectées : [listez les types]\nSous-traitants tiers impliqués : [listez, ex. Mailchimp, Stripe]\n\nIdentifiez les obligations légales, les risques encourus et les mesures de sécurité recommandées."
        },
        {
          "title": "Analyse d'impact d'une évolution réglementaire",
          "text": "Analysez l'impact de cette évolution réglementaire sur notre organisation :\n\nRéglementation : [nom et juridiction, ex. Règlement européen sur l'IA (AI Act), loi californienne SB 1047]\nNotre activité : [brève description]\nPratiques actuelles : [décrivez les pratiques internes concernées]\n\nQuels ajustements devons-nous opérer ? Classez les actions par ordre d'urgence."
        },
        {
          "title": "Guide de préparation à un audit",
          "text": "Aidez-nous à préparer notre prochain audit de [type d'audit, ex. SOC 2 Type II, ISO 27001, audit RGPD].\n\nNotre organisation : [brève description]\nPérimètre de l'audit : [décrivez]\nCalendrier : [ex. audit prévu dans 3 mois]\n\nFournissez une check-list priorisée des éléments à préparer, les non-conformités récurrentes à corriger de manière proactive et la documentation à tenir prête."
        }
      ]
    },
    {
      "cat": "Politiques et règlements",
      "prompts": [
        {
          "title": "Trame de politique de confidentialité",
          "text": "Rédigez la trame d'une politique de confidentialité pour :\n\nProduit/service : [décrivez]\nDonnées collectées : [listez les types, ex. nom, e-mail, données de paiement, données d'usage]\nServices tiers utilisés : [ex. Stripe, Google Analytics, AWS]\nLocalisation des utilisateurs : [ex. France/UE et États-Unis]\n\nIntégrez l'ensemble des mentions requises par le RGPD et le CCPA. Adoptez un langage clair et compréhensible par tous."
        },
        {
          "title": "Rédiger une politique d'utilisation acceptable",
          "text": "Rédigez une politique d'utilisation acceptable (AUP) pour [nom du produit/plateforme], un(e) [décrivez le produit, ex. outil collaboratif cloud pour entreprises].\n\nIncluez : les usages autorisés, les comportements proscrits, les mesures de contrôle et sanctions en cas de manquement, ainsi que les modalités de signalement des abus.\n\nLe ton doit être clair et professionnel, sans lourdeur juridique excessive."
        },
        {
          "title": "Section de règlement intérieur ou guide de l'employé",
          "text": "Rédigez une section du guide de l'employé ou règlement intérieur sur le thème : [sujet, ex. charte de télétravail / sécurité informatique / usage des réseaux sociaux].\n\nType d'entreprise : [décrivez]\nRègles clés à couvrir : [listez]\nTon : [ex. bienveillant mais ferme]\n\nRendez le texte facile à assimiler et détaillez les attentes, les interdits ainsi que les sanctions en cas de non-respect."
        },
        {
          "title": "Rédiger un code de conduite",
          "text": "Rédigez un code de conduite pour [type d'organisation, ex. un projet open source / une startup tech].\n\nValeurs clés à refléter : [listez, ex. inclusion, respect, transparence]\nChamp d'application : [ex. s'applique aux contributeurs, aux salariés, lors d'événements]\n\nIncluez : les comportements attendus, les agissements inacceptables, la procédure de signalement et les mesures disciplinaires."
        }
      ]
    },
    {
      "cat": "Propriété intellectuelle",
      "prompts": [
        {
          "title": "Préparation d'une recherche d'antériorité de marque",
          "text": "Aidez-moi à préparer une recherche d'antériorité de marque pour le projet suivant :\n\nMarque envisagée : [nom ou slogan]\nProduits/services : [décrivez ce que vous commercialisez ou proposez]\nTerritoires visés : [ex. France, Union européenne, États-Unis]\n\nExpliquez les critères de recherche, les conditions de validité d'un dépôt de marque et les risques de confusion à surveiller."
        },
        {
          "title": "Synthèse de l'état de la technique (brevets)",
          "text": "Aidez-moi à synthétiser l'état de la technique applicable à cette invention en vue d'un dépôt de brevet :\n\nDescription de l'invention : [décrivez en termes simples]\nDomaine technologique : [ex. machine learning, biotechnologies, logiciel]\n\nDéfinissez ce que recouvre l'état de la technique, les bases documentaires à explorer et aidez-moi à faire ressortir l'activité inventive de mon projet."
        },
        {
          "title": "Comparaison de licences open source",
          "text": "Comparez ces licences open source pour notre cas d'usage :\n\nLicences à comparer : [ex. MIT, Apache 2.0, GPL v3, AGPL]\nNotre cas d'usage : [ex. développement d'un produit SaaS commercial intégrant des bibliothèques open source]\n\nPour chaque licence, détaillez : les droits accordés, les obligations imposées et les interdictions strictes. Recommandez la licence la plus adaptée à notre situation."
        },
        {
          "title": "Check-list de cession de droits de propriété intellectuelle",
          "text": "Établissez une check-list de cession de droits de propriété intellectuelle lors de l'embauche ou du recours à des [freelances / salariés / prestataires] pour [décrivez la prestation, ex. développement de fonctionnalités logicielles].\n\nQuelles clauses contractuelles intégrer impérativement ? Quels points de contrôle vérifier ? Quelles erreurs courantes éviter pour garantir le transfert effectif de la propriété intellectuelle à notre entreprise ?"
        }
      ]
    },
    {
      "cat": "Droit des affaires",
      "prompts": [
        {
          "title": "Trame de conditions générales de vente (CGV)",
          "text": "Rédigez la trame de conditions générales de vente ou de service pour :\n\nProduit : [décrivez]\nModèle économique : [ex. SaaS par abonnement, marketplace, e-commerce]\nTypologie de clients : [ex. particuliers, professionnels]\n\nIncluez : gestion des comptes, modalités de facturation et de remboursement, usages prohibés, limitation de responsabilité, règlement des litiges et droit applicable. Signalez toute clause nécessitant la validation d'un avocat."
        },
        {
          "title": "Évaluation des risques de responsabilité juridique",
          "text": "Aidez-moi à évaluer les risques de responsabilité civile ou pénale pour cette activité commerciale :\n\nActivité : [décrivez, ex. fourniture de résumés financiers générés par IA à des investisseurs particuliers]\nType d'entreprise : [décrivez]\nJuridictions concernées : [territoires d'exercice]\n\nIdentifiez les principales catégories de risques de responsabilité, leur probabilité, leur impact potentiel et proposez des mesures de couverture et d'atténuation."
        },
        {
          "title": "Clauses clés d'un accord de partenariat",
          "text": "Détaillez les clauses clés qui doivent figurer dans un contrat de partenariat commercial entre :\n\nPartie A : [décrivez]\nPartie B : [décrivez]\nNature du partenariat : [ex. partage de revenus sur un produit co-développé]\n\nAbordez : rôles et obligations respectifs, répartition des revenus/bénéfices, propriété intellectuelle, gouvernance et prise de décision, conditions de sortie et règlement des différends."
        },
        {
          "title": "Check-list d'analyse de contrat fournisseur",
          "text": "Créez une check-list pour auditer les contrats fournisseurs avant signature. Notre entreprise est une [décrivez, ex. startup fintech en Série A].\n\nNos points d'attention prioritaires : [listez vos préoccupations, ex. hébergement des données, garanties de niveau de service (SLA), plafonds de responsabilité, conditions de résiliation]\n\nQuels sont les points de contrôle incontournables, les clauses défavorables fréquemment glissées par les prestataires et les concessions à négocier systématiquement ?"
        }
      ]
    },
    {
      "cat": "Vulgarisation juridique",
      "prompts": [
        {
          "title": "Simplifier un texte juridique",
          "text": "Réécrivez ce texte juridique en langage clair et limpide, accessible à un non-juriste. Préservez rigoureusement le sens initial tout en supprimant le jargon archaïque, les tournures passives et les complexités superflues :\n\n[collez le texte juridique ici]\n\nPublic destinataire : [ex. consommateurs / gérants de TPE-PME]"
        },
        {
          "title": "Rédiger une mention légale pour les utilisateurs",
          "text": "Rédigez une notice d'information légale destinée aux utilisateurs pour satisfaire à l'obligation suivante :\n\nObligation légale : [ex. recueil du consentement RGPD pour e-mails marketing / bandeau cookies / mise à jour de la politique de conservation des données]\nContexte d'affichage : [où la mention apparaît, ex. formulaire d'inscription / bannière in-app]\nTonalité : [ex. avenante, concise, rassurante]\n\nRendez-la claire, transparente et aussi courte que possible sans omettre les éléments indispensables."
        },
        {
          "title": "Créer une FAQ à partir d'un document juridique",
          "text": "Transformez ce document juridique en une FAQ accessible et facile à lire pour les utilisateurs. Extrayez les dispositions fondamentales et répondez aux questions les plus fréquentes :\n\n[collez le document ici]\n\nStructurez sous forme de questions-réponses. Visez 8 à 12 questions. Limitez chaque réponse à 2 ou 3 phrases percutantes."
        },
        {
          "title": "Transformer une charte en guide pratique pour les salariés",
          "text": "Prenez cette politique formelle et réécrivez-la sous forme de guide pratique et opérationnel pour les collaborateurs. L'objectif est qu'elle soit réellement comprise et appliquée au quotidien — pas simplement signée mécaniquement.\n\nRèglement/Politique :\n[collez ici]\n\nIncluez : ce que cela implique dans le travail quotidien, des exemples concrets de bonnes pratiques et d'interdits, et la marche à suivre en cas de doute."
        }
      ]
    }
  ],
  "sales": [
    {
      "cat": "Prospection",
      "prompts": [
        {
          "title": "Rédiger un e-mail de prospection commerciale",
          "text": "Rédigez un e-mail de prospection à froid destiné à un client potentiel.\n\nNom de l'entreprise : [entreprise ciblée]\nPoste du prospect : [ex. Directeur Commercial, Responsable des Opérations]\nNotre produit/service : [brève description]\nProposition de valeur centrale : [quel problème résolvons-nous]\nRésultat souhaité : [ex. décrocher un échange de 20 minutes]\n\nNe dépassez pas 150 mots. Démarrez par son problème métier, pas par la présentation de notre produit. Terminez par un appel à l'action simple et sans contrainte."
        },
        {
          "title": "Séquence de mise en relation et messages LinkedIn",
          "text": "Rédigez une séquence de prospection LinkedIn en 3 étapes pour un prospect froid.\n\nProfil du prospect : [poste, entreprise, secteur]\nNotre offre : [produit/service et bénéfice majeur]\n\nÉtape 1 : Message de demande de connexion (moins de 300 caractères)\nÉtape 2 : Premier message après acceptation (axé sur la valeur, sans discours commercial, moins de 100 mots)\nÉtape 3 : Message de relance sans réponse après 5 jours (rappel courtois, moins de 80 mots)\n\nTon : professionnel mais humain. Proscrivez les accroches impersonnelles du genre 'J'ai découvert votre profil'."
        },
        {
          "title": "Recherches sur un prospect avant un appel",
          "text": "Aidez-moi à préparer ma découverte sur ce prospect avant un appel commercial.\n\nNom du prospect : [nom]\nPoste : [titre]\nEntreprise : [nom de l'entreprise]\nSecteur : [secteur]\nObjectif de l'appel : [ex. qualification, démonstration, closing]\n\nFournissez :\n1. 5 questions pertinentes à poser en lien avec ses priorités présumées\n2. 3 points de douleur fréquents pour une personne à son poste\n3. 2 tendances récentes du secteur à mentionner pour asseoir ma crédibilité\n4. Une amorce de brise-glace inspirée de son parcours ou de son entreprise"
        },
        {
          "title": "Définition du profil de client idéal (ICP)",
          "text": "Aidez-moi à formaliser le Profil de Client Idéal (ICP) pour notre offre.\n\nProduit/service : [décrivez ce que vous commercialisez]\nNos meilleurs clients actuels : [décrivez 2 à 3 exemples si disponibles]\nProblème résolu : [décrivez le besoin central]\nNiveau de prix : [approximatif]\n\nLivrables :\n1. Profil firmographique (taille d'entreprise, secteur, zone géographique, chiffre d'affaires)\n2. Signaux technographiques (outils et technologies probablement utilisés)\n3. Éléments déclencheurs d'achat (événements provoquant la prise de décision)\n4. Anti-ICP : qui nous ne devons ABSOLUMENT PAS cibler et pourquoi"
        }
      ]
    },
    {
      "cat": "Découverte",
      "prompts": [
        {
          "title": "Trame de questions pour un appel de découverte",
          "text": "Créez une trame de questions pour un entretien commercial de découverte.\n\nProduit/service : [ce que nous vendons]\nPersona ciblé : [fonction et secteur]\nDurée de l'échange : [ex. 30 minutes]\n\nStructurez le questionnement selon cette méthode :\n1. Situation (2-3 questions pour appréhender son organisation actuelle)\n2. Problème (2-3 questions pour faire émerger les difficultés)\n3. Implication (2 questions pour mesurer le coût ou l'impact de ce problème)\n4. Besoin de solution / Need-payoff (2 questions pour lui faire formuler la valeur d'une résolution)\n\nTerminez par une question ouverte permettant de cadrer la suite du processus."
        },
        {
          "title": "Identification des points de douleur",
          "text": "À partir des notes de cet appel de découverte, isolez les difficultés majeures du prospect et hiérarchisez-les par urgence.\n\nNotes de l'appel :\n[collez vos notes ici]\n\nPour chaque point de douleur :\n1. Nommez-le et explicitez-le clairement\n2. Citez ou reformulez les propos tenus par le prospect\n3. Évaluez le degré d'urgence : Élevé / Moyen / Faible\n4. Indiquez la fonctionnalité ou le bénéfice produit correspondant\n\nSignalez également les frustrations implicites déductibles de ses déclarations."
        },
        {
          "title": "Fiche d'analyse des besoins",
          "text": "Aidez-moi à formaliser une analyse des besoins suite à cet échange avec un prospect.\n\nProspect : [nom, poste, entreprise]\nObjectif formulé : [citation ou reformulation]\nProcessus / outil actuel : [ce qui est utilisé aujourd'hui]\nFrustrations mentionnées : [listez-les]\nCalendrier évoqué : [si précisé]\nIndices budgétaires : [si perceptibles]\n\nProduisez une synthèse structurée comprenant :\n- Le besoin primaire\n- Les besoins secondaires\n- Les critères de réussite (à quoi ressemble le problème résolu pour eux ?)\n- La prochaine étape recommandée dans le cycle de vente"
        },
        {
          "title": "Grille de qualification (BANT / MEDDIC)",
          "text": "Évaluez la maturité de ce prospect selon les méthodologies de qualification commerciale.\n\nProspect : [nom, poste, entreprise]\nNotes de découverte : [collez les notes]\n\nNotez l'opportunité selon les deux grilles :\n\nBANT :\n- Budget : [identifié / inconnu / confirmé]\n- Authority (Pouvoir de décision) : [décideur / prescripteur / inconnu]\n- Need (Besoin) : [fort / modéré / faible / flou]\n- Timeline (Calendrier) : [urgent / sous 6 mois / sans horizon]\n\nMEDDIC :\n- Metrics (Impact chiffré) : [gain mesurable validé ?]\n- Economic Buyer (Acheteur économique) : [identifié ?]\n- Decision Criteria (Critères de décision) : [connus ?]\n- Decision Process (Processus décisionnel) : [cartographié ?]\n- Identify Pain (Point de douleur validé) : [confirmé ?]\n- Champion (Allié interne) : [avons-nous un relais fort ?]\n\nRecommandation : Qualifier / Mettre en maturation (Nurture) / Disqualifier — avec justification."
        }
      ]
    },
    {
      "cat": "Pitch et démonstration",
      "prompts": [
        {
          "title": "Adapter son pitch à un interlocuteur précis",
          "text": "Adaptez notre argumentaire de vente pour un profil d'interlocuteur spécifique.\n\nNotre offre : [décrivez-la]\nProposition de valeur centrale : [1-2 phrases]\nProfil du prospect : [rôle, typologie d'entreprise, secteur]\nSes priorités probables : [ex. réduction des coûts, productivité d'équipe, conformité]\nDifficultés détectées en phase de découverte : [issues de l'échange]\n\nRéécrivez l'argumentaire afin de :\n1. Commencer par ce qui compte le plus pour ce profil\n2. Employer son propre vocabulaire métier (en bannissant notre jargon interne)\n3. Relier nos atouts directement aux problèmes qu'il a exprimés\n4. Conclure par une motivation concrète d'agir sans attendre"
        },
        {
          "title": "Trame de scénario de démonstration",
          "text": "Rédigez la trame d'une démonstration produit personnalisée.\n\nProduit : [nom et description succincte]\nProspect : [rôle, entreprise, secteur]\nPoints de douleur confirmés en découverte : [listez-les]\nDurée de la démo : [ex. 30 minutes]\nFonctionnalités clés à valoriser : [listez-en 3 ou 4]\n\nStructure :\n1. Ouverture (revalidation de l'ordre du jour et des objectifs, 2 min)\n2. Mise en contexte (connexion entre la démo et leurs difficultés, 3 min)\n3. Parcours de démo (fonctionnalité par fonctionnalité avec la valeur apportée pour chacune, 18 min)\n4. Pause de traitement des objections (recueil des réactions, 4 min)\n5. Conclusion (prochaines étapes et engagement, 3 min)\n\nIntégrez une phrase de transition fluide entre chaque partie."
        },
        {
          "title": "Argumentaire de retour sur investissement (ROI)",
          "text": "Aidez-moi à construire un argumentaire de ROI chiffré à présenter à un prospect.\n\nNotre offre : [description]\nTaille de l'entreprise cible : [effectifs / chiffre d'affaires si connu]\nDifficulté vécue : [décrivez]\nRésultat obtenu avec notre solution : [ce que nous améliorons]\n\nÉlaborez une démonstration comprenant :\n1. Le coût actuel du problème (perte de temps, argent gaspillé, risques)\n2. Une estimation prudente des gains obtenus grâce à notre solution\n3. Le calcul du ROI annuel en explicitant clairement les hypothèses retenues\n4. Le délai de rentabilité (délai de récupération de l'investissement)\n5. Une phrase de synthèse percutante prête pour un dirigeant\n\nUtilisez des chiffres ronds et détaillez les hypothèses afin que le prospect puisse les ajuster."
        },
        {
          "title": "Synthèse d'étude de cas pour un prospect",
          "text": "Résumez une étude de cas client à partager avec un prospect en cours de négociation.\n\nClient : [nom de l'entreprise ou 'une entreprise du secteur [secteur]']\nSa problématique initiale : [décrivez]\nSon utilisation de notre produit : [décrivez]\nRésultats obtenus : [chiffres et métriques si disponibles]\nDélai d'obtention des résultats : [durée constatée]\n\nRédigez une synthèse de 150 mots articulée en :\n- Contexte\n- Défi rencontré\n- Solution déployée\n- Résultats obtenus\n\nAjoutez ensuite une version en une phrase percutante à insérer dans un e-mail.\nAjoutez enfin 2 questions de relance pour amener le prospect à transposer ce cas à sa propre situation."
        }
      ]
    },
    {
      "cat": "Traitement des objections",
      "prompts": [
        {
          "title": "Répondre à l'objection sur le prix",
          "text": "Aidez-moi à répondre à une objection sur le prix.\n\nCe que le prospect a déclaré : \"[citation exacte ou reformulation]\"\nNotre tarif : [approximatif]\nValeur générée : [résultats et gains obtenus]\nConcurrent ou alternative avec laquelle il compare : [si connu]\n\nRédigez une réponse qui :\n1. Accueille la remarque sans être sur la défensive\n2. Recadre le prix sous l'angle de l'investissement et du retour sur investissement\n3. Ramène le coût à une échelle unitaire ou quotidienne si pertinent\n4. Propose une étape constructive (sans accorder immédiatement de remise)\n\nSuggérez également une question de clarification préalable pour discerner s'il s'agit d'une réelle contrainte de trésorerie ou d'un manque de perception de la valeur."
        },
        {
          "title": "Répondre à une comparaison avec un concurrent",
          "text": "Aidez-moi à gérer une objection comparant notre offre à un concurrent.\n\nCe que le prospect a indiqué : \"[citation ou reformulation]\"\nConcurrent mentionné : [nom du concurrent]\nCe qu'il apprécie a priori chez ce concurrent : [prix / fonctionnalités / notoriété / historique existant]\nNos différenciateurs majeurs : [listez-en 2 ou 3]\n\nRédigez une réponse qui :\n1. Valorise sa démarche d'analyse comparative rigoureuse\n2. Parle du concurrent avec fair-play et respect (sans dénigrement)\n3. Recentrera la discussion sur nos atouts uniques répondant à son besoin\n4. Propose des critères d'évaluation objectifs à comparer côte à côte\n\nTerminez par une question pour relancer l'échange positivement."
        },
        {
          "title": "Traiter l'objection « ce n'est pas le bon moment »",
          "text": "Aidez-moi à répondre à une objection liée au calendrier.\n\nCe que le prospect a dit : \"[citation ou reformulation, ex. 'Nous sommes débordés en ce moment' ou 'Recontactez-nous au 3e trimestre']\"\nCe que je sais de ses enjeux : [contexte issu de la découverte]\nNotre délai classique de déploiement : [ex. 2 semaines, 1 journée]\n\nRédigez une réponse qui :\n1. Fait preuve d'empathie face à sa charge de travail\n2. L'amène à s'interroger avec tact sur le risque de laisser la situation se dégrader\n3. Propose une étape préparatoire sans engagement lourd\n4. Apporte une raison tangible pour laquelle anticiper est plus avantageux qu'attendre\n\nRestez sous les 120 mots, sans forcer la vente."
        },
        {
          "title": "Surmonter le « je dois y réfléchir »",
          "text": "Aidez-moi à répondre à l'objection « je dois y réfléchir » ou « je reviendrai vers vous ».\n\nContexte : [stade de l'opportunité — démo effectuée, proposition envoyée, etc.]\nCe que le prospect a formulé : \"[citation exacte]\"\nCe que je soupçonne être la véritable hésitation : [prix / validation interne / prise de risque / valeur incertaine]\n\nRédigez une réponse qui :\n1. Respecte son temps de réflexion sans laisser l'affaire s'enliser\n2. Fait émerger la véritable hésitation par une question directe mais bienveillante\n3. Propose une aide concrète pour lever le frein (ex. argumentaire pour son comité interne)\n4. Bloque un rendez-vous de suivi précis avant de clore l'échange"
        }
      ]
    },
    {
      "cat": "Relance",
      "prompts": [
        {
          "title": "E-mail de suivi après une démonstration",
          "text": "Rédigez un e-mail de suivi à envoyer dans les 24 heures suivant une démonstration produit.\n\nNom du prospect : [nom]\nEntreprise : [entreprise]\nDate de la démo : [date]\nDifficultés principales abordées : [listez-en 1 à 3]\nFonctionnalités ayant suscité le plus d'intérêt : [listez]\nProchaine étape convenue : [ex. envoi de devis, présentation à l'équipe, test pilote]\nQuestions restées en suspens : [listez si existantes]\n\nL'e-mail doit :\n1. Remercier l'interlocuteur en faisant référence à un moment marquant de l'échange\n2. Récapituler les 2 ou 3 bénéfices clés au regard de ses besoins\n3. Apporter des réponses aux questions ouvertes\n4. Confirmer la prochaine étape avec une action claire\n\nTon : chaleureux et professionnel. Moins de 200 mots."
        },
        {
          "title": "Réactiver un prospect devenu silencieux (lead froid)",
          "text": "Rédigez un e-mail pour renouer le contact avec un prospect qui ne donne plus de nouvelles.\n\nNom du prospect : [nom]\nEntreprise : [entreprise]\nDernière interaction : [date et nature — ex. démo, envoi de devis]\nDélai sans nouvelles : [ex. 6 semaines]\nRaison probable du silence : [si connue]\nNouvel angle ou élément déclencheur : [ex. actualité de son entreprise, nouvelle fonctionnalité déployée, évolution du marché]\n\nRédigez un e-mail qui :\n1. Ne culpabilise pas et ne s'excuse pas à l'excès\n2. Ouvre sur une nouveauté ou information de valeur (pas un simple 'je prenais des nouvelles')\n3. Réaffirme la valeur ajoutée en une seule phrase\n4. Propose un appel à l'action très simple à valider\n\nMoins de 100 mots."
        },
        {
          "title": "E-mail d'accompagnement d'une proposition commerciale",
          "text": "Rédigez un e-mail accompagnant l'envoi d'une proposition commerciale à un prospect.\n\nNom du prospect : [nom]\nEntreprise : [entreprise]\nSynthèse de la proposition : [bref récapitulatif de l'offre]\nInvestissement total : [prix ou fourchette]\nBénéfices clés garantis : [2-3 points à puces]\nValidité de l'offre / échéance : [si applicable]\nProchaine étape : [ex. point d'échange prévu, signature en attente]\n\nL'e-mail doit :\n1. Présenter la proposition comme la réponse sur mesure à son problème (en rappelant la phase de découverte)\n2. Mettre en exergue les 2 ou 3 retombées concrètes les plus décisives\n3. Guider la lecture vers les sections essentielles du document\n4. Fixer clairement la prochaine action\n\nTon : assuré et constructif. Moins de 180 mots."
        },
        {
          "title": "E-mail de déblocage d'une opportunité au point mort",
          "text": "Rédigez un e-mail pour débloquer une opportunité commerciale qui s'enlise.\n\nNom du prospect : [nom]\nEntreprise : [entreprise]\nStade de l'opportunité : [ex. devis envoyé, accord oral sans signature, attente juridique]\nDurée du blocage : [délai]\nDernier échange : [bref résumé]\nCe qui bloque selon vous : [votre meilleure estimation]\n\nRédigez un e-mail qui :\n1. Ne donne pas l'impression de harceler ou de mettre la pression\n2. Apporte une aide concrète (ex. modèle type, données comparatives, proposition d'échange pour lever le blocage)\n3. Instaure une urgence mesurée et légitime sans être artificielle\n4. Propose une action précise assortie d'une date\n\nSuggérez également une démarche alternative si cet e-mail reste sans réponse."
        }
      ]
    },
    {
      "cat": "Rapports d'activité commerciale",
      "prompts": [
        {
          "title": "Synthèse hebdomadaire du pipeline de ventes",
          "text": "Rédigez une synthèse hebdomadaire de l'état du pipeline pour mon responsable commercial ou l'équipe.\n\nActivité de la semaine :\n- Nouvelles opportunités créées : [nombre et courte description]\n- Démonstrations ou rendez-vous réalisés : [nombre]\n- Propositions commerciales soumises : [nombre]\n- Affaires conclues (gagnées) : [nombre et montant]\n- Affaires perdues : [nombre et causes si connues]\n\nPhotographie du pipeline :\n- Valeur totale du pipeline ouvert : [montant]\n- Répartition des dossiers par étape : [listez]\n- Dossiers à risque : [affaires bloquées ou en péril]\n\nPriorités pour la semaine prochaine : [listez 3 à 4 actions]\n\nPrésentez sous la forme d'un récapitulatif aéré et facile à parcourir. Employez des termes simples et opérationnels."
        },
        {
          "title": "Analyse d'une opportunité perdue (Post-Mortem deal)",
          "text": "Aidez-moi à rédiger l'analyse rétrospective d'une affaire commerciale perdue.\n\nDétails de l'affaire :\n- Prospect : [nom de l'entreprise]\n- Montant de l'opportunité : [valeur]\n- Durée du cycle de vente : [durée]\n- Stade de l'échec : [ex. après la démo, après l'offre]\n- Motif officiel invoqué : [ce que le prospect nous a dit]\n- Raison réelle perçue : [votre analyse lucide]\n- Concurrent retenu (si connu) : [nom]\n\nAnalysez :\n1. Quels signaux d'alerte avons-nous manqués ou négligés ?\n2. À quel moment le processus de vente a-t-il achoppé ?\n3. Cette affaire était-elle réellement gagnable ? Pourquoi ?\n4. Que ferions-nous différemment ?\n5. Existe-t-il une opportunité de réengagement futur ?\n\nAdoptez une posture lucide, constructive et sans justification défensive."
        },
        {
          "title": "Analyse des motifs de gain et de perte (Win/Loss)",
          "text": "Analysez ces résultats de victoires et de défaites commerciales pour en dégager des tendances récurrentes.\n\nAffaires gagnées récentes :\n[listez les dossiers gagnés — taille, secteur, interlocuteur, durée du cycle, facteur décisif]\n\nAffaires perdues récentes :\n[listez les dossiers perdus — taille, secteur, interlocuteur, durée du cycle, cause de perte]\n\nIdentifiez :\n1. Les traits communs des dossiers que nous remportons (adéquation ICP, cas d'usage, profil d'interlocuteur, taille du deal)\n2. Les caractéristiques récurrentes des affaires perdues\n3. Les facteurs clés de nos succès (prix, relationnel, fonctionnalités, réactivité)\n4. Les motifs récurrents d'échec\n5. Recommandations : où concentrer les efforts, quels correctifs apporter au processus de vente et quel segment prioriser"
        },
        {
          "title": "Note de prévisions de ventes pour la direction",
          "text": "Rédigez une note de prévisions de ventes (forecast) destinée au comité de direction ou aux investisseurs.\n\nPériode de prévision : [ex. T2 2026]\nObjectif commercial (quota) : [cible totale]\nPipeline actuel : [valeur totale]\nPrévision sécurisée (engagée / commit) : [montant quasi certain]\nScénario favorable (best case) : [si tout s'aligne]\nRisques majeurs identifiés : [opportunités susceptibles de glisser]\n\nAffaires clés à mettre en lumière :\n[listez-en 3 à 5 avec nom/placeholder, étape, montant, date de clôture estimée]\n\nRédigez une note de 200 mots qui :\n1. Énonce d'emblée le chiffre prévisionnel principal\n2. Explicite les moteurs de cette confiance\n3. Nomme les risques clés et les plans d'atténuation en cours\n4. Se conclut par une demande ou un arbitrage précis attendu de la direction (le cas échéant)\n\nTon : assuré, fondé sur les faits et les données, sans posture défensive."
        }
      ]
    }
  ]
};
