import { MessageSquare, Database, Brain } from "lucide-react"
import { Card } from "@/components/ui/card"

export function Features() {
  const features = [
    {
      icon: MessageSquare,
      title: "Guia de Conversas",
      description: "Receba sugestões inteligentes para cada interação com clientes, baseadas no contexto e histórico."
    },
    {
      icon: Database,
      title: "CRM Automatizado",
      description: "Atualização automática de dados e acompanhamento de leads sem trabalho manual."
    },
    {
      icon: Brain,
      title: "Memória Inteligente",
      description: "Lembra de todos os detalhes importantes e sugere follow-ups no momento certo."
    }
  ]

  return (
    <section className="py-20 bg-guido-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-guido-text mb-6">
            Inteligência que gera resultados.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-[#161B22] p-8 rounded-2xl border-0 hover:border-guido-secondary/20 transition-all duration-300"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-guido-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-6 h-6 text-guido-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-guido-text mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}