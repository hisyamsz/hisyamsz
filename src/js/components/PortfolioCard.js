class PortfolioCard extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const title = this.getAttribute('title') || 'Project Title';
    const link = this.getAttribute('link') || '#';
    const image = this.getAttribute('image') || '';
    const imgClasses = this.getAttribute('img-classes') || 'w-full';
    
    // get innerHTML (which will contain the description paragraph)
    const description = this.innerHTML;

    this.innerHTML = `
      <div class="bg-white p-8 rounded-xl shadow-xl md:w-full h-full flex flex-col">
        <a href="${link}" target="_blank" title="${title}" class="group flex-grow">
          <div class="overflow-hidden rounded-md shadow-md">
            <img src="${image}" alt="${title}" class="${imgClasses}" />
          </div>
          <h3 class="mt-5 mb-3 text-xl font-semibold text-dark">
            <span class="transition duration-300 ease-in-out group-hover:border-b-2 group-hover:border-primary group-hover:opacity-90">
              ${title}
            </span>
          </h3>
        </a>
        <div class="text-base font-medium text-secondary">
          ${description}
        </div>
      </div>
    `;
    
    // We add some wrapper classes to the host element itself so it behaves correctly in the flex grid
    this.className = "md:w-[40%] flex";
  }
}

customElements.define('portfolio-card', PortfolioCard);
