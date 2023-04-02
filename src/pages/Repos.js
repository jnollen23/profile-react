import Repo from "../components/repo";
import proj2 from '../assets/images/nottingham.png';
import proj1 from '../assets/images/GroupProj1.jpg';
import notey from '../assets/images/notey.png';

function Repos() {
    return (
        <div class='container app-body py-5'>
            <div className='row gx-5 gy-5'>
                <Repo src={proj2}
                    title='Nottingham'
                    project='https://jnollen23.github.io/GamblersAnonymous/'
                    repo='https://github.com/jnollen23/Nottingham'
                />
                <Repo src={proj1}
                    title='Online Casino'
                    project='https://nottingham.herokuapp.com/'
                    repo='https://github.com/jnollen23/GamblersAnonymous'
                />
                <Repo src={notey}
                    title='Note Taker'
                    project='https://notey.herokuapp.com/'
                    repo='https://github.com/jnollen23/notey'
                />
                <Repo src={proj2}
                    title='Nottingham'
                    project='https://nottingham.herokuapp.com/'
                    repo='https://github.com/jnollen23/Nottingham'
                />
                <Repo src={proj2}
                    title='Nottingham'
                    project='https://nottingham.herokuapp.com/'
                    repo='https://github.com/jnollen23/Nottingham'
                />
                <Repo src={proj2}
                    title='Nottingham'
                    project='https://nottingham.herokuapp.com/'
                    repo='https://github.com/jnollen23/Nottingham'
                />
            </div>
        </div>
    )
};

export default Repos;