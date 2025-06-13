<main>
  <h1 align="center">Trybe Futebol Clube (TFC)</h1>
  
  <img src="./front-TFC.png" alt="Front-end da aplicação do TFC que mostra o campo de busca e os dados do time."/>
  
  <p>
  Esse é um projeto full-stack que conta com funcionalidades para filtrar partidas por classificação geral dos time da casa ou do time adversário, e filtrar partidas que estão em progresso ou finalizadas, também conta com a criação de partidas, alteração do placar de partidas em andamento feitas por administradores, ocorrendo assim a diferenciação de usuários e administradores, entre outras funções.
  </p>

  <h3>Status do Projeto</h3>
  
    Finalizado ✅🚀

<details>
    <summary><strong>Créditos</strong></summary>
    
    O Front-end foi feito pela equipe de devs da Trybe, para agilizar no tempo de realização do projeto pelo aluno, mas isso apenas acontece pois compreendemos a estrutura do React e a lógica realizada nesse projeto!

</details>

<details>
    <summary><strong>Documentação</strong></summary>
    
    A documentação da API está disponível no site do Postman. Para acessar a documentação, siga estes passos:

  - Acesse a <a href="https://www.postman.com/veronica-alves/trybe-futebol-clube/api/3555f031-b7a9-47d9-99b7-87e89ecbd0f5/documentation/21412246-9a1effb2-15df-4964-a3b5-167436fb9e03">documentação</a>.
  - Se você não tiver uma conta no Postman, será necessário criar uma para acessá-la.
  - Depois de acessar a documentação, revise as solicitações, corpos e respostas para entender melhor como usar a API.

</details>
 
<details>
    <summary><strong>⚠️ Configurações mínimas para execução do projeto</strong></summary><br />

Na sua máquina você deve ter:

 - Sistema Operacional Distribuição Unix
 - Node versão 16
 - Docker
 - Docker-compose versão >=1.29.2

➡️ O `node` deve ter versão igual ou superior à `16.15.0 LTS`:
  - Rode os comandos abaixo para instalar a versão correta de `node` e usá-la:
    - `nvm install 16 --lts`
    - `nvm use 16`
    - `nvm alias default 16`

➡️ O`docker-compose` deve ter versão igual ou superior à`ˆ1.29.2`

</details>

<details>
    <summary><strong>🐳 Configuração Docker</strong></summary><br />

  ### Docker e Docker-compose

  ⚠ O seu docker-compose precisa estar na versão 1.29 ou superior.  ⚠

⚠️ **Atenção:**

- O arquivo `docker-compose.yml` pode ser utilizado para executar a aplicação na sua máquina local, para isso é necessário executar o comando `npm run compose:up` na raiz do projeto.
- Caso você queira realizar modificações no projeto, prefira o usar o comando `npm run compose:up:dev`, pois diferente do comando anterior este comando está configurado para compartilhar volumes com o _docker_, e também utiliza o _script_ que realiza o _live-reload_ ao fazer modificações no _back-end_. Somente quando instalar uma nova depêndencia ou alterar algum arquivo na raiz do backend, você deverá realizar o re-build do seu compose, pois o volume está mapeando somente alterações dentro da pasta `src` Você pode verificar essas configurações explorando o arquivo `docker-compose.dev.yml` e comparar com `docker-compose.yml`.

</details>

<details>
    <summary><strong>⚠️ Inicialização do compose e verificação dos logs das aplicações </strong></summary><br />

- Considerando o uso do parâmetro `healthcheck` em cada container do seu `docker-compose.yml`, a inicialização dos containers deve aguardar o comando de status de saúde (o que valida se aquele container está operacional ou não):
  - No container `db`, representado por um comando `ping` no banco de dados;
  - No back-end, representado por um comando `lsof`, que vai procurar aplicações ativas na porta definida (por padrão, no caso `3001`);
  - No front-end, representado por um comando `lsof`, que vai procurar aplicações ativas na porta definida (por padrão, no caso `3000`).

    ⚠️ Ao rodar a aplicação no back-end para visualizar o retorno da API, esteja atento a porta, pois a 3001 está sendo usada no docker, o que pode ocasionar em conflito, assim apenas mude o valor da porta. Exemplo: `APP_PORT=3003`.

</details>

