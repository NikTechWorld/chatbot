export default function SendMessage() {
    return <div className="card-footer">
        <div className="d-sm-flex align-items-end">
            <textarea className="form-control mb-sm-0 mb-3" data-autoresize placeholder="Type a message" rows={1} defaultValue={""} />
            <button className="btn btn-sm btn-danger-soft ms-sm-2"><i className="fa-solid fa-face-smile fs-6" /></button>
            <button className="btn btn-sm btn-secondary-soft ms-2"><i className="fa-solid fa-paperclip fs-6" /></button>
            <button className="btn btn-sm btn-primary ms-2"><i className="fa-solid fa-paper-plane fs-6" /></button>
        </div>
    </div>
}