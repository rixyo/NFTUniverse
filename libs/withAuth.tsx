import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useSigner from '../context/signer';

export const withAuth = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const { isConnected } = useSigner();
    const router = useRouter();

    useEffect(() => {
      if (!isConnected) {
        router.push('/');
      }
    }, [isConnected, router]);

    if (!isConnected) {
      // Return an empty div if not connected to prevent component from flashing on screen
      return <div />;
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};