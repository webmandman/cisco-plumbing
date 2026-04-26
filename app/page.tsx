'use client'

import * as React from 'react'
import Image from 'next/image'

const PHONE = '(714) 555-2476'
const PHONE_HREF = 'tel:+17145552476'
const EMAIL = 'service@ciscoplumbing.com'

const T = {
  bg: '#0a0a0b',
  card: 'linear-gradient(180deg, #16161a 0%, #0e0e11 100%)',
  line: 'rgba(212,175,55,0.18)',
  text: '#ececec',
  muted: '#9a9a9f',
  silver: 'linear-gradient(180deg, #f6f6f7 0%, #c0c0c4 45%, #8b8b90 60%, #d8d8db 100%)',
  silverFlat: '#c8c8cc',
  gold: 'linear-gradient(180deg, #f6e58a 0%, #e8c34a 35%, #b88a2a 70%, #f0d672 100%)',
  goldFlat: '#d4af37',
  goldDeep: '#b88a2a',
  display: 'var(--font-playfair), "Playfair Display", "Times New Roman", serif',
  body: 'var(--font-inter), "Inter", -apple-system, system-ui, sans-serif',
} as const

// Fluid scaling helpers — sizes interpolate from mobile minimum to desktop max.
const HERO_TITLE = 'clamp(40px, 9vw, 76px)'
const SECTION_TITLE = 'clamp(28px, 5vw, 44px)'
const HERO_LOGO = 'clamp(132px, 18vw, 188px)'
const SECTION_PAD_X = 'clamp(18px, 3.5vw, 40px)'

type IconProps = {
  d: React.ReactNode
  size?: number
  stroke?: string
  sw?: number
  fill?: string
}
const Icon = ({ d, size = 22, stroke = T.goldFlat, sw = 1.5, fill = 'none' }: IconProps) => (
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
      fill={T.goldFlat}
      stroke={T.goldDeep}
    />
  ),
  check: <Icon d={<path d="M5 12l4 4 10-10" />} sw={2} />,
  chev: <Icon d={<path d="M6 9l6 6 6-6" />} sw={2} />,
  menu: <Icon d={<path d="M4 7h16M4 12h16M4 17h16" />} stroke={T.silverFlat} sw={1.6} />,
  x: <Icon d={<path d="M6 6l12 12M18 6L6 18" />} stroke={T.silverFlat} sw={1.6} />,
  insta: (
    <Icon
      d={
        <>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.6" fill={T.goldFlat} />
        </>
      }
    />
  ),
  fb: (
    <Icon
      d={<path d="M14 8h2V5h-2.5C11.5 5 10 6.5 10 8.5V11H8v3h2v7h3v-7h2.2l.3-3H13V9c0-.6.4-1 1-1z" />}
      fill={T.goldFlat}
      stroke="none"
    />
  ),
  google: (
    <Icon
      d={<path d="M21 11h-9v2.8h5.2c-.5 2.3-2.5 3.7-5.2 3.7a5.5 5.5 0 110-11c1.4 0 2.7.5 3.7 1.4l2-2A8.5 8.5 0 1012 21c4.9 0 8.5-3.4 8.5-8.5 0-.5 0-1-.1-1.5z" />}
      fill={T.goldFlat}
      stroke="none"
    />
  ),
  award: (
    <Icon
      d={
        <>
          <circle cx="12" cy="9" r="6" />
          <path d="M8.5 13.5L7 21l5-3 5 3-1.5-7.5" />
        </>
      }
    />
  ),
}

type TextProps = {
  children: React.ReactNode
  size: number | string
  weight?: number
  family?: string
  style?: React.CSSProperties
}
function GoldText({ children, size, weight = 600, family = T.display, style = {} }: TextProps) {
  return (
    <span
      style={{
        fontFamily: family,
        fontSize: size,
        fontWeight: weight,
        lineHeight: 1.05,
        background: T.gold,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
        letterSpacing: '-0.01em',
        ...style,
      }}
    >
      {children}
    </span>
  )
}
function SilverText({ children, size, weight = 600, family = T.display, style = {} }: TextProps) {
  return (
    <span
      style={{
        fontFamily: family,
        fontSize: size,
        fontWeight: weight,
        lineHeight: 1.05,
        background: T.silver,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
        letterSpacing: '-0.01em',
        ...style,
      }}
    >
      {children}
    </span>
  )
}

