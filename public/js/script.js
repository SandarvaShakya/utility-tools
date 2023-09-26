feather.replace()

/**
 * This functions finds the current url
 * @returns the active page
 */
const getCurrentUrl = () => {
    const currentUrl = window.location.href;
    const urlObj = new URL(currentUrl);
    const pathSegments = urlObj.pathname.split('/');
    return pathSegments[pathSegments.length - 1];
}

const toggleMenu = () => {
    document.getElementById('dropdown-menu').classList.toggle('hidden')
}

const toggleDropdown = () => {
    document.getElementById('dropdown').classList.toggle('hidden')
}

const killDropdown = () => {
    document.getElementById('dropdown').classList.add('hidden')
}

document.addEventListener('click', (event) => {
    const btn = document.querySelector('button.dropdown-button.tool-select')
    const menuBtn = document.querySelector('button.editor__menu')

    if(event.currentTarget === btn || btn.contains(event.target) || event.currentTarget === menuBtn || menuBtn.contains(event.target)) return
    document.querySelector('#dropdown').classList.add('hidden')
    document.querySelector('#dropdown-menu').classList.add('hidden')
})

document.querySelector('#dropdown')
    .addEventListener('htmx:afterSwap', () => {
        feather.replace()
    })