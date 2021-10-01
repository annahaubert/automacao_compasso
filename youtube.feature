Funcionalidade: Informações de canais do youtube

    Cenário: Validar a quantidade de visualiazções do canal Compasso UOL
        Dado que esteja na página home do youtube 
        Quando pesquisar por "Compasso UOL"
        E acessar o canal da Compasso UOL
        E acessar a aba "Sobre"
        Então o número de visualizações deverá ser maior que 30.000

    Esquema do Cenário: Validar a quantidade de visulização de canais
        Dado que esteja na página home do youtube
        Quando pesquisar por "<canal>"
        E acessar o "<canal>"
        E acessar a aba "Sobre"
        Então o número de visulizações deverá ser maior que "<visualizações>"
            Exemplos
            | Canal           | Visualizações  |
            | Compasso UOL    | 30.000         |
            



