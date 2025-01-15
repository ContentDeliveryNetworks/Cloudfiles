        // Disable right-click
        document.addEventListener('contextmenu', (event) => {
            event.preventDefault();
        });

        // Disable key combinations
        document.addEventListener('keydown', (event) => {
            const forbiddenKeys = ['u', 's', 'c', 'i', 'j']; // Forbidden keys for Ctrl+Key combinations
            if (
                (event.ctrlKey && forbiddenKeys.includes(event.key.toLowerCase())) ||
                (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'i') || // Ctrl+Shift+I
                event.key === 'F12' // Developer tools key
            ) {
                event.preventDefault();
            }
        });

        // Disable text selection, dragging, and copying
        document.addEventListener('selectstart', (event) => event.preventDefault());
        document.addEventListener('copy', (event) => event.preventDefault());
        document.addEventListener('dragstart', (event) => event.preventDefault());

        // Monitor for Developer Tools opening
        (function monitorDevTools() {
            const element = new Image();
            Object.defineProperty(element, 'id', {
                get: function () {
                    window.location.href = 'about:blank'; // Redirect to blank if DevTools is detected
                }
            });
            console.log(element);
            setTimeout(monitorDevTools, 1000); // Continuously check every second
        })();

        // Clear the console
        console.clear();

        // Disable viewing source via menu or shortcuts
        setInterval(() => {
            document.body.onkeydown = (event) => {
                if (
                    event.keyCode === 123 || // F12
                    (event.ctrlKey && event.shiftKey && event.keyCode === 73) || // Ctrl+Shift+I
                    (event.ctrlKey && event.keyCode === 85) // Ctrl+U
                ) {
                    event.preventDefault();
                    return false;
                }
            };
        }, 1000);
