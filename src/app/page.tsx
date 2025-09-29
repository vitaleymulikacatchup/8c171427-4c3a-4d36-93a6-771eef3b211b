"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import PlayfulHero from '@/components/sections/layouts/hero/BillboardHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import WalletFooter from '@/components/sections/layouts/footer/WalletFooter';

const theme: SiteTheme = { styleVariant: 'brain_rot', colorTemplate: 2, textAnimation: 'highlight' };

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logo-for-b-1759143260668-ef9ce8a0.jpg"
          logoAlt="BrainRot MEME logo"
          brandName="BrainRot MEME"
          navItems={[
            { name: '#hero', id: 'hero' },
            { name: '#about', id: 'about' },
            { name: '#faq', id: 'faq' },
            { name: '#how-to-buy', id: 'how-to-buy' },
            { name: '#tokenomics', id: 'tokenomics' },
            { name: '#footer', id: 'footer' }
          ]}
        />
      </div>
      <div id="hero" data-section="hero">
        <PlayfulHero title="Welcome to BrainRot Memecoin" subtitle="Join the fun of memecoins with community-driven features!" />
      </div>
      <div id="about" data-section="about">
        <SocialsAbout title="About BrainRot" descriptions={["BrainRot is a playful, community-driven memecoin.", "Join us on our journey to become the next big thing in crypto!"]} />
      </div>
      <div id="faq" data-section="faq">
        <CentralFAQ items={[{ title: 'What is BrainRot?', content: 'It’s a memecoin for the community!' }, { title: 'How do I buy BrainRot?', content: 'Follow the steps in the How-To-Buy section.' }]} />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D variant="reveal" />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <PatternTokenomics title="Tokenomics" description="Understanding the numbers behind BrainRot" kpiItems={[{ value: '50M', description: 'Total Supply', icon: 'DollarSign' }]} />
      </div>
      <div id="footer" data-section="footer">
        <WalletFooter
          logoText="BrainRot MEME"
          walletAddress="0x1234567890abcdef"
          copyButtonText="Copy"
          copiedText="Copied!"
          copyrightText="© 2023 BrainRot. All rights reserved."
        />
      </div>
    </SiteThemeProvider>
  );
}