CREATE OR REPLACE FUNCTION public.authuser(plogin character varying, psenha character varying)
 RETURNS TABLE("idUser" integer)
 LANGUAGE plpgsql
AS $function$

/*
  Documentação
  Arquivo Fonte.....: user.sql
  Objetivo..........: Autenticar um usuario
  Autor.............: Miguel Aleixo
  Data..............: 11/07/2020
  Ex................:
    SELECT * FROM public.authuser('miguel.lima@luizalabs.com','123321');

*/

BEGIN
  return query
  select id_usr from tb_usuarios u 
  where (plogin = email_login and psenha = senha);


END;
$function$
;













CREATE OR REPLACE FUNCTION public.registeruser(pnome character varying, psenha character varying, pidgenero integer, pcpf character, pemail character varying, ptelefone character varying, pdatanascimento date, plogradouro character varying, pnumero character varying, pbairro character varying, pcomplemento character varying, pcep character)
 RETURNS json
 LANGUAGE plpgsql
AS $function$

/*
  Documentação
  Arquivo Fonte.....: user.sql
  Objetivo..........: Cadastrar um usuario
  Autor.............: Miguel Aleixo
  Data..............: 23/06/2020
  Ex................:
    SELECT * FROM public.registerUser('Cairo Araujo','teste123', 1, '12345678909', 'cairo@hotmail.com', '999999999', '05/08/1998', 'Rua dos Colibris', '502', 'Aeroporto', '', '14402155');

*/

DECLARE vIdEndereco INTEGER;

BEGIN
  
  INSERT INTO public.tb_enderecos (
    logradouro,
    bairro,
    numero,
    complemento,
    cep
  )
  values (
  pLogradouro,
  pBairro,
  pNumero,
  pComplemento,
  pCep
  )

  RETURNING id_endereco
    INTO vIdEndereco;
   
   
   INSERT INTO public.tb_usuarios (
    nome,
    senha,
    id_genero,
    id_endereco,
    cpf,
    email_login,
    telefone,
    data_nasc
  )
  VALUES (
    pNome,
    pSenha,
    pIdGenero,
    vIdEndereco,
    pCpf,
    pEmail,
    pTelefone,
    pDataNascimento
  );

  RETURN json_build_object(
      'executionCode', 0,
      'message', 'Ok'
  );

END;
$function$
;















CREATE OR REPLACE FUNCTION public.selectuser(pid integer)
 RETURNS TABLE(id integer, name character varying, login character varying, cpf character, phone character varying, "birthDay" date, street character varying, neighborhood character varying, number character varying, complement character varying, "zipCode" character)
 LANGUAGE plpgsql
AS $function$
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
    u.telefone ,
    u.data_nasc,
    e.logradouro,
    e.bairro,
    e.numero,
    e.complemento,
    e.cep 
FROM
    public.tb_usuarios u
    inner join tb_enderecos e on e.id_endereco = u.id_endereco
WHERE
    u.id_usr = pId;

END;

$function$
;


