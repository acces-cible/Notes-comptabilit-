import React, { useState, useEffect } from 'react'

export function Checklist({ id, items }) {
  const [checked, setChecked] = useState({})

  useEffect(() => {
    try {
      const saved = localStorage.getItem('ck-' + id)
      if (saved) setChecked(JSON.parse(saved))
    } catch {}
  }, [id])

  function toggle(i) {
    const next = { ...checked, [i]: !checked[i] }
    setChecked(next)
    try { localStorage.setItem('ck-' + id, JSON.stringify(next)) } catch {}
  }

  function reset() {
    setChecked({})
    try { localStorage.removeItem('ck-' + id) } catch {}
  }

  const done = Object.values(checked).filter(Boolean).length
  const total = items.length
  const pct = total ? (done / total) * 100 : 0
  const color = done === total ? '#10b981' : '#2563eb'

  return (
    <div className="checklist-box">
      <div className="checklist-header">
        <span>{done}/{total} complété{done > 1 ? 's' : ''}</span>
        {done > 0 && (
          <button onClick={reset} style={{ fontSize: 12, color: '#9ca3af', background: 'none', border: 'none', cursor: 'pointer' }}>
            Réinitialiser
          </button>
        )}
      </div>
      <div className="checklist-progress">
        <div className="checklist-bar" style={{ width: pct + '%', background: color }} />
      </div>
      {items.map((item, i) => (
        <label key={i} className="checklist-item">
          <input type="checkbox" checked={!!checked[i]} onChange={() => toggle(i)} />
          <span style={{ color: checked[i] ? '#9ca3af' : 'inherit', textDecoration: checked[i] ? 'line-through' : 'none' }}>
            {item}
          </span>
        </label>
      ))}
    </div>
  )
}

export function Alerte({ type = 'info', children }) {
  const icons = { info: 'ℹ️', warning: '⚠️', danger: '🚨' }
  return (
    <div className={`alerte alerte-${type}`}>
      {icons[type]} {children}
    </div>
  )
}
