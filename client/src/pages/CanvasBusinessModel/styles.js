import styled from "styled-components";

export const CompoContainer = styled.div`
  border: 1px solid #cdcdcd;
  flex: 1;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
`;

export const HeaderText = styled.a`
  font-size: 12px;
  margin-left: 5px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 120vh;
  height: 90vh;
  position: relative;
  margin: 5rem;
`;

export const RowContainer = styled.div`
  display: flex;
  flex: ${(props) => (props.rows ? props.rows : 1)};
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
export const StickerContainer = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 5px;
  background-color: ${(props) => props.background};
  /* border: ${(props) => props.border}; */
  cursor: pointer;
  align-items: center;
  justify-content: center;
  padding: 10px;
  display: flex;
  &:focus {
    outline-color: #1196f1;
    outline-width: 2px;
  }
`;

export const TextInput = styled.textarea`
  background-color: transparent;
  border: none;
  width: 100%;
  height: 50px;
  overflow: hidden;
  resize: none;
  &:focus {
    outline-color: #1196f1;
    outline-width: 2px;
  }
`;

export const MenuBar = styled.div`
  position: absolute;
  top: -35px;
  width: 100px;
  height: 30px;
  flex-direction: row;
  display: ${(props) => props.display};
  border-radius: 5px;
  background-color: white;
  margin-bottom: 5px;
  box-shadow: 1px 1px 5px 0px;
`;

export const MenuItem = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: ${(props) => (props.last ? "none" : "1px solid #cdcdcd")};
`;

export const ColorPicker = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: ${(props) => props.color};
`;

export const ColorPickerModalContainer = styled.div`
  position: absolute;
  top: -5px;
  width: 200px;
  height: 30px;
  box-shadow: 1px 1px 5px 0px;
  display: ${(props) => props.display};
  flex-direction: row;
  flex: 1;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const ColorItem = styled.a`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  margin: 5px;
  background-color: ${(props) => props.color};
`;

export const DetailContainer = styled.div`
  position: absolute;
  top: -5px;
  width: 120px;
  height: 130px;
  box-shadow: 1px 1px 5px 0px;
  display: ${(props) => props.display};
  flex-direction: column;
  flex: 1;
  border-radius: 5px;
  justify-content: center;
  align-items: flex-start;
  background-color: white;
  padding: 5px;
  overflow: hidden;
`;

export const DetailItem = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Spliter = styled.div`
  width: 110%;
  height: 1px;
  background-color: #cdcdcd;
  margin-left: -5px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const SizeItem = styled.a`
  display: flex;
  flex: 1;
  border: 1px solid #000;
  width: 20px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.active ? "#18b1f6" : "white")};
`;

export const EditTitle = styled.a`
  padding: 10px;
  font-size: 14px;
  align-self: center;
`;

export const EditDescription = styled.textarea`
  width: 80%;
  align-self: center;
  resize: none;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;