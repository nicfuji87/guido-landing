import { MessageSquare, Clock, AlertCircle } from "lucide-react"
import { Card } from "@/components/ui/card"

export function Problem() {
  const problems = [
    {
      icon: MessageSquare,
      title: "Dezenas de conversas",
      description: "Gerenciar múltiplas conversas simultaneamente sem perder o controle."
    },
    {
      icon: Clock,
      title: "Horas atualizando sistemas",
      description: "Tempo precioso gasto em tarefas administrativas repetitivas."
    },
    {
      icon: AlertCircle,
      title: "O medo de esquecer o follow-up",
      description: "A preocupação constante de perder oportunidades por falta de acompanhamento."
    }
  ]

  return (
    <section className="py-20 bg-guido-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-guido-text mb-6">
            Sua rotina parece familiar?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <Card 
              key={index}
              className="bg-[#161B22] p-8 rounded-2xl border-0 hover:border-guido-secondary/20 transition-all duration-300"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-guido-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <problem.icon className="w-6 h-6 text-guido-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-guido-text mb-4">
                  {problem.title}
                </h3>
                <p className="text-gray-300">
                  {problem.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}