function Eyebrow({ children, color = T.goldFlat }: { children: React.ReactNode; color?: string }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontFamily: T.body,
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color,
      }}
    >
      <span style={{ width: 18, height: 1, background: color, opacity: 0.6 }} />
      {children}
    </div>
  )
}

type GoldButtonProps = {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  full?: boolean
  variant?: 'gold' | 'silver'
  compact?: boolean
}
function GoldButton({ children, href, onClick, full = false, variant = 'gold', compact = false }: GoldButtonProps) {
  const isGold = variant === 'gold'
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    width: full ? '100%' : undefined,
    padding: compact ? '9px 16px' : '14px 22px',
    borderRadius: 999,
    border: 'none',
    cursor: 'pointer',
    fontFamily: T.body,
    fontSize: compact ? 12 : 14,
    fontWeight: 700,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    background: isGold ? T.gold : 'transparent',
    color: isGold ? '#1a1407' : T.silverFlat,
    boxShadow: isGold
      ? 'inset 0 1px 0 rgba(255,255,255,0.55), inset 0 -1px 0 rgba(120,80,10,0.4), 0 8px 22px rgba(212,175,55,0.22)'
      : 'inset 0 0 0 1px rgba(200,200,204,0.35)',
  }
  if (href) {
    return (
      <a href={href} onClick={onClick} style={baseStyle}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" onClick={onClick} style={baseStyle}>
      {children}
    </button>
  )
}

function Divider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, padding: '4px 0' }}>
      <span
        style={{
          height: 1,
          flex: 1,
          background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.35), transparent)',
        }}
      />
      <svg width="10" height="10" viewBox="0 0 10 10">
        <path d="M5 0l1.5 3.5L10 5 6.5 6.5 5 10 3.5 6.5 0 5l3.5-1.5z" fill={T.goldFlat} />
      </svg>
      <span
        style={{
          height: 1,
          flex: 1,
          background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.35), transparent)',
        }}
      />
    </div>
  )
}

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
        background:
          'linear-gradient(180deg, rgba(10,10,11,0.98) 0%, rgba(10,10,11,0.92) 80%, rgba(10,10,11,0) 100%)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Image
            src="/logo.png"
            alt="Cisco Plumbing"
            width={36}
            height={36}
            priority
            style={{ borderRadius: 8, boxShadow: '0 2px 10px rgba(212,175,55,0.25)' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <SilverText family={T.display} size={15} weight={700} style={{ letterSpacing: '0.02em' }}>
              Cisco Plumbing
            </SilverText>
            <span
              style={{
                fontFamily: T.body,
                fontSize: 9,
                letterSpacing: '0.28em',
                color: T.goldFlat,
                textTransform: 'uppercase',
                marginTop: 3,
              }}
            >
              Lic. & Insured · Est. 2009
            </span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="cp-desktop-only cp-nav-desktop" aria-label="Primary">
          {NAV_LINKS.map(([l, k]) => (
            <button
              key={k}
              type="button"
              className="cp-navlink"
              onClick={() => onNav(k)}
            >
              {l}
            </button>
          ))}
          <GoldButton href={PHONE_HREF} compact>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#1a1407">
                <path d="M22 16.92v3a2 2 0 01-2.18 2A19.86 19.86 0 012.06 4.18 2 2 0 014.05 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              {PHONE}
            </span>
          </GoldButton>
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
            border: '1px solid rgba(212,175,55,0.18)',
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
            padding: 10,
            borderRadius: 14,
            background: T.card,
            border: '1px solid ' + T.line,
            flexDirection: 'column',
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
                padding: '12px 8px',
                textAlign: 'left',
                fontFamily: T.body,
                color: T.text,
                fontSize: 14,
                fontWeight: 500,
                borderBottom: '1px solid rgba(255,255,255,0.04)',
              }}
            >
              {l}
            </button>
          ))}
          <a
            href={PHONE_HREF}
            style={{
              marginTop: 8,
              padding: '12px',
              borderRadius: 10,
              textAlign: 'center',
              background: T.gold,
              color: '#1a1407',
              textDecoration: 'none',
              fontFamily: T.body,
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: '0.04em',
            }}
          >
            CALL {PHONE}
          </a>
        </div>
      )}
    </div>
  )
}

