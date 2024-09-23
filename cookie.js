function cooquie() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cookieconsent.popupsmart.com/src/js/popper.js';
    script.onload = function() {
        window.start.init({
            Palette: "palette2",
            Mode: "floating left",
            Theme: "wire",
            Message: "Este site usa cookies para te entregar a melhor experiência.",
            ButtonText: "Entendi",
            LinkText: "Clique para maiores informações",
            Time: "10",
        });

       
        var style = document.createElement('style');
        style.innerHTML = `
            .cc-window {
                width: 150px !important; /* Menor largura */
                padding: 3px !important;  /* Padding reduzido */
                font-size: 9px !important; /* Fonte pequena */
            }
            .cc-message, .cc-compliance {
                font-size: 9px !important;  /* Tamanho da mensagem e do botão */
            }
            .cc-compliance .cc-btn {
                padding: 2px 4px !important; /* Botão menor */
            }
        `;
        document.head.appendChild(style);
    };
    document.head.appendChild(script);
}

window.start = new cooquie();
