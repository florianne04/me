const plans = [
  { name: 'Gratuit', price: '0€', features: ['Écoute limitée', 'Publicités'] },
  { name: 'Premium', price: '9,99€', features: ['Écoute illimitée', 'Sans pub', 'Mode hors-ligne'] },
  { name: 'Pro', price: '19,99€', features: ['Tout Premium', 'Outils artistes', 'Stats avancées'] },
]

export default function Subscription() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Abonnement</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <div key={p.name} className="rounded-xl border border-white/10 p-6 bg-white/5 flex flex-col gap-4">
            <div className="text-lg">{p.name}</div>
            <div className="text-3xl font-semibold">{p.price}<span className="text-sm text-white/60">/mois</span></div>
            <ul className="text-sm text-white/80 space-y-1">
              {p.features.map((f) => (<li key={f}>• {f}</li>))}
            </ul>
            <button className="mt-auto px-4 py-2 rounded bg-white text-black">S’abonner</button>
          </div>
        ))}
      </div>
    </div>
  )
}

