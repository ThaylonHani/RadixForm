"use client";

import React from 'react';
import * as Progress from '@radix-ui/react-progress';

export function Loading() {
    const [progress, setProgress] = React.useState(1);
  
    React.useEffect(() => {
      const timer = setTimeout(() => setProgress(100), 500);
      return () => clearTimeout(timer);
    }, []);
  
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center " >
            {progress < 100 ? 'Carregando...' : 'Conta criada' }
         <Progress.Root  className="relative  bg-[var(--mysterySpace)] rounded-full w-80 h-7 " value={progress}>
        <Progress.Indicator
          className="bg-[var(--CoolColor)] w-full h-full rounded-xl duration-1000 transition-all ease-in-out "
          style={{ transform: `translateX(-${100 - progress}%)` }}
            />
            </Progress.Root>
            
        </div>
    );
  };
  