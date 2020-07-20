CREATE OR REPLACE FUNCTION public.deletemyservice(pidservice integer)
 RETURNS json
 LANGUAGE plpgsql
AS $function$

/*
  Documentação
  Arquivo Fonte.....: service.sql
  Objetivo..........: Remover um serviço
  Autor.............: Miguel Aleixo
  Data..............: 23/06/2020
  Ex................: SELECT * FROM public.deletemyservice(3)
*/

BEGIN

  DELETE FROM public.tb_servico 
  WHERE id_servico = pidservice;

  RETURN json_build_object(
      'executionCode', 0,
      'message', 'Ok'
  );

END;
$function$
;





CREATE OR REPLACE FUNCTION public.registermyservice(pnome character varying, pdesc character varying, pimg character varying, piduser integer, pidcategoria integer, pidtempo integer, pidvalor integer)
 RETURNS json
 LANGUAGE plpgsql
AS $function$

/*
  Documentação
  Arquivo Fonte.....: service.sql
  Objetivo..........: Cadastrar um serviço
  Autor.............: Miguel Aleixo
  Data..............: 23/06/2020
  Ex................:
    SELECT * FROM public.registerMyService('Quebra de parede','Quebro paredes com método silencioso', '', 3, 2, 4, 4)

*/

begin

  INSERT INTO public.tb_servico (
    nome,
    descricao,
    imagem,
    id_categoria,
    id_tempo,
    id_valor,
    id_usr
  )
  VALUES (
    pNome,
    pDesc,
    pImg,
    pIdCategoria,
    pIdTempo,
    pIdValor,
    pIdUser
  );
  
  RETURN json_build_object(
      'executionCode', 0,
      'message', 'Ok'
  );

END;
$function$
;




CREATE OR REPLACE FUNCTION public.selectmyservice(piduser integer)
 RETURNS TABLE(id integer, name character varying, description character varying, img character varying, category character varying, "time" character varying, value character varying, "idSolicitation" integer, "idStatus" integer, message character varying, requester character varying, logradouro character varying, numero character varying, bairro character varying, cep character)
 LANGUAGE plpgsql
AS $function$
/*
 Documentação
 Arquivo Fonte.....: service.sql
 Objetivo..........: Selecionar um serviço por ID do próprio usuário
 Autor.............: Miguel Aleixo
 Data..............: 22/06/2020
 Ex................: SELECT * FROM public.selectmyservice(3);
 */
BEGIN RETURN QUERY
select
	s.id_servico,
    s.nome,
    s.descricao,
    s.imagem,
    c.nome_categoria,
    t.desc_tempo,
    v.desc_valor,
    
    ss.id_solicitacao_servico,
    ss.id_status,
    ss.mensagem,
    usr.nome,
    e.logradouro,
    e.numero,
    e.bairro,
    e.cep
    
FROM
    public.tb_servico s
    left join tb_solicitacao_servico ss on ss.id_servico = s.id_servico 
    left join tb_usuarios usr on usr.id_usr = ss.id_usr
    left join tb_enderecos e on e.id_endereco = usr.id_endereco 
    
    inner join tb_categoria c on c.id_categoria = s.id_categoria 
    inner join tb_tempo t on t.id_tempo = s.id_tempo 
    inner join tb_valor v on v.id_valor = s.id_valor
    
    inner join tb_usuarios u on u.id_usr = s.id_usr 
    
    
    where u.id_usr = piduser;

END;

$function$
;






CREATE OR REPLACE FUNCTION public.updatemyservice(pidservice integer, pnome character varying, pdesc character varying, pidcategoria integer, pidtempo integer, pidvalor integer)
 RETURNS json
 LANGUAGE plpgsql
AS $function$

/*
  Documentação
  Arquivo Fonte.....: service.sql
  Objetivo..........: Alterar um serviço
  Autor.............: Miguel Aleixo
  Data..............: 24/06/2020
  Ex................:
    SELECT * FROM public.updateMyService(10, 'Quebra de parede','Quebro paredes com método silencioso', 2, 4, 4)

*/

begin

  UPDATE public.tb_servico SET
    nome = pNome,
    descricao = pDesc,
    id_categoria = pIdCategoria,
    id_tempo = pIdTempo,
    id_valor = pIdValor
  where id_servico = pidservice;
  
  RETURN json_build_object(
      'executionCode', 0,
      'message', 'Ok'
  );

END;
$function$
;






CREATE OR REPLACE FUNCTION public.updatemyservice(pidservice integer, pnome character varying, pdesc character varying, pimg character varying, pidcategoria integer, pidtempo integer, pidvalor integer)
 RETURNS json
 LANGUAGE plpgsql
AS $function$

/*
  Documentação
  Arquivo Fonte.....: service.sql
  Objetivo..........: Alterar um serviço
  Autor.............: Miguel Aleixo
  Data..............: 24/06/2020
  Ex................:
    SELECT * FROM public.updateMyService(10, 'Quebra de parede','Quebro paredes com método silencioso', '',  2, 4, 4)

*/

begin

  UPDATE public.tb_servico SET
    nome = pNome,
    descricao = pDesc,
    imagem = pimg,
    id_categoria = pIdCategoria,
    id_tempo = pIdTempo,
    id_valor = pIdValor
  where id_servico = pidservice;
  
  RETURN json_build_object(
      'executionCode', 0,
      'message', 'Ok'
  );

END;
$function$
;


























