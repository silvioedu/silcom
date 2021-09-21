CREATE SEQUENCE tblprodutocor_seq;

CREATE TABLE tblprodutocor(
    id bigint not null default nextval ('tblprodutocor_seq') unique,
    nome varchar(20) not null,
    sigla varchar(01) not null,
    data_criacao timestamp(0) not null,
    data_atualizacao timestamp(0) not null
);

ALTER TABLE tblprodutocor ADD CONSTRAINT tblprodutocor_nome_key UNIQUE(nome);