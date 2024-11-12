# ihm - Programming interfaces project

Lien github : https://github.com/chams14/ihm 

## Sujet
Implémentation d'une application mobile orientée sport en suivant les principes du design centré utilisateur.

Objectifs de l'application : <br>
L’objectif principal est de faciliter la mise en relation de passionnés partageant la même discipline sportive, leur permettant ainsi de se rencontrer et d'organiser des activités communes directement via l’application.

## Fonctionnement 
<span style="font-size: 18px; color: red;">⚠️ <strong>1ère page à ouvrir </strong> → lieu.html</span>

<strong>Profil</strong><br>
Comme chaque page a son modèle, les données sont stockées dans un fichier data.json afin d'éviter de copier plusieurs fois (dans chaque modèle).
Le fichier json remplace l'API que l'application est censé avoir.

Les pages affichant les infos d'une séance ou d'un profil sont gérées avec le passage en paramètre d'un id pour éviter de créer plusieurs pages. Pour pouvoir accéder à ces pages il faut donc passer par :
- /seance.html?seance=s1
- /seance.html?seance=s2
- /profil.html?user=emma
- /profil.html?user=max

On y a accès aussi en passant par la page **lieu.html**

## Répartitions : qui a travaillé sur quoi
- Lieu (/lieu): Thomas
- Profil (/profil): Maëlle (/profil/seance, ma version de seance afin de faire le lien avec les profils)
- Séance (/seance): Denez
- Création de séance (/creation): Eliott
