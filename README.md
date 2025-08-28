# MONTROVIA Front

## Facturation: Génération de facture avec date de livraison estimée

Ce projet inclut un module de facture côté client qui génère une facture après un paiement réussi, avec une date de livraison estimée selon la région de l'utilisateur. La facture peut être imprimée/téléchargée et envoyée par email via un endpoint backend optionnel.

### Intégration rapide

1. Ajoutez le script d'invoice après votre script principal, de préférence à la fin du `<body>`:

```html
<script src="script.js"></script>
<script src="invoice.js"></script>
```

2. Le module s'accroche automatiquement à `window.showPaymentSuccess(method, total)` si cette fonction existe déjà. Lorsque le paiement est réussi, une nouvelle fenêtre s'ouvre avec la facture; l'utilisateur peut imprimer/télécharger.

3. Envoi email (optionnel): exposez un endpoint POST `/api/send-invoice` acceptant `{ to, subject, html }` et retournant `{ success: true }`.

### Détails

- Détection de région basée sur le fuseau horaire et estimation J+N jours ouvrés.
- Numéro de facture: `MV-YYYYMMDD-XXXX`.
- Données du panier: lues depuis `window.cart` si présent, sinon depuis `localStorage` (`nonchalant-cart`).
- Le module tente de récupérer l'email depuis un champ `<input type="email">`. Si absent, un mini-modal demande l'email (optionnel).

### API

`window.InvoiceModule.presentInvoiceFlow({ method, total })`

- `method`: chaîne affichée comme moyen de paiement (ex: `Visa`, `Orange Money`).
- `total`: montant total en FCFA (optionnel, recalculé à partir du panier si manquant).
