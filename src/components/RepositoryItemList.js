import React from 'react'
import styled from 'styled-components';

function RepositoryItemList(props) {
  return (
    <Content>
        <strong><a rel="noreferrer" href={props.url} target="_blank">{props.title}</a></strong>
        <p>{props.description}</p>
        <hr />
    </Content>
  )
}

export default RepositoryItemList;

const Content = styled.div`
    margin: 24px 0px;

    strong {
        color: #539BF5;
        font-size: 24px;
        margin: 24px 0px;
    }

    p {
        color: #999999;
        font-size: 12px;
        margin: 24px 0px;
    }
`