<details id='Variaveis-de-ambiente'>
    <summary><strong>⚙️ Variáveis de ambiente</strong></summary><br />

  **No diretório `app/backend/` configure os valores de acordo com o cenário do seu ambiente (credenciais de banco de dados, secrets desejadas e etc)**. Isso vai permitir que você inicialize a aplicação fora do _container_ e ela se conecte com seu banco local caso deseje.
 > `./app/backend/.env`
  ```txt
  JWT_SECRET=jwt_secret
  APP_PORT=3001
  DB_USER=seu_user
  DB_PASS=sua_senha
  DB_HOST=localhost
  DB_PORT=3306
  ```
  ⚠️ Em JWT_SECRET receberá como valor a senha do administrador ou do usuário. É possível verificá-las no diretório `app/backend/src/database/seeders` na semente que contém o nome `user`.
</details>

<details>
  <summary><strong>🎲 Rodando a aplicação</strong></summary>
<br>

#### **Na raíz do projeto**

    npm install -> instala as aplicações front e back.

#### **No Back-end**

    npm run db:reset -> Recria a base de dados.
    npm run dev -> Roda a aplicação na porta escolhida por você na variavél de ambiente ou por padrão na porta 3001.
    npm run test:coverage -> Mostra a cobertura de testes por arquivo.

⚠️ Quaisquer execução referente ao sequelize-cli deve ser realizada dentro do diretório app/backend. Certifique-se de que antes de rodar comandos do sequelize já existe uma versão compilada do back-end (diretório app/build), caso contrário basta executar `npm run build` para compilar. O sequelize só funcionará corretamente se o projeto estiver compilado.

#### **No Front-end**

    npm start -> roda a aplicação visual para a interação.

</details>

<details>
    <summary><strong>🎲 Mais comandos importantes</strong></summary>

#### **Na raíz do projeto**

- Você pode **subir ou descer uma aplicação do compose**, utilizando `npm run` com os scripts `compose:up`, `compose:down`, ou `compose:up:dev`, `compose:down:dev`;
- Os comando de _compose_ anteriores estão configurados para executar o _docker-compose_ com o terminal desanexado (detached mode `-d`). Caso queira acompanhar os logs de um serviço em tempo real pelo terminal, basta executar `npm run logs [nome_do_servico]` onde _nome_do_servico_ é opcional e pode receber os serviços _backend_, _frontend_ ou _db_;

