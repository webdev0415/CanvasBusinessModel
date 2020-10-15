import styled from "styled-components";

export const FromGroup = styled.div`

`
export const BtnSection = styled.div`
	margin-top: 1rem;
	float: right;
`
export const Label = styled.label`
	margin-top: 1rem;
`
export const Input = styled.input`

`
export const Select = styled.select`

`
export const Option = styled.option`
`
export const CancelBtn = styled.button`
	padding: 10px 20px;
	color: gray;
	border: 1px solid gray;
	margin-right: 1rem;
`
export const CreateBtn = styled.button`

`
export const AddBtn = styled.button.attrs({
	className: "btn btn-primary"
})`
  padding: 10px 20px;
  color: white;
  margin: 20px;
`
export const LogoutBtn = styled.button.attrs({
	className: "btn btn-danger"
})`
	padding: 10px 20px;
	color: white;
	margin: 20px;

`
export const ErrSpan = styled.span`
	color: red;
`
export const ModelContent = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	width: 40%;
	transform: translate(-50%, -50%);
	background-color: white;
	border: none;
	border-radius: 5px;
	padding: 2rem 4rem;
`
export const WelcomeMsg = styled.h1`
`
export const CanvasItem = styled.div.attrs({
	className: "mt-4"
})`
  border: 1px solid gray;
  padding: 20px;
  width: 90%;
  margin: 0 auto;
  transition: all .3s;
  &:hover {
  	box-shadow: 3px 3px 5px gray;
  }
`