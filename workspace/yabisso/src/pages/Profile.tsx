export default function Profile() {
  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="text-2xl font-semibold">Profil</h1>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="bg-white/5 rounded p-4">
          <div className="text-sm text-white/60">Nom</div>
          <div className="text-sm">Utilisateur Démo</div>
        </div>
        <div className="bg-white/5 rounded p-4">
          <div className="text-sm text-white/60">Plan</div>
          <div className="text-sm">Gratuit</div>
        </div>
      </div>
    </div>
  )
}

