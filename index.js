// TODO: Use the DOM API to create the card components
const html = `<article class="card">
<h3 class="card__title"></h3>
<div class="card__body">
  <div class='card__body__image'></div>
  <section class='card__body__content'>
  </section>
</div>
</article>`;

// 1. Seleccione el container
const container = document.getElementById('container');


// 2. cree una funciotn createCardComponent.
/**
 * @param {string} title
 * @param {string} body
 *
 * @return {HTMLElement}
 */
function createCardComponent(title, body) {

  const template = document.getElementById('card__template');

  const element = template.content.cloneNode(true).firstElementChild;
  const elementTitle = element.getElementsByTagName('h3')[0];
  const elementBody = element.getElementsByTagName('section')[0];

  elementTitle.textContent = title;
  elementBody.textContent = body;

  return element;
}
// 3. Cree un componente
const card = createCardComponent('Fundamento 1', 'dame textos randoms aqui');

getMovies().then(movieList => {
  const movies = movieList.results;
  const fragment = new DocumentFragment();

  for (const movie of movies) {
    const element = createCardComponent(movie.title, movie.overview);
    fragment.appendChild(element);
  }

  container.appendChild(fragment);
});
// 4. Agrege este nuevo componente al container
container.appendChild(card);