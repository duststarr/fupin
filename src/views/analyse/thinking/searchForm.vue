<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="单位/人员">
      <el-cascader
        v-model="value"
        :options="options"
        @change="handleChange"
        :props="{ checkStrictly: true }"
      ></el-cascader>
    </el-form-item>
    <!-- <el-form-item label="训练课目">
      <el-select v-model="form.region" placeholder="请选择训练课目">
        <el-option label="课目一" value="shanghai"></el-option>
        <el-option label="课目二" value="beijing"></el-option>
      </el-select>
    </el-form-item>-->
    <el-form-item label="时间范围">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="统计指标">
      <el-radio-group v-model="form.type">
        <el-radio style="display:block;line-height:40px" :label="0">按月份统计</el-radio>

        <el-radio style="display:block;line-height:40px" :label="1">按不同课目统计</el-radio>

        <el-radio style="display:block;line-height:40px" :label="2">按不同训练阶段统计</el-radio>
      </el-radio-group>
    </el-form-item>
    <!-- <el-form-item label="即时配送">
      <el-switch v-model="form.delivery"></el-switch>
    </el-form-item>-->

    <el-form-item>
      <el-button type="primary" @click="onSubmit">搜索</el-button>
      <el-button>重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: 0,
        resource: '',
        desc: ''
      },
      value: '',
      options: [
        {
          value: 'zhinan',
          label: '一大队',
          children: [
            {
              value: 'shejiyuanze',
              label: '一中队',
              children: [
                {
                  value: 'yizhi',
                  label: '张三'
                },
                {
                  value: 'fankui',
                  label: '李四'
                },
                {
                  value: 'xiaolv',
                  label: '王五'
                },
                {
                  value: 'kekong',
                  label: '赵六'
                }
              ]
            },
            {
              value: 'daohang',
              label: '二中队',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '张山'
                },
                {
                  value: 'dingbudaohang',
                  label: '赵啸虎'
                }
              ]
            }
          ]
        },
        {
          value: 'zujian',
          label: '二大队'
        },
        {
          value: 'ziyuan',
          label: '三大队'
        }
      ]
    }
  },
  methods: {
    onSubmit() {
      this.$bus.$emit('onsearch', this.form)
      // console.log(this.form)
      // console.log('submit!')
    },
    handleChange(value) {
      console.log(value)
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
