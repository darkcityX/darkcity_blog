import Head from 'next/head';
import {Row, Col, Breadcrumb, Affix} from 'antd';
import {ClockCircleOutlined, FolderOutlined, FireOutlined} from '@ant-design/icons';

// 引入解析markdow语法插件
import ReactMarkdown from 'react-markdown';

// 引入生成markdow语法导航插件
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';

import Header from '../components/Header';
import Author from '../components/Author';
import Footer from '../components/Footer';

import '../public/style/pages/details.css';

const DetailsPage = () => {

    let markdown = '# P01:课程介绍和环境搭建\n' +
        '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
        '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
        '**这是加粗的文字**\n\n' +
        '*这是倾斜的文字*`\n\n' +
        '***这是斜体加粗的文字***\n\n' +
        '~~这是加删除线的文字~~ \n\n' +
        '\`console.log(111)\` \n\n' +
        '# p02:来个Hello World 初始Vue3.0\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n' +
        '***\n\n\n' +
        '# p03:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '# p04:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '#5 p05:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '# p06:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '# p07:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '``` var a=11; ```'

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
                    <div className="bread-component">
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <a href="/">首页</a>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <a href="/list">文章详情</a>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>xxxx</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>

                    <div className="details-content">
                        <div className="detailed-title">
                            React实战视频教程-技术胖Blog开发(更新08集)
                        </div>

                        <div className="list-icon center">
                            <span><ClockCircleOutlined />2019-06-28</span>
                            <span><FolderOutlined /> 视频教程</span>
                            <span><FireOutlined /> 5498人</span>
                        </div>

                        <div className="detailed-content" >
                            <ReactMarkdown 
                                source={markdown} 
                                escapeHtml={false}/>
                        </div>

                    </div>
                    

                </Col>
                {/* 主体：右侧布局 */}
                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>

                    <Author />

                    {/* 详情页面内容导航 */}
                    <Affix offsetTop={5}>
                        <div className="detailed-nav comm-box">
                            <div className="nav-title">文章目录</div>
                            <MarkNav
                                className="article-menu"
                                source={markdown}
                                ordered={false}/>
                        </div>
                    </Affix>
                </Col>
            </Row>

            {/* 三、页脚 */}
            <Footer />
        </>
    )
}

export default DetailsPage;
