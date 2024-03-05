// eslint-disable-next-line react/prop-types
export const MeusDadosProps = ( { nome, curso, universiade } ) => {
  return (
    <>
      <strong>Nome: {nome}</strong>

      <strong>Curso: {curso}</strong>
      
      <strong>Universidade:{universiade}</strong>
    </>
  );
}