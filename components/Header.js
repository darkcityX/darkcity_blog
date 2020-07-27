import '../public/style/components/header.css';

import { Row, Col, Menu } from 'antd';
import { HomeOutlined, UnorderedListOutlined } from '@ant-design/icons';

const Header = ()=>(
    <div className="header">
        <Row type="flex" align="middle" justify="center">
            {/* 一、头部左侧 */}
            <Col  xs={24} sm={24} md={10} lg={15} xl={12}>
                <span className="header-logo">darkcity_X</span>
                <span className="header-info">砥砺前行</span>
            </Col>
            {/* 二、头部右侧 */}
            <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu mode="horizontal">
                    <Menu.Item key="home">
                        <a href="/">
                            <HomeOutlined />
                            博客首页
                        </a>
                        
                    </Menu.Item>
                    <Menu.Item key="void">
                        <a href="/list">
                            <UnorderedListOutlined />
                            文章列表
                        </a>
                    </Menu.Item>
                    <Menu.Item key="ccc">
                        导航三
                    </Menu.Item>
                </Menu>

            </Col>
        </Row>
    </div>
)

export default Header;