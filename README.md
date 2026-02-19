## Como rodar o projeto

1. **Clonar e Instalar:**

   ```bash
   git clone https://github.com/taynasales/rovera-consorcio
   cd rovera-consorcio
   npm install
   ```

2. **Configurar chaves de autenticação no arquivo .env.local**

```bash
   AUTH_SECRET="rode 'npx auth secret' no terminal para gerar"
   AUTH_GOOGLE_ID="seu_client_id_aqui"
   AUTH_GOOGLE_SECRET="seu_client_secret_aqui"
   NEXTAUTH_URL="http://localhost:3000"
```

2. **Executar**

```bash
npm run dev
Acesse: http://localhost:3000
```

## Decisões Técnicas Mobile

No mobile, optei por me basear no comportamento de leitura em telas verticais (celulares), que basicamente segue uma hierarquia de blocos. Então, o usuário faz um "scan" de cima para baixo, o que o conduz para a interação mais importante da página, que nessa LP é o CTA.
