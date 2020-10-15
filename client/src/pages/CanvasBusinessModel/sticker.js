import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import { Edit, MoreHoriz } from "@material-ui/icons";

import {
  StickerContainer,
  TextInput,
  MenuBar,
  MenuItem,
  ColorPicker,
  ColorPickerModalContainer,
  ColorItem,
  DetailContainer,
  DetailItem,
  Spliter,
  SizeItem,
  EditTitle,
  EditDescription,
  ContentContainer
} from "./styles";

const Sticker = (props) => {
  const [border, setBorder] = useState("");
  const [background, setBackColor] = useState(props.color);
  const [isEditing, setEditing] = useState(props.isEditing);
  const [showMenu, setShowMenu] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  // const [size, setSize] = useState(props.size);
  // const [isLocked, setLocked] = useState(props.isLocked);
  const [content, setContent] = useState(props.data);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [description, setDescription] = useState("");
  const [showEditDlg, setShowEditDlg] = useState(false);
  const [showUnlockMenu, setShowUnlockMenu] = useState(false);

  const textRef = useRef(null);
  const editRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      textRef.current.focus();
    }
  }, [textRef, isEditing]);
  useEffect(() => {
    editRef.current.focus();
  }, [editRef]);

  const handleStart = (e) => {
    setBorder("1px solid #00ff00");
    setShowMenu(true);
    setOffset({ x: e.clientX - props.x, y: e.clientY - props.y });
    props.setOrder(props.id);
  };
  const handleDrag = () => {};
  const handleStop = (e) => {
    console.log("down point = ", e);
    setBorder("");
    props.onMove(
      props.id,
      e.clientX - offset.x,
      e.clientY - offset.y + props.id * 70 + 100
    );
  };

  return (
    <Draggable
      axis="both"
      position={{ x: props.x, y: props.y }}
      // grid={[25, 25]}
      scale={1}
      disabled={props.isLocked ? true : isEditing ? true : false}
      bounds="parent"
      onStart={handleStart}
      onDrag={handleDrag}
      onStop={handleStop}
    >
      <StickerContainer
        width={20 * props.size}
        height={20 * props.size}
        background={background}
        style={{ zIndex: props.order, position: "relative" }}
        border={border}
        tabIndex={-1}
        onClick={(e) => {
          e.stopPropagation();
        }}
        onContextMenu={(e) => {
          console.log("right clicked");
          if (props.isLocked) {
            setShowUnlockMenu(true);
          } else {
            setShowDetail(true);
          }
          e.preventDefault();
          e.stopPropagation();
        }}
        onDoubleClick={(e) => {
          e.stopPropagation();
          if (!props.isLocked) {
            setEditing(true);
            var interval = setInterval(() => {
              if (textRef) {
                textRef.current.focus();
                clearInterval(interval);
              }
            }, 100);
          }
        }}
        onFocus={() => {}}
        onBlur={() => {
          if (!showEditDlg) {
            setShowMenu(false);
            setShowColorPicker(false);
            setShowDetail(false);
            setShowUnlockMenu(false);
            // setShowEditDlg(false);
            if (content === "") {
              props.onDelete(props.id);
            }
          }
        }}
      >
        <MenuBar display={showUnlockMenu && props.isLocked ? "flex" : "none"}>
          <MenuItem>
            <p
              onClick={() => {
                props.setLocked(props.id, false);
              }}
              style={{ color: "#1196f1" }}
            >
              Unlock
            </p>
          </MenuItem>
        </MenuBar>
        <MenuBar display={showMenu && !isEditing ? "flex" : "none"}>
          <MenuItem
            onClick={() => {
              setShowEditDlg(true);
              setShowColorPicker(false);
              setShowDetail(false);
              var interval = setInterval(() => {
                if (editRef) {
                  editRef.current.focus();
                  clearInterval(interval);
                }
              }, 100);
            }}
          >
            <Edit />
          </MenuItem>
          <MenuItem
            onClick={() => {
              setShowColorPicker(true);
              setShowEditDlg(false);
              setShowDetail(false);
            }}
          >
            <ColorPicker color={background} />
          </MenuItem>
          <MenuItem
            last={true}
            onClick={() => {
              setShowDetail(true);
              setShowEditDlg(false);
              setShowColorPicker(false);
            }}
          >
            <MoreHoriz />
          </MenuItem>
        </MenuBar>
        <ColorPickerModalContainer display={showColorPicker ? "flex" : "none"}>
          <ColorItem
            color="#fbea70"
            onClick={() => {
              setBackColor("#fbea70");
              setShowColorPicker(false);
              props.setColor(props.id, '#fbea70');
            }}
          />
          <ColorItem
            color="#ffcd83"
            onClick={() => {
              setBackColor("#ffcd83");
              setShowColorPicker(false);
              props.setColor(props.id, '#ffcd83');
            }}
          />
          <ColorItem
            color="#ffb9ba"
            onClick={() => {
              setBackColor("#ffb9ba");
              setShowColorPicker(false);
              props.setColor(props.id, '#ffb9ba');
            }}
          />
          <ColorItem
            color="#fec9fa"
            onClick={() => {
              setBackColor("#fec9fa");
              setShowColorPicker(false);
              props.setColor(props.id, '#fec9fa');
            }}
          />
          <ColorItem
            color="#8fe7fe"
            onClick={() => {
              setBackColor("#8fe7fe");
              setShowColorPicker(false);
              props.setColor(props.id, '#8fe7fe');
            }}
          />
          <ColorItem
            color="#ccee9d"
            onClick={() => {
              setBackColor("#ccee9d");
              setShowColorPicker(false);
              props.setColor(props.id, '#ccee9d');
            }}
          />
          <ColorItem
            color="#d8dadc"
            onClick={() => {
              setBackColor("#d8dadc");
              setShowColorPicker(false);
              props.setColor(props.id, '#d8dadc');
            }}
          />
        </ColorPickerModalContainer>
        <DetailContainer display={showDetail ? "flex" : "none"}>
          <DetailItem>
            <SizeItem
              active={props.size === 1}
              onClick={() => {
                props.setSize(props.id, 1);
                setShowDetail(false);
              }}
            >
              XS
            </SizeItem>
            <SizeItem
              active={props.size === 2}
              onClick={() => {
                props.setSize(props.id, 2);
                setShowDetail(false);
              }}
            >
              S
            </SizeItem>
            <SizeItem
              active={props.size === 3}
              onClick={() => {
                props.setSize(props.id, 3);
                setShowDetail(false);
              }}
            >
              M
            </SizeItem>
            <SizeItem
              active={props.size === 4}
              onClick={() => {
                props.setSize(props.id, 4);
                setShowDetail(false);
              }}
            >
              L
            </SizeItem>
            <SizeItem
              active={props.size === 5}
              onClick={() => {
                props.setSize(props.id, 5);
                setShowDetail(false);
              }}
            >
              XL
            </SizeItem>
          </DetailItem>
          <Spliter />
          <DetailItem
            onClick={() => {
              props.setLocked(props.id, true);
              setShowMenu(false);
              setShowDetail(false);
            }}
          >
            <span style={{ color: "#1196f1" }}>Lock</span>
          </DetailItem>
          <DetailItem
            onClick={(e) => {
              props.onDuplicate(
                props.x,
                props.y + 90,
                content,
                false,
                props.order + 1
              );
              setShowMenu(false);
              setShowDetail(false);
            }}
          >
            <span style={{ color: "#1196f1" }}>Duplicate</span>
          </DetailItem>
          <Spliter />
          <DetailItem
            onClick={() => {
              props.onDelete(props.id);
              setShowMenu(false);
              setShowDetail(false);
            }}
          >
            <span style={{ color: "#ff3440" }}>Delete</span>
          </DetailItem>
        </DetailContainer>
        <DetailContainer
          onBlur={() => {
            setShowEditDlg(false);
          }}
          display={showEditDlg ? "flex" : "none"}
        >
          <EditTitle>{content}</EditTitle>
          <EditDescription
            ref={editRef}
            onBlur={() => {
              setShowEditDlg(false);
            }}
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            style={{ alignSelf: "center", marginTop: 3 }}
            onClick={() => setShowEditDlg(false)}
          >
            OK
          </button>
        </DetailContainer>
        {isEditing ? (
          <TextInput
            ref={textRef}
            defaultValue={content}
            onChange={(event) => {
              setContent(event.target.value);
            }}
            onBlur={() => {
              props.setData(props.id, content);
              setEditing(false);
            }}
          />
        ) : (
          <ContentContainer>
            <span style={{width: '100%', textAlign: 'center', verticalAlign: 'middle'}}>{content}</span>
          </ContentContainer>
        )}
      </StickerContainer>
    </Draggable>
  );
};

export default Sticker;
