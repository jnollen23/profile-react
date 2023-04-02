

function Repo({ src, title, project, repo }) {
    const imgStyle = {
        backgroundImage: `url(${src})`,
        backgroundSize:`cover`,
        backgroundRepeat:`no-repeat`,
        overflow:`hidden`,
        minHeight:`200px`
    }
    return (
        <div className='repo-card col-6 position-relative'>
            <div style={imgStyle}>
            <p className='gx-3 caption'>
                <span className='px-3'>{title}</span>
                <span className='px-3'>
                    <a href={project}>
                        Deployed
                    </a>
                </span>
                <span className='px-3'>
                    <a href={repo}>
                        Repository
                    </a>
                </span>
            </p>
            </div>
        </div>
    );
};

export default Repo;