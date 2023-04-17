import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'

/**
 * 数据懒加载函数
 * @param {Element} target - Dom对象
 * @param {Function} apiFn - API函数
 */
export const useLazyData = (apiFn) => {
  const target = ref(null)
  const result = ref([])
  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        stop()
        // 调用API获取数据
        apiFn().then(data => {
          result.value = data.result
        }, err => {
          console.log(err, '数据获取失败')
        })
      }
    },
    // 配置选项，相交的比例大于0就触发
    {
      threshold: 0
    }
  )
  // 返回--->数据（dom,后台数据）
  return { target, result }
}
