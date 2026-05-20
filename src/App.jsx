import Header from './components/Header'
import Hero from './components/Hero'
import SeriesNavigator from './components/SeriesNavigator'
import BenefitsSection from './components/BenefitsSection'
import ProtocolSection from './components/ProtocolSection'
import B2BSection from './components/B2BSection'
import BuySection from './components/BuySection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="grain">
      <Header />
      <main>
        <Hero />
        <SeriesNavigator />
        <BenefitsSection />
        <ProtocolSection />
        <B2BSection />
        <BuySection />
      </main>
      <Footer />
    </div>
  )
}
