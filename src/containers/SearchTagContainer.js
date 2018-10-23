import React, { Component } from 'react'
import { connect } from 'react-redux'
import { storeTagChange, sendNewTag } from '../actions'
import {
    Form,
    FormGroup,
    Input,
    Button
} from 'reactstrap';

const SearchTag = ({ dispatch, history, tag, storeTag }) => {
    // console.log(input);
    function handleOnSubmit(e) {

        e.preventDefault();
        if (!storeTag) {
            return;
        }
        dispatch(sendNewTag(storeTag));
        history.push('/photos?tag=' + storeTag);
    };
    function handleChange(e) {

        if (e.target.value !== storeTag) {
            dispatch(storeTagChange(e.target.value));
        }
    };
    return (
        <Form className="navbar-form ml-auto" action="photos" onSubmit={handleOnSubmit} inline >
            <FormGroup>
                <input onChange={handleChange} value={storeTag} type="text" placeholder="Search" name="tag" class="form-control"></input>
            </FormGroup>
            <Button className="fa fa-search"></Button>
        </Form>
    )
}

function mapStateToProps(state) {
    console.log("state:" + state)
    return {
        tag: state.SearchTag.tag,
        storeTag: state.SearchTag.storeTag
    };
}
export default connect(mapStateToProps)(SearchTag)