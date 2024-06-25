function() cooquie {
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
    };
    document.head.appendChild(script);
}

window.start = new cooquie();
