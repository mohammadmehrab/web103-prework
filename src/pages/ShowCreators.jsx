import {useEffect, useState} from 'react';
import CreatorCard from "../components/CreatorCard.jsx";
import {supabase} from "../client.js";

function ShowCreators() {

    const [fetchError, setFetchError] = useState(null);
    const [creators, setCreators] = useState(null);

    useEffect(() => {

        const fetchCreators = async () => {
            let {data, err} = await supabase
                .from('creators')
                .select('*');

            if (err) {
                setFetchError('Could not fetch');
                setCreators(null);
                console.log(err);
            }
            if (data) {
                setCreators(data);
                setFetchError(null);
            }
        }

        fetchCreators()


    }, []);

    return (
        <div className={'page home'}>
            {fetchError && (<p>{fetchError}</p>)}
            {creators && creators.length === 0 && (<h2>No creators yet :(</h2>)}
            {creators && (
                <div className='creators'>
                    {creators.sort((a, b) => (a.id > b.id) ? 1 : (a.id < b.id) ? -1 : 0).map(creator => (
                        <CreatorCard key={creator.id} creator={creator}/>
                    ))}
                </div>
            )}
        </div>
    );
}


export default ShowCreators;