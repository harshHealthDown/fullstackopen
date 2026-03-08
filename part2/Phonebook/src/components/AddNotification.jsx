const AddNotification = ({message}) => {
    if (message===null) {
        return null
    }
    return (
        <div className="addNotify">Added {message}</div>
    )
}

export default AddNotification