<template>
  <el-table
    :data="rank.list"
    height="100%"
  >
    <el-table-column
      v-for="(item,index) in tableColumns"
      :prop="item.prop"
      :label="item.label"
      :key="index"
      align="center"
    />
  </el-table>
</template>

  <script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    tableColumns: [
      {
        label: "名次",
        prop: "position"
      },
      {
        label: "姓名",
        prop: "username"
      },
      {
        label: "平均时间",
        prop: "time"
      }
    ]
  }),
  mounted() {
    this.getData();
  },
  methods: {
    getData(){
      this.$emit('get-data');
    }
  },
  computed: {
    ...mapState(["rank"])
  }
};
</script>