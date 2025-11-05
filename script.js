document.addEventListener('DOMContentLoaded', function() {
    // Page navigation
    const portfolioLink = document.getElementById('portfolioLink');
    const homeContent = document.getElementById('homeContent');
    const portfolioContent = document.getElementById('portfolioContent');
    let currentPage = 'home';

    const headerSlash = document.getElementById('headerSlash');
    const headerSection = document.getElementById('headerSection');

    if (portfolioLink) {
        portfolioLink.addEventListener('click', function(event) {
            event.preventDefault();
            
            if (currentPage === 'home') {
                // Switch to portfolio
                homeContent.classList.remove('active');
                setTimeout(() => {
                    portfolioContent.classList.add('active');
                    currentPage = 'portfolio';
                    portfolioLink.innerHTML = '<span class="portfolio-text">HOME</span> ←';
                    // Update header
                    if (headerSlash) headerSlash.textContent = ' / ';
                    if (headerSlash) headerSlash.classList.add('visible');
                    if (headerSection) headerSection.textContent = 'Portfolio';
                    if (headerSection) headerSection.classList.add('visible');
                }, 150);
            } else {
                // Switch to home
                portfolioContent.classList.remove('active');
                setTimeout(() => {
                    homeContent.classList.add('active');
                    currentPage = 'home';
                    portfolioLink.innerHTML = '<span class="portfolio-text">VIEW PORTFOLIO</span> →';
                    // Update header
                    if (headerSlash) headerSlash.classList.remove('visible');
                    if (headerSection) headerSection.classList.remove('visible');
                }, 150);
            }
        });
    }

    const emailTextLink = document.getElementById('emailTextLink');
    const emailToCopy = 'naveedaria4@gmail.com';
    
    const emailIconSVG = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>';
    const checkIconSVG = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';

    if (emailTextLink) {
        emailTextLink.addEventListener('click', function(event) {
            event.preventDefault();

            navigator.clipboard.writeText(emailToCopy).then(function() {
                // Change icon to checkmark
                emailTextLink.innerHTML = checkIconSVG;
                emailTextLink.style.color = '#198754';
                
                setTimeout(function() {
                    // Change back to email icon
                    emailTextLink.innerHTML = emailIconSVG;
                    emailTextLink.style.color = '';
                }, 2000);
            }).catch(function(err) {
                // On error, briefly show different state if needed
                console.error('Failed to copy email:', err);
            });
        });
    }

}); 