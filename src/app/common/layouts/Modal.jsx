import { Modal } from "@mui/material";

// TODO: CHANGING AUTHOR BY USERNAME
function ModalContainer({ content, shown }) {

    return (
        <Modal open={shown} >
            {content}
        </Modal>
    );
}

export default ModalContainer