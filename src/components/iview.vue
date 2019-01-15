<template>
    <div>
        <Table border ref="selection" :columns="columns4" :data="data1"></Table>
        <Button @click="handleSelectAll(true)">Set all selected</Button>
        <Button @click="handleSelectAll(false)">Cancel all selected</Button>
        <Poptip trigger="hover" title="Title" content="content">
            <Button>Hover</Button>
        </Poptip>
        <tb-heading :level="2">
            <a href="#">Hello world!</a>
        </tb-heading>
    </div>
    
</template>
<script>
import Vue from 'vue'
Vue.component('tb-heading', {
    render: function(createElement) {
        return createElement(
            'h' + this.level,    // tag name 标签名称
            this.$slots.default  // 组件的子元素
        )
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    }
});
export default{
    data(){
        return {
            columns4: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: 'Name',
                    key: 'name',
                    render: (h, params) => {
                    　　return h('div', [
                    　　　　h('Tooltip', {
                    　　　　    props: { placement: 'top-start' }
                    　　　　}, [
                    　　　　h('span', {
                    　　　　　　style: {
                    　　　　　　　　display: 'inline-block',
                    　　　　　　　　width: params.column._width*0.9+'px',
                    　　　　　　　　overflow: 'hidden',
                    　　　　　　　　textOverflow: 'ellipsis',
                    　　　　　　　　whiteSpace: 'nowrap',
                    　　　　　　},
                    　　　　　　}, params.row.name),
                    　　　　　　h('span', {
                    　　　　　　　　slot: 'content',
                    　　　　　　　　style: { whiteSpace: 'normal', wordBreak: 'break-all' }
                    　　　　　　},params.row.name)
                    　　　　])
                    　　])
                    }
                },
                {
                    title: 'Age',
                    key: 'age'
                },
                {
                    title: 'Address',
                    key: 'address'
                }
            ],
            data1: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01'
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
        }
    },
    methods: {
        handleSelectAll (status) {
            this.$refs.selection.selectAll(status);
        }
    }
}
</script>
