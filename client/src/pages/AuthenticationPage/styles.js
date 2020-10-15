import styled from 'styled-components';
export const CardForm = styled.div`
  border: 1px solid #5cb85c;
  border-radius: 5px;
  `
export const WarningSpan = styled.span`
  color: red;
  font-size: .8rem;
  float: right;

`
export const CardHeader = styled.div`
    height: 50px;
    padding-left: 5px;
    font-size: 16px;
    color: #fefefe;
    font-weight: 700;
    padding-left: 15px;
    font-family: 'Titillium Web', Arial, Helvetica, sans-serif;
    border: 1px solid rgba(255, 255, 255, 0.1);
    text-align:left;
    background-color: #5cb85c;
    letter-spacing: 1px;
`
export const CardBody = styled.div`
  background-color:black;
  padding: 10px 10px 10px 10px;
  background: url(/static/images/striped_bg.gif) repeat;
`
export const Label = styled.div`
  font: 14px Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #999;  
  font-size: 14px;
  color: #4d4d4d;
  cursor: pointer;
  display: block;
  font-weight: 500;
  margin-bottom: 3px;
  text-align: left;
  `

export const Input = styled.input`
  font: 16px Arial, Helvetica, sans-serif;
  outline: none;
  height: 36px;
  border-radius: 5px;
  font-size: 20px
  padding-left: 3px;
  display: block;
  width:100%;
  margin-top: 10px;
  margin-bottom:20px;
  transition: all 0.15s linear;
  -webkit-appearance: textfield;
  background-color: white;
  -webkit-rtl-ordering: logical;
  cursor: text;  


`;
export const Button = styled.button`
  padding: 1px 15px 2px 15px;
  min-height: 25px;
  color: white;
  font-family: Arial;
  font-size: 13px;
  font-family: 'Titillium Web', Arial, Helvetica, sans-serif;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 50px;
  text-shadow: 1px 1px 0px #1a355f;
  box-shadow: 1px 1px 3px rgba(0,0,0,0.5), inset 0 0 16px rgba(0,0,0,0.5);
  border: none;
  border-top: 1px solid rgba(255,255,255,0.3);
  border-bottom: 1px solid rgba(0,0,0,0.5);
  background: #2c507a;
  background: -moz-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #2c507a), color-stop(50%, #395f89), color-stop(50%, #2c507a), color-stop(100%, #305681));
  background: -webkit-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%);
  background: -o-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%);
  background: -ms-linear-gradient(top, #2c507a 0%, #395f89 50%, #2c507a 50%, #305681 100%);
  background: linear-gradient(to bottom, #2c507a 0%,#395f89 50%,#2c507a 50%,#305681 100%);
  white-space: nowrap; 
  outline: none;
  &:hover {
    cursor: pointer;
    background: #4d7cb3;
  }
`;
export const InnerContainer = styled.div`
  width:90%;
`
export const CreateBtn = styled.button.attrs({
  className: "btn btn-outline-dark btn-block mb-2"
})`

`
export const Select = styled.select.attrs({
})`
  background-color: #3e3e3e;
  font: 16px Arial, Helvetica, sans-serif;
  color: #ccc;
  outline: none;
  border: none;
  padding: 2px 12px;
  height: 36px;
  text-shadow: 1px 1px 0px #000;  
  box-shadow: inset 0px 2px 2px rgba(0,0,0,0.5);  
  border-radius: 5px;
  width: 100%;
  text-transform: none;
  box-sizing: border-box;
  align-items: center;
  white-space: pre;
  cursor: default;

  margin-top: 10px;
  margin-bottom:20px;
`
export const SignUpWrapper = styled.div`
  max-width: 400px;
  margin: 3rem auto;
`
export const ConfirmDiv = styled.div`

`