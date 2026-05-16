const sections = ['hero', 'about', 'skills', 'projects', 'contact']

export default function SectionIndicator({ active, onNavigate }) {
  return (
    <div style={{
      position: 'fixed', right: 32, top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex', flexDirection: 'column', gap: 12,
      zIndex: 400,
    }}>
      {sections.map(s => (
        <div
          key={s}
          data-hover
          onClick={() => onNavigate(s)}
          title={s}
          style={{
            width: s === active ? 16 : 6,
            height: 6,
            borderRadius: 3,
            background: s === active ? '#00ffff' : 'rgba(255,255,255,0.2)',
            cursor: 'pointer',
            transition: 'all 0.3s',
            boxShadow: s === active ? '0 0 10px #00ffff' : 'none',
          }}
        />
      ))}
    </div>
  )
}
