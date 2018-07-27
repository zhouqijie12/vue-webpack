<template>
  <div class="document">
    我是document<br/><br/><br/><br/><br/>
    <p id="abc" style="color:red;">我是锚点</p></div>

</template>

<script>
import data from '@/assets/pro.js'
export default {
    mounted () {
        let province_list = []
        let city_list = []
        let county_list = []
        let {entries} = Object;
        for (let [key, value] of entries(data)) {
           
            if (key === 'province_list') {
                for (let [key2, value2] of entries(value)) {
                    var obj = {}
                    obj.label = value2
                    obj.value = key2
                    obj.children = []
                    province_list.push(obj)
                }
            }
            if (key === 'city_list') {
                for (let [key2, value2] of entries(value)) {
                    var obj = {}
                    obj.label = value2
                    obj.value = key2
                    obj.children = []
                    city_list.push(obj)
                }
            }
            if (key === 'county_list') {
                for (let [key2, value2] of entries(value)) {
                    var obj = {}
                    obj.label = value2
                    obj.value = key2
                    county_list.push(obj)
                }
            }
            
        }

        for (var j=0; j<city_list.length; j++){
            for (var k=0; k<county_list.length; k++){
                if (city_list[j].value.substring(0,2) === county_list[k].value.substring(0,2)){
                    city_list[j].children.push(county_list[k])
                }
            }
        }
        for (var i=0; i<province_list.length; i++){
            for (var j=0; j<city_list.length; j++){
                if (province_list[i].value.substring(0,2) === city_list[j].value.substring(0,2)){
                    province_list[i].children.push(city_list[j])
                }
            }
        }
        console.log(JSON.stringify(province_list,null,2))
    }
}
</script>

<style>
    .document{
        height:2000px;
    }
</style>
