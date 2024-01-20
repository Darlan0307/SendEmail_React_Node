import Lottie from 'lottie-web';
import { useEffect, useRef } from 'react';
import animationData from '../../../Animations/checked.json';

const CheckedAnimation = () => {
  const lottieContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const instance = Lottie.loadAnimation({
      container: lottieContainer.current as HTMLDivElement,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
    });

    return () => instance.destroy();
  }, []);

  return <div ref={lottieContainer} style={{ width: '100%', height: '100%' }} />;
};

export default CheckedAnimation;