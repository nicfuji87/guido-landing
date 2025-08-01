import { TextAnimate } from "@/components/magicui/text-animate"

export function Solution() {
  return (
    <section className="py-20 bg-guido-primary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna da esquerda - Conteúdo */}
          <div className="text-left">
            <TextAnimate 
              animation="blurInUp" 
              by="word" 
              className="text-4xl md:text-5xl font-bold mb-6 text-guido-text"
            >
              O guia que trabalha por você. 24/7.
            </TextAnimate>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Guido centraliza a inteligência para que você foque no que faz de melhor: negociar. Ele não é apenas um assistente, é o seu guia inteligente para cada venda.
            </p>
          </div>
          
          {/* Coluna da direita - Visual */}
          <div className="relative">
            <div className="relative">
              {/* Mockup do notebook/tablet */}
              <div className="relative bg-[#161B22] rounded-2xl p-8 border border-[#30363d] shadow-2xl">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-radial from-guido-secondary/20 via-transparent to-transparent rounded-2xl"></div>
                
                {/* Tela do mockup */}
                <div className="relative bg-gradient-to-br from-[#0D1117] to-[#161B22] rounded-lg p-6 border border-[#30363d]">
                  {/* UI fictícia do Guido */}
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-guido-secondary rounded-full"></div>
                        <span className="text-guido-text font-semibold">Guido AI</span>
                      </div>
                      <div className="text-xs text-gray-400">Online</div>
                    </div>
                    
                    {/* Chat bubbles */}
                    <div className="space-y-3">
                      <div className="bg-[#30363d] rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm text-gray-300">Olá! Como posso ajudar com sua venda hoje?</p>
                      </div>
                      
                      <div className="bg-guido-secondary/20 rounded-lg p-3 max-w-[80%] ml-auto">
                        <p className="text-sm text-guido-text">Preciso de ajuda com um cliente difícil</p>
                      </div>
                      
                      <div className="bg-[#30363d] rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm text-gray-300">Vou analisar o histórico e sugerir a melhor abordagem...</p>
                      </div>
                    </div>
                    
                    {/* Status indicators */}
                    <div className="flex items-center space-x-2 text-xs text-gray-400">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Analisando dados...</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Glow externo */}
              <div className="absolute -inset-4 bg-gradient-radial from-guido-secondary/30 via-transparent to-transparent rounded-3xl blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}