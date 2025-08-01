import { Input } from "@/components/ui/input"
import { CTAButton } from "@/components/ui/cta-button"
import { useState } from "react"

export function CTA() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implementar lógica de inscrição
    console.log("Email inscrito (CTA):", email)
  }

  return (
    <section className="py-20 bg-guido-primary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-guido-text mb-6">
            O futuro da corretagem começa aqui. Seja o primeiro a saber.
          </h2>
          
          {/* Formulário consistente com a seção Hero */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mt-12">
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
              Quero acesso antecipado
            </CTAButton>
          </form>
        </div>
      </div>
    </section>
  )
}