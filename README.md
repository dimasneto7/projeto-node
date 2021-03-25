# Recuperação de Senha

**RF** Requisitos Funcionais

- O usuário deve poder recuperar a sua senha informando o seu e-mail;
- O usuário de receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;


**RNF** Requisitos Não Funcionais

- Utilizar Mailtrap para testar envios em ambiente de desenvolvimento;
- Utilizar Amazon SES para envios de produção;
- O envio de e-mails deve acontecer em segundo plano (background job);


**RN** Regras de Negócio

- O link enviado por e-mail para resetar senha, deve experiar em 2h;
- O usuário precisar confirmar a nova senha, após resetar senha antiga;


-------------------------------------

# Atualização do perfil

**RF**

- O usuário deve poder atualizar o seu nome, email e senha;


**RN**

- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar a sua senha, o usuário deve informar a senha antiga;
- Para atualizar a sua senha, o usuário precisa confirmar a nova senha;

# Painel Prestador

**RF**
- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novi agendamento;
- O prestador deve poder visualizar as notificações não lidas;


**RNF**

- Os agendamentos do prestador no dia devem ser armazenados no cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou não lida, para o controle do prestador;


# Agendamento de Serviços

**RF**

- O usuário deve poder listar todos prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horáio disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;


**RNF**

- A listagem de prestadores deve ser armazenada em cache;


**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18hn (primeiro às 8h, último as 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
‣潮敤潧慢扲牥