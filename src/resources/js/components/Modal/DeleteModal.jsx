import React from "react";
import { useBookContext } from "../../context/context";

export default function DeleteModal({ onConfirmDelete }) {
    const {
        state: { rowDeleteId: id },
        dispatch,
    } = useBookContext();

    function deleteRow() {
        onConfirmDelete();
    }

    return (
        <div
            className="modal fade"
            id="deleteModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="deleteModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteModalLabel">
                            Delete Book
                        </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Would you like to delete this book?
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-dismiss="modal"
                            onClick={() =>
                                dispatch({
                                    type: "SET_ROW_DELETE_ID",
                                    payload: null,
                                })
                            }
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            data-dismiss="modal"
                            onClick={() => {
                                dispatch({
                                    type: "SET_ROW_DELETE_ID",
                                    payload: id,
                                });
                                onConfirmDelete();
                            }}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}