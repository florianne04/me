import { useState } from 'react'

export default function Auth() {
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  return (
    <div className="max-w-md mx-auto">
      <div className="mb-6 flex gap-2">
        <button onClick={() => setMode('login')} className={`px-3 py-1.5 rounded ${mode==='login'?'bg-white text-black':'border border-white/20'}`}>Connexion</button>
        <button onClick={() => setMode('signup')} className={`px-3 py-1.5 rounded ${mode==='signup'?'bg-white text-black':'border border-white/20'}`}>Inscription</button>
      </div>

      <form className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input type="email" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/40" />
        </div>
        <div>
          <label className="block text-sm mb-1">Mot de passe</label>
          <input type="password" required minLength={6} className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/40" />
        </div>
        <button className="w-full px-4 py-2 rounded bg-white text-black">{mode==='login'?'Se connecter':'Créer un compte'}</button>
      </form>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <button className="border border-white/20 rounded py-2 text-sm">Apple</button>
        <button className="border border-white/20 rounded py-2 text-sm">Google</button>
        <button className="border border-white/20 rounded py-2 text-sm">Facebook</button>
      </div>
    </div>
  )
}

