/**
 * Peekaboo HQ — shared interactions
 * Mobile nav toggle, contact form success state, small a11y helpers
 */
(function () {
  "use strict";

  // Mobile navigation
  const toggle = document.querySelector(".nav-toggle");
  const panel = document.querySelector(".nav__panel");

  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      panel.classList.toggle("is-open", !open);
    });

    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        toggle.setAttribute("aria-expanded", "false");
        panel.classList.remove("is-open");
        toggle.focus();
      }
    });

    // Close when a nav link is activated (mobile)
    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.matchMedia("(max-width: 900px)").matches) {
          toggle.setAttribute("aria-expanded", "false");
          panel.classList.remove("is-open");
        }
      });
    });
  }

  // Contact / demo form — client-side only
  const form = document.getElementById("contact-form");
  const formCard = document.getElementById("form-card");
  const success = document.getElementById("form-success");

  if (form && formCard && success) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const name = (form.querySelector("#name") || {}).value || "";
      const email = (form.querySelector("#email") || {}).value || "";
      const setting = (form.querySelector("#setting") || {}).value || "";
      const message = (form.querySelector("#message") || {}).value || "";

      // Optional mailto fallback for real outreach (opens mail client)
      const subject = encodeURIComponent("Peekaboo HQ demo / enquiry from " + name);
      const body = encodeURIComponent(
        "Name: " + name + "\nEmail: " + email + "\nSetting: " + setting + "\n\n" + message
      );
      const mailto = "mailto:hello@peekaboohq.com?subject=" + subject + "&body=" + body;

      // Show success UI first; offer mailto as secondary action
      formCard.classList.add("is-hidden");
      success.classList.add("is-visible");
      success.setAttribute("tabindex", "-1");
      success.focus();

      const mailtoLink = success.querySelector("[data-mailto]");
      if (mailtoLink) {
        mailtoLink.setAttribute("href", mailto);
      }
    });
  }

  // Current year in footer
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
