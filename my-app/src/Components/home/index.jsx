import { Container, ContainerForm, DivInfo, DivH1, DivValor, Pfilho, Ppai, divForm } from "./style";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Home = () => {
    // const [venda, setVenda]= useState(0)
    const [resultado15day, setResultado15day]= useState(0)
    const [resultado, setResultado]= useState(0)
    const [resultado30day, setResultado30day]= useState(0)
    const [resultado90day, setResultado90day]= useState(0)
    
  const {
    register,
    handleSubmit,
      } = useForm();



function saleValue(data){
    const resultVendaAmanha = ((((data.valorVenda * data.percentualMDR)/100)- data.valorVenda)*(-1))
    const resultVendaParc15day = ((((data.valorVenda * 4.36)/100)- data.valorVenda)*(-1))
    const resultVend30day = ((((data.valorVenda * 3.60)/100)- data.valorVenda)*(-1))
    const resultVenda90day = ((((data.valorVenda * 0.60)/100)- data.valorVenda)*(-1))

    // const nParc2Hora = ((resultVendaAmanha - (data.valorVenda * 4.59)/100))
    // const nParc215day = ((resultVendaParc15day - (data.valorVenda * data.percentualMDR)/100))

    // if (data.numeroParcelas){
    //     setResultado(resultVendaAmanha)
    //     setResultado15day (resultVendaParc15day)
    //     setResultado30day (resultVend30day)
    //     setResultado90day (resultVenda90day)

    // }

    if(data.numeroParcelas=== "2"){
        setResultado(Math.round(resultVendaAmanha - ((data.valorVenda*4.59)/100)))
        setResultado15day (resultVendaParc15day - ((data.valorVenda*4.59)/100))
        setResultado30day (resultVend30day - ((data.valorVenda*4.59)/100))
        setResultado90day (resultVenda90day - ((data.valorVenda*4.59)/100))
    }else if(data.numeroParcelas=== "3"){
        setResultado(Math.round(resultVendaAmanha - ((data.valorVenda*5.97)/100)))
        setResultado15day (resultVendaParc15day - ((data.valorVenda*5.97)/100))
        setResultado30day (resultVend30day - ((data.valorVenda*5.97)/100))
        setResultado90day (resultVenda90day - ((data.valorVenda*5.97)/100))

    }
    else if(data.numeroParcelas=== "4"){
        setResultado(Math.round(resultVendaAmanha - ((data.valorVenda*7.33)/100)))
        setResultado15day (resultVendaParc15day - ((data.valorVenda*7.33)/100))
        setResultado30day (resultVend30day - ((data.valorVenda*7.33)/100))
        setResultado90day (resultVenda90day - ((data.valorVenda*7.33)/100))

    }
    else if(data.numeroParcelas=== "5"){
        setResultado(Math.round(resultVendaAmanha - ((data.valorVenda*8.66)/100)))
        setResultado15day (resultVendaParc15day - ((data.valorVenda*8.66)/100))
        setResultado30day (resultVend30day - ((data.valorVenda*8.66)/100))
        setResultado90day (resultVenda90day - ((data.valorVenda*8.66)/100))

    }
    else if(data.numeroParcelas=== "6"){
        setResultado(Math.round(resultVendaAmanha - ((data.valorVenda*9.96)/100)))
        setResultado15day (resultVendaParc15day - ((data.valorVenda*9.96)/100))
        setResultado30day (resultVend30day - ((data.valorVenda*9.96)/100))
        setResultado90day (resultVenda90day - ((data.valorVenda*9.96)/100))

    }
    else if(data.numeroParcelas=== "7"){
        setResultado(Math.round(resultVendaAmanha - ((data.valorVenda*11.24)/100)))
        setResultado15day (resultVendaParc15day - ((data.valorVenda*11.24)/100))
        setResultado30day (resultVend30day - ((data.valorVenda*11.24)/100))
        setResultado90day (resultVenda90day - ((data.valorVenda*11.24)/100))

    }
    else if(data.numeroParcelas=== "8"){
        setResultado(Math.round(resultVendaAmanha - ((data.valorVenda*12.50)/100)))
        setResultado15day (resultVendaParc15day - ((data.valorVenda*12.50)/100))
        setResultado30day (resultVend30day - ((data.valorVenda*12.50)/100))
        setResultado90day (resultVenda90day - ((data.valorVenda*12.50)/100))

    }
    else if(data.numeroParcelas=== "9"){
        setResultado(Math.round(resultVendaAmanha - ((data.valorVenda*13.73)/100)))
        setResultado15day (resultVendaParc15day - ((data.valorVenda*13.73)/100))
        setResultado30day (resultVend30day - ((data.valorVenda*13.73)/100))
        setResultado90day (resultVenda90day - ((data.valorVenda*13.73)/100))

    }
    else if(data.numeroParcelas=== "10"){
        setResultado(Math.round(resultVendaAmanha - ((data.valorVenda*14.93)/100)))
        setResultado15day (resultVendaParc15day - ((data.valorVenda*14.93)/100))
        setResultado30day (resultVend30day - ((data.valorVenda*14.93)/100))
        setResultado90day (resultVenda90day - ((data.valorVenda*14.93)/100))

    }
    else if(data.numeroParcelas=== "11"){
        setResultado(Math.round(resultVendaAmanha - ((data.valorVenda*16.12)/100)))
        setResultado15day (resultVendaParc15day - ((data.valorVenda*16.12)/100))
        setResultado30day (resultVend30day - ((data.valorVenda*16.12)/100))
        setResultado90day (resultVenda90day - ((data.valorVenda*16.12)/100))

    }
    else if(data.numeroParcelas=== "12"){
        setResultado(Math.round(resultVendaAmanha - ((data.valorVenda*17.28)/100)))
        setResultado15day (resultVendaParc15day - ((data.valorVenda*17.28)/100))
        setResultado30day (resultVend30day - ((data.valorVenda*17.28)/100))
        setResultado90day (resultVenda90day - ((data.valorVenda*17.28)/100))

    }else {        
        setResultado(resultVendaAmanha)
        setResultado15day (resultVendaParc15day)
        setResultado30day (resultVend30day)
        setResultado90day (resultVenda90day)    
    }
    
   
    
} 

  return (
    <Container>
      <ContainerForm>
        <h1>Simule sua Antecipação</h1>
        <div>
          <form onSubmit={handleSubmit(saleValue)}>
            <div>
            <div>
              <label htmlFor="valorVenda"> Informe o valor da venda*</label>
              <input type="number" id="valorVenda" name="valorVenda" {...register("valorVenda")} />
            </div>
            <div>
              <label htmlFor="parcelas"> Em quantas parcelas*</label>
              <input border="" type="number" id="parcelas" name="numeroParcelas"  {...register("numeroParcelas")}/>
            </div>
            <div>
              <label htmlFor="mdr"> Informe o percentual de MDR</label>
              <input type="text" id="mdr" name="percentualMDR" {...register("percentualMDR")} />
            </div>
        <button type="submit"> Calcular</button>
            </div>
          </form>
        </div>
      </ContainerForm>

      <DivInfo>
        <DivH1>
          <h2> Você receberá:</h2>
        </DivH1>
        <DivValor>
          
          <Ppai>Amanha:  <Pfilho>R${resultado}</Pfilho> </Ppai>

          <Ppai>Em 15 dias: <Pfilho>R${resultado15day}</Pfilho>
            </Ppai> 

          
          <Ppai>Em 30 dias: <Pfilho>R${resultado30day}</Pfilho>
            </Ppai>  

          
          <Ppai>Em 90 dias: <Pfilho> R${resultado90day}</Pfilho>
            </Ppai>  

          
        </DivValor>
      </DivInfo>
    </Container>
  );
};
export default Home;
