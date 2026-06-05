import React from 'react';

export type Transfer = {
  id: string;
  name: string;
  seats: string; // e.g., "4+1"
  fare: string; // e.g., "₹2,499.00"
  luggage: 'Standard' | 'Large' | 'XL';
  note?: string; // e.g., MOST BOOKED, PREMIUM
};

const defaultTransfers: Transfer[] = [
  { id: 'sedan', name: 'Sedan', seats: '4+1', fare: '₹2,499.00', luggage: 'Standard', note: 'MOST BOOKED' },
  { id: 'etios', name: 'Etios Airport Taxi', seats: '4+1', fare: '₹2,499.00', luggage: 'Standard' },
  { id: 'ciaz', name: 'Ciaz Airport Taxi', seats: '4+1', fare: '₹2,699.00', luggage: 'Standard' },
  { id: 'ertiga', name: 'Ertiga Airport Taxi', seats: '6+1', fare: '₹3,499.00', luggage: 'Standard', note: 'FAMILY PICK' },
  { id: 'carens', name: 'Kia Carens Airport Taxi', seats: '6+1', fare: '₹3,499.00', luggage: 'Standard' },
  { id: 'innova', name: 'Innova Airport Taxi', seats: '7+1', fare: '₹3,799.00', luggage: 'Large' },
  { id: 'crysta', name: 'Innova Crysta Airport Taxi', seats: '7+1', fare: '₹4,499.00', luggage: 'Large', note: 'PREMIUM' },
  { id: 'tempo', name: 'Tempo Traveller For Airport', seats: '12+1', fare: '₹7,499.00', luggage: 'XL' },
];

type Props = {
  transfers?: Transfer[];
  onBook?: (t: Transfer) => void;
};

const containerStyle: React.CSSProperties = {
  fontFamily: 'Inter, Roboto, system-ui, -apple-system, "Segoe UI", sans-serif',
  maxWidth: 900,
  margin: '0 auto',
  padding: 16,
  color: '#111827',
};
const headerStyle: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 };
const gridStyle: React.CSSProperties = { display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' };
const cardStyle: React.CSSProperties = { border: '1px solid #e5e7eb', borderRadius: 8, padding: 12, background: '#fff', boxShadow: '0 1px 2px rgba(0,0,0,0.03)' };
const titleRowStyle: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 };
const smallBadgeStyle: React.CSSProperties = { background: '#f3f4f6', color: '#374151', padding: '2px 8px', borderRadius: 999, fontSize: 12 };
const actionsStyle: React.CSSProperties = { display: 'flex', gap: 8, marginTop: 10 };
const btnStyle: React.CSSProperties = { flex: '1 1 auto', padding: '8px 10px', borderRadius: 6, border: 'none', cursor: 'pointer' };

export const AirportTransfers: React.FC<Props> = ({ transfers = defaultTransfers, onBook }) => {
  const handleBook = (t: Transfer) => {
    if (onBook) return onBook(t);
    // fallback: open a mailto / booking placeholder
    window.alert(`Booking requested:\n${t.name} — ${t.fare}`);
  };

  const handleCall = (t: Transfer) => {
    // placeholder number - replace with actual provider phone if available
    const phone = 'tel:+919000000000';
    window.location.href = phone;
  };

  const handleWA = (t: Transfer) => {
    const text = encodeURIComponent(`Hi, I want to book ${t.name} (${t.seats}) from Pondicherry to Chennai Airport. Fare: ${t.fare}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2 style={{ margin: 0 }}>Airport Transfers — Pondicherry ⇄ Chennai Airport</h2>
        <div style={{ color: '#6b7280' }}>Reliable Pondy ↔ Chennai transfers</div>
      </div>

      <div style={gridStyle}>
        {transfers.map((t) => (
          <div key={t.id} style={cardStyle} aria-label={t.name}>
            <div style={titleRowStyle}>
              <div>
                <div style={{ fontWeight: 600 }}>{t.name}</div>
                <div style={{ color: '#6b7280', fontSize: 13 }}>{t.seats} • Luggage: {t.luggage}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 700 }}>{t.fare}</div>
                {t.note && <div style={{ marginTop: 6 }}><span style={smallBadgeStyle}>{t.note}</span></div>}
              </div>
            </div>

            <div style={actionsStyle}>
              <button
                onClick={() => handleBook(t)}
                style={{ ...btnStyle, background: '#0ea5a4', color: 'white' }}
                aria-label={`Book ${t.name}`}>
                Book
              </button>

              <button
                onClick={() => handleCall(t)}
                style={{ ...btnStyle, background: '#f3f4f6', color: '#111827' }}
                aria-label={`Call for ${t.name}`}>
                Call
              </button>

              <button
                onClick={() => handleWA(t)}
                style={{ ...btnStyle, background: '#25D366', color: 'white' }}
                aria-label={`WhatsApp for ${t.name}`}>
                WA
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 14, color: '#6b7280', fontSize: 13 }}>
        Toll: Optional • Luggage sizes shown • Prices subject to change
      </div>
    </div>
  );
};

export default AirportTransfers;

/*
Usage (in a React app):
import React from 'react';
import AirportTransfers from './AirportTransfers';

function App(){
  return <AirportTransfers />;
}

export default App;
*/
