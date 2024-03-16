import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function DeleteItem() {
    return (
    <>
        <button>
            <FontAwesomeIcon icon={faTrash} />
        </button>

    </>
    )
}

export default DeleteItem