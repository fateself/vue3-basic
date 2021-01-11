import { reactive, toRefs } from 'vue'
import axios from 'axios'

function useLoading<T>(url: string) {
    const data: { result: T | null; isloading: boolean; loaded: boolean; error: any } = reactive({
        isloading: true,
        loaded: false,
        result: null,
        error: null
    })
    axios.get(url).then((res) => {
        data.isloading = false
        data.loaded = true
        data.result = res.data
    })
        .catch((e) => {
            data.error = e
        })
    return {
        ...toRefs(data)
    }
}
export default useLoading