## 🎯 Objetivo

Adicionar as seções de "Experiência" e "Footer" ao portfólio, integrando suporte nativo a internacionalização (i18n), e adequar a base de código aos padrões rígidos do ESLint/Husky.

## 🛠️ Alterações Realizadas

### ✨ Novas Funcionalidades

- **Componente `ExperienceItem`:** Criada a estrutura de renderização dinâmica para o histórico profissional (empresa, cargo, período e bullet points de projetos).
- **Componente `FooterInc`:** Adicionado um rodapé padronizado para a aplicação.
- **Suporte a i18n:** Adicionados os dicionários de tradução em `pt.json` e `en.json` para as novas seções.
- **Atualização do `App.jsx` e `Experience.jsx`:** Integrados os novos componentes ao layout principal da aplicação.

### 🐛 Correções de Lint & Qualidade de Código (Continuous Integration)

Para garantir que a esteira de CI/CD não quebre, os seguintes ajustes de ESLint foram resolvidos:

- Fix de variáveis não declaradas ou ociosas (ex: `key` reservada do React no componente `ExperienceItem`).
- Desativado o alerta de `react-refresh/only-export-components` para exportações constantes em `Avatar.jsx`, `NavLink.jsx`, `Text.jsx` e `Themes.jsx`, seguindo a recomendação para projetos Vite.
- Corrigido escopo de iteração em `ExperienceItem` (`map`) blindando contra erros na key.
- Limpeza de hooks não utilizados (`useRef`) e supressão controlada de dependências exaustivas no `useEffect` do `useGithub.jsx`.

## 🧪 Como Testar

1. Acesse a rota raiz da aplicação (`/pt` ou `/en`).
2. Verifique se a seção "Experiências" (Experience) carrega corretamente lendo os dados.
3. Alterne o idioma da página usando o botão do cabeçalho e garanta que os textos de cargo/descrição foram traduzidos.
4. Faça o scroll até o final da página e valide o layout do Footer.

## ✅ Checklist

- [x] O código segue as diretrizes de estilo do projeto (Passou no Husky pre-commit).
- [x] Internacionalização (i18n) testada para PT e EN.
- [x] Sem erros e sem warnings ("Zero Warning Policy") no console.
