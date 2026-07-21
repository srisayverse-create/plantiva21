import React from 'react';
import { Leaf } from 'lucide-react';
import { C } from '../constants/designSystem';

export default function PlantIcon({ size = 40 }: { size?: number }) {
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: "50%",
      background: C.accentPale,
      color: C.primaryMid,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Leaf size={size * 0.5} />
    </div>
  );
}
