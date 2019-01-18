import getters from "@/common/store/getters";
export default {
    requestBookListData(state) {
        const {
            pageIndex,
            pageSize,
            keyword,
        } = state.book;
        const data = {
            pageIndex,
            pageSize,
        };
        if (keyword.length) {
            data.keyword = keyword;
        }
        return data;
    },
    ...getters,
}