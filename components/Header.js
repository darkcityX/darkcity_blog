import Link from 'next/link'

import '../public/style/components/header.css';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';

import { Row, Col, Menu } from 'antd';
import { HomeOutlined, UnorderedListOutlined, BoldOutlined } from '@ant-design/icons';

const Header = ()=>{
    const getEnter = (e) => {
        switch (e.index) {
            case 0:
                return {
                    rotate: 90,
                        opacity: 0,
                        y: -60
                };
            case 10:
            case 1:
                return {
                    y: -60,
                        x: -10,
                        opacity: 0
                };
            case 9:
            case 2:
                return {
                    y: -60,
                        x: 20,
                        opacity: 0
                };
            case 3:
                return {
                    y: 60,
                        opacity: 0
                };
            case 8:
            case 4:
                return {
                    x: 30,
                        opacity: 0
                };
            case 5:
                return {
                    enter: [{
                                scale: 2,
                                opacity: 0,
                                type: "set"
                            },
                            {
                                scale: 1.2,
                                opacity: 1,
                                duration: 300
                            },
                            {
                                scale: 0.9,
                                duration: 200
                            },
                            {
                                scale: 1.05,
                                duration: 150
                            },
                            {
                                scale: 1,
                                duration: 100
                            }
                        ],
                        leave: {
                            opacity: 0,
                            scale: 0
                        }
                };
            case 6:
                return {
                    scale: 0.8,
                        x: 30,
                        y: -10,
                        opacity: 0
                };
            case 7:
                return {
                    scale: 0.8,
                        x: 30,
                        y: 10,
                        opacity: 0
                };
            default:
                return {
                    opacity: 0
                };
        }
    };

    return (
        <div className="header">
            <Row type="flex" align="middle" justify="center">
                {/* 一、头部左侧 */}
                <Col  xs={24} sm={24} md={10} lg={15} xl={12}>
                    {/* <span className="header-logo"> */}
                        <Texty className="header-logo">darkcity_X</Texty>
                        <Texty 
                            className="header-info" 
                            type="left"
                            mode="smooth"
                            delay={800}>
                                砥砺前行
                        </Texty>
                        {/* </span> */}
                    {/* <span className="header-info">砥砺前行</span> */}
                </Col>
                {/* 二、头部右侧 */}
                <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal">
                        <Menu.Item key="home">
                            <a href="/">
                                <HomeOutlined />
                                <Texty 
                                    enter={getEnter} 
                                    delay={300}
                                    interval={100}
                                    style={{"display":"inline-block"}}>
                                    博客首页
                                </Texty>
                            </a>
                            
                        </Menu.Item>
                        <Menu.Item key="void">
                            <a href="/list">
                                <UnorderedListOutlined />
                                <Texty 
                                    enter={getEnter} 
                                    delay={400}
                                    interval={300}
                                    style={{"display":"inline-block"}}>
                                    文章列表
                                </Texty>
                            </a>
                        </Menu.Item>
                        <Menu.Item key="ccc">
                            <BoldOutlined />
                            <Texty 
                                enter={getEnter} 
                                delay={500}
                                interval={500}
                                style={{"display":"inline-block"}}>
                                博主相关
                            </Texty>
                        </Menu.Item>
                    </Menu>

                </Col>
            </Row>
        </div>
    )
}

export default Header;