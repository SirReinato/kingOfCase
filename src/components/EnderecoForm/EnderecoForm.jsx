import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getCep } from '../../servicos/viaCep';

const EnderecoForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [cep, setCep] = useState("")
  const [endereco, setEndereco] = useState({});

  useEffect(() => {
    pegarCep(cep)
  }, [cep]);

  async function pegarCep(cep) {
    if (cep != "") {
      var validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        const cepData = await getCep(cep);
        setEndereco(cepData)
        return endereco;
      } 
    }
  }

  const onSubmit = async (data) => {
    const cep = data.cep;
    alert("Deu bom bucetaaaaa" + endereco.logradouro)
    return setCep(cep)
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="number"
        name="cep"
        placeholder="CEP"
        {...register("cep", { required: true })}
        onChange={event => setCep(event.target.value)}
      />
      {errors.cep && <span className="error">CEP obrigatório</span>}

      <input
        type="text"
        name="logradouro"
        placeholder="Logradouro"
        {...register("logradouro")}
        value={endereco.logradouro || ''}
        disabled
      />

      <input
        type="text"
        name="bairro"
        placeholder="Bairro"
        {...register}
        value={endereco.bairro || ''}
        disabled
      />

      <input
        type="text"
        name="cidade"
        placeholder="Cidade"
        {...register}
        value={endereco.localidade || ''}
        disabled
      />

      <input
        type="text"
        name="estado"
        placeholder="Estado"
        {...register}
        value={endereco.uf || ''}
        disabled
      />

      <button type="submit">Buscar Endereço</button>
    </form>
  );
};

export default EnderecoForm;
