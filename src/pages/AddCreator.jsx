import React, {useState} from 'react';
import {supabase} from "../client.js";
import {Link, useNavigate} from "react-router-dom";

async function insertCreator(creator) {

    const { data, error } = await supabase
        .from('creators')
        .insert([
            creator,
        ])
        .select()

}

function AddCreator() {
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        insertCreator(inputs);
        navigate('/');
    }

    return (
        <div className={'add-page'}>

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
                    Provide a link to the creator&apos;s YouTube channel.
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

export default AddCreator;