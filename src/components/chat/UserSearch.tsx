export default function UserSearch() {
    return <>{/* Search chat START */}
        <form className="position-relative">
            <input className="form-control py-2" type="search" placeholder="Search for chats" aria-label="Search" />
            <button className="btn bg-transparent text-secondary px-2 py-0 position-absolute top-50 end-0 translate-middle-y" type="submit">
                <i className="bi bi-search fs-5" />
            </button>
        </form>
        {/* Search chat END */}</>
}