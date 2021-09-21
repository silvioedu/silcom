delete from tblramo;
delete from tblprodutocomplemento;

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