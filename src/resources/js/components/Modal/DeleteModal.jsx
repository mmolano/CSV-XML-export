import React from "react";
import { toast } from "react-toastify";
import { deleteBook } from "../../store/axiosCalls";
import { useBookContext } from "../../context/context";
 
export default function DeleteModal({ url, toastOptions, hasUpdate }) {
    const {
        state: { rowDeleteId: id },
        dispatch,
    } = useBookContext();

    const deleteContent = async () => {
        try {
            await deleteBook(id, url).then((response) => {
                toast.success(response.message, toastOptions);
                hasUpdate();
            });
        } catch (error) {
            toast.error(error.message, toastOptions);
        }
    };

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
                            onClick={deleteContent}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
