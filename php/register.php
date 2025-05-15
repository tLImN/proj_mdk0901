<?php
include './config.php'; // Файл с настройками базы данных

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $name = $_POST['name'];
    $phone = $_POST['tel'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

    $stmt = $pdo->prepare("INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)");
    if ($stmt->execute([$name, $email, $phone, $password])) {
        echo "Регистрация прошла успешно!";
    } else {
        echo "Ошибка: " . $stmt->errorInfo()[2];
    }
}
?>