class NavHeader extends HTMLElement {
  connectedCallback() {
    this.render();
    this.setupInteractions();
  }

  render() {
    this.innerHTML = `
      <header class="absolute top-0 left-0 z-10 flex items-center w-full bg-transparent">
        <div class="container">
          <div class="relative flex items-center justify-between">
            <div class="px-4">
              <a href="#home" class="block py-6 text-2xl font-bold text-primary hover:opacity-90 lg:text-3xl">Hisyam.</a>
            </div>
            <div class="flex items-center px-4">
              <button id="hamburger" name="hamburger" type="button" class="absolute block right-4 lg:hidden">
                <span class="transition duration-300 ease-in-out origin-top-left hamburger"></span>
                <span class="transition duration-300 ease-in-out hamburger"></span>
                <span class="transition duration-300 ease-in-out origin-bottom-left hamburger"></span>
              </button>
              <nav id="nav-menu" class="absolute hidden w-full py-5 bg-white rounded-lg shadow-lg reset-blur max-w-48 right-1 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:py-0 lg:px-6 lg:shadow-none lg:rounded-none">
                <ul class="block lg:flex">
                  <li class="group"><a href="#home" class="flex py-2 mx-8 text-base nav-link text-dark lg:text-lg group-hover:text-primary">Home</a></li>
                  <li class="group"><a href="#about" class="flex py-2 mx-8 text-base nav-link text-dark lg:text-lg group-hover:text-primary">About me</a></li>
                  <li class="group"><a href="#skills" class="flex py-2 mx-8 text-base nav-link text-dark lg:text-lg group-hover:text-primary">Skills</a></li>
                  <li class="group"><a href="#portfolio" class="flex py-2 mx-8 text-base nav-link text-dark lg:text-lg group-hover:text-primary">Portfolio</a></li>
                  <li class="group"><a href="#contact" class="flex py-2 mx-8 text-base nav-link text-dark lg:text-lg group-hover:text-primary">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    `;
  }

  setupInteractions() {
    const hamburger = this.querySelector('#hamburger');
    const navMenu = this.querySelector('#nav-menu');

    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        navMenu.classList.toggle('hidden');
      });
    }

    // Handle scroll for fixed navbar styling and scroll spy
    window.addEventListener('scroll', () => {
      const header = this.querySelector('header');
      if (header) {
        const fixedNav = header.offsetTop;
        if (window.scrollY > fixedNav) {
            header.classList.add('navbar-fixed');
        } else {
            header.classList.remove('navbar-fixed');
        }
      }

      // Scroll Spy
      const navLinkEls = this.querySelectorAll('.nav-link');
      const sectionEls = document.querySelectorAll('section');
      let currentSection = 'home';

      sectionEls.forEach((sectionEl) => {
          if (window.scrollY >= sectionEl.offsetTop - 60) {
              currentSection = sectionEl.id;
          }
      });

      navLinkEls.forEach((navLinkEl) => {
          navLinkEl.classList.remove('active');
          if (navLinkEl.href.includes(currentSection)) {
              navLinkEl.classList.add('active');
          }
      });
    });
  }
}

customElements.define('nav-header', NavHeader);
