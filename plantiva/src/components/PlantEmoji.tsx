import React from 'react';
import { Leaf, Sprout, Trees, TreeDeciduous, Flower, Flower2 } from 'lucide-react';
import { C } from '../constants/designSystem';

export default function PlantEmoji({ name, size = 80 }: { name: string; size?: number }) {
  const iconMap: Record<string, React.ComponentType<{ size: number; color?: string }>> = {
    "Areca Palm": Trees,
    "Snake Plant": Sprout,
    "Peace Lily": Flower,
    "ZZ Plant": Leaf,
    "Rubber Plant": TreeDeciduous,
    "Money Plant": Flower2
  };

  const IconComponent = iconMap[name] || Sprout;

  return (
    <div style={{
      width: size,
      height: size,
      background: C.accentPale,
      borderRadius: 12,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: C.primaryMid
    }}>
      <IconComponent size={size * 0.5} />
    </div>
  );
}
