import React from 'react';

import expert1 from '../../../images/Rooms/ali-morshedlou-WMD64tMfc4k-unsplash.jpg';
import expert2 from '../../../images/Rooms/ben-parker-OhKElOkQ3RE-unsplash.jpg';
import expert3 from '../../../images/Rooms/brooke-cagle-NoRsyXmHGpI-unsplash.jpg';
import expert4 from '../../../images/Rooms/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg';
import expert5 from '../../../images/Rooms/mateus-campos-felipe-Fsgzm8N0hIY-unsplash.jpg';
import expert6 from '../../../images/Rooms/vince-fleming-j3lf-Jn6deo-unsplash.jpg';
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: 'Ali Morshedlou', img: expert1 },
    { id: 2, name: 'Ben Parker', img: expert2 },
    { id: 3, name: 'Brooke Cagle', img: expert3 },
    { id: 4, name: 'Christina Wocintechchat', img: expert4 },
    { id: 5, name: 'mateus-campos', img: expert5 },
    { id: 6, name: 'vince-fleming', img: expert6 },
]

const Experts = () => {
    return (
        <div className='container'>
            <h2 className='text-primary text-center mt-5'>Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;