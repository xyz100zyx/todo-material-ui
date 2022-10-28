import React from 'react';
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import TextInput from "../TextInput/TextInput";
import ButtonModal from "../ButtonModal/ButtonModal";
import {useDispatch, useSelector} from "react-redux";
import ProjectService from "../../services/ProjectService";
import {createProject} from "../../store/slices/projectsSlice";
import project from "../Project/Project";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 722,
    width: "100%",
    bgcolor: "#FFD7A7",
    boxShadow: 24,
    p: 4,
    border: "none",
}

const ModalAddProject = (props) => {

    const [title, setTitle] = React.useState('');

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user)

    const onSaveClick = async () => {
        await dispatch(createProject([user.id , title]))
        props.action(false)
    }

    return (
        <Modal
            open={props.state}
            onClose={() => props.action(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{ textAlign: "center" }}
                >
                    Details
                </Typography>
                <TextInput
                    minHeight={"auto"}
                    label={"Project title"}
                    placeholder={``}
                    action={setTitle}
                />
                <ButtonModal action={onSaveClick} text={"Save"} />
            </Box>
        </Modal>
    )
}

export default ModalAddProject;