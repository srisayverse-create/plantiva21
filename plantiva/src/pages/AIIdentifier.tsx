import React from 'react';
import { Camera, AlertCircle, RefreshCw } from 'lucide-react';

export default function AIIdentifier() {
  const [isScanning, setIsScanning] = React.useState(false);
  const [result, setResult] = React.useState<string | null>(null);

  const handleScan = () => {
    setIsScanning(true);
    setResult(null);
    setTimeout(() => {
      setIsScanning(false);
      setResult('Monstera Deliciosa (Healthy) - Nitrogen levels are stable, suggest checking water levels in 2 days.');
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-emerald-950 text-emerald-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4">AI Plant Diagnostic</h1>
          <p className="text-emerald-300/70">Upload a photo of your plant or leaves to scan for health stats and diseases.</p>
        </div>

        <div className="p-8 rounded-3xl bg-emerald-900/10 border border-emerald-800/20 backdrop-blur-md relative overflow-hidden flex flex-col items-center justify-center">
          {/* Scanner Overlay Line */}
          {isScanning && (
            <div className="absolute inset-x-0 top-0 h-1 bg-emerald-400 animate-bounce shadow-[0_0_15px_rgba(52,211,153,0.8)]" />
          )}

          <div className="w-64 h-64 border-2 border-dashed border-emerald-700/60 rounded-2xl flex flex-col items-center justify-center bg-emerald-950/40 mb-8 relative">
            {isScanning ? (
              <RefreshCw className="h-12 w-12 text-emerald-400 animate-spin" />
            ) : (
              <>
                <Camera className="h-12 w-12 text-emerald-400 mb-3" />
                <span className="text-sm text-emerald-300/60">No image selected</span>
              </>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button
              onClick={handleScan}
              disabled={isScanning}
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:bg-emerald-800 text-emerald-950 font-bold transition-all flex items-center justify-center gap-2"
            >
              <Camera className="h-5 w-5" />
              {isScanning ? 'Scanning...' : 'Capture / Upload Image'}
            </button>
          </div>

          {result && (
            <div className="mt-8 p-6 rounded-2xl bg-emerald-900/30 border border-emerald-500/20 w-full animate-fade-in">
              <div className="flex gap-3">
                <AlertCircle className="h-6 w-6 text-emerald-400 shrink-0" />
                <div>
                  <h3 className="font-bold text-emerald-200 mb-1">Analysis Completed</h3>
                  <p className="text-sm text-emerald-300">{result}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
