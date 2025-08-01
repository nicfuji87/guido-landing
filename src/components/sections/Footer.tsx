import { GuidoLogo } from "@/components/ui/guido-logo"
import { Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#161B22] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo e Copyright */}
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <GuidoLogo size="md" className="mb-4" />
            <p className="text-gray-400 text-sm">
              © 2025 Guido. Todos os direitos reservados.
            </p>
          </div>
          
          {/* Links */}
          <div className="flex items-center space-x-6">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#F0F6FC] hover:text-[#00F6FF] transition-colors duration-200 flex items-center space-x-2"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            
            <a 
              href="mailto:contato@guido.ai" 
              className="text-[#F0F6FC] hover:text-[#00F6FF] transition-colors duration-200 flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Contato</span>
            </a>
            
            <a 
              href="/privacidade" 
              className="text-[#F0F6FC] hover:text-[#00F6FF] transition-colors duration-200"
            >
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}