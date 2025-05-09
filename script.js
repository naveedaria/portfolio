document.addEventListener('DOMContentLoaded', function() {
    const emailTextLink = document.getElementById('emailTextLink');
    const copyIndicator = document.getElementById('copyIndicator');
    const emailToCopy = 'naveedaria4@gmail.com';

    if (emailTextLink) {
        emailTextLink.addEventListener('click', function(event) {
            event.preventDefault();

            navigator.clipboard.writeText(emailToCopy).then(function() {
                if (copyIndicator) {
                    copyIndicator.textContent = '- Copied!';
                    copyIndicator.classList.add('visible');
                    copyIndicator.style.color = '#198754';
                    copyIndicator.style.background = 'none';
                    copyIndicator.style.borderRadius = '0';
                    setTimeout(function() {
                        copyIndicator.classList.remove('visible');
                        copyIndicator.textContent = '';
                        copyIndicator.style.color = '';
                        copyIndicator.style.background = 'none';
                        copyIndicator.style.borderRadius = '0';
                    }, 3000);
                }
            }).catch(function(err) {
                if (copyIndicator) {
                    copyIndicator.textContent = 'Failed!';
                    copyIndicator.style.background = '#f8d7da';
                    copyIndicator.style.color = '#721c24';
                    copyIndicator.classList.add('visible');
                    setTimeout(function() {
                        copyIndicator.classList.remove('visible');
                        copyIndicator.textContent = '';
                        copyIndicator.style.background = '#d4edda';
                        copyIndicator.style.color = '#155724';
                    }, 3000);
                }
            });
        });
    }

    const emailTextLinkFooter = document.getElementById('emailTextLinkFooter');
    const copyIndicatorFooter = document.getElementById('copyIndicatorFooter');

    if (emailTextLinkFooter) {
        emailTextLinkFooter.addEventListener('click', function(event) {
            event.preventDefault();

            navigator.clipboard.writeText(emailToCopy).then(function() {
                if (copyIndicatorFooter) {
                    copyIndicatorFooter.textContent = '- Copied!';
                    copyIndicatorFooter.classList.add('visible');
                    copyIndicatorFooter.style.color = '#198754';
                    copyIndicatorFooter.style.background = 'none';
                    copyIndicatorFooter.style.borderRadius = '0';
                    setTimeout(function() {
                        copyIndicatorFooter.classList.remove('visible');
                        copyIndicatorFooter.textContent = '';
                        copyIndicatorFooter.style.color = '';
                        copyIndicatorFooter.style.background = 'none';
                        copyIndicatorFooter.style.borderRadius = '0';
                    }, 3000);
                }
            }).catch(function(err) {
                if (copyIndicatorFooter) {
                    copyIndicatorFooter.textContent = 'Failed!';
                    copyIndicatorFooter.style.background = '#f8d7da';
                    copyIndicatorFooter.style.color = '#721c24';
                    copyIndicatorFooter.classList.add('visible');
                    setTimeout(function() {
                        copyIndicatorFooter.classList.remove('visible');
                        copyIndicatorFooter.textContent = '';
                        copyIndicatorFooter.style.background = '#d4edda';
                        copyIndicatorFooter.style.color = '#155724';
                    }, 3000);
                }
            });
        });
    }
}); 