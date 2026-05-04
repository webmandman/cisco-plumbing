'use client'

import * as React from 'react'
import Image from 'next/image'

const PHONE = '(714) 555-2476'
const PHONE_HREF = 'tel:+17145552476'
const EMAIL = 'service@ciscoplumbing.com'

// ─── tokens ───────────────────────────────────────────────────
// Bold + modern: near-black bg, off-white type, single warm-amber accent.
const T = {
  bg: '#0b0b0d',
  bg2: '#121215',
  card: '#141418',
  cardHi: '#1a1a1f',
  line: 'rgba(255,255,255,0.06)',
  lineHi: 'rgba(255,255,255,0.10)',
  text: '#f4f4f5',
  textSub: '#c9c9cf',
  muted: '#7c7c84',
  silver: '#e6e6ea',
  accent: '#e3b341',
  accentDeep: '#b8862a',
  accentSoft: 'rgba(227,179,65,0.10)',
  display: 'var(--font-space-grotesk), "Space Grotesk", "Inter", -apple-system, system-ui, sans-serif',
  body: 'var(--font-inter), "Inter", -apple-system, system-ui, sans-serif',
  mono: 'var(--font-jetbrains-mono), "JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace',
} as const

const HERO_TITLE = 'clamp(48px, 9vw, 96px)'
const SECTION_TITLE = 'clamp(32px, 5vw, 56px)'
const FOOTER_WORDMARK = 'clamp(40px, 6vw, 80px)'
const SECTION_PAD_X = 'clamp(20px, 3.5vw, 40px)'

// ─── icons (line, neutral) ────────────────────────────────────
type IconProps = {
  d: React.ReactNode
  size?: number
  stroke?: string
  sw?: number
  fill?: string
}
const Icon = ({ d, size = 22, stroke = T.text, sw = 1.6, fill = 'none' }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke={stroke}
    strokeWidth={sw}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {d}
  </svg>
)

const I = {
  phone: (
    <Icon
      d={
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
      }
    />
  ),
  wrench: (
    <Icon d={<path d="M14.7 6.3a4 4 0 005.65 5.65L21 11.6V13l-7 7-3.5-3.5 7-7h1.4l-.35.65a4 4 0 00-5.65-5.65L12 5.5l3.5 3.5" />} />
  ),
  drop: <Icon d={<path d="M12 2.5s6 6.5 6 11a6 6 0 11-12 0c0-4.5 6-11 6-11z" />} />,
  shield: (
    <Icon
      d={
        <>
          <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
          <path d="M9 12l2 2 4-4" />
        </>
      }
    />
  ),
  flame: (
    <Icon d={<path d="M8.5 14a3.5 3.5 0 107 0c0-1.5-1-3-2-4 0 2-1.5 3-3 3 .5-2 0-4-1-5.5C9 9 6.5 11 6.5 14a5.5 5.5 0 0011 0" />} />
  ),
  bolt: <Icon d={<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />} />,
  tools: <Icon d={<path d="M14.7 6.3a4 4 0 015.65 5.65l-7.07 7.07-5.65-5.65 7.07-7.07zM7 17l-3 3M9 15l-3 3" />} />,
  pin: (
    <Icon
      d={
        <>
          <path d="M12 22s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      }
    />
  ),
  mail: (
    <Icon
      d={
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </>
      }
    />
  ),
  clock: (
    <Icon
      d={
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </>
      }
    />
  ),
  star: (
    <Icon
      d={<path d="M12 2.5l3 6.2 6.8 1-4.9 4.7 1.2 6.7L12 18l-6.1 3.1 1.2-6.7L2.2 9.7l6.8-1L12 2.5z" />}
      fill={T.text}
      stroke="none"
    />
  ),
  arrow: <Icon d={<path d="M5 12h14M13 5l7 7-7 7" />} sw={1.8} />,
  plus: <Icon d={<path d="M12 5v14M5 12h14" />} sw={1.8} />,
  minus: <Icon d={<path d="M5 12h14" />} sw={1.8} />,
  menu: <Icon d={<path d="M4 8h16M4 16h16" />} sw={1.8} />,
  x: <Icon d={<path d="M6 6l12 12M18 6L6 18" />} sw={1.8} />,
  insta: (
    <Icon
      d={
        <>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.6" fill={T.text} stroke="none" />
        </>
      }
    />
  ),
  fb: (
    <Icon
      d={<path d="M14 8h2V5h-2.5C11.5 5 10 6.5 10 8.5V11H8v3h2v7h3v-7h2.2l.3-3H13V9c0-.6.4-1 1-1z" />}
      fill={T.text}
      stroke="none"
    />
  ),
  google: (
    <Icon
      d={<path d="M21 11h-9v2.8h5.2c-.5 2.3-2.5 3.7-5.2 3.7a5.5 5.5 0 110-11c1.4 0 2.7.5 3.7 1.4l2-2A8.5 8.5 0 1012 21c4.9 0 8.5-3.4 8.5-8.5 0-.5 0-1-.1-1.5z" />}
      fill={T.text}
      stroke="none"
    />
  ),
}

// ─── primitives ───────────────────────────────────────────────
function Eyebrow({ children, color = T.accent, dot = true }: { children: React.ReactNode; color?: string; dot?: boolean }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontFamily: T.mono,
        fontSize: 10.5,
        fontWeight: 500,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color,
      }}
    >
      {dot && <span style={{ width: 6, height: 6, borderRadius: 999, background: color }} />}
      {children}
    </div>
  )
}

