import {useState} from 'react'
import Head from 'next/head';
import Link from 'next/link'
import Router from 'next/router'

import dynamic from 'next/dynamic';

import {Row, Col, List} from 'antd';
import {ClockCircleOutlined, FolderOutlined, FireOutlined} from '@ant-design/icons';


import Header from '../components/Header';
// import Author from '../components/Author';
const Author = dynamic(import('../components/Author'), {ssr: false});
import Footer from '../components/Footer';

import './../public/style/pages/index.css'

import axios from 'axios';
import servicePath from '../config/apiUrl'

const HomePage = (data) => {
    // console.log( "index 数据：", data );
    const [mylist, setMylist] = useState(data.entity.list);

    return (
        <>
            {/* 头部header设置 */}
            <Head>
                <title>darkcityX</title>
                <link rel="icon" href="/blog.ico" />            
            </Head>

            {/* 一、展示区域头部*/}
            <Header />

            {/* 二、左右两侧布局 */}
            <Row className="comm-main" type="flex" justify="center">
                {/* 主体：左侧布局 */}
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
                    <List
                        size="large"
                        itemLayout="vertical"
                        header={<div className="list-header">
                            <span className="list-header-title">最新日志</span>
                            <span className="list-header-more" onClick={()=>{
                                Router.push('/list')
                            }}>查看更多</span>
                        </div>}
                        dataSource={mylist}
                        renderItem={
                            (item,idx) =>{
                                return idx < 4? (
                                    <List.Item>
                                        <div className="list-title">
                                            <Link href={{pathname:'/details',query:{aid:item.aid}}}>
                                                <a>{item.title}</a>
                                            </Link>
                                        </div>
                                        <div className="list-icon">
                                            <span><ClockCircleOutlined />{item.create_time}</span>
                                            <span><FolderOutlined /> {item.type_name}</span>
                                            <span><FireOutlined /> {item.view_count}人</span>
                                        </div>
                                            <div className="list-context" key={item.aid}>{item.introduce}</div>   
                                    </List.Item>
                                    
                                ) : null;
                            } 
                        }/>

                </Col>
                {/* 主体：右侧布局 */}
                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    
                    <Author />

                </Col>
            </Row>

            {/* 三、页脚 */}
            <Footer />
        </>
    )

}

HomePage.getInitialProps = async () => {
    const promise = new Promise((resolve) => {
        // 'http://localhost:3300/web/article/queryList'
        axios(servicePath.getArticleList).then(
            (res) => {
                resolve(res.data)
            }
        )
    })

    return await promise
}

export default HomePage;
