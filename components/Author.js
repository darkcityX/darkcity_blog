import { Avatar, Divider, Tag } from 'antd';
import { UserOutlined, GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';

import '../public/style/components/avater.css';

const Author = () => (
    <div className="comm-box author-component">
        {/* 一、头像 */}
        <div className="bloger-avater">
            <Avatar shape="square" size={120} icon={<UserOutlined />} src="/static/images/cc.jpg"/>
        </div>

        

        {/* 二、标签 */}
        <div className="bloger-tags">
            <Tag color="magenta">2年coder</Tag>
            <Tag color="volcano">移动端</Tag>
            <Tag color="orange">PC端</Tag>
            <Tag color="green">react</Tag>
            <Tag color="cyan">vue</Tag>
            <Tag color="blue">node</Tag>
        </div>

        {/* 二、简介 */}
        <div className="bloger-introduction">
            <Divider>社交账号</Divider>
            <Avatar size={28} icon={<GithubOutlined />} className="account"  />
            <Avatar size={28} icon={<QqOutlined />}  className="account" />
            <Avatar size={28} icon={<WechatOutlined />}  className="account"  />
        </div>
    </div>
)

export default Author;