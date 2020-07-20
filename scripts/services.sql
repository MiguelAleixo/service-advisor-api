CREATE OR REPLACE FUNCTION public.registersolicitation(pidservico integer, piduser integer, pmensagem character varying)
 RETURNS json
 LANGUAGE plpgsql
AS $function$

/*
  Documentação
  Arquivo Fonte.....: service.sql
  Objetivo..........: Cadastrar uma solicitação
  Autor.............: Miguel Aleixo
  Data..............: 10/07/2020
  Ex................:
    SELECT * FROM public.registerSolicitation(6, 1, 'Traz um parafuso')

*/

begin

  INSERT INTO public.tb_solicitacao_servico (
    id_status,
    id_servico,
    id_usr,
    data,
    mensagem
  )
  VALUES (
    1,
    pIdServico,
    pIdUser,
    current_timestamp,
    pMensagem
  );
  
  RETURN json_build_object(
      'executionCode', 0,
      'message', 'Ok'
  );

END;
$function$
;








CREATE OR REPLACE FUNCTION public.selectmysolicitation(piduser integer)
 RETURNS TABLE(idsolicitation integer, idservice integer, message character varying, name character varying, status character varying)
 LANGUAGE plpgsql
AS $function$
/*
 Documentação
 Arquivo Fonte.....: service.sql
 Objetivo..........: Selecionar uma solicitação pelo ID do próprio usuário
 Autor.............: Miguel Aleixo
 Data..............: 16/07/2020
 Ex................: SELECT * FROM public.selectmysolicitation(1);
 */
BEGIN RETURN QUERY
select
	ss.id_solicitacao_servico,
	ss.id_servico,
	ss.mensagem,
	s.nome,
	st.desc_status
FROM
    public.tb_solicitacao_servico ss
    inner join tb_status st on st.id_status = ss.id_status
    inner join tb_servico s on s.id_servico = ss.id_servico 
    where ss.id_usr = piduser;
END;

$function$
;











CREATE OR REPLACE FUNCTION public.selectservice(piduser integer, pidcategory integer)
 RETURNS TABLE(id integer, name character varying, description character varying, img character varying, provider character varying, category character varying, "time" character varying, value character varying)
 LANGUAGE plpgsql
AS $function$
/*
 Documentação
 Arquivo Fonte.....: service.sql
 Objetivo..........: Selecionar um serviço por ID
 Autor.............: Miguel Aleixo
 Data..............: 22/06/2020
 Ex................: SELECT * FROM public.selectService(3, 1);
 */
BEGIN
if pidcategory > 0 then
RETURN QUERY select
	s.id_servico,
    s.nome,
    s.descricao,
    s.imagem,
    u.nome,
    c.nome_categoria,
    t.desc_tempo,
    v.desc_valor
    
FROM
    public.tb_servico s
    inner join tb_usuarios u on u.id_usr = s.id_usr 
    inner join tb_categoria c on c.id_categoria = s.id_categoria 
    inner join tb_tempo t on t.id_tempo = s.id_tempo 
    inner join tb_valor v on v.id_valor = s.id_valor
    where u.id_usr <> pIdUser and s.id_categoria = pidcategory;
   
else

RETURN QUERY select
	s.id_servico,
    s.nome,
    s.descricao,
    s.imagem,
    u.nome,
    c.nome_categoria,
    t.desc_tempo,
    v.desc_valor
    
FROM
    public.tb_servico s
    inner join tb_usuarios u on u.id_usr = s.id_usr 
    inner join tb_categoria c on c.id_categoria = s.id_categoria 
    inner join tb_tempo t on t.id_tempo = s.id_tempo 
    inner join tb_valor v on v.id_valor = s.id_valor
    where u.id_usr <> pIdUser;
end if;
END;

$function$
;






CREATE OR REPLACE FUNCTION public.updatesolicitation(pidsolicitation integer, pidstatus integer)
 RETURNS json
 LANGUAGE plpgsql
AS $function$

/*
  Documentação
  Arquivo Fonte.....: service.sql
  Objetivo..........: Atualizar o status de uma solicitação
  Autor.............: Miguel Aleixo
  Data..............: 20/07/2020
  Ex................:
    SELECT * FROM public.updatesolicitation(10, 2)

*/

begin

  UPDATE public.tb_solicitacao_servico SET
    id_status = pidstatus
  where id_solicitacao_servico = pidsolicitation;
  
  RETURN json_build_object(
      'executionCode', 0,
      'message', 'Ok'
  );

END;
$function$
;





