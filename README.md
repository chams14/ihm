# ihm - Programming interfaces project
## Sujet
Implémentation d'une application mobile orientée sport en suivant les principes du design centré utilisateur.

Objectifs de l'applications : <br>
L’objectif principal est de faciliter la mise en relation de passionnés partageant la même discipline sportive, leur permettant ainsi de se rencontrer et d'organiser des activités communes directement via l’application.

## Fonctionnement 
<span style="font-size: 18px; color: red;">⚠️ <strong>1ère page à ouvrir </strong> → lieu.html</span>

Comme chaque page à son model, les données sont stocker dans un fichier data.json afin d'éviter de copier plusieurs fois (dans chaque model).
Le fichier json remplace l'API que l'application est sencé avoir.

Les pages affichant les infos d'une séance ou d'un profil sont gérer avec le passage en paramètre d'un id pour éviter de créer plusieurs pages. Pour pouvoir accès à ces pages il faut donc passer par la page du lieu ou saisir à la main l'URL:
- /seance.html?seance=s1
- /seance.html?seance=s2
- /profil.html?user=emma
- /profil.html?user=max

## Répartitions : qui a travaillé sur quoi
- Lieu (js_lieu): Thomas
- Profil (js_profil): Maëlle (/seance, ma version de seance afin de faire le lien avec les profils)
- Séance (js_seance): Denez
- Création de séance (js_creation): Eliott