# Guia: Conectando seu Fork com o Repositório Original

Este repositório é um fork de `ogiansouza/ebac_games_redux`. Siga os passos abaixo para manter seu fork sincronizado com o projeto original.

## 📋 Pré-requisitos

- Git instalado na sua máquina
- Repositório clonado localmente

## 🔗 Configuração do Remote Upstream

### 1. Clone o repositório (se ainda não fez)

```bash
git clone https://github.com/LucasLBrito/ebac_games_redux.git
cd ebac_games_redux
```

### 2. Adicione o repositório original como upstream

```bash
git remote add upstream https://github.com/ogiansouza/ebac_games_redux.git
```

### 3. Verifique a configuração

```bash
git remote -v
```

Saída esperada:
```
origin    https://github.com/LucasLBrito/ebac_games_redux.git (fetch)
origin    https://github.com/LucasLBrito/ebac_games_redux.git (push)
upstream  https://github.com/ogiansouza/ebac_games_redux.git (fetch)
upstream  https://github.com/ogiansouza/ebac_games_redux.git (push)
```

## 🔄 Sincronizando seu Fork

### Opção A: Usando Rebase (Recomendado para histórico limpo)

```bash
# 1. Fetch das atualizações
git fetch upstream

# 2. Mude para a branch main
git checkout main

# 3. Rebase com as mudanças do upstream
git rebase upstream/main

# 4. Envie para seu fork
git push origin main --force-with-lease
```

### Opção B: Usando Merge

```bash
# 1. Fetch das atualizações
git fetch upstream

# 2. Mude para a branch main
git checkout main

# 3. Faça merge com as mudanças
git merge upstream/main

# 4. Envie para seu fork
git push origin main
```

## 🌿 Acessando Outras Branches do Projeto Original

### Listar todas as branches disponíveis

```bash
git fetch upstream
git branch -r
```

### Criar uma branch local baseada no upstream

```bash
git checkout -b minha-branch upstream/nome-da-branch-do-upstream
```

Exemplo:
```bash
git checkout -b develop upstream/develop
```

### Sincronizar uma branch específica

```bash
git checkout minha-branch
git rebase upstream/minha-branch
git push origin minha-branch
```

## 📝 Fluxo Recomendado para Contribuições

1. **Sincronize a main**
   ```bash
   git fetch upstream
   git checkout main
   git rebase upstream/main
   ```

2. **Crie uma branch para sua feature**
   ```bash
   git checkout -b feature/minha-feature
   ```

3. **Faça seus commits**
   ```bash
   git add .
   git commit -m "Descrição da mudança"
   ```

4. **Envie para seu fork**
   ```bash
   git push origin feature/minha-feature
   ```

5. **Abra um Pull Request** para o repositório original

## 🛠️ Comandos Úteis

| Comando | Descrição |
|---------|-----------|
| `git fetch upstream` | Baixa atualizações do repositório original |
| `git branch -a` | Lista todas as branches (local e remota) |
| `git branch -r` | Lista apenas branches remotas |
| `git log --oneline upstream/main..main` | Vê commits que seu fork tem e o upstream não |
| `git log --oneline main..upstream/main` | Vê commits que o upstream tem e seu fork não |
| `git status` | Verifica status atual do repositório |

## ⚠️ Notas Importantes

- Use `--force-with-lease` em vez de `--force` para evitar sobrescrever mudanças de outros
- Sempre sincronize antes de criar novas branches de features
- Se enfrentar conflitos durante rebase, resolva-os e continue com `git rebase --continue`

---

**Repositório Original:** https://github.com/ogiansouza/ebac_games_redux  
**Seu Fork:** https://github.com/LucasLBrito/ebac_games_redux
