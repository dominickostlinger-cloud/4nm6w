import React, { useState, useEffect } from 'react';
import { Brain, Twitter, MessageCircle, Copy, Check, Zap, TrendingUp, Users, Star, Rocket, Target, Shield, Globe } from 'lucide-react';

function App() {
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contractAddress = 'NyvzWGqVPvNANsfjS8qbpBaFg81VZfKSZJV6pgzvLKw';

  const copyCA = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse animation-delay-6000"></div>
      </div>

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-pink-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-bounce opacity-60 animation-delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-5 h-5 bg-purple-400 rounded-full animate-bounce opacity-60 animation-delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-yellow-400 rounded-full animate-bounce opacity-60 animation-delay-3000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-14 h-14 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="text-3xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                $BRAIN
              </span>
              <div className="text-xs text-green-400 font-semibold">● LIVE NOW</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://t.me/+5JUFhHohSIQ0YWVk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <a 
              href="https://x.com/BRAIN__LET" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gradient-to-r from-gray-700 to-black rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-gray-500/25"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            {/* Main Logo and Title */}
            <div className="mb-12">
              <div className="w-64 h-64 mx-auto mb-8 relative">
                <img 
                  src="/public/Brain_Character_with_Rocket_Logo.png" 
                  alt="$BRAIN Logo" 
                  className="w-full h-full object-contain animate-float"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
              </div>

              <h1 className="text-7xl md:text-9xl font-black mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                $BRAIN
              </h1>
              
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full">
                  <span className="text-green-400 font-bold text-lg">🚀 LAUNCHED!</span>
                </div>
                <div className="px-4 py-2 bg-pink-500/20 border border-pink-500/50 rounded-full">
                  <span className="text-pink-400 font-bold text-lg">🧠 SMART MONEY</span>
                </div>
              </div>
              
              <p className="text-2xl md:text-3xl mb-4 text-gray-200 max-w-3xl mx-auto font-bold">
                THE SMARTEST MEMECOIN IN THE UNIVERSE
              </p>
              
              <p className="text-lg mb-8 text-purple-300 max-w-2xl mx-auto">
                Join the revolution of intelligent investing. $BRAIN combines meme culture with smart tokenomics for maximum gains! 🧠💎
              </p>
            </div>

            {/* Contract Address */}
            <div className="mb-12 max-w-4xl mx-auto">
              <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-8 border border-pink-500/30 shadow-2xl">
                <h3 className="text-xl font-bold mb-4 text-pink-400">CONTRACT ADDRESS</h3>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                  <div className="bg-black/60 rounded-2xl p-4 flex-1 max-w-2xl">
                    <span className="text-sm md:text-base font-mono text-cyan-400 break-all">
                      {contractAddress}
                    </span>
                  </div>
                  <button
                    onClick={copyCA}
                    className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-4 rounded-2xl hover:scale-105 transition-all duration-300 font-bold shadow-lg"
                  >
                    {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    <span>{copied ? 'COPIED!' : 'COPY CA'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-16">
              <a 
                href={`https://dexscreener.com/solana/${contractAddress}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-4 rounded-2xl hover:scale-105 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-green-500/25"
              >
                <TrendingUp className="w-6 h-6" />
                <span>VIEW CHART</span>
              </a>
              <a 
                href="https://t.me/+5JUFhHohSIQ0YWVk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 rounded-2xl hover:scale-105 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-blue-500/25"
              >
                <MessageCircle className="w-6 h-6" />
                <span>JOIN TELEGRAM</span>
              </a>
              <a 
                href="https://x.com/BRAIN__LET" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-gradient-to-r from-gray-700 to-black px-8 py-4 rounded-2xl hover:scale-105 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-gray-500/25"
              >
                <Twitter className="w-6 h-6" />
                <span>FOLLOW X</span>
              </a>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-black/30 backdrop-blur-lg rounded-3xl p-8 border border-pink-500/30 hover:border-pink-500/60 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-pink-400 text-center">SMART TECH</h3>
              <p className="text-gray-300 text-center">Advanced AI-powered tokenomics for maximum efficiency</p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-lg rounded-3xl p-8 border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-cyan-400 text-center">MOON MISSION</h3>
              <p className="text-gray-300 text-center">Built for exponential growth and diamond hands</p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-400 text-center">STRONG COMMUNITY</h3>
              <p className="text-gray-300 text-center">Powered by the smartest degens in crypto</p>
            </div>

            <div className="bg-black/30 backdrop-blur-lg rounded-3xl p-8 border border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-yellow-400 text-center">SAFE & SECURE</h3>
              <p className="text-gray-300 text-center">Audited smart contracts and locked liquidity</p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-8 mb-16 border border-gradient-to-r from-pink-500/30 to-cyan-500/30">
            <h2 className="text-4xl font-black text-center mb-8 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              WHY $BRAIN?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-black text-pink-400 mb-2">🧠</div>
                <h3 className="text-xl font-bold text-pink-400 mb-2">INTELLIGENT DESIGN</h3>
                <p className="text-gray-300">Every decision backed by data and community wisdom</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-cyan-400 mb-2">🚀</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">MOON POTENTIAL</h3>
                <p className="text-gray-300">Designed for parabolic growth and long-term success</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-purple-400 mb-2">💎</div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">DIAMOND HANDS</h3>
                <p className="text-gray-300">Strong tokenomics reward holders and punish paper hands</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mb-16">
            <div className="bg-gradient-to-r from-pink-500/20 to-cyan-500/20 backdrop-blur-lg rounded-3xl p-12 border border-gradient-to-r from-pink-500/50 to-cyan-500/50">
              <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                READY TO GET SMART?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Join thousands of smart investors who chose $BRAIN. The future of memecoins is here! 🧠🚀
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
                <a 
                  href={`https://jup.ag/swap/SOL-${contractAddress}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 bg-gradient-to-r from-green-500 to-emerald-500 px-10 py-5 rounded-2xl hover:scale-105 transition-all duration-300 font-black text-xl shadow-lg hover:shadow-green-500/25"
                >
                  <Zap className="w-7 h-7" />
                  <span>BUY $BRAIN NOW</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-12 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full flex items-center justify-center">
              <Brain className="w-6 h-6" />
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              $BRAIN
            </span>
          </div>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-gray-400">The smartest investment in crypto</span>
            <Star className="w-5 h-5 text-yellow-400" />
          </div>
          <p className="text-sm text-gray-500 mb-4">
            $BRAIN - Where intelligence meets the moon 🧠🚀
          </p>
          <p className="text-xs text-gray-600">
            Disclaimer: Cryptocurrency investments carry risk. Do your own research.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;