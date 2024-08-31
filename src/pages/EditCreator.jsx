import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {supabase} from "../client.js";

async function updateCreator(id, creator) {

    const { data, error } = await supabase
        .from('creators')
        .update(creator)
        .eq('id', id)
        .select()
}

function EditCreator() {
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();
    const params = useParams();

    const [fetchError, setFetchError] = useState(null);
    const [creator, setCreator] = useState(null);

    useEffect(() => {

        const fetchCreator = async () => {
            let {data, err} = await supabase
                .from('creators')
                .select('*')
                .eq('id', parseInt(params.creatorId))

            if (err) {
                setFetchError('Could not fetch');
                setCreator(null);
                console.log(err);
            }
            if (data) {
                setCreator(data[0]);
                setInputs(data[0]);
                setFetchError(null);
            }
        }

        fetchCreator()


    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        updateCreator(params.creatorId, inputs);
        navigate('/');
    }

    return (
        <div className={'edit-page'}>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <br/>
                    <input
                        type="text"
                        name="name"
                        value={inputs.name || ""}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <label>
                    Image
                    <br/>
                    Provide a link to an image of your creator. Be sure to include the https://
                    <br/>
                    <input
                        type="text"
                        name="imageURL"
                        value={inputs.imageURL || ""}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <label>
                    Description
                    <br/>
                    Provide a description of the creator. Who are they? What makes them interesting?
                    <br/>
                    <div id={'textarea-container'}>
                        <textarea
                            name="description"
                            value={inputs.description || ""}
                            onChange={handleChange}

                        />
                    </div>
                </label>
                <br/>
                <label>
                    YouTube
                    <br/>
                    The creator&apos;s YouTube handle (without the @)
                    <br/>
                    <input
                        type="text"
                        name="url"
                        value={inputs.url || ""}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <br/>
                <input type="submit"/>


            </form>
        </div>

    );

}

export default EditCreator;