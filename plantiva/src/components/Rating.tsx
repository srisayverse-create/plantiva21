import React from 'react';
import { C } from '../constants/designSystem';

const Star = ({ filled }: { filled: boolean }) => (
  <span style={{ color: filled ? C.gold : "#D1D5DB", fontSize: 14 }}>★</span>
);

export default function Rating({ value, count }: { value: number; count: number }) {
  return (
    <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} filled={i <= Math.round(value)} />
      ))}
      <span style={{ color: C.textLight, fontSize: 13 }}>{value} ({count})</span>
    </span>
  );
}
