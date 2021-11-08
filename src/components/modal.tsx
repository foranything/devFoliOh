import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 0;
    .modal {
        position: absolute;
        z-index: 1;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        height: 252px;
        width: 400px;
        box-shadow: rgb(0 0 0 / 9%) 0px 2px 12px 0px;
        background: white;
    }
    .message {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 300px;
        transform: translate(-50%, -50%);
        font-size: 1.5rem;
        color: rgb(52, 58, 64);
        line-height: 1.5;
        font-weight: bold;
    }
    .confirm {
        position: absolute;
        bottom: 15%;
        right: 20%;
        border: none;
        outline: none;
        background: rgb(233, 236, 239);
        color: rgb(73, 80, 87);
    }

    .cancel {
        position: absolute;
        bottom: 15%;
        right: 5%;
        border: none;
        outline: none;
        background: rgb(18, 184, 134);
        color: white;
    }
`;

const Modal = ({
    toggleModal,
    deletePost,
    id,
}: {
    toggleModal: any;
    deletePost: any;
    id: string;
}) => {
    const history = useHistory();
    const onConfirm = () => {
        history.push("/");
        toggleModal(false);
        deletePost(id);
    };

    const onCancel = () => {
        toggleModal(false);
    };
    return (
        <Container>
            <div className="modal">
                <div className="message">정말 삭제하시겠습니까?</div>
                <button className="confirm" onClick={onConfirm}>
                    확인
                </button>
                <button className="cancel" onClick={onCancel}>
                    취소
                </button>
            </div>
        </Container>
    );
};

export default Modal;
