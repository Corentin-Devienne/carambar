document.addEventListener('DOMContentLoaded', function() {
    var blagues = [
      {
        id: 1,
        texte: "Quelle est la femelle du hamster ? L'amsterdam"
      },
      {
        id: 2,
        texte: "Que dit un oignon quand il se cogne ? Aïe"
      },
      {
        id: 3,
        texte: "Quel est l'animal le plus heureux ? Le hibou, parce que sa femme est chouette"
      },
      {
        id: 4,
        texte: "Pourquoi le football c'est rigolo ? Parceque Thierry en rit"
      },
      {
        id: 5,
        texte: "Quelle est le sport le plus fruité ? La boxe, parce que tu te prend des pêches dans la poire et tu tombe dans les pommes "
      },
      {
        id: 6,
        texte: "que se fait un stroumpf quand il tombe ? un bleu "
      },
      {
        id: 7,
        texte: "Quelle est le comble pour un marin ? avoir le nez qui coule"
      },
      {
        id: 8,
        texte: "Qu'est ce que les enfant use le plus a l'école ? Le professeur"
      },
      {
        id: 9,
        texte: "Quel est le sport le plus silencieux ? le para-chuuuuuuut!"
      },
      {
        id: 10,
        texte: "Quel est le comble pour un joueur de bowling ? c'est de perdre la boule"
      },
    ];
  
    var boutonBlague = document.getElementById('boutonBlague');
    var blagueDiv = document.getElementById('blague');
  
    boutonBlague.addEventListener('click', function() {
      // Sélectionner une blague aléatoire
      var blagueAleatoire = blagues[Math.floor(Math.random() * blagues.length)];
      blagueDiv.textContent = blagueAleatoire.texte;
    });
  });