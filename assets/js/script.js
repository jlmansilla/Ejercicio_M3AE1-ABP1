document.addEventListener('DOMContentLoaded', function() {

  // =======================
  // LÓGICA DEL MENÚ MÓVIL
  // =======================
  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav__toggle');
  const navLinks = document.querySelectorAll('.nav__link');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      // Añade o quita la clase 'nav--open' al contenedor de la navegación
      nav.classList.toggle('nav--open');
    });
  }

  // Cierra el menú al hacer clic en un enlace (útil para one-page)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('nav--open')) {
        nav.classList.remove('nav--open');
      }
    });
  });

  // =======================
  // LÓGICA DEL FILTRO DEL CATÁLOGO
  // =======================
  // Seleccionamos todos los botones de filtro y las tarjetas de producto.
  const filterButtons = document.querySelectorAll('.catalog__filter-btn');
  const productCards = document.querySelectorAll('.catalogo-grid .producto-card');

  /**
   * Función para filtrar las tarjetas de producto según la categoría.
   * @param {string} filter - La categoría por la que filtrar ('all', 'vestuario', 'accesorios').
   */
  const filterProducts = (filter) => {
    productCards.forEach(card => {
      // Obtenemos la categoría de la tarjeta desde su atributo data-category.
      const cardCategory = card.dataset.category;

      // Comprobamos si la tarjeta debe mostrarse.
      // Se muestra si el filtro es 'all' o si su categoría coincide con el filtro.
      if (filter === 'all' || cardCategory === filter) {
        card.classList.remove('hidden'); // Mostramos la tarjeta quitando la clase 'hidden'.
      } else {
        card.classList.add('hidden'); // Ocultamos la tarjeta añadiendo la clase 'hidden'.
      }
    });
  };

  // Añadimos un evento de clic a cada botón de filtro.
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 1. Obtenemos el valor del filtro del atributo data-filter del botón presionado.
      const filterValue = button.dataset.filter;

      // 2. Actualizamos la clase activa en los botones.
      // Primero la quitamos de todos los botones.
      filterButtons.forEach(btn => btn.classList.remove('catalog__filter-btn--active'));
      // Luego la añadimos solo al botón que fue presionado.
      button.classList.add('catalog__filter-btn--active');

      // 3. Llamamos a la función de filtrado con el valor correspondiente.
      filterProducts(filterValue);
    });
  });
});