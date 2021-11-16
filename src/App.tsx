import React , {useState} from 'react';
import BebidaAdcionar from './BebidaManager';
import BebidaCard from './BebidaCard';
import styled , {ThemeProvider} from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	const [bebidas,setBebidas] = useState([{nome : "Bite", marca : "Brasil"},{nome : "Kirin", marca : "Japão"}]);
	const [darkMode,setDarkMode] = useState(false);

	function AdcionarBebidas(n : string,m : string) {
		let b = bebidas.slice(0);
		let obj = {nome : n, marca : m};
		if (IsInArray(obj,b)){
			toast.warn('Bebida já existe!', {
				position: "top-right",
				autoClose: 2500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} else {
			b.push(obj);
			setBebidas(b);
			toast("Bebida adcionada!");
		}

	}

	return (
		<ThemeProvider theme={darkMode ? theme : darkTheme}>
			<AppWrapper>
				<h1>Bebidas</h1>
				<ToastContainer />
				<BebidaAdcionar AdcionarBebida={AdcionarBebidas}/>
				<BebidasWrapper>
					{bebidas.map((bebida,index) => <BebidaCard key={bebida.nome} Index={index} Nome={bebida.nome} Marca={bebida.marca}/>)}
				</BebidasWrapper>
				<DarkModeButton onClick={() => setDarkMode(!darkMode)}> Dark Mode </DarkModeButton>
				<Footer>Projeto Lista de Bebidas</Footer>
			</AppWrapper>
		</ThemeProvider>
	);
}


const theme = {
	main: "black",
	background: "#e3e5e8",
	backgroundLevel2: "#f2f3f5",
	backgroundLevel3: "#ffffff",
	textInputBackground: "#ebedef"
  };

const darkTheme = {
	main: "white",
	background: "#202225",
	backgroundLevel2: "#2f3136",
	backgroundLevel3: "#36393f",
	textInputBackground: "#40444b"
};


function IsInArray(obj : any,array : any) {
	for(let i = 0;i < array.length;i++){
		if(JSON.stringify(obj) === JSON.stringify(array[i])){
			return true;
		}
	} 
	return false;
}

const Footer = styled.div`
	position:absolute;
	left:0;
	bottom:0;
	right:0;
`

const AppWrapper = styled.div`
	text-align: center;
	display: flex;
	color:${props => props.theme.main};
	background-color: ${props => props.theme.background};
	align-items: center;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    flex-wrap: nowrap;
	border-radius: 16px;
	margin: 16px;
`

const BebidasWrapper = styled.div`
	display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: auto;
    border-radius: 16px 16px 0px 0px;
    padding: 16px;
	color:${props => props.theme.main};
	background-color: ${props => props.theme.background};
`

const DarkModeButton = styled.div`
    border-radius: 16px;
    padding: 16px;
	width: 10rem;
    color:${props => props.theme.main};
	background-color: ${props => props.theme.backgroundLevel3};
`

export default App;
