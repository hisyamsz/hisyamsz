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
      <div class="bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl border border-slate-100 w-full h-full flex flex-col transition-all duration-300 group">
        <a href="${link}" target="_blank" title="${title}" class="flex-grow block overflow-hidden rounded-2xl mb-5">
          <img src="${image}" alt="${title}" class="${imgClasses} transform transition-transform duration-500 group-hover:scale-110" />
        </a>
        <div class="flex-grow flex flex-col">
          <a href="${link}" target="_blank" class="mb-3 text-2xl font-bold text-dark group-hover:text-primary transition-colors duration-300 flex items-center">
            ${title}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <div class="text-base leading-relaxed text-secondary mb-4">
            ${description}
          </div>
        </div>
      </div>
    `;
    
    // We add some wrapper classes to the host element itself so it behaves correctly in the grid
    this.className = "flex w-full";
  }
}

customElements.define('portfolio-card', PortfolioCard);
