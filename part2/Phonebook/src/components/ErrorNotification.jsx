const ErrorNotification = ({message}) => {
    if (message===null) {
        return null
    }
    return (<div className="errorNotify">
        Information of {message} has already been removed from server
    </div>)
}
export default ErrorNotification