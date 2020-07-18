import React, { Component } from 'react'
import styled from 'styled-components';

const InfoRow = styled.div`
    font-size: 1rem;
    color: #b2bac2;
`;

const TitleRow = styled.div`
    margin: .5rem 0 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Title = styled.span`
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.2;
    color: #2e3135;
`;

const DespRow = styled.div`
    margin-bottom: 1rem;
    font-size: 1.08rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Desp = styled.span`
    display: inline-block;
    width: 100%;
`;

const Container = styled.div`
    margin-top: 50px;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
`;

const List = styled.ul`

`;

const Item = styled.li`
    align-items: center;
    padding: 1.5rem 2rem;
    &:first-child {
        border-top: 1px solid rgba(178,186,194,.15);
    }
    &:not(:last-child) {
        border-bottom: 1px solid rgba(178,186,194,.15);
    }
    :hover {
        background-color: rgba(0,0,0,.01);
    }
`;

const InfoTagItem = styled.span`
    &:not(:last-child)::after {
        content: "/";
        margin: 0.2em;
        color: #b2bac2;
    }
`;

const Pager = styled.header`
    height: 50px;

`;

const Controller = styled.span`
    font-size: 12pt;
    line-height: 50px;
    margin-right: 7px;
    color: #b2bac2;
`;

const ControllerButton=styled(Controller)`
    cursor: pointer;
    &:hover{
        color: blue;
    }
`;

const InfoItem = styled.li`
    display: inline;
    font-size: 1rem;
    color: #b2bac2;
    &:not(:last-child)::after {
        content: "·";
        margin: 0.4em;
        color: #b2bac2;
    }
`;

const Right = styled.div`
    float: right;
    height: 100%;
`;

export default class Swiper extends Component {
    render() {
        return (
            <Container>
                <Pager>
                    <Right>
                        <ControllerButton onClick={this.props.prev}>上一页</ControllerButton>
                        <Controller>第{this.props.page}页</Controller>
                        <ControllerButton onClick={this.props.next}>下一页</ControllerButton>
                    </Right>
                </Pager>
                <ul>
                    {
                        this.props.data.map((item) => {
                            var tags = item.tags.map(tag => (<InfoTagItem key={tag}>{tag}</InfoTagItem>))
                            var date = new Date(item.create_time)
                            return (
                                <Item key={item.title}>
                                    <a href={item.link_url} target="_blank" rel="noopener noreferrer">
                                        <div>
                                            <InfoRow>
                                                <List>
                                                    <InfoItem><span>{item.user_name}</span></InfoItem>
                                                    <InfoItem><span>{`${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`}</span></InfoItem>
                                                    <InfoItem>{tags}</InfoItem>
                                                </List>
                                            </InfoRow>
                                            <TitleRow>
                                                <Title>{item.title}</Title>
                                            </TitleRow>
                                            <DespRow>
                                                <Desp>{item.description}</Desp>
                                            </DespRow>
                                        </div>
                                    </a>
                                </Item>
                            )
                        })
                    }
                </ul>
            </Container>
        )
    }
}