import { FC, useState } from "react";
import marcas from "./Marcas";
import Dropdown from 'react-dropdown';
import styled from "styled-components"
import "./App.css";
import Popup from 'reactjs-popup';

interface BAdd {
    AdcionarBebida: Function;
}

const BebidaAdcionar:FC<BAdd> = (props) => {
    const [nome,setNome] = useState("");
    const [marca,setMarca] = useState("Brasil");

    const defaultOption = marcas[0];

    return <Popup trigger={
        <ButtonSubmit>Adcionar nova bebida</ButtonSubmit>
        } modal>
        <BebidaManagerCard>
            <Header>Adcionar nova bebida</Header>
            <ModalContent>
                <InputLabel>Nome:</InputLabel>
                <TextInput onChange={(e) => setNome(e.target.value)}/>
                <label>
                    <InputLabel>Marca:</InputLabel>
                    <Dropdown 
                        options={marcas} 
                        onChange={(e) => setMarca(e.value)} 
                        value={defaultOption} 
                        placeholder="Escolha a marca" 
                        
                    />
                </label>
                <ButtonSubmit onClick={() => props.AdcionarBebida(nome,marca)}> Adcionar nova bebida</ButtonSubmit>
            </ModalContent>
        </BebidaManagerCard>
      </Popup>
}

const ButtonSubmit = styled.div`
    border-radius: 16px;
    padding: 16px;
    margin: 16px;
    color:${props => props.theme.main};
	background-color: ${props => props.theme.backgroundLevel3};
`

const TextInput = styled.input`
    border-radius: 16px;
    padding: 16px;
    margin: 16px;
    color:${props => props.theme.main};
	background-color: ${props => props.theme.textInputBackground};
`

const BebidaManagerCard = styled.div`
    margin: 16px;
    padding: 16px;
    border-radius: 16px;
    color:${props => props.theme.main};
	background-color: ${props => props.theme.backgroundLevel2};
`

const Header = styled.div`
    width: 100%;
    border-bottom: 1px solid gray;
    font-size: 18px;
    text-align: center;
    padding: 5px;
`

const ModalContent = styled.div`
    width: 100%;
    padding: 10px 5px;
`

const InputLabel = styled.div`
    text-align: center;
    margin-top: 16px;
    margin-bottom: 16px;
    font-weight: 600;
`



export default BebidaAdcionar;