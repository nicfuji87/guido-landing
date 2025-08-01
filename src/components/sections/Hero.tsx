import { TextAnimate } from "@/components/magicui/text-animate"
import { CTAButton } from "@/components/ui/cta-button"
import { GuidoLogo } from "@/components/ui/guido-logo"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function Hero() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implementar lógica de inscrição
    console.log("Email inscrito:", email)
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background com gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-radial from-guido-secondary/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <GuidoLogo size="lg" className="mb-8" />
        
        <TextAnimate 
          animation="blurInUp" 
          by="word" 
          className="text-6xl md:text-7xl font-bold mb-6 text-guido-text"
        >
          O guia inteligente do corretor
        </TextAnimate>
        
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-[600px] mx-auto">
          Guido é a inteligência artificial que guia suas conversas, automatiza seu CRM e encontra as melhores respostas para você fechar mais negócios.
        </p>
        
        {/* Formulário horizontal */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#161B22] border-[#30363d] focus:border-[#00F6FF] focus:border-2 text-guido-text placeholder-[#8b949e] flex-1"
            required
          />
          <CTAButton 
            type="submit"
            className="bg-[#00F6FF] text-[#0D1117] font-bold hover:scale-105 transition-transform duration-200 whitespace-nowrap"
          >
            Entrar na lista de espera
          </CTAButton>
        </form>
      </div>
    </section>
  )
}