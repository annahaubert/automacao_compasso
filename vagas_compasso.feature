Funcionalidade: Vagas na compasso

    Cenário: Validar se existem vagas para automação de testes
        Dado que esteja na página principal da Compasso UOL
        Quando acessar a aba "Cultura"
        E acessar o link "Confira as nossas vagas"
        E acessar o link para a gupy de "Desenvolvimento Ágil"
        Então a URL deverá ser redirecionada para "gupy.compasso.com.br"
        E deverá ser validado que existem vagas para "Automação de testes"

    Esquema do Cenário: Validar se existem vagas para automação de testes
        Dado que esteja na página principal da Compasso UOL
        Quando acessar "<aba>"
        E acessar o "<link>"
        E acessar a gupy "<URL>"
        Então deverá ser validado que existem vagas para "<área>"
            Exemplos
            | Página          | Aba       | Link                 | URL                   | Área                |
            | Compasso UOL    | Cultura   | Confira nossas vagas | gupy.compasso.com.br  | Automação de testes |
            



