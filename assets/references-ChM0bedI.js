var e=`© 2026 Kevin Frias – HOOT Clap Game. Tous droits réservés.`;function t(t){let n=document.createElement(`dialog`);n.className=`credits-dialog`,n.setAttribute(`aria-labelledby`,`credits-title`),n.innerHTML=`<h2 id="credits-title">Oh My Cult ! – Conquête des fidèles</h2>
    <p>Créé par Kevin Frias</p><p>Une création HOOT Clap Game</p>
    <p>Création et conception du jeu : Kevin Frias</p><p>HOOT Clap Game</p>
    <p class="copyright-line">${e}</p>
    <form method="dialog"><button class="quiet">Fermer</button></form>`,t.append(n),t.querySelector(`[data-credits]`).addEventListener(`click`,()=>n.showModal())}export{t as n,e as t};