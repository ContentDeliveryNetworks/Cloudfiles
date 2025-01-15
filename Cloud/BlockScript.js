   // Disable right-click context menu
        document.addEventListener('contextmenu', function(event) {
            event.preventDefault();
        });

        // Disable certain keyboard shortcuts
        document.addEventListener('keydown', function(event) {
            // Disable Ctrl + U (View Source)
            if (event.ctrlKey && event.key === 'u') {
                event.preventDefault();
            }
            // Disable Ctrl + S (Save Page)
            if (event.ctrlKey && event.key === 's') {
                event.preventDefault();
            }
            // Disable F12 (Developer Tools)
            if (event.keyCode === 123) {
                event.preventDefault();
            }
            // Disable Ctrl + C (Copy)
            if (event.ctrlKey && event.key === 'c') {
                event.preventDefault();
            }
            // Disable Ctrl + X (Cut)
            if (event.ctrlKey && event.key === 'x') {
                event.preventDefault();
            }
        });

        // Disable drag and drop
        document.addEventListener('dragstart', function(event) {
            event.preventDefault();
        });

        // Disable text selection on specific elements
        const elements = document.querySelectorAll('h1, p');
        elements.forEach(element => {
            element.addEventListener('selectstart', function(event) {
                event.preventDefault();
            });
        });
