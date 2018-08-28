<?php
require_once './mcstat.php';
require_once './mcformat.php';
$hostname = "[2a02:8071:29f:2f00:88bb:b130:132f:8bbe]:25565";
$m = new MinecraftStatus($hostname);
$status = $m->ping(false);
echo json_encode($status);
?>