import { Button, Toast } from "react-bootstrap"
import playIcon from "../../assets/play-btn.svg"
import editIcon from "../../assets/pencil.svg"
import deleteIcon from "../../assets/trash.svg"
import { PostContext } from "../../contexts/PostContext"
import { useContext } from "react"

const ActionButtons = ({ url, _id }) => {
    const { deletePost, updatePost, setShowToast } = useContext(PostContext)

    const handleUpdate = () => {}

    return (
        <>
            <Button className="post-button" href={url} target="_blank">
                <img src={playIcon} alt="play" width="32" height="32" />
            </Button>
            <Button className="post-button">
                <img src={editIcon} alt="edit" width="24" height="24" />
            </Button>
            <Button className="post-button" onClick={() => deletePost(_id)}>
                <img src={deleteIcon} alt="delete" width="24" height="24" />
            </Button>
        </>
    )
}

export default ActionButtons
