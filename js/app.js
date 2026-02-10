// Variables para elementos
const hamburgerBtn = document.querySelector('.hamburger');
const closeBtn     = document.querySelector('.sidebar-close');
const sidebar      = document.getElementById('sidebar-nav');

// EVENTOS

hamburgerBtn.addEventListener('click', openSidebar);

    if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
    // Escape key closes the drawer
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && sidebar.classList.contains('is-open')) {
            closeSidebar();
    }
});

document.querySelectorAll('.filters-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.dataset.filter === 'all') {
        document.querySelectorAll('.filters-btn').forEach(b => {
            b.classList.remove('filters-btn--active');
            b.setAttribute('aria-checked', 'false');
        });
        btn.classList.add('filters-btn--active');
        btn.setAttribute('aria-pressed', 'true');
        } else {
        document.querySelector('[data-filter="all"]').classList.remove('filters-btn--active');
        btn.classList.toggle('filters-btn--active');
        btn.setAttribute('aria-checked', btn.classList.contains('filters-btn--active') ? 'true' : 'false');
        }

        filterPosts();
    });
});

// FUNCIONES

function openSidebar() {
    sidebar.classList.add('is-open');
    sidebar.style.visibility = 'visible';

    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';

    const firstFocusable = closeBtn || sidebar.querySelector('a, button, [tabindex]');
    if (firstFocusable) firstFocusable.focus();
}

function closeSidebar() {
    sidebar.classList.remove('is-open');
    sidebar.style.visibility = '';

    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';

    hamburgerBtn.focus();
}

function filterPosts() {
    const activeFilters = [...document.querySelectorAll('.filters-btn--active')]
        .map(btn => btn.dataset.filter)
        .filter(f => f !== 'all');
    console.log(activeFilters);
    const cards = document.querySelectorAll('.card');
    const noResults = document.getElementById('no-results');

    cards.forEach(card => {
        const cardCategories = [...card.querySelectorAll('.tag')].map(tag => tag.textContent.toLowerCase());
        const match = activeFilters.length === 0 || activeFilters.every(f => cardCategories.includes(f));
        card.hidden = !match;
    });

    noResults.hidden = [...cards].some(card => !card.hidden);
}
