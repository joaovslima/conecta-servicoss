# Plano de desenvolvimento

Planejamento inicial para uma pessoa iniciante. As datas são metas, não uma afirmação de funcionalidade entregue.

| Período de 2026 | Objetivo | Evidência para revisão |
| --- | --- | --- |
| 20 a 25 de outubro | Estudar o esboço, executar no Android, revisar documentação e publicar no GitHub | README, requisitos e demonstração de três telas |
| Segunda, 26 de outubro | Apresentar a entrega parcial | Explicar problema, escopo, código e limitações |
| 27 de outubro a 1 de novembro | Escolher banco/autenticação e implementar conta e perfil | Entrar com usuários distintos e manter dados |
| 2 a 8 de novembro | Persistir serviços, fotos e propostas; adicionar filtros | Cliente publica e profissional responde |
| 9 a 15 de novembro | Consentimento, contato, contratação e cancelamento | Fluxo entre duas contas com permissões |
| 16 a 20 de novembro | Conclusão, avaliação e testes do fluxo | Serviço completo e avaliação válida |
| 21 e 22 de novembro | Corrigir problemas, preparar instalação e ensaiar | Apresentação repetível com dados fictícios |
| Segunda, 23 de novembro | Apresentação final | App Android e documentação atualizada |

## Ordem de prioridade

1. Entender e executar o projeto atual antes de acrescentar bibliotecas.
2. Fazer o fluxo básico funcionar com persistência e usuários diferentes.
3. Aplicar as permissões para propostas, contatos e estados.
4. Concluir contratação, conclusão e avaliação.
5. Adicionar melhorias visuais depois de estabilizar o fluxo.

Se o cronograma apertar, renegociar primeiro fotos e edição do perfil. Não apresentar autenticação simulada ou dados em memória como um sistema multiusuário concluído.

## Decisões técnicas iniciais

- JavaScript, componentes funcionais e `useState`.
- React Native com Expo para gerar e executar a base Android.
- Navegação inicial com um estado de tela; explicar e separar as telas antes de adotar uma biblioteca de navegação.
- Componentes pequenos `Botao` e `Campo` para reduzir repetição.
- Banco e autenticação ainda a definir; nenhuma senha real será guardada no protótipo.
- Atualizar a documentação a cada etapa implementada.
