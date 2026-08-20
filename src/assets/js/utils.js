// utils.js
// Small shared UI helpers.

// Keep the footer copyright year current: the founding year stays fixed and the
// end of the range follows the current year (e.g. "© 2024–2026"). Shows just the
// founding year while both are the same.
export const initCopyrightYear = () => {
    const suffix = document.querySelector("#footerYearSuffix");
    if (!suffix) return;

    const foundingYear = 2024;
    const currentYear = new Date().getFullYear();
    suffix.textContent = currentYear > foundingYear ? `–${currentYear}` : "";
};
