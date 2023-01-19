import {
  Container,
  ContainerForm,
  DivInfo,
  DivH2,
  DivValor,
  Pfilho,
  Ppai,
  DivForm,
  Venda,
  Parcelas,
  Mdr,
  DivH1,
} from "./style";

import { useForm } from "react-hook-form";
import { api } from "../../service/api";
import { useState } from "react";
import React from "react";

interface IdataCalc {
  amount: number;
  installments: number;
  mdr: number;
  valorVenda: number;
  numeroParcelas: number;
  percentualMDR: number;
}
// interface IForm {
//   amount: number;
//   installments: number;
//   mdr: number;
// }

const Home = () => {
  const [apiResponse, setApiResponse] = useState({});

  async function UsefetchAPI({
    valorVenda,
    numeroParcelas,
    percentualMDR,
  }: IdataCalc) {
    const data = {
      amount: valorVenda,
      installments: numeroParcelas,
      mdr: percentualMDR,
    };

    const response = await api
      .post("/", data)
      .then((response) => {
        setApiResponse(response.data);
      })
      .catch((err) => {
        if (err.response.status === 408) {
          return response.status(408).json({
            message: "Timeout",
          });
        } else if (err.response.status === 500) {
          return response.status(500).json({
            message: "Internal Server Error",
          });
        }
        console.error("ops! ocorreu um erro" + err);
      });
  }

  const { register, handleSubmit } = useForm<IdataCalc>();

  return (
    <Container>
      <ContainerForm>
        <DivH1>
          <h1>Simule sua Antecipação</h1>
        </DivH1>
        <div>
          <form onSubmit={handleSubmit(UsefetchAPI)}>
            <DivForm>
              <Venda>
                <label htmlFor="valorVenda"> Informe o valor da venda*</label>
                <input
                  type="number"
                  id="valorVenda"
                  {...register("valorVenda")}
                />
              </Venda>
              <Parcelas>
                <label htmlFor="parcelas"> Em quantas parcelas*</label>
                <div>
                  <input
                    type="number"
                    id="parcelas"
                    {...register("numeroParcelas")}
                  />
                  <small>Máximo de 12 parcelas</small>
                </div>
              </Parcelas>
              <Mdr>
                <label htmlFor="mdr"> Informe o percentual de MDR</label>
                <input type="number" id="mdr" {...register("percentualMDR")} />
              </Mdr>
              <button type="submit"> Calcular</button>
            </DivForm>
          </form>
        </div>
      </ContainerForm>

      <DivInfo>
        <DivH2>
          <h2> Você receberá:</h2>
        </DivH2>
        <DivValor>
          <Ppai>
            Amanha: <Pfilho> R${apiResponse["1"]}</Pfilho>{" "}
          </Ppai>

          <Ppai>
            Em 15 dias: <Pfilho> R${apiResponse["15"]}</Pfilho>
          </Ppai>

          <Ppai>
            Em 30 dias: <Pfilho> R${apiResponse["30"]}</Pfilho>
          </Ppai>

          <Ppai>
            Em 90 dias: <Pfilho> R${apiResponse["90"]}</Pfilho>
          </Ppai>
        </DivValor>
      </DivInfo>
    </Container>
  );
};
export default Home;
