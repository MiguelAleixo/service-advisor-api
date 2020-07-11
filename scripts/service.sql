CREATE
OR REPLACE FUNCTION public.registerService(
    pName VARCHAR,
    pDescription VARCHAR,
    pType VARCHAR
) RETURNS JSON AS $ $
/*
 Documentação
 Arquivo Fonte.....: service.sql
 Objetivo..........: Registrar um serviço
 Autor.............: Miguel Aleixo
 Data..............: 25/03/2020
 Ex................:
 SELECT * FROM public.registerService('Formatação', 'Formato Notebooks e Placas', 'Tecnologia');
 
 */
DECLARE vService VARCHAR;

BEGIN
INSERT INTO
    public.tb_servico (id_usr, nome, descricao, id_categoria, id_tempo, id_valor)
VALUES
    (pIdUser, pName, pDescription, pType, pTime, pValue) RETURNING name INTO vService;

RETURN json_build_object(
    'executionCode',
    0,
    'message',
    'Ok',
    'login',
    vService
);

END;

$ $ LANGUAGE plpgsql;

-------------------------------------------------------------------------------------
CREATE
OR REPLACE FUNCTION public.changeService(
    pName VARCHAR,
    pDescription VARCHAR,
    pType VARCHAR
) RETURNS JSON AS $ $
/*
 Documentação
 Arquivo Fonte.....: service.sql
 Objetivo..........: Registrar um serviço
 Autor.............: Miguel Aleixo
 Data..............: 25/03/2020
 Ex................:
 SELECT * FROM public.registerService('Formatação', 'Formato Notebooks e Placas', 'Tecnologia');
 
 */
DECLARE vService VARCHAR;

BEGIN
INSERT INTO
    public.service (name, description, type)
VALUES
    (pName, pDescription, pType) RETURNING name INTO vService;

RETURN json_build_object(
    'executionCode',
    0,
    'message',
    'Ok',
    'login',
    vService
);

END;

$ $ LANGUAGE plpgsql;