CREATE
OR REPLACE FUNCTION public.registerUser(
    pName VARCHAR,
    pLogin VARCHAR,
    pPassword VARCHAR
) RETURNS JSON AS $ $
/*
 Documentação
 Arquivo Fonte.....: user.sql
 Objetivo..........: Registrar um usuário
 Autor.............: Miguel Aleixo
 Data..............: 25/03/2020
 Ex................:
 SELECT * FROM public.registerUser('João', 'joao1', '123456');
 
 */
DECLARE vId VARCHAR;

BEGIN
INSERT INTO
    public.user (name, login, password)
VALUES
    (pName, pLogin, pPassword) RETURNING id INTO vId;

RETURN json_build_object(
    'executionCode',
    0,
    'message',
    'Ok',
    'id',
    vId
);

END;

$ $ LANGUAGE plpgsql;

-------------------------------------------------------------------------------------------

CREATE
OR REPLACE FUNCTION public.selectUser(pId INTEGER) RETURNS TABLE(
    "id" public.tb_usuarios.id_usr % TYPE,
    "name" public.tb_usuarios.nome % TYPE,
    "login" public.tb_usuarios.email_login % TYPE,
    "cpf" public.tb_usuarios.cpf % TYPE,
    "phone" public.tb_usuarios.telefone % TYPE,
    "birthDay" public.tb_usuarios.data_nasc % TYPE
) AS $ $
/*
 Documentação
 Arquivo Fonte.....: user.sql
 Objetivo..........: Selecionar um usuário por ID
 Autor.............: Miguel Aleixo
 Data..............: 25/03/2020
 Ex................: SELECT * FROM public.selectUser(1);
 */
BEGIN RETURN QUERY
SELECT
    u.id_usr,
    u.nome,
    u.email_login,
    u.cpf,
    u.phone,
    u.birthDay
FROM
    public.user u
    
WHERE
    u.id = pId;

END;

$ $ LANGUAGE plpgsql;

------------------------------------------------------------------------------------------