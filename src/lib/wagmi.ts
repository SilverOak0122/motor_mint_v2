import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'MotorMint',
  projectId: 'demo-motormint-project', // Replace with your WalletConnect Cloud project ID for production
  chains: [mainnet],
  ssr: false,
});
