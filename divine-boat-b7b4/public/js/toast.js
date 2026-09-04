/**
 * PAK DEBATE FORUM — Global Toast Notification Module
 */
(function () {
  let container = null;

  function getContainer() {
    if (!container) {
      container = document.querySelector('.toast-container');
      if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
      }
    }
    return container;
  }

  window.showToast = function (message, type = 'info', duration = 4000) {
    const parent = getContainer();
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.setAttribute('role', type === 'error' ? 'alert' : 'status');
    toast.setAttribute('aria-live', type === 'error' ? 'assertive' : 'polite');

    let iconSvg = '';
    if (type === 'success') {
      iconSvg = `<svg class="toast__icon" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;
    } else if (type === 'error') {
      iconSvg = `<svg class="toast__icon" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`;
    } else {
      iconSvg = `<svg class="toast__icon" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-gold)" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
    }

    toast.innerHTML = `
      ${iconSvg}
      <div class="toast__content"></div>
      <button class="toast__close" aria-label="Close notification">&times;</button>
    `;

    toast.querySelector('.toast__content').textContent = message;

    const closeBtn = toast.querySelector('.toast__close');
    const dismiss = () => {
      toast.classList.remove('toast--visible');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    };

    closeBtn.addEventListener('click', dismiss);
    parent.appendChild(toast);

    // Force reflow for animation
    void toast.offsetWidth;
    toast.classList.add('toast--visible');

    if (duration > 0) {
      setTimeout(dismiss, duration);
    }
  };
})();
