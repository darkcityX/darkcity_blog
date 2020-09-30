import Head from 'next/head';
import dynamic from 'next/dynamic';

import {Row, Col, Breadcrumb, Affix} from 'antd';
import {ClockCircleOutlined, FolderOutlined, FireOutlined} from '@ant-design/icons';

import axios from 'axios'
import servicePath from '../config/apiUrl'

// // 引入解析markdow语法插件
// import ReactMarkdown from 'react-markdown';

// // 引入生成markdow语法导航插件
// import MarkNav from 'markdown-navbar';
// import 'markdown-navbar/dist/navbar.css';


import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';

import Tocify from '../components/tocify.tsx'



import Header from '../components/Header';
const Author = dynamic(import('../components/Author'), {
    ssr: false
});
import Footer from '../components/Footer';

import '../public/style/pages/details.css';

const DetailsPage = (data) => {

    // console.log( "详情页初始数据", data );

    /*----------- markdown 选项设置： 开始 ----------------*/ 
    const renderer = new marked.Renderer();

    const tocify = new Tocify()
    renderer.heading = function (text, level, raw) {
        const anchor = tocify.add(text, level);
        return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
    };

    marked.setOptions({
        renderer: renderer,
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        }
    });
    let html = marked(data.content);
    /*--------- markdown 选项设置： 结束 ----------------*/   

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
                                <a href="/list">文章列表</a>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>{data.title}</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>

                    <div className="details-content">
                        <div className="detailed-title">
                            { data.title }
                        </div>

                        <div className="list-icon center">
                            <span><ClockCircleOutlined />{data.create_time}</span>
                            <span><FolderOutlined /> {data.type_name}</span>
                            <span><FireOutlined /> {data.view_count}人</span>
                        </div>

                        <div className="detailed-content" dangerouslySetInnerHTML = {{__html:html}} >
                            {/* <ReactMarkdown 
                                source = {
                                    markdown
                                }
                                escapeHtml={false}/> */}
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
                                {tocify && tocify.render()}
                            {/* <MarkNav
                                className="article-menu"
                                source={markdown}
                                ordered={false}/> */}
                        </div>
                    </Affix>
                </Col>
            </Row>

            {/* 三、页脚 */}
            <Footer />
        </>
    )
}

DetailsPage.getInitialProps = async (req) => {
    let aid = req.query.aid;

    const promise = new Promise(resolve => {
        // `http://localhost:3300/web/article/queryDetails?aid=${aid}`
        axios(`${servicePath.getArticleDetails}${aid}`)
            .then(res=>{
                resolve(res.data.entity);
            })
    });

    return await promise;
}

export default DetailsPage;
