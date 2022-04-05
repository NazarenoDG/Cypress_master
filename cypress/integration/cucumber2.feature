Feature: : Cucumber


    Esto es un demo de como utilizar cucumber

    Scenario Outline: Scenario Outline name: Cucumber 
        Given Abrir el navegador principal
        When Cargando el nombre <username>
        When Cargando el email <email>
        And Cargando la direccion <dir1>
        And Cargando la direccion dos <dir2>
        And Click en button
        Then Validar el nombre de la pagina

        Examples:
            | username | email | dir1 | dir2 |
            | nazareno  | n@gmail.com  | dir_1 | dir_2 |
            | juan  | j@gmail.com  | dir_1 | dir_2 |
            | pedro  | p@gmail.com  | dir_1 | dir_2 |
            | jaime  | j@gmail.com  | dir_1 | dir_2 |
            | erika  | e@gmail.com  | dir_1 | dir_2 |
            | camila  | c@gmail.com  | dir_1 | dir_2 |

