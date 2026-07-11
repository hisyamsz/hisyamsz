(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  // Helper: mark field as invalid
  function setError(id, msg) {
    const el = document.getElementById(id);
    el.classList.add(
      'border-red-500',
      'ring-2',
      'ring-red-300',
      'focus:ring-red-300',
      'focus:border-red-500'
    );
    el.classList.remove(
      'border-slate-200',
      'focus:ring-primary/50',
      'focus:border-primary'
    );
    let hint = el.parentElement.querySelector('.field-error');
    if (!hint) {
      hint = document.createElement('p');
      hint.className = 'field-error mt-1.5 text-xs font-semibold text-red-500 animate-slide-in-up';
      el.parentElement.appendChild(hint);
    }
    hint.textContent = msg;
  }

  // Helper: clear error from a field
  function clearError(id) {
    const el = document.getElementById(id);
    el.classList.remove(
      'border-red-500',
      'ring-2',
      'ring-red-300',
      'focus:ring-red-300',
      'focus:border-red-500'
    );
    el.classList.add(
      'border-slate-200',
      'focus:ring-primary/50',
      'focus:border-primary'
    );
    const hint = el.parentElement.querySelector('.field-error');
    if (hint) hint.remove();
  }

  // Clear errors in real-time as user types
  ['name', 'email', 'message'].forEach((id) => {
    document.getElementById(id).addEventListener('input', () => clearError(id));
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Reset all errors first
    clearError('name');
    clearError('email');
    clearError('message');

    let hasError = false;

    if (!name) {
      setError('name', 'Nama lengkap tidak boleh kosong.');
      hasError = true;
    }

    if (!email) {
      setError('email', 'Alamat email tidak boleh kosong.');
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('email', 'Format email tidak valid.');
      hasError = true;
    }

    if (!message) {
      setError('message', 'Pesan tidak boleh kosong.');
      hasError = true;
    }

    if (hasError) return;

    const to      = 'hisyam.s901@gmail.com';
    const subject = encodeURIComponent(`[Portofolio] Pesan dari ${name}`);
    const body    = encodeURIComponent(
      `Halo Hisyam,\n\nNama   : ${name}\nEmail  : ${email}\n\nPesan :\n${message}\n\nSalam,\n${name}`
    );

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

    // Show success feedback
    const successMsg = document.getElementById('form-success');
    const btnText    = document.getElementById('btn-text');
    if (successMsg) {
      successMsg.classList.remove('hidden');
      btnText.textContent = 'Terkirim ✓';
      setTimeout(() => {
        successMsg.classList.add('hidden');
        btnText.textContent = 'Kirim Pesan';
        form.reset();
      }, 5000);
    }
  });
})();
