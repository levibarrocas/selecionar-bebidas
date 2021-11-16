import { FC } from "react";
import styled from "styled-components"
import Popup from 'reactjs-popup';

interface Bebida {
    Nome: String;
    Marca: String;
    Index: Number;
}

const BebidaCard:FC<Bebida> = (props) => {
    let historia = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis purus lacus, luctus quis justo fringilla, faucibus gravida massa. Etiam scelerisque aliquam urna at imperdiet. Etiam nunc ipsum, sodales vel urna quis, semper condimentum quam. Nulla egestas magna gravida justo efficitur, nec condimentum sapien maximus. Sed vitae purus lectus. Ut pulvinar augue sodales, suscipit felis quis, rutrum metus. Aliquam euismod nunc at interdum efficitur. Praesent placerat quis nunc a mollis. Praesent sodales in ex non mattis. Phasellus euismod quis mauris ut dignissim. Proin sed fermentum neque, nec dignissim velit. Sed id lectus ut ligula sollicitudin sodales. Duis vestibulum, enim sed eleifend dapibus, orci purus lobortis velit, vitae convallis risus quam non augue. Aenean nec placerat arcu."

    return <Popup trigger={
    <Card>
        <h3>{props.Nome}</h3> 
        <b>Marca:</b> {props.Marca} <br/>
        <Historia>
            {historia}
        </Historia>
    </Card>
    } modal>
    <BebidaInformationCard>
        <Header>{props.Nome}</Header><br/>
        <SubHeader><b>Marca:</b>{props.Marca}</SubHeader>
        <ModalContent>{historia}</ModalContent>
    </BebidaInformationCard>
  </Popup>
}

const BebidaInformationCard = styled.div`
    margin: 16px;
    padding: 16px;
    border-radius: 16px;
    color:${props => props.theme.main};
	background-color: ${props => props.theme.backgroundLevel2};
`

const Header = styled.div`
    width: 100%;

    font-size: 18px;
    text-align: center;
    padding: 5px;
`
const SubHeader = styled.div`
    width: 100%;
    border-bottom: 1px solid gray;
    font-size: 16px;
    text-align: center;
    padding: 5px;
`

const ModalContent = styled.div`
    width: 100%;
    padding: 10px 5px;
`

const Card = styled.div`
    background: #fff;
    border-radius: 2px;
    display: inline-block;
    height: 300px;
    margin: 1rem;
    position: relative;
    width: 300px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    overflow-y: hidden;
    border-radius: 16px;
    :hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    color:${props => props.theme.main};
	background-color: ${props => props.theme.backgroundLevel2};
`

const Historia = styled.div`
    background: #afafaf;
    margin-top: 16px;
    padding-top: 16px;
    border-radius: 16px 16px 0px 0px;
    color:${props => props.theme.main};
	background-color: ${props => props.theme.backgroundLevel3};
`

export default BebidaCard;