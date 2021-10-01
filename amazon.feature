Funcionalidade: Informações de canais do youtube

    Cenário: Pesquisar ISTQB e validar se o primeiro nome da lista de resultados contem a palavra "Syllabus"
        Dado que esteja na página home do google
        Quando pesquisar por "Amazon"
        E acessar o site
        E acessar a aba "Livros"
        E pesquisar por "ISTQB"
        Então deverá validar se o primeiro livro contem a palavra "Syllabus"

    Esquema do Cenário: Validar se o primeiro livro contem a palavra "Syllabus"
        Dado que esteja na página home do youtube
        Quando pesquisar por "<página>"
        E acessar o "<página>"
        E acessar a aba "Livros"
        E pesquisar por "ISTQB"
        Então deverá validar se o primeiro livro contem a palavra "<palavra>"
            Exemplos
            | Página          | Aba         |  Palavra        |
            | Amazon          | Livros      |  Syllabus       |
            
