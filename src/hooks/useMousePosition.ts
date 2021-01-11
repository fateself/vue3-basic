import { ref, onMounted, onUnmounted, reactive, toRefs } from "vue"
function useMousePosition() {
    const x = ref(0);
    const y = ref(0);
    const updateMouse = (e: MouseEvent) => {
        x.value = e.pageX;
        y.value = e.pageY;
    };
    onMounted(() => {
        document.addEventListener("click", updateMouse);
    });
    onUnmounted(() => {
        document.removeEventListener("click", updateMouse);
    });
    return { x, y }
}
//使用reactive
// function useMousePosition() {
//     const data = reactive({
//         x: 0,
//         y: 0
//     })
//     const updateMouse = (e: MouseEvent) => {
//         data.x = e.pageX;
//         data.y = e.pageY;
//     };
//     onMounted(() => {
//         document.addEventListener("click", updateMouse);
//     });
//     onUnmounted(() => {
//         document.removeEventListener("click", updateMouse);
//     });
//     return { ...toRefs(data) }
// }
export default useMousePosition