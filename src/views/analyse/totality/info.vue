<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>基本信息</span>
    </div>
    <div class="content">
      <img :src="options[value].url" alt />
      <el-select v-model="value" @change="changePerson" placeholder="请选择飞行员">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <span>姓名：{{options[value].label}}</span>
      <el-divider></el-divider>
      <span>出生日期：1981年6月出生</span>
      <el-divider></el-divider>
      <span>部职别：一大队二中队飞行员</span>
      <el-divider></el-divider>
      <span>飞行时间：1000+小时</span>
      <el-divider></el-divider>
      <span>主要成就：首位蝉联金头盔获得者2014年度“争做新一代革命军人”获得者</span>
    </div>
  </el-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      url: 'http://www.chinanews.com/cr/2014/0102/3383391210.jpg',
      options: [
        {
          value: '0',
          label: '蒋佳冀',
          url: 'http://www.chinanews.com/cr/2014/0102/3995256331.jpg'
        },
        {
          value: '1',
          label: '张三',
          url: 'http://www.chinanews.com/cr/2014/0102/3080679999.jpg'
        },
        {
          value: '2',
          label: '李四',
          url: 'http://www.chinanews.com/cr/2014/0102/3383391210.jpg'
        }
      ],
      value: 0
    }
  },
  computed: {},
  methods: {
    changePerson(val) {
      this.$bus.$emit('changePerson', val)
    }
  },
  mounted() {
    // console.log(this.url)
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  height: 100%;
  .content {
    position: relative;
    line-height: 30px;
    padding-left: 180px;
    .el-select {
      position: absolute;
      top: 200px;
      left: 10px;
      width: 150px;
    }
    .el-divider {
      margin: 5px 0px;
    }
    img {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 150px;
      height: 180px;
    }
  }
}
</style>
