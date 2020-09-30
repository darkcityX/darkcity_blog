import React,{useState} from 'react'
import Link from 'next/link'

import Head from 'next/head';


import {Row, Col, Breadcrumb, List } from 'antd';
import {ClockCircleOutlined, FolderOutlined, FireOutlined} from '@ant-design/icons';

import Header from '../components/Header';
// import Author from '../components/Author';
import FilterList from '../components/FilterList';
import Footer from '../components/Footer';

import axios from 'axios';
import servicePath from '../config/apiUrl'

import '../public/style/pages/list.css'

const ListPage = data => {
    // console.log("列表~：", data.entity.list);
    const [mylist, setMylist] = useState(data.entity.list);
    const [paginationData, setPagination] = useState({
        pageSize: 5,
        currentPage: 1
    })

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
                    {/* 主体左侧布局：面包屑 */}
                    {/* <div className="bread-component">
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <a href="/">首页</a>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>文章列表</Breadcrumb.Item>
                        </Breadcrumb>
                    </div> */}

                    {/* 主体左侧布局：列表 */}
                    <List
                        size="large"
                        itemLayout="vertical"
                        dataSource={mylist}
                        pagination = {
                            {   
                                showSizeChanger: true,
                                showQuickJumper: true,
                                total: mylist.length,
                                // current: paginationData.currentPage,
                                pageSize: paginationData.pageSize,
                                // onChange: currentPage => {
                                //     console.log(currentPage);

                                //     // // Object.assign(paginationData, {current})
                                //     // setPagination(i => Object.assign(i, {
                                //     //     current
                                //     // }));
                                //     // console.log("页码数据：：", paginationData);

                                // },
                                
                            }
                        }
                        renderItem={
                            item => (
                                <List.Item>
                                        <div className="list-title">
                                            <Link href={{pathname:'/details',query:{aid:item.aid}}}>
                                                <a>
                                                    {item.title}
                                                </a>
                                            </Link>   
                                        </div>
                                        <div className="list-icon">
                                            <span><ClockCircleOutlined /> {item.create_time}</span>
                                            <span><FolderOutlined /> {item.type_name}</span>
                                            <span><FireOutlined /> {item.view_count}人</span>
                                        </div>
                                        <div className="list-context">{item.introduce}</div>  
                                </List.Item>
                            )
                        }/>

                </Col>
                {/* 主体：右侧布局 */}
                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    {/* <Author /> */}

                    <FilterList aaa={"aaaa"}/>
                </Col>
            </Row>

            {/* 三、页脚 */}
            <Footer />
            
        </>
    )

}

ListPage.getInitialProps = async ()=>{
    const promise = new Promise((resolve) => {
        axios(servicePath.getArticleList).then(
            (res) => {
                resolve(res.data)
            }
        )
    })

    return await promise;
}

export default ListPage;
