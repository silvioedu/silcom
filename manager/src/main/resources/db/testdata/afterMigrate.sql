delete from tblramo;
delete from tblprodutocomplemento;
delete from tblprodutocor;
delete from tblprodutodetalhe;
delete from tblprodutofabricante;
delete from tblprodutotipo;

alter sequence tblramo_seq restart with 25;
alter sequence tblprodutocomplemento_seq restart with 18;

insert into tblramo values 
(1,'AÇOUGUE', now() at time zone 'utc', now() at time zone 'utc'),
(2, 'AUTO POSTO', now() at time zone 'utc', now() at time zone 'utc'),
(3, 'BAR', now() at time zone 'utc', now() at time zone 'utc'),
(4, 'BUFFET', now() at time zone 'utc', now() at time zone 'utc'),
(5, 'CHURRASCARIA', now() at time zone 'utc', now() at time zone 'utc'),
(6, 'CONDOMÍNIO', now() at time zone 'utc', now() at time zone 'utc'),
(7, 'COZINHA', now() at time zone 'utc', now() at time zone 'utc'),
(8, 'DOCERIA', now() at time zone 'utc', now() at time zone 'utc'),
(9, 'EMPRESA', now() at time zone 'utc', now() at time zone 'utc'),
(10, 'ESCOLA', now() at time zone 'utc', now() at time zone 'utc'),
(11, 'HABIBS', now() at time zone 'utc', now() at time zone 'utc'),
(12, 'INDÚSTRIA', now() at time zone 'utc', now() at time zone 'utc'),
(13, 'LANCHONETE', now() at time zone 'utc', now() at time zone 'utc'),
(14, 'LOJA', now() at time zone 'utc', now() at time zone 'utc'),
(15, 'MECÂNICA', now() at time zone 'utc', now() at time zone 'utc'),
(16, 'MERCEARIA', now() at time zone 'utc', now() at time zone 'utc'),
(17, 'OFICINA', now() at time zone 'utc', now() at time zone 'utc'),
(18, 'PADARIA', now() at time zone 'utc', now() at time zone 'utc'),
(19, 'PASTELARIA', now() at time zone 'utc', now() at time zone 'utc'),
(20, 'PASTIFÍCIO', now() at time zone 'utc', now() at time zone 'utc'),
(21, 'PEIXARIA', now() at time zone 'utc', now() at time zone 'utc'),
(22, 'PIZZARIA', now() at time zone 'utc', now() at time zone 'utc'),
(23, 'RESTAURANTE', now() at time zone 'utc', now() at time zone 'utc'),
(24, 'ROTISSERIA', now() at time zone 'utc', now() at time zone 'utc');

insert into tblprodutocomplemento values
(6, 'Monodensidade Sem bico', '0', now() at time zone 'utc', now() at time zone 'utc'),
(7, 'Bidensidade Sem bico', '5', now() at time zone 'utc', now() at time zone 'utc'),
(8, 'Monodensidade Bico PVC', '1', now() at time zone 'utc', now() at time zone 'utc'),
(9, 'Bidensidade Bico PVC', '6', now() at time zone 'utc', now() at time zone 'utc'),
(10, 'Monodensidade Bico aço', '2', now() at time zone 'utc', now() at time zone 'utc'),
(11, 'Bidensidade Bico aço', '7', now() at time zone 'utc', now() at time zone 'utc'),
(12, 'Monodensidade Sem bico-Forrada', '3', now() at time zone 'utc', now() at time zone 'utc'),
(14, 'DUB', '4', now() at time zone 'utc', now() at time zone 'utc'),
(15, 'Não definido', '8', now() at time zone 'utc', now() at time zone 'utc'),
(16, 'Frete', 'F', now() at time zone 'utc', now() at time zone 'utc'),
(17, 'Apenas para Teste IT', '.', now() at time zone 'utc', now() at time zone 'utc');

insert into tblprodutocor values
(3, 'Branco', 'B', now() at time zone 'utc', now() at time zone 'utc'),
(4, 'Marrom', 'M', now() at time zone 'utc', now() at time zone 'utc'),
(5, 'Preto', 'P', now() at time zone 'utc', now() at time zone 'utc'),
(6, 'Rosa', 'R', now() at time zone 'utc', now() at time zone 'utc'),
(7, 'MA', 'A', now() at time zone 'utc', now() at time zone 'utc'),
(8, 'Bege', 'G', now() at time zone 'utc', now() at time zone 'utc'),
(9, 'Ameixa', 'X', now() at time zone 'utc', now() at time zone 'utc'),
(10, 'Frete', 'F', now() at time zone 'utc', now() at time zone 'utc'),
(11, 'Apenas para Teste IT', '.', now() at time zone 'utc', now() at time zone 'utc');

