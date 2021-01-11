import { reactive, toRefs } from 'vue'
import axios from 'axios'

function useLoading(url: string) {
    const data = reactive({
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