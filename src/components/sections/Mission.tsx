import { TextAnimate } from "@/components/magicui/text-animate"
import { Check } from "lucide-react"

export function Mission() {
  const benefits = [
    "Acesso Antecipado",
    "Desconto Exclusivo de Fundador", 
    "Voz Ativa no Produto"
  ]

  return (
    <section className="py-20 bg-guido-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <TextAnimate 
            animation="blurInUp" 
            by="word" 
            className="text-4xl md:text-5xl font-bold mb-6 text-guido-text"
          >
            Por Trás da Inteligência
          </TextAnimate>
          
          <p className="text-xl text-gray-300 mb-12">
            Guido foi criado para libertar o corretor da sobrecarga digital, permitindo foco total nas pessoas e negociações.
          </p>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-guido-text mb-8">
              Ao entrar na lista de espera, você garante:
            </h3>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center space-x-3">
                  <Check className="w-5 h-5 text-[#00F6FF] flex-shrink-0" />
                  <span className="text-xl text-guido-text">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}