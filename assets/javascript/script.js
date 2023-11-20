
    // Funzione che gestisce il collegamento tra checkbox e pulsante
    function myFunction() {
        // Otteniamo la checkbox e il pulsante
        let checkbox = document.getElementById("checkbox");
        let button = document.getElementById("button");
  
        // Abilita o disabilita il pulsante in base allo stato della checkbox
        button.disabled = !checkbox.checked;
        if (button.disabled) {
            button.style.backgroundColor = 'transparent';
          } else {
            button.style.backgroundColor = '#00ffff';
          }
        }
        function redirectToPage() {
            window.location.href = 'nuova_pagina.html'; // Sostituisci con l'URL della tua nuova pagina
          }