'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const reasons = ['Too expensive', 'I have too much product', 'Taking a break', 'Found a cheaper alternative', 'Product didn\'t work for me', 'Other reason'];

export default function PausePage() {
  const [selected, setSelected] = useState('');
  const [step, setStep] = useState('choose'); // choose | offer | done
  const router = useRouter();

  const handlePause = () => {
    if (!selected) return;
    // Show retention offer for cost/price reason
    if (selected === 'Too expensive' || selected === 'Found a cheaper alternative') {
      setStep('offer');
    } else {
      setStep('done');
    }
  };

  if (step === 'done') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-10 text-center shadow-xl border border-gray-100">
          <span className="material-symbols-outlined text-amber-400 mb-4 block" style={{ fontSize: '64px', fontVariationSettings: "'FILL' 1" }}>pause_circle</span>
          <h1 className="text-3xl font-black text-gray-900 mb-3">Subscription Paused</h1>
          <p className="text-gray-500 mb-8">Your deliveries are paused. You can resume anytime from your account.</p>
          <Link href="/account/subscriptions" className="block w-full bg-gradient-to-r from-[#e040a0] to-[#c0208a] text-white py-4 rounded-full font-black text-lg hover:opacity-90 transition-opacity mb-3">
            Back to Subscriptions
          </Link>
          <Link href="/" className="block text-gray-400 text-sm hover:text-gray-600 transition-colors">Go to Homepage</Link>
        </div>
      </div>
    );
  }

  if (step === 'offer') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-lg w-full">
          <div className="bg-gradient-to-br from-[#e040a0] to-[#c0208a] text-white rounded-3xl p-8 text-center mb-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 text-9xl flex items-center justify-center font-black">%</div>
            <div className="relative z-10">
              <p className="text-pink-200 font-bold text-sm uppercase tracking-widest mb-3">Before you go...</p>
              <h1 className="text-4xl font-black mb-4">Wait! Get an Extra 20% Off</h1>
              <p className="text-pink-100 text-lg mb-6">We don't want to lose you. Use code <strong className="bg-white/20 px-2 py-0.5 rounded">STAYCLEAN20</strong> for an extra 20% off your next 3 deliveries.</p>
              <div className="text-5xl font-black mb-2">20% OFF</div>
              <p className="text-pink-200 text-sm">Applied automatically on your next delivery</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <p className="font-black text-gray-900 text-lg mb-6">What would you like to do?</p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => router.push('/account/subscriptions')}
                className="w-full bg-gradient-to-r from-[#e040a0] to-[#c0208a] text-white py-4 rounded-full font-black text-lg hover:opacity-90 transition-opacity shadow-lg"
              >
                ✓ Claim 20% Off & Keep Subscription
              </button>
              <button
                onClick={() => setStep('done')}
                className="w-full border-2 border-gray-200 text-gray-500 py-3 rounded-full font-bold hover:border-gray-300 transition-colors"
              >
                No thanks, pause anyway
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-lg mx-auto">
        <Link href="/account/subscriptions" className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors mb-8 text-sm">
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span> Back to Subscriptions
        </Link>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <div className="text-center mb-8">
            <span className="material-symbols-outlined text-amber-400 mb-3 block" style={{ fontSize: '48px', fontVariationSettings: "'FILL' 1" }}>pause_circle</span>
            <h1 className="text-2xl font-black text-gray-900 mb-2">Pause your subscription?</h1>
            <p className="text-gray-500">We'd love to know why so we can improve!</p>
          </div>

          <p className="text-sm font-bold text-gray-700 mb-4">Reason for pausing</p>
          <div className="space-y-2 mb-8">
            {reasons.map(r => (
              <label key={r} className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer border-2 transition-all ${selected === r ? 'border-[#e040a0] bg-pink-50' : 'border-gray-100 hover:border-gray-300'}`}>
                <input
                  type="radio"
                  name="reason"
                  value={r}
                  checked={selected === r}
                  onChange={() => setSelected(r)}
                  className="text-[#e040a0] w-4 h-4 flex-shrink-0"
                />
                <span className={`text-sm font-medium ${selected === r ? 'text-[#e040a0] font-bold' : 'text-gray-700'}`}>{r}</span>
              </label>
            ))}
          </div>

          <button
            onClick={handlePause}
            disabled={!selected}
            className="w-full bg-gray-900 text-white py-4 rounded-full font-black text-lg hover:bg-gray-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Pause Subscription
          </button>
        </div>
      </div>
    </div>
  );
}
