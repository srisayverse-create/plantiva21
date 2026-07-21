import React from 'react';
import { ShieldCheck, Sparkles, Wind, Plane, HeartPulse, MessageSquare, Sprout } from 'lucide-react';

interface ServiceIconProps {
  name: string;
  size?: number;
  color?: string;
}

export default function ServiceIcon({ name, size = 24, color }: ServiceIconProps) {
  const iconMap: Record<string, React.ComponentType<{ size: number; color?: string }>> = {
    "🌿": ShieldCheck,
    "🪴": Sparkles,
    "🍃": Wind,
    "✈️": Plane,
    "💚": HeartPulse,
    "💬": MessageSquare
  };

  const IconComponent = iconMap[name] || Sprout;
  return <IconComponent size={size} color={color} />;
}
