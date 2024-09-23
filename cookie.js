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

        // Adiciona CSS customizado para tornar o pop-up menor
        var style = document.createElement('style');
        style.innerHTML = `
            .cc-window {
                width: 180px !important; /* Menor largura */
                padding: 5px !important; /* Reduzir padding */
                font-size: 10px !important; /* Diminuir fonte */
            }
            .cc-message, .cc-compliance {
                font-size: 10px !important; /* Diminuir ainda mais o tamanho da fonte */
            }
            .cc-compliance .cc-btn {
                padding: 3px 5px !important; /* Menor botão */
            }
        `;
        document.head.appendChild(style);
    };
    document.head.appendChild(script);
}

window.start = new cooquie();
