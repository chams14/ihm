# IHM - Programming interfaces project
[Lien github](https://github.com/chams14/ihm) <br>
[Lien figma](https://www.figma.com/design/XyQfhNUhLn8MViZXQNnGds/IHM?node-id=0-1&node-type=canvas&t=CuyV9nAqQSikQtcj-0)

## Sujet
Implémentation d'une application mobile orientée sport en suivant les principes du design centré utilisateur.

Objectif de l'application : faciliter la mise en relation de passionnés partageant la même discipline sportive, leur permettant ainsi de se rencontrer et d'organiser des activités communes directement via l’application

## Répartition : qui a travaillé sur quoi
- Thomas : Lieu (`/lieu` + `lieu.html`)
- Maëlle : Profil (`/profil`). Ce dossier contient une deuxième version de séance (`/profil/js_seance`) qui a été fait pour faire le lien entre le lieu, les séances et les profils
- Denez : Séance (`/seance`)
- Eliott : Création de séance (`/creation`)

## Fonctionnement `/profil`
<span style="font-size: 18px; color: red;">⚠️ <strong>1ère page à ouvrir </strong> → lieu.html</span>

Pour simplifier le choix de page à afficher j'ai stocké les données dans un fichier `data.json` qui simule l'API que l'application est censé avoir.

Les pages affichant les infos d'une séance ou d'un profil sont gérées avec le passage en paramètre d'un id pour éviter de créer plusieurs pages. 

Pour pouvoir accéder à ces pages il faut donc soit passer par `lieu.html` et cliquer sur une séance ou passer par les URL suivants :
- `/profil.html?user=emma`
- `/profil.html?user=max`
- `/seance.html?seance=s1`
- `/seance.html?seance=s2`

Nb: Max est l'utilisateur de l'application