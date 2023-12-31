import React from "react";
import { useBookContext } from "../../context/context";

export default function TableItem({ id, title, author }) {
    const { dispatch } = useBookContext();

    return (
        <tr data-id={`cy-table-row-${id}`}>
            <td data-id={`cy-table-item-title-${id}`}>{title}</td>
            <td data-id={`cy-table-item-author-${id}`}>{author}</td>
            <td>
                <button
                    className="btn btn-success me-2 m-1"
                    data-toggle="modal"
                    data-target="#editModal"
                    onClick={() =>
                        dispatch({ type: "SET_ROW_EDIT_ID", payload: id })
                    }
                >
                    Edit
                </button>
                <button
                    className="btn btn-danger me-2 m-1"
                    data-toggle="modal"
                    data-target="#deleteModal"
                    onClick={() =>
                        dispatch({ type: "SET_ROW_DELETE_ID", payload: id })
                    }
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}
