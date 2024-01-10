function costomizeCategoriesPage() {
   
    var elementoViewOptions = document.querySelector('.ui-search-view-options.shops__view-options');

    if (elementoViewOptions) {
        // Aplica os estilos ao elemento
        elementoViewOptions.style.background = '#ff9f9f';
        elementoViewOptions.style.padding = '0.4rem';
        elementoViewOptions.style.borderRadius = '0.4rem';
    }

    var elementoSearchMain = document.querySelector('.ui-search-main.ui-search-main--without-header.ui-search-main--only-products.shops__search-main');

    if (elementoSearchMain) {
        elementoSearchMain.style.flexDirection = 'column';
        elementoSearchMain.style.alignItems = 'center';
    }

    var elementoBreadcrumb = document.querySelector('.andes-breadcrumb');

    if (elementoBreadcrumb) {
        elementoBreadcrumb.parentNode.removeChild(elementoBreadcrumb);
    }

    var elementoSidebar = document.querySelector('aside.ui-search-sidebar.shops__sidebar');

    if (elementoSidebar) {
        elementoSidebar.style.maxWidth = '100%';
        elementoSidebar.style.background = 'cadetblue';
        elementoSidebar.style.textAlign = 'center';
        elementoSidebar.style.display = 'flex';
        elementoSidebar.style.flexDirection = 'column';
        elementoSidebar.style.alignItems = 'center';
        elementoSidebar.style.justifyContent = 'center';

        function toggleFiltersModal() {
            var filterItems = document.querySelectorAll('.ui-search-filter-dl.shops__filter-items');

            var modal = document.querySelector('.filters-modal');

            if (!modal) {
                modal = document.createElement('div');
                modal.classList.add('filters-modal');
                modal.style.display = 'none'; 

                filterItems.forEach(function (filterItem) {
                    modal.appendChild(filterItem);
                });

                elementoSidebar.appendChild(modal);
            } else {
                modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
            }
        }

        var toggleFiltersButton = document.createElement('button');
        toggleFiltersButton.textContent = 'Mostrar Filtros';
        toggleFiltersButton.classList.add('toggle-filters-button');
        toggleFiltersButton.addEventListener('click', toggleFiltersModal);

        elementoSidebar.appendChild(toggleFiltersButton);

        toggleFiltersModal();
    }
}
function costomizeCategoriesPage() {
    var elementoViewOptions = document.querySelector('.ui-search-view-options.shops__view-options');

    if (elementoViewOptions) {
        elementoViewOptions.style.background = '#ff9f9f';
        elementoViewOptions.style.padding = '0.4rem';
        elementoViewOptions.style.borderRadius = '0.4rem';
    }

    var elementoSearchMain = document.querySelector('.ui-search-main.ui-search-main--without-header.ui-search-main--only-products.shops__search-main');

    if (elementoSearchMain) {
        elementoSearchMain.style.flexDirection = 'column';
        elementoSearchMain.style.alignItems = 'center';
    }

    var elementoBreadcrumb = document.querySelector('.andes-breadcrumb');

    if (elementoBreadcrumb) {
        elementoBreadcrumb.parentNode.removeChild(elementoBreadcrumb);
    }

    var elementoSidebar = document.querySelector('aside.ui-search-sidebar.shops__sidebar');

    if (elementoSidebar) {
        elementoSidebar.style.maxWidth = '100%';
        elementoSidebar.style.background = 'cadetblue';
        elementoSidebar.style.textAlign = 'center';
        elementoSidebar.style.display = 'flex';
        elementoSidebar.style.flexDirection = 'column';
        elementoSidebar.style.alignItems = 'center';
        elementoSidebar.style.justifyContent = 'center';

        function toggleFiltersModal() {
            var filterItems = document.querySelectorAll('.ui-search-filter-dl.shops__filter-items');

            var modal = document.querySelector('.filters-modal');

            if (!modal) {
                modal = document.createElement('div');
                modal.classList.add('filters-modal');
                modal.style.display = 'none';

                filterItems.forEach(function (filterItem) {
                    modal.appendChild(filterItem);
                });

                elementoSidebar.appendChild(modal);
            } else {
                modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
            }
        }

        var toggleFiltersButton = document.createElement('button');
        toggleFiltersButton.textContent = 'Mostrar Filtros';
        toggleFiltersButton.classList.add('toggle-filters-button');
        toggleFiltersButton.addEventListener('click', toggleFiltersModal);

        elementoSidebar.appendChild(toggleFiltersButton);

        toggleFiltersModal();
    }
}


function onInit() {
    costomizeCategoriesPage()
}

setTimeout(onInit, 300)