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

        // Adiciona CSS customizado para ajustar o tamanho
        var style = document.createElement('style');
        style.innerHTML = `
            .cc-window {
                width: 250px !important;
                font-size: 12px !important;
            }
            .cc-message, .cc-compliance {
                font-size: 12px !important;
            }
        `;
        document.head.appendChild(style);
    };
    document.head.appendChild(script);
}

window.start = new cooquie();
