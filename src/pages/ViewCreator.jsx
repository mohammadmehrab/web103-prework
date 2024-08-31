import React, {useEffect, useState} from 'react';
import CreatorCard from "../components/CreatorCard.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {supabase} from "../client.js";



function ViewCreator() {

    let params = useParams();
    const navigate = useNavigate();
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

    const deleteCreator = async () => {

        const { error } = await supabase
            .from('creators')
            .delete()
            .eq('id', parseInt(params.creatorId));

        navigate('/');

    }
    
    return (
        <div className={'creator-page'}>
            {fetchError && (<p>{fetchError}</p>)}
            {creators && <CreatorCard creator={creators.filter((creator) => creator.id === parseInt(params.creatorId))[0]}/>}
            <button id={'delete-button'} onClick={deleteCreator}>Delete Creator</button>
        </div>
    )
    
}

export default ViewCreator;