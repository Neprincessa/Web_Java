import styled from 'styled-components'

export const HeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;	
  font-family: sans-serif;
  background: radial-gradient(#e6ffff, #cadce8);
  color: #2d4158;
  height: 40px;
  justify-content: space-between;
  box-shadow: 0 5px 15px black;
  padding: 1px 20px 1px 20px;

`;

export const FooterStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  font-family: sans-serif;
  background: radial-gradient(#e6ffff, #cadce8);
  color: #2d4158;
  width: 100%;
  justify-content: center;
  align-items: flex-end;
  box-shadow: 0 -5px 15px black;
`;

export const FormLogin = styled.form`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  position: relative;
  text-align: center;
  box-shadow: 0 10px 20px black;
  width: fit-content;
  height: fit-content;
  background: radial-gradient(white, #cadce8);
  color: #2d4158;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    
`;
export const Main = styled.div`
    display: flex;
    flex-direction: ${props => props.registration ? "column" : "row"};
    align-items: center;
    justify-content: space-around;
    
`;

export const Follow = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    flex-direction: column;
`;

export const Registration = styled.form`
  justify-content: space-around;
  align-items: flex-start;
  align-content: center;
  flex-direction: column;
  border-radius: 20px;
  position: relative;
  text-align: center;
  box-shadow: 0 10px 20px black;
  width: fit-content;
  height: fit-content;
  background: radial-gradient(white, #cadce8);
  color: #2d4158;
  padding: 2px 10px 1px 10px;
`;

export const Zhmack = styled.form`
display: flex;
align-items: flex-end;
flex-direction: row;
justify-content: flex-center;
`;

export const Auth = styled.div`
  display: flex;
  height: 80vh;
  width: 100vh;
  min-height: 600px;
  min-width: 750px;
  flex-direction: row;
  border-radius: 20px;
  position: relative;
  box-shadow: 0 10px 20px black;
  background: radial-gradient(white, #cadce8);
  color: #2d4158;
`;