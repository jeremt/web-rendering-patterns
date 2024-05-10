const express = require("express");
const cors = require("cors");

const app = express();

const offers = [
  {
    titre: "Traducteur·ice en Chef d'Émojis",
    technologie: "JavaScript, Python, EmojiScript",
    description:
      "Parlez-vous couramment le langage des émojis ? Nous recrutons une personne en tant que Traducteur en Chef d'Émojis pour combler le fossé de communication entre les développeurs et les personnes concernées, qu'elles soient techniques ou non. La personne doit avoir un talent pour traduire un code complexe en émojis expressifs et vice versa. Des points bonus si la personne peut décoder les messages secrets cachés dans les 💻🤔🚀.",
  },
  {
    titre: "Acrobate du Code",
    technologie: "Java, C++, Python, Ruby et une touche de magie",
    description:
      "Nous recherchons une personne en tant qu'Acrobate du Code qui peut jongler sans effort avec plusieurs langages de programmation sans laisser tomber un seul point-virgule. Si la personne est maître des acrobaties syntaxiques et peut maintenir le flux de code comme un acte de jonglage fascinant, nous la voulons dans notre équipe.",
  },
  {
    titre: "Responsable de la Procrastination en Chef",
    technologie: "JavaScript (seulement quand absolument nécessaire)",
    description:
      "Êtes-vous une personne maître de l'art de la procrastination ? Nous recrutons une Responsable de la Procrastination en Chef pour retarder stratégiquement les projets de développement logiciel jusqu'au dernier moment possible. Une expérience avec les techniques de perte de temps et une ceinture noire en surf sur YouTube sont définitivement un plus.",
  },
  {
    titre: "Thérapeute de Débogage",
    technologie: "Python, Java, C#",
    description:
      "Nous croyons que chaque ligne de code a aussi des sentiments. Rejoignez-nous en tant que Thérapeute de Débogage et aidez les personnes développeuses troublées à naviguer dans les montagnes russes émotionnelles des sessions de débogage. La personne doit avoir d'excellentes compétences d'écoute et la capacité de consoler un code désemparé.",
  },
  {
    titre: "Chef·fe Dompteur de Chats (Chef·fe de Projet)",
    technologie: "HTML, CSS, JavaScript (pour apprivoiser ces chats sauvages)",
    description:
      "Vous en avez assez de dompter des chats ? Que diriez-vous de dompter des personnes développeuses à la place ? Nous avons besoin d'un·e Chef·fe Dompteur·euse de Chats (Chef·fe de Projet) qui peut rassembler une équipe de personnes développeuses excentriques aux personnalités diverses et les faire travailler harmonieusement ensemble. Des points bonus si la personne a déjà dompté des chats réels.",
  },
  {
    titre: "Expert·e du CoffeeScript",
    technologie: "CoffeeScript, TypeScript (au cas où)",
    description:
      "Le café étant très important dans la culture de notre entreprise, nous recherchons quelqu'un avec des talents de Barista hors-pair avant tout, mais si tu peux aussi coder, c'est mieux !",
  },
  {
    titre: "Maître Dompteur d'Unicornes Full-Stack",
    technologie:
      "Tout, du frontend au backend, et tout ce qu'il y a entre les deux",
    description:
      "Nous recherchons un·e Mythique Maître·sse Dompteur·euse d'Unicornes Full-Stack qui peut apprivoiser les personnes développeuses licornes full-stack insaisissables. La personne doit avoir un talent pour maintenir à la fois les personnes développeuses frontend et backend en harmonie, en veillant à ce qu'elles ne se livrent pas à des batailles épiques sur les espaces par rapport aux tabulations ou sur le placement des accolades.",
  },
  {
    titre: "Jedi du Travail à Distance",
    technologie: "Zoom, Slack, Microsoft Teams",
    description:
      "Maîtrisez l'art ancien du travail à distance et devenez un·e Jedi du Travail à Distance. Utilisez la force des appels vidéo, de la messagerie instantanée et des outils de collaboration virtuelle pour apporter l'équilibre à la galaxie du travail à domicile. Les compétences au sabre laser sont facultatives, mais une connexion Wi-Fi solide est indispensable.",
  },
  {
    titre: "Comédien·ne Stand-Up Algorithmique",
    technologie: "Python, JavaScript, R",
    description:
      "Pouvez-vous faire rire les algorithmes ? Nous recrutons un·e Comédien·ne Stand-Up Algorithmique pour apporter de la joie à nos sessions de codage. Si la personne peut transformer des algorithmes de tri en punchlines et faire rire des arbres binaires, c'est le travail pour elle. Des points bonus pour un bon sens de l'humour de la récursion.",
  },
  {
    titre: "Support Technique Voyageur·se Temporel",
    technologie: "HTML5, CSS3, Python (pour les sauts quantiques)",
    description:
      "Rejoignez notre équipe en tant que spécialiste du Support Technique Voyageur Temporel. Naviguez dans le continuum espace-temps pour résoudre les bugs avant même qu'ils ne surviennent. La maîtrise du débogage des problèmes dans les lignes temporelles passées et futures est indispensable. Machine à remonter le temps fournie après une embauche réussie. Aucun·e paradoxe autorisé·e.",
  },
];

app.use(cors());

// API

app.get("/offers", (req, res) => {
  res.json(offers);
});

app.get("/offers/:id", (req, res) => {
  res.json(offers[req.params.id]);
});

// WEBSITE

app.get("/", (req, res) => {
  res.send(`
        <h1>Offres récentes</h1>
        ${offers.map(
          (offer, i) => `
            <a href="/${i}"><h2>${offer.titre}</h2></a>
            <p>${offer.description}</p>
        `
        )}
    `);
});

app.get("/:id", (req, res) => {
  const offer = offers[req.params.id];
  res.send(`
        <a href="/">Back</a>
        <h1>${offer.titre}</h1>
        <small>${offer.technologie}}</small>
        <p>${offer.description}</p>
    `);
});

const port = process.env.PORT || 1234;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
