import { useCallback, useRef } from 'react';

type SoundType = 'add' | 'remove' | 'success' | 'error';

export const useAudio = () => {
  const audioContextRef = useRef<AudioContext | null>(null);

  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioContextRef.current;
  }, []);

  const playSound = useCallback((type: SoundType) => {
    const context = getAudioContext();
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(context.destination);

    // Configure sound based on type
    switch (type) {
      case 'add':
        oscillator.frequency.value = 600;
        oscillator.type = 'sine';
        gainNode.gain.setValueAtTime(0.3, context.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.1);
        oscillator.start(context.currentTime);
        oscillator.stop(context.currentTime + 0.1);
        break;

      case 'remove':
        oscillator.frequency.value = 400;
        oscillator.type = 'sine';
        gainNode.gain.setValueAtTime(0.2, context.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.15);
        oscillator.start(context.currentTime);
        oscillator.stop(context.currentTime + 0.15);
        break;

      case 'success':
        // Play a chord
        [523.25, 659.25, 783.99].forEach((freq, i) => {
          const osc = context.createOscillator();
          const gain = context.createGain();
          osc.connect(gain);
          gain.connect(context.destination);
          osc.frequency.value = freq;
          osc.type = 'sine';
          gain.gain.setValueAtTime(0.2, context.currentTime + i * 0.1);
          gain.gain.exponentialRampToValueAtTime(0.01, context.currentTime + i * 0.1 + 0.5);
          osc.start(context.currentTime + i * 0.1);
          osc.stop(context.currentTime + i * 0.1 + 0.5);
        });
        break;

      case 'error':
        oscillator.frequency.value = 200;
        oscillator.type = 'sawtooth';
        gainNode.gain.setValueAtTime(0.15, context.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.2);
        oscillator.start(context.currentTime);
        oscillator.stop(context.currentTime + 0.2);
        break;
    }
  }, [getAudioContext]);

  return { playSound };
};
