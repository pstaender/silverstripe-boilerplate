<?php

if (getenv('ASSETS_PATH')) {
  define('ASSETS_PATH', getenv('ASSETS_PATH'));
}

require './index.php';
