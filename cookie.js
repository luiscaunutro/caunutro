<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consentimento de Cookies</title>
    <style>
        /* Estilos para o pop-up de consentimento de cookies */
        .cookie-popup {
            position: fixed;
            bottom: 50px; /* Aumente o valor para ficar mais alto na tela */
            left: 50px;   /* Aumente o valor para centralizar mais */
            background-color: #f1f1f1;
            padding: 20px; /* Aumente o padding para melhor visibilidade */
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
            font-size: 14px; /* Aumente o tamanho da fonte */
            z-index: 1000;
            max-width: 300px;
            display: flex;
            flex-direction: column;
        }

        .cookie-popup p {
            margin: 0;
            padding: 5px 0;
        }

        .cookie-popup button {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 5px 10px;
            font-size: 12px; /* Ajuste o tamanho da fonte no botão */
            cursor: pointer;
            margin-top: 5px;
            align-self: flex-end;
        }

        .cookie-popup a {
            color: #0066cc;
            text-decoration: none;
            font-size: 12px; /* Ajuste o tamanho do link */
        }

        .cookie-popup a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>

<div class="cookie-popup" id="cookiePopup">
    <p>Este site usa cookies para te entregar a melhor experiência.</p>
    <a href="#">Clique para maiores informações</a>
    <button onclick="acceptCookies()">Entendi</button>
</div>

<script>
    // Função para remover o pop-up quando o usuário aceitar os cookies
    function acceptCookies() {
        document.getElementById('cookiePopup').style.display = 'none';

        // Armazena a informação de que o usuário aceitou os cookies no localStorage
        localStorage.setItem('cookiesAccepted', 'true');
        console.log('Cookies aceitos');
    }

    // Verifica se o usuário já aceitou os cookies
    window.onload = function() {
        console.log('Página carregada');
        if (localStorage.getItem('cookiesAccepted') === 'true') {
            console.log('Cookies já aceitos');
            document.getElementById('cookiePopup').style.display = 'none';
        } else {
            console.log('Cookies não aceitos');
        }
    };
</script>

</body>
</html>