type ButtonProps = {
  children: React.ReactNode
  href?: string
  full?: boolean
  onClick?: () => void
  id?: string
}
function PrimaryButton({ children, href, full, onClick, id }: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    width: full ? '100%' : undefined,
    padding: '16px 20px',
    borderRadius: 14,
    border: 'none',
    cursor: 'pointer',
    fontFamily: T.body,
    fontSize: 14.5,
    fontWeight: 700,
    letterSpacing: '-0.01em',
    textDecoration: 'none',
    background: T.text,
    color: T.bg,
  }
  const inner = (
    <>
      <span>{children}</span>
      <span style={{ display: 'inline-flex' }}>
        <Icon d={<path d="M5 12h14M13 5l7 7-7 7" />} stroke={T.bg} sw={2} size={18} />
      </span>
    </>
  )
  return href ? (
    <a id={id} href={href} onClick={onClick} style={baseStyle}>
      {inner}
    </a>
  ) : (
    <button id={id} type="button" onClick={onClick} style={baseStyle}>
      {inner}
    </button>
  )
}

// ─── header ───────────────────────────────────────────────────
const NAV_LINKS: [string, string][] = [
  ['Services', 'services'],
  ['About', 'about'],
  ['Service Area', 'area'],
  ['FAQ', 'faq'],
  ['Contact', 'contact'],
]

type HeaderProps = {
  onNav: (key: string) => void
  menuOpen: boolean
  setMenuOpen: (v: boolean) => void
}
function Header({ onNav, menuOpen, setMenuOpen }: HeaderProps) {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        padding: `18px ${SECTION_PAD_X} 12px`,
        background: 'linear-gradient(180deg, rgba(11,11,13,0.96) 0%, rgba(11,11,13,0.85) 75%, rgba(11,11,13,0) 100%)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              overflow: 'hidden',
              border: '1px solid ' + T.lineHi,
              background: '#000',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <Image src="/logo.png" alt="Cisco Plumbing" width={34} height={34} priority />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
            <span
              style={{
                fontFamily: T.display,
                fontSize: 16,
                fontWeight: 700,
                color: T.text,
                letterSpacing: '-0.02em',
              }}
            >
              Cisco Plumbing
            </span>
            <span
              style={{
                fontFamily: T.mono,
                fontSize: 9.5,
                color: T.muted,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                marginTop: 3,
              }}
            >
              Lic. #1198432
            </span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="cp-desktop-only cp-nav-desktop" aria-label="Primary">
          {NAV_LINKS.map(([l, k]) => (
            <button key={k} type="button" className="cp-navlink" onClick={() => onNav(k)}>
              {l}
            </button>
          ))}
          <a
            href={PHONE_HREF}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 16px',
              borderRadius: 12,
              background: T.text,
              color: T.bg,
              textDecoration: 'none',
              fontFamily: T.body,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '-0.01em',
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill={T.bg}>
              <path d="M22 16.92v3a2 2 0 01-2.18 2A19.86 19.86 0 012.06 4.18 2 2 0 014.05 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            {PHONE}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="cp-mobile-only"
          style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid ' + T.lineHi,
            placeItems: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          {menuOpen ? I.x : I.menu}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className="cp-mobile-only"
          style={{
            marginTop: 12,
            padding: 8,
            borderRadius: 16,
            background: T.card,
            border: '1px solid ' + T.line,
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {NAV_LINKS.map(([l, k]) => (
            <button
              key={k}
              type="button"
              onClick={() => {
                onNav(k)
                setMenuOpen(false)
              }}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '14px 12px',
                textAlign: 'left',
                fontFamily: T.display,
                color: T.text,
                fontSize: 16,
                fontWeight: 600,
                borderRadius: 10,
                letterSpacing: '-0.01em',
              }}
            >
              {l}
            </button>
          ))}
          <a
            href={PHONE_HREF}
            style={{
              marginTop: 6,
              padding: '14px',
              borderRadius: 10,
              textAlign: 'center',
              background: T.text,
              color: T.bg,
              textDecoration: 'none',
              fontFamily: T.body,
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: '-0.01em',
            }}
          >
            Call {PHONE}
          </a>
        </div>
      )}
    </div>
  )
}

