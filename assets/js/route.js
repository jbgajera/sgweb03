function getRedirectUrl(slug) {
    return `/invitation/${slug}.html`;
}

const urlRedirector = () => {
    const slugArray = [
        'savaliya_family',
    ];

    const slug = window.location.hash.substring(1); // remove the leading #

    if (slugArray.includes(slug)) {
        const url = getRedirectUrl(slug);
        window.location.replace(url);
        window.reload();
    }

};

window.addEventListener('load', urlRedirector);
window.addEventListener('hashchange',urlRedirector);

