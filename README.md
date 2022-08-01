# Validação do cartão de crédito

## Índice

* [1. Introdução](#1-Introdução)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Público alvo](#4-público-alvo)
* [4. Protótipo inicial](#3-protótipo-inicial)
* [5. Pontos para melhoria](#3-pontos-para-melhoria)


***

## 1. Introdução

O Luhn algoritmo ou fórmula Luhn , também conhecido como o " módulo de 10" ou "mod 10" algoritmo , em homenagem a seu criador, IBM cientista Hans Peter Luhn , é uma simples soma de verificação fórmula utilizada para validar uma variedade de números de identificação, tais como crédito números de cartão , números IMEI , número identificador fornecedor nacional nos Estados Unidos, do Canadá números de seguro social , israelenses números de identificação, Sul Africano números de identificação, grego números de Segurança social (ΑΜΚΑ) e códigos de pesquisa aparecem emReceitas do McDonald's , Taco Bell e Tractor Supply Co. É descrito na Patente US No. 2.950.048 , depositada em 6 de janeiro de 1954 e concedida em 23 de agosto de 1960.
O algoritmo é de domínio público e é amplamente utilizado hoje. É especificado na ISO / IEC 7812 -1. [1] Não se destina a ser uma função hash criptograficamente segura ; ele foi projetado para proteger contra erros acidentais, não contra ataques maliciosos. A maioria dos cartões de crédito e muitos números de identificação do governo usam o algoritmo como um método simples de distinguir números válidos de números incorretos ou incorretos.

## 2. Resumo do projeto

O Projeto Card Validation foi desenvolvido para aplicação de aprendizagem no Bootcamp Laboratória, que permite o usuário validar o número de um cartão de crédito, utilizando o Algoritmo de Luhn.
<br>
<br>
Link de acesso ao site: https://iammarge.github.io/SAP008-card-validation/

## Descrição do Algoritmo de Luhn

A fórmula compara um número com seu dígito de verificação incluído , que geralmente é anexado a um número de conta parcial para gerar o número de conta completo. Este número deve passar no seguinte teste:
Do dígito mais à direita (excluindo o dígito de verificação) e movendo para a esquerda, dobre o valor de cada segundo dígito. O dígito de verificação não é duplicado nem incluído neste cálculo; o primeiro dígito duplicado é o dígito localizado imediatamente à esquerda do dígito de verificação. Se o resultado desta operação de duplicação for maior que 9 (por exemplo, 8 × 2 = 16), então adicione os dígitos do resultado (por exemplo, 16: 1 + 6 = 7, 18: 1 + 8 = 9) ou, equivalentemente , subtraia 9 do resultado (por exemplo, 16: 16 - 9 = 7, 18: 18 - 9 = 9).
Faça a soma de todos os dígitos (incluindo o dígito de verificação).
Se o módulo total 10 for igual a 0 (se o total terminar em zero), o número é válido de acordo com a fórmula de Luhn; caso contrário, não é válido.

## Imagem final do projeto
![image](https://user-images.githubusercontent.com/72046467/182254128-84c70a59-e670-4044-a8df-259984f58c47.png)

## 3. Público Alvo

Qualquer pessoa que tenha um cartão de crédito e queira estar validando pela web sem a necessidade de ir até um caixa eletônico ou ligar para o sac do seu banco pode  estar utilizando a nossa plataforma.

## 4. Protótipo inicial

O protótipo inicial é de baixa fidelidade, feito a mão, como um guia para o layout da página, que houve muitas mudanças até a forma final.
<br>
![image](https://user-images.githubusercontent.com/72046467/182254999-441ca379-1148-45e0-915a-4376fe3c3563.png)

## 5. Pontos para melhoria

Após observar o resultado final do projeto, levantei alguns pontos para melhoria:
- Escurecimento dos números, pensando em todos que possam vir a ter problemas para enxergar devido ao colorido do fundo.
- Melhora na disposição do campo que representa o cartão, colocando o chip no lugar correto e alinhando as informações internas.
- Acrescentar um campo com nome para tornar a experiência mais pessoal.
- Criar um campo de menu.
- Melhorar o rodapé com mais iformações que possam ser úteis ao usuário.


