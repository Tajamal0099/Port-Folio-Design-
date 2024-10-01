document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('nav button');
    const sections = document.querySelectorAll('.section-content section');

    function showSection(sectionIndex) {
        sections.forEach((section, index) => {
            section.classList.toggle('hidden', index !== sectionIndex);
        });
    }

    buttons.forEach((button, index) => {
        button.addEventListener('click', function () {
            showSection(index);
            buttons.forEach(btn => btn.querySelector('a').classList.remove('bg-green-500'));
            button.querySelector('a').classList.add('bg-green-500');
        });
    });

    showSection(0);

    function injectDots(section) {
        const dotsContainer = document.createElement('div');
        dotsContainer.classList.add('animated-dots');

        const dotPositions = [
            { top: '10%', left: '10%' },
            { top: '20%', left: '30%' },
            { top: '30%', left: '50%' },
            { top: '40%', left: '70%' },
            { top: '50%', left: '20%' },
            { top: '60%', left: '40%' },
            { top: '70%', left: '60%' },
            { top: '80%', left: '80%' },
            { top: '15%', left: '85%' },
            { top: '25%', left: '15%' },
            { top: '35%', left: '75%' },
            { top: '45%', left: '35%' },
            { top: '55%', left: '65%' },
            { top: '65%', left: '45%' },
            { top: '75%', left: '55%' },
            { top: '85%', left: '25%' }
        ];

        dotPositions.forEach(pos => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.style.top = pos.top;
            dot.style.left = pos.left;
            dotsContainer.appendChild(dot);
        });

        section.appendChild(dotsContainer);
    }
    const dottedSections = document.querySelectorAll('.section-with-dots');
    dottedSections.forEach(section => injectDots(section));
    const navButtons = document.querySelectorAll('nav button');
    navButtons.forEach(button => {
        button.addEventListener('click', function () {
            navButtons.forEach(btn => btn.classList.remove('active-button'));
            this.classList.add('active-button');
        });
    });
    const animatedText = document.getElementById('animated-text');
    if (animatedText) {
        const textContent = animatedText.textContent;
        animatedText.innerHTML = '';

        Array.from(textContent).forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.classList.add('animated-letter');
            span.style.animationDelay = `${index * 0.05}s`;
            animatedText.appendChild(span);
        });
    }
});