</details>

  <h3>🛠 Tecnologias</h3>
  
  <p>As tecnologias usadas foram Node.js, TypeScript, Docker, JWT, Sequelize, MySQL, Eslint, Joi, Async Express Errors, Chai, Sinon e Postman. Além das que estão contidas no front-end: React, Context API, Hooks</p>

  <h3>Autor</h3>

  <a href='https://github.com/Veronica-Alfr'>Verônica Alves</a>

  <details>
    <summary><strong>📜 Licença</strong></summary>
 

      TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

      1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction, and
      distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by the copyright
      owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all other entities
      that control, are controlled by, or are under common control with that entity.
      For the purposes of this definition, "control" means (i) the power, direct or
      indirect, to cause the direction or management of such entity, whether by
      contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity exercising
      permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications, including
      but not limited to software source code, documentation source, and configuration
      files.

      "Object" form shall mean any form resulting from mechanical transformation or
      translation of a Source form, including but not limited to compiled object code,
      generated documentation, and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or Object form, made
      available under the License, as indicated by a copyright notice that is included
      in or attached to the work (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object form, that
      is based on (or derived from) the Work and for which the editorial revisions,
      annotations, elaborations, or other modifications represent, as a whole, an
      original work of authorship. For the purposes of this License, Derivative Works
      shall not include works that remain separable from, or merely link (or bind by
      name) to the interfaces of, the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including the original version
      of the Work and any modifications or additions to that Work or Derivative Works
      thereof, that is intentionally submitted to Licensor for inclusion in the Work
      by the copyright owner or by an individual or Legal Entity authorized to submit
      on behalf of the copyright owner. For the purposes of this definition,
      "submitted" means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems, and
      issue tracking systems that are managed by, or on behalf of, the Licensor for
      the purpose of discussing and improving the Work, but excluding communication
      that is conspicuously marked or otherwise designated in writing by the copyright
      owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity on behalf
      of whom a Contribution has been received by Licensor and subsequently
      incorporated within the Work.

      2. Grant of Copyright License.

      Subject to the terms and conditions of this License, each Contributor hereby
      grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free,
      irrevocable copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the Work and such
      Derivative Works in Source or Object form.

      3. Grant of Patent License.

      Subject to the terms and conditions of this License, each Contributor hereby
      grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free,
      irrevocable (except as stated in this section) patent license to make, have
      made, use, offer to sell, sell, import, and otherwise transfer the Work, where
      such license applies only to those patent claims licensable by such Contributor
      that are necessarily infringed by their Contribution(s) alone or by combination
      of their Contribution(s) with the Work to which such Contribution(s) was
      submitted. If You institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work or a
      Contribution incorporated within the Work constitutes direct or contributory
      patent infringement, then any patent licenses granted to You under this License
      for that Work shall terminate as of the date such litigation is filed.

      4. Redistribution.

      You may reproduce and distribute copies of the Work or Derivative Works thereof
      in any medium, with or without modifications, and in Source or Object form,
      provided that You meet the following conditions:

      You must give any other recipients of the Work or Derivative Works a copy of
      this License; and
      You must cause any modified files to carry prominent notices stating that You
      changed the files; and
      You must retain, in the Source form of any Derivative Works that You distribute,
      all copyright, patent, trademark, and attribution notices from the Source form
      of the Work, excluding those notices that do not pertain to any part of the
      Derivative Works; and
      If the Work includes a "NOTICE" text file as part of its distribution, then any
      Derivative Works that You distribute must include a readable copy of the
      attribution notices contained within such NOTICE file, excluding those notices
      that do not pertain to any part of the Derivative Works, in at least one of the
      following places: within a NOTICE text file distributed as part of the
      Derivative Works; within the Source form or documentation, if provided along
      with the Derivative Works; or, within a display generated by the Derivative
      Works, if and wherever such third-party notices normally appear. The contents of
      the NOTICE file are for informational purposes only and do not modify the
      License. You may add Your own attribution notices within Derivative Works that
      You distribute, alongside or as an addendum to the NOTICE text from the Work,
      provided that such additional attribution notices cannot be construed as
      modifying the License.
      You may add Your own copyright statement to Your modifications and may provide
      additional or different license terms and conditions for use, reproduction, or
      distribution of Your modifications, or for any such Derivative Works as a whole,
      provided Your use, reproduction, and distribution of the Work otherwise complies
      with the conditions stated in this License.

      5. Submission of Contributions.

      Unless You explicitly state otherwise, any Contribution intentionally submitted
      for inclusion in the Work by You to the Licensor shall be under the terms and
      conditions of this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify the terms of
      any separate license agreement you may have executed with Licensor regarding
      such Contributions.

      6. Trademarks.

      This License does not grant permission to use the trade names, trademarks,
      service marks, or product names of the Licensor, except as required for
      reasonable and customary use in describing the origin of the Work and
      reproducing the content of the NOTICE file.

      7. Disclaimer of Warranty.

      Unless required by applicable law or agreed to in writing, Licensor provides the
      Work (and each Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied,
      including, without limitation, any warranties or conditions of TITLE,
      NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are
      solely responsible for determining the appropriateness of using or
      redistributing the Work and assume any risks associated with Your exercise of
      permissions under this License.

      8. Limitation of Liability.

      In no event and under no legal theory, whether in tort (including negligence),
      contract, or otherwise, unless required by applicable law (such as deliberate
      and grossly negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special, incidental,
      or consequential damages of any character arising as a result of this License or
      out of the use or inability to use the Work (including but not limited to
      damages for loss of goodwill, work stoppage, computer failure or malfunction, or
      any and all other commercial damages or losses), even if such Contributor has
      been advised of the possibility of such damages.

      9. Accepting Warranty or Additional Liability.

      While redistributing the Work or Derivative Works thereof, You may choose to
      offer, and charge a fee for, acceptance of support, warranty, indemnity, or
      other liability obligations and/or rights consistent with this License. However,
      in accepting such obligations, You may act only on Your own behalf and on Your
      sole responsibility, not on behalf of any other Contributor, and only if You
      agree to indemnify, defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason of your
      accepting any such warranty or additional liability.

      END OF TERMS AND CONDITIONS

      APPENDIX: How to apply the Apache License to your work

      To apply the Apache License to your work, attach the following boilerplate
      notice, with the fields enclosed by brackets "{}" replaced with your own
      identifying information. (Don't include the brackets!) The text should be
      enclosed in the appropriate comment syntax for the file format. We also
      recommend that a file or class name and description of purpose be included on
      the same "printed page" as the copyright notice for easier identification within
      third-party archives.

         Copyright 2023 Verônica Alves

         Licensed under the Apache License, Version 2.0 (the "License");
         you may not use this file except in compliance with the License.
         You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0

         Unless required by applicable law or agreed to in writing, software
         distributed under the License is distributed on an "AS IS" BASIS,
         WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         See the License for the specific language governing permissions and
         limitations under the License.
  
  </details>
    
</main>


