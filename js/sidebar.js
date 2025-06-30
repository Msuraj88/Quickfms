document.addEventListener('DOMContentLoaded', function () {
            const sidebar = document.getElementById('sidebar');
            const toggleButton = document.getElementById('sidebar-toggle');
            
            // Function to initialize or destroy tooltips based on sidebar state
            const manageTooltips = () => {
                const sidebarLinks = sidebar.querySelectorAll('ul.components > li > a');

                if (sidebar.classList.contains('collapsed')) {
                    // Initialize tooltips for collapsed sidebar
                    sidebarLinks.forEach(link => {
                        const menuText = link.querySelector('.menu-text').textContent;
                        link.setAttribute('title', menuText);
                        new bootstrap.Tooltip(link);
                    });
                } else {
                    // Destroy tooltips for expanded sidebar
                    sidebarLinks.forEach(link => {
                        const tooltipInstance = bootstrap.Tooltip.getInstance(link);
                        if (tooltipInstance) {
                            tooltipInstance.dispose();
                        }
                        link.removeAttribute('title');
                    });
                }
            };
            
            // Toggle sidebar and update tooltips on button click
            toggleButton.addEventListener('click', function () {
                sidebar.classList.toggle('collapsed');
                manageTooltips();
            });

            // Initial check
            manageTooltips();
        });