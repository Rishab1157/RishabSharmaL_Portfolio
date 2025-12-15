const SkillStone = ({ children }) => {
  return (
    <div className="relative h-16 w-16 flex items-center justify-center">
      <div
        className="h-14 w-14 relative"
        style={{
          clipPath:
            'polygon(32% 4%, 68% 4%, 88% 18%, 96% 40%, 88% 72%, 68% 92%, 32% 92%, 12% 72%, 4% 40%, 12% 18%)',
          background:
            'linear-gradient(145deg, #ffffff 0%, #eef2f7 35%, #d6dce6 75%, #f9fbfd 100%)',
          boxShadow:
            '0 10px 18px -12px rgba(0,0,0,0.35), 0 3px 8px -6px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -2px 6px rgba(0,0,0,0.08)',
          border: '1px solid rgba(255,255,255,0.9)',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-full bg-white/92 border border-white/60 shadow-[0_8px_16px_-10px_rgba(0,0,0,0.28)] px-2 py-2">
          {children}
        </div>
      </div>
    </div>
  )
}

export default SkillStone