function Hero() {
  return (
    <section style={{ padding: `clamp(8px, 2vw, 24px) ${SECTION_PAD_X} clamp(36px, 6vw, 72px)`, position: 'relative' }}>
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: -40,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(560px, 90%)',
          height: 'min(560px, 90vw)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0) 65%)',
          pointerEvents: 'none',
          filter: 'blur(8px)',
        }}
      />
      <div
        className="cp-narrow"
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 18,
        }}
      >
        <Eyebrow>Family Owned · 24/7 Emergency</Eyebrow>

        <div
          style={{
            width: HERO_LOGO,
            height: HERO_LOGO,
            borderRadius: 28,
            padding: 4,
            background: T.gold,
            boxShadow: '0 18px 50px rgba(212,175,55,0.28), inset 0 1px 0 rgba(255,255,255,0.6)',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 24,
              background: '#0a0a0b',
              display: 'grid',
              placeItems: 'center',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/logo.png"
              alt="Cisco Plumbing"
              width={180}
              height={180}
              priority
              style={{ width: '90%', height: '90%', borderRadius: 22, objectFit: 'contain' }}
            />
          </div>
        </div>

        <h1 style={{ margin: 0, lineHeight: 0.95 }}>
          <SilverText size={HERO_TITLE}>Plumbing</SilverText>
          <br />
          <GoldText size={HERO_TITLE} style={{ fontStyle: 'italic' }}>
            done right.
          </GoldText>
        </h1>

        <p
          style={{
            margin: 0,
            maxWidth: 520,
            fontFamily: T.body,
            fontSize: 'clamp(14.5px, 1.6vw, 17px)',
            lineHeight: 1.6,
            color: T.muted,
          }}
        >
          Honest pricing. Master craftsmanship. No pushy sales. A trusted local plumber for homes and businesses across
          the valley.
        </p>

        <div className="cp-hero-actions">
          <GoldButton href={PHONE_HREF} full>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#1a1407">
                <path d="M22 16.92v3a2 2 0 01-2.18 2A19.86 19.86 0 012.06 4.18 2 2 0 014.05 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              Call {PHONE}
            </span>
          </GoldButton>
          <GoldButton variant="silver" full href="#contact">
            Free Estimate →
          </GoldButton>
        </div>

        <div
          className="cp-hero-trust"
          style={{
            marginTop: 14,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 0,
            padding: '14px 8px',
            borderRadius: 16,
            background: 'rgba(255,255,255,0.025)',
            border: '1px solid ' + T.line,
          }}
        >
          {([
            ['25+', 'YEARS'],
            ['24/7', 'EMERGENCY'],
            ['5.0', 'GOOGLE'],
          ] as const).map(([n, l], i) => (
            <div
              key={l}
              style={{
                textAlign: 'center',
                borderRight: i < 2 ? '1px solid rgba(212,175,55,0.14)' : 'none',
              }}
            >
              <GoldText family={T.display} size="clamp(22px, 3vw, 30px)" weight={700}>
                {n}
              </GoldText>
              <div style={{ fontFamily: T.body, fontSize: 9.5, letterSpacing: '0.22em', color: T.muted, marginTop: 4 }}>
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LicenseBar() {
  return (
    <div style={{ padding: `0 ${SECTION_PAD_X}` }}>
      <div
        className="cp-narrow"
        style={{
          padding: '14px 16px',
          borderRadius: 14,
          background: T.card,
          border: '1px solid ' + T.line,
          display: 'flex',
          alignItems: 'center',
          gap: 14,
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: T.gold,
            display: 'grid',
            placeItems: 'center',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6)',
            flexShrink: 0,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1407" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: T.body,
              fontSize: 9.5,
              letterSpacing: '0.22em',
              color: T.goldFlat,
              textTransform: 'uppercase',
            }}
          >
            Certified · Licensed · Insured
          </div>
          <div style={{ fontFamily: T.display, fontSize: 16, color: T.text, marginTop: 2, fontWeight: 600 }}>
            Francisco &ldquo;Cisco&rdquo; Vega
          </div>
          <div style={{ fontFamily: T.body, fontSize: 11, color: T.muted, marginTop: 1 }}>License #1198432</div>
        </div>
      </div>
    </div>
  )
}

function Offers() {
  const offers = [
    { tag: 'NEW CUSTOMER', amt: '$100', label: 'Off Water Heater Replacement', code: 'CISCO100' },
    { tag: 'ANY SERVICE', amt: '$50', label: 'Off Plumbing Repairs Over $300', code: 'CISCO50' },
    { tag: 'SENIORS & VETS', amt: '10%', label: 'Off All Service Calls', code: 'CISCOTHX' },
  ]
  return (
    <section
      style={{ padding: `clamp(36px, 6vw, 72px) ${SECTION_PAD_X} 12px` }}
      data-section="offers"
    >
      <div className="cp-wide">
        <SectionHead eyebrow="This Month" titleSilver="Special" titleGold="Offers" />
        <div className="cp-grid-services" style={{ marginTop: 22 }}>
          {offers.map((o) => (
            <div
              key={o.code}
              style={{
                position: 'relative',
                overflow: 'hidden',
                padding: '16px 16px 16px 18px',
                borderRadius: 16,
                background: T.card,
                border: '1px solid ' + T.line,
                display: 'flex',
                alignItems: 'center',
                gap: 14,
              }}
            >
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: T.gold }} />
              <div
                style={{
                  minWidth: 78,
                  height: 78,
                  borderRadius: 12,
                  background: 'radial-gradient(circle at 30% 20%, rgba(212,175,55,0.18), transparent 60%)',
                  border: '1px dashed rgba(212,175,55,0.4)',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <GoldText family={T.display} size={26} weight={700}>
                  {o.amt}
                </GoldText>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontFamily: T.body,
                    fontSize: 9.5,
                    letterSpacing: '0.2em',
                    color: T.goldFlat,
                    textTransform: 'uppercase',
                  }}
                >
                  {o.tag}
                </div>
                <div style={{ fontFamily: T.display, fontSize: 15, color: T.text, marginTop: 4, lineHeight: 1.25 }}>
                  {o.label}
                </div>
                <div style={{ marginTop: 6, fontFamily: T.body, fontSize: 11, color: T.muted }}>
                  Mention code{' '}
                  <span style={{ color: T.silverFlat, letterSpacing: '0.05em', fontWeight: 600 }}>{o.code}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

type SectionHeadProps = {
  eyebrow?: string
  titleSilver: string
  titleGold: string
  sub?: string
  center?: boolean
}
function SectionHead({ eyebrow, titleSilver, titleGold, sub, center = false }: SectionHeadProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        alignItems: center ? 'center' : 'flex-start',
        textAlign: center ? 'center' : 'left',
      }}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 style={{ margin: 0, lineHeight: 0.95 }}>
        <SilverText size={SECTION_TITLE}>{titleSilver}</SilverText>{' '}
        <GoldText size={SECTION_TITLE} style={{ fontStyle: 'italic' }}>
          {titleGold}
        </GoldText>
      </h2>
      {sub && (
        <p
          style={{
            margin: 0,
            fontFamily: T.body,
            fontSize: 'clamp(13.5px, 1.5vw, 16px)',
            color: T.muted,
            lineHeight: 1.6,
            maxWidth: 560,
          }}
        >
          {sub}
        </p>
      )}
    </div>
  )
}

type Service = {
  icon: React.ReactNode
  name: string
  blurb: string
  bullets: string[]
}

const SERVICES: Service[] = [
  {
    icon: I.bolt,
    name: '24/7 Emergency Plumbing',
    blurb: 'Burst pipes, sewer backups, no hot water. Day or night, weekends and holidays.',
    bullets: ['Same-hour dispatch', 'Upfront pricing', 'No overtime fees'],
  },
  {
    icon: I.drop,
    name: 'Leak Detection & Repair',
    blurb: 'Find hidden slab and wall leaks without tearing up your home. Lasting repairs guaranteed.',
    bullets: ['Acoustic & thermal detection', 'Slab leak specialists', '12-month warranty'],
  },
  {
    icon: I.flame,
    name: 'Water Heaters',
    blurb: 'Tank, tankless, gas, and electric — installed, repaired, and replaced same day.',
    bullets: ['Bradford White & Rinnai', 'Tankless conversions', 'Permits handled'],
  },
  {
    icon: I.wrench,
    name: 'Drains & Sewer Lines',
    blurb: 'High-pressure hydro-jetting, camera inspection, and trenchless line replacement.',
    bullets: ['Hydro-jetting', 'Camera inspection', 'Trenchless repair'],
  },
  {
    icon: I.tools,
    name: 'Faucets, Toilets & Fixtures',
    blurb: 'Installs and repairs done clean — running toilets, drips, low pressure, full remodels.',
    bullets: ['Brand-agnostic', 'Bath & kitchen remodels', 'Same-day installs'],
  },
  {
    icon: I.shield,
    name: 'Repipe & New Construction',
    blurb: 'Whole-home copper and PEX repipes, additions, and new builds, permitted and inspected.',
    bullets: ['Copper & PEX', 'ADUs & additions', 'Free in-home estimate'],
  },
]

function ServiceCard({ s, expanded, onToggle }: { s: Service; expanded: boolean; onToggle: () => void }) {
  return (
    <div
      style={{
        borderRadius: 16,
        background: T.card,
        border: '1px solid ' + T.line,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        style={{
          width: '100%',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '16px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          textAlign: 'left',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            minWidth: 48,
            borderRadius: 12,
            background: 'radial-gradient(circle at 30% 20%, rgba(212,175,55,0.22), rgba(212,175,55,0.04) 70%)',
            border: '1px solid rgba(212,175,55,0.28)',
            display: 'grid',
            placeItems: 'center',
            flexShrink: 0,
          }}
        >
          {s.icon}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: T.display, fontSize: 16, color: T.text, fontWeight: 600, lineHeight: 1.2 }}>
            {s.name}
          </div>
          <div
            style={{
              marginTop: 4,
              fontFamily: T.body,
              fontSize: 12.5,
              color: T.muted,
              lineHeight: 1.5,
              display: '-webkit-box',
              WebkitLineClamp: expanded ? 99 : 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {s.blurb}
          </div>
        </div>
        <div style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform .25s', flexShrink: 0 }}>
          {I.chev}
        </div>
      </button>
      {expanded && (
        <div
          style={{
            padding: '0 16px 16px 78px',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            animation: 'cpFade .3s ease',
          }}
        >
          {s.bullets.map((b) => (
            <div
              key={b}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                fontFamily: T.body,
                fontSize: 12.5,
                color: T.text,
              }}
            >
              <span
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  background: T.gold,
                  display: 'grid',
                  placeItems: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1a1407" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l4 4 10-10" />
                </svg>
              </span>
              {b}
            </div>
          ))}
          <a
            href={PHONE_HREF}
            style={{
              marginTop: 6,
              fontFamily: T.body,
              fontSize: 11.5,
              fontWeight: 700,
              color: T.goldFlat,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Call to Schedule →
          </a>
        </div>
      )}
    </div>
  )
}

function Services() {
  const [open, setOpen] = React.useState(0)
  return (
    <section
      style={{ padding: `clamp(36px, 6vw, 72px) ${SECTION_PAD_X} 12px` }}
      data-section="services"
    >
      <div className="cp-wide">
        <SectionHead
          eyebrow="What We Do"
          titleSilver="Full-Service"
          titleGold="Plumbing"
          sub="From a leaky faucet at 2am to a whole-home repipe — one trusted plumber, every job."
        />
        <div className="cp-grid-services">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.name} s={s} expanded={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  const items = [
    { icon: I.award, title: 'Master Plumber', text: '25+ years in the field. Trained the next generation.' },
    { icon: I.shield, title: 'Honest Pricing', text: 'Flat-rate quotes before we lift a wrench.' },
    { icon: I.clock, title: 'On Time, On Site', text: 'You get a real ETA — not a four-hour window.' },
    { icon: I.check, title: 'Workmanship Guarantee', text: '12-month parts & labor on everything we install.' },
  ]
  return (
    <section style={{ padding: `clamp(40px, 6vw, 72px) ${SECTION_PAD_X} 12px` }}>
      <div className="cp-wide">
        <SectionHead eyebrow="The Difference" titleSilver="Why" titleGold="Cisco" />
        <div className="cp-grid-whyus">
          {items.map((it) => (
            <div
              key={it.title}
              style={{
                padding: 14,
                borderRadius: 14,
                background: T.card,
                border: '1px solid ' + T.line,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: 'rgba(212,175,55,0.08)',
                  border: '1px solid rgba(212,175,55,0.25)',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                {it.icon}
              </div>
              <div style={{ fontFamily: T.display, fontSize: 15, color: T.text, fontWeight: 600 }}>{it.title}</div>
              <div style={{ fontFamily: T.body, fontSize: 12, color: T.muted, lineHeight: 1.5, marginTop: -4 }}>
                {it.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section
      style={{ padding: `clamp(40px, 6vw, 72px) ${SECTION_PAD_X} 12px` }}
      data-section="about"
    >
      <div className="cp-wide">
        <SectionHead eyebrow="Meet The Plumber" titleSilver="About" titleGold="Cisco" />
        <div
          style={{
            marginTop: 22,
            padding: 18,
            borderRadius: 18,
            background: 'linear-gradient(180deg, #15151a 0%, #0c0c0f 100%)',
            border: '1px solid ' + T.line,
          }}
        >
          <div className="cp-about-card">
            <div
              className="cp-about-portrait"
              style={{
                width: '100%',
                height: 220,
                borderRadius: 12,
                marginBottom: 16,
                background: 'repeating-linear-gradient(135deg, #1c1c20 0 12px, #16161a 12px 24px)',
                border: '1px solid rgba(212,175,55,0.2)',
                display: 'grid',
                placeItems: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
                  fontSize: 10.5,
                  color: T.goldFlat,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  background: 'rgba(10,10,11,0.85)',
                  padding: '6px 10px',
                  borderRadius: 6,
                  border: '1px solid rgba(212,175,55,0.3)',
                }}
              >
                [ portrait — Cisco at the truck ]
              </div>
            </div>
            <div>
              <h3 style={{ margin: 0, fontFamily: T.display, fontSize: 'clamp(22px, 3vw, 30px)', color: T.text, fontWeight: 600 }}>
                Francisco{' '}
                <span
                  style={{
                    fontStyle: 'italic',
                    background: T.gold,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  &ldquo;Cisco&rdquo;
                </span>{' '}
                Vega
              </h3>
              <div
                style={{
                  marginTop: 4,
                  fontFamily: T.body,
                  fontSize: 11,
                  letterSpacing: '0.18em',
                  color: T.goldFlat,
                  textTransform: 'uppercase',
                }}
              >
                Owner · Master Plumber
              </div>

              <p style={{ marginTop: 14, marginBottom: 0, fontFamily: T.body, fontSize: 'clamp(13.5px, 1.4vw, 15px)', color: T.muted, lineHeight: 1.6 }}>
                Born and raised right here in the valley, Cisco started swinging a wrench alongside his uncle at sixteen.
                After two and a half decades — and more slab leaks than he can count — he opened Cisco Plumbing to do
                things his way: show up on time, charge a fair price, and leave the job cleaner than he found it.
              </p>
              <p style={{ marginTop: 12, marginBottom: 0, fontFamily: T.body, fontSize: 'clamp(13.5px, 1.4vw, 15px)', color: T.muted, lineHeight: 1.6 }}>
                No call centers. No pushy upsells. When you call Cisco Plumbing, you get Cisco — or someone he personally
                trained.
              </p>

              <Divider />

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {([
                  ['25+', 'Years in the trade'],
                  ['100%', 'Family owned'],
                ] as const).map(([n, l]) => (
                  <div
                    key={l}
                    style={{
                      padding: 12,
                      borderRadius: 10,
                      textAlign: 'center',
                      background: 'rgba(255,255,255,0.025)',
                      border: '1px solid rgba(212,175,55,0.12)',
                    }}
                  >
                    <GoldText family={T.display} size="clamp(22px, 2.6vw, 28px)" weight={700}>
                      {n}
                    </GoldText>
                    <div
                      style={{
                        fontFamily: T.body,
                        fontSize: 10,
                        letterSpacing: '0.18em',
                        color: T.muted,
                        textTransform: 'uppercase',
                        marginTop: 4,
                      }}
                    >
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  const reviews = [
    {
      name: 'Maria G.',
      city: 'Anaheim',
      text:
        'Cisco came out at 11pm for a burst pipe under our sink. Quoted us in five minutes, fixed it in an hour, charged us less than the other guys quoted just to show up.',
    },
    {
      name: 'David R.',
      city: 'Orange',
      text:
        "Replaced our water heater the same day I called. Clean install, took the old one, even swept up. This is the only plumber I'll use.",
    },
    {
      name: 'Jenna W.',
      city: 'Fullerton',
      text: 'Honest, fast, and respectful. Walked us through every option, no pressure. Cisco is a real one.',
    },
  ]
  const [i, setI] = React.useState(0)
  return (
    <section style={{ padding: `clamp(40px, 6vw, 72px) ${SECTION_PAD_X} 12px` }}>
      <div className="cp-narrow">
        <SectionHead eyebrow="Neighbors Talk" titleSilver="What Folks" titleGold="Are Saying" />
        <div
          style={{
            marginTop: 22,
            padding: '20px 20px 18px',
            borderRadius: 18,
            background: T.card,
            border: '1px solid ' + T.line,
            position: 'relative',
          }}
        >
          <div
            aria-hidden
            style={{
              position: 'absolute',
              top: -14,
              left: 18,
              fontFamily: T.display,
              fontSize: 64,
              lineHeight: 1,
              color: T.goldFlat,
              opacity: 0.4,
            }}
          >
            &ldquo;
          </div>
          <div style={{ display: 'flex', gap: 3, marginBottom: 10 }}>
            {[0, 1, 2, 3, 4].map((k) => (
              <span key={k} style={{ width: 14, height: 14 }}>
                {I.star}
              </span>
            ))}
          </div>
          <p
            style={{
              margin: 0,
              fontFamily: T.display,
              fontSize: 'clamp(16px, 2vw, 20px)',
              fontStyle: 'italic',
              color: T.text,
              lineHeight: 1.5,
            }}
          >
            {reviews[i].text}
          </p>
          <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: T.body, fontSize: 12.5, color: T.silverFlat, fontWeight: 600 }}>
                {reviews[i].name}
              </div>
              <div
                style={{
                  fontFamily: T.body,
                  fontSize: 10.5,
                  color: T.muted,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  marginTop: 2,
                }}
              >
                {reviews[i].city} · Verified
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
                    background: k === i ? T.gold : 'rgba(255,255,255,0.15)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'width .25s',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 14,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            fontFamily: T.body,
            fontSize: 11,
            color: T.muted,
          }}
        >
          <span style={{ width: 18, height: 18 }}>{I.google}</span>
          <span>5.0 average · 120+ reviews</span>
        </div>
      </div>
    </section>
  )
}

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
    <section
      style={{ padding: `clamp(40px, 6vw, 72px) ${SECTION_PAD_X} 12px` }}
      data-section="area"
    >
      <div className="cp-narrow">
        <SectionHead
          eyebrow="Where We Work"
          titleSilver="Service"
          titleGold="Area"
          sub="Family-run, locally based. Free travel within Orange County."
        />
        <div
          style={{
            marginTop: 22,
            padding: 16,
            borderRadius: 16,
            background: T.card,
            border: '1px solid ' + T.line,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <span style={{ width: 20, height: 20 }}>{I.pin}</span>
            <div
              style={{
                fontFamily: T.body,
                fontSize: 11,
                letterSpacing: '0.2em',
                color: T.goldFlat,
                textTransform: 'uppercase',
              }}
            >
              Orange County, CA
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {cities.map((c) => (
              <span
                key={c}
                style={{
                  padding: '6px 12px',
                  borderRadius: 999,
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(192,192,196,0.18)',
                  fontFamily: T.body,
                  fontSize: 11.5,
                  color: T.text,
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const FAQS = [
  {
    q: 'Do you really answer the phone 24/7?',
    a: 'Yes — Cisco or a trained tech picks up around the clock. For after-hours, expect a callback within ten minutes.',
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
    <section
      style={{ padding: `clamp(40px, 6vw, 72px) ${SECTION_PAD_X} 12px` }}
      data-section="faq"
    >
      <div className="cp-narrow">
        <SectionHead eyebrow="Common Questions" titleSilver="Asked" titleGold="& Answered" />
        <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {FAQS.map((f, i) => (
            <div
              key={f.q}
              style={{
                borderRadius: 12,
                background: T.card,
                border: '1px solid ' + T.line,
                overflow: 'hidden',
              }}
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '14px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  textAlign: 'left',
                  fontFamily: T.body,
                  fontSize: 14,
                  color: T.text,
                  fontWeight: 500,
                }}
              >
                <span style={{ flex: 1 }}>{f.q}</span>
                <span style={{ transform: open === i ? 'rotate(180deg)' : 'none', transition: 'transform .25s' }}>
                  {I.chev}
                </span>
              </button>
              {open === i && (
                <div
                  style={{
                    padding: '0 14px 14px',
                    fontFamily: T.body,
                    fontSize: 13,
                    color: T.muted,
                    lineHeight: 1.6,
                  }}
                >
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

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
    padding: '14px 16px',
    borderRadius: 14,
    background: T.card,
    border: '1px solid ' + T.line,
    textDecoration: 'none',
  }
  const inner = (
    <>
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          background: 'rgba(212,175,55,0.08)',
          border: '1px solid rgba(212,175,55,0.25)',
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
            fontFamily: T.body,
            fontSize: 9.5,
            letterSpacing: '0.22em',
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
          }}
        >
          {value}
        </div>
      </div>
      {href && <span style={{ color: T.goldFlat, fontFamily: T.body, fontSize: 18 }}>→</span>}
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
      style={{ padding: `clamp(40px, 6vw, 72px) ${SECTION_PAD_X} clamp(24px, 4vw, 40px)` }}
      data-section="contact"
      id="contact"
    >
      <div className="cp-narrow">
        <SectionHead
          eyebrow="Get In Touch"
          titleSilver="Let's Get"
          titleGold="It Fixed"
          sub="Call or email any time — we answer 24/7. Quotes are flat-rate and given before any work starts."
        />
        <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <ContactRow icon={I.phone} label="Phone" value={PHONE} href={PHONE_HREF} />
          <ContactRow icon={I.mail} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
          <ContactRow icon={I.clock} label="Hours" value="Open 24 Hours · 7 Days" />
          <ContactRow icon={I.pin} label="Service Area" value="Orange County, CA" />
        </div>
        <div style={{ marginTop: 18, display: 'flex', justifyContent: 'center' }}>
          <GoldButton href={PHONE_HREF}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#1a1407">
                <path d="M22 16.92v3a2 2 0 01-2.18 2A19.86 19.86 0 012.06 4.18 2 2 0 014.05 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              Call {PHONE}
            </span>
          </GoldButton>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer
      style={{
        padding: `clamp(28px, 4vw, 56px) ${SECTION_PAD_X} clamp(110px, 12vw, 140px)`,
        textAlign: 'center',
        borderTop: '1px solid ' + T.line,
        background: 'linear-gradient(180deg, transparent, rgba(212,175,55,0.04))',
      }}
    >
      <Image
        src="/logo.png"
        alt=""
        width={56}
        height={56}
        style={{ borderRadius: 12, boxShadow: '0 4px 20px rgba(212,175,55,0.25)' }}
      />
      <div style={{ marginTop: 12, fontFamily: T.display, fontSize: 18, color: T.text, fontWeight: 600 }}>
        Cisco Plumbing
      </div>
      <div
        style={{
          marginTop: 4,
          fontFamily: T.body,
          fontSize: 10,
          letterSpacing: '0.2em',
          color: T.goldFlat,
          textTransform: 'uppercase',
        }}
      >
        Honest Work · Fair Prices · Done Right
      </div>
      <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center', gap: 10 }}>
        {[I.insta, I.fb, I.google].map((ic, i) => (
          <a
            key={i}
            href="#"
            aria-label="Social link"
            style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              background: 'rgba(255,255,255,0.03)',
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
      <div style={{ marginTop: 18, fontFamily: T.body, fontSize: 10, color: T.muted, lineHeight: 1.7 }}>
        © 2026 Cisco Plumbing · Lic. #1198432
        <br />
        Bonded &amp; Insured · 24/7 Emergency Service
      </div>
    </footer>
  )
}

function StickyCall() {
  return (
    <div
      className="cp-sticky-call"
      style={{
        position: 'fixed',
        left: 14,
        right: 14,
        bottom: 16,
        zIndex: 30,
        pointerEvents: 'none',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <a
        href={PHONE_HREF}
        style={{
          pointerEvents: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          padding: '14px 18px',
          borderRadius: 999,
          background: T.gold,
          color: '#1a1407',
          textDecoration: 'none',
          fontFamily: T.body,
          fontWeight: 800,
          fontSize: 14,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          width: '100%',
          maxWidth: 440,
          boxShadow:
            '0 16px 38px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.55), inset 0 -1px 0 rgba(120,80,10,0.4)',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#1a1407">
          <path d="M22 16.92v3a2 2 0 01-2.18 2A19.86 19.86 0 012.06 4.18 2 2 0 014.05 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
        </svg>
        Call Cisco Now · {PHONE}
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
      <Offers />
      <Services />
      <WhyUs />
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
