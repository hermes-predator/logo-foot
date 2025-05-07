import React from 'react';

const PackDescription = () => {
  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none text-gray-700">
      <p>
        Le fichier ZIP ⦗FRONT-CLOUD⦘~ Football.zip contient l'intégralité des logos des clubs de football du monde entier,
        organisés de manière claire et intuitive. Voici un aperçu de ce que vous trouverez à l'intérieur :
      </p>
      
      <h2>Structure du fichier ZIP</h2>
      <ol>
        <li>
          <strong>Logos par Pays :</strong> Chaque pays possède son propre dossier, facilitant la recherche des clubs par nation.
        </li>
        <li>
          <strong>Logos par Compétition :</strong> Les logos sont également classés par compétition (Ligue 1, Premier League, Liga, Serie A, Bundesliga, etc.).
        </li>
        <li>
          <strong>Haute Qualité :</strong> Tous les logos sont en haute résolution, assurant une qualité optimale pour tous vos projets.
        </li>
      </ol>

      <h2>Contenu détaillé</h2>
      <ul>
        <li>
          <strong>Europe :</strong>
          <ul>
            <li>France (Ligue 1, Ligue 2, National)</li>
            <li>Angleterre (Premier League, Championship, League One, League Two)</li>
            <li>Espagne (La Liga, Segunda División)</li>
            <li>Italie (Serie A, Serie B)</li>
            <li>Allemagne (Bundesliga, 2. Bundesliga)</li>
            <li>... et bien d'autres pays européens</li>
          </ul>
        </li>
        <li>
          <strong>Amérique :</strong>
          <ul>
            <li>États-Unis (MLS)</li>
            <li>Brésil (Série A, Série B)</li>
            <li>Argentine (Primera División)</li>
            <li>Mexique (Liga MX)</li>
            <li>... et d'autres pays d'Amérique du Nord, Centrale et du Sud</li>
          </ul>
        </li>
        <li>
          <strong>Asie :</strong>
          <ul>
            <li>Japon (J1 League, J2 League)</li>
            <li>Corée du Sud (K League 1, K League 2)</li>
            <li>Chine (Super League)</li>
            <li>... et d'autres pays asiatiques</li>
          </ul>
        </li>
        <li>
          <strong>Afrique :</strong>
          <ul>
            <li>Égypte (Premier League)</li>
            <li>Maroc (Botola Pro)</li>
            <li>Afrique du Sud (Premier Soccer League)</li>
            <li>... et d'autres pays africains</li>
          </ul>
        </li>
        <li>
          <strong>Compétitions Internationales :</strong>
          <ul>
            <li>Ligue des Champions de l'UEFA</li>
            <li>Ligue Europa de l'UEFA</li>
            <li>Copa Libertadores</li>
            <li>Coupe du Monde de la FIFA</li>
            <li>... et bien d'autres compétitions internationales</li>
          </ul>
        </li>
      </ul>

      <h2>Pourquoi ce pack de logos ?</h2>
      <ul>
        <li>
          <strong>Gain de temps :</strong> Plus besoin de chercher les logos un par un, tout est centralisé.
        </li>
        <li>
          <strong>Qualité garantie :</strong> Des logos en haute résolution pour un rendu professionnel.
        </li>
        <li>
          <strong>Mise à jour régulière :</strong> Le pack est mis à jour pour inclure les derniers logos et compétitions.
        </li>
      </ul>

      <p>
        Que vous soyez un designer, un développeur web, un journaliste sportif ou un simple passionné de football,
        ce pack de logos est l'outil idéal pour tous vos projets.
      </p>
    </div>
  );
};

export default PackDescription;
