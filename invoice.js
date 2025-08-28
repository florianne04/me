(function () {
  "use strict";

  const STORAGE_KEY = "nonchalant-cart";

  function formatCurrencyFcfa(amount) {
    try {
      return amount.toLocaleString("fr-FR") + " FCFA";
    } catch (_) {
      return amount + " FCFA";
    }
  }

  function detectRegionSafe() {
    try {
      if (typeof window !== "undefined" && typeof Intl !== "undefined") {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
        if (
          timezone.includes("Africa/Lagos") ||
          timezone.includes("Africa/Luanda") ||
          timezone.includes("Africa/Brazzaville") ||
          timezone.includes("Africa/Libreville")
        ) {
          return "afrique-centrale";
        }
        if (
          timezone.includes("Africa/Dakar") ||
          timezone.includes("Africa/Bamako") ||
          timezone.includes("Africa/Conakry") ||
          timezone.includes("Africa/Abidjan")
        ) {
          return "afrique-ouest";
        }
        if (
          timezone.includes("Europe/Paris") ||
          timezone.includes("Europe/Brussels") ||
          timezone.includes("Europe/Berlin") ||
          timezone.includes("Europe/Rome")
        ) {
          return "europe";
        }
      }
    } catch (_) {}
    return "afrique-centrale";
  }

  function addBusinessDays(date, days) {
    const result = new Date(date);
    let added = 0;
    while (added < days) {
      result.setDate(result.getDate() + 1);
      const day = result.getDay();
      if (day !== 0 && day !== 6) {
        added += 1;
      }
    }
    return result;
  }

  function computeEstimatedDeliveryDate(region) {
    const today = new Date();
    let businessDays;
    switch (region) {
      case "afrique-ouest":
      case "afrique-centrale":
        businessDays = 3;
        break;
      case "europe":
        businessDays = 6;
        break;
      default:
        businessDays = 5;
    }
    const eta = addBusinessDays(today, businessDays);
    // Fixer une heure de livraison par défaut (16:00)
    eta.setHours(16, 0, 0, 0);
    return {
      dateStr: eta.toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" }),
      timeStr: eta.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }),
      weekday: eta.toLocaleDateString("fr-FR", { weekday: "long" })
    };
  }

  function generateInvoiceNumber() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    const r = Math.floor(Math.random() * 9000 + 1000);
    return `MV-${y}${m}${d}-${r}`;
  }

  function getCartFromStorage() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (_) {
      return [];
    }
  }

  function computeTotals(cart) {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const region = detectRegionSafe();
    let shipping = 0;
    if (region === "europe") shipping = 8000; else if (region === "afrique-ouest") shipping = 2000; else shipping = 3000;
    const total = subtotal + shipping;
    return { subtotal, shipping, total };
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function buildInvoiceHtml(params) {
    const {
      storeName,
      invoiceNumber,
      orderDate,
      estimatedDeliveryDate,
      customerEmail,
      customerName,
      customerPhone,
      paymentMethod,
      cart,
      totals
    } = params;

    const itemsRows = cart
      .map(
        (it) => `
          <tr>
            <td>${escapeHtml(it.name)}<div class="muted">Taille: ${escapeHtml(it.size)}</div></td>
            <td class="right">${escapeHtml(String(it.quantity))}</td>
            <td class="right">${formatCurrencyFcfa(it.price)}</td>
            <td class="right">${formatCurrencyFcfa(it.price * it.quantity)}</td>
          </tr>`
      )
      .join("");

    const style = `
      * { box-sizing: border-box; }
      body { font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji'; color: #111; margin: 0; padding: 24px; background: #f7f7f8; }
      .doc { max-width: 860px; margin: 0 auto; background: #fff; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); overflow: hidden; }
      .header { padding: 24px 28px; background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%); color: #fff; display: flex; align-items: center; justify-content: space-between; }
      .brand { font-family: 'Unna', serif; font-size: 28px; letter-spacing: 0.12em; }
      .inv-meta { text-align: right; font-size: 13px; line-height: 1.5; opacity: 0.95; }
      .content { padding: 28px; }
      .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px; }
      .card { background: #fafafa; border: 1px solid #eee; border-radius: 12px; padding: 16px; }
      .card h4 { margin: 0 0 8px 0; font-size: 14px; color: #444; text-transform: uppercase; letter-spacing: 0.06em; }
      .muted { color: #6b7280; font-size: 12px; }
      table { width: 100%; border-collapse: collapse; margin-top: 10px; }
      th, td { padding: 12px 10px; border-bottom: 1px solid #eee; font-size: 14px; }
      th { text-align: left; color: #444; background: #fafafa; }
      .right { text-align: right; }
      .totals { margin-top: 16px; display: grid; grid-template-columns: 1fr 240px; gap: 12px; }
      .totals .box { background: #111; color: #fff; border-radius: 12px; padding: 14px 16px; }
      .totals-row { display: flex; justify-content: space-between; margin: 6px 0; }
      .total-amt { font-weight: 800; font-size: 18px; }
      .footer { padding: 18px 28px; display: flex; justify-content: space-between; align-items: center; background: #fff; }
      .actions { display: flex; gap: 10px; }
      .btn { border: 0; border-radius: 10px; padding: 10px 14px; font-weight: 700; cursor: pointer; }
      .btn.primary { background: #bfa76a; color: #fff; }
      .btn.ghost { background: #f1f1f1; color: #111; }
      @media print { .footer, .actions { display: none !important; } body { background: #fff; padding: 0; } .doc { box-shadow: none; border-radius: 0; } }
    `;

    const html = `
      <!DOCTYPE html>
      <html lang="fr">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Facture ${escapeHtml(invoiceNumber)} - ${escapeHtml(storeName)}</title>
          <style>${style}</style>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&family=Unna:wght@700&display=swap" rel="stylesheet" />
        </head>
        <body>
          <div class="doc" id="invoice-root">
            <div class="header">
              <div class="brand">${escapeHtml(storeName)}</div>
              <div class="inv-meta">
                <div><strong>Facture:</strong> ${escapeHtml(invoiceNumber)}</div>
                <div><strong>Commandé le:</strong> ${escapeHtml(orderDate)}</div>
                <div><strong>Livraison estimée:</strong> ${escapeHtml(estimatedDeliveryDate.weekday)}, ${escapeHtml(estimatedDeliveryDate.dateStr)} à ${escapeHtml(estimatedDeliveryDate.timeStr)}</div>
              </div>
            </div>
            <div class="content">
              <div class="grid">
                <div class="card">
                  <h4>Client</h4>
                  <div><strong>${escapeHtml(customerName || "Client MONTROVIA")}</strong></div>
                  <div class="muted">${escapeHtml(customerEmail || "Email non renseigné")}</div>
                  ${customerPhone ? `<div class="muted">Tél: ${escapeHtml(customerPhone)}</div>` : ""}
                </div>
                <div class="card">
                  <h4>Paiement</h4>
                  <div><strong>Méthode:</strong> ${escapeHtml(paymentMethod || "-")}</div>
                  <div class="muted">Merci pour votre confiance.</div>
                </div>
              </div>

              <table>
                <thead>
                  <tr>
                    <th>Article</th>
                    <th class="right">Qté</th>
                    <th class="right">Prix unitaire</th>
                    <th class="right">Sous-total</th>
                  </tr>
                </thead>
                <tbody>
                  ${itemsRows}
                </tbody>
              </table>

              <div class="totals">
                <div></div>
                <div class="box">
                  <div class="totals-row">
                    <span>Sous-total</span>
                    <span>${formatCurrencyFcfa(totals.subtotal)}</span>
                  </div>
                  <div class="totals-row">
                    <span>Livraison</span>
                    <span>${formatCurrencyFcfa(totals.shipping)}</span>
                  </div>
                  <div class="totals-row">
                    <span>Total</span>
                    <span class="total-amt">${formatCurrencyFcfa(totals.total)}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer">
              <div class="muted">© ${new Date().getFullYear()} ${escapeHtml(storeName)} — Born to Build</div>
              <div class="actions">
                <button class="btn ghost" id="btn-print">Imprimer / PDF</button>
                <button class="btn primary" id="btn-download">Télécharger (PDF via impression)</button>
              </div>
            </div>
          </div>
          <script>
            (function(){
              const doPrint = () => window.print();
              document.getElementById('btn-print').addEventListener('click', doPrint);
              document.getElementById('btn-download').addEventListener('click', doPrint);
            })();
          </script>
        </body>
      </html>
    `;
    return html;
  }

  function openInvoiceWindow(html) {
    const win = window.open("", "_blank");
    if (!win) {
      notify("Pop-up bloqué. Veuillez autoriser les pop-ups pour afficher la facture.");
      return;
    }
    win.document.open();
    win.document.write(html);
    win.document.close();
    try { win.focus(); } catch (_) {}
  }

  function notify(msg) {
    try {
      if (typeof window.showNotification === "function") {
        window.showNotification(msg);
        return;
      }
    } catch (_) {}
    alert(msg);
  }

  async function sendInvoiceEmail(email, subject, html) {
    try {
      const res = await fetch("/api/send-invoice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to: email, subject, html })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === false) {
        throw new Error(data.message || "Echec de l'envoi de la facture par email");
      }
      notify("Facture envoyée par email ✔");
    } catch (err) {
      notify("Impossible d'envoyer la facture par email: " + (err && err.message ? err.message : "Erreur inconnue"));
    }
  }

  function findCustomerEmailInDom() {
    const emailInput = document.querySelector('input[type="email"]');
    if (emailInput && emailInput.value && emailInput.value.includes("@")) {
      return emailInput.value.trim();
    }
    return "";
  }

  function promptEmailIfMissing() {
    return new Promise((resolve) => {
      const overlay = document.createElement("div");
      overlay.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:100000;display:flex;align-items:center;justify-content:center;";
      const box = document.createElement("div");
      box.style.cssText = "background:#fff;border-radius:12px;max-width:420px;width:92vw;padding:18px 18px 14px;box-shadow:0 10px 30px rgba(0,0,0,.25);";
      box.innerHTML = `
        <div style="font-weight:800;font-size:18px;margin-bottom:6px;">Recevoir la facture par email</div>
        <div style="color:#444;margin-bottom:12px;">Entrez votre adresse email pour recevoir votre facture avec la date de livraison.</div>
        <input type="email" id="invoice-email" placeholder="vous@exemple.com" style="width:100%;padding:12px 12px;border-radius:10px;border:1px solid #ddd;font-size:14px;" />
        <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;">
          <button id="inv-cancel" style="border:0;background:#eee;color:#111;border-radius:10px;padding:10px 14px;font-weight:700;cursor:pointer;">Plus tard</button>
          <button id="inv-ok" style="border:0;background:#bfa76a;color:#fff;border-radius:10px;padding:10px 14px;font-weight:800;cursor:pointer;">Envoyer</button>
        </div>
      `;
      overlay.appendChild(box);
      document.body.appendChild(overlay);
      const done = (val) => { try { document.body.removeChild(overlay);} catch(_){ } resolve(val); };
      box.querySelector('#inv-cancel').addEventListener('click', () => done(""));
      box.querySelector('#inv-ok').addEventListener('click', () => {
        const v = String(box.querySelector('#invoice-email').value || "").trim();
        done(v);
      });
    });
  }

  async function presentInvoiceFlow({ method, total }) {
    const cart = Array.isArray(window.cart) && window.cart.length ? window.cart : getCartFromStorage();
    if (!cart || cart.length === 0) {
      // If order was just cleared on success, rely on storage backup
      // If still empty, skip silently
    }

    const totals = computeTotals(cart);
    const region = typeof window.detectRegion === "function" ? window.detectRegion() : detectRegionSafe();
    const eta = computeEstimatedDeliveryDate(region);
    const invNumber = generateInvoiceNumber();
    const orderDate = new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" });

    let email = findCustomerEmailInDom();
    if (!email) {
      email = await promptEmailIfMissing();
    }

    const html = buildInvoiceHtml({
      storeName: "MONTROVIA",
      invoiceNumber: invNumber,
      orderDate,
      estimatedDeliveryDate: eta,
      customerEmail: email,
      customerName: "",
      customerPhone: "",
      paymentMethod: method,
      cart,
      totals
    });

    openInvoiceWindow(html);

    if (email && email.includes("@")) {
      await sendInvoiceEmail(email, `Votre facture ${invNumber} - MONTROVIA`, html);
    }
  }

  // Expose module
  window.InvoiceModule = {
    presentInvoiceFlow,
    buildInvoiceHtml,
    computeEstimatedDeliveryDate,
    generateInvoiceNumber
  };

  // Auto-hook into existing showPaymentSuccess if present
  const hook = () => {
    try {
      const original = window.showPaymentSuccess;
      if (typeof original === "function" && !original.__withInvoiceHook) {
        const wrapped = function (method, total) {
          try { original.apply(this, arguments); } catch (_) {}
          try { window.InvoiceModule.presentInvoiceFlow({ method, total }); } catch (_) {}
        };
        wrapped.__withInvoiceHook = true;
        window.showPaymentSuccess = wrapped;
      }
    } catch (_) {}
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", hook);
  } else {
    hook();
  }
})();

