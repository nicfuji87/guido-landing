# 🚀 Guido - O Guia Inteligente do Corretor

## 📋 Sobre o Projeto

**Guido** é o guia inteligente para Corretores de Imóveis - uma landing page moderna para lista de espera com design dark, tecnológico e limpo.

### 🎯 Stack Tecnológica

- **Frontend**: Vite + React 19 + TypeScript
- **Styling**: Tailwind CSS 3.4.16 + PostCSS
- **UI Components**: shadcn/ui + Magic UI (componentes animados)
- **Backend**: Supabase (lista de espera)
- **Formulários**: React Hook Form + Zod
- **Animações**: Framer Motion
- **Ícones**: Lucide React

### 🎨 Identidade Visual

#### **Cores Principais:**
- **Gradiente Digital**: `#0D1117` → `#00F6FF` (Azul Escuro "Deep Space" → Ciano Elétrico)
- **Fundo Principal**: `#0D1117` (Azul Escuro "Deep Space")
- **Texto Principal**: `#F0F6FC` (Branco "Gelo")
- **Acento e CTAs**: `#00F6FF` (Ciano Elétrico)

#### **Tipografia:**
- **Títulos**: Poppins ou Manrope (Bold, Semi-Bold)
- **Corpo de Texto**: Inter ou Sora (Regular)

## 🚀 Instalação e Desenvolvimento

### **Pré-requisitos:**
- Node.js 18+
- npm ou yarn

### **Instalação:**
```bash
# Clone o repositório
git clone https://github.com/nicfuji87/guido-landing.git
cd guido-landing

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com suas credenciais do Supabase
```

### **Scripts Disponíveis:**
```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run preview      # Preview do build
npm run lint         # Verificação ESLint
npm run type-check   # Verificação TypeScript
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/           # Componentes shadcn/ui
│   ├── layout/       # Componentes de layout
│   ├── sections/     # Seções da landing page
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── Features.tsx
│   │   ├── Mission.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   └── magicui/      # Componentes animados Magic UI
├── lib/
│   ├── supabase.ts   # Cliente Supabase
│   └── utils.ts      # Utilitários
├── hooks/
│   └── use-waitlist.ts
├── types/
│   └── index.ts
├── styles/
│   └── globals.css
└── pages/
    └── index.tsx
```

## 🎨 Componentes Específicos

### **GuidoLogo**
Componente de logo personalizado com cores Guido:
```tsx
<GuidoLogo size="lg" className="mb-8" />
```

### **CTAButton**
Botão de call-to-action com estilo Guido:
```tsx
<CTAButton onClick={handleClick}>
  Entrar na lista de espera
</CTAButton>
```

## 🔧 Configurações

### **TypeScript**
- Configuração strict habilitada
- Path aliases configurados (`@/*`)
- Verificação de tipos rigorosa

### **Tailwind CSS**
- Cores customizadas Guido
- Fontes Google Fonts integradas
- Gradientes e animações personalizadas

### **ESLint**
- Configuração para React + TypeScript
- Regras para React Hooks
- Suporte para Fast Refresh

## 📊 Status do Projeto

### **Etapas Concluídas:**
- ✅ **Etapa 1**: Configuração Inicial (Vite + React + TypeScript)
- ✅ **Etapa 2**: Tailwind CSS com Cores Guido
- ✅ **Etapa 3**: shadcn/ui
- ✅ **Etapa 4**: Magic UI (Componentes Animados)
- ✅ **Etapa 5**: Supabase
- ✅ **Etapa 6**: Dependências Adicionais
- ✅ **Etapa 7**: Estrutura de Pastas
- ✅ **Etapa 8**: Componentes Específicos Guido
- ✅ **Etapa 9**: Scripts de Desenvolvimento

### **Próximas Etapas:**
- 🔄 **Etapa 10**: Landing Page Guido (em desenvolvimento)

## 🎯 Funcionalidades

### **Implementadas:**
- ✅ Landing page responsiva
- ✅ Design dark tecnológico
- ✅ Componentes animados
- ✅ Integração Supabase
- ✅ Formulário de lista de espera
- ✅ SEO otimizado

### **Planejadas:**
- 🔄 Analytics (Google Analytics 4, Hotjar)
- 🔄 Otimização de performance
- 🔄 Testes automatizados
- 🔄 Deploy para produção

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

- **Projeto**: [Guido Landing](https://github.com/nicfuji87/guido-landing)
- **Issues**: [GitHub Issues](https://github.com/nicfuji87/guido-landing/issues)

---

**Guido** - Transformando a experiência do corretor de imóveis com inteligência artificial. 🏠✨