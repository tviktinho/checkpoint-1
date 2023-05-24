<?php
session_start();

if (isset($_POST['produto'])) {
    $produto = $_POST['produto'];

    // Adicione o produto ao carrinho, como por exemplo, salvando em uma sessão
    $_SESSION['carrinho'][] = $produto;

    // Envie uma resposta de sucesso para o JavaScript
    echo 'OK';
}
?>
