import {useState} from 'react';
import { Card, Tag } from 'antd';
import { PartitionOutlined, TagsOutlined } from '@ant-design/icons';

import '../public/style/components/filterList.css';

const FilterList = props=>{
    const [activeTypeIdx,setActiveTypeIdx] = useState();

    console.log( "FilterList从父组件接收到的数据：：：", props );

    let typeData = [
        {
            tid: "a2ewq0f8-21b3-44de-aeff-fa605d2q42b8",
            type_name: "vue",
            total: 4
        },
        {
            tid: "a2ewq0f8-21b3-48de-aeff-fa6d5d2q42b8",
            type_name: "html&css",
            total: 0
        },
        {
            tid: "a2ewq0f8-21b3-48de-aeff-fa605d2q42b6",
            type_name: "react",
            total: 11
        },
        {
            tid: "a2ewq0f8-21b3-48de-aeff-fa605d2qa2b8",
            type_name: "部署",
            total: 6
        }
    ]

    let tagsData = [
        {
            gid: "78d639c5-c9da-41f6-89cc-acb43cb9e2b0",
            label: "战鼓擂"
        },
        {
            gid: "c02acb23-b15a-48de-90d5-b248cffc289a",
            label: "骚五ssssss"
        },
        {
            gid: "78d639c5-c9da-41f6-89cc-acb4sdb9e2b0",
            label: "洁昊aaaa"
        },
        {
            gid: "78d639c5-c9da-41f6-19cc-acb43cb9e2b0",
            label: "宣文"
        }
    ]

    return (
        <div className="comm-box filter-list-component">
            {/* 一、分类 */}
            <Card 
                className="type-content"
                title={<span className="card-title"><PartitionOutlined />分类</span>}
                size="small"
                bordered={false}>
                {
                    typeData.length > 0 && typeData.map((item,idx) => {
                        return (
                            <div className={["type_card",activeTypeIdx==idx? "active": null].join(" ")} key={item.tid} onClick={()=>{
                                console.log("activeTypeIdx::", activeTypeIdx);
                                if (activeTypeIdx!== idx) {
                                    console.log("类型点击了~~~索引：：：", idx);
                                    // 设置当前激活得类型索引
                                    setActiveTypeIdx(i => idx);
                                }else{
                                    console.log( "重置重置：：", );
                                    setActiveTypeIdx(i => null);
                                }
                                
                            }}>
                                <span className="type-name">{item.type_name}</span>
                                <span className="type-total">{item.total}</span>
                            </div>
                        )
                    })
                }

            </Card>

            {/* 二、标签 */}
            <Card 
                title={<span className="card-title"><TagsOutlined />标签</span>}
                size="small"
                bordered={false}>
                <Tag className="tag-all-card" color="#f50">全部</Tag>
                {
                    tagsData.length > 0 && tagsData.map(item => {
                        return (
                            <Tag className="tag-card" color="#34E7E4" key={item.gid}>{item.label}</Tag>
                        )
                    })
                }

            </Card>

        </div>
    )
};

export default FilterList;