insert into tblprodutodetalhe values 
(1, 'Cadarço', 'A', now() at time zone 'utc', now() at time zone 'utc'),
(2, 'Elástico', 'E', now() at time zone 'utc', now() at time zone 'utc'),
(3, 'Cano curto', 'C', now() at time zone 'utc', now() at time zone 'utc'),
(4, 'Cano médio', 'M', now() at time zone 'utc', now() at time zone 'utc'),
(5, 'Cano longo', 'L', now() at time zone 'utc', now() at time zone 'utc'),
(8, 'Alça', 'K', now() at time zone 'utc', now() at time zone 'utc'),
(9, 'Social', 'S', now() at time zone 'utc', now() at time zone 'utc'),
(10, 'EVA', 'V', now() at time zone 'utc', now() at time zone 'utc'),
(11, 'STICKY SHOE', 'P', now() at time zone 'utc', now() at time zone 'utc'),
(13, 'EVA c/ palmilha 90', 'F', now() at time zone 'utc', now() at time zone 'utc'),
(14, 'EVA c/ palmilha 61', 'G', now() at time zone 'utc', now() at time zone 'utc'),
(15, '-', 'B', now() at time zone 'utc', now() at time zone 'utc'),
(16, 'Apenas para Teste IT', '.', now() at time zone 'utc', now() at time zone 'utc');

insert into tblprodutofabricante values 
(1, 'Susa', '02', now() at time zone 'utc', now() at time zone 'utc'),
(2, 'Le Sportiff', '03', now() at time zone 'utc', now() at time zone 'utc'),
(3, 'Italbotas', '04', now() at time zone 'utc', now() at time zone 'utc'),
(4, 'Vulcaflex', '05', now() at time zone 'utc', now() at time zone 'utc'),
(5, 'Calbras', '01', now() at time zone 'utc', now() at time zone 'utc'),
(6, 'Marluvas', '06', now() at time zone 'utc', now() at time zone 'utc'),
(7, 'Kemo', '07', now() at time zone 'utc', now() at time zone 'utc'),
(10, 'Darlo', '08', now() at time zone 'utc', now() at time zone 'utc'),
(12, 'Talk Flex', '09', now() at time zone 'utc', now() at time zone 'utc'),
(13, 'Soft Works', '10', now() at time zone 'utc', now() at time zone 'utc'),
(14, 'Vulcabras', '11', now() at time zone 'utc', now() at time zone 'utc'),
(15, 'Canadá', '12', now() at time zone 'utc', now() at time zone 'utc'),
(16, 'Fujiwara', '13', now() at time zone 'utc', now() at time zone 'utc'),
(17, 'Não definido', '14', now() at time zone 'utc', now() at time zone 'utc'),
(18, '-', '00', now() at time zone 'utc', now() at time zone 'utc'),
(19, 'Apenas para Teste IT', '.', now() at time zone 'utc', now() at time zone 'utc');

insert into tblprodutotipo values 
(1, 'Bota', 'B', now() at time zone 'utc', now() at time zone 'utc'),
(2, 'Sapato', 'S', now() at time zone 'utc', now() at time zone 'utc'),
(3, 'Botina', 'T', now() at time zone 'utc', now() at time zone 'utc'),
(4, 'Croc', 'C', now() at time zone 'utc', now() at time zone 'utc'),
(5, 'Babuch', 'H', now() at time zone 'utc', now() at time zone 'utc'),
(6, 'Sapatilha', 'P', now() at time zone 'utc', now() at time zone 'utc'),
(7, 'Tênis', 'E', now() at time zone 'utc', now() at time zone 'utc'),
(8, 'Palmilha', 'Z', now() at time zone 'utc', now() at time zone 'utc'),
(9, 'Avental', 'A', now() at time zone 'utc', now() at time zone 'utc'),
(10, 'Frete', 'F', now() at time zone 'utc', now() at time zone 'utc'),
(11, 'Sapatênis', 'N', now() at time zone 'utc', now() at time zone 'utc'),
(12, 'Apenas para Teste IT', '.', now() at time zone 'utc', now() at time zone 'utc');