// ─── HERO ─────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ padding: `clamp(8px, 2vw, 24px) ${SECTION_PAD_X} clamp(28px, 4vw, 56px)` }}>
      <div className="cp-narrow">
        <Eyebrow>Available now · 24/7</Eyebrow>

        <h1
          style={{
            margin: '20px 0 0',
            fontFamily: T.display,
            fontSize: HERO_TITLE,
            lineHeight: 0.92,
            fontWeight: 700,
            letterSpacing: '-0.04em',
            color: T.text,
          }}
        >
          Plumbing,
          <br />
          <span style={{ color: T.muted }}>without the</span>
          <br />
          <span style={{ position: 'relative', display: 'inline-block' }}>
            runaround.
            <span
              aria-hidden
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: '0.08em',
                height: '0.14em',
                background: T.accent,
                zIndex: -1,
                borderRadius: 1,
              }}
            />
          </span>
        </h1>

        <p
          style={{
            margin: '24px 0 0',
            fontFamily: T.body,
            fontSize: 'clamp(15px, 1.6vw, 17px)',
            lineHeight: 1.55,
            color: T.textSub,
            maxWidth: 460,
          }}
        >
          Master-licensed plumbing for Orange County homes and businesses. Flat-rate quotes, clean installs, and a real
          human on the phone — every time.
        </p>

        <div className="cp-hero-actions">
          <PrimaryButton id="hero-call" href={PHONE_HREF} full>
            Call {PHONE}
          </PrimaryButton>
        </div>

        {/* status row — mono labels, single accent */}
        <div
          style={{
            marginTop: 28,
            padding: '16px 0',
            borderTop: '1px solid ' + T.line,
            borderBottom: '1px solid ' + T.line,
            display: 'flex',
            gap: 0,
            maxWidth: 480,
          }}
        >
          {(
            [
              ['25', 'YEARS IN THE TRADE'],
              ['<60', 'MIN AVG RESPONSE'],
            ] as const
          ).map(([n, l], i) => (
            <div
              key={l}
              style={{
                flex: 1,
                paddingLeft: i === 0 ? 0 : 18,
                borderLeft: i === 0 ? 'none' : '1px solid ' + T.line,
              }}
            >
              <div
                style={{
                  fontFamily: T.display,
                  fontSize: 'clamp(28px, 3.2vw, 40px)',
                  fontWeight: 700,
                  color: T.text,
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}
              >
                {n}
              </div>
              <div
                style={{
                  fontFamily: T.mono,
                  fontSize: 9.5,
                  letterSpacing: '0.16em',
                  color: T.muted,
                  marginTop: 8,
                }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section header ───────────────────────────────────────────
type SectionHeadProps = {
  num?: string
  eyebrow: string
  title: string
  sub?: string
}
function SectionHead({ num, eyebrow, title, sub }: SectionHeadProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {num && (
          <span style={{ fontFamily: T.mono, fontSize: 10.5, color: T.muted, letterSpacing: '0.16em' }}>{num}</span>
        )}
        <span style={{ flex: 1, height: 1, background: T.line }} />
        <Eyebrow dot={false}>{eyebrow}</Eyebrow>
      </div>
      <h2
        style={{
          margin: 0,
          fontFamily: T.display,
          fontSize: SECTION_TITLE,
          lineHeight: 0.95,
          fontWeight: 700,
          letterSpacing: '-0.035em',
          color: T.text,
          maxWidth: 720,
        }}
      >
        {title}
      </h2>
      {sub && (
        <p
          style={{
            margin: 0,
            fontFamily: T.body,
            fontSize: 'clamp(14px, 1.5vw, 16px)',
            color: T.textSub,
            lineHeight: 1.55,
            maxWidth: 560,
          }}
        >
          {sub}
        </p>
      )}
    </div>
  )
}

// ─── License Bar ──────────────────────────────────────────────
function LicenseBar() {
  return (
    <div style={{ padding: `0 ${SECTION_PAD_X}` }}>
      <div
        className="cp-narrow"
        style={{
          padding: '16px 18px',
          borderRadius: 16,
          background: T.card,
          border: '1px solid ' + T.line,
          display: 'flex',
          alignItems: 'center',
          gap: 14,
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            background: T.accentSoft,
            border: '1px solid rgba(227,179,65,0.25)',
            display: 'grid',
            placeItems: 'center',
            flexShrink: 0,
          }}
        >
          <Icon
            d={
              <>
                <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
                <path d="M9 12l2 2 4-4" />
              </>
            }
            stroke={T.accent}
            size={20}
          />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontFamily: T.display,
              fontSize: 14.5,
              color: T.text,
              fontWeight: 600,
              letterSpacing: '-0.01em',
            }}
          >
            Francisco &ldquo;Cisco&rdquo; Vega · Master Plumber
          </div>
          <div
            style={{
              fontFamily: T.mono,
              fontSize: 10.5,
              color: T.muted,
              marginTop: 4,
              letterSpacing: '0.1em',
            }}
          >
            CSLB #1198432 · BONDED · INSURED
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Services ─────────────────────────────────────────────────
type Service = {
  num: string
  name: string
  blurb: string
  bullets: string[]
}

const SERVICES: Service[] = [
  {
    num: '01',
    name: 'Emergency plumbing',
    blurb: 'Burst pipes, sewer backups, no hot water. Day or night, weekends and holidays.',
    bullets: ['Same-hour dispatch', 'Upfront flat-rate pricing', 'No after-hours surcharge'],
  },
  {
    num: '02',
    name: 'Leak detection & repair',
    blurb: 'Find hidden slab and wall leaks without tearing up your home. Lasting repairs guaranteed.',
    bullets: ['Acoustic & thermal detection', 'Slab leak specialists', '12-month warranty'],
  },
  {
    num: '03',
    name: 'Water heaters',
    blurb: 'Tank, tankless, gas, electric — installed, repaired, replaced same day.',
    bullets: ['Bradford White & Rinnai', 'Tankless conversions', 'Permits handled'],
  },
  {
    num: '04',
    name: 'Drains & sewer lines',
    blurb: 'High-pressure hydro-jetting, camera inspection, and trenchless line replacement.',
    bullets: ['Hydro-jetting', 'Camera inspection', 'Trenchless repair'],
  },
  {
    num: '05',
    name: 'Faucets, toilets & fixtures',
    blurb: 'Installs and repairs done clean — running toilets, drips, low pressure, full remodels.',
    bullets: ['Brand-agnostic', 'Bath & kitchen remodels', 'Same-day installs'],
  },
  {
    num: '06',
    name: 'Repipe & new construction',
    blurb: 'Whole-home copper and PEX repipes, additions, and new builds, permitted and inspected.',
    bullets: ['Copper & PEX', 'ADUs & additions', 'Free in-home estimate'],
  },
]

function ServiceRow({
  s,
  expanded,
  onToggle,
  isLast,
}: {
  s: Service
  expanded: boolean
  onToggle: () => void
  isLast: boolean
}) {
  return (
    <div style={{ borderBottom: isLast ? 'none' : '1px solid ' + T.line }}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        style={{
          width: '100%',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '20px 0',
          display: 'flex',
          alignItems: 'flex-start',
          gap: 14,
          textAlign: 'left',
          color: T.text,
        }}
      >
        <span
          style={{
            fontFamily: T.mono,
            fontSize: 11,
            color: T.muted,
            letterSpacing: '0.1em',
            paddingTop: 6,
            minWidth: 22,
          }}
        >
          {s.num}
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontFamily: T.display,
              fontSize: 'clamp(20px, 2.4vw, 26px)',
              color: T.text,
              fontWeight: 600,
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
            }}
          >
            {s.name}
          </div>
          {!expanded && (
            <div
              style={{
                marginTop: 6,
                fontFamily: T.body,
                fontSize: 13,
                color: T.muted,
                lineHeight: 1.5,
                display: '-webkit-box',
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {s.blurb}
            </div>
          )}
        </div>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            border: '1px solid ' + (expanded ? T.accent : T.lineHi),
            display: 'grid',
            placeItems: 'center',
            flexShrink: 0,
            marginTop: 2,
            background: expanded ? T.accent : 'transparent',
            transition: 'all .2s',
          }}
        >
          {expanded ? (
            <Icon d={<path d="M5 12h14" />} stroke={T.bg} sw={2.2} size={16} />
          ) : (
            <Icon d={<path d="M12 5v14M5 12h14" />} stroke={T.text} sw={1.8} size={16} />
          )}
        </div>
      </button>
      {expanded && (
        <div style={{ padding: '0 0 22px 36px', animation: 'cpFade .3s ease' }}>
          <div style={{ fontFamily: T.body, fontSize: 14, color: T.textSub, lineHeight: 1.55 }}>{s.blurb}</div>
          <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {s.bullets.map((b) => (
              <div
                key={b}
                style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: T.body, fontSize: 13, color: T.text }}
              >
                <Icon d={<path d="M5 12l4 4 10-10" />} stroke={T.accent} sw={2.2} size={16} />
                {b}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function Services() {
  const [open, setOpen] = React.useState(0)
  return (
    <section style={{ padding: `clamp(40px, 6vw, 80px) ${SECTION_PAD_X} 16px` }} data-section="services">
      <div className="cp-narrow">
        <SectionHead
          num="01 / 06"
          eyebrow="Services"
          title="Full-service plumbing, one trusted crew."
          sub="From a leak at 2am to a whole-home repipe. We do the work, we stand behind it."
        />
        <div style={{ marginTop: 24 }}>
          {SERVICES.map((s, i) => (
            <ServiceRow
              key={s.num}
              s={s}
              expanded={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
              isLast={i === SERVICES.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── How it works ─────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      n: '01',
      t: 'Call or message',
      d: "Tell us what's going on. A real plumber picks up — not a call center.",
    },
    {
      n: '02',
      t: 'Real ETA',
      d: "You get a window in minutes, not hours. We text when we're on the way.",
    },
    {
      n: '03',
      t: 'Diagnose & quote',
      d: 'On-site assessment with a flat-rate price in writing — before any wrench turns.',
    },
    {
      n: '04',
      t: 'Fixed and clean',
      d: 'Workmanship guaranteed 12 months. We leave the job site cleaner than we found it.',
    },
  ]
  return (
    <section style={{ padding: `clamp(40px, 6vw, 80px) ${SECTION_PAD_X} 16px` }}>
      <div className="cp-narrow">
        <SectionHead num="02 / 06" eyebrow="Process" title="How it works." />
        <div className="cp-grid-howitworks" style={{ marginTop: 24 }}>
          {steps.map((s, i) => (
            <div
              key={s.n}
              style={{
                padding: '18px 0',
                borderBottom: i < steps.length - 1 ? '1px solid ' + T.line : 'none',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 16,
              }}
            >
              <span
                style={{
                  fontFamily: T.display,
                  fontSize: 18,
                  fontWeight: 700,
                  color: T.accent,
                  letterSpacing: '-0.02em',
                  minWidth: 28,
                }}
              >
                {s.n}
              </span>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: T.display,
                    fontSize: 'clamp(17px, 1.8vw, 20px)',
                    color: T.text,
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {s.t}
                </div>
                <div style={{ marginTop: 4, fontFamily: T.body, fontSize: 13.5, color: T.muted, lineHeight: 1.5 }}>
                  {s.d}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Offers ───────────────────────────────────────────────────
function Offers() {
  const offers = [
    { tag: 'NEW CUSTOMER', amt: '$100 off', forText: 'water heater replacement', code: 'CISCO100' },
    { tag: 'ANY SERVICE', amt: '$50 off', forText: 'plumbing repairs over $300', code: 'CISCO50' },
    { tag: 'SENIORS & VETS', amt: '10% off', forText: 'all service calls', code: 'CISCOTHX' },
  ]
  return (
    <section style={{ padding: `clamp(40px, 6vw, 80px) ${SECTION_PAD_X} 16px` }} data-section="offers">
      <div className="cp-wide">
        <SectionHead num="03 / 06" eyebrow="This month" title="Offers worth using." />
        <div className="cp-grid-offers" style={{ marginTop: 24 }}>
          {offers.map((o) => (
            <div
              key={o.code}
              style={{
                padding: 18,
                borderRadius: 16,
                background: T.card,
                border: '1px solid ' + T.line,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                <span
                  style={{
                    fontFamily: T.mono,
                    fontSize: 9.5,
                    letterSpacing: '0.18em',
                    color: T.muted,
                    textTransform: 'uppercase',
                  }}
                >
                  {o.tag}
                </span>
                <span
                  style={{
                    fontFamily: T.mono,
                    fontSize: 10.5,
                    letterSpacing: '0.12em',
                    color: T.accent,
                    padding: '4px 10px',
                    borderRadius: 999,
                    border: '1px solid rgba(227,179,65,0.3)',
                    background: T.accentSoft,
                  }}
                >
                  {o.code}
                </span>
              </div>
              <div
                style={{
                  marginTop: 14,
                  fontFamily: T.display,
                  fontSize: 'clamp(24px, 2.4vw, 30px)',
                  color: T.text,
                  fontWeight: 700,
                  letterSpacing: '-0.025em',
                  lineHeight: 1.05,
                }}
              >
                {o.amt}
              </div>
              <div style={{ marginTop: 4, fontFamily: T.body, fontSize: 14, color: T.textSub, lineHeight: 1.4 }}>
                on {o.forText}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── About ────────────────────────────────────────────────────
function About() {
  return (
    <section style={{ padding: `clamp(40px, 6vw, 80px) ${SECTION_PAD_X} 16px` }} data-section="about">
      <div className="cp-narrow">
        <SectionHead num="04 / 06" eyebrow="Who we are" title="One plumber. Two and a half decades. No middlemen." />

        <div className="cp-about-card" style={{ marginTop: 24 }}>
          <div
            className="cp-about-portrait"
            style={{
              width: '100%',
              height: 280,
              borderRadius: 18,
              background: T.card,
              border: '1px solid ' + T.line,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'repeating-linear-gradient(135deg, rgba(255,255,255,0.015) 0 1px, transparent 1px 14px)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: 14,
                left: 14,
                fontFamily: T.mono,
                fontSize: 10,
                letterSpacing: '0.16em',
                color: T.muted,
                textTransform: 'uppercase',
              }}
            >
              IMG · 01
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: 14,
                left: 14,
                right: 14,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                gap: 12,
              }}
            >
              <div
                style={{
                  fontFamily: T.display,
                  fontSize: 16,
                  fontWeight: 600,
                  color: T.text,
                  letterSpacing: '-0.01em',
                }}
              >
                [ portrait — Cisco at the truck ]
              </div>
              <div
                style={{
                  fontFamily: T.mono,
                  fontSize: 9.5,
                  letterSpacing: '0.16em',
                  color: T.accent,
                  padding: '4px 8px',
                  borderRadius: 4,
                  border: '1px solid rgba(227,179,65,0.3)',
                }}
              >
                PLACEHOLDER
              </div>
            </div>
          </div>

          <div>
            <p
              style={{
                margin: 0,
                fontFamily: T.body,
                fontSize: 'clamp(14.5px, 1.5vw, 16px)',
                color: T.textSub,
                lineHeight: 1.6,
              }}
            >
              Cisco started swinging a wrench at sixteen, working alongside his uncle. Twenty-five years later — and
              more slab leaks than he can count — he runs the shop the way he always wanted: show up on time, charge a
              fair price, and leave the job cleaner than you found it.
            </p>
            <p
              style={{
                marginTop: 14,
                marginBottom: 0,
                fontFamily: T.body,
                fontSize: 'clamp(14.5px, 1.5vw, 16px)',
                color: T.textSub,
                lineHeight: 1.6,
              }}
            >
              No call centers. No upsells. When you call, you get Cisco — or someone he personally trained.
            </p>

            <div className="cp-grid-about-tags" style={{ marginTop: 24 }}>
              {(
                [
                  ['Master', 'Plumber'],
                  ['Family', 'Owned'],
                  ['Bonded', '& Insured'],
                  ['Local', 'Crew'],
                ] as const
              ).map(([a, b]) => (
                <div
                  key={a + b}
                  style={{
                    padding: '14px',
                    borderRadius: 12,
                    background: T.card,
                    border: '1px solid ' + T.line,
                  }}
                >
                  <div
                    style={{
                      fontFamily: T.display,
                      fontSize: 15,
                      fontWeight: 600,
                      color: T.text,
                      letterSpacing: '-0.01em',
                      lineHeight: 1.2,
                    }}
                  >
                    {a}
                  </div>
                  <div
                    style={{
                      fontFamily: T.display,
                      fontSize: 15,
                      fontWeight: 600,
                      color: T.muted,
                      letterSpacing: '-0.01em',
                      lineHeight: 1.2,
                    }}
                  >
                    {b}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Reviews ──────────────────────────────────────────────────
function Reviews() {
  const reviews = [
    {
      name: 'Maria G.',
      city: 'Anaheim',
      text: 'Came out at 11pm for a burst pipe. Quoted in five minutes, fixed in an hour, charged less than the other guys quoted just to show up.',
    },
    {
      name: 'David R.',
      city: 'Orange',
      text: "Replaced our water heater the same day I called. Clean install, took the old one, even swept up. Only plumber I'll use.",
    },
    {
      name: 'Jenna W.',
      city: 'Fullerton',
      text: 'Honest, fast, respectful. Walked us through every option, no pressure. Cisco is a real one.',
    },
  ]
  const [i, setI] = React.useState(0)
  return (
    <section style={{ padding: `clamp(40px, 6vw, 80px) ${SECTION_PAD_X} 16px` }}>
      <div className="cp-narrow">
        <SectionHead num="05 / 06" eyebrow="Word of mouth" title="The neighbors talk." />

        <div
          style={{
            marginTop: 24,
            padding: '24px 22px',
            borderRadius: 18,
            background: T.card,
            border: '1px solid ' + T.line,
          }}
        >
          <div style={{ display: 'flex', gap: 3 }}>
            {[0, 1, 2, 3, 4].map((k) => (
              <span key={k} style={{ width: 14, height: 14, color: T.text }}>
                {I.star}
              </span>
            ))}
          </div>
          <p
            style={{
              marginTop: 16,
              marginBottom: 0,
              fontFamily: T.display,
              fontSize: 'clamp(17px, 2vw, 22px)',
              color: T.text,
              lineHeight: 1.4,
              letterSpacing: '-0.01em',
              fontWeight: 500,
            }}
          >
            &ldquo;{reviews[i].text}&rdquo;
          </p>
          <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: T.accentSoft,
                  border: '1px solid rgba(227,179,65,0.25)',
                  display: 'grid',
                  placeItems: 'center',
                  fontFamily: T.display,
                  fontSize: 14,
                  fontWeight: 700,
                  color: T.accent,
                }}
              >
                {reviews[i].name[0]}
              </div>
              <div>
                <div style={{ fontFamily: T.body, fontSize: 13, color: T.text, fontWeight: 600 }}>
                  {reviews[i].name}
                </div>
                <div
                  style={{
                    fontFamily: T.mono,
                    fontSize: 9.5,
                    color: T.muted,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    marginTop: 2,
                  }}
                >
                  {reviews[i].city}
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              {reviews.map((_, k) => (
                <button
                  key={k}
                  type="button"
                  aria-label={`Show review ${k + 1}`}
                  onClick={() => setI(k)}
                  style={{
                    width: k === i ? 22 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: k === i ? T.accent : 'rgba(255,255,255,0.12)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all .2s',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Service Area ─────────────────────────────────────────────
function ServiceArea() {
  const cities = [
    'Anaheim',
    'Fullerton',
    'Orange',
    'Santa Ana',
    'Garden Grove',
    'Placentia',
    'Yorba Linda',
    'Brea',
    'Cypress',
    'Stanton',
    'Buena Park',
    'La Palma',
  ]
  return (
    <section style={{ padding: `clamp(40px, 6vw, 80px) ${SECTION_PAD_X} 16px` }} data-section="area">
      <div className="cp-narrow">
        <SectionHead
          num="06 / 06"
          eyebrow="Where we work"
          title="Orange County — every zip."
          sub="Family-run, locally based. No travel fees inside our service area."
        />
        <div style={{ marginTop: 22, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {cities.map((c) => (
            <span
              key={c}
              style={{
                padding: '8px 14px',
                borderRadius: 999,
                background: T.card,
                border: '1px solid ' + T.line,
                fontFamily: T.body,
                fontSize: 12.5,
                color: T.text,
                fontWeight: 500,
              }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────
const FAQS = [
  {
    q: 'Do you really answer the phone 24/7?',
    a: 'Yes — Cisco or a trained tech picks up around the clock. After-hours, expect a callback within ten minutes.',
  },
  {
    q: 'Will I get a quote before work starts?',
    a: 'Always. We diagnose first, then give you a flat-rate quote in writing. You decide before any wrench turns.',
  },
  {
    q: 'Are you licensed and insured?',
    a: "Fully licensed (CSLB #1198432), bonded, and insured. We'll happily provide proof of insurance for any job.",
  },
  {
    q: 'Do you handle permits?',
    a: 'For water heater installs, repipes, and additions we pull all required city permits and meet inspectors on site.',
  },
  {
    q: 'Is there a service-call fee?',
    a: "There's a small dispatch fee that's waived completely if you go ahead with the repair.",
  },
]

function FAQ() {
  const [open, setOpen] = React.useState(0)
  return (
    <section style={{ padding: `clamp(40px, 6vw, 80px) ${SECTION_PAD_X} 16px` }} data-section="faq">
      <div className="cp-narrow">
        <SectionHead num="·" eyebrow="FAQ" title="Asked and answered." />
        <div style={{ marginTop: 22 }}>
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} style={{ borderBottom: '1px solid ' + T.line }}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '18px 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    textAlign: 'left',
                  }}
                >
                  <span
                    style={{
                      flex: 1,
                      fontFamily: T.display,
                      fontSize: 'clamp(15px, 1.6vw, 18px)',
                      color: T.text,
                      fontWeight: 600,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {f.q}
                  </span>
                  <span
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      border: '1px solid ' + (isOpen ? T.accent : T.lineHi),
                      display: 'grid',
                      placeItems: 'center',
                      background: isOpen ? T.accent : 'transparent',
                      transition: 'all .2s',
                      flexShrink: 0,
                    }}
                  >
                    {isOpen ? (
                      <Icon d={<path d="M5 12h14" />} stroke={T.bg} sw={2.2} size={14} />
                    ) : (
                      <Icon d={<path d="M12 5v14M5 12h14" />} stroke={T.text} sw={1.8} size={14} />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div
                    style={{
                      padding: '0 44px 20px 0',
                      fontFamily: T.body,
                      fontSize: 14,
                      color: T.muted,
                      lineHeight: 1.6,
                      animation: 'cpFade .3s ease',
                    }}
                  >
                    {f.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────
function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
}) {
  const baseStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    padding: '16px 0',
    borderBottom: '1px solid ' + T.line,
    textDecoration: 'none',
  }
  const inner = (
    <>
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid ' + T.line,
          display: 'grid',
          placeItems: 'center',
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontFamily: T.mono,
            fontSize: 9.5,
            letterSpacing: '0.18em',
            color: T.muted,
            textTransform: 'uppercase',
          }}
        >
          {label}
        </div>
        <div
          style={{
            marginTop: 2,
            fontFamily: T.display,
            fontSize: 15,
            color: T.text,
            fontWeight: 600,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            letterSpacing: '-0.01em',
          }}
        >
          {value}
        </div>
      </div>
      {href && <Icon d={<path d="M5 12h14M13 5l7 7-7 7" />} stroke={T.muted} sw={1.8} size={18} />}
    </>
  )
  return href ? (
    <a href={href} style={baseStyle}>
      {inner}
    </a>
  ) : (
    <div style={baseStyle}>{inner}</div>
  )
}

function Contact() {
  return (
    <section
      style={{ padding: `clamp(40px, 6vw, 80px) ${SECTION_PAD_X} clamp(28px, 4vw, 56px)` }}
      data-section="contact"
      id="contact"
    >
      <div className="cp-narrow">
        <SectionHead
          num="·"
          eyebrow="Get in touch"
          title="Tell Cisco what's going on."
          sub="For after-hours emergencies, just call. We answer 24/7."
        />

        <div style={{ marginTop: 16 }}>
          <ContactRow icon={I.phone} label="Phone" value={PHONE} href={PHONE_HREF} />
          <ContactRow icon={I.mail} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
          <ContactRow icon={I.clock} label="Hours" value="24 hours · 7 days" />
          <ContactRow icon={I.pin} label="Area" value="Orange County, CA" />
        </div>

        <div style={{ marginTop: 24 }}>
          <PrimaryButton href={PHONE_HREF} full>
            Call {PHONE}
          </PrimaryButton>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      style={{
        padding: `clamp(28px, 4vw, 56px) ${SECTION_PAD_X} clamp(110px, 12vw, 140px)`,
        borderTop: '1px solid ' + T.line,
      }}
    >
      <div className="cp-wide">
        <div
          style={{
            fontFamily: T.display,
            fontSize: FOOTER_WORDMARK,
            fontWeight: 700,
            color: T.text,
            letterSpacing: '-0.04em',
            lineHeight: 0.9,
          }}
        >
          Cisco
        </div>
        <div
          style={{
            fontFamily: T.display,
            fontSize: FOOTER_WORDMARK,
            fontWeight: 700,
            color: T.muted,
            letterSpacing: '-0.04em',
            lineHeight: 0.9,
          }}
        >
          Plumbing.
        </div>

        <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <div style={{ display: 'flex', gap: 8 }}>
            {[I.insta, I.fb, I.google].map((ic, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: T.card,
                  border: '1px solid ' + T.line,
                  display: 'grid',
                  placeItems: 'center',
                  textDecoration: 'none',
                }}
              >
                {ic}
              </a>
            ))}
          </div>
          <a
            href={PHONE_HREF}
            style={{
              fontFamily: T.display,
              fontSize: 14,
              fontWeight: 600,
              color: T.accent,
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            {PHONE}
            <Icon d={<path d="M5 12h14M13 5l7 7-7 7" />} stroke={T.accent} sw={2} size={14} />
          </a>
        </div>

        <div
          style={{
            marginTop: 24,
            paddingTop: 18,
            borderTop: '1px solid ' + T.line,
            fontFamily: T.mono,
            fontSize: 10.5,
            color: T.muted,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            lineHeight: 1.8,
          }}
        >
          © 2026 Cisco Plumbing
          <br />
          CSLB #1198432 · Bonded &amp; Insured
        </div>
      </div>
    </footer>
  )
}

// ─── Sticky call CTA ──────────────────────────────────────────
function StickyCall() {
  const [visible, setVisible] = React.useState(false)
  React.useEffect(() => {
    const target = document.getElementById('hero-call')
    if (!target) return
    const obs = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), { threshold: 0 })
    obs.observe(target)
    return () => obs.disconnect()
  }, [])
  return (
    <div
      className="cp-sticky-call"
      aria-hidden={!visible}
      style={{
        position: 'fixed',
        left: 14,
        right: 14,
        bottom: 16,
        zIndex: 30,
        pointerEvents: 'none',
        display: 'flex',
        justifyContent: 'center',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity .25s ease, transform .25s ease',
      }}
    >
      <a
        href={PHONE_HREF}
        tabIndex={visible ? 0 : -1}
        style={{
          pointerEvents: visible ? 'auto' : 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 10,
          padding: '15px 20px',
          borderRadius: 14,
          background: T.text,
          color: T.bg,
          textDecoration: 'none',
          fontFamily: T.body,
          fontWeight: 700,
          fontSize: 14.5,
          letterSpacing: '-0.01em',
          width: '100%',
          maxWidth: 440,
          boxShadow: '0 16px 40px rgba(0,0,0,0.6)',
        }}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={T.bg} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2A19.86 19.86 0 012.06 4.18 2 2 0 014.05 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
          </svg>
          Call now · {PHONE}
        </span>
        <Icon d={<path d="M5 12h14M13 5l7 7-7 7" />} stroke={T.bg} sw={2} size={18} />
      </a>
    </div>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const onNav = (key: string) => {
    const el = document.querySelector(`[data-section="${key}"]`) as HTMLElement | null
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }
  return (
    <main className="cp-page">
      <Header onNav={onNav} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <LicenseBar />
      <Services />
      <HowItWorks />
      <Offers />
      <About />
      <Reviews />
      <ServiceArea />
      <FAQ />
      <Contact />
      <Footer />
      <StickyCall />
    </main>
  )
}
