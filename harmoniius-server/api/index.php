<?php
 
class HarmoniiAPI {
    // Main method to redeem a code
    function hello() {
        echo "Hello, PHP!";
    }
}
 
// This is the first thing that gets called when this page is loaded
// Creates a new instance of the RedeemAPI class and calls the redeem method
$api = new HarmoniiApi;
$api->hello();
 
?>