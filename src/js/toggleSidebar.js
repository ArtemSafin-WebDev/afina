export default function() {
    const toggleSidebarBtn = document.querySelector('.js-toggle-sidebar');

    if (toggleSidebarBtn) {
        toggleSidebarBtn.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sidebar-collapsed');
        })
    }
}