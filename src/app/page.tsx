"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import PlayfulHero from '@/components/sections/layouts/hero/BillboardHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import WalletFooter from '@/components/sections/layouts/footer/WalletFooter';
import { DollarSign } from 'lucide-react';

const theme: SiteTheme = { styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' };

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          logoSrc="/images/logo.svg"
          logoAlt="BrainRot MEME logo"
          brandName="BrainRot MEME"
          navItems={[
            { name: 'hero', id: 'hero' },
            { name: 'about', id: 'about' },
            { name: 'faq', id: 'faq' },
            { name: 'how to buy', id: 'how-to-buy' },
            { name: 'tokenomics', id: 'tokenomics' },
            { name: 'footer', id: 'footer' }
          ]}
        />
      </div>
      <div id="hero" data-section="hero">
        <PlayfulHero title="Join the Meme Revolution with BrainRot!" subtitle="A community-owned memecoin designed for fun and profit!" />
      </div>
      <div id="about" data-section="about">
        <SocialsAbout title="About BrainRot" descriptions={[
          "BrainRot is a playful, community-owned memecoin built by and for holders.",
          "Join us on our journey to become the next big thing in crypto!"
        ]} />
      </div>
      <div id="faq" data-section="faq">
        <CentralFAQ items={[{ title: 'What is BrainRot?', content: 'A community-driven memecoin' }, { title: 'How do I buy BrainRot?', content: 'Follow our simple 2-step guide.' }, { title: 'What are the benefits of holding BrainRot?', content: 'You can join a vibrant community!' }, { title: 'How is BrainRot different?', content: 'We prioritize community involvement and fun.' }]} />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D variant="reveal" />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <PatternTokenomics title="Tokenomics" description="Discover how BrainRot's tokenomics drive growth and value!" kpiItems={[{ value: '50M', description: 'Total Supply', icon: DollarSign }, { value: '10M', description: 'Market Cap', icon: DollarSign }, { value: '5M', description: 'Liquidity', icon: DollarSign }]} />
      </div>
      <div id="footer" data-section="footer">
        <WalletFooter
          logoText="BrainRot MEME"
          walletAddress="0x1234567890abcdef"
          copyButtonText="Copy BrainRot Wallet"
          copiedText="Wallet Address Copied"
          copyrightText="© 2025 BrainRot. All rights reserved."
        />
      </div>
    </SiteThemeProvider>
  